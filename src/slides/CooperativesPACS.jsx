import { Building2, CheckCircle, AlertCircle } from 'lucide-react';

export default function CooperativesPACS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Cooperatives & PACS Ecosystem
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
        </div>

        {/* Cooperatives Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="text-emerald-700" size={32} />
            <h2 className="text-3xl font-bold text-emerald-900">Cooperatives</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Cooperative Approach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-emerald-800">Identify regions with higher organic adoption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-emerald-800">Study operating cooperatives in those regions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-emerald-800">Analyze partnership opportunities</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-8 border-l-4 border-emerald-700">
              <h3 className="text-xl font-bold text-emerald-900 mb-4">Cooperative Potential</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-emerald-800 font-medium">Trusted farmer networks</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-emerald-800 font-medium">Bulk purchase capacity</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-emerald-800 font-medium">Awareness generation ability</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-emerald-700 flex-shrink-0 mt-1" size={20} />
                  <span className="text-emerald-800 font-medium">Institutional partnerships</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PACS Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">PACS (Primary Agricultural Credit Society)</h2>
          
          {/* Definition */}
          <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-8 mb-6">
            <h3 className="text-xl font-bold mb-4">What are PACS?</h3>
            <p className="leading-relaxed">
              PACS are village-level cooperative institutions directly connected with farmers. They already handle credit, fertilizer distribution, procurement, and farmer interaction—making them ideal distribution and advisory centers.
            </p>
          </div>

          {/* PACS Potential */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-emerald-700" size={24} />
                Evolution Opportunities
              </h3>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ Rural agri-service centers</li>
                <li>✓ Distribution & advisory points</li>
                <li>✓ Demo & training centers</li>
                <li>✓ Digital rural commerce points</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-lg font-bold text-emerald-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-emerald-700" size={24} />
                Suitable Products
              </h3>
              <ul className="space-y-2 text-emerald-800">
                <li>✓ Fertilizers & biofertilizers</li>
                <li>✓ Seeds</li>
                <li>✓ Organic inputs</li>
                <li>✓ Micronutrients</li>
              </ul>
            </div>
          </div>

          {/* Strengths & Challenges */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6 border-t-4 border-emerald-700">
              <h3 className="text-lg font-bold text-emerald-900 mb-4">Strategic Opportunities</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-emerald-800">
                  <span className="font-bold text-emerald-700">•</span> Lower rural customer acquisition cost
                </li>
                <li className="flex items-start gap-2 text-emerald-800">
                  <span className="font-bold text-emerald-700">•</span> Stronger farmer trust foundation
                </li>
                <li className="flex items-start gap-2 text-emerald-800">
                  <span className="font-bold text-emerald-700">•</span> Government modernization support
                </li>
                <li className="flex items-start gap-2 text-emerald-800">
                  <span className="font-bold text-emerald-700">•</span> Scalable across India
                </li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-t-4 border-red-500">
              <h3 className="text-lg font-bold text-red-900 mb-4">Key Challenges</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-red-800">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Slow decision-making processes</span>
                </li>
                <li className="flex items-start gap-2 text-red-800">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Operational & policy differences</span>
                </li>
                <li className="flex items-start gap-2 text-red-800">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Payment cycle risks</span>
                </li>
                <li className="flex items-start gap-2 text-red-800">
                  <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>Varying organizational maturity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
