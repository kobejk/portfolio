import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main className="px-10">
      <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-2xl">kobe.onl</h1>
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
      <div>
        <h2>Kobe Kunce</h2>
        <h3>Security Engineer, Programmer, Vim User.</h3>
        <p>
          Holding a Diploma in Information Technology and pursuing a Bachelor of
          Cyber Security.
        </p>
      </div>
    </main>
  );
}
