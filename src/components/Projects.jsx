import { Target, BarChart3, Globe, Lightbulb } from 'lucide-react';

export default function Projects({ activeTab, setActiveTab }) {
  const majorObjectives = [
    { title: 'Alternate Distribution Channels', desc: 'Study and identify alternate channels beyond traditional dealer networks for product distribution', icon: <Target size={28} /> },
    { title: 'Institutional Ecosystems', desc: 'Understand institutional farmer ecosystems and their influence networks', icon: <Globe size={28} /> },
    { title: 'Scalability Analysis', desc: 'Explore scalable rural expansion opportunities', icon: <BarChart3 size={28} /> },
    { title: 'Digital Opportunities', desc: 'Study digital and e-commerce expansion possibilities', icon: <Lightbulb size={28} /> },
  ];

  const minorObjectives = [
    { title: 'Competitor Benchmarking', desc: 'Benchmark peer competitors across digital channels' },
    { title: 'Content Strategy', desc: 'Study content and engagement strategies for effectiveness' },
    { title: 'Strategic Recommendations', desc: 'Suggest digital improvement structure and execution model' },
  ];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-12 justify-center flex-wrap">
        <button
          onClick={() => setActiveTab('major')}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'major'
              ? 'bg-emerald-700 text-offwhite shadow-lg'
              : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
          }`}
        >
          Major Project
        </button>
        <button
          onClick={() => setActiveTab('minor')}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'minor'
              ? 'bg-emerald-700 text-offwhite shadow-lg'
              : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
          }`}
        >
          Minor Project
        </button>
      </div>

      {/* Major Project Content */}
      {activeTab === 'major' && (
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
            "Exploring Alternate Distribution Channels for Agri Inputs through Institutional and Digital Ecosystems"
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {majorObjectives.map((obj, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-700">{obj.icon}</div>
                  <div>
                    <h4 className="font-bold text-emerald-900 mb-2 text-lg">{obj.title}</h4>
                    <p className="text-emerald-800">{obj.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Minor Project Content */}
      {activeTab === 'minor' && (
        <div className="animate-fade-in">
          <h3 className="text-3xl font-bold text-emerald-900 mb-8 text-center">
            "Comparative Digital Marketing Analysis and Strategic Recommendations for T.Stanes"
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {minorObjectives.map((obj, idx) => (
              <div key={idx} className="bg-emerald-50 rounded-lg p-6 shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-shadow">
                <h4 className="font-bold text-emerald-900 mb-3 text-lg">{obj.title}</h4>
                <p className="text-emerald-800">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
