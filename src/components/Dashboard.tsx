
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const Dashboard = () => {
  const todayStats = {
    oneOnOneTime: 45,
    moodScore: 8,
    qualityConversations: 3,
    sharedMeals: 2
  };
  
  const weeklyProgress = {
    connectionGoal: 85,
    learningModules: 60,
    habitConsistency: 92
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Fatherhood Dashboard</h1>
          <p className="text-gray-600">Track your daily impact and build meaningful habits</p>
        </div>
        
        {/* Today's Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-blue-600">One-on-One Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-900">{todayStats.oneOnOneTime} min</div>
              <p className="text-xs text-blue-600 mt-1">+15 min from yesterday</p>
            </CardContent>
          </Card>
          
          <Card className="bg-green-50 border-green-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-600">Mood Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-900">{todayStats.moodScore}/10</div>
              <p className="text-xs text-green-600 mt-1">Above average</p>
            </CardContent>
          </Card>
          
          <Card className="bg-purple-50 border-purple-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-purple-600">Quality Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-900">{todayStats.qualityConversations}</div>
              <p className="text-xs text-purple-600 mt-1">Deep connections made</p>
            </CardContent>
          </Card>
          
          <Card className="bg-orange-50 border-orange-200">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-orange-600">Shared Meals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-900">{todayStats.sharedMeals}</div>
              <p className="text-xs text-orange-600 mt-1">Family time together</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Weekly Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Connection Goal</span>
                  <span className="text-sm text-gray-600">{weeklyProgress.connectionGoal}%</span>
                </div>
                <Progress value={weeklyProgress.connectionGoal} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Learning Modules</span>
                  <span className="text-sm text-gray-600">{weeklyProgress.learningModules}%</span>
                </div>
                <Progress value={weeklyProgress.learningModules} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Habit Consistency</span>
                  <span className="text-sm text-gray-600">{weeklyProgress.habitConsistency}%</span>
                </div>
                <Progress value={weeklyProgress.habitConsistency} className="h-2" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Community Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm">You're in the top 25% for consistency</span>
                  <span className="text-blue-600 font-semibold">🏆</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm">Similar fathers average 38 min daily</span>
                  <span className="text-green-600 font-semibold">📊</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm">New learning module available</span>
                  <span className="text-purple-600 font-semibold">📚</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
