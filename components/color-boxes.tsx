import { cn } from "@/lib/utils";

type FormState = {
  description: string;
  color: string;
  style: string;
};

export function ColorBoxes({
  setForm,
}: {
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
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
  return match ? match[1] : "";
}

function ColorBox({
  colorClass: color,
  setForm: setForm,
}: {
  colorClass: string;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
}) {
  return (
    <>
      <button
        className={cn(
          "flex flex-col gap-3 md:w-24 md:h-24 w-10 h-10 border rounded-sm",
          color
        )}
        onClick={(e) => {
          e.preventDefault();
          const target = e.target as HTMLElement;
          const extractedColor = extractColor(target.className);
          if (extractedColor) {
            // Check if a color is extracted
            setForm((prev) => ({
              ...prev,
              color: extractedColor,
            }));
          }
        }}
      />
    </>
  );
}
