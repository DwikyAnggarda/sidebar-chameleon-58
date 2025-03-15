
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plug, Plus, Check, ChevronRight, AlertCircle, Settings } from "lucide-react";
import { Input } from "@/components/ui/input";

const Integrations = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Integrations</h1>
            <p className="text-muted-foreground">Connect your tools and services</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Add Integration</span>
          </Button>
        </div>
        
        <Tabs defaultValue="connected" className="mb-6">
          <TabsList>
            <TabsTrigger value="connected">Connected</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
          </TabsList>
          
          <TabsContent value="connected" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Slack</CardTitle>
                        <CardDescription>Messaging Platform</CardDescription>
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm mb-2"><Check className="inline h-4 w-4 text-green-500 mr-1" /> Connected to #sales-team</p>
                  <p className="text-sm mb-4"><Check className="inline h-4 w-4 text-green-500 mr-1" /> Sends notifications for new deals</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">Last synced: 2 hours ago</p>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-md">
                        <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4M12 8h.01" />
                        </svg>
                      </div>
                      <div>
                        <CardTitle className="text-lg">Google Calendar</CardTitle>
                        <CardDescription>Calendar Integration</CardDescription>
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm mb-2"><Check className="inline h-4 w-4 text-green-500 mr-1" /> Syncs meetings and events</p>
                  <p className="text-sm mb-4"><Check className="inline h-4 w-4 text-green-500 mr-1" /> Creates calendar invites</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">Last synced: 30 minutes ago</p>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow-100 p-2 rounded-md">
                        <AlertCircle className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Stripe</CardTitle>
                        <CardDescription>Payment Processing</CardDescription>
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </CardHeader>
                <CardContent className="pt-2">
                  <p className="text-sm mb-2"><AlertCircle className="inline h-4 w-4 text-yellow-500 mr-1" /> API key expired</p>
                  <p className="text-sm mb-4"><AlertCircle className="inline h-4 w-4 text-yellow-500 mr-1" /> Reconnection required</p>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">Last synced: 3 days ago</p>
                    <Button variant="outline" size="sm">Reconnect</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="available">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search available integrations..." className="pl-10" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "HubSpot", "Salesforce", "Mailchimp", "Zapier", "GitHub", "Zendesk"
              ].map((integration, i) => (
                <Card key={i} className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Plug className="h-5 w-5 text-primary" />
                      {integration}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect your {integration} account to enable data syncing.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">Connect</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketplace">
            <div className="p-6 text-center">
              <Plug className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
              <h3 className="text-xl font-medium mb-2">Integration Marketplace</h3>
              <p className="text-muted-foreground mb-4">Discover new integrations and extensions for your workspace</p>
              <Button>Explore Marketplace</Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>API Access</CardTitle>
            <CardDescription>Manage API keys and webhooks for custom integrations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">Developer API Keys</h3>
                  <p className="text-sm text-muted-foreground">Create and manage API keys for your custom applications</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Manage</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div>
                  <h3 className="font-medium">Webhooks</h3>
                  <p className="text-sm text-muted-foreground">Configure webhook endpoints for real-time data updates</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  <span>Manage</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarDemo>
  );
};

export default Integrations;
