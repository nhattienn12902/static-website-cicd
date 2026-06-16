import { useState } from "react";

const ME = {
  name: "Nghiêm Trần Nhật Tiến",
  roles: ["Backend Developer"],
  lede:
    "Backend developer with hands-on experience in Java Spring Boot and ASP.NET Core. Strong in RESTful API design, real-time systems, database management, and integrating AI services.",
  github: "https://github.com/nhattienn12902",
  email: "nhattienn12902@gmail.com",
  phone: "0789092002",
  location: "Nha Trang, Khánh Hòa",
};

const SKILLS = [
  { label: "Languages", items: ["Java", "C#"] },
  { label: "Backend Frameworks", items: ["Spring Boot", "ASP.NET Core Web API"] },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "SQL Server"] },
  {
    label: "DevOps & Cloud",
    items: ["Docker", "Docker Compose", "Jenkins CI/CD", "Nginx", "AWS EC2", "VPC", "NAT Gateway"],
  },
  {
    label: "Real-time & AI",
    items: ["SignalR", "OpenAI API", "AWS Rekognition", "FPT.AI Vision API", "Google OR-Tools"],
  },
  { label: "Monitoring & Tools", items: ["Prometheus", "Grafana", "Git", "GitHub", "Postman"] },
];

const EXPERIENCE = [
  {
    date: "01/2024 – 04/2024",
    company: "FPT Software",
    role: "Backend Java Intern (On-the-Job Training)",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Git", "Postman", "Agile/Scrum"],
    bullets: [
      "Designed and built the Syllabus Management module: full CRUD, file import, search, and detail views.",
      "Collaborated with frontend team in Agile sprints; participated in code reviews and API testing via Postman.",
    ],
  },
];

const PROJECTS = [
  {
    featured: true,
    tag: "Capstone · Backend",
    title: "GymMaster — Smart Gym Scheduling & Management System",
    desc: "Built RESTful APIs for booking, attendance, and check-in/check-out with anti-double-booking logic. Implemented real-time user chat via SignalR, an AI chatbot powered by OpenAI API with gym package recommendations, and trainer scheduling optimized with Google OR-Tools.",
    stack: ["C#", "ASP.NET Core", "SQL Server", "SignalR", "OpenAI API", "Google OR-Tools"],
    period: "09/2025 – 12/2025",
    repo: ME.github,
  },
  {
    featured: false,
    tag: "Capstone · Backend",
    title: "StressHelperStudent — Student Stress Assessment Platform",
    desc: "Led backend development including RESTful API design, data modeling, and stress assessment logic. Integrated AWS Rekognition for facial emotion analysis and FPT.AI Vision API for citizen ID verification.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "AWS Rekognition", "FPT.AI Vision API"],
    period: "01/2025 – 05/2025",
    repo: ME.github,
  },
  {
    featured: false,
    tag: "Side project · DevOps",
    title: "DevOps Infrastructure on AWS",
    desc: "Built full cloud infrastructure with a custom VPC (public/private subnets, NAT Gateway, Security Groups). Containerized apps with Docker Compose, automated CI/CD with Jenkins, and monitored everything with Prometheus & Grafana.",
    stack: ["AWS EC2", "VPC", "Docker Compose", "Jenkins", "Nginx", "PostgreSQL", "Prometheus", "Grafana"],
    period: "04/2026 – 05/2026",
    repo: ME.github,
  },
];

/* ── Shared styles ── */
const s = {
  teal: "#1D9E75",
  tealDark: "#0F6E56",
  tealLight: "#E1F5EE",
  tealBorder: "#9FE1CB",
};

function Nav() {
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];
  return (
    <nav
      style={{
        borderBottom: "0.5px solid rgba(0,0,0,0.1)",
        padding: "0.75rem 0",
        position: "sticky",
        top: 0,
        background: "#fff",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 15, fontWeight: 500 }}>
          nhattien<span style={{ color: s.teal }}>.dev</span>
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontSize: 13, color: "#666", textDecoration: "none" }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header style={{ padding: "4rem 0 3rem", maxWidth: 760, margin: "0 auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
      <h1 style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.2, marginBottom: "0.5rem" }}>
        {ME.name}
      </h1>

      {/* Role badges */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "1rem" }}>
        <span
          style={{
            fontSize: 12,
            padding: "3px 10px",
            borderRadius: 99,
            background: s.tealLight,
            color: s.tealDark,
            border: `0.5px solid ${s.tealBorder}`,
          }}
        >
          Backend Developer
        </span>
        <span
          style={{
            fontSize: 12,
            padding: "3px 10px",
            borderRadius: 99,
            background: "#f5f5f5",
            color: "#555",
            border: "0.5px solid #e0e0e0",
          }}
        >
          Java · C# · AWS
        </span>
      </div>

      <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, maxWidth: 600, marginBottom: "1.5rem" }}>
        {ME.lede}
      </p>

      {/* Pipeline */}
      <div
        aria-label="Tech pipeline"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: "1.5rem",
          padding: "0.75rem 1rem",
          background: "#f9f9f9",
          borderRadius: 8,
          border: "0.5px solid #e8e8e8",
          width: "fit-content",
        }}
      >
        {["Spring Boot", "REST API", "PostgreSQL", "Deploy"].map((n, i, arr) => (
          <span key={n} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#555",
                background: "#fff",
                border: "0.5px solid #e0e0e0",
                padding: "3px 10px",
                borderRadius: 6,
              }}
            >
              {n}
            </span>
            {i < arr.length - 1 && (
              <span style={{ fontSize: 12, color: "#bbb" }}>→</span>
            )}
          </span>
        ))}
        <span style={{ fontSize: 12, color: "#bbb" }}>→</span>
        <span style={{ fontSize: 12, fontWeight: 500, color: s.tealDark, display: "flex", alignItems: "center", gap: 5 }}>
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: s.teal,
              display: "inline-block",
            }}
          />
          live
        </span>
      </div>

      <div style={{ display: "flex", gap: 10 }}>
        <a
          href="#projects"
          style={{
            fontSize: 13,
            padding: "8px 18px",
            borderRadius: 8,
            background: s.teal,
            color: "#fff",
            textDecoration: "none",
            border: `0.5px solid ${s.teal}`,
          }}
        >
          View projects
        </a>
        <a
          href={ME.github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 13,
            padding: "8px 18px",
            borderRadius: 8,
            background: "transparent",
            color: "#333",
            textDecoration: "none",
            border: "0.5px solid #ccc",
          }}
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section
      id={id}
      style={{
        padding: "3rem 0",
        borderTop: "0.5px solid rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 1.5rem" }}>
        <p style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "#999", marginBottom: "0.5rem" }}>
          {eyebrow}
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 500, marginBottom: "1.5rem", color: "#111" }}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8, marginBottom: "1rem" }}>
        I'm a Software Engineering graduate from FPT University with a focus on backend development.
        I build RESTful APIs, real-time systems, and AI-integrated features using Java Spring Boot
        and ASP.NET Core Web API.
      </p>
      <p style={{ fontSize: 15, color: "#555", lineHeight: 1.8 }}>
        I care about clean API design, solid data modeling, and building systems that are easy to
        maintain and scale. I'm seeking a backend role where I can contribute to product teams and
        grow in system architecture and engineering best practices.
      </p>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Education">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "flex-start",
          padding: "1rem 1.25rem",
          background: "#fff",
          border: "0.5px solid #e8e8e8",
          borderRadius: 12,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 8,
            background: s.tealLight,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: 20,
          }}
        >
          🎓
        </div>
        <div>
          <p style={{ fontSize: 15, fontWeight: 500, color: "#111" }}>FPT University</p>
          <p style={{ fontSize: 13, color: "#777", marginTop: 2 }}>
            Software Engineering &nbsp;·&nbsp; 2020 – 2025
          </p>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with">
      {SKILLS.map((g) => (
        <div key={g.label} style={{ marginBottom: "1.25rem" }}>
          <h3
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#888",
              marginBottom: "0.5rem",
              fontWeight: 500,
            }}
          >
            {g.label}
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {g.items.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: 12,
                  padding: "4px 10px",
                  borderRadius: 6,
                  background: "#f5f5f5",
                  border: "0.5px solid #e8e8e8",
                  color: "#333",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work experience">
      {EXPERIENCE.map((exp) => (
        <div
          key={exp.role}
          style={{
            display: "grid",
            gridTemplateColumns: "110px 1fr",
            gap: "1rem",
            paddingBottom: "1.25rem",
          }}
        >
          <p style={{ fontSize: 12, color: "#888", paddingTop: 2, lineHeight: 1.5 }}>{exp.date}</p>
          <div>
            <p style={{ fontSize: 13, color: s.teal, marginBottom: 3 }}>{exp.company}</p>
            <h3 style={{ fontSize: 14, fontWeight: 500, color: "#111", marginBottom: 8 }}>{exp.role}</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
              {exp.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    padding: "2px 7px",
                    borderRadius: 6,
                    background: "#f5f5f5",
                    border: "0.5px solid #e8e8e8",
                    color: "#666",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <ul style={{ fontSize: 13, color: "#555", lineHeight: 1.7, paddingLeft: "1rem" }}>
              {exp.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: 4 }}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            style={{
              padding: "1.25rem",
              background: "#fff",
              border: p.featured ? `2px solid ${s.tealBorder}` : "0.5px solid #e8e8e8",
              borderRadius: 12,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
              <span
                style={{
                  fontSize: 11,
                  color: s.tealDark,
                  fontWeight: 500,
                  background: s.tealLight,
                  padding: "2px 8px",
                  borderRadius: 99,
                }}
              >
                {p.tag}
              </span>
              <span style={{ fontSize: 11, color: "#aaa" }}>{p.period}</span>
            </div>
            <h3 style={{ fontSize: 15, fontWeight: 500, color: "#111", marginBottom: "0.5rem" }}>{p.title}</h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: "0.75rem" }}>{p.desc}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: "0.75rem" }}>
              {p.stack.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 11,
                    padding: "2px 7px",
                    borderRadius: 6,
                    background: "#f5f5f5",
                    border: "0.5px solid #e8e8e8",
                    color: "#666",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            <a href={p.repo} target="_blank" rel="noreferrer" style={{ fontSize: 13, color: s.teal, textDecoration: "none" }}>
              Code →
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <p style={{ fontSize: 15, color: "#555", lineHeight: 1.7, marginBottom: "1.25rem" }}>
        Open to Backend Developer roles. Fastest way to reach me is by email or
        phone. Based in {ME.location}.
      </p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <a
          href={`mailto:${ME.email}`}
          style={{
            fontSize: 13,
            padding: "8px 18px",
            borderRadius: 8,
            background: s.teal,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Email me
        </a>
        <a
          href={`tel:${ME.phone}`}
          style={{
            fontSize: 13,
            padding: "8px 18px",
            borderRadius: 8,
            background: "transparent",
            color: "#333",
            textDecoration: "none",
            border: "0.5px solid #ccc",
          }}
        >
          {ME.phone}
        </a>
        <a
          href={ME.github}
          target="_blank"
          rel="noreferrer"
          style={{
            fontSize: 13,
            padding: "8px 18px",
            borderRadius: 8,
            background: "transparent",
            color: "#333",
            textDecoration: "none",
            border: "0.5px solid #ccc",
          }}
        >
          GitHub
        </a>
      </div>
    </Section>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#111", background: "#fff" }}>
      <Nav />
      <Hero />
      <main>
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer
        style={{
          padding: "1.5rem 0",
          borderTop: "0.5px solid rgba(0,0,0,0.08)",
          textAlign: "center",
          fontSize: 12,
          color: "#aaa",
        }}
      >
        © {new Date().getFullYear()} {ME.name} · Built with React &amp; deployed on AWS
      </footer>
    </div>
  );
}