
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
    <div className="flex gap-1 sm:gap-2 justify-center flex-wrap">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-xs sm:text-sm font-medium transition-all touch-manipulation ${
            num <= value 
              ? 'bg-blue-500 text-white scale-110' 
              : 'bg-gray-200 text-gray-600 hover:bg-gray-300 active:bg-gray-400'
          }`}
        >
          {num}
        </button>
      ))}
    </div>
  );

  if (isCompleted) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="text-center py-8 sm:py-12">
            <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🏆</div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-2">Check-in Complete!</h3>
            <p className="text-green-600 mb-4 sm:mb-6 text-sm sm:text-base">You're building momentum, dad! See you tomorrow.</p>
            <Button 
              onClick={() => setIsCompleted(false)}
              variant="outline"
              className="border-green-300 text-green-700 hover:bg-green-50 min-h-[44px] w-full sm:w-auto"
            >
              View Today's Summary
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6 px-4">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Daily Check-in</h2>
        <p className="text-gray-600 text-sm sm:text-base">Take 2 minutes to reflect on your dad journey today</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            How are you feeling today?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 sm:mb-3 block">
                Overall Mood (1-10)
              </label>
              <MoodSelector 
                value={checkinData.mood} 
                onChange={(mood) => setCheckinData({...checkinData, mood})} 
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 sm:mb-3 block">
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
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
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
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="0"
              inputMode="numeric"
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
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base"
              placeholder="0"
              inputMode="numeric"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
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
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base resize-none"
              rows={3}
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
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base resize-none"
              rows={3}
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
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base resize-none"
              rows={3}
              placeholder="Big or small, what made you smile?"
            />
          </div>
        </CardContent>
      </Card>

      <Button 
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-base sm:text-lg font-semibold min-h-[52px]"
      >
        Complete Check-in 🎯
      </Button>
    </div>
  );
};
