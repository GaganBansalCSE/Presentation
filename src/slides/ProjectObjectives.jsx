import { Target, BarChart3, Globe } from 'lucide-react';

export default function ProjectObjectives() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Project Objectives
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
        </div>

        {/* Major Project */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-offwhite font-bold">1</div>
            <h2 className="text-3xl font-bold text-emerald-900">Major Project Objectives</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Target className="text-emerald-700 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Alternate Distribution Channels</h3>
                  <p className="text-emerald-800">Study and identify alternate channels beyond traditional dealer networks for product distribution</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Globe className="text-emerald-700 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Institutional Ecosystems</h3>
                  <p className="text-emerald-800">Understand institutional farmer ecosystems and their influence networks</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <BarChart3 className="text-emerald-700 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Scalability Analysis</h3>
                  <p className="text-emerald-800">Explore scalable rural expansion opportunities</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <Target className="text-emerald-700 flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2 text-lg">Digital Opportunities</h3>
                  <p className="text-emerald-800">Study digital and e-commerce expansion possibilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minor Project */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-offwhite font-bold">2</div>
            <h2 className="text-3xl font-bold text-emerald-900">Minor Project Objectives</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-emerald-50 rounded-lg p-6 shadow-lg border-l-4 border-emerald-600">
              <h3 className="font-bold text-emerald-900 mb-3">Competitor Benchmarking</h3>
              <p className="text-emerald-800">Benchmark peer competitors across digital channels</p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 shadow-lg border-l-4 border-emerald-600">
              <h3 className="font-bold text-emerald-900 mb-3">Content Strategy</h3>
              <p className="text-emerald-800">Study content and engagement strategies for effectiveness</p>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6 shadow-lg border-l-4 border-emerald-600">
              <h3 className="font-bold text-emerald-900 mb-3">Strategic Recommendations</h3>
              <p className="text-emerald-800">Suggest digital improvement structure and execution model</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
