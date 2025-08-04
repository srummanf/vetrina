# Next.js 15 Metadata & SEO Complete Guide

## Table of Contents
1. [Overview](#overview)
2. [Metadata API in Next.js 15](#metadata-api-in-nextjs-15)
3. [Essential Metadata Properties](#essential-metadata-properties)
4. [SEO Best Practices 2025](#seo-best-practices-2025)
5. [Accessibility & Compliance](#accessibility--compliance)
6. [Required Assets](#required-assets)
7. [Implementation Steps](#implementation-steps)
8. [Standard Template](#standard-template)
9. [Testing & Validation](#testing--validation)

## Overview

Next.js 15 introduces enhanced metadata handling through the App Router's Metadata API, providing type-safe, static, and dynamic metadata generation with improved SEO capabilities.

### Key Features in Next.js 15:
- **Static Metadata**: Defined at build time for optimal performance
- **Dynamic Metadata**: Generated at request time for personalized content
- **Metadata Inheritance**: Child routes inherit and override parent metadata
- **Type Safety**: Full TypeScript support with IntelliSense
- **Performance Optimized**: Automatic deduplication and optimization

## Metadata API in Next.js 15

### File-based Metadata (Recommended)
```typescript
// app/layout.tsx or app/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Your metadata configuration
}
```

### Function-based Dynamic Metadata
```typescript
// For dynamic routes
import type { Metadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  return {
    title: `Dynamic Title - ${params.id}`,
    // Other metadata
  }
}
```

## Essential Metadata Properties

### 1. Basic Information
```typescript
{
  title: "Page Title | Site Name",
  description: "Compelling description under 160 characters",
  keywords: ["keyword1", "keyword2", "keyword3"], // Optional in 2025
  authors: [{ name: "Author Name", url: "https://example.com" }],
  creator: "Creator Name",
  publisher: "Publisher Name",
  applicationName: "App Name",
  generator: "Next.js 15"
}
```

### 2. URLs and Base Configuration
```typescript
{
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "https://yourdomain.com/current-page",
    languages: {
      'en-US': 'https://yourdomain.com/en',
      'es-ES': 'https://yourdomain.com/es',
    }
  }
}
```

### 3. Open Graph (Social Sharing)
```typescript
{
  openGraph: {
    type: "website", // or "article", "profile", etc.
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Your Site Name",
    title: "Page Title - Site Name",
    description: "Description for social sharing",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alt text for OG image",
        type: "image/jpeg"
      }
    ]
  }
}
```

### 4. Twitter Cards
```typescript
{
  twitter: {
    card: "summary_large_image", // or "summary", "app", "player"
    site: "@yourtwitterhandle",
    creator: "@creatorhandle",
    title: "Twitter-specific title",
    description: "Twitter-specific description",
    images: ["/images/twitter-image.jpg"]
  }
}
```

### 5. Icons and PWA
```typescript
{
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  manifest: "/site.webmanifest"
}
```

### 6. Robots and Search Engine Directives
```typescript
{
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}
```

### 7. Viewport and Theme
```typescript
{
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Accessibility requirement
    userScalable: true // Don't disable zoom
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  colorScheme: "light dark"
}
```

## SEO Best Practices 2025

### 1. Title Optimization
- **Length**: 50-60 characters (mobile-first)
- **Structure**: `Primary Keyword | Brand Name`
- **Uniqueness**: Every page needs a unique title
- **Hierarchy**: Use consistent patterns across the site

### 2. Meta Description
- **Length**: 150-160 characters
- **Action-oriented**: Include call-to-action when appropriate
- **Keyword placement**: Primary keyword in first 120 characters
- **Uniqueness**: Avoid duplicates across pages

### 3. Core Web Vitals Integration
```typescript
{
  other: {
    "google-signin-client_id": "your-client-id.apps.googleusercontent.com",
    "fb:app_id": "your-facebook-app-id"
  }
}
```

### 4. Structured Data (JSON-LD)
```typescript
// In your page component
export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Your Site Name',
    url: 'https://yourdomain.com',
    description: 'Your site description'
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Your page content */}
    </>
  )
}
```

## Accessibility & Compliance

### WCAG 2.1 AA Requirements
```typescript
{
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5, // Allow zoom up to 500%
    userScalable: true // Never set to false
  }
}
```

### GDPR Compliance
```typescript
{
  other: {
    "privacy-policy": "https://yourdomain.com/privacy",
    "terms-of-service": "https://yourdomain.com/terms"
  }
}
```

### International Considerations
```typescript
{
  alternates: {
    languages: {
      'en-US': 'https://yourdomain.com/en',
      'fr-FR': 'https://yourdomain.com/fr',
      'de-DE': 'https://yourdomain.com/de'
    }
  }
}
```

## Required Assets

Create these files in your `/public` directory:

### Image Assets
- **Favicon**: `/favicon.ico` (32x32, 16x16 multi-size ICO)
- **Apple Touch Icon**: `/apple-touch-icon.png` (180x180)
- **Open Graph Image**: `/images/og-image.jpg` (1200x630)
- **Twitter Image**: `/images/twitter-image.jpg` (1200x675)

### Configuration Files
- **Web Manifest**: `/site.webmanifest`
- **Robots.txt**: `/robots.txt`
- **Sitemap**: `/sitemap.xml`

### Web Manifest Example (`/public/site.webmanifest`)
```json
{
  "name": "Your App Name",
  "short_name": "App",
  "description": "App description",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Robots.txt Example (`/public/robots.txt`)
```
User-agent: *
Allow: /

# Disallow admin or private pages
Disallow: /admin/
Disallow: /api/

# Sitemap
Sitemap: https://yourdomain.com/sitemap.xml
```

## Implementation Steps

### Step 1: Install Dependencies (if needed)
```bash
npm install next@latest react@latest react-dom@latest
npm install -D @types/node @types/react @types/react-dom typescript
```

### Step 2: Set up Root Layout
```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Global metadata here
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Step 3: Page-specific Metadata
```typescript
// app/about/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Your Site',
  description: 'Learn more about us...'
}

export default function About() {
  return <div>About content</div>
}
```

### Step 4: Dynamic Metadata
```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug)
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    }
  }
}
```

## Standard Template

Here's a complete, production-ready metadata template:

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  // Basic Info
  title: {
    template: '%s | Your Site Name',
    default: 'Your Site Name - Tagline'
  },
  description: "Your compelling site description under 160 characters that includes primary keywords.",
  
  // Base Configuration
  metadataBase: new URL("https://yourdomain.com"),
  
  // Keywords (optional but can help with content focus)
  keywords: [
    "primary keyword",
    "secondary keyword",
    "industry term",
    "brand name"
  ],
  
  // Authorship
  authors: [{ name: "Your Name", url: "https://yourdomain.com" }],
  creator: "Your Name",
  publisher: "Your Organization",
  
  // Canonical and Alternates
  alternates: {
    canonical: "https://yourdomain.com",
    languages: {
      'en-US': 'https://yourdomain.com/en',
      'es': 'https://yourdomain.com/es',
    }
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  
  // PWA Manifest
  manifest: "/site.webmanifest",
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Your Site Name",
    title: "Your Site Name - Tagline",
    description: "Your compelling site description for social sharing.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Your Site Name - Visual description of the image",
        type: "image/jpeg"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    creator: "@yourtwitterhandle",
    title: "Your Site Name - Tagline",
    description: "Your compelling site description for Twitter.",
    images: ["/images/twitter-image.jpg"]
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  
  // Viewport (Accessibility compliant)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  },
  
  // Theme
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ],
  colorScheme: "light dark",
  
  // Verification (uncomment and add your codes)
  // verification: {
  //   google: "your-google-verification-code",
  //   yandex: "your-yandex-verification-code",
  //   yahoo: "your-yahoo-verification-code",
  //   other: {
  //     "facebook-domain-verification": "your-facebook-verification-code",
  //   }
  // },
  
  // Additional metadata
  category: "technology", // or your site's category
  classification: "business", // or appropriate classification
  
  // App-specific (if applicable)
  applicationName: "Your App Name",
  referrer: "origin-when-cross-origin",
  
  // Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}
```

## Testing & Validation

### Essential Tools
1. **Google Search Console**: Monitor search performance
2. **PageSpeed Insights**: Core Web Vitals testing
3. **Open Graph Debugger**: Facebook sharing preview
4. **Twitter Card Validator**: Twitter sharing preview
5. **Lighthouse**: Overall performance and SEO audit

### Validation Commands
```bash
# Build and analyze
npm run build
npm run analyze

# Lighthouse audit
npx lighthouse https://yourdomain.com --view

# Meta tag validation
curl -s https://yourdomain.com | grep -i "meta\|title"
```

### Testing Checklist
- [ ] All meta tags render correctly
- [ ] Open Graph images display properly (1200x630)
- [ ] Twitter cards preview correctly
- [ ] Favicon loads on all devices
- [ ] Sitemap.xml is accessible
- [ ] Robots.txt is properly configured
- [ ] Core Web Vitals pass
- [ ] Mobile-friendly test passes
- [ ] Structured data validates (Google Rich Results Test)

---

## Quick Start Checklist

1. **Copy the standard template** above to your `app/layout.tsx`
2. **Replace placeholder values** with your actual information
3. **Create required assets** (favicon, OG images, etc.)
4. **Add robots.txt and sitemap.xml** to your `/public` directory
5. **Test with validation tools**
6. **Submit to Google Search Console**

This template follows the latest Next.js 15 specifications and 2025 SEO best practices, ensuring optimal search engine visibility and social media sharing performance.