
import { SessionNavBar } from "@/components/ui/sidebar";
import { Search, Bell, Settings, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface SidebarDemoProps {
  children?: React.ReactNode;
}

export function SidebarDemo({ children }: SidebarDemoProps) {
  const { user, signOut, role } = useAuth();
  
  const userInitials = user?.email 
    ? user.email.substring(0, 2).toUpperCase() 
    : "U";

  return (
    <div className="flex h-screen w-screen flex-col">
      {/* Navigation Header */}
      <header className="flex h-[54px] items-center justify-between border-b px-4 bg-white dark:bg-black">
        <div className="flex items-center">
          <Link to="/" className="mr-4 font-bold text-xl">AppLogo</Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Link to="/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{userInitials}</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:inline-block">{user.email}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.email}</p>
                  <p className="text-xs text-muted-foreground capitalize">Role: {role || 'Loading...'}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/settings" className="cursor-pointer">Profile Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut} className="cursor-pointer text-red-500">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <SessionNavBar userRole={role} />
        <main className="flex grow flex-col overflow-auto">
          {children || (
            <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
              <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
              <p className="text-gray-600 mb-6">
                Welcome to your dashboard. Navigate through the sidebar to explore different sections.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h2 className="text-xl font-semibold mb-2">Card {i + 1}</h2>
                    <p className="text-gray-500">This is a sample card for demonstration purposes.</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
