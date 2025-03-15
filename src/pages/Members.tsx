
import { SidebarDemo } from "@/components/SidebarDemo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Search, UserPlus, Filter, MoreHorizontal } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const Members = () => {
  // Sample member data
  const members = [
    { name: "John Smith", email: "john@example.com", role: "Admin", status: "Active", joined: "Jan 15, 2023" },
    { name: "Sarah Johnson", email: "sarah@example.com", role: "Member", status: "Active", joined: "Feb 3, 2023" },
    { name: "Michael Brown", email: "michael@example.com", role: "Member", status: "Active", joined: "Mar 12, 2023" },
    { name: "Emily Davis", email: "emily@example.com", role: "Viewer", status: "Inactive", joined: "Apr 5, 2023" },
    { name: "Robert Wilson", email: "robert@example.com", role: "Member", status: "Pending", joined: "May 22, 2023" },
  ];

  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Team Members</h1>
            <p className="text-muted-foreground">Manage your organization's members and permissions</p>
          </div>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-4 w-4" />
            <span>Invite Member</span>
          </Button>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Organization Overview</CardTitle>
            <CardDescription>Current member statistics and limits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Total Members</p>
                <p className="text-3xl font-bold">5 / 10</p>
                <p className="text-xs text-muted-foreground mt-1">5 seats available</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Active Members</p>
                <p className="text-3xl font-bold">3</p>
                <p className="text-xs text-muted-foreground mt-1">60% of total</p>
              </div>
              <div className="border rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-1">Pending Invites</p>
                <p className="text-3xl font-bold">1</p>
                <p className="text-xs text-muted-foreground mt-1">Expires in 6 days</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search members..." className="pl-10" />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={member.role === "Admin" ? "default" : "outline"}>
                        {member.role}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={`
                          ${member.status === "Active" ? "bg-green-50 text-green-700 border-green-200" : ""}
                          ${member.status === "Inactive" ? "bg-gray-50 text-gray-700 border-gray-200" : ""}
                          ${member.status === "Pending" ? "bg-yellow-50 text-yellow-700 border-yellow-200" : ""}
                        `}
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{member.joined}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Role</DropdownMenuItem>
                          <DropdownMenuItem>Reset Password</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500">Remove</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </SidebarDemo>
  );
};

export default Members;
