export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // WakaTime API credentials from environment variables
    const WAKATIME_API_KEY = process.env.WAKATIME_API_KEY;
    
    if (!WAKATIME_API_KEY) {
      return res.status(500).json({ 
        error: 'WAKATIME_API_KEY not configured',
        details: 'Please add WAKATIME_API_KEY to your environment variables'
      });
    }
    
    const { range = 'last_7_days' } = req.query;
    
    // WakaTime API uses Basic auth: base64(api_key:)
    const authString = Buffer.from(`${WAKATIME_API_KEY}:`).toString('base64');
    
    // WakaTime API endpoints - 'today' and 'yesterday' use summaries endpoint
    let endpoint;
    let useSummaries = false;
    
    if (range === 'today') {
      const today = new Date();
      const todayStr = today.toISOString().split('T')[0];
      endpoint = `https://wakatime.com/api/v1/users/current/summaries?start=${todayStr}&end=${todayStr}`;
      useSummaries = true;
    } else if (range === 'yesterday') {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      endpoint = `https://wakatime.com/api/v1/users/current/summaries?start=${yesterdayStr}&end=${yesterdayStr}`;
      useSummaries = true;
    } else {
      const endpoints = {
        'last_7_days': 'https://wakatime.com/api/v1/users/current/stats/last_7_days',
        'last_30_days': 'https://wakatime.com/api/v1/users/current/stats/last_30_days',
        'all_time': 'https://wakatime.com/api/v1/users/current/stats/all_time'
      };
      endpoint = endpoints[range] || endpoints['last_7_days'];
    }
    
    const response = await fetch(endpoint, {
      headers: {
        'Authorization': `Basic ${authString}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      
      // Handle rate limiting (429) gracefully
      if (response.status === 429) {
        // Return empty data gracefully instead of error
        return res.status(200).json({
          data: {
            grand_total: { total_seconds: 0 },
            editors: [],
            languages: []
          }
        });
      }
      // Return empty data for today/yesterday if not available
      if ((range === 'today' || range === 'yesterday') && response.status === 400) {
        return res.status(200).json({
          data: {
            grand_total: { total_seconds: 0 },
            editors: [],
            languages: []
          }
        });
      }
      throw new Error(`WakaTime API error: ${response.status} - ${errorText.substring(0, 200)}`);
    }

    let data = await response.json();
    
    // Transform summaries data to match stats format
    if (useSummaries && data.data && Array.isArray(data.data) && data.data.length > 0) {
      const summary = data.data[0];
      data = {
        data: {
          grand_total: summary.grand_total || { total_seconds: 0 },
          editors: summary.editors || [],
          languages: summary.languages || []
        }
      };
    } else if (useSummaries && (!data.data || data.data.length === 0)) {
      data = {
        data: {
          grand_total: { total_seconds: 0 },
          editors: [],
          languages: []
        }
      };
    }
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch WakaTime stats',
      details: error.message 
    });
  }
}

