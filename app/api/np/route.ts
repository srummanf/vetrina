import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const res = await fetch(`https://spotify-current-playing-server.onrender.com/np`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) return NextResponse.error();

  const data = await res.json();
  return NextResponse.json(data);
}

/**
 * If you wish to build and use this API, refer this Github Repository: https://github.com/srummanf/spotify-current-playing-server
 */