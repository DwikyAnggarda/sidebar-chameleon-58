
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PlusCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Competitors = () => {
  const competitors = [
    { name: "RivalCorp", market: "Enterprise SaaS", strength: "Market Leader", weakness: "Higher Pricing" },
    { name: "TechNova", market: "Enterprise SaaS", strength: "Advanced AI Features", weakness: "Poor Customer Support" },
    { name: "DataPulse", market: "Data Analytics", strength: "Extensive Integrations", weakness: "Complex UI" },
    { name: "CloudWave", market: "Cloud Infrastructure", strength: "Reliable Performance", weakness: "Limited Customization" },
    { name: "AlgoSoft", market: "AI Solutions", strength: "Innovative Algorithms", weakness: "New to Market" },
  ];

  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Competitors</h1>
          <Button className="flex items-center gap-2">
            <PlusCircle className="h-4 w-4" />
            <span>Add Competitor</span>
          </Button>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Market Positioning</CardTitle>
            <CardDescription>How your company compares to competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
              <p className="text-muted-foreground">Competitor Positioning Map</p>
            </div>
          </CardContent>
        </Card>
        
        <h2 className="text-xl font-semibold mb-4">Competitor Analysis</h2>
        <div className="space-y-4">
          {competitors.map((competitor, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {competitor.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{competitor.name}</CardTitle>
                      <CardDescription>{competitor.market}</CardDescription>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div>
                    <h3 className="font-medium mb-2">Strengths</h3>
                    <p className="text-sm text-muted-foreground">{competitor.strength}</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Weaknesses</h3>
                    <p className="text-sm text-muted-foreground">{competitor.weakness}</p>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between">
                  <div className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      Edit
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive">
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Competitors;
