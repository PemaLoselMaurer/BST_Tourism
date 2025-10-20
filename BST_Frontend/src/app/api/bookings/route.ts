import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ bookings: [] });
}

export async function POST() {
  return NextResponse.json({ ok: true }, { status: 201 });
}
