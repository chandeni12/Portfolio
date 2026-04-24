# Vercel Deployment Setup

## Required Environment Variables

Add these environment variables in your Vercel dashboard:

### 1. GitHub API Token
```
GITHUB_TOKEN=your_github_personal_access_token
```
- Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- Create a token with `public_repo` scope (required for repository access)
- **Important**: The token must have access to read public repository data
- The token is used to:
  - Fetch repository statistics via REST API
  - Fetch **REAL contribution counts** via GraphQL API (past year)
- Add it in Vercel: Settings → Environment Variables

### 2. WakaTime API Key
```
WAKATIME_API_KEY=your_wakatime_api_key_here
```
- Get your API key from: https://wakatime.com/settings/api-key
- Add it in Vercel: Settings → Environment Variables

## How to Add Environment Variables in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add each variable:
   - **Key**: `GITHUB_TOKEN`
   - **Value**: Your GitHub token
   - **Environment**: Production, Preview, Development (select all)
5. Repeat for `WAKATIME_API_KEY`
6. Click **Save**
7. **Redeploy** your application for changes to take effect

## Vercel Configuration

Your `vercel.json` is already configured correctly for:
- ✅ Single Page Application routing
- ✅ API routes in `/api` folder
- ✅ Cache control headers

## API Endpoints

- `/api/github/stats?username=Nishal77` - GitHub stats
- `/api/wakatime/stats?range=today` - WakaTime today
- `/api/wakatime/stats?range=yesterday` - WakaTime yesterday

## Important Notes

- ✅ `.env` file is in `.gitignore` - will NOT be committed
- ✅ All console logs removed from production code
- ✅ API endpoints are production-ready
- ✅ Rate limiting handled gracefully
- ✅ Errors handled silently in background

## After Adding Environment Variables

1. Go to **Deployments** tab
2. Click the **"..."** menu on the latest deployment
3. Click **Redeploy**
4. Your app will rebuild with the new environment variables

