import { Mail, Leaf, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-offwhite py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Leaf size={24} />
              T.Stanes SIP
            </h3>
            <p className="text-emerald-100 leading-relaxed">
              Comprehensive research on distribution channels and digital marketing strategy for sustainable agricultural growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-emerald-100">
              <li><a href="#about" className="hover:text-offwhite transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-offwhite transition-colors">Projects</a></li>
              <li><a href="#research" className="hover:text-offwhite transition-colors">Research</a></li>
              <li><a href="#insights" className="hover:text-offwhite transition-colors">Insights</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-emerald-100">
              <div className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <span>gagan@tstanes.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>T.Stanes and Company Limited</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <span>+91-XXXXXXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-emerald-100 text-sm">
            <p>&copy; 2024 T.Stanes and Company Limited. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Summer Internship Project | MBA SIP Review | Gagan Bansal</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
