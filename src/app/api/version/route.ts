import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET() {
  try {
    const response = await fetch("https://new.ui2v.com/update/exe/0.6.4", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch version data");
    }

    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("Error fetching version:", error);
    return NextResponse.json(
      { error: "Failed to fetch version information" },
      { status: 500 }
    );
  }
}

