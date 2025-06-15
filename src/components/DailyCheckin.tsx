
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Coffee, MessageCircle, Zap, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CheckinData {
  mood: number;
  energy: number;
  connectionTime: number;
  qualityConversations: number;
  challenges: string;
  wins: string;
  gratitude: string;
}

export const DailyCheckin = () => {
  const { toast } = useToast();
  const [checkinData, setCheckinData] = useState<CheckinData>({
    mood: 7,
    energy: 7,
    connectionTime: 0,
    qualityConversations: 0,
    challenges: '',
    wins: '',
    gratitude: ''
  });

  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = () => {
    console.log('Daily check-in submitted:', checkinData);
    setIsCompleted(true);
    toast({
      title: "Check-in Complete! 🎉",
      description: "Great job tracking your dad journey today. Keep it up!",
    });
  };

  const MoodSelector = ({ value, onChange }: { value: number; onChange: (val: number) => void }) => (
    <div className="flex gap-2 justify-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
            num <= value 
              ? 'bg-blue-500 text-white scale-110' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Check-in Complete!</h3>
            <p className="text-green-600 mb-6">You're building momentum, dad! See you tomorrow.</p>
            <Button 
              onClick={() => setIsCompleted(false)}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50"
            >
              View Today's Summary
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Daily Check-in</h2>
        <p className="text-gray-600">Take 2 minutes to reflect on your dad journey today</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            How are you feeling today?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Overall Mood (1-10)
              </label>
              <MoodSelector 
                value={checkinData.mood} 
                onChange={(mood) => setCheckinData({...checkinData, mood})} 
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Energy Level (1-10)
              </label>
              <MoodSelector 
                value={checkinData.energy} 
                onChange={(energy) => setCheckinData({...checkinData, energy})} 
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Today's Dad Stats
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Connection Time (minutes)
            </label>
            <input
              type="number"
              value={checkinData.connectionTime}
              onChange={(e) => setCheckinData({...checkinData, connectionTime: parseInt(e.target.value) || 0})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Quality Conversations
            </label>
            <input
              type="number"
              value={checkinData.qualityConversations}
              onChange={(e) => setCheckinData({...checkinData, qualityConversations: parseInt(e.target.value) || 0})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-purple-500" />
            Reflection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Biggest win today?
            </label>
            <textarea
              value={checkinData.wins}
              onChange={(e) => setCheckinData({...checkinData, wins: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={2}
              placeholder="Even small wins count..."
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              What challenged you?
            </label>
            <textarea
              value={checkinData.challenges}
              onChange={(e) => setCheckinData({...checkinData, challenges: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={2}
              placeholder="It's okay to struggle..."
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              What are you grateful for?
            </label>
            <textarea
              value={checkinData.gratitude}
              onChange={(e) => setCheckinData({...checkinData, gratitude: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={2}
              placeholder="Big or small, what made you smile?"
            />
          </div>
        </CardContent>
      </Card>

      <Button 
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold"
      >
        Complete Check-in 🎯
      </Button>
    </div>
  );
};
