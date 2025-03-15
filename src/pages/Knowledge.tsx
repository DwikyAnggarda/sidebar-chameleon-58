
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, FileText, BookPlus, Book, Bookmark } from "lucide-react";

const Knowledge = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Knowledge Base</h1>
            <p className="text-muted-foreground">Find and manage your organization's knowledge</p>
          </div>
          <Button className="flex items-center gap-2">
            <BookPlus className="h-4 w-4" />
            <span>Add Document</span>
          </Button>
        </div>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search knowledge base..." className="pl-10" />
        </div>
        
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Documents</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="procedures">Procedures</TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Onboarding Guide", category: "Guides", icon: Book },
                { title: "Sales Playbook", category: "Guides", icon: BookOpen },
                { title: "Security Policy", category: "Policies", icon: FileText },
                { title: "Expense Procedure", category: "Procedures", icon: FileText },
                { title: "Customer Support Manual", category: "Guides", icon: BookOpen },
                { title: "Product Specifications", category: "Documentation", icon: Book }
              ].map((doc, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <doc.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{doc.title}</CardTitle>
                          <CardDescription>{doc.category}</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-sm text-muted-foreground mb-4">
                      Last updated: {new Date(Date.now() - i * 86400000 * 5).toLocaleDateString()}
                    </p>
                    <Button size="sm" variant="outline">View Document</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <p className="text-muted-foreground">Displaying guides and tutorials.</p>
          </TabsContent>
          
          <TabsContent value="policies">
            <p className="text-muted-foreground">Displaying company policies.</p>
          </TabsContent>
          
          <TabsContent value="procedures">
            <p className="text-muted-foreground">Displaying standard procedures.</p>
          </TabsContent>
          
          <TabsContent value="saved">
            <p className="text-muted-foreground">Displaying documents you've saved.</p>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarDemo>
  );
};

export default Knowledge;
