
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { SendHorizontal, MessagesSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Chat = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 h-[calc(100vh-54px)] flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Chat</h1>
            <p className="text-muted-foreground">Connect with your team and clients</p>
          </div>
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-none dark:bg-blue-900 dark:text-blue-300">BETA</Badge>
        </div>
        
        <div className="flex h-full gap-4">
          <div className="w-1/4 hidden md:block">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Recent Conversations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-1">
                  {["Marketing Team", "Sales Team", "Acme Corp", "Globex Corp", "Support Team"].map((chat, i) => (
                    <button 
                      key={i}
                      className={`w-full p-3 text-left hover:bg-muted/50 flex items-center gap-3 
                      ${i === 0 ? 'bg-muted/50' : ''}`}
                    >
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {chat.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="truncate">
                        <p className="text-sm font-medium">{chat}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          Last message: 2 hours ago
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1">
            <Card className="h-full flex flex-col">
              <CardHeader className="border-b py-3">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      MT
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">Marketing Team</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="flex-1 p-4 overflow-auto flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MessagesSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>No messages yet.</p>
                  <p className="text-sm">Start the conversation with your team!</p>
                </div>
              </CardContent>
              
              <CardFooter className="border-t p-3">
                <div className="flex w-full gap-2">
                  <Input placeholder="Type your message..." className="flex-1" />
                  <Button size="sm">
                    <SendHorizontal className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </SidebarDemo>
  );
};

export default Chat;
