import Image from "next/image";

export function ArtStyles() {
  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <ArtBox styleName="Art Deco" />
        <ArtBox styleName="Art Nouveau" />
        <ArtBox styleName="Baroque" />
        <ArtBox styleName="Bauhaus" />
        <ArtBox styleName="Constructivism" />
        <ArtBox styleName="Cubism" />
        <ArtBox styleName="Cyberpunk" />
        <ArtBox styleName="Dadaism" />
        <ArtBox styleName="Expressionist" />
        <ArtBox styleName="Futurism" />
        <ArtBox styleName="Geometric" />
        <ArtBox styleName="Gothic" />
        <ArtBox styleName="Graffiti" />
        <ArtBox styleName="Impressionism" />
        <ArtBox styleName="Minimalist" />
        <ArtBox styleName="Neo-impressionism" />
        <ArtBox styleName="Op Art" />
        <ArtBox styleName="Pop Art" />
        <ArtBox styleName="Psychedelic" />
        <ArtBox styleName="Realism" />
        <ArtBox styleName="Romanticism" />
        <ArtBox styleName="Steampunk" />
        <ArtBox styleName="Surrealist" />
        <ArtBox styleName="Victorian" />
      </div>
    </>
  );
}

function ArtBox({ styleName }: { styleName: string }) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/artstyles/${styleName}.png`}
        height={70}
        width={70}
        alt={`${styleName} art style`}
        className="rounded-sm"
      />
      <h1 className="text-[0.7rem]">{styleName}</h1>
    </div>
  );
}
