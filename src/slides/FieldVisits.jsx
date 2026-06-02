import { MapPin, Users, BookOpen, Zap } from 'lucide-react';

export default function FieldVisits() {
  const visits = [
    {
      title: 'Haryana Agriculture Department',
      location: 'Chandigarh',
      insight: 'Government ecosystem involvement'
    },
    {
      title: 'Panchkula FPO',
      location: 'Haryana',
      insight: 'Progressive farmer networks'
    },
    {
      title: 'NCONF Ghaziabad',
      location: 'Uttar Pradesh',
      insight: 'Cooperative institutional structure'
    }
  ];

  const learnings = [
    {
      icon: <Zap size={32} />,
      title: 'Natural Farming Promotion',
      desc: 'Government actively promotes natural farming through various schemes'
    },
    {
      icon: <Users size={32} />,
      title: 'Farmer Trust Building',
      desc: 'Relationship-building is critical for institutional penetration'
    },
    {
      icon: <BookOpen size={32} />,
      title: 'Government Support',
      desc: 'Strong ecosystem support for sustainable agriculture initiatives'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Field Visits & Key Learnings
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
        </div>

        {/* Visits Timeline */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Key Field Visits</h2>
          <div className="grid grid-cols-3 gap-6">
            {visits.map((visit, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-offwhite p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin size={24} />
                    <div>
                      <h3 className="font-bold text-lg">{visit.title}</h3>
                      <p className="text-sm opacity-90">{visit.location}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-emerald-800 font-medium">{visit.insight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Key Learnings</h2>
          <div className="grid grid-cols-3 gap-6">
            {learnings.map((learning, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-8 border-l-4 border-emerald-700 hover:shadow-lg transition-shadow">
                <div className="text-emerald-700 mb-4">{learning.icon}</div>
                <h3 className="text-lg font-bold text-emerald-900 mb-3">{learning.title}</h3>
                <p className="text-emerald-800 text-sm leading-relaxed">{learning.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Outcomes */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Strategic Outcomes</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-offwhite rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0 text-sm">✓</div>
              <p>Built institutional contact ecosystem across key regions</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-offwhite rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0 text-sm">✓</div>
              <p>Identified progressive FPOs interested in sustainable agriculture</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-offwhite rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0 text-sm">✓</div>
              <p>Understood government support mechanisms and schemes</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-offwhite rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0 text-sm">✓</div>
              <p>Gathered operational insights for channel expansion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
