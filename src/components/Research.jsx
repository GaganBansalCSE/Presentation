import { Database, MapPin, Users, BookOpen } from 'lucide-react';

export default function Research() {
  const methodology = [
    { title: 'Secondary Research', desc: 'Comprehensive literature review and market data analysis', icon: <BookOpen size={32} /> },
    { title: 'Database Collection', desc: 'Organized farmer networks, FPO, PACS, and cooperative data', icon: <Database size={32} /> },
    { title: 'Field Visits', desc: 'Ground-level insights across multiple states and regions', icon: <MapPin size={32} /> },
    { title: 'Stakeholder Engagement', desc: 'Direct interaction with farmers, traders, and institutional heads', icon: <Users size={32} /> },
  ];

  const outreach = [
    { region: 'Haryana', states: 'Panipat, Sonepat' },
    { region: 'Rajasthan', states: 'Jaipur, Kota' },
    { region: 'Uttar Pradesh', states: 'Noida, Agra' },
    { region: 'Maharashtra', states: 'Pune, Nasik' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-emerald-900 mb-4">Research Approach</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
      </div>

      {/* Methodology */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Research Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {methodology.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-emerald-700">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-3">{item.title}</h4>
                  <p className="text-emerald-800">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Outreach */}
      <div>
        <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Geographic Outreach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outreach.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700">
              <h4 className="text-xl font-bold text-emerald-900 mb-3">{item.region}</h4>
              <p className="text-emerald-800">{item.states}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
