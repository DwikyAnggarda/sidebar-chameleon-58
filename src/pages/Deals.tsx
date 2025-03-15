
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

const Deals = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Deals</h1>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>New Deal</span>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">New Deals</CardTitle>
              <CardDescription>Initial contact and discovery</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-3 border rounded-md bg-background hover:bg-muted/20 transition-colors">
                    <h3 className="font-medium">Project Alpha</h3>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-muted-foreground">Acme Inc.</p>
                      <p className="text-sm font-medium">$12,000</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add deal
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">In Progress</CardTitle>
              <CardDescription>Negotiations and proposals</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                {[1, 2].map((item) => (
                  <div key={item} className="p-3 border rounded-md bg-background hover:bg-muted/20 transition-colors">
                    <h3 className="font-medium">Project Beta</h3>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-muted-foreground">XYZ Corp</p>
                      <p className="text-sm font-medium">$24,500</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add deal
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Closed Won</CardTitle>
              <CardDescription>Successfully closed deals</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="space-y-3">
                {[1, 2, 4].map((item) => (
                  <div key={item} className="p-3 border rounded-md bg-background hover:bg-muted/20 transition-colors">
                    <h3 className="font-medium">Project Gamma</h3>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm text-muted-foreground">ABC Ltd</p>
                      <p className="text-sm font-medium">$18,750</p>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add deal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Deals;
