import { Network, TrendingUp } from 'lucide-react';

export default function AlternateChannels() {
  const channels = [
    { name: 'Cooperatives', desc: 'Trusted farmer networks with bulk reach capability' },
    { name: 'PACS', desc: 'Village-level institutions with direct farmer connection' },
    { name: 'Sugar Mill Ecosystems', desc: 'Farmer-linked channels for bio-input promotion' },
    { name: 'Contract Farming', desc: 'Export-oriented procurement ecosystems' },
    { name: 'Export Channels', desc: 'Premium farmer segments with sustainability focus' },
    { name: 'E-commerce Platforms', desc: 'Digital expansion for geographic reach' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Alternate Channel Exploration
          </h1>
          <p className="text-lg text-emerald-700">Beyond Traditional Dealer Networks</p>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto mt-4"></div>
        </div>

        {/* Strategic Concept */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12 border-l-4 border-emerald-700">
          <div className="flex items-start gap-4">
            <Network className="text-emerald-700 flex-shrink-0 mt-1" size={40} />
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-3">Strategic Insight</h2>
              <p className="text-lg text-emerald-800 leading-relaxed">
                The project scope extended beyond FPO analysis to explore a comprehensive ecosystem of institutional channels. These diverse channels represent scalable, relationship-based distribution networks that align with T.Stanes' biological and organic product positioning.
              </p>
            </div>
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          {channels.map((channel, idx) => (
            <div key={idx} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-6 border-t-4 border-emerald-700 hover:shadow-lg transition-all hover:scale-105">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-offwhite font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-emerald-900 text-lg">{channel.name}</h3>
                  <p className="text-emerald-800 text-sm mt-2">{channel.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Advantages */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8">
          <div className="flex items-start gap-4 mb-6">
            <TrendingUp size={32} />
            <h2 className="text-2xl font-bold">Strategic Advantages</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="font-semibold mb-2">Relationship-Based Growth</p>
              <p className="text-sm opacity-90">Institutional channels leverage trust and established farmer networks</p>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="font-semibold mb-2">Scalable Reach</p>
              <p className="text-sm opacity-90">Bulk order capacity and organized farmer groups for rapid expansion</p>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="font-semibold mb-2">Cost Efficiency</p>
              <p className="text-sm opacity-90">Lower customer acquisition cost through institutional partnerships</p>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
              <p className="font-semibold mb-2">Market Credibility</p>
              <p className="text-sm opacity-90">Institutional endorsement increases product adoption and brand value</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
