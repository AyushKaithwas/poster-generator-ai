import Carousel from "@/components/carousel/carousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col p-7 gap-5 items-center">
      <h1 className="font-black md:text-5xl text-3xl">
        Generate posters instantly.
      </h1>
      <Link className="w-full md:w-80" href="/generate">
        <Button className="w-full md:w-80">GET STARTED</Button>
      </Link>
      <Carousel />
    </main>
  );
}
