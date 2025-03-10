
import { useState } from "react";
import { SidebarDemo } from "@/components/SidebarDemo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanySettings } from "@/components/settings/CompanySettings";
import { UserProfile } from "@/components/settings/UserProfile";
import { PolicyLinks } from "@/components/settings/PolicyLinks";
import { ThemeSettings } from "@/components/settings/ThemeSettings";

const Settings = () => {
  return (
    <SidebarDemo>
      <div className="p-8 pl-16 max-w-screen-xl mx-auto w-full">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <Tabs defaultValue="company" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="company">Company</TabsTrigger>
            <TabsTrigger value="profile">User Profile</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="company">
            <CompanySettings />
          </TabsContent>
          
          <TabsContent value="profile">
            <UserProfile />
          </TabsContent>
          
          <TabsContent value="policies">
            <PolicyLinks />
          </TabsContent>
          
          <TabsContent value="appearance">
            <ThemeSettings />
          </TabsContent>
        </Tabs>
      </div>
    </SidebarDemo>
  );
};

export default Settings;
