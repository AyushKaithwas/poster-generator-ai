import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function GET(): Promise<NextResponse> {
  const response = await await openai.images.generate({
    model: "dall-e-3",
    prompt: "A cute baby sea otter",
  });
  return NextResponse.json({ Response: response }, { status: 200 });
}
