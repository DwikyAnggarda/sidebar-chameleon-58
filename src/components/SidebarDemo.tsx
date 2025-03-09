
import { SessionNavBar } from "@/components/ui/sidebar";

export function SidebarDemo() {
  return (
    <div className="flex h-screen w-screen flex-row">
      <SessionNavBar />
      <main className="flex h-screen grow flex-col overflow-auto">
        <div className="p-8 max-w-screen-xl mx-auto w-full">
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
  );
}
