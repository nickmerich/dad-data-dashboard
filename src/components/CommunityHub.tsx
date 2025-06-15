
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Trophy, TrendingUp, Heart, ThumbsUp, MessageCircle } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Mike_Dad3', streak: 28, connectionTime: 156, badge: '👑' },
  { rank: 2, name: 'SuperDadSteve', streak: 25, connectionTime: 142, badge: '🥈' },
  { rank: 3, name: 'DadOfTwins', streak: 23, connectionTime: 138, badge: '🥉' },
  { rank: 4, name: 'You', streak: 12, connectionTime: 98, badge: '🎯' },
  { rank: 5, name: 'NewDadNate', streak: 18, connectionTime: 89, badge: '🌟' }
];

const forumPosts = [
  {
    id: 1,
    title: "How do you handle bedtime resistance?",
    author: "DadOfThree",
    replies: 12,
    likes: 8,
    time: "2 hours ago",
    preview: "My 5-year-old has been fighting bedtime every night. Any strategies that actually work?",
    category: "Sleep & Routines"
  },
  {
    id: 2,
    title: "Win: Had my first real conversation with my teenager",
    author: "ProudDad47",
    replies: 24,
    likes: 45,
    time: "5 hours ago",
    preview: "After weeks of trying, we finally talked about what's really going on at school...",
    category: "Teenagers"
  },
  {
    id: 3,
    title: "Quick 15-minute activities for quality time?",
    author: "BusyDadBrad",
    replies: 18,
    likes: 23,
    time: "1 day ago",
    preview: "Work has been crazy but I want to make every minute count. What works for you?",
    category: "Connection"
  }
];

const challenges = [
  {
    title: "30-Day Connection Challenge",
    description: "Commit to 30 minutes of quality time daily",
    participants: 847,
    daysLeft: 12,
    joined: true
  },
  {
    title: "Tech-Free Dinners",
    description: "One week of device-free family meals",
    participants: 356,
    daysLeft: 4,
    joined: false
  },
  {
    title: "Bedtime Story Marathon",
    description: "Read to your kids for 14 straight nights",
    participants: 523,
    daysLeft: 8,
    joined: true
  }
];

export const CommunityHub = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Dad Squad</h2>
        <p className="text-gray-600">Connect with fathers who get it</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-blue-600 font-medium">Active Dads</p>
                <p className="text-2xl font-bold text-blue-900">2,847</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-green-600 font-medium">Your Rank</p>
                <p className="text-2xl font-bold text-green-900">#4</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-purple-600 font-medium">Support Given</p>
                <p className="text-2xl font-bold text-purple-900">127</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-amber-600" />
              <div>
                <p className="text-sm text-amber-600 font-medium">Challenges Won</p>
                <p className="text-2xl font-bold text-amber-900">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leaderboard */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              Weekly Leaderboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboardData.map((dad) => (
                <div
                  key={dad.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    dad.name === 'You' ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50'
                  }`}
                >
                  <span className="text-lg">{dad.badge}</span>
                  <div className="flex-1">
                    <p className={`font-medium ${dad.name === 'You' ? 'text-blue-900' : 'text-gray-900'}`}>
                      {dad.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {dad.streak} day streak • {dad.connectionTime}min
                    </p>
                  </div>
                  <span className="text-lg font-bold text-gray-500">#{dad.rank}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Forum Posts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              Community Forum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{post.preview}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>by {post.author} • {post.time}</span>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-4 h-4" />
                        {post.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.replies}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Posts
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Challenges */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-500" />
            Community Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
                <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{challenge.participants} participants</span>
                    <span className="text-gray-600">{challenge.daysLeft} days left</span>
                  </div>
                  <Button
                    className={`w-full ${
                      challenge.joined
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                  >
                    {challenge.joined ? 'Joined ✓' : 'Join Challenge'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Share Your Win</h3>
            <p className="text-blue-700 mb-4">Inspire other dads with your success story</p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Share Story
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-green-900 mb-2">Ask the Community</h3>
            <p className="text-green-700 mb-4">Get advice from experienced dads</p>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Ask Question
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
