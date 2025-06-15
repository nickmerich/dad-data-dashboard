
import { Check, BarChart3, Users, BookOpen, Target } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Reflection Dashboard",
      description: "Track your growth with thoughtful metrics that matter. See your fatherhood journey through insights that inspire deeper connection.",
      icon: BarChart3,
      benefits: ["Mindful presence tracking", "Quality connection metrics", "Growth pattern recognition", "Long-term impact visualization"]
    },
    {
      title: "Wisdom Exchange", 
      description: "Connect with fathers who value depth over quick fixes. Share experiences and learn from those walking similar paths.",
      icon: Users,
      benefits: ["Meaningful conversations", "Experience sharing", "Mentorship opportunities", "Supportive community"]
    },
    {
      title: "Growth Library",
      description: "Curated wisdom for intentional fathers. Deep insights and practical approaches from experts who understand the journey.",
      icon: BookOpen,
      benefits: ["Expert-curated content", "Practical wisdom", "Character development", "Leadership principles"]
    },
    {
      title: "Purpose Tracker",
      description: "Measure what truly matters in your fatherhood journey. Track the moments and habits that shape lasting relationships.",
      icon: Target,
      benefits: ["Intentional habit building", "Relationship health insights", "Character growth tracking", "Legacy-focused metrics"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Fatherhood <span className="text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text">By Design</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Tools and insights for fathers who want to be intentional about their most important role.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:shadow-md transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-200 transition-colors">
                    <IconComponent className="w-6 h-6 text-slate-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center mr-3">
                        <Check className="w-3 h-3 text-slate-600" />
                      </div>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
