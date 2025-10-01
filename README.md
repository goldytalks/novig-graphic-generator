# Novig Graphic Generator

A production-ready web application for creating branded social media graphics for Novig betting markets.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/react-19.1.1-61dafb)
![TypeScript](https://img.shields.io/badge/typescript-5.8.3-3178c6)
![Tailwind](https://img.shields.io/badge/tailwind-4.1.14-38bdf8)

## 🎯 Overview

This tool allows Novig team members to quickly generate professional, branded social media graphics for betting markets. Simply input market details, customize the design, and download high-quality graphics optimized for Twitter, Instagram, and other platforms.

## ✨ Features

- 🎨 **Three Template Styles**: Bold (primary), Minimal, and Gradient
- 📱 **Multiple Aspect Ratios**: 1:1 (Instagram) and 1.91:1 (Twitter Cards)
- 🖼️ **Player Image Upload**: Add custom player photos
- ⚡ **Real-time Preview**: See changes instantly
- 💾 **High-Quality Export**: Download as PNG with 2x resolution
- 🎯 **Brand Consistent**: Matches Novig design system
- 📐 **Responsive Design**: Works on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/novig_graphic_generator.git

# Navigate to project directory
cd novig_graphic_generator

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the application.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📖 Usage

1. **Select Template**: Choose from Bold, Minimal, or Gradient styles
2. **Enter Market Details**:
   - Market question (e.g., "Will Aaron Judge hit 3 home runs this week?")
   - Options and odds (YES +250, NO -300)
   - Optional: Player name, image, category, volume traded
3. **Choose Aspect Ratio**: Select 1:1 or 1.91:1 based on platform
4. **Preview**: Review the live preview
5. **Download**: Click "Download PNG" to save your graphic

## 🎨 Template Styles

### Bold Template (Primary)
- Dark background (#0A0A0A)
- Large uppercase typography
- High contrast design
- Best for: Maximum impact on social media

### Minimal Template
- Clean light background
- Professional appearance
- Subtle branding
- Best for: Corporate communications

### Gradient Template
- Modern gradient backgrounds
- Contemporary design
- Eye-catching visuals
- Best for: Experimental content

## 🛠️ Tech Stack

- **Frontend**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Image Export**: html2canvas
- **Icons**: Lucide React

## 📁 Project Structure

```
novig_graphic_generator/
├── src/
│   ├── components/          # React components
│   │   ├── templates/       # Template components
│   │   ├── TemplateSelector.tsx
│   │   ├── MarketForm.tsx
│   │   ├── GraphicPreview.tsx
│   │   └── DownloadButton.tsx
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── assets/              # Static assets (logos)
│   ├── App.tsx              # Main application
│   └── index.css            # Global styles
├── public/                  # Public assets
├── PROJECT_NOTES.md         # Detailed project documentation
└── package.json             # Dependencies
```

## 🎯 Adding Novig Logos

Currently, templates display "NOVIG" as text. To use actual logos:

1. Add logo SVG files to `src/assets/`:
   - `novig-logo-white.svg` (for dark backgrounds)
   - `novig-logo-black.svg` (for light backgrounds)
   - `novig-symbol.svg` (icon only)

2. Import in template components:
   ```tsx
   import NovigLogo from '../assets/novig-logo-white.svg?react';
   ```

3. Replace text placeholders with `<NovigLogo />`

See `src/assets/README.md` for detailed instructions.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy!

Your app will be live at `https://your-project.vercel.app`

### Other Platforms

The app can be deployed to any static hosting service:
- Netlify
- GitHub Pages
- Cloudflare Pages
- AWS S3 + CloudFront

## 🧪 Testing

Run the following tests before deploying:

```bash
# Build test
npm run build

# Development test
npm run dev
```

See `PROJECT_NOTES.md` for comprehensive testing checklist.

## 📝 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Key Files

- **App.tsx**: Main application component with state management
- **types/market.ts**: TypeScript type definitions
- **utils/downloadGraphic.ts**: Image export functionality
- **components/templates/**: Template implementations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. For Novig internal use only.

## 📞 Support

For questions, issues, or feature requests:
- Review `PROJECT_NOTES.md` for detailed documentation
- Check existing GitHub issues
- Contact the development team

## 🎉 Acknowledgments

- Built with ❤️ for Novig
- Powered by React, TypeScript, and Tailwind CSS
- Icons by Lucide

---

**Status**: ✅ Ready for production use

Last Updated: October 1, 2025
