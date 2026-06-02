# T.Stanes Summer Internship Project - Interactive Website

## 🎯 Overview

This is now a **single-page interactive website** (not a presentation). The entire project is showcased on one scrollable page with interactive sections, smooth animations, and engaging content.

## ✨ Key Features

### 🎨 Interactive Website Experience
- **Single Page Layout**: All content integrated into one scrollable page
- **Smooth Scrolling Navigation**: Click navigation items to smoothly scroll to sections
- **Sticky Header**: Navigation header stays accessible while scrolling
- **Scroll-to-Top Button**: Quick return to top with floating action button
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Animated Sections**: Smooth fade-in animations as you scroll
- **Interactive Cards**: Expandable sections with detailed information

### 🏗️ Website Structure

The website is organized into the following sections:

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **About** - Company overview, products, and geographic reach
3. **Projects** - Interactive tabs switching between Major and Minor projects
4. **Research** - Research methodology and geographic outreach details
5. **Findings** - Key findings and statistics from field visits
6. **Insights** - Strategic insights and recommendations
7. **Digital** - Digital marketing analysis and competitor benchmarking
8. **Footer** - Contact information and quick links

### 🔧 Technology Stack

- **React 18**: Modern frontend framework
- **Vite**: Lightning-fast build tool
- **Tailwind CSS 3**: Utility-first styling
- **Lucide React**: Beautiful SVG icons
- **Times New Roman**: Professional serif typography

### 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop displays (1920x1080+)
- Tablets (1024x768+)
- Mobile devices (320px+)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server (opens at http://localhost:5173/)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🎮 Navigation

### Desktop Navigation
- Use the sticky header to navigate to any section
- Smooth scroll to section on click
- Hover effects on navigation items

### Mobile Navigation
- Hamburger menu for easy access
- Touch-friendly button sizes
- Same smooth scrolling behavior

### Keyboard & Mouse
- Smooth scroll behavior on all browsers
- Scroll-to-top button appears after scrolling
- Tab-friendly navigation

## 🎨 Interactive Elements

### Expandable Project Cards
- Click on project cards to expand and see detailed information
- Smooth animations on expand/collapse
- Visual chevron indicator for expand state

### Tabbed Projects Section
- Switch between Major and Minor projects
- Smooth fade-in transitions
- Active tab highlighting

### Hover Effects
- Cards lift up on hover with shadow effects
- Navigation items show underline animation
- Buttons scale and change color on interaction

## 📊 Content Sections

### Hero Section
- Professional introduction with company branding
- Animated scroll indicator
- Call-to-action button

### About Section
- Company legacy and presence
- Product portfolio showcase
- Geographic reach information

### Projects Section
- Major project: "Exploring Alternate Distribution Channels..."
- Minor project: "Comparative Digital Marketing Analysis..."
- Interactive tabs with detailed objectives

### Research Section
- Research methodology (4 approaches)
- Geographic outreach coverage
- Beautiful card-based layout

### Findings Section
- 6 key findings with color-coded cards
- Statistics: 50+ field visits, 200+ farmers engaged, 15+ institutions studied, 5 states covered
- Gradient cards with icons

### Insights Section
- 5 key insights with numbered display
- 6 strategic recommendations
- Strategic direction summary

### Digital Section
- Competitor benchmarking with progress bars
- 4 content strategy pillars
- Execution model recommendations

## 🎨 Design System

### Color Palette
- **Primary**: Emerald Green (#15803d - #166534)
- **Secondary**: Offwhite (#f5f5f0)
- **Accents**: Forest Green shades
- **Text**: Dark emerald on light backgrounds

### Typography
- **Font Family**: Times New Roman, serif
- **Headings**: Bold, emerald-900 color
- **Body**: Regular weight, emerald-800 color
- **Sizes**: Responsive scaling

### Animations
- **Fade In**: Content sections fade in on view
- **Slide In**: Header and modals slide in
- **Hover Animations**: Cards lift and scale
- **Scroll Effects**: Smooth scroll behavior

## 📦 Project Structure

```
src/
├── App.jsx                          # Main app component (single-page layout)
├── main.jsx                         # React DOM entry point
├── index.css                        # Tailwind + custom animations
├── components/
│   ├── Header.jsx                   # Sticky header with navigation
│   ├── Hero.jsx                     # Hero section
│   ├── About.jsx                    # Company overview
│   ├── Projects.jsx                 # Interactive projects tabs
│   ├── Research.jsx                 # Research approach & methodology
│   ├── Findings.jsx                 # Field findings & statistics
│   ├── Insights.jsx                 # Key insights & recommendations
│   ├── Digital.jsx                  # Digital marketing strategy
│   └── Footer.jsx                   # Footer with contact info
└── slides/
    └── [Legacy slide components - still available for reference]

Configuration Files:
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── index.html
```

## 🌟 Highlights

### Single Page Benefits
✓ No page load delays - instant navigation
✓ Better user engagement with continuous scrolling
✓ All information in one cohesive narrative
✓ Professional website feel vs. presentation style
✓ Mobile-friendly and responsive
✓ Easy to share single URL

### Interactive Features
✓ Smooth scrolling navigation
✓ Expandable content cards
✓ Tab-based project switching
✓ Animated section transitions
✓ Responsive design
✓ Sticky navigation header
✓ Scroll-to-top button

### Performance
- CSS: 20.88 kB (4.38 kB gzipped)
- JS: 225.36 kB (68.29 kB gzipped)
- Fast build time (~600ms)
- Optimized for modern browsers

## 🚀 Deployment

The production build is ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Simply deploy the `dist/` folder.

## 📝 Data Integration

The website is designed to integrate with your data files:
- `fpo india.xlsx` - FPO data for analysis
- `sip major project (1).docx` - Major project details
- `sip minor.docx` - Minor project details

Content is currently hardcoded but can be connected to Excel data sources for dynamic content.

## 🎓 Learning & Features

The internship provided exposure to:
- Institutional farmer ecosystems
- Rural market dynamics
- Government support mechanisms
- Business development and channel expansion
- Digital marketing strategy and execution
- Agribusiness market analysis

## 📝 About the Project

**Project Presenter**: Gagan Bansal
**Duration**: 8 weeks, Summer 2024
**Company**: T.Stanes and Company Limited
**Sector**: Agribusiness & Agri-Inputs

## 🔗 Quick Links

- **Development**: `npm run dev`
- **Production Build**: `npm run build`
- **Lint Check**: `npm run lint`
- **Preview**: `npm run preview`

## 📞 Contact

For inquiries about this project:
- Email: gagan@tstanes.com
- Company: T.Stanes and Company Limited

---

**Status**: ✅ Complete and Ready for Use
**Last Updated**: June 2, 2026
**Version**: 2.0.0 (Single-Page Website)
