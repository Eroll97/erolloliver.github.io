# Eroll Oliver Portfolio

A modern, responsive portfolio website showcasing digital marketing expertise, video editing, graphic design, and web development skills. Built with Next.js 15.5.2, TypeScript, and Tailwind CSS 4 with advanced animations and interactive components.

## 🌟 Features

### Core Functionality

- **Responsive Design**: Fully responsive across all device sizes with mobile-first approach
- **Dark/Light Theme**: Toggle between light and dark modes with persistent preferences and system detection
- **Interactive UI**: Smooth animations and transitions throughout with scroll-triggered effects
- **Performance Optimized**: Fast loading with Next.js 15 optimization and Turbopack
- **Accessibility**: Full keyboard navigation, screen reader support, and focus management

### Portfolio Sections

- **Hero Section**: Dynamic text typing animation with 3D lanyard component and interactive elements
- **About Section**: Personal information with interactive flip cards and smooth animations
- **Gallery**: Circular image gallery with hover effects and modal viewers
- **Skills**: Technology stack showcase with animated progress bars and categorized skill cards
- **Worldwide Experience**: Full-screen video background with animated statistics counters
- **Work Experience**: Professional timeline with 6 detailed experience cards and staggered animations
- **Services**: Complete service offerings with detailed descriptions and interactive cards
- **Projects**: Social media campaigns with image galleries and detailed project modals
- **Web Images**: Dedicated web development portfolio showcase
- **Video Gallery**: Professional video content with optimized loading
- **Contact**: Functional contact form with validation and success states

### Technical Features

- **Theme System**: Custom theme provider with context API and persistent storage
- **Image Optimization**: Next.js Image component with lazy loading and responsive images
- **3D Components**: Interactive 3D lanyard using Three.js and React Three Fiber
- **Video Integration**: MP4 video backgrounds with error handling and autoplay optimization
- **Type Safety**: Full TypeScript implementation with strict type checking
- **Modular Architecture**: Component-based structure for maintainability and reusability
- **Scroll Animations**: IntersectionObserver-based animations for performance
- **Navigation**: Auto-hiding navbar with smooth scroll and mobile-responsive burger menu
- **Scroll to Top**: Fixed position button with theme-aware styling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Eroll97/erolloliver.github.io.git
   cd eroll_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

````
eroll_portfolio/
├── public/
│   └── assets/
│       ├── circular-gallery/      # Circular gallery images
│       ├── graphic-design/        # Graphic design portfolio images
│       ├── sample-social-media/   # Social media campaign images
│       ├── service-section/       # Service offering images
│       ├── web-images/           # Web development portfolio
│       ├── worldwide.mp4         # Background video for worldwide section
│       └── *.jpeg, *.png         # Profile and team images
├── src/
│   └── app/
│       ├── components/
│       │   ├── animated-component/ # Animation components
│       │   │   └── CircularGallery.tsx
│       │   ├── card/              # Reusable card components
│       │   │   └── graphic-design-showcase.tsx
│       │   ├── providers/         # Context providers
│       │   │   ├── ThemeProvider.tsx
│       │   │   └── ThemeToggle.tsx
│       │   ├── sections/          # Main page sections
│       │   │   ├── AboutSection.tsx
│       │   │   ├── ContactSection.tsx
│       │   │   ├── FirstSection.tsx
│       │   │   ├── Gallery.tsx
│       │   │   ├── ProjectsSection.tsx
│       │   │   ├── Services.tsx
│       │   │   ├── Skill.tsx
│       │   │   ├── VideoSection.tsx
│       │   │   ├── WebImagesSection.tsx
│       │   │   ├── WorkExperience.tsx
│       │   │   └── WorldwideExperience.tsx
│       │   ├── Text-animation/    # Text animation components
│       │   │   ├── ScrollFloat.tsx
│       │   │   ├── ScrollReveal.tsx
│       │   │   └── TextType.tsx
│       │   └── ui/               # UI components
│       │       ├── assets/       # 3D assets
│       │       ├── Lanyard.tsx   # 3D business card
│       │       ├── PixelTransition.tsx
│       │       └── ScrollToTop.tsx
│       ├── layouts/              # Layout components
│       │   ├── Footer.tsx
│       │   └── Navbar.tsx
│       ├── hooks/               # Custom React hooks
│       ├── lib/                 # Utility functions
│       ├── globals.css          # Global styles
│       ├── layout.tsx           # Root layout
│       └── page.tsx            # Main page component
## 📱 Component Architecture

### Section Components

#### WorldwideExperience

Full-screen video background section with animated statistics:

```typescript
interface Counters {
  projects: number;
  clients: number;
  years: number;
  feedback: number;
}
````

Features:

- MP4 video background with error fallback
- IntersectionObserver for scroll detection
- Animated counters (0 → target in 2 seconds)
- Staggered stat card animations
- Full viewport width with negative margins

#### WorkExperience

Professional timeline with detailed experience cards:

```typescript
interface Experience {
  title: string;
  period: string;
  description: string;
}
```

Features:

- 6 detailed work experience entries
- Scroll-triggered fade-in animations
- 2-column responsive grid layout
- Theme-aware hover effects

#### Skill

Technology showcase with animated progress bars:

```typescript
interface SkillProgress {
  name: string;
  percentage: number;
  color: string;
}
```

Features:

- Categorized skill cards with icons
- Animated progress bars with shine effects
- IntersectionObserver for trigger animations
- Staggered bar animations (300ms delays)

#### VideoSection

Professional video content display:

```typescript
interface VideoItem {
  id: string;
  embedUrl: string;
  thumbnail: string;
  title: string;
}
```

#### ProjectsSection

Showcases social media campaigns and graphic design work:

```typescript
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "planned";
}
```

#### CircularGallery

Interactive circular image gallery component:

Features:

- Smooth circular layout animation
- Hover effects with scale and rotation
- Modal image viewer
- Responsive design

## 🎯 Key Features Implementation

### Advanced Animations

- **Scroll-Triggered Animations**: IntersectionObserver API for performance
- **Staggered Entrances**: Delayed animations for multiple elements
- **Progress Bar Animations**: 1.5s duration with easing functions
- **Counter Animations**: Smooth number counting over 2 seconds
- **3D Interactions**: Three.js physics and material animations

### Video Integration

- **MP4 Background Videos**: Optimized for web with autoplay
- **Error Handling**: Graceful fallback to gradient backgrounds
- **Video Controls**: Autoplay, loop, muted for user experience
- **Performance**: Lazy loading and intersection-based playback

### Image Galleries

- **Multiple Formats**: Support for various image types and sizes
- **Modal Viewers**: Full-screen image viewing with navigation
- **Thumbnail Previews**: Optimized loading with Next.js Image
- **Responsive Grids**: Adaptive layouts for different screen sizes

### Navigation System

- **Auto-Hide Navbar**: Hides on scroll down, shows on scroll up
- **Smooth Scrolling**: CSS scroll-behavior and JavaScript fallbacks
- **Mobile Menu**: Animated burger menu with backdrop blur
- **Section Highlighting**: Active section detection

## 🔧 Configuration

### Next.js 15.5.2 Configuration

The project uses Next.js 15 with Turbopack for development:

```typescript
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};
```

### Tailwind CSS 4

Advanced Tailwind configuration with custom animations:

```typescript
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        shine: "shine 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%) skewX(12deg)" },
          "100%": { transform: "translateX(300px) skewX(12deg)" },
        },
      },
    },
  },
};
```

### TypeScript Configuration

Strict TypeScript setup with path mapping:

```json
{
  "compilerOptions": {
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

#### Text Animations

- **TextType**: Typewriter effect for hero section
- **ScrollReveal**: Fade-in animations on scroll
- **ScrollFloat**: Floating animations for elements
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: "completed" | "in-progress" | "planned";
  }

````

#### GraphicDesignShowcase

Interactive portfolio component for design work:

```typescript
interface GraphicDesign {
  id: number;
  title: string;
  image: string;
}
````

### UI Components

#### Lanyard (3D Component)

Interactive 3D business card using React Three Fiber:

- Physics simulation with Rapier
- Dynamic lighting and materials
- Responsive to user interactions

#### ThemeToggle

Persistent theme switching with local storage:

- System preference detection
- Smooth transitions
- Icon animations

## 🎯 Key Features Implementation

## 📄 Environment Variables

Create a `.env.local` file for any environment-specific configurations:

````bash
# Theme preferences
NEXT_PUBLIC_DEFAULT_THEME=dark

# Analytics (if needed)
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Contact form integration (if needed)
# NEXT_PUBLIC_EMAIL_SERVICE_ID=your_email_service_id
``` Video Integration

- Google Drive video embedding
- Custom thumbnail generation
- Error handling for failed loads
- Modal video player

### Contact Form
## 📞 Contact

**Eroll Oliver**

- Portfolio: [https://erolloliver.github.io](https://erolloliver.github.io)
- GitHub: [https://github.com/Eroll97](https://github.com/Eroll97)
- Repository: [erolloliver.github.io](https://github.com/Eroll97/erolloliver.github.io)

## 🙏 Acknowledgments

- [Next.js 15](https://nextjs.org/) - React framework with Turbopack
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - 3D graphics for React
- [Lucide React](https://lucide.dev/) - Beautiful icon library
- [TypeScript](https://www.typescriptlang.org/) - Type safety and developer experience
### Tailwind CSS

The project uses Tailwind CSS with custom configuration:

```typescript
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
````

### Next.js Configuration

Optimized for performance with image domains and build settings configured in `next.config.js`.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms

The app can be deployed to any platform supporting Next.js:

- Netlify
- Railway
- DigitalOcean App Platform

## 📄 Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```bash
# Add any required environment variables here
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 📞 Contact

**Eroll Oliver**

- Email: [your.email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- Portfolio: [Your Live Site URL]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/) - 3D graphics
- [Lucide React](https://lucide.dev/) - Icon library
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

_Built with ❤️ by Eroll Oliver_
