import { Users, Zap, TrendingUp } from 'lucide-react';

export default function DigitalExecution() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Digital Execution Model
          </h1>
          <p className="text-lg text-emerald-700">Recommended Digital Marketing Structure</p>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto mt-4"></div>
        </div>

        {/* Core Principle */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Core Principle</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg font-bold mb-2">In-House Team</p>
              <p className="text-emerald-100">Decides WHAT to communicate</p>
            </div>
            <div className="flex items-center justify-center text-3xl">→</div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-lg font-bold mb-2">External Agency</p>
              <p className="text-emerald-100">Focuses on HOW to execute</p>
            </div>
          </div>
        </div>

        {/* Team Structure */}
        <div className="grid grid-cols-2 gap-8 mb-12">
          {/* In-House Team */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-offwhite p-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Users size={28} />
                In-House Team
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="border-l-4 border-emerald-700 pl-4">
                <h4 className="text-lg font-bold text-emerald-900">Agri Content Specialist</h4>
                <ul className="mt-3 space-y-2 text-emerald-800">
                  <li>✓ Crop advisories</li>
                  <li>✓ Farmer problem-solution topics</li>
                  <li>✓ Content approval</li>
                </ul>
              </div>
              <div className="border-l-4 border-emerald-700 pl-4">
                <h4 className="text-lg font-bold text-emerald-900">Marketing Coordinator</h4>
                <ul className="mt-3 space-y-2 text-emerald-800">
                  <li>✓ Coordinate with agency</li>
                  <li>✓ Track posting schedule</li>
                  <li>✓ Monitor engagement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Agency Role */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-offwhite p-6">
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Zap size={28} />
                External Agency Role
              </h3>
            </div>
            <div className="p-8">
              <div className="space-y-4 text-emerald-800">
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700">
                  <p className="font-semibold mb-1">Video Production</p>
                  <p className="text-sm">Creation and editing of quality video content</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700">
                  <p className="font-semibold mb-1">Creative Reels</p>
                  <p className="text-sm">Design and production of social media reels</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700">
                  <p className="font-semibold mb-1">Posting & Scheduling</p>
                  <p className="text-sm">Content calendar management and distribution</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-700">
                  <p className="font-semibold mb-1">Paid Promotions</p>
                  <p className="text-sm">Campaign management and audience targeting</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Suggested Workflow</h2>
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-4">
            {['Planning', 'Content\nCreation', 'Review &\nApproval', 'Posting', 'Engagement\nMonitoring', 'Weekly\nReview'].map((step, idx) => (
              <div key={idx} className="flex items-center min-w-max">
                <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-4 w-40 h-32 flex items-center justify-center text-center font-semibold shadow-lg">
                  {step}
                </div>
                {idx < 5 && <div className="w-6 h-1 bg-emerald-700 mx-3"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* KPI System */}
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-emerald-50 rounded-lg p-8 border-l-4 border-emerald-700">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
              <TrendingUp className="text-emerald-700" size={28} />
              Weekly KPIs
            </h3>
            <div className="space-y-3 text-emerald-800">
              <div className="bg-white p-3 rounded-lg font-semibold">📱 5–6 Reels</div>
              <div className="bg-white p-3 rounded-lg font-semibold">👨‍🌾 1 Farmer Testimonial</div>
              <div className="bg-white p-3 rounded-lg font-semibold">📹 1 Advisory Video</div>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-8 border-l-4 border-emerald-700">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
              <TrendingUp className="text-emerald-700" size={28} />
              Monthly Metrics
            </h3>
            <div className="space-y-3 text-emerald-800">
              <div className="bg-white p-3 rounded-lg font-semibold">📊 Engagement Growth %</div>
              <div className="bg-white p-3 rounded-lg font-semibold">✓ Posting Consistency</div>
              <div className="bg-white p-3 rounded-lg font-semibold">🤝 Farmer Interaction Quality</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
