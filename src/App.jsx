const ME = {
  name: "Nghiêm Trần Nhật Tiến",
  role: "DevOps Engineer",
  lede: "I build and automate cloud infrastructure on AWS — from a custom VPC and Dockerized apps to Jenkins CI/CD pipelines and Prometheus/Grafana monitoring.",
  github: "https://github.com/nhattienn12902",
  email: "nhattienn12902@gmail.com",
  phone: "0789092002",
  location: "Nha Trang, Khánh Hòa",
};

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="brand">
          nhattien<span className="dot">.dev</span>
        </span>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero wrap">
      <h1>{ME.name}</h1>
      <p className="role">{ME.role}</p>
      <p className="lede">{ME.lede}</p>

      {/* Dải pipeline — phản ánh đúng stack CI/CD của project trên AWS */}
      <div className="pipeline" aria-label="Deployment pipeline">
        <span className="node">git push</span>
        <span className="arrow">→</span>
        <span className="node">Jenkins</span>
        <span className="arrow">→</span>
        <span className="node">Docker</span>
        <span className="arrow">→</span>
        <span className="node">EC2</span>
        <span className="arrow">→</span>
        <span className="live"><span className="pulse" />live</span>
      </div>

      <div className="cta-row">
        <a className="btn btn-solid" href="#projects">View projects</a>
        <a className="btn btn-ghost" href={ME.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <p className="eyebrow">01 — About</p>
        <h2>A bit about me</h2>
        <p>
          I'm an Information Technology student focused on DevOps and the cloud
          infrastructure that runs modern applications. I enjoy designing reliable
          systems and automating everything from build to deployment, so shipping
          comes down to a single git push.
        </p>
        <p>
          Recently I built a full DevOps project on AWS — a custom VPC with
          public/private subnets, EC2 instances running Dockerized frontend and
          backend apps, a Jenkins CI/CD pipeline, Nginx as a reverse proxy, and
          Prometheus + Grafana for monitoring. I'm now looking for an Intern DevOps
          Engineer role to grow in cloud infrastructure, CI/CD automation, container
          orchestration, and system reliability.
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <p className="eyebrow">02 — Education</p>
        <h2>Education</h2>
        <div className="skill-group">
          <h3>FPT University</h3>
          <p>Software Engineering · 2020 – 2025</p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { label: "Operating System", items: ["Linux", "Ubuntu"] },
    {
      label: "Cloud / AWS",
      items: [
        "EC2",
        "VPC",
        "Subnet",
        "Route Table",
        "Internet Gateway",
        "NAT Gateway",
        "Security Group",
      ],
    },
    { label: "CI/CD", items: ["Jenkins", "GitHub", "CI/CD"] },
    { label: "Containerization", items: ["Docker", "Docker Compose"] },
    { label: "Web Server / Reverse Proxy", items: ["Nginx"] },
    { label: "Database", items: ["PostgreSQL"] },
    { label: "Monitoring", items: ["Prometheus", "Grafana"] },
  ];
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <p className="eyebrow">03 — Skills</p>
        <h2>What I work with</h2>
        {groups.map((g) => (
          <div className="skill-group" key={g.label}>
            <h3>{g.label}</h3>
            <div className="chips">
              {g.items.map((s) => (
                <span className="chip" key={s}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      featured: true,
      tag: "Featured · DevOps",
      title: "DevOps Infrastructure & CI/CD Project on AWS",
      desc: "Designed a custom AWS VPC with public/private subnets, route tables, Internet Gateway, NAT Gateway, and Security Groups. Provisioned EC2 instances for frontend, backend, Jenkins, monitoring, and PostgreSQL. Containerized the apps with Docker & Docker Compose, automated build and deployment with a Jenkins CI/CD pipeline, served traffic through Nginx as a reverse proxy, and monitored everything with Prometheus + Grafana.",
      stack: [
        "AWS",
        "EC2",
        "VPC",
        "Docker",
        "Docker Compose",
        "Jenkins",
        "Nginx",
        "PostgreSQL",
        "Prometheus",
        "Grafana",
      ],
      repo: ME.github,
      demo: null,
    },
  ];
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <p className="eyebrow">04 — Projects</p>
        <h2>Selected work</h2>
        <div className="cards">
          {projects.map((p) => (
            <article className={`card ${p.featured ? "featured" : ""}`} key={p.title}>
              <span className="tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="stack">
                {p.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <div className="links">
                <a href={p.repo} target="_blank" rel="noreferrer">Code →</a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer">Live →</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="wrap">
        <p className="eyebrow">05 — Contact</p>
        <h2>Let's talk</h2>
        <p>
          Open to DevOps Engineer roles. The fastest way to reach me is email
          or phone, or find my work on GitHub. Based in {ME.location}.
        </p>
        <div className="contact-links">
          <a className="btn btn-solid" href={`mailto:${ME.email}`}>Email me</a>
          <a className="btn btn-ghost" href={`tel:${ME.phone}`}>{ME.phone}</a>
          <a className="btn btn-ghost" href={ME.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap">
          © {new Date().getFullYear()} {ME.name} · Built with React &amp; deployed on AWS
        </div>
      </footer>
    </>
  );
}