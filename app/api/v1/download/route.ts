import ytdl from "ytdl-core";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { link } = await request.json();
  if (!link) {
    return NextResponse.json(
      { message: "YouTube video URL is required." },
      { status: 400 }
    );
  }

  let info = await ytdl.getInfo(link);
  if (!info) {
    return NextResponse.json(
      { message: "YouTube video URL is required." },
      { status: 400 }
    );
  }

  let format: any = ytdl.chooseFormat(info.formats, {
    filter: "audioonly",
  });
  return NextResponse.json({ url: format.url });
}
