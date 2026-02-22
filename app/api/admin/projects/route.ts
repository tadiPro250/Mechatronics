import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const github = formData.get("github") as string;
  const file = formData.get("image") as File;

  let image_url = "";

  if (file) {
    const filename = `${Date.now()}-${file.name}`;

    const { error } = await supabase.storage
      .from("projects")
      .upload(filename, file);

    if (!error) {
      image_url =
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/projects/${filename}`;
    }
  }

  await supabase.from("projects").insert([
    { name, description, github, image_url }
  ]);

  return NextResponse.json({ success: true });
}