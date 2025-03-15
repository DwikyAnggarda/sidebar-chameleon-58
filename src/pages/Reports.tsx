
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "lucide-react";

const Reports = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Reports</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Monthly Sales</CardTitle>
              <CardDescription>Performance over the last 30 days</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                <LineChart className="h-16 w-16 text-muted-foreground/60" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Revenue Breakdown</CardTitle>
              <CardDescription>By product category</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                <PieChart className="h-16 w-16 text-muted-foreground/60" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Customer Acquisition</CardTitle>
              <CardDescription>New customers per week</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                <BarChart className="h-16 w-16 text-muted-foreground/60" />
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Reports History</CardTitle>
            <CardDescription>View and manage your saved reports</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/30 transition-colors">
                  <div>
                    <h3 className="font-medium">Q{item} Sales Report</h3>
                    <p className="text-sm text-muted-foreground">Created on {new Date().toLocaleDateString()}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">PDF</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarDemo>
  );
};

export default Reports;
