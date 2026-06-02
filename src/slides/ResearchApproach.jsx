import { ArrowRight } from 'lucide-react';

export default function ResearchApproach() {
  const steps = [
    'Secondary\nResearch',
    'Database\nCollection',
    'Shortlisting',
    'Outreach\nStrategy',
    'Field\nVisits',
    'Analysis',
    'Recommendations'
  ];

  const keyPoints = [
    { title: 'Databases', desc: 'FPO databases from SFAC & NABARD' },
    { title: 'Shortlisting', desc: 'Agri-input activities & organic focus' },
    { title: 'Geographic Coverage', desc: 'Haryana, Rajasthan, UP, Maharashtra' },
    { title: 'Response Rate', desc: '~10% with operational insights' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Research Methodology
          </h1>
          <p className="text-lg text-emerald-700">Major Project - Research Approach</p>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto mt-4"></div>
        </div>

        {/* Process Flow */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-emerald-900 mb-8 text-center">Research Process Flow</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center">
                <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-4 w-32 h-32 flex items-center justify-center text-center font-semibold shadow-lg">
                  {step}
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight className="text-emerald-700 mx-2 flex-shrink-0" size={32} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {keyPoints.map((point, idx) => (
            <div key={idx} className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-700">
              <h3 className="text-lg font-bold text-emerald-900 mb-2">{point.title}</h3>
              <p className="text-emerald-800">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Outreach Details */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Outreach Conducted</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="text-sm opacity-90">Calls & LinkedIn</p>
              <p className="text-2xl font-bold">Initial Contact</p>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="text-sm opacity-90">Appointments</p>
              <p className="text-2xl font-bold">Scheduled</p>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="text-sm opacity-90">Field Visits</p>
              <p className="text-2xl font-bold">On-ground</p>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="text-sm opacity-90">Insights</p>
              <p className="text-2xl font-bold">Operational</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
