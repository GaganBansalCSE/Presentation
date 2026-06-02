import { useState } from 'react';
import { Target, BarChart3, Globe, Lightbulb, ChevronDown } from 'lucide-react';

export default function Projects({ activeTab, setActiveTab }) {
  const [expandedMajor, setExpandedMajor] = useState(0);
  const [expandedMinor, setExpandedMinor] = useState(0);

  const majorObjectives = [
    { 
      title: 'Alternate Distribution Channels', 
      desc: 'Study and identify alternate channels beyond traditional dealer networks for product distribution',
      details: 'Investigated FPOs, PACS, Cooperatives, and export companies as viable distribution channels.',
      icon: <Target size={28} /> 
    },
    { 
      title: 'Institutional Ecosystems', 
      desc: 'Understand institutional farmer ecosystems and their influence networks',
      details: 'Analyzed farmer producer organizations and their role in rural market dynamics.',
      icon: <Globe size={28} /> 
    },
    { 
      title: 'Scalability Analysis', 
      desc: 'Explore scalable rural expansion opportunities',
      details: 'Developed frameworks for scaling institutional partnerships across regions.',
      icon: <BarChart3 size={28} /> 
    },
    { 
      title: 'Digital Opportunities', 
      desc: 'Study digital and e-commerce expansion possibilities',
      details: 'Evaluated digital platforms and online marketplace opportunities for farmer engagement.',
      icon: <Lightbulb size={28} /> 
    },
  ];

  const minorObjectives = [
    { 
      title: 'Competitor Benchmarking', 
      desc: 'Benchmark peer competitors across digital channels',
      details: 'Analyzed digital presence and marketing strategies of 10+ competitors.'
    },
    { 
      title: 'Content Strategy', 
      desc: 'Study content and engagement strategies for effectiveness',
      details: 'Evaluated content performance metrics and engagement patterns.'
    },
    { 
      title: 'Strategic Recommendations', 
      desc: 'Suggest digital improvement structure and execution model',
      details: 'Proposed in-house and agency-based execution framework with KPIs.'
    },
  ];

  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex gap-4 mb-12 justify-center flex-wrap">
        <button
          onClick={() => setActiveTab('major')}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'major'
              ? 'bg-emerald-700 text-offwhite shadow-lg scale-105'
              : 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
          }`}
        >
          Major Project
        </button>
        <button
          onClick={() => setActiveTab('minor')}
          className={`px-8 py-3 rounded-lg font-bold transition-all ${
            activeTab === 'minor'
              ? 'bg-emerald-700 text-offwhite shadow-lg scale-105'
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
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-all cursor-pointer card-hover"
                onClick={() => setExpandedMajor(expandedMajor === idx ? -1 : idx)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="text-emerald-700">{obj.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-bold text-emerald-900 mb-2 text-lg">{obj.title}</h4>
                      <p className="text-emerald-800 text-sm">{obj.desc}</p>
                    </div>
                    <ChevronDown 
                      size={20} 
                      className={`text-emerald-700 flex-shrink-0 mt-1 transition-transform ${
                        expandedMajor === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  {expandedMajor === idx && (
                    <div className="mt-4 pt-4 border-t border-emerald-100 animate-fade-in">
                      <p className="text-emerald-700 text-sm leading-relaxed">{obj.details}</p>
                    </div>
                  )}
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
              <div 
                key={idx} 
                className="bg-emerald-50 rounded-lg shadow-lg border-l-4 border-emerald-600 hover:shadow-xl transition-all cursor-pointer card-hover"
                onClick={() => setExpandedMinor(expandedMinor === idx ? -1 : idx)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <h4 className="font-bold text-emerald-900 text-lg flex-1">{obj.title}</h4>
                    <ChevronDown 
                      size={20} 
                      className={`text-emerald-700 flex-shrink-0 transition-transform ${
                        expandedMinor === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <p className="text-emerald-800 text-sm mb-3">{obj.desc}</p>
                  {expandedMinor === idx && (
                    <div className="mt-3 pt-3 border-t border-emerald-200 animate-fade-in">
                      <p className="text-emerald-700 text-sm leading-relaxed">{obj.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
