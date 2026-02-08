# Xhoja Music Agency Website

A modern, fully responsive React + Vite + Tailwind CSS website for Xhoja Music Agency, a music lessons and event booking business in Boston, MA.

## Features

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Modern Styling**: Tailwind CSS for utility-first styling with custom design system
- **Client-side Routing**: React Router for smooth page navigation
- **SEO Ready**: Proper meta tags and semantic HTML
- **Ready for Deployment**: Configured for Vercel with SPA routing support

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router 6
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Inter)

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Footer.tsx      # Footer with contact info and links
│   └── Layout.tsx      # Layout wrapper with header/footer
├── pages/
│   ├── Home.tsx        # Home page with all hero sections
│   ├── Events.tsx      # Event bookings page with multi-step form
│   ├── Lessons.tsx     # Music lessons page with instructors and packages
│   ├── Team.tsx        # Team members page
│   └── Contact.tsx     # Contact page with form and FAQ
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Pages

1. **Home (/)** - Landing page with hero section, about us, services, testimonials, and CTAs
2. **Event Bookings (/events)** - Event booking form with multi-step process
3. **Music Lessons (/lessons)** - Instructor profiles and lesson package pricing
4. **Meet the Team (/team)** - Team members with bios and roles
5. **Contact (/contact)** - Contact form, information, and FAQ

## Design System

- **Colors**:
  - Background: Cream (#F5F0EB)
  - Accent: Gold (#C8973E)
  - Dark: (#1a1a1a)
  - White: (#ffffff)

- **Fonts**:
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

- **Components**:
  - Gold filled buttons
  - Black outlined buttons
  - White card components with subtle borders
  - Responsive navigation with mobile menu
  - Hero sections with images and CTA buttons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site in development mode.

### Build

```bash
npm run build
```

This creates a production-ready build in the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

## Deployment to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the Vite configuration
5. Click "Deploy"

The `vercel.json` file is configured to handle SPA routing, so all routes will correctly serve the React app.

### Vercel Environment Setup

No environment variables are required for this project. The build and deployment will work out of the box.

## Customization

### Changing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      cream: '#F5F0EB',
      gold: '#C8973E',
      dark: '#1a1a1a',
    },
  },
}
```

### Updating Contact Information

Contact details are hardcoded in various components:
- `src/pages/Contact.tsx` - Contact page
- `src/components/Footer.tsx` - Footer
- `src/pages/Home.tsx` - Contact section

Update these files with your actual contact information.

### Adding/Modifying Instructors

Edit `src/pages/Lessons.tsx` to add or modify the instructors array with new instructor information and images.

### Updating Testimonials

Edit `src/pages/Home.tsx` to add or modify testimonials in the testimonials section.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized production build size: ~77 KB gzipped
- Fast page loads with code splitting
- Optimized images with proper sizing
- CSS minification and purging unused styles

## License

Copyright 2026 Xhoja Music Agency. All rights reserved.
