import Image from "next/image";
import Link from "next/link";
import { Baloo_2 } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const baloo2 = Baloo_2({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-baloo-2",
  fallback: ["system-ui", "arial", "sans-serif"],
});

const notoSans = Noto_Sans({
  weight: ["400", "800"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export default function LandingPage() {
  return (
    <div className={`${baloo2.className}`}>
      <header className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link className="flex items-center space-x-2" href="#">
          <Image
            src="/logo.svg"
            alt="CloudUI Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className={`${notoSans.className} text-lg`}>
            Cloud<span className="font-bold">UI</span>
          </span>
        </Link>
        <nav className="flex gap-6">
          <a className="text-sm font-medium hover:underline" href="#features">
            Features
          </a>
          <a className="text-sm font-medium hover:underline" href="#pricing">
            Pricing
          </a>
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full">
        <section className="container max-w-4xl px-4 py-12 text-center md:py-18 mx-auto">
          <div className="mx-auto max-w-[64rem] space-y-10">
            <h1
              className={`${notoSans.className} text-3xl sm:text-3xl md:text-5xl md:leading-tight font-extrabold tracking-tight text-center`}
            >
              Focus on{" "}
              <span className="inline-block bg-black px-2 py-2 -rotate-1 transform text-white">
                solving problems
              </span>
              , not navigating the AWS Console
            </h1>
            <div className="space-y-2 text-center">
              <p className="text-base sm:text-lg md:text-xl">
                A <span className="font-semibold">powerful</span> and{" "}
                <span className="font-semibold">intuitive</span> GUI client for
                your most used AWS services
              </p>
              <p className="text-base sm:text-lg md:text-xl">
                for <span className="font-semibold">MacOS</span>,{" "}
                <span className="font-semibold">Linux</span>, and{" "}
                <span className="font-semibold">Windows</span>
              </p>
            </div>
            <div className="">
              <Button className="bg-[#FF6200] text-white hover:bg-[#FF4D00] text-lg py-3 px-8">
                Get CloudUI
              </Button>
            </div>
            <div className="mx-auto max-w-5xl flex flex-col items-center pt-2">
              <Image
                src="/hero.png"
                alt="CloudUI Dashboard Interface showing real-time AWS metrics and monitoring"
                width={800}
                height={400}
                className="rounded-xl shadow-2xl shadow-black/20"
              />
            </div>
            <div className="container max-w-[800px] mx-auto pt-6 px-4 md:px-0 hidden md:block">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 pl-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <Image
                      src="/custom-dashboard-icon.svg"
                      alt="Custom Dashboard Icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">Custom dashboards</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <Image
                      src="/logs-icon.svg"
                      alt="Logs Icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">Logs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <Image
                      src="/ec2-icon.svg"
                      alt="Logs Icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">EC2 manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <Image
                      src="/dynamodb-icon.svg"
                      alt="DynamoDB Icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">DynamoDB</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <Image
                      src="/sql-icon.svg"
                      alt="SQL Icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">SQL client</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <Image
                      src="/s3-icon.svg"
                      alt="S3 Icon"
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-medium">S3 manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <a
            href="https://marketplace.visualstudio.com/items?itemName=devAdvice.serverlessconsole&ssr=false"
            target="_blank"
            className={`${notoSans.className} mt-10 text-center space-y-2`}
          >
            <p className="text-l text-gray-600">
              from the creators of VS Code extension:
            </p>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/vscode-logo.svg"
                alt="VS Code Logo"
                width={21}
                height={21}
              />
              <span className="text-xl font-semibold text-gray-800">
                Serverless console
              </span>
            </div>
            <div className="flex justify-center items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 text-sm">25,000 installs</p>
          </a>
        </section>

        <section className="max-w-5xl mx-auto px-4 pt-16">
          <div className="bg-[#FAFAFA] rounded-[32px] p-8 md:p-10 space-y-12">
            <div className="md:grid md:grid-cols-2 gap-12 md:gap-16 hidden">
              <h3 className="text-xl font-semibold">AWS Console</h3>
              <h3 className="text-xl font-semibold">CloudUI</h3>
            </div>
            <div className="md:hidden">
              <h3 className="text-xl font-semibold">
                AWS Console / CloudUI comparison
              </h3>
            </div>

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Hard to manage multiple projects
                    </h4>
                    <p className="text-gray-600">
                      Managing multiple projects is cumbersome and inefficient
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/check.svg"
                        alt=""
                        width={10}
                        height={9}
                        className="w-[10px] h-[9px]"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Easy project management
                    </h4>
                    <p className="text-gray-600">
                      Effortlessly switch between projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Feature-rich but not user-friendly
                    </h4>
                    <p className="text-gray-600">
                      Packed with features but not optimized for common tasks
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/check.svg"
                        alt=""
                        width={10}
                        height={9}
                        className="w-[10px] h-[9px]"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Tailored for common tasks
                    </h4>
                    <p className="text-gray-600">
                      Optimized for the most-used services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      No environment separation
                    </h4>
                    <p className="text-gray-600">
                      Lacks easy management for dev, staging, and production
                      environments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/check.svg"
                        alt=""
                        width={10}
                        height={9}
                        className="w-[10px] h-[9px]"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Built-in environment support
                    </h4>
                    <p className="text-gray-600">
                      Seamlessly switch between environments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Time-consuming account switching
                    </h4>
                    <p className="text-gray-600">
                      Managing multiple AWS accounts is slow and tedious
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3 text-left">
                  <div className="mt-1">
                    <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                      <Image
                        src="/check.svg"
                        alt=""
                        width={10}
                        height={9}
                        className="w-[10px] h-[9px]"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Quick account switching
                    </h4>
                    <p className="text-gray-600">
                      Define default profiles for projects, making switching
                      fast and easy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pt-32" id="features">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-[500px] max-w-full mx-auto md:mx-0 space-y-6 flex-1 text-left">
              <h2 className={`text-3xl font-bold text-left`}>
                Intuitive logs management
              </h2>
              <ul className="ml-2 space-y-2 w-72">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Search and filter logs effortlessly</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Tagging for quick error/warning identification</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Highlight key data for quick insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    View logs with relative, human-readable timestamps
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>JSON syntax highlighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Organize logs in directories</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Group Lambda logs by request</span>
                </li>
              </ul>
            </div>
            <Image
              src="/logs-managment.png"
              alt="CloudUI Logs Interface showing real-time log entries with timestamps and performance metrics"
              width={500}
              height={300}
              className="mx-auto md:mx-0 rounded-lg border bg-zinc-900 shadow-xl shadow-black/20 transform md:rotate-1 flex-1"
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-14">
            <Image
              src="/db-tools.png"
              alt="CloudUI Database Interface showing JSON data with syntax highlighting and change tracking"
              width={500}
              height={300}
              className="mx-auto md:mx-0 order-1 md:order-0 rounded-lg border bg-zinc-900 shadow-xl shadow-black/20 transform md:-rotate-1 flex-1"
            />
            <div className="w-[500px] max-w-full mx-auto md:mx-0 order-0 md:order-1 space-y-6 flex-1 text-left">
              <h2 className={`text-3xl font-bold text-left`}>
                Professional database tools
              </h2>
              <ul className="ml-2 space-y-2">
                <li className="flex items-center font-bold gap-2">
                  <Check className="h-5 w-5 " />
                  DynamoDB, PostgreSQL, MariaDB
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  JSON editor for updates
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Stage changes before executing them
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Number of changes counter
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Syntax highlighting
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`${baloo2.className} w-full my-32 py-14 bg-[#FAFAFA] border-t border-b border-[#E1E1E1]`}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Connect directly to AWS</h2>
            <div className="space-y-4 text-xl px-4">
              <p>
                All requests are sent{" "}
                <span className="font-bold">directly</span> to your AWS account,
              </p>
              <p>
                authenticated via{" "}
                <span className="font-bold">AWS CLI profiles</span>{" "}
                <span className="text-gray-500">
                  (CloudUI is just a client app)
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-14">
            <div className="w-[500px] max-w-full mx-auto md:mx-0 space-y-6 flex-1 text-left">
              <h2 className="text-3xl font-bold text-left">
                Custom dashboards
              </h2>
              <ul className="ml-2 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Multiple Dashboards
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Drag & Drop Widgets
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Interactive Graphs
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Logs Widget
                </li>
              </ul>
            </div>
            <Image
              src="/custom-dashboard.png"
              alt="CloudUI Dashboard showing Lambda duration metrics, S3 bucket sizes, and error tracking with endpoint paths"
              width={500}
              height={300}
              className="mx-auto md:mx-0 rounded-lg border bg-zinc-900 shadow-xl shadow-black/20 transform md:rotate-1 flex-1"
            />
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-14">
            <Image
              src="/s3-manager.png"
              alt="CloudUI S3 Manager showing folder structure, file preview, and metadata panel with region and ownership details"
              width={500}
              height={300}
              className="mx-auto md:mx-0 order-1 md:order-0 rounded-lg border bg-zinc-900 shadow-xl shadow-black/20 transform md:-rotate-1 flex-1"
            />
            <div className="w-[500px] max-w-full mx-auto md:mx-0 order-0 md:order-1 space-y-6 flex-1 text-left">
              <h2 className="text-4xl font-bold text-left">S3 manager</h2>
              <ul className="ml-2 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Organized File Management
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Detailed File Insights
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Preview & Download
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Bulk Actions
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5" />
                  Drag & Drop Uploads
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`w-full mt-32 py-20 bg-[#FAFAFA] border-t border-b border-[#E1E1E1]`}
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-2xl font-medium">
              "Time and time again I find myself using this editor over the AWS
              web console to alter, delete and add records in familiar JSON."
            </p>
            <div className="space-y-1">
              <p className="font-medium">Michael</p>
              <p className="text-sm text-muted-foreground">
                (on serverless console VS Code extension)
              </p>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="container px-16 sm:px-8 md:px-4 py-8 mx-auto"
        >
          <div className="space-y-4 text-center mx-auto">
            <h2 className="text-4xl font-bold py-8">
              One-time payment
              <div className="py-2">No subscription!</div>
            </h2>
            <div className="flex items-center justify-center gap-2">
              <span className="bg-[#FF6200] -rotate-1 text-white px-2 py-1 text-md font-bold">
                Promotion!
              </span>
              <span className="text-base font-bold">50% off</span>
              <span className="text-base">for early adopters</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto mt-14">
            {[
              {
                title: "Starter",
                originalPrice: "$159",
                price: "$79",
                features: [
                  { name: "Custom dashboards", included: true },
                  { name: "Logs", included: true },
                  { name: "DynamoDB", included: true },
                  { name: "S3 management", included: true },
                  { name: "SQL client", included: false },
                  { name: "EC2 management", included: false },
                  { name: "All future services", included: false },
                ],
              },
              {
                title: "Professional",
                originalPrice: "$199",
                price: "$99",
                features: [
                  { name: "Custom dashboards", included: true },
                  { name: "Logs", included: true },
                  { name: "DynamoDB", included: true },
                  { name: "S3 management", included: true },
                  { name: "SQL client", included: true },
                  { name: "EC2 management", included: true },
                  { name: "All future services", included: true },
                ],
              },
            ].map((plan) => (
              <Card
                key={plan.title}
                className={`flex flex-col p-6 ${
                  plan.title === "Professional"
                    ? "border-2 border-[#FF6200]"
                    : ""
                } flex-1 bg-white`}
              >
                <div className="mb-6">
                  <h3 className="text-xl text-left font-bold mb-4">
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="line-through text-muted-foreground text-xl">
                      {plan.originalPrice}
                    </span>
                    <span className="text-6xl font-bold">{plan.price}</span>
                  </div>
                </div>
                <ul className="mb-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-2">
                      {feature.included ? (
                        <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                          <Image
                            src="/check.svg"
                            alt=""
                            width={10}
                            height={9}
                            className="w-[10px] h-[9px]"
                          />
                        </div>
                      ) : (
                        <X className="h-5 w-5 text-muted-foreground" />
                      )}
                      <span
                        className={
                          feature.included
                            ? "font-medium"
                            : "text-muted-foreground"
                        }
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#FF6200] text-white hover:bg-[#FF4D00] h-12 text-md">
                  Join Early Access
                </Button>
              </Card>
            ))}
          </div>
          <p className="mt-8 text-center text-base">
            Looking for <span className="font-medium">company licenses</span>?{" "}
            <Link href="#" className="text-[#FF6200] hover:underline">
              Contact us
            </Link>{" "}
            for custom pricing
          </p>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-16 items-center justify-between px-4">
          <p className="text-sm text-muted-foreground">© 2025 CloudUI</p>
          <nav className="flex gap-4"></nav>
        </div>
      </footer>
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
