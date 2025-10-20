import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ reply: "Hello! How can I help you plan your Bhutan trip?" });
}
