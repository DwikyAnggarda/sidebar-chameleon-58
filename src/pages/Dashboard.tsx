
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, PieChart, LineChart, Users, Briefcase, Building, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Accounts</p>
                  <h3 className="text-2xl font-bold mt-1">258</h3>
                </div>
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500 font-medium">12%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Deals</p>
                  <h3 className="text-2xl font-bold mt-1">64</h3>
                </div>
                <div className="p-2 bg-blue-500/10 rounded-full">
                  <Briefcase className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500 font-medium">8%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Competitors</p>
                  <h3 className="text-2xl font-bold mt-1">36</h3>
                </div>
                <div className="p-2 bg-orange-500/10 rounded-full">
                  <Building className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500 font-medium">5%</span>
                <span className="ml-1">new tracked</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Revenue</p>
                  <h3 className="text-2xl font-bold mt-1">$428K</h3>
                </div>
                <div className="p-2 bg-green-500/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-500" />
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                <span className="text-green-500 font-medium">18%</span>
                <span className="ml-1">from last quarter</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue performance</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md">
                <LineChart className="h-16 w-16 text-muted-foreground/60" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Deal Distribution</CardTitle>
              <CardDescription>By account type and industry</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[250px] flex items-center justify-center bg-muted/20 rounded-md">
                <PieChart className="h-16 w-16 text-muted-foreground/60" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Latest actions across your organization</CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "New account created", desc: "Acme Corp was added as a new account", time: "2 hours ago" },
                { title: "Deal updated", desc: "Deal with Globex Corp moved to negotiation stage", time: "5 hours ago" },
                { title: "Competitor analysis", desc: "New data added for TechGiant Inc", time: "Yesterday" },
                { title: "Sales report generated", desc: "Q2 sales report is now available", time: "2 days ago" }
              ].map((activity, i) => (
                <div key={i} className="flex items-start gap-4 border-b last:border-0 pb-4 last:pb-0">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BarChart className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.desc}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarDemo>
  );
};

export default Dashboard;
