
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const GetStarted = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Fatherhood?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of fathers who are using data to build stronger relationships, 
          develop better habits, and create lasting impact in their children's lives.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-4">What You'll Get:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Personal fatherhood dashboard</li>
                <li>• Daily habit tracking tools</li>
                <li>• Evidence-based learning modules</li>
                <li>• Community benchmarking insights</li>
                <li>• Progress visualization reports</li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Your Journey:</h3>
              <ul className="space-y-2 text-blue-100">
                <li>• Set up your father profile</li>
                <li>• Complete daily 2-minute check-ins</li>
                <li>• Track meaningful interactions</li>
                <li>• Learn from peer fathers</li>
                <li>• Measure your growing impact</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input 
            placeholder="Enter your email" 
            className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
          />
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 whitespace-nowrap">
            Get Started
          </Button>
        </div>
        
        <p className="text-blue-200 text-sm mt-4">
          Free to start. Build the father you want to be.
        </p>
      </div>
    </section>
  );
};
