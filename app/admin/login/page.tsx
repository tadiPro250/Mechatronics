"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert("Login failed");
      return;
    }

    router.push("/admin");
  }

  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>Admin Login</h1>

      <input
        placeholder="Email"
        style={{ border: "1px solid #ccc", padding: 10, width: "100%", marginTop: 20 }}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        style={{ border: "1px solid #ccc", padding: 10, width: "100%", marginTop: 10 }}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        style={{ marginTop: 20, padding: 10, background: "black", color: "white" }}
      >
        Login
      </button>
    </div>
  );
}