"use server";
import { openai } from "@/lib/openai";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { s3Client } from "@/lib/s3Client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

export async function GeneratePosterDalle(form: {
  description: string;
  color: string;
  style: string;
}) {
  let user, responseS3, picture;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      throw new Error("No session");
    }

    user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });
    if (!user) {
      throw new Error("User not found");
    }
  } catch (error) {
    console.log(error);
    redirect("/api/auth/signin");
  }
  try {
    const base64EncodedImage = await openai.images.generate({
      model: "dall-e-3",
      prompt: `A poster for an event described as ${form.description} with the theme color ${form.color} and the art style ${form.style}, high quality, trending on art station, unreal engine graphics quality`,
      response_format: "b64_json",
      size: "1024x1792",
    });
    if (base64EncodedImage.data[0].b64_json) {
      picture = await prisma.picture.create({
        data: {
          userId: user.id,
        },
      });
      const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: picture.id,
        Body: Buffer.from(base64EncodedImage.data[0].b64_json, "base64"),
        ContentEncoding: "base64",
        ContentType: "image/png",
      };
      responseS3 = await s3Client.send(new PutObjectCommand(params));
    } else {
      throw new Error("No image generated");
    }
  } catch (error) {
    console.log(error);
  }

  if (responseS3) redirect(`/poster/${picture?.id}`);
}
