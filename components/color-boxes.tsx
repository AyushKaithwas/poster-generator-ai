import { cn } from "@/lib/utils";

export function ColorBoxes({ setForm }: { setForm: any }) {
  return (
    <>
      <div className="grid grid-cols-5 gap-5">
        <ColorBox colorClass="bg-red-500" setForm={setForm} />
        <ColorBox colorClass="bg-yellow-500" setForm={setForm} />
        <ColorBox colorClass="bg-blue-500" setForm={setForm} />
        <ColorBox colorClass="bg-pink-500" setForm={setForm} />
        <ColorBox colorClass="bg-green-500" setForm={setForm} />
        <ColorBox colorClass="bg-orange-500" setForm={setForm} />
        <ColorBox colorClass="bg-violet-500" setForm={setForm} />
        <ColorBox colorClass="bg-purple-500" setForm={setForm} />
        <ColorBox colorClass="bg-gray-500" setForm={setForm} />
        <ColorBox colorClass="bg-black" setForm={setForm} />
      </div>
    </>
  );
}

function extractColor(className: string) {
  const regex = /bg-([a-zA-Z]+)(?:-|\s|$)/;
  const match = className.match(regex);
  return match ? match[1] : null;
}

function ColorBox({
  colorClass: color,
  setForm: setForm,
}: {
  colorClass: string;
  setForm: any;
}) {
  return (
    <>
      <button
        className={cn("flex flex-col gap-3 w-10 h-10 border rounded-sm", color)}
        onClick={(e) => {
          e.preventDefault();
          const color = extractColor(e.target.className);
          setForm((prev) => ({
            ...prev,
            ["color"]: color,
          }));
        }}
      />
    </>
  );
}
