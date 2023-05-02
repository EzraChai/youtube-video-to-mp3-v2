"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function DownloadCard() {
  const [loading, setLoading] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [downloadLink, setDownloadLink] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!event) {
      return null;
    }

    setLoading(true);
    setDownloadLink("");

    const data = await fetch("/api/v1/download", {
      body: JSON.stringify({ link }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { url } = await data.json();
    setDownloadLink(url);

    setLink("");
    setLoading(false);
  };

  return (
    <>
      <Card className=" mx-4 md:w-[520px]">
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>TubeToMP3</CardTitle>
            <CardDescription>
              Convert your favorite YouTube videos to MP3 easily!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="py-4 grid w-full max-w-md items-center gap-1.5">
              <Label htmlFor="link">
                Youtube Video Link <span className="text-red-500">*</span>
              </Label>
              <Input
                onChange={(e) => setLink(e.target.value)}
                value={link}
                type="url"
                id="link"
                placeholder="https://"
                required
                name="link"
              />
              <p className="text-sm text-muted-foreground">
                Enter the Youtube video link.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex">
            <Button disabled={loading} type="submit">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Please wait
                </>
              ) : (
                <>Convert</>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
      {downloadLink && (
        <div className="mt-12">
          <Button variant={"link"} asChild>
            <Link href={downloadLink} rel="noopener noreferrer">
              Download
            </Link>
          </Button>
        </div>
      )}
    </>
  );
}
