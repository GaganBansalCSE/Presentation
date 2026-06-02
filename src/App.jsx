import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import CoverSlide from './slides/CoverSlide';
import CompanyOverview from './slides/CompanyOverview';
import ProjectObjectives from './slides/ProjectObjectives';
import ResearchApproach from './slides/ResearchApproach';
import FieldVisits from './slides/FieldVisits';
import AlternateChannels from './slides/AlternateChannels';
import CooperativesPACS from './slides/CooperativesPACS';
import ContractFarming from './slides/ContractFarming';
import KeyInsights from './slides/KeyInsights';
import DigitalMarketing from './slides/DigitalMarketing';
import DigitalExecution from './slides/DigitalExecution';
import OverallLearnings from './slides/OverallLearnings';
import ThankYou from './slides/ThankYou';

const slides = [
  { id: 0, title: 'Cover', component: CoverSlide },
  { id: 1, title: 'Company Overview', component: CompanyOverview },
  { id: 2, title: 'Project Objectives', component: ProjectObjectives },
  { id: 3, title: 'Research Approach', component: ResearchApproach },
  { id: 4, title: 'Field Visits', component: FieldVisits },
  { id: 5, title: 'Alternate Channels', component: AlternateChannels },
  { id: 6, title: 'Cooperatives & PACS', component: CooperativesPACS },
  { id: 7, title: 'Contract Farming', component: ContractFarming },
  { id: 8, title: 'Key Insights', component: KeyInsights },
  { id: 9, title: 'Digital Marketing', component: DigitalMarketing },
  { id: 10, title: 'Digital Execution', component: DigitalExecution },
  { id: 11, title: 'Overall Learnings', component: OverallLearnings },
  { id: 12, title: 'Thank You', component: ThankYou },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const CurrentComponent = slides[currentSlide].component;

  const nextSlide = () => {
    setCurrentSlide(prev => {
      if (prev < slides.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    setCurrentSlide(prev => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => {
          if (prev < slides.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => {
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-offwhite via-emerald-50 to-offwhite">
      {/* Main Slide Container */}
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-6xl bg-offwhite rounded-lg shadow-2xl overflow-hidden">
          <CurrentComponent />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-900 via-emerald-800 to-transparent p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-emerald-700 text-offwhite hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            title="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slide Counter and Thumbnail Navigation */}
          <div className="flex flex-col items-center gap-4 flex-1 mx-6">
            <div className="text-offwhite text-lg font-semibold">
              {currentSlide + 1} / {slides.length}
            </div>
            
            {/* Slide Thumbnails */}
            <div className="flex gap-2 flex-wrap justify-center max-w-3xl">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`px-3 py-1 rounded text-sm transition-all ${
                    index === currentSlide
                      ? 'bg-emerald-700 text-offwhite font-bold'
                      : 'bg-emerald-600 text-offwhite hover:bg-emerald-500'
                  }`}
                  title={slide.title}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            {/* Slide Title */}
            <div className="text-offwhite text-sm opacity-90">
              {slides[currentSlide].title}
            </div>
          </div>

          {/* Home Button */}
          <button
            onClick={() => goToSlide(0)}
            className="p-3 rounded-full bg-emerald-700 text-offwhite hover:bg-emerald-600 transition-all mr-3"
            title="Go to cover"
          >
            <Home size={24} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-emerald-700 text-offwhite hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            title="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
