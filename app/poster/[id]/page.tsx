import Image from "next/image";
import Link from "next/link";
export default function Poster({ params }: { params: { id: string } }) {
  const { id } = params;
  const imgUrl = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${id}`;
  return (
    <div className="flex flex-col items-center p-5 gap-5">
      <Link href="/collection">
        <h1 className="font-bold">Go to collection</h1>
      </Link>
      <Image
        src={imgUrl}
        alt="Your generated poster"
        height={400}
        width={400}
      />
    </div>
  );
}
