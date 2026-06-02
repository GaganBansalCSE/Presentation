import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Research from './components/Research';
import Findings from './components/Findings';
import Insights from './components/Insights';
import Digital from './components/Digital';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('major');

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-offwhite">
      {/* Header */}
      <Header scrollToSection={scrollToSection} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-offwhite to-emerald-50">
        <About />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-emerald-900 mb-4">Research Projects</h2>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
          </div>
          <Projects activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </section>

      {/* Research Approach */}
      <section id="research" className="py-20 bg-gradient-to-br from-emerald-50 to-emerald-100">
        <Research />
      </section>

      {/* Field Findings */}
      <section id="findings" className="py-20 bg-white">
        <Findings />
      </section>

      {/* Key Insights */}
      <section id="insights" className="py-20 bg-gradient-to-br from-offwhite to-emerald-50">
        <Insights />
      </section>

      {/* Digital Analysis */}
      <section id="digital" className="py-20 bg-white">
        <Digital />
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-offwhite">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Distribution Channels?</h2>
          <p className="text-xl mb-8 opacity-90">Explore institutional ecosystems and digital opportunities for sustainable growth</p>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-offwhite text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-colors"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
