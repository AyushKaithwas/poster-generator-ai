import Image from "next/image";
import { PrimaryLink } from "./primary-link";
import { ModeToggle } from "./theme-switch-button";

export function Navbar() {
  return (
    <header className="dark:bg-secondary">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <PrimaryLink href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/poster-gen-logo.png"
              width={40}
              height={40}
              alt="Poster Generator"
              className="h-10 w-10"
            />
            <h1 className="font-bold">Poster Generator AI</h1>
          </div>
        </PrimaryLink>
        <ul className="flex gap-2 items-center">
          <li>
            <ModeToggle />
          </li>
          <li>
            <PrimaryLink href="/generate">Generate</PrimaryLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
