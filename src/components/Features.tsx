
import { Check } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Personal Dashboard",
      description: "Visualize your fatherhood journey with comprehensive progress tracking and personalized insights.",
      benefits: ["Real-time habit tracking", "Mood and stress monitoring", "Progress visualization", "Goal setting and achievement"]
    },
    {
      title: "Community Benchmarking", 
      description: "Compare your growth with peer fathers and discover what works best for families like yours.",
      benefits: ["Anonymous peer comparisons", "Best practice identification", "Community success stories", "Motivation through connection"]
    },
    {
      title: "Evidence-Based Learning",
      description: "Access bite-sized modules backed by research on effective fatherhood practices.",
      benefits: ["Communication strategies", "Discipline techniques", "Emotional coaching", "Leadership development"]
    },
    {
      title: "Impact Measurement",
      description: "Track your influence on your children's development and family dynamics over time.",
      benefits: ["Relationship health metrics", "Emotional availability tracking", "Family engagement scoring", "Long-term trend analysis"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transform Your Fatherhood with Data
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Move from passive to proactive parenting with tools designed for the modern father
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
