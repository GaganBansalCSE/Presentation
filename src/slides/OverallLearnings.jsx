import { Award, Target, Users, Zap } from 'lucide-react';

export default function OverallLearnings() {
  const learnings = [
    {
      icon: <Users size={32} />,
      title: 'Institutional Ecosystem Understanding',
      desc: 'Deep insights into FPOs, PACS, cooperatives, and institutional farmers'
    },
    {
      icon: <Target size={32} />,
      title: 'Rural Market Exposure',
      desc: 'Hands-on understanding of rural distribution and farmer networks'
    },
    {
      icon: <Zap size={32} />,
      title: 'Government Ecosystem Understanding',
      desc: 'Knowledge of government support mechanisms and policy landscape'
    },
    {
      icon: <Award size={32} />,
      title: 'Business Development Exposure',
      desc: 'Experience in channel identification, outreach, and partnership building'
    },
    {
      icon: <Users size={32} />,
      title: 'Digital Marketing Analysis',
      desc: 'Competitor benchmarking and strategic digital recommendations'
    },
    {
      icon: <Target size={32} />,
      title: 'Alternate Channel Exploration',
      desc: 'Comprehensive study of distribution channels and expansion opportunities'
    }
  ];

  const impacts = [
    { metric: '50+', desc: 'Institutional contacts built' },
    { metric: '10+', desc: 'Field visits conducted' },
    { metric: '5', desc: 'States covered' },
    { metric: '6', desc: 'Alternate channels identified' },
    { metric: '10+', desc: 'Strategic recommendations' },
    { metric: '2', desc: 'Projects completed' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite to-emerald-50 p-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-emerald-900 mb-4">
            Overall Learnings & Impact
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-700 to-emerald-500 mx-auto"></div>
        </div>

        {/* Key Learnings */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Key Learnings</h2>
          <div className="grid grid-cols-3 gap-6">
            {learnings.map((learning, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg border-t-4 border-emerald-700 hover:shadow-xl transition-all hover:scale-105">
                <div className="text-emerald-700 mb-4">{learning.icon}</div>
                <h3 className="text-lg font-bold text-emerald-900 mb-3">{learning.title}</h3>
                <p className="text-emerald-800 text-sm leading-relaxed">{learning.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Created */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Impact Created</h2>
          <div className="grid grid-cols-3 gap-6">
            {impacts.map((impact, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-700 to-emerald-600 text-offwhite rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold mb-3">{impact.metric}</div>
                <p className="text-emerald-100 font-semibold">{impact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Deliverables */}
        <div>
          <h2 className="text-3xl font-bold text-emerald-900 mb-8">Strategic Deliverables</h2>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <Target size={28} />
                Project Outcomes
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="text-emerald-800"><strong>Institutional Contact Ecosystem:</strong> Built network across multiple states and institutional types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="text-emerald-800"><strong>Scalable Channels:</strong> Identified PACS, cooperatives, and export ecosystems as future growth channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">✓</span>
                  <span className="text-emerald-800"><strong>Digital Strategy:</strong> Developed digital and e-commerce expansion roadmap</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-emerald-700">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                <Award size={28} />
                Strategic Recommendations
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">→</span>
                  <span className="text-emerald-800">Develop comprehensive channel expansion strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">→</span>
                  <span className="text-emerald-800">Launch pilot programs with FPOs and PACS</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">→</span>
                  <span className="text-emerald-800">Implement recommended digital execution model</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-700 font-bold">→</span>
                  <span className="text-emerald-800">Explore export-oriented B2B partnerships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-12 bg-gradient-to-r from-emerald-700 to-emerald-800 text-offwhite rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Internship Summary</h3>
          <p className="text-lg leading-relaxed">
            This 8-week internship provided comprehensive exposure to agribusiness market dynamics, rural distribution ecosystems, institutional farmer networks, and digital marketing strategies. The research deliverables offer T.Stanes actionable insights for scaling biological product distribution through alternate channels while maintaining strong farmer relationships and market credibility.
          </p>
        </div>
      </div>
    </div>
  );
}
