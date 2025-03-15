
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircleQuestion, ThumbsUp, ThumbsDown, Send, Filter } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const Feedback = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Feedback</h1>
            <p className="text-muted-foreground">Give and receive feedback to improve your organization</p>
          </div>
          <Button className="flex items-center gap-2">
            <MessageCircleQuestion className="h-4 w-4" />
            <span>Request Feedback</span>
          </Button>
        </div>
        
        <Tabs defaultValue="received" className="mb-6">
          <TabsList>
            <TabsTrigger value="received">Received</TabsTrigger>
            <TabsTrigger value="given">Given</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
          
          <TabsContent value="received" className="mt-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recent Feedback</h2>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                { sender: "Jane Smith", role: "Marketing Manager", date: "June 15, 2023", positive: true },
                { sender: "Michael Johnson", role: "Sales Director", date: "May 28, 2023", positive: true },
                { sender: "Emily Davis", role: "Product Manager", date: "May 12, 2023", positive: false }
              ].map((feedback, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {feedback.sender.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg">{feedback.sender}</CardTitle>
                          <CardDescription>{feedback.role}</CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {feedback.positive ? (
                          <div className="flex items-center text-green-500">
                            <ThumbsUp className="h-5 w-5 mr-1" />
                            <span>Positive</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-amber-500">
                            <ThumbsDown className="h-5 w-5 mr-1" />
                            <span>Needs Improvement</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-muted-foreground">
                      {feedback.positive 
                        ? "Your presentation was very well received by the team. Great job explaining the technical concepts in a way everyone could understand."
                        : "The report had some inconsistencies that needed clarification. Let's discuss how we can improve the data analysis section."}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Received on {feedback.date}</p>
                  </CardContent>
                  <CardFooter className="pt-2 flex justify-end gap-2">
                    <Button variant="outline" size="sm">Acknowledge</Button>
                    <Button size="sm">Respond</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="given">
            <div className="text-center p-6">
              <MessageCircleQuestion className="h-12 w-12 mx-auto mb-4 text-muted-foreground/40" />
              <h3 className="text-xl font-medium mb-2">Feedback You've Given</h3>
              <p className="text-muted-foreground mb-4">View and manage feedback you've provided to others</p>
            </div>
          </TabsContent>
          
          <TabsContent value="pending">
            <div className="text-center p-6">
              <MessageCircleQuestion className="h-12 w-12 mx-auto mb-4 text-muted-foreground/40" />
              <h3 className="text-xl font-medium mb-2">Pending Feedback Requests</h3>
              <p className="text-muted-foreground mb-4">You don't have any pending feedback requests</p>
            </div>
          </TabsContent>
        </Tabs>
        
        <Card>
          <CardHeader>
            <CardTitle>Give Quick Feedback</CardTitle>
            <CardDescription>Share your thoughts with a team member</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <p className="text-sm font-medium">To: Select recipient</p>
              </div>
              <Textarea placeholder="Write your feedback here..." rows={4} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ThumbsUp className="h-4 w-4" />
                <span>Positive</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ThumbsDown className="h-4 w-4" />
                <span>Needs Improvement</span>
              </Button>
            </div>
            <Button className="flex items-center gap-2">
              <Send className="h-4 w-4" />
              <span>Send Feedback</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </SidebarDemo>
  );
};

export default Feedback;
