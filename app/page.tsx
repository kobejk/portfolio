import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="px-10">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-2xl font-semibold">kobe.onl</h1>
        <ul className="flex items-center">
          <li>
            <Moon className="cursor-pointer" />
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
        <p>
          Diploma in Information Technology, Bachelor of Cyber Security. This
          site was made to experiment with ReactJS. I'll keep this page updated
          with projects that I'm working on.
        </p>
      </div>
    </main>
  );
}
