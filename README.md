# Nurvatech - Modern IT Services Website

A modern, professional website for Nurvatech IT Services built with Next.js 14, featuring cutting-edge design, smooth animations, and comprehensive service showcasing.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects and gradients
- **Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Theme switching with next-themes
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Next.js metadata API and structured data
- **Performance**: Optimized images, fonts, and code splitting
- **Contact Form**: Integrated contact form with email functionality
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: ShadCN UI
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins, Space Grotesk)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/               # Reusable UI components
│   ├── footer.tsx        # Site footer
│   ├── navbar.tsx        # Navigation bar
│   └── theme-provider.tsx # Theme provider
└── lib/                  # Utility functions
    └── utils.ts          # Common utilities
```

## 🎨 Design System

### Colors
- Primary: Blue gradient (`hsl(var(--primary))`)
- Secondary: Purple gradient (`hsl(var(--secondary))`)
- Background: Dynamic light/dark (`hsl(var(--background))`)
- Custom gradients and glass effects

### Typography
- **Primary**: Inter (body text)
- **Headers**: Poppins (headings)
- **Display**: Space Grotesk (large displays)

### Components
- Glass morphism effects (`.glass-effect`)
- Gradient text (`.gradient-text`)
- Consistent spacing (`.section-padding`, `.container-padding`)
- Smooth animations with Framer Motion

## 📱 Pages

### Home Page
- Hero section with animated elements
- Services overview with hover effects
- Why choose us section
- Case studies showcase
- Client testimonials carousel
- Technology stack display
- Call-to-action banner

### About Page
- Company introduction
- Mission and vision
- Team section
- Company values

### Services Page
- Detailed service descriptions
- Software development services
- QA and testing services
- Pricing information

### Contact Page
- Contact form with validation
- Company information
- Google Maps integration (ready)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nurvatech-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your_contact_email@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and use in the appropriate page
3. Add animations with Framer Motion
4. Ensure responsive design with Tailwind CSS

### Customizing Styles

- Modify colors in `src/app/globals.css` CSS variables
- Update Tailwind config in `tailwind.config.js`
- Add custom components in `src/components/ui/`

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. Sign up for a [Resend](https://resend.com) account
2. Get your API key
3. Add it to your `.env.local` file
4. Update the contact form handler in `/api/contact`

## 🎯 SEO & Performance

- **SEO**: Metadata API, OpenGraph tags, structured data
- **Performance**: Image optimization, code splitting, font optimization
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Core Web Vitals**: Optimized for Lighthouse scores

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [ShadCN UI](https://ui.shadcn.com/) - Component library
- [Lucide Icons](https://lucide.dev/) - Icon library

---

**Nurvatech IT Services** - Transforming digital visions into reality through innovative software solutions.
