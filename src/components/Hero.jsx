import { ChevronDown, Leaf } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  return (
    <div id="hero" className="pt-24 min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-offwhite flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full opacity-20 -ml-48 -mb-48"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Logo/Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-offwhite p-4 rounded-full">
            <Leaf size={48} className="text-emerald-700" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
          Summer Internship Project
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-emerald-100">
          Strategic Research & Digital Marketing Analysis
        </h2>

        {/* Description */}
        <div className="space-y-6 mb-12">
          <div className="bg-emerald-600 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm">
            <p className="text-lg leading-relaxed">
              Comprehensive exploration of alternate distribution channels and institutional ecosystems for agribusiness growth
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('about')}
          className="bg-offwhite text-emerald-900 px-8 py-3 rounded-lg font-bold hover:bg-emerald-50 transition-all transform hover:scale-105 mb-12"
        >
          Explore Project
        </button>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown size={32} className="mx-auto" />
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-6 text-center text-sm opacity-75 z-10">
        <p>Gagan Bansal | T.Stanes and Company Limited | Summer 2024</p>
      </div>
    </div>
  );
}
