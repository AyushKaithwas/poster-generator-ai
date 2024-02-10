import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function MobileLanding({ className }: { className: string }) {
  return (
    <main
      className={cn(
        "flex flex-col p-7 justify-around items-center gap-5 h-[90%]",
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
        </div>
      </div>
      <div className="flex flex-row gap-20 relative">
        <Image
          src="/posters/poster1.png"
          alt="Artistic poster of a man and woman"
          height={100}
          width={100}
        />
        <Image
          src="/posters/poster2.png"
          alt="Artistic poster of a man and woman"
          height={100}
          width={100}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Link href="/generate">
          <Button variant="outline" className="font-bold w-52">
            GENERATE
          </Button>
        </Link>

        <Button
          variant="outline"
          className="font-bold w-52 text-primary"
          disabled
        >
          GALLERY (coming soon)
        </Button>
      </div>
      <div className="flex flex-row gap-20 relative">
        <Image
          src="/posters/poster3.png"
          alt="Artistic poster of a man and woman"
          height={100}
          width={100}
        />
        <Image
          src="/posters/poster4.png"
          alt="Artistic poster of a man and woman"
          height={100}
          width={100}
        />
      </div>
    </main>
  );
}
