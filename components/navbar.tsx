import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { PrimaryLink } from "./primary-link";
import { ModeToggle } from "./theme-switch-button";
import { MenuIcon } from "lucide-react";

export function Navbar() {
  return (
    <header className="dark:bg-secondary">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <PrimaryLink href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/eye-logo.png"
              width={40}
              height={40}
              alt="Poster Generator"
              className="h-10 w-10"
            />
            <h1 className="font-bold">Poster Generator AI</h1>
          </div>
        </PrimaryLink>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PrimaryLink href="/collection">Collection</PrimaryLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
