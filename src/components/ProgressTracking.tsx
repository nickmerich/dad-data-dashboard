
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Calendar, Target, Award, BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const weeklyData = [
  { day: 'Mon', connectionTime: 35, mood: 7, conversations: 2 },
  { day: 'Tue', connectionTime: 42, mood: 8, conversations: 3 },
  { day: 'Wed', connectionTime: 28, mood: 6, conversations: 1 },
  { day: 'Thu', connectionTime: 55, mood: 9, conversations: 4 },
  { day: 'Fri', connectionTime: 38, mood: 7, conversations: 2 },
  { day: 'Sat', connectionTime: 67, mood: 9, conversations: 5 },
  { day: 'Sun', connectionTime: 45, mood: 8, conversations: 3 }
];

const monthlyData = [
  { week: 'Week 1', avgConnection: 42, consistency: 85 },
  { week: 'Week 2', avgConnection: 38, consistency: 78 },
  { week: 'Week 3', avgConnection: 51, consistency: 92 },
  { week: 'Week 4', avgConnection: 47, consistency: 88 }
];

const achievements = [
  { title: '7-Day Streak', description: 'Consistent daily check-ins', icon: '🔥', earned: true },
  { title: 'Quality Conversationalist', description: '20 meaningful talks logged', icon: '💬', earned: true },
  { title: 'Learning Champion', description: 'Completed 3 modules', icon: '📚', earned: true },
  { title: 'Connection Master', description: '500+ minutes this month', icon: '❤️', earned: false },
  { title: 'Dad Squad Leader', description: 'Top 10% in community', icon: '👑', earned: false },
  { title: 'Habit Builder', description: '30-day consistency streak', icon: '🏆', earned: false }
];

export const ProgressTracking = () => {
  const weekTotal = weeklyData.reduce((acc, day) => acc + day.connectionTime, 0);
  const weekAvg = Math.round(weekTotal / 7);
  const monthTotal = 18.5; // hours
  const streakDays = 12;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Progress Tracking</h2>
        <p className="text-gray-600">Your journey in numbers and insights</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-blue-600 font-medium">Current Streak</p>
                <p className="text-2xl font-bold text-blue-900">{streakDays} days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-green-600 font-medium">Week Average</p>
                <p className="text-2xl font-bold text-green-900">{weekAvg} min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Target className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-purple-600 font-medium">Month Total</p>
                <p className="text-2xl font-bold text-purple-900">{monthTotal}h</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-amber-600" />
              <div>
                <p className="text-sm text-amber-600 font-medium">Achievements</p>
                <p className="text-2xl font-bold text-amber-900">3/6</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Daily Connection Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="connectionTime" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-green-500" />
              Weekly Consistency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="consistency" fill="#10B981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Goals Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Monthly Goals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Connection Time Goal</span>
                <span className="text-sm text-gray-600">18.5 / 20 hours</span>
              </div>
              <Progress value={92.5} className="h-3" />
              <p className="text-sm text-green-600 mt-1">🎯 You're on track! 1.5 hours to go.</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Daily Check-in Consistency</span>
                <span className="text-sm text-gray-600">23 / 30 days</span>
              </div>
              <Progress value={76.7} className="h-3" />
              <p className="text-sm text-blue-600 mt-1">💪 Great momentum! Keep it up.</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Learning Modules</span>
                <span className="text-sm text-gray-600">3 / 5 completed</span>
              </div>
              <Progress value={60} className="h-3" />
              <p className="text-sm text-purple-600 mt-1">📚 2 more modules to reach your goal!</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-500" />
            Achievements & Badges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned
                    ? 'border-green-200 bg-green-50'
                    : 'border-gray-200 bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`text-2xl ${achievement.earned ? 'grayscale-0' : 'grayscale'}`}>
                    {achievement.icon}
                  </span>
                  <div>
                    <h4 className={`font-semibold ${achievement.earned ? 'text-green-800' : 'text-gray-600'}`}>
                      {achievement.title}
                    </h4>
                    <p className={`text-sm ${achievement.earned ? 'text-green-600' : 'text-gray-500'}`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                {achievement.earned && (
                  <div className="mt-2 text-xs text-green-600 font-medium">✓ Earned</div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
