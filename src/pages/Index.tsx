
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Community } from "@/components/Community";
import { GetStarted } from "@/components/GetStarted";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LogIn } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">DadTracker</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <LogIn className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Community />
      <GetStarted />
    </div>
  );
};

export default Index;
