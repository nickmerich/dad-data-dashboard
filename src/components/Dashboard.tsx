
import { useState } from 'react';
import { DashboardSidebar } from './DashboardSidebar';
import { DailyCheckin } from './DailyCheckin';
import { LearningHub } from './LearningHub';
import { ProgressTracking } from './ProgressTracking';
import { CommunityHub } from './CommunityHub';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, MessageCircle, Clock, Trophy, TrendingUp, Users, Settings } from 'lucide-react';

export const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Updated dashboard data with refined metrics
  const todayStats = {
    intentionalTime: 45,
    presenceScore: 8,
    meaningfulMoments: 3,
    connectionQuality: 2
  };
  
  const weeklyProgress = {
    purposeGoal: 85,
    growthModules: 60,
    consistency: 92
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
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Settings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Your Fatherhood Journey</h1>
              <p className="text-slate-600 text-sm sm:text-base">Track intentional moments and build purposeful habits</p>
            </div>
            
            {/* Today's Insights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium text-slate-600 flex items-center">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Intentional Time</span>
                    <span className="sm:hidden">Time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">{todayStats.intentionalTime} min</div>
                  <p className="text-xs text-slate-600 mt-1 hidden sm:block">Quality over quantity</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium text-slate-600 flex items-center">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Presence Score</span>
                    <span className="sm:hidden">Presence</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">{todayStats.presenceScore}/10</div>
                  <p className="text-xs text-slate-600 mt-1 hidden sm:block">Mindful engagement</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium text-slate-600 flex items-center">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Meaningful Moments</span>
                    <span className="sm:hidden">Moments</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">{todayStats.meaningfulMoments}</div>
                  <p className="text-xs text-slate-600 mt-1 hidden sm:block">Deep connections made</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200 hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2 sm:pb-3">
                  <CardTitle className="text-xs sm:text-sm font-medium text-slate-600 flex items-center">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="hidden sm:inline">Growth Sessions</span>
                    <span className="sm:hidden">Growth</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-900">{todayStats.connectionQuality}</div>
                  <p className="text-xs text-slate-600 mt-1 hidden sm:block">Learning moments</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Weekly Reflection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-600" />
                    This Week's Growth
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Purpose Alignment</span>
                      <span className="text-sm text-slate-600">{weeklyProgress.purposeGoal}%</span>
                    </div>
                    <Progress value={weeklyProgress.purposeGoal} className="h-2 sm:h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Learning Progress</span>
                      <span className="text-sm text-slate-600">{weeklyProgress.growthModules}%</span>
                    </div>
                    <Progress value={weeklyProgress.growthModules} className="h-2 sm:h-3" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Daily Intentionality</span>
                      <span className="text-sm text-slate-600">{weeklyProgress.consistency}%</span>
                    </div>
                    <Progress value={weeklyProgress.consistency} className="h-2 sm:h-3" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-slate-600" />
                    Community Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <span className="text-sm">You're building consistent habits</span>
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <span className="text-sm">Similar fathers focus 42 min daily</span>
                      <span className="text-xl sm:text-2xl">📊</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                      <span className="text-sm">New wisdom module available</span>
                      <span className="text-xl sm:text-2xl">📚</span>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 flex">
      <DashboardSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      <div className="flex-1 p-3 sm:p-6 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};
