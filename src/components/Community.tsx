
import { Award, Coffee, Home } from 'lucide-react';

export const Community = () => {
  const inspiringFathers = [
    {
      name: "Coach Tony",
      role: "NFL Dad Guru",
      impact: "Proves you can win championships and bedtime stories",
      icon: Award,
      bgColor: "from-blue-400 to-blue-500"
    },
    {
      name: "Mark the Organizer", 
      role: "Community Builder",
      impact: "Built a 200k+ dad network (and still makes pancakes on Sunday)",
      icon: Coffee,
      bgColor: "from-green-400 to-green-500"
    },
    {
      name: "Your Neighbor Dave",
      role: "Everyday Hero",
      impact: "Shows up every day, figures it out as he goes (just like you)",
      icon: Home,
      bgColor: "from-amber-400 to-amber-500"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from Dads Who <span className="text-transparent bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text">Get It</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real fathers, real stories, real strategies. No perfect Instagram moments here—just honest wins and lessons learned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {inspiringFathers.map((father, index) => {
            const IconComponent = father.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                <div className={`w-24 h-24 bg-gradient-to-br ${father.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{father.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-center">{father.role}</p>
                <p className="text-gray-600 text-center leading-relaxed">{father.impact}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Here's What Happens When Dads Show Up
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">85%</div>
              <div className="text-gray-600 font-medium">Better Grades</div>
              <div className="text-sm text-gray-500 mt-1">when dad's actually involved</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">70%</div>
              <div className="text-gray-600 font-medium">Happier Kids</div>
              <div className="text-sm text-gray-500 mt-1">with engaged fathers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">92%</div>
              <div className="text-gray-600 font-medium">Life Success</div>
              <div className="text-sm text-gray-500 mt-1">starts with dad presence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
