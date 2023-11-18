"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ColorBoxes } from "@/components/color-boxes";
import { ArtStyles } from "@/components/art-styles";
import { Button } from "@/components/ui/button";
import { useState } from "react";
export default function GeneratePage() {
  const [form, setForm] = useState({
    description: "",
    color: "",
    style: "",
  });
  console.log(form);
  return (
    <main className="p-7">
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
          <ColorBoxes />
        </div>
        <div className="flex flex-col gap-5">
          <Label htmlFor="">3. Select the art style</Label>
          <ArtStyles />
        </div>
        <Button type="submit">GENERATE</Button>
      </form>
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
}
