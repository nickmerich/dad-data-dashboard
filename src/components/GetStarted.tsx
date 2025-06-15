
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Target, TrendingUp, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to begin your journey.",
        variant: "destructive"
      });
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Email submitted:', email);
      
      toast({
        title: "Welcome to DadDay",
        description: "Your journey toward intentional fatherhood begins now. Check your email for next steps.",
      });
      
      setEmail('');
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
          Begin Your Journey of <span className="text-slate-300">Purposeful Fatherhood</span>
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Join fathers who are committed to intentional growth, meaningful connections, and building lasting legacies through purposeful parenting.
        </p>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="text-left">
              <div className="flex items-center mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">Your Growth Platform:</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Personal reflection dashboard</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Intentional habit tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Curated wisdom library</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Meaningful progress insights</span>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <div className="flex items-center mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300 mr-2 sm:mr-3" />
                <h3 className="text-lg sm:text-xl font-semibold text-white">Your Path Forward:</h3>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Define your fatherhood values</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Track purposeful moments</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Connect with like-minded fathers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-sm sm:text-base">Build your lasting legacy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
          <Input 
            type="email"
            placeholder="Enter your email to start" 
            className="bg-white border-white/20 text-slate-900 placeholder:text-slate-500 w-full min-h-[48px] text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            size="lg" 
            className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 sm:px-8 w-full group border border-slate-600 min-h-[48px]"
            disabled={isSubmitting}
          >
            <TrendingUp className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {isSubmitting ? 'Starting...' : 'Begin Journey'}
          </Button>
        </form>
        
        <p className="text-slate-400 text-xs sm:text-sm mt-4 sm:mt-6 px-2">
          Start your intentional fatherhood journey. No commitments, just growth.
        </p>
      </div>
    </section>
  );
};
