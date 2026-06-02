import { BarChart3, Users, Video } from 'lucide-react';

export default function DigitalMarketing() {
  const channels = [
    { name: 'Website', metric: 'SEO & Content' },
    { name: 'Instagram', metric: 'Visual & Reels' },
    { name: 'LinkedIn', metric: 'B2B & Thought Leadership' },
    { name: 'Facebook', metric: 'Community & Engagement' },
    { name: 'YouTube', metric: 'Educational Videos' },
  ];

  const benchmarks = [
    { metric: 'Content Calendar', score: 'Consistency & Planning' },
    { metric: 'Educational Reels', score: 'Farmer Storytelling' },
    { metric: 'Integration', score: 'Field + Digital Sync' },
    { metric: 'Branding', score: 'Visual Consistency' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Digital Marketing Analysis
          </h1>
          <p className="text-lg text-emerald-700">Minor Project - Competitor Benchmarking</p>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto mt-4"></div>
        </div>

        {/* Analysis Scope */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12 border-l-4 border-emerald-700">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            <BarChart3 className="text-emerald-700" size={28} />
            Competitor Benchmarking Scope
          </h2>
          
          <div className="grid grid-cols-5 gap-4">
            {channels.map((channel, idx) => (
              <div key={idx} className="bg-emerald-50 rounded-lg p-4 text-center border border-emerald-200 hover:shadow-lg transition-shadow">
                <p className="font-bold text-emerald-900">{channel.name}</p>
                <p className="text-sm text-emerald-700 mt-2">{channel.metric}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Observations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">Key Observations</h2>
          
          <div className="grid grid-cols-3 gap-6">
            {benchmarks.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <Video className="flex-shrink-0" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.metric}</h3>
                <p className="text-emerald-100">{item.score}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-3 mb-4">
                <Video className="flex-shrink-0" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Video Strategy</h3>
              <p className="text-emerald-100">Better use of educational reels and storytelling</p>
            </div>
          </div>
        </div>

        {/* Insights Box */}
        <div className="bg-emerald-50 rounded-lg p-8 border-l-4 border-emerald-700 mb-8">
          <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-3">
            <Users size={28} />
            Digital Marketing Insights
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-emerald-900 mb-2">✓ Content Consistency</p>
              <p className="text-sm text-emerald-800">Top competitors maintain regular posting schedules</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-emerald-900 mb-2">✓ Farmer Engagement</p>
              <p className="text-sm text-emerald-800">Success through authentic farmer testimonials and stories</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-emerald-900 mb-2">✓ Omnichannel Presence</p>
              <p className="text-sm text-emerald-800">Integrated approach across multiple digital platforms</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-emerald-900 mb-2">✓ Field Integration</p>
              <p className="text-sm text-emerald-800">Alignment between on-ground activities and digital campaigns</p>
            </div>
          </div>
        </div>

        {/* Recommendation Box */}
        <div className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Strategic Finding</h3>
          <p className="text-lg leading-relaxed">
            Competitors with better content consistency, farmer storytelling, and integration between field activities and digital marketing show superior engagement and brand loyalty. This presents an opportunity for T.Stanes to differentiate through a strategic digital execution model.
          </p>
        </div>
      </div>
    </div>
  );
}
