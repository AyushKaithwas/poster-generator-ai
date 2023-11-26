import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { DesktopLanding } from "@/components/landing-page/desktop";
import { MobileLanding } from "@/components/landing-page/mobile";
export default function Home() {
  return (
    <>
      <DesktopLanding className="md:flex hidden" />
      <MobileLanding className="md:hidden flex" />
    </>
  );
}
