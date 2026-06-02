import { Lightbulb, CheckCircle, Target, Zap } from 'lucide-react';

export default function Insights() {
  const insights = [
    'Institutional ecosystems can become future distribution channels',
    'Relationship-building is critical in rural ecosystems',
    'Demonstration-based marketing is important for biological products',
    'Digital visibility supports rural penetration',
    'PACS and contract farming are scalable future channels'
  ];

  const recommendations = [
    { title: 'Build Institutional Networks', desc: 'Develop relationships with FPOs, PACS, and cooperatives' },
    { title: 'Pilot Collaborations', desc: 'Start pilot programs to validate channel viability' },
    { title: 'Explore Export Ecosystems', desc: 'Target export-oriented procurement channels' },
    { title: 'Leverage Certifications', desc: 'Use FCO, CIBRC, and ISO as market-entry advantages' },
    { title: 'Integrate Digital & Field', desc: 'Combine demonstrations with digital marketing' },
    { title: 'E-Commerce Expansion', desc: 'Build awareness through online platforms' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-emerald-900 mb-4">Key Insights & Recommendations</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
      </div>

      {/* Key Insights */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <Lightbulb className="text-emerald-700" size={32} />
          <h3 className="text-3xl font-bold text-emerald-900">Key Insights</h3>
        </div>

        <div className="space-y-4">
          {insights.map((insight, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-emerald-700 hover:shadow-xl transition-shadow flex items-start gap-4">
              <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-offwhite font-bold flex-shrink-0">
                {idx + 1}
              </div>
              <p className="text-lg text-emerald-800 leading-relaxed">{insight}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Target className="text-emerald-700" size={32} />
          <h3 className="text-3xl font-bold text-emerald-900">Strategic Recommendations</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {recommendations.map((rec, idx) => (
            <div key={idx} className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
              <div className="flex items-start gap-4">
                <CheckCircle className="flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-lg mb-2">{rec.title}</h4>
                  <p className="text-emerald-100 text-sm leading-relaxed">{rec.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Direction */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg p-8 border-2 border-emerald-700">
          <div className="flex items-start gap-3 mb-4">
            <Zap className="text-emerald-700 flex-shrink-0" size={28} />
            <h3 className="text-2xl font-bold text-emerald-900">Strategic Direction</h3>
          </div>
          <p className="text-lg text-emerald-800 leading-relaxed mb-6">
            The future growth of biological and organic agri-input companies depends on:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-emerald-800 font-medium">Institutional ecosystems</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-emerald-800 font-medium">Advisory-based selling</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-emerald-800 font-medium">Demonstration-led awareness</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-3 h-3 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-emerald-800 font-medium">Export-oriented farming systems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
