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
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function DownloadCard() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    if (!event) {
      return null;
    }
    setLoading(true);

    event.preventDefault();

    const data = {
      link: event.target.link.value,
    };

    console.log(data.link);
    setLoading(false);
  };

  return (
    <Card className="w-[520px]">
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
              pattern="^(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?.*?(?:v|list)=(.*?)(?:&|$)|^(?:https?:\/\/)?(?:www\.)?youtu\.?be(?:\.com)?(?:(?!=).)*\/(.*)
"
              title="Please enter a valid YouTube video link."
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
  );
}
