import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Incoming competition:", body);

    const { data, error } = await supabase
      .from("competitions")
      .insert([body])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return new Response(JSON.stringify(error), { status: 500 });
    }

    console.log("Inserted:", data);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    console.error("Server error:", e);
    return new Response("Server error", { status: 500 });
  }
}

export async function GET() {
  const { data } = await supabase
    .from("competitions")
    .select("*")
    .order("created_at", { ascending: false });

  return NextResponse.json(data);
}