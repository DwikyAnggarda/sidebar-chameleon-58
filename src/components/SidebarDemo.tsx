
import { SessionNavBar } from "@/components/ui/sidebar";
import { Search, Bell, Settings, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SidebarDemo() {
  return (
    <div className="flex h-screen w-screen flex-col">
      {/* Navigation Header */}
      <header className="flex h-[54px] items-center justify-between border-b px-4 bg-white dark:bg-black">
        <div className="flex items-center">
          <div className="mr-4 font-bold text-xl">AppLogo</div>
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
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        <SessionNavBar />
        <main className="flex grow flex-col overflow-auto">
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
        </main>
      </div>
    </div>
  );
}
