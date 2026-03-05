import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-bold">
            AI Bug Fixer for GitHub
          </CardTitle>
          <p className="mt-2 text-muted-foreground">
            Welcome to Fixlyst — your automated assistant for finding and fixing bugs on GitHub. This dashboard keeps you updated with smart, AI-powered issue detection and actionable fixes so you can focus on building, not bug hunting.
          </p>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Repo Monitoring:</strong> Stay on top of all code changes in your GitHub repositories.
            </li>
            <li>
              <strong>AI Bug Detection:</strong> Advanced AI scans your commits and PRs to identify hidden bugs instantly.
            </li>
            <li>
              <strong>Auto Pull Request Suggestions:</strong> Receive automated, ready-to-merge PRs with proposed fixes.
            </li>
            <li>
              <strong>Code Explanation:</strong> Clear, easy-to-understand explanations for every suggested fix.
            </li>
            <li>
              <strong>Slack Alerts:</strong> Real-time notifications keep your team in sync when bugs or fixes are found.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}