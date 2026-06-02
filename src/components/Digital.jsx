import { BarChart3, TrendingUp, Users, Zap } from 'lucide-react';

export default function Digital() {
  const competitors = [
    { name: 'Competitor A', score: 85, channels: 'Instagram, YouTube, Blog' },
    { name: 'Competitor B', score: 72, channels: 'Facebook, LinkedIn, Email' },
    { name: 'Competitor C', score: 68, channels: 'Twitter, Webinars, Podcast' },
    { name: 'T.Stanes Current', score: 58, channels: 'Website, Email, WhatsApp' },
  ];

  const contentStrategy = [
    {
      title: 'Farmer Success Stories',
      desc: 'Authentic testimonials and case studies showcasing product benefits',
      icon: <Users size={32} />,
    },
    {
      title: 'Educational Content',
      desc: 'How-to guides, webinars, and training resources for farmers',
      icon: <TrendingUp size={32} />,
    },
    {
      title: 'Product Demonstrations',
      desc: 'Video content and infographics highlighting product features',
      icon: <Zap size={32} />,
    },
    {
      title: 'Market Updates',
      desc: 'Regular insights on farming trends and seasonal recommendations',
      icon: <BarChart3 size={32} />,
    },
  ];

  const executionModel = [
    'In-house content team for core strategy',
    'Agency partnerships for specialized content',
    'Weekly performance tracking and optimization',
    'Monthly strategic reviews and adjustments',
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-emerald-900 mb-4">Digital Marketing Strategy</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
      </div>

      {/* Competitor Analysis */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Competitor Benchmarking</h3>
        <div className="space-y-4">
          {competitors.map((comp, idx) => (
            <div key={idx} className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-emerald-700">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-bold text-emerald-900">{comp.name}</h4>
                <div className="flex items-center gap-2">
                  <div className="w-32 h-4 bg-emerald-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full transition-all"
                      style={{ width: `${comp.score}%` }}
                    ></div>
                  </div>
                  <span className="font-bold text-emerald-900">{comp.score}%</span>
                </div>
              </div>
              <p className="text-emerald-800 text-sm">{comp.channels}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content Strategy */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Content Strategy Pillars</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contentStrategy.map((strategy, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="text-emerald-700">{strategy.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-emerald-900 mb-3">{strategy.title}</h4>
                  <p className="text-emerald-800">{strategy.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Execution Model */}
      <div>
        <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">Recommended Execution Model</h3>
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-6">Key Components</h4>
              <ul className="space-y-3">
                {executionModel.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-offwhite rounded-full flex items-center justify-center text-emerald-700 font-bold flex-shrink-0 text-sm">
                      {idx + 1}
                    </div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-emerald-600 bg-opacity-50 rounded-lg p-6 flex items-center">
              <div>
                <p className="text-lg font-semibold mb-3">Expected Outcomes</p>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>✓ 40% increase in digital engagement</li>
                  <li>✓ Enhanced brand awareness</li>
                  <li>✓ Improved farmer acquisition</li>
                  <li>✓ Stronger market positioning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
