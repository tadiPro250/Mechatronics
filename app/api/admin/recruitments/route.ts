import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("recruitments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Fetch error:", error);
      return NextResponse.json([]);
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json([]);
  }
}