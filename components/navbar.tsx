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
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { signOut } from "next-auth/react";
import SignOut from "./signout";
export async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <header className="border-b-2 border-primary">
      <div className=" flex h-16 items-center justify-between md:px-32 px-5">
        <PrimaryLink href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/eye-logo.png"
              width={40}
              height={40}
              alt="Poster Generator"
              className="h-10 w-10"
            />
            <h1 className="font-bold">POSTER GENERATOR AI</h1>
          </div>
        </PrimaryLink>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <PrimaryLink href="/generate">Generate</PrimaryLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PrimaryLink href="/collection">Collection</PrimaryLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <PrimaryLink href="/plans">Buy Credits</PrimaryLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {session ? (
                <SignOut>Sign Out</SignOut>
              ) : (
                <PrimaryLink href="/api/auth/signin">Sign In</PrimaryLink>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
