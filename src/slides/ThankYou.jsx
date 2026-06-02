import { Leaf, Mail } from 'lucide-react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-offwhite flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full opacity-20 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600 rounded-full opacity-20 -ml-48 -mb-48"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Main Message */}
        <div className="mb-12">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Thank You
          </h1>
          <p className="text-3xl text-emerald-100 font-light italic">
            For your time and attention
          </p>
        </div>

        {/* Decorative Element */}
        <div className="mb-12 flex justify-center">
          <div className="bg-offwhite bg-opacity-20 p-8 rounded-full">
            <Leaf size={64} className="text-emerald-100" />
          </div>
        </div>

        {/* Key Message */}
        <div className="bg-emerald-600 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 mb-12 border border-emerald-400">
          <h2 className="text-2xl font-semibold mb-4">Questions & Discussion</h2>
          <p className="text-lg text-emerald-100 leading-relaxed">
            I'm open to questions, feedback, and discussions about the research findings and strategic recommendations presented in this presentation.
          </p>
        </div>

        {/* Project Summary */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="bg-emerald-600 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-emerald-400">
            <h3 className="font-bold mb-2">Major Project</h3>
            <p className="text-sm text-emerald-100">
              Alternate Distribution Channels for Agri Inputs
            </p>
          </div>
          <div className="bg-emerald-600 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-emerald-400">
            <h3 className="font-bold mb-2">Minor Project</h3>
            <p className="text-sm text-emerald-100">
              Digital Marketing Strategic Analysis
            </p>
          </div>
        </div>

        {/* Organization Info */}
        <div className="border-t-2 border-emerald-400 pt-8">
          <h3 className="text-2xl font-bold mb-6">T.Stanes and Company Limited</h3>
          <p className="text-emerald-100 mb-2">Professional Agricultural Solutions</p>
          <p className="text-emerald-100 mb-6">Organic & Biological Inputs for Sustainable Farming</p>
          
          <div className="flex justify-center items-center gap-2 text-emerald-100">
            <Mail size={20} />
            <span>Building the Future of Agribusiness in India</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 text-center text-sm opacity-75">
        <p>Summer Internship 2024 | Agribusiness & Agri-Inputs Sector</p>
      </div>
    </div>
  );
}
