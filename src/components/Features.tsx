
import { Check, BarChart3, Users, BookOpen, Target } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Your Dad Dashboard",
      description: "Skip the guilt, embrace the data. See your fatherhood journey through charts that actually make you smile.",
      icon: BarChart3,
      benefits: ["Mood tracking (yours and theirs)", "Quality time counter", "Victory celebrations", "Progress that matters"]
    },
    {
      title: "The Dad Comparison", 
      description: "Ever wonder if you're doing okay? Compare notes with other fathers (anonymously, because we're not monsters).",
      icon: Users,
      benefits: ["Anonymous benchmarking", "Best practice sharing", "Real success stories", "Zero judgment zone"]
    },
    {
      title: "Dad School",
      description: "Bite-sized lessons from experts who actually understand that 'just communicate better' isn't helpful advice.",
      icon: BookOpen,
      benefits: ["5-minute learning modules", "Practical strategies", "Emotional intelligence tools", "Leadership for little humans"]
    },
    {
      title: "Impact Tracker",
      description: "Finally, a way to measure what really matters—how your presence shapes the tiny humans in your care.",
      icon: Target,
      benefits: ["Relationship health scores", "Engagement metrics", "Family connection tracking", "Long-term trend analysis"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fatherhood, But Make It <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text">Smart</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not here to judge your parenting. We're here to help you level up your dad game with data that actually helps.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-amber-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center group/item">
                      <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
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
