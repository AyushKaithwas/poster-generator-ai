import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex flex-row p-7 justify-around items-center gap-5 h-[90%]">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-primary md:text-3xl text-3xl">
            AI GENERATED
          </h1>
          <h1 className="font-bold md:text-5xl text-3xl">POSTER GENERATOR</h1>
          <div className="bg-gradient-to-r from-primary h-5" />
          <p className="text-sm mt-4 w-[33rem] text-[#CEBDF3]">
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
          <Link href="/gallery">
            <Button
              variant="outline"
              className="font-bold w-50 text-primary"
              disabled
            >
              GALLERY (coming soon)
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col gap-5 relative">
          <Image
            src="/posters/poster1.png"
            alt="Artistic poster of a man and woman"
            height={100}
            width={100}
            className="min-w-[70px]"
          />
          <Image
            src="/posters/poster2.png"
            alt="Artistic poster of a man and woman"
            height={100}
            width={100}
          />
          <Image
            src="/posters/poster3.png"
            alt="Artistic poster of a man and woman"
            height={100}
            width={100}
          />
        </div>
      </div>
      <Image
        src="/posters/poster4-border-gradient.png"
        alt="Art of astronaut in space"
        height={500}
        width={500}
        className="h-full w-auto"
      />
    </main>
  );
}
