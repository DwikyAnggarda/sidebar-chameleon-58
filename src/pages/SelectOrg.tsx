
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Plus, Building, Users, Check, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const SelectOrg = () => {
  // Sample organization data
  const organizations = [
    { name: "Acme Inc", role: "Admin", members: 12, plan: "Enterprise" },
    { name: "Personal Workspace", role: "Owner", members: 1, plan: "Free" },
  ];

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      <header className="h-14 border-b bg-white flex items-center px-4 dark:bg-black">
        <div className="max-w-screen-lg mx-auto w-full flex items-center justify-between">
          <h1 className="font-bold text-lg">AppLogo</h1>
          <Button variant="ghost" size="sm">Sign Out</Button>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-screen-sm w-full">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-xl">Select Organization</CardTitle>
              <CardDescription>Choose an organization to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {organizations.map((org, i) => (
                  <Button 
                    key={i} 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 mb-2"
                  >
                    <div className="flex items-center w-full">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {org.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-left">{org.name}</p>
                        <p className="text-sm text-muted-foreground text-left">
                          {org.role} • {org.members} member{org.members !== 1 ? 's' : ''} • {org.plan} plan
                        </p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Create or Join Organization</CardTitle>
              <CardDescription>Start a new workspace or join an existing one</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto p-4"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Create New Organization</p>
                    <p className="text-sm text-muted-foreground">Set up a new workspace for your team</p>
                  </div>
                </div>
              </Button>
              
              <Separator />
              
              <Button 
                variant="outline" 
                className="w-full justify-start h-auto p-4"
              >
                <div className="flex items-center">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Join Existing Organization</p>
                    <p className="text-sm text-muted-foreground">Join with an invitation code</p>
                  </div>
                </div>
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between text-sm text-muted-foreground">
              <p>Need help? <a href="#" className="text-primary underline-offset-4 hover:underline">Contact support</a></p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default SelectOrg;
