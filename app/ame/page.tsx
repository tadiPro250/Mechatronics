"use client";

import { useEffect, useState } from "react";

type Competition = {
  id: string;
  title: string;
  description: string;
  year: string;
  position: string;
};

type Project = {
  id: string;
  name: string;
  description: string;
  image_url?: string;
  github?: string;
};

export default function AMEPage() {
  const [competitions, setCompetitions] = useState<Competition[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch competitions
    fetch("/api/admin/competitions")
      .then(res => res.json())
      .then(setCompetitions);

    // Fetch projects
    fetch("/api/admin/projects")
      .then(res => res.json())
      .then(setProjects);
  }, []);

  return (
    <div style={{ padding: 40, maxWidth: 900 }}>
      <h1 style={{ fontSize: 28, fontWeight: "bold" }}>
        Association of Mechatronics Engineering (AME)
      </h1>

      <p style={{ marginTop: 10 }}>
        AME is the official student club of the Mechatronics Department,
        focused on building innovative projects, participating in competitions,
        and nurturing technical skills among students.
      </p>

      {/* ================= COMPETITIONS ================= */}
      <h2 style={{ marginTop: 40, fontSize: 22 }}>
        Competitions Won
      </h2>

      <div style={{ marginTop: 15 }}>
        {competitions.length === 0 && (
          <p style={{ color: "#777" }}>No competitions added yet.</p>
        )}

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
          </div>
        ))}
      </div>

      {/* ================= PROJECTS ================= */}
      <h2 style={{ marginTop: 40, fontSize: 22 }}>
        Projects
      </h2>

      <div style={{ marginTop: 15 }}>
        {projects.length === 0 && (
          <p style={{ color: "#777" }}>No projects added yet.</p>
        )}

        {projects.map(p => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: 12,
              marginBottom: 12,
              borderRadius: 6
            }}
          >
            {p.image_url && (
              <img
                src={p.image_url}
                style={{
                  width: 220,
                  marginBottom: 10,
                  borderRadius: 6
                }}
              />
            )}

            <strong>{p.name}</strong>
            <p>{p.description}</p>

            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}