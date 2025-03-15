
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FileCheck, Upload, CheckCheck, Clock, Star, StarHalf, FileText } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Review = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Document Review</h1>
            <p className="text-muted-foreground">Track and manage document reviews</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              <span>Upload</span>
            </Button>
            <Button className="flex items-center gap-2">
              <FileCheck className="h-4 w-4" />
              <span>New Review</span>
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="pending" className="mb-6">
          <TabsList>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="my-reviews">My Reviews</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="mt-6">
            <div className="space-y-4">
              {[
                { title: "Q2 Marketing Plan", assignee: "You", dueDate: "Tomorrow", progress: 75 },
                { title: "Product Roadmap", assignee: "You", dueDate: "June 23, 2023", progress: 10 },
                { title: "Sales Strategy Document", assignee: "You", dueDate: "June 30, 2023", progress: 0 }
              ].map((review, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <FileText className="h-5 w-5 text-primary" />
                          {review.title}
                        </CardTitle>
                        <CardDescription>Assigned to: {review.assignee}</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">Review Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Due: {review.dueDate}</p>
                      <p className="text-sm font-medium">{review.progress}% Complete</p>
                    </div>
                    <Progress value={review.progress} className="h-2" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="my-reviews">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "HR Policy Update", requestedBy: "Sarah Kim", status: "In Progress", date: "Started 2 days ago" },
                { title: "Client Proposal", requestedBy: "David Wong", status: "Not Started", date: "Assigned yesterday" }
              ].map((review, i) => (
                <Card key={i} className="flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{review.title}</CardTitle>
                      {review.status === "In Progress" ? (
                        <div className="bg-amber-100 text-amber-700 text-xs px-2 py-1 rounded-full">In Progress</div>
                      ) : (
                        <div className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">Not Started</div>
                      )}
                    </div>
                    <CardDescription>Requested by: {review.requestedBy}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2 flex-1">
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </CardContent>
                  <div className="p-4 pt-0 mt-auto">
                    <Button className="w-full">Continue Review</Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="completed">
            <div className="space-y-4">
              {[
                { title: "Annual Report", reviewedBy: "John Smith", date: "May 15, 2023", rating: 5 },
                { title: "Customer Presentation", reviewedBy: "Emma Johnson", date: "April 28, 2023", rating: 4 },
                { title: "Project Proposal", reviewedBy: "Multiple Reviewers", date: "April 10, 2023", rating: 3 }
              ].map((review, i) => (
                <Card key={i}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.title}</CardTitle>
                        <CardDescription>Reviewed by: {review.reviewedBy}</CardDescription>
                      </div>
                      <div className="flex items-center">
                        {Array(5).fill(0).map((_, idx) => (
                          idx < review.rating ? 
                            <Star key={idx} className="h-4 w-4 text-yellow-400 fill-yellow-400" /> : 
                            <Star key={idx} className="h-4 w-4 text-muted-foreground" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <div className="flex justify-between">
                      <p className="text-sm text-muted-foreground">Completed on {review.date}</p>
                      <div className="flex items-center text-green-500">
                        <CheckCheck className="h-4 w-4 mr-1" />
                        <span className="text-sm">Approved</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SidebarDemo>
  );
};

export default Review;
