
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Rocket, Shield, Heart } from 'lucide-react';
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
        description: "Please enter your email address to get started.",
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
        title: "Thanks for your interest!",
        description: "We'll be in touch soon. Check your email for next steps.",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Be the Dad <span className="text-amber-300">You Actually Want to Be?</span>
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of fathers who've ditched the guesswork and started using data to build 
          real connections, celebrate small wins, and show up consistently.
        </p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left">
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-amber-300 mr-2" />
                <h3 className="text-2xl font-bold text-white">What You'll Get:</h3>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• Your personal dad dashboard</li>
                <li>• Daily check-ins that take 2 minutes</li>
                <li>• Learning modules that don't suck</li>
                <li>• Real insights from real dads</li>
                <li>• Progress tracking that feels good</li>
              </ul>
            </div>
            <div className="text-left">
              <div className="flex items-center mb-4">
                <Heart className="w-6 h-6 text-amber-300 mr-2" />
                <h3 className="text-2xl font-bold text-white">Your Journey:</h3>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li>• Set up your profile (5 minutes)</li>
                <li>• Start tracking what matters</li>
                <li>• Learn from other dads</li>
                <li>• Celebrate your wins</li>
                <li>• Watch your impact grow</li>
              </ul>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
          <Input 
            type="email"
            placeholder="Your email (we promise not to spam)" 
            className="bg-white/90 border-white/20 text-gray-900 placeholder:text-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
          />
          <Button 
            type="submit"
            size="lg" 
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold px-8 whitespace-nowrap group"
            disabled={isSubmitting}
          >
            <Shield className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {isSubmitting ? 'Starting...' : 'Start Free'}
          </Button>
        </form>
        
        <p className="text-blue-200 text-sm mt-4">
          Free to start. No credit card. Just better fatherhood.
        </p>
      </div>
    </section>
  );
};
