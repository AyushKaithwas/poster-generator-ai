import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Collection() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/api/auth/signIn");
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
    <div className="flex p-10 gap-5 flex-col md:flex-row">
      {pictures ? (
        pictures.map((picture) => {
          const url = `https://${process.env.BUCKET_NAME}.s3.amazonaws.com/${picture.id}`;
          console.log(url);
          return (
            <Image
              src={url}
              alt="Your generated image"
              height={400}
              width={400}
              key={picture.id}
              className=" "
            />
          );
        })
      ) : (
        <>No images generated yet</>
      )}
    </div>
  );
}
