import { cn } from "@/lib/utils";

export function ColorBoxes() {
  return (
    <>
      <div className="grid grid-cols-5 gap-5">
        <ColorBox color="bg-red-500" />
        <ColorBox color="bg-yellow-500" />
        <ColorBox color="bg-blue-500" />
        <ColorBox color="bg-pink-500" />
        <ColorBox color="bg-green-500" />
        <ColorBox color="bg-orange-500" />
        <ColorBox color="bg-[#18FF9E]" />
        <ColorBox color="bg-purple-500" />
        <ColorBox color="bg-gray-500" />
        <ColorBox color="bg-black" />
      </div>
    </>
  );
}

function ColorBox({ color }: { color: string }) {
  return (
    <>
      <div
        className={cn("flex flex-col gap-3 w-10 h-10 border rounded-sm", color)}
      />
    </>
  );
}
