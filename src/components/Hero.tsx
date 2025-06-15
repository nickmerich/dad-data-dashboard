
import { Button } from '@/components/ui/button';
import { ArrowDown, Target, TrendingUp, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Clean, minimal background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
      
      {/* Subtle geometric elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-slate-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 right-16 w-40 h-40 bg-gray-100/50 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-slate-100 text-slate-700 mb-6 animate-fade-in">
            <Target className="w-4 h-4 mr-2" />
            Intentional Fatherhood
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in">
          FATHERS
          <span className="text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text">‑BY‑DESIGN</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          Build purposeful habits, track meaningful moments, and join fathers committed to intentional growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Start Your Journey
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 text-lg font-medium rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 group"
          >
            Learn More
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
        
        {/* Refined key principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
              <Target className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Intentional Moments</h3>
            <p className="text-slate-600">Focus on quality over quantity in your fatherhood journey</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
              <TrendingUp className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Purposeful Growth</h3>
            <p className="text-slate-600">Develop habits and practices that shape who you are as a father</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-slate-200/50 hover:shadow-md transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 bg-slate-100 rounded-lg mb-4 mx-auto group-hover:bg-slate-200 transition-colors">
              <Users className="w-6 h-6 text-slate-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Wisdom Community</h3>
            <p className="text-slate-600">Learn from fathers who prioritize depth over quick wins</p>
          </div>
        </div>
        
        <div className="mt-12">
          <ArrowDown className="w-6 h-6 text-slate-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};
