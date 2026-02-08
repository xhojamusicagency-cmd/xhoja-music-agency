# Deployment Guide - Xhoja Music Agency Website

## Quick Start to Vercel

### Step 1: Initialize Git Repository

```bash
cd /sessions/kind-zealous-hopper/xhoja-music-agency
git init
git add .
git commit -m "Initial commit: Xhoja Music Agency website"
```

### Step 2: Push to GitHub

1. Create a new repository on GitHub (e.g., `xhoja-music-agency`)
2. Copy the repository URL
3. Run these commands:

```bash
git remote add origin https://github.com/your-username/xhoja-music-agency.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Enter your GitHub repository URL
5. Click "Import"
6. Vercel will automatically detect the configuration
7. Click "Deploy"

Your site will be live in minutes at a URL like: `xhoja-music-agency.vercel.app`

## Custom Domain Setup

After deployment:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `xhojamusicagency.com`)
4. Follow DNS configuration instructions
5. Update nameservers at your domain registrar

## Environment Variables

This project doesn't require any environment variables. All data is hardcoded.

For future enhancements with a backend, you can add environment variables:

1. In Vercel dashboard: Settings → Environment Variables
2. Add any required variables
3. They'll be available to the build process

## Post-Deployment Checklist

- [ ] Visit the deployed URL
- [ ] Test all navigation links
- [ ] Test contact form (currently just shows alert)
- [ ] Test booking form
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Check page load performance
- [ ] Test analytics integration (if added)

## Continuous Deployment

The site is configured for automatic deployment:

- Pushing to `main` branch automatically triggers deployment
- Vercel builds the latest code and deploys it
- You can see deployment status in Vercel dashboard

## Rollback

If something goes wrong:

1. Go to Vercel project dashboard
2. Click "Deployments"
3. Find the previous working deployment
4. Click the three dots
5. Select "Redeploy"

## Updating the Site

To update content:

1. Edit files locally
2. Run `npm run build` to verify
3. Commit and push: `git push origin main`
4. Vercel automatically deploys the changes

## Performance Optimization

Current optimizations:
- Code splitting with Vite
- CSS minification and purging
- Image optimization with responsive sizes
- Gzipped assets (~77 KB total)

For further optimization:
- Add image lazy loading
- Implement service workers
- Add code splitting for routes
- Optimize fonts loading

## Analytics Setup

To add Google Analytics:

1. Get your Google Analytics ID
2. Add this to `index.html` head:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

## Backend Integration

When you're ready to add backend features:

1. Form Submissions:
   - Update contact form to send to backend API
   - Store messages in database
   - Send email notifications

2. Event Bookings:
   - Connect booking form to payment processor
   - Store bookings in database
   - Send confirmation emails

3. Lesson Scheduling:
   - Add calendar integration
   - Connect to scheduling system
   - Enable online payment

Example backend endpoints to create:
- `POST /api/contact` - Handle contact form
- `POST /api/bookings` - Handle event bookings
- `POST /api/lessons` - Handle lesson signups
- `GET /api/events` - Get upcoming events (if needed)

## Maintenance

### Regular Tasks

- Monitor site performance in Vercel Analytics
- Check for broken links monthly
- Update contact information as needed
- Review and update team bios
- Add new testimonials as you receive them

### Security

- Keep dependencies updated: `npm audit`
- Review Vercel security recommendations
- Use HTTPS (automatic with Vercel)
- Consider adding reCAPTCHA to forms

## Support & Monitoring

Vercel provides:
- Uptime monitoring
- Performance analytics
- Error tracking
- Usage analytics

Monitor these in your Vercel dashboard regularly.

## Troubleshooting

### Site not loading

1. Check Vercel deployment status
2. Check browser console for errors
3. Clear browser cache
4. Try different browser

### Forms not working

- Forms currently show alerts only
- To enable email: integrate with backend service
- Options: Vercel Functions, Firebase, AWS Lambda, etc.

### Images not loading

- Check image URLs are correct
- Verify images aren't blocked
- Check browser network tab
- Try different image source

## Support Resources

- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vite Docs: https://vitejs.dev
- React Router: https://reactrouter.com

## Success!

Your Xhoja Music Agency website is now live and ready to serve your clients!

For questions or issues, refer to the official documentation for each tool used.
