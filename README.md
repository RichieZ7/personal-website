# Personal Website

A minimalist personal website for Richard Zhang built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 💻 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- ✨ Typing animation effects
- 🎯 Minimalist black and white design
- 📱 Fully responsive design
- 🎲 Animated random walk background
- ⚡ Optimized for performance and SEO

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel. Simply push your code to GitHub and Vercel will automatically deploy it.

### Domain Configuration

The website is configured for the domain `richardzhang.io`. Make sure to:
1. Add your domain in Vercel project settings
2. Configure DNS records as instructed by Vercel

## Project Structure

- `app/` - Next.js app directory with layout and pages
- `components/` - React components:
  - `Profile.tsx` - Main profile component
  - `Current.tsx` - Current status section
  - `Experience.tsx` - Experience dropdown
  - `TypingText.tsx` - Typing animation component
  - `RandomWalkBackground.tsx` - Animated background

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for deployment