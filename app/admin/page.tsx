"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

<button
  onClick={async () => {
    await supabase.auth.signOut();
    location.href = "/admin/login";
  }}
  style={{ marginTop: 10 }}
>
  Logout
</button>

type Applicant = {
  id: string;
  name: string;
  email: string;
  regno: string;
  year: string;
  statement: string;
};

type Competition = {
  id: string;
  title: string;
  description: string;
  year: string;
  position: string;
};

export default function AdminPage() {
  const router = useRouter();

  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [competitions, setCompetitions] = useState<Competition[]>([]);

  // 🔒 Check login
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) router.push("/admin/login");
    });
  }, [router]);

  // 📥 Fetch applicants
  useEffect(() => {
    fetch("/api/admin/recruitments")
      .then(res => res.json())
      .then(setApplicants);

    fetch("/api/admin/competitions")
      .then(res => res.json())
      .then(setCompetitions);
  }, []);

  // 🏆 Add competition
  async function handleCompetitionSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const body = {
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLInputElement).value,
      year: (form.elements.namedItem("year") as HTMLInputElement).value,
      position: (form.elements.namedItem("position") as HTMLInputElement).value,
    };

    await fetch("/api/admin/competitions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    alert("Competition added!");
    form.reset();

    // refresh competitions list
    fetch("/api/admin/competitions")
      .then(res => res.json())
      .then(setCompetitions);
  }

  // 🗑 Delete competition
  async function deleteCompetition(id: string) {
    await fetch(`/api/admin/competitions?id=${id}`, {
      method: "DELETE",
    });

    setCompetitions(prev => prev.filter(c => c.id !== id));
  }

  return (
    <div style={{ padding: 40, maxWidth: 900 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Admin Dashboard
      </h1>

      {/* ================= Applicants ================= */}
      <h2 style={{ marginTop: 30, fontSize: 22 }}>
        Recruitment Applicants
      </h2>

      <div style={{ marginTop: 15 }}>
        {applicants.map(app => (
          <div
            key={app.id}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 12,
              borderRadius: 6
            }}
          >
            <p><strong>{app.name}</strong> ({app.year})</p>
            <p>{app.email}</p>
            <p>{app.regno}</p>
            <p style={{ color: "#555" }}>{app.statement}</p>
          </div>
        ))}
      </div>

      {/* ================= Competitions List ================= */}
      <h2 style={{ marginTop: 40, fontSize: 22 }}>
        Existing Competitions
      </h2>

      <div style={{ marginTop: 15 }}>
        {competitions.map(c => (
          <div
            key={c.id}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 12,
              borderRadius: 6
            }}
          >
            <strong>{c.title}</strong> ({c.year})
            <p>{c.description}</p>
            <p><b>{c.position}</b></p>

            <button
              onClick={() => deleteCompetition(c.id)}
              style={{ marginTop: 8 }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* ================= Add Competition ================= */}
      <h2 style={{ marginTop: 40, fontSize: 22 }}>
        Add Competition
      </h2>

      <form
        onSubmit={handleCompetitionSubmit}
        style={{ marginTop: 15, display: "flex", flexDirection: "column", gap: 10, maxWidth: 400 }}
      >
        <input name="title" placeholder="Competition title" required />
        <input name="description" placeholder="Description" required />
        <input name="year" placeholder="Year" required />
        <input name="position" placeholder="Position won" required />

        <button type="submit" style={{ padding: 10, background: "black", color: "white", borderRadius: 6 }}>
          Add Competition
        </button>
      </form>

      {/* ================= Add Project ================= */}
      <h2 style={{ marginTop: 40, fontSize: 22 }}>
        Add Project
      </h2>

      <form
        action="/api/admin/projects"
        method="post"
        encType="multipart/form-data"
        style={{ marginTop: 15, display:"flex", flexDirection:"column", gap:10, maxWidth:400 }}
      >
        <input name="name" placeholder="Project name" required />
        <input name="description" placeholder="Description" required />
        <input name="github" placeholder="GitHub link (optional)" />
        <input type="file" name="image" accept="image/*" />
        <button style={{ padding:10, background:"black", color:"white" }}>
          Add Project
        </button>
      </form>

    </div>
  );
}