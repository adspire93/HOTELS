# Hotel Leads Dashboard

A beautiful, responsive dashboard for managing hotel leads with status tracking and comments.

## Features

- Single lead per card layout
- Search and filter functionality
- Status management (Pending, Contacted, Interested, Converted)
- Comments system for each lead
- Persistent storage using localStorage
- Responsive design

## Deploy to Vercel

### Method 1: Deploy via GitHub (Recommended)

1. **Push your code to GitHub** (already done)

2. **Go to [Vercel](https://vercel.com)**
   - Sign up or log in with your GitHub account

3. **Import your project:**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose the `adspire93/HOTELS` repository
   - Click "Import"

4. **Configure the deployment:**
   - Framework Preset: Select "Other"
   - Root Directory: Leave as `./`
   - Build Command: Leave empty
   - Output Directory: Leave as `./`
   - Click "Deploy"

5. **Done!** Vercel will provide you with a live URL

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd /path/to/HOTELS
   vercel --prod
   ```

4. Follow the prompts and your site will be live!

### Method 3: Drag and Drop

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Drag and drop your project folder
4. Click "Deploy"

## Local Development

Simply open `dashboard.html` in your web browser. The dashboard will load data from `hyderabad_hotels_20251114_200657.json`.

## Data Source

The dashboard uses `hyderabad_hotels_20251114_200657.json` which contains hotel information including:
- Hotel names and ratings
- Contact information (phone, email, website)
- Addresses
- Star segments
- Review counts

## Technologies Used

- Pure HTML, CSS, and JavaScript
- No external dependencies
- LocalStorage for data persistence
