
import { Target, Users, BookOpen } from 'lucide-react';

export const Community = () => {
  const wisdomLeaders = [
    {
      name: "Michael Chen",
      role: "Executive & Father of 3",
      impact: "Balances C-suite leadership with intentional family presence",
      icon: Target,
      bgColor: "from-slate-500 to-slate-600"
    },
    {
      name: "Dr. James Wilson", 
      role: "Child Psychologist & Dad",
      impact: "Combines professional expertise with practical fatherhood wisdom",
      icon: BookOpen,
      bgColor: "from-slate-600 to-slate-700"
    },
    {
      name: "David Rodriguez",
      role: "Community Builder",
      impact: "Created supportive networks for fathers seeking authentic growth",
      icon: Users,
      bgColor: "from-slate-700 to-slate-800"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Learn from Fathers Who <span className="text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text">Lead with Purpose</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect with fathers who prioritize depth, character, and meaningful relationships over quick fixes and surface-level solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {wisdomLeaders.map((leader, index) => {
            const IconComponent = leader.icon;
            return (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${leader.bgColor} rounded-lg mx-auto mb-6 flex items-center justify-center text-white group-hover:scale-105 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">{leader.name}</h3>
                <p className="text-slate-600 font-medium mb-4 text-center">{leader.role}</p>
                <p className="text-slate-600 text-center leading-relaxed text-sm">{leader.impact}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <h3 className="text-2xl font-semibold text-center text-slate-900 mb-8">
            The Impact of Intentional Fatherhood
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text mb-2 group-hover:scale-105 transition-transform">3x</div>
              <div className="text-slate-700 font-medium">Higher Academic Achievement</div>
              <div className="text-sm text-slate-500 mt-1">when fathers are actively engaged</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text mb-2 group-hover:scale-105 transition-transform">75%</div>
              <div className="text-slate-700 font-medium">Better Emotional Health</div>
              <div className="text-sm text-slate-500 mt-1">in children with present fathers</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text mb-2 group-hover:scale-105 transition-transform">90%</div>
              <div className="text-slate-700 font-medium">Life Satisfaction</div>
              <div className="text-sm text-slate-500 mt-1">starts with purposeful parenting</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
