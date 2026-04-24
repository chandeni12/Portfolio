# Portfolio Website

A modern portfolio website with GitHub and WakaTime stats integration.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables

Create a `.env` file in the root directory with:
```env
GITHUB_TOKEN=your_github_personal_access_token_here
WAKATIME_API_KEY=your_wakatime_api_key_here
```

**Get your tokens:**
- **GitHub Token**: Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
  - Create a token with `public_repo` scope
- **WakaTime API Key**: Get from [WakaTime Settings → API Key](https://wakatime.com/settings/api-key)

### 3. Run the Development Server

**Option 1: Run everything (Frontend + API Server) - Recommended**
```bash
npm run dev:full
```
This starts both:
- Frontend (Vite): http://localhost:5173
- API Server: http://localhost:3001

**Option 2: Run separately (in different terminals)**

Terminal 1 - API Server:
```bash
npm run dev:server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### 4. Open in Browser

Visit: **http://localhost:5173**

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend only (Vite dev server) |
| `npm run dev:server` | Start API server only (Express) |
| `npm run dev:full` | Start both frontend and API server concurrently |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🏗️ Project Structure

```
portfolio/
├── api/                  # Vercel serverless functions (production)
│   ├── github/
│   │   └── stats.js     # GitHub stats API
│   └── wakatime/
│       └── stats.js      # WakaTime stats API
├── src/
│   ├── components/      # React components
│   └── pages/           # Page components
├── dev-server.js        # Local development API server
├── .env                 # Environment variables (not in git)
└── vercel.json          # Vercel configuration
```

---

## 🔧 Troubleshooting

### Port already in use
If port 5173 or 3001 is already in use:
```bash
# Kill the process using the port (macOS/Linux)
lsof -ti:5173 | xargs kill -9
lsof -ti:3001 | xargs kill -9
```

### Environment variables not loading
- Make sure `.env` file is in the root directory
- Restart the dev server after changing `.env`
- For Vercel: Add environment variables in Vercel dashboard

### API errors
- Verify your GitHub token has `public_repo` scope
- Check WakaTime API key is correct
- Ensure tokens are in `.env` file

---

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `GITHUB_TOKEN`
   - `WAKATIME_API_KEY`
4. Deploy!

The `/api` folder contains serverless functions that automatically work on Vercel.

---

## 📦 Dependencies

- **Frontend**: React, Vite, TailwindCSS, Framer Motion
- **Backend**: Express (dev), Vercel Serverless Functions (production)
- **APIs**: GitHub GraphQL API, WakaTime API

---

## 📄 License

Private project - All rights reserved
