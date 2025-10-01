# Eroll Oliver Portfolio

A modern, responsive portfolio website showcasing digital marketing expertise, video editing, graphic design, and web development skills. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Functionality

- **Responsive Design**: Fully responsive across all device sizes
- **Dark/Light Theme**: Toggle between light and dark modes with persistent preferences
- **Interactive UI**: Smooth animations and transitions throughout
- **Performance Optimized**: Fast loading with Next.js optimization

### Portfolio Sections

- **Hero Section**: Dynamic text typing animation with 3D lanyard component
- **About Section**: Personal information with interactive flip cards
- **Skills**: Technology stack showcase with categorized skills
- **Projects**: Social media campaigns with image galleries and modals
- **Graphic Design**: Portfolio showcase with click-to-expand functionality
- **Video Gallery**: Professional video content with Google Drive integration
- **Services**: Complete service offerings with detailed descriptions
- **Contact**: Functional contact form with validation

### Technical Features

- **Theme System**: Custom theme provider with system preference detection
- **Image Optimization**: Next.js Image component with lazy loading
- **3D Components**: Interactive 3D lanyard using Three.js and React Three Fiber
- **Type Safety**: Full TypeScript implementation
- **Modular Architecture**: Component-based structure for maintainability

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/eroll-portfolio.git
   cd eroll-portfolio
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

```
eroll_portfolio/
├── public/
│   └── assets/
│       ├── graphic-design/     # Graphic design portfolio images
│       ├── sample-social-media/ # Social media campaign images
│       └── service-section/     # Service offering images
├── src/
│   └── app/
│       ├── components/
│       │   ├── card/           # Reusable card components
│       │   ├── providers/      # Context providers (Theme, etc.)
│       │   ├── sections/       # Main page sections
│       │   └── ui/            # UI components (3D, animations)
│       ├── layouts/           # Layout components (Navbar, Footer)
│       └── globals.css        # Global styles
├── tailwind.config.ts         # Tailwind CSS configuration
└── next.config.js            # Next.js configuration
```

## 🎨 Theme System

The portfolio includes a comprehensive dark/light theme system:

### Theme Provider

```typescript
interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
```

### Usage in Components

```tsx
const { theme } = useTheme();

<div className={`${
  theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
}`}>
```

### Theme Classes

- **Backgrounds**: `bg-white dark:bg-gray-900`
- **Text**: `text-gray-900 dark:text-white`
- **Borders**: `border-gray-300 dark:border-gray-700`
- **Hover States**: `hover:bg-gray-100 dark:hover:bg-gray-800`

## 📱 Component Architecture

### Section Components

#### VideoSection

Displays professional video content with Google Drive integration:

```typescript
interface VideoItem {
  id: string;
  embedUrl: string;
  thumbnail: string;
  click: string;
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

#### GraphicDesignShowcase

Interactive portfolio component for design work:

```typescript
interface GraphicDesign {
  id: number;
  title: string;
  image: string;
}
```

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

### Image Galleries

- Multiple image support for projects
- Modal viewers with navigation
- Thumbnail previews
- Responsive image optimization

### Video Integration

- Google Drive video embedding
- Custom thumbnail generation
- Error handling for failed loads
- Modal video player

### Contact Form

- Form validation
- Theme-aware styling
- Responsive design
- Success/error states

### Navigation

- Smooth scroll to sections
- Mobile-responsive menu
- Theme-aware styling
- Active section highlighting

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with custom configuration:

```typescript
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
```

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
