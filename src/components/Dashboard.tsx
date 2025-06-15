
import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DailyCheckin } from './DailyCheckin';
import { LearningHub } from './LearningHub';
import { ProgressTracking } from './ProgressTracking';
import { CommunityHub } from './CommunityHub';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Heart, MessageCircle, Coffee, Trophy, TrendingUp, Users, Settings } from 'lucide-react';

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Original dashboard data
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

  const renderContent = () => {
    switch (activeSection) {
      case 'checkin':
        return <DailyCheckin />;
      case 'learning':
        return <LearningHub />;
      case 'progress':
        return <ProgressTracking />;
      case 'community':
        return <CommunityHub />;
      case 'settings':
        return (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Dad Dashboard</h1>
              <p className="text-gray-600">Track your daily wins and build the habits that matter most</p>
            </div>
            
            {/* Today's Summary */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-blue-600 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Connection Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">{todayStats.oneOnOneTime} min</div>
                  <p className="text-xs text-blue-600 mt-1">+15 min from yesterday 🔥</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-green-600 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Dad Energy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-900">{todayStats.moodScore}/10</div>
                  <p className="text-xs text-green-600 mt-1">Above average, dad!</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-purple-600 flex items-center">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Real Talks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-900">{todayStats.qualityConversations}</div>
                  <p className="text-xs text-purple-600 mt-1">Deep connections made</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-amber-600 flex items-center">
                    <Coffee className="w-4 h-4 mr-2" />
                    Family Meals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-amber-900">{todayStats.sharedMeals}</div>
                  <p className="text-xs text-amber-600 mt-1">Together time counts</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Weekly Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-amber-500" />
                    This Week's Wins
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Connection Goal</span>
                      <span className="text-sm text-gray-600">{weeklyProgress.connectionGoal}% 🎯</span>
                    </div>
                    <Progress value={weeklyProgress.connectionGoal} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Learning Progress</span>
                      <span className="text-sm text-gray-600">{weeklyProgress.learningModules}% 📚</span>
                    </div>
                    <Progress value={weeklyProgress.learningModules} className="h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Daily Consistency</span>
                      <span className="text-sm text-gray-600">{weeklyProgress.habitConsistency}% 🔥</span>
                    </div>
                    <Progress value={weeklyProgress.habitConsistency} className="h-3" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    Dad Squad Updates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                      <span className="text-sm">You're in the top 25% for consistency</span>
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                      <span className="text-sm">Similar dads average 38 min daily</span>
                      <span className="text-2xl">📊</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                      <span className="text-sm">New "Bedtime Battles" module ready</span>
                      <span className="text-2xl">🎯</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 flex">
      <DashboardSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};
