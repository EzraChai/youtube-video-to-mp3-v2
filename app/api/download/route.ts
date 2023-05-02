import ytdl from "ytdl-core";
import { createWriteStream } from "fs";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { link } = await request.json();
  console.log(link);
  if (!link)
    return NextResponse.json(
      { message: "YouTube video URL is required." },
      { status: 400 }
    );

  let info = await ytdl.getInfo(link);
  let format: any = ytdl.chooseFormat(info.formats, {
    filter: "audioonly",
  });
  if (link) return NextResponse.json({ url: format.url });

  //   const { videoUrl } = request.body;

  //   if (!videoUrl) {
  //     return NextResponse.error().status;
  //   }

  //   try {
  //     const videoInfo = await ytdl.getInfo(videoUrl);
  //     const format = ytdl.chooseFormat(videoInfo.formats, { quality: "highest" });

  //     res.setHeader(
  //       "Content-Disposition",
  //       `attachment; filename="\${videoInfo.videoDetails.title}.mp4"`
  //     );
  //     res.setHeader("Content-Type", "video/mp4");

  //     ytdl(videoUrl, { format }).pipe(res);
  //   } catch (error) {
  //     console.error("Error downloading video:", error);
  //     res.status(500).send("Error downloading video");
  //   }
}
