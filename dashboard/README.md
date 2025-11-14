# Hyderabad Hotels Sales Dashboard

A modern, card-style sales dashboard for managing Hyderabad hotel leads with comprehensive contact information and filtering capabilities.

## Features

- **Statistics Cards**: Quick overview of total hotels, average ratings, and contact coverage
- **Hotel Lead Cards**: Beautiful card layout with all contact information
- **Search & Filter**: Filter by hotel name, location, rating, and star segment
- **Contact Management**: Copy individual contacts or all contact info at once
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **One-Click Actions**: Quick email and map integration

## Tech Stack

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React 19** for UI components

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard.

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy from the dashboard directory:
```bash
cd dashboard
vercel
```

3. Follow the prompts to deploy. Vercel will auto-detect Next.js configuration.

### Option 2: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Select the `dashboard` folder as the root directory
6. Vercel will automatically detect Next.js and configure everything
7. Click "Deploy"

Your dashboard will be live in minutes!

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=your-repo-url)

## Project Structure

```
dashboard/
├── app/
│   ├── page.tsx          # Main dashboard page
│   └── layout.tsx        # Root layout
├── components/
│   ├── StatsCard.tsx     # Statistics card component
│   ├── HotelCard.tsx     # Hotel lead card component
│   └── SearchBar.tsx     # Search bar component
├── types/
│   └── hotel.ts          # TypeScript interfaces
├── public/
│   └── hotels-data.json  # Hotel lead data
└── package.json
```

## Data Structure

Each hotel record includes:
- Hotel name and location
- Google Place ID and Maps integration
- Rating and review count
- Star segment classification
- Primary and alternate contact information
- Phone numbers and email addresses
- Travel desk contacts (where available)
- Website and notes

## Customization

### Changing Colors

Edit the Tailwind classes in components to match your brand colors.

### Adding More Filters

Add new filter states in `app/page.tsx` and corresponding UI in the filter section.

### Updating Hotel Data

Replace `public/hotels-data.json` with your updated hotel data in the same format.

## Learn More

To learn more about Next.js:

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub repository](https://github.com/vercel/next.js)

## License

Private project for internal use.
