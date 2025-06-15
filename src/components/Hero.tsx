
import { Button } from '@/components/ui/button';
import { ArrowDown, Target, TrendingUp, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-slate-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-8 sm:right-16 w-32 h-32 sm:w-40 sm:h-40 bg-gray-100/50 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <span className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-slate-100 text-slate-700 mb-4 sm:mb-6 animate-fade-in">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
            Intentional Fatherhood
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight animate-fade-in">
          FATHERS
          <span className="block sm:inline text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text">‑BY‑DESIGN</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200 px-2">
          Build purposeful habits, track meaningful moments, and join fathers committed to intentional growth.
        </p>
        
        <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-in delay-300 px-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group min-h-[48px]"
          >
            Start Your Journey
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 group min-h-[48px]"
          >
            Learn More
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
        
        {/* Refined key principles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-2">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg mb-3 sm:mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Intentional Moments</h3>
            <p className="text-sm sm:text-base text-slate-600">Focus on quality over quantity in your fatherhood journey</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg mb-3 sm:mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Purposeful Growth</h3>
            <p className="text-sm sm:text-base text-slate-600">Develop habits and practices that shape who you are as a father</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 group sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-100 rounded-lg mb-3 sm:mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-2">Wisdom Community</h3>
            <p className="text-sm sm:text-base text-slate-600">Learn from fathers who prioritize depth over quick wins</p>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};
