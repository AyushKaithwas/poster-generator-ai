import Image from "next/image";

export function ArtStyles({ setForm }: { setForm: any }) {
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <ArtBox styleName="Art Deco" setForm={setForm} />
        <ArtBox styleName="Art Nouveau" setForm={setForm} />
        <ArtBox styleName="Baroque" setForm={setForm} />
        <ArtBox styleName="Bauhaus" setForm={setForm} />
        <ArtBox styleName="Constructivism" setForm={setForm} />
        <ArtBox styleName="Cubism" setForm={setForm} />
        <ArtBox styleName="Cyberpunk" setForm={setForm} />
        <ArtBox styleName="Dadaism" setForm={setForm} />
        <ArtBox styleName="Expressionist" setForm={setForm} />
        <ArtBox styleName="Futurism" setForm={setForm} />
        <ArtBox styleName="Geometric" setForm={setForm} />
        <ArtBox styleName="Gothic" setForm={setForm} />
        <ArtBox styleName="Graffiti" setForm={setForm} />
        <ArtBox styleName="Impressionism" setForm={setForm} />
        <ArtBox styleName="Minimalist" setForm={setForm} />
        <ArtBox styleName="Neo-impressionism" setForm={setForm} />
        <ArtBox styleName="Op Art" setForm={setForm} />
        <ArtBox styleName="Pop Art" setForm={setForm} />
        <ArtBox styleName="Psychedelic" setForm={setForm} />
        <ArtBox styleName="Realism" setForm={setForm} />
        <ArtBox styleName="Romanticism" setForm={setForm} />
        <ArtBox styleName="Steampunk" setForm={setForm} />
        <ArtBox styleName="Surrealist" setForm={setForm} />
        <ArtBox styleName="Victorian" setForm={setForm} />
      </div>
    </>
  );
}

function ArtBox({
  styleName,
  setForm: setForm,
}: {
  styleName: string;
  setForm: any;
}) {
  return (
    <button
      className="flex flex-col items-start"
      onClick={(e) => {
        e.preventDefault();
        setForm((prev) => ({
          ...prev,
          ["style"]: styleName,
        }));
      }}
    >
      <Image
        src={`/artstyles/${styleName}.png`}
        height={70}
        width={70}
        alt={`${styleName} art style`}
        className="rounded-sm md:h-32 md:w-auto"
      />
      <h1 className="md:text-[1rem] text-[0.7rem]">{styleName}</h1>
    </button>
  );
}
