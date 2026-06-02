import { Leaf, Building2, Package, TrendingUp, Users, Globe } from 'lucide-react';

export default function Findings() {
  const findings = [
    {
      category: 'FPOs (Farmer Producer Organizations)',
      desc: 'Emerging as strong alternative channels with organized farming communities',
      icon: <Users size={32} />,
      color: 'from-blue-500 to-blue-600',
    },
    {
      category: 'PACS (Primary Agricultural Credit Societies)',
      desc: 'Traditional rural institutions with established farmer networks and trust',
      icon: <Building2 size={32} />,
      color: 'from-green-500 to-green-600',
    },
    {
      category: 'Cooperatives',
      desc: 'Strong institutional frameworks for collective farming and purchasing',
      icon: <Package size={32} />,
      color: 'from-purple-500 to-purple-600',
    },
    {
      category: 'Contract Farming',
      desc: 'Direct relationships with large institutional buyers and exporters',
      icon: <TrendingUp size={32} />,
      color: 'from-orange-500 to-orange-600',
    },
    {
      category: 'Digital Channels',
      desc: 'E-commerce and digital marketing enabling direct farmer engagement',
      icon: <Globe size={32} />,
      color: 'from-red-500 to-red-600',
    },
    {
      category: 'Sustainable Practices',
      desc: 'Growing demand for organic and biological inputs in rural markets',
      icon: <Leaf size={32} />,
      color: 'from-emerald-500 to-emerald-600',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-emerald-900 mb-4">Field Findings</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {findings.map((finding, idx) => (
          <div key={idx} className={`bg-gradient-to-br ${finding.color} text-offwhite rounded-lg p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105`}>
            <div className="mb-4">{finding.icon}</div>
            <h3 className="text-lg font-bold mb-3">{finding.category}</h3>
            <p className="text-sm opacity-90">{finding.desc}</p>
          </div>
        ))}
      </div>

      {/* Key Statistics */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { stat: '50+', label: 'Field Visits' },
          { stat: '200+', label: 'Farmers Engaged' },
          { stat: '15+', label: 'Institutions Studied' },
          { stat: '5', label: 'States Covered' },
        ].map((item, idx) => (
          <div key={idx} className="bg-emerald-700 text-offwhite rounded-lg p-6 text-center shadow-lg">
            <p className="text-4xl font-bold mb-2">{item.stat}</p>
            <p className="text-sm opacity-90">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
