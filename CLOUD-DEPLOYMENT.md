# 🚀 API Integration & Cloud Deployment Guide

## Overview
This guide explains how to connect the Aplikasi Wisata to a backend API and deploy to cloud platforms.

---

## Part 1: Backend API Integration

### Current Implementation (Static Data)
```jsx
// src/pages/Home.jsx
useEffect(() => {
  setWisata(wisataData.wisata);  // Using local JSON
}, []);
```

### Future: REST API Integration

#### Step 1: Create API Service

**File: `src/services/api.js`**
```javascript
// API Configuration
const API_BASE_URL = process.env.VITE_API_URL || 'https://api.wisata.com';

// Get all wisata
export const fetchWisata = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/wisata`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Get wisata by ID
export const fetchWisataById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/wisata/${id}`);
    if (!response.ok) throw new Error('Failed to fetch');
    return await response.json();
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Search wisata
export const searchWisata = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/wisata/search?q=${query}`);
    if (!response.ok) throw new Error('Failed to search');
    return await response.json();
  } catch (error) {
    console.error('Search Error:', error);
    throw error;
  }
};
```

#### Step 2: Update Components

**Before:**
```jsx
useEffect(() => {
  setWisata(wisataData.wisata);
}, []);
```

**After:**
```jsx
import { fetchWisata } from '../services/api';

useEffect(() => {
  const loadWisata = async () => {
    try {
      setLoading(true);
      const data = await fetchWisata();
      setWisata(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  loadWisata();
}, []);
```

#### Step 3: Add Error Handling & Loading States

```jsx
const [wisata, setWisata] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error}</div>;
```

---

## Part 2: Cloud Deployment

### Option 1: Vercel (Recommended)

**Why Vercel?**
- ✅ Free tier for projects
- ✅ Auto-deploy from GitHub
- ✅ Edge network (fast CDN)
- ✅ Serverless functions support
- ✅ Zero-config deployment

**Setup:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourname/aplikasi-wisata
git push -u origin main
```

2. **Connect to Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
# Select your project
# Follow prompts
```

3. **Configure Environment Variables**
```
Dashboard → Settings → Environment Variables

VITE_API_URL=https://api.wisata.com
VITE_ENABLE_ANALYTICS=true
```

4. **Deploy**
```bash
vercel --prod
```

**Result:**
- 🎉 Automatic deployments on every push
- 🎉 Live URL: `https://aplikasi-wisata.vercel.app`
- 🎉 Preview URLs for pull requests

### Option 2: Netlify

**Setup:**

1. **Connect GitHub**
```
https://app.netlify.com → New site from Git
```

2. **Configure Build**
```
Build command: npm run build
Publish directory: dist
```

3. **Deploy Settings**
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[env]
  [env.production]
    VITE_API_URL = "https://api.wisata.com"
```

### Option 3: Azure Static Web Apps

**Setup:**

```bash
# Install Azure CLI
brew install azure-cli

# Login
az login

# Create resource group
az group create -n wisata-rg -l eastus

# Create static web app
az staticwebapp create \
  -n aplikasi-wisata \
  -g wisata-rg \
  -s https://github.com/yourname/aplikasi-wisata \
  -l eastus \
  -b main \
  --app-location "/" \
  --output-location "dist"
```

### Option 4: Docker Containerization

**File: `Dockerfile`**
```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Runtime stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

**Build & Run:**
```bash
# Build image
docker build -t aplikasi-wisata:latest .

# Run container
docker run -p 3000:3000 aplikasi-wisata:latest

# Push to Docker Hub
docker tag aplikasi-wisata:latest yourname/aplikasi-wisata
docker push yourname/aplikasi-wisata
```

---

## Part 3: Environment Configuration

### .env File Template

**`.env.local`** (Development)
```
VITE_API_URL=http://localhost:3001
VITE_ENABLE_ANALYTICS=false
VITE_LOG_LEVEL=debug
```

**`.env.production`** (Production)
```
VITE_API_URL=https://api.wisata.com
VITE_ENABLE_ANALYTICS=true
VITE_LOG_LEVEL=info
```

### Using Environment Variables

```jsx
// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL;
const LOG_LEVEL = import.meta.env.VITE_LOG_LEVEL;

export const fetchWisata = async () => {
  if (LOG_LEVEL === 'debug') {
    console.log(`Fetching from: ${API_URL}/wisata`);
  }
  
  const response = await fetch(`${API_URL}/wisata`);
  return response.json();
};
```

---

## Part 4: Performance Optimization

### Code Splitting

```jsx
// Dynamic imports for routes
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Suspense>
  );
}
```

### Image Optimization

```jsx
// Lazy load images
<img 
  src={wisata.gambar}
  alt={wisata.nama}
  loading="lazy"
  width="600"
  height="400"
/>
```

### API Caching

```jsx
// src/hooks/useWisata.js
import { useEffect, useState } from 'react';

const cache = {};

export const useWisata = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (cache[id]) {
      setData(cache[id]);
      setLoading(false);
      return;
    }

    fetchWisataById(id).then(result => {
      cache[id] = result;
      setData(result);
      setLoading(false);
    });
  }, [id]);

  return { data, loading };
};
```

---

## Part 5: CI/CD Pipeline

### GitHub Actions Workflow

**File: `.github/workflows/deploy.yml`**
```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run linter
        run: npm run lint
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        if: github.event_name == 'push' && github.ref == 'refs/heads/main'
        run: vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```

---

## Part 6: Monitoring & Analytics

### Add Google Analytics

```jsx
// src/services/analytics.js
export const initAnalytics = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
};

// Track page views
export const trackPageView = (pageName) => {
  gtag('event', 'page_view', {
    page_path: pageName,
    page_title: pageName,
  });
};
```

### Error Tracking (Sentry)

```jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://xxx@xxx.ingest.sentry.io/xxx",
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

---

## Part 7: Database Integration

### Example: Firebase

```javascript
// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const fetchWisata = async () => {
  const querySnapshot = await getDocs(collection(db, "wisata"));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
```

---

## Deployment Checklist

- [ ] All tests passing
- [ ] No console errors
- [ ] Environment variables configured
- [ ] API endpoints verified
- [ ] Images optimized
- [ ] SEO meta tags added
- [ ] Analytics configured
- [ ] Error tracking enabled
- [ ] HTTPS enforced
- [ ] Cache headers configured
- [ ] Security headers added
- [ ] Performance metrics checked

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/)
- [Docker Documentation](https://docs.docker.com)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Last Updated**: 2024  
**Version**: 1.0.0
