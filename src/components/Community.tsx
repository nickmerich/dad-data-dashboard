
export const Community = () => {
  const inspiringFathers = [
    {
      name: "Tony Dungy",
      role: "NFL Coach & All Pro Dad Spokesperson",
      impact: "Champions family-first leadership in professional sports",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mark Merrill", 
      role: "Founder of All Pro Dad",
      impact: "Built community of 200k+ engaged fathers",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Community Heroes",
      role: "Local Father Leaders",
      impact: "Grassroots organizers transforming neighborhoods",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn from Father Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Draw inspiration from fathers who are redefining what it means to be present, engaged, and impactful
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {inspiringFathers.map((father, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {father.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{father.name}</h3>
              <p className="text-blue-600 font-medium mb-3 text-center">{father.role}</p>
              <p className="text-gray-600 text-center leading-relaxed">{father.impact}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Better Academic Performance</div>
              <div className="text-sm text-gray-500 mt-1">with involved fathers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">70%</div>
              <div className="text-gray-600">Improved Emotional Health</div>
              <div className="text-sm text-gray-500 mt-1">in children of engaged dads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
              <div className="text-gray-600">Stronger Life Outcomes</div>
              <div className="text-sm text-gray-500 mt-1">with consistent father presence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
