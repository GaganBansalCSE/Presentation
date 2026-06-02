# T.Stanes Summer Internship Project Presentation

A professional React 18-based interactive web presentation for Summer Internship Projects at T.Stanes and Company Limited in the agribusiness and agri-input sector.

## 🎯 Project Overview

This presentation showcases two major research projects:

### Major Project
**"Exploring Alternate Distribution Channels for Agri Inputs through Institutional and Digital Ecosystems"**
- Study of alternate distribution channels beyond traditional dealer networks
- Analysis of institutional farmer ecosystems (FPOs, PACS, Cooperatives)
- Exploration of digital and e-commerce expansion opportunities
- Strategic recommendations for scalable rural expansion

### Minor Project
**"Comparative Digital Marketing Analysis and Strategic Recommendations for T.Stanes"**
- Competitor benchmarking across digital channels
- Content strategy analysis
- Digital execution model recommendations

## 🛠 Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **UI Components**: shadcn/ui & Lucide Icons
- **Font**: Times New Roman (serif)
- **Color Scheme**: Emerald Green & Offwhite

## 📋 Presentation Slides

1. **Cover Slide** - Title, projects, presenter information
2. **Company Overview** - T.Stanes background, product portfolio, geographic reach
3. **Project Objectives** - Major and minor project goals
4. **Research Approach** - Methodology, data collection, outreach strategy
5. **Field Visits** - Key visits and learnings
6. **Alternate Channels** - Channel exploration overview
7. **Cooperatives & PACS** - Strategic opportunities and challenges
8. **Contract Farming & E-Commerce** - B2B partnerships and digital expansion
9. **Key Insights & Recommendations** - Strategic findings
10. **Digital Marketing Analysis** - Competitor benchmarking
11. **Digital Execution Model** - Recommended structure
12. **Overall Learnings & Impact** - Summary and deliverables
13. **Thank You** - Closing slide

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm 8+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server
The development server will start at `http://localhost:5173/`

## 🎨 Design Features

- **Professional Corporate Style**: McKinsey/Deloitte-inspired design
- **Premium Layout**: Clean, minimal, and visually appealing
- **Visual-Heavy**: Emphasis on diagrams, infographics, and flowcharts
- **Responsive Design**: Works on desktop and tablet devices
- **Smooth Navigation**: 
  - Use arrow buttons at the bottom
  - Use arrow keys on keyboard (← →)
  - Click on slide numbers for direct navigation
  - Click home icon to return to cover

### Color Palette
- **Emerald Green**: Primary color (#15803d, #16a34a, #166534, #145231)
- **Offwhite**: Secondary color (#f5f5f0)
- **Forest Green**: Accent color (from emerald range)

## 📊 Project Structure

```
src/
├── App.jsx                 # Main application component
├── main.jsx               # Entry point
├── index.css              # Tailwind CSS configuration
└── slides/
    ├── CoverSlide.jsx
    ├── CompanyOverview.jsx
    ├── ProjectObjectives.jsx
    ├── ResearchApproach.jsx
    ├── FieldVisits.jsx
    ├── AlternateChannels.jsx
    ├── CooperativesPACS.jsx
    ├── ContractFarming.jsx
    ├── KeyInsights.jsx
    ├── DigitalMarketing.jsx
    ├── DigitalExecution.jsx
    ├── OverallLearnings.jsx
    └── ThankYou.jsx
```

## 🎮 Navigation

### Button Controls
- **Previous (←)**: Go to previous slide
- **Next (→)**: Go to next slide
- **Home**: Return to cover slide
- **Slide Numbers**: Click any number to jump to that slide

### Keyboard Shortcuts
- **Arrow Right**: Next slide
- **Arrow Left**: Previous slide

## 📱 Responsive Design

The presentation is optimized for:
- Desktop displays (1920x1080 and above)
- Tablet displays (1024x768 and above)
- Maximum width container with centered layout

## 🔧 Customization

### Modify Colors
Edit `tailwind.config.js` to change the emerald or offwhite colors:

```javascript
colors: {
  emerald: {
    // Emerald green shades
  },
  offwhite: '#f5f5f0',
}
```

### Modify Fonts
Change global font in `index.css`:

```css
* {
  font-family: 'Times New Roman', serif;
}
```

### Add/Remove Slides
1. Create new slide component in `src/slides/`
2. Import in `App.jsx`
3. Add to `slides` array with id, title, and component

## 📦 Production Build

The build output is optimized for deployment:
- Minified CSS: 16.28 kB (3.68 kB gzipped)
- Minified JS: 257.84 kB (71.91 kB gzipped)

Deploy the `dist/` folder to any static hosting service.

## 👤 Presenter Information

- **Name**: Gagan Bansal
- **Duration**: 8 weeks, Summer 2024
- **Sector**: Agribusiness & Agri-Inputs
- **Company**: T.Stanes and Company Limited

## 📝 Key Features

✓ Professional corporate-style presentation
✓ Comprehensive research findings
✓ Strategic recommendations
✓ Visual-focused design
✓ Interactive navigation
✓ Responsive layout
✓ Premium look and feel
✓ Keyboard and mouse navigation support

## 🎓 Learning Outcomes

The internship provided exposure to:
- Institutional farmer ecosystems
- Rural market dynamics
- Government support mechanisms
- Business development and channel expansion
- Digital marketing strategy and execution
- Agribusiness market analysis

## 📄 License

This presentation is proprietary to T.Stanes and Company Limited and Gagan Bansal.

---

**Created for MBA SIP Review and Final Submission** | Summer 2024
