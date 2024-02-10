import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default async function Collection() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/api/auth/signin");
  }
  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    include: {
      Picture: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  const pictures = user?.Picture;

  return (
    <div className="flex p-10 gap-5 flex-col md:flex-row min-h-[80vh]">
      {pictures ? (
        pictures.map((picture) => {
          const url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${picture.id}`;
          return (
            <Link key={picture.id} href={`/poster/${picture.id}`}>
              <Image
                src={url}
                alt="Your generated image"
                height={400}
                width={400}
                key={picture.id}
                className=" "
              />
            </Link>
          );
        })
      ) : (
        <>No images generated yet</>
      )}
    </div>
  );
}
