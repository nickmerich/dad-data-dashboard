
import { Button } from '@/components/ui/button';
import { ArrowDown, Heart, TrendingUp, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced background with personality */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-blue-50"></div>
      
      {/* More playful floating elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-amber-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-green-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-amber-100 text-amber-800 mb-6 animate-fade-in">
            <Heart className="w-4 h-4 mr-2" />
            Dad Stats That Actually Matter
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
          FATHERS
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text">‑FIRST</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          Finally, a place where "quality time" isn't just wishful thinking. Track what matters, 
          celebrate small wins, and join dads who are actually showing up.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-300">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            Let's Do This, Dad
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 group"
          >
            See How It Works
            <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
        
        {/* Enhanced key metrics with personality */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-amber-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Moments</h3>
            <p className="text-gray-600">Track the stuff that actually matters—not just screen time, but connection time</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dad Wins</h3>
            <p className="text-gray-600">Celebrate the small victories that add up to being the dad you want to be</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-200/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Dad Squad</h3>
            <p className="text-gray-600">Learn from fathers who've figured out how to balance spreadsheets and storytime</p>
          </div>
        </div>
        
        <div className="mt-12">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};
