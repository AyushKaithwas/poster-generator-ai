import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function DesktopLanding({ className }: { className: string }) {
  return (
    <main
      className={cn(
        "flex flex-row p-7 justify-around items-center gap-5 h-[90%]",
        className
      )}
    >
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-primary md:text-3xl text-3xl">
            AI GENERATED
          </h1>
          <h1 className="font-bold md:text-5xl text-3xl">POSTER GENERATOR</h1>
          <div className="bg-gradient-to-r from-primary h-5" />
          <p className=" mt-4 w-[33rem] text-[#CEBDF3]">
            The AI Poster generator blends advanced technology with creativity,
            enabling users to easily transform ideas into unique posters.
          </p>
        </div>
        <div className="flex gap-10">
          <Link href="/generate">
            <Button variant="outline" className="font-bold w-40">
              GENERATE
            </Button>
          </Link>
          <Button
            variant="outline"
            className="font-bold w-50 text-primary"
            disabled
          >
            GALLERY (coming soon)
          </Button>
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="flex-col gap-5 lg:flex hidden">
          <Image
            src="/posters/poster1.png"
            alt="Artistic poster of a man and woman"
            height={150}
            width={150}
          />
          <Image
            src="/posters/poster2.png"
            alt="Artistic poster of a man and woman"
            height={150}
            width={150}
          />
          <Image
            src="/posters/poster3.png"
            alt="Artistic poster of a man and woman"
            height={150}
            width={150}
          />
        </div>
        <Image
          src="/posters/poster4-border-gradient.png"
          alt="Art of astronaut in space"
          height={500}
          width={500}
          className="h-auto w-96 mt-5 min-w-[140px] max-w-[400px]"
        />
      </div>
    </main>
  );
}
