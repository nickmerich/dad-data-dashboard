
import { Home, CheckCircle, BookOpen, TrendingUp, Users, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarItem {
  id: string;
  label: string;
  icon: any;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { id: 'overview', label: 'Overview', icon: Home },
  { id: 'checkin', label: 'Daily Reflection', icon: CheckCircle },
  { id: 'learning', label: 'Wisdom Library', icon: BookOpen },
  { id: 'progress', label: 'Growth Journey', icon: TrendingUp },
  { id: 'community', label: 'Father Network', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
];

interface DashboardSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const DashboardSidebar = ({ activeSection, onSectionChange }: DashboardSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);
  const closeMobile = () => setIsMobileOpen(false);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    closeMobile(); // Close mobile sidebar when item is selected
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleMobile}
          className="bg-white shadow-lg border-slate-200"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40" 
          onClick={closeMobile}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "bg-white border-r border-slate-200 h-full transition-all duration-300 z-50",
        // Mobile styles
        "md:relative fixed inset-y-0 left-0",
        isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        // Desktop styles
        isCollapsed ? "md:w-16" : "w-64"
      )}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            {!isCollapsed && (
              <h2 className="text-xl font-bold text-slate-900">DadDay</h2>
            )}
            
            {/* Mobile Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeMobile}
              className="md:hidden h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
            
            {/* Desktop Collapse Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex h-8 w-8"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
          
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 md:py-2 rounded-lg text-left transition-colors touch-manipulation",
                    isActive 
                      ? "bg-slate-100 text-slate-900 border border-slate-200" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 active:bg-slate-100"
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {(!isCollapsed || isMobileOpen) && (
                    <span className="font-medium text-sm md:text-base">{item.label}</span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
};
