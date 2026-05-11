# Deployment Guide

This guide will help you deploy your personal website to production.

## Prerequisites

1. **GitHub Account** - For version control and CI/CD
2. **Vercel Account** - For hosting (free tier available)
3. **Domain** - Optional, can be purchased through Vercel or any registrar

## Step 1: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Production-ready Next.js 15 personal website"

# Create main branch
git branch -M main
```

## Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `sunny-liu-website`
3. Push your code:
```bash
git remote add origin https://github.com/yourusername/sunny-liu-website.git
git push -u origin main
```

## Step 3: Configure Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure project settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

## Step 4: Environment Variables

Add these environment variables in Vercel dashboard:

```env
# Optional: Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id

# Optional: Contact Form
CONTACT_EMAIL=sunny@sunnyliu.com

# Optional: Social Links
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/sunny-liu
NEXT_PUBLIC_GITHUB_URL=https://github.com/sunny-liu
```

## Step 5: Custom Domain (Optional)

1. Purchase a domain (sunnyliu.com recommended)
2. In Vercel dashboard, go to Settings > Domains
3. Add your domain and follow DNS configuration instructions

## Step 6: Continuous Deployment

Your site will automatically deploy when you push to the main branch.

## Step 7: SEO Configuration

Update these files with your actual information:

- `app/layout.tsx` - Update metadata
- `lib/seo.ts` - Update site configuration
- `content/blog/` - Add your blog posts

## Step 8: Testing

Before going live:

1. Run `npm run build` locally to check for errors
2. Test all pages and components
3. Verify mobile responsiveness
4. Check SEO tags using [metatags.io](https://metatags.io)

## Step 9: Launch Checklist

- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Blog posts are visible
- [ ] Mobile responsive
- [ ] SEO optimized
- [ ] Social sharing works
- [ ] Analytics configured (optional)
- [ ] Domain configured (optional)

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Run `npm install` to update dependencies
- Check for syntax errors in your code

### Deployment Fails
- Check Vercel logs for specific errors
- Ensure all environment variables are set
- Verify GitHub repository connection

### Performance Issues
- Optimize images using Next.js Image component
- Enable Vercel's built-in optimizations
- Consider using Vercel Edge Functions for dynamic content

## Next Steps

After deployment:
1. Monitor performance in Vercel dashboard
2. Set up Google Analytics
3. Create social media profiles
4. Start promoting your site
5. Regularly update blog content

## Support

For issues:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Visit [Vercel Documentation](https://vercel.com/docs)
- Join the Next.js Discord community