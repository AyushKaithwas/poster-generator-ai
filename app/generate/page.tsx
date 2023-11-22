"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ColorBoxes } from "@/components/color-boxes";
import { ArtStyles } from "@/components/art-styles";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback } from "react";
import { Icons } from "@/components/ui/animate-spin";
import { useSession } from "next-auth/react";
import { GeneratePosterDalle } from "@/actions/generate-poster-dalle";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Image from "next/image";

export default function GeneratePage() {
  const { data: session } = useSession();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const [form, setForm] = useState({
    description: "",
    color: "",
    style: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  console.log(form);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const resetParams = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("status");
    router.replace(`${pathname}?${params.toString()}`);
  }, [pathname, router, searchParams]);

  useEffect(() => {
    const status = searchParams.get("status");
    if (status === "error") {
      setError(true);
    } else if (status !== null) {
      setImgUrl(status);
    }
    resetParams();
  }, [resetParams, searchParams]);

  return (
    <main className="p-7">
      {error ? (
        <div className=" text-center">
          <h1 className="text-red-500">Unexpected Error Occurred</h1>
          <h1>Please refresh and try again</h1>
        </div>
      ) : imgUrl ? (
        <Image
          src={imgUrl}
          alt="The generated poster"
          height={400}
          width={400}
        />
      ) : (
        <form className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <Label htmlFor="description">
              1. Describe the event for the poster
            </Label>
            <Input
              id="description"
              type="text"
              onChange={updateForm("description")}
            />
          </div>
          <div className="flex flex-col gap-5">
            <Label htmlFor="">2. Select the theme color</Label>
            <ColorBoxes setForm={setForm} />
          </div>
          <div className="flex flex-col gap-5">
            <Label htmlFor="">3. Select the art style</Label>
            <ArtStyles setForm={setForm} />
          </div>
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-full"
            disabled={pending}
          >
            {pending ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              "GENERATE"
            )}
          </Button>
        </form>
      )}

      <Image
        src="/eye-logo.png"
        alt="test"
        height={400}
        width={400}
        className="mt-6"
      />
    </main>
  );

  function updateForm(key: string) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      setForm((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setPending(true);
    const response = await GeneratePosterDalle(form);
  }
}
