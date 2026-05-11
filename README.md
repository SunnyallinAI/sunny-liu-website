# Sunny Liu - Personal Website

A production-ready Next.js 15 personal website for Sunny Liu, Global Growth Strategist.

## Features

- ✅ **Next.js 15** with App Router and Turbopack
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **Framer Motion** for animations
- ✅ **MDX Blog System** for content management
- ✅ **SEO Optimization** with metadata and sitemap
- ✅ **Open Graph** support for social sharing
- ✅ **Responsive Design** for all devices
- ✅ **Contact Form** with validation
- ✅ **Recruiter CTA** section for job opportunities
- ✅ **GitHub Actions** for CI/CD
- ✅ **Vercel Deployment** ready

## Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/sunny-liu-website.git
cd sunny-liu-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Home page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog posts
│   ├── sitemap.ts          # Sitemap generation
│   └── robots.ts           # Robots.txt
├── components/
│   ├── navbar.tsx          # Navigation
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Experience section
│   ├── projects.tsx        # Projects section
│   ├── blog.tsx            # Blog section
│   ├── contact.tsx         # Contact form
│   ├── footer.tsx          # Footer
│   ├── recruiter-cta.tsx   # Recruiter CTA section
│   └── section-title.tsx   # Section title component
├── content/
│   └── blog/
│       ├── ai-growth.mdx
│       └── affiliate-marketing.mdx
├── lib/
│   ├── blog.ts             # Blog utilities
│   ├── mdx.ts              # MDX configuration
│   └── seo.ts              # SEO utilities
├── public/
│   ├── profile.jpg         # Profile image
│   └── og-image.jpg        # Open Graph image
└── styles/
    └── prose.css           # Typography styles
```

## Customization

### Update Personal Information

1. **Site Configuration** (`lib/seo.ts`):
   - Update title, description, and URL
   - Add your social links

2. **Layout** (`app/layout.tsx`):
   - Update metadata with your information
   - Add custom fonts if needed

3. **Hero Section** (`components/hero.tsx`):
   - Update headline and description
   - Replace profile image

4. **Experience** (`components/experience.tsx`):
   - Add your work history
   - Update achievements

5. **Projects** (`components/projects.tsx`):
   - Add your projects
   - Update project details

### Add Blog Posts

1. Create new `.mdx` files in `content/blog/`
2. Follow the frontmatter format:
   ```mdx
   ---
   title: "Your Post Title"
   date: "2024-01-15"
   excerpt: "Brief description"
   tags: ["tag1", "tag2"]
   author: "Sunny Liu"
   ---
   ```

### Customize Styling

1. Update `tailwind.config.ts` for colors and fonts
2. Modify `app/globals.css` for global styles
3. Update `styles/prose.css` for blog typography

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import repository in Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy

### Other Platforms

The site is also compatible with:
- Netlify
- AWS Amplify
- Railway
- Docker

## Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id

# Optional: Contact Form
CONTACT_EMAIL=sunny@sunnyliu.com
```

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icons

## Contact

Sunny Liu - sunny@sunnyliu.com

Project Link: [https://github.com/yourusername/sunny-liu-website](https://github.com/yourusername/sunny-liu-website)