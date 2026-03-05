import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Fixlyst – AI Bug Fixer for GitHub",
  description:
    "Fixlyst monitors your GitHub repositories and suggests AI-powered bug fixes automatically. Stay ahead with smart alerts, instant PRs, and clear code explanations.",
  openGraph: {
    title: "Fixlyst – AI Bug Fixer for GitHub",
    description:
      "Fixlyst watches your GitHub projects, detects bugs with AI, and auto-suggests fixes with clear explanations. Get proactive Slack alerts and seamless pull requests.",
    url: "https://fixlyst.com",
    siteName: "Fixlyst",
    images: [
      {
        url: "/fixlyst-og.png",
        width: 1200,
        height: 630,
        alt: "Fixlyst Dashboard Screenshot",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="relative min-h-[90vh] flex flex-col items-center justify-start px-4 sm:px-8 md:px-12 pt-16 pb-24 bg-background">
      <header className="max-w-3xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Fixlyst <span className="gradient-text">AI Bug Fixer for GitHub</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Unlock effortless code quality. Fixlyst constantly monitors your GitHub repositories,
          detects bugs with advanced AI, and instantly suggests fixes.
          Ship cleaner software with automated bug detection, code explanations, smart PRs, and real-time Slack alerts—all in one seamless workflow.
        </p>
        <Button size="lg" asChild>
          <Link href="/sign-in">
            Connect GitHub &rarr;
          </Link>
        </Button>
      </header>
      <section className="max-w-4xl w-full flex flex-col md:flex-row bg-card shadow-lg rounded-2xl p-6 md:p-10 gap-4 md:gap-8 items-center">
        <div className="flex-1 min-w-[230px]">
          <h2 className="text-2xl font-semibold mb-2">How Fixlyst Works</h2>
          <ul className="space-y-3 pl-3 list-disc">
            <li>
              <strong>Repo Monitoring:</strong> Fixlyst keeps a constant eye on your GitHub repositories for code changes.
            </li>
            <li>
              <strong>AI Bug Detection:</strong> Advanced AI scans updates and identifies hidden bugs in your codebase.
            </li>
            <li>
              <strong>Auto Pull Requests:</strong> Instantly receive suggested bug fixes as PRs you can review and merge.
            </li>
            <li>
              <strong>Code Explanation:</strong> Get clear, human-friendly explanations for every suggested fix.
            </li>
            <li>
              <strong>Slack Alerts:</strong> Stay up to date with real-time Slack notifications for all detected bugs and suggestions.
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image
            src="/fixlyst-dashboard.png"
            alt="Fixlyst dashboard demo"
            width={480}
            height={340}
            priority
            className="rounded-xl shadow-2xl border border-muted max-w-full"
          />
          <span className="block mt-2 text-xs text-muted-foreground">
            Automated AI bug reports with actionable fixes
          </span>
        </div>
      </section>
      <section className="mt-20 max-w-2xl w-full text-center">
        <h2 className="text-2xl font-bold mb-2">Why Fixlyst?</h2>
        <p className="text-muted-foreground mb-6">
          Build with confidence. Fixlyst eliminates the bottleneck between discovering issues and shipping reliable software, so you and your team can focus on what matters most—creating value, not chasing bugs.
        </p>
        <Button size="lg" asChild>
          <Link href="/sign-in">
            Try Fixlyst Free →
          </Link>
        </Button>
      </section>
      <footer className="mt-24 text-center text-sm text-muted-foreground w-full flex flex-col gap-1">
        <span>
          &copy; {new Date().getFullYear()} Fixlyst. Crafted by Chirag Dodiya.
        </span>
        <span>
          Questions? <a className="underline" href="mailto:hi@chirag.co">hi@chirag.co</a>
        </span>
      </footer>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #1a73e8 25%, #54e0c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </main>
  );
}