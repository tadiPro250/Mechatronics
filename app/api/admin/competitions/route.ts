import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("competitions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return NextResponse.json([]);
  }

  return NextResponse.json(data);
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return new Response("Missing id", { status: 400 });

  await supabase.from("competitions").delete().eq("id", id);

  return new Response("Deleted");
}

export async function POST(req: Request) {
  const body = await req.json();

  const { error } = await supabase.from("competitions").insert([
    {
      title: body.title,
      description: body.description,
      year: body.year,
      position: body.position,
    },
  ]);

  if (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }


  return NextResponse.json({ success: true });
}