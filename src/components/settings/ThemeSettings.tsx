
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Sun, Moon, Monitor } from "lucide-react";
import { toast } from "sonner";

export function ThemeSettings() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');

  // Get initial theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'system' || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (newTheme: 'light' | 'dark' | 'system') => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    if (newTheme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(newTheme);
    }
  };

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    toast.success(`Theme set to ${newTheme} mode`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize the appearance of the application.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label className="text-base">Theme</Label>
            <p className="text-sm text-muted-foreground mb-4">
              Select your preferred theme for the dashboard.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              <div 
                className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition-all ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}
                onClick={() => handleThemeChange('light')}
              >
                <Sun className="h-6 w-6 mb-2" />
                <span>Light</span>
              </div>
              
              <div 
                className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition-all ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}
                onClick={() => handleThemeChange('dark')}
              >
                <Moon className="h-6 w-6 mb-2" />
                <span>Dark</span>
              </div>
              
              <div 
                className={`flex flex-col items-center justify-center p-4 border rounded-md cursor-pointer transition-all ${theme === 'system' ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}
                onClick={() => handleThemeChange('system')}
              >
                <Monitor className="h-6 w-6 mb-2" />
                <span>System</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
