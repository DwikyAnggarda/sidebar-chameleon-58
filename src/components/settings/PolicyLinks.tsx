
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function PolicyLinks() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Policies</CardTitle>
        <CardDescription>
          Access our company policies and legal documents.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <a 
            href="#" 
            className="flex items-center justify-between p-3 rounded-md hover:bg-muted"
          >
            <div>
              <h3 className="font-medium">Privacy Policy</h3>
              <p className="text-sm text-muted-foreground">
                How we collect, use, and protect your data
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
          
          <a 
            href="#" 
            className="flex items-center justify-between p-3 rounded-md hover:bg-muted"
          >
            <div>
              <h3 className="font-medium">Terms of Service</h3>
              <p className="text-sm text-muted-foreground">
                Rules and guidelines for using our platform
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
          
          <a 
            href="#" 
            className="flex items-center justify-between p-3 rounded-md hover:bg-muted"
          >
            <div>
              <h3 className="font-medium">Cookie Policy</h3>
              <p className="text-sm text-muted-foreground">
                Information about our use of cookies
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
          
          <a 
            href="#" 
            className="flex items-center justify-between p-3 rounded-md hover:bg-muted"
          >
            <div>
              <h3 className="font-medium">Security Policy</h3>
              <p className="text-sm text-muted-foreground">
                How we secure your information
              </p>
            </div>
            <ExternalLink className="h-4 w-4 text-muted-foreground" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
