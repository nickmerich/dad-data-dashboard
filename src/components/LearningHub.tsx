
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Clock, Trophy, Play, Lock } from 'lucide-react';

interface LearningModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  progress: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  isUnlocked: boolean;
  badge?: string;
}

const learningModules: LearningModule[] = [
  {
    id: '1',
    title: 'Active Listening with Kids',
    description: 'Learn to truly hear what your children are saying beyond their words.',
    duration: '12 min',
    progress: 85,
    difficulty: 'Beginner',
    category: 'Communication',
    isUnlocked: true,
    badge: '🎯'
  },
  {
    id: '2',
    title: 'Bedtime Battles No More',
    description: 'Proven strategies to make bedtime peaceful and consistent.',
    duration: '15 min',
    progress: 60,
    difficulty: 'Intermediate',
    category: 'Routines',
    isUnlocked: true,
    badge: '😴'
  },
  {
    id: '3',
    title: 'Quality Time in 15 Minutes',
    description: 'Maximize connection when time is short but presence matters.',
    duration: '8 min',
    progress: 0,
    difficulty: 'Beginner',
    category: 'Connection',
    isUnlocked: true
  },
  {
    id: '4',
    title: 'Discipline Without Drama',
    description: 'Set boundaries that stick without losing your cool.',
    duration: '20 min',
    progress: 0,
    difficulty: 'Advanced',
    category: 'Discipline',
    isUnlocked: false
  },
  {
    id: '5',
    title: 'Dad Energy Management',
    description: 'Maintain your energy and presence throughout the day.',
    duration: '10 min',
    progress: 30,
    difficulty: 'Intermediate',
    category: 'Self-Care',
    isUnlocked: true
  },
  {
    id: '6',
    title: 'Teaching Life Skills',
    description: 'Turn everyday moments into learning opportunities.',
    duration: '18 min',
    progress: 0,
    difficulty: 'Intermediate',
    category: 'Education',
    isUnlocked: false
  }
];

const categories = ['All', 'Communication', 'Routines', 'Connection', 'Discipline', 'Self-Care', 'Education'];

export const LearningHub = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const completedModules = learningModules.filter(m => m.progress === 100).length;
  const totalProgress = learningModules.reduce((acc, m) => acc + m.progress, 0) / learningModules.length;

  return (
    <div className="max-w-6xl mx-auto space-y-4 sm:space-y-6">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Learning Hub</h2>
        <p className="text-gray-600 text-sm sm:text-base px-2">Practical lessons designed by dads, for dads</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-blue-600 font-medium">Modules Completed</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-900">{completedModules}/{learningModules.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-green-600 font-medium">Overall Progress</p>
                <p className="text-xl sm:text-2xl font-bold text-green-900">{Math.round(totalProgress)}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600 flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm text-purple-600 font-medium">Time Invested</p>
                <p className="text-xl sm:text-2xl font-bold text-purple-900">2.5 hrs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6 px-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === 'All' ? 'default' : 'outline'}
            size="sm"
            className="text-xs sm:text-sm min-h-[40px] px-3"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Learning Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {learningModules.map((module) => (
          <Card key={module.id} className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 ${!module.isUnlocked ? 'opacity-75' : ''}`}>
            {!module.isUnlocked && (
              <div className="absolute top-3 right-3 z-10">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            )}
            
            <CardHeader className="pb-2 sm:pb-3">
              <div className="flex items-start justify-between">
                <div className="flex-1 min-w-0">
                  <CardTitle className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2 leading-tight">
                    {module.badge && <span className="text-lg sm:text-xl flex-shrink-0">{module.badge}</span>}
                    <span className="break-words">{module.title}</span>
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                      {module.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                      {module.category}
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                {module.description}
              </p>
              
              <div className="flex items-center gap-2 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-500">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{module.duration}</span>
              </div>

              {module.progress > 0 && (
                <div className="mb-3 sm:mb-4">
                  <div className="flex justify-between text-xs sm:text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="text-gray-900 font-medium">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>
              )}

              <Button
                className={`w-full text-sm min-h-[44px] ${
                  !module.isUnlocked 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : module.progress > 0 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-green-600 hover:bg-green-700'
                }`}
                disabled={!module.isUnlocked}
              >
                <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                {!module.isUnlocked ? 'Locked' : module.progress > 0 ? 'Continue' : 'Start Module'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendation Section */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 mt-6 sm:mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600" />
            Recommended for You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            Based on your recent check-ins, we recommend focusing on <strong>Active Listening</strong> to improve connection time quality.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full sm:w-auto min-h-[44px]">
            Start Recommended Module
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
