import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

import Image from "next/image";
import Hero from "@/public/idea-launch.svg";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main>
      <div className="px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-2xl font-semibold">kobe.onl</h1>
          <ul className="flex items-center">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <Button className="ml-8">
                <Github className="mr-2 h-4 w-4" />
                <a href="https://github.com/kobejk">Github</a>
              </Button>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="py-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Kobe Kunce
          </h2>
          <h3 className="py-2 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Security Engineer, Programmer, Vim User.
          </h3>
          <p className="leading-7 py-5 max-w-md mx-auto">
            Diploma in Information Technology, Bachelor of Cyber Security. This
            site was made to get familiar with React and TypeScript. I'll keep
            this page updated with projects that I'm working on.
          </p>
        </div>
        <div className="relative mx-auto w-80 h-80 md:w-120 md:h-120">
          <Image src={Hero} alt="hero image" fill />
        </div>
      </div>
    </main>
  );
}
