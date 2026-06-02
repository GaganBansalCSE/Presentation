import { Handshake, TrendingUp, Zap } from 'lucide-react';

export default function ContractFarming() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Contract Farming & E-Commerce Expansion
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
        </div>

        {/* Contract Farming Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="text-emerald-700" size={32} />
            <h2 className="text-3xl font-bold text-emerald-900">Sugar Mills & Contract Farming Ecosystem</h2>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Sugar Mills */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Sugar Mill Ecosystem</h3>
              <p className="text-emerald-800 mb-4">Explored sugar mills as farmer-linked ecosystems for:</p>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ Bio-input promotion</li>
                <li>✓ Soil health campaigns</li>
                <li>✓ Crop advisory integration</li>
              </ul>
              <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                <p className="text-red-700 font-semibold">Challenge: Lack of centralized authentic database</p>
              </div>
            </div>

            {/* Contract Farming */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Contract Farming Companies</h3>
              <p className="text-emerald-800 mb-4">Export-oriented companies guide farmers on:</p>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ MRL compliance</li>
                <li>✓ Export quality standards</li>
                <li>✓ Residue-free produce requirements</li>
              </ul>
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-emerald-700 font-semibold">↓ Creates demand for biological products</p>
              </div>
            </div>
          </div>

          {/* Opportunity for T.Stanes */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap size={28} />
              Strategic Opportunity for T.Stanes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
                <p className="font-semibold mb-2">B2B Partnerships</p>
                <p className="text-sm opacity-90">Direct collaboration with export-oriented companies</p>
              </div>
              <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
                <p className="font-semibold mb-2">Demonstration Programs</p>
                <p className="text-sm opacity-90">Showcase product effectiveness on premium crops</p>
              </div>
              <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
                <p className="font-semibold mb-2">Technical Advisory</p>
                <p className="text-sm opacity-90">Provide crop management expertise and guidance</p>
              </div>
              <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-4">
                <p className="font-semibold mb-2">Sustainable Packages</p>
                <p className="text-sm opacity-90">Develop complete biological crop management solutions</p>
              </div>
            </div>
          </div>

          {/* Example Companies */}
          <div className="bg-emerald-50 rounded-lg p-8 border-l-4 border-emerald-700 mb-8">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Target Partnership Companies</h3>
            <div className="flex flex-wrap gap-4">
              {['KRBL Limited', 'Ebro Foods', 'Export-oriented Agricultural Companies'].map((company, idx) => (
                <div key={idx} className="bg-white px-6 py-3 rounded-lg border border-emerald-300 font-medium text-emerald-800">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* E-Commerce Section */}
        <div>
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">E-Commerce Expansion Strategy</h2>

          {/* Process Flow */}
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h3 className="text-lg font-bold text-emerald-900 mb-6">E-Commerce Process Flow</h3>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              {['Product\nSelection', 'Marketplace\nOnboarding', 'Branding &\nAwareness', 'Farmer\nEngagement', 'Lead\nConversion'].map((step, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-4 w-32 h-24 flex items-center justify-center text-center font-semibold text-sm">
                    {step}
                  </div>
                  {idx < 4 && <div className="w-8 h-1 bg-emerald-700 mx-2"></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Requirements & Strengths */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-700">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Company Strengths</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ FCO certifications</li>
                <li>✓ CIBRC approvals</li>
                <li>✓ ISO certifications</li>
                <li>✓ State registrations</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Additional Requirements</h3>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ Product digitization</li>
                <li>✓ Marketplace onboarding</li>
                <li>✓ Packaging optimization</li>
                <li>✓ Logistics integration</li>
                <li>✓ Digital marketing campaigns</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
