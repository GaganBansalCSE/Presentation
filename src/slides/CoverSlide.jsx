import { Leaf } from 'lucide-react';

export default function CoverSlide() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-offwhite flex flex-col items-center justify-center p-12 relative overflow-hidden">
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
        <h1 className="text-6xl font-bold mb-4 leading-tight">
          Summer Internship Project Presentation
        </h1>

        {/* Company */}
        <h2 className="text-3xl font-semibold mb-12 text-emerald-100">
          T.Stanes and Company Limited
        </h2>

        {/* Projects */}
        <div className="space-y-8 mb-12">
          <div className="bg-emerald-600 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-3">Major Project</h3>
            <p className="text-lg leading-relaxed italic">
              "Exploring Alternate Distribution Channels for Agri Inputs through Institutional and Digital Ecosystems"
            </p>
          </div>

          <div className="bg-emerald-600 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-3">Minor Project</h3>
            <p className="text-lg leading-relaxed italic">
              "Comparative Digital Marketing Analysis and Strategic Recommendations for T.Stanes"
            </p>
          </div>
        </div>

        {/* Presenter Info */}
        <div className="mt-16 pt-8 border-t-2 border-emerald-400 space-y-3">
          <p className="text-xl">
            <span className="font-semibold">Presenter:</span> Gagan Bansal
          </p>
          <p className="text-lg">
            <span className="font-semibold">Duration:</span> 8 weeks | Summer 2024
          </p>
          <p className="text-lg">
            <span className="font-semibold">Sector:</span> Agribusiness & Agri-Inputs
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-sm opacity-75">
        <p>Professional Agricultural Solutions | Organic & Biological Inputs</p>
      </div>
    </div>
  );
}
