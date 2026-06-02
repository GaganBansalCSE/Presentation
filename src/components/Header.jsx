import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header({ scrollToSection, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Research', id: 'research' },
    { label: 'Findings', id: 'findings' },
    { label: 'Insights', id: 'insights' },
    { label: 'Digital', id: 'digital' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="bg-emerald-700 p-2 rounded-lg">
            <Leaf size={24} className="text-offwhite" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-emerald-900">T.Stanes SIP</h1>
            <p className="text-xs text-emerald-600">Research & Strategy</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-emerald-800 hover:text-emerald-700 font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-emerald-900"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-emerald-50 border-t border-emerald-200">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-emerald-800 hover:text-emerald-700 py-2 px-4 rounded hover:bg-emerald-100 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
