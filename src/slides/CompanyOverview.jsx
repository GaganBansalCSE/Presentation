import { MapPin, Award, Leaf, Users } from 'lucide-react';

export default function CompanyOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            About T.Stanes and Company Limited
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* Legacy and Presence */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
            <div className="flex items-start gap-4">
              <Award className="text-emerald-700 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Legacy & Presence</h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>✓ Established player in agri-input industry</li>
                  <li>✓ Pan-India presence</li>
                  <li>✓ Trusted by farmers nationwide</li>
                  <li>✓ Strong market reputation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
            <div className="flex items-start gap-4">
              <Leaf className="text-emerald-700 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-emerald-900 mb-3">Core Focus</h3>
                <ul className="space-y-2 text-emerald-800">
                  <li>✓ Organic agriculture solutions</li>
                  <li>✓ Biological inputs & products</li>
                  <li>✓ Sustainable farming practices</li>
                  <li>✓ Natural crop management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Product Portfolio */}
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 rounded-lg p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-offwhite font-bold">📦</div>
            Product Portfolio
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {['Biofertilizers', 'Biopesticides', 'Growth Promoters', 'Micronutrients', 'Organic Inputs', 'Soil Amendments'].map((product, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg text-center border border-emerald-200 hover:shadow-md transition-shadow">
                <p className="font-semibold text-emerald-800">{product}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Reach */}
        <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
          <div className="flex items-start gap-4">
            <MapPin className="text-emerald-700 flex-shrink-0 mt-1" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Geographic Reach</h3>
              <div className="grid grid-cols-3 gap-4">
                {['North India', 'South India', 'East India', 'West India', 'Central India', 'All States'].map((region, idx) => (
                  <div key={idx} className="bg-emerald-50 p-3 rounded border border-emerald-200 text-center">
                    <p className="text-emerald-800 font-medium">{region}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
