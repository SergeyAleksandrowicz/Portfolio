export default function Home() {
  const projects = [
    {
      title: "Booker: End-to-End Booking Platform",
      summary:
        "Built full booking flows with token-based auth, secure route guards, validation, and race-condition-safe reservations.",
      stack:
        "Next.js 16, React 19, Node.js, Express 5, PostgreSQL, Sequelize",
    },
    {
      title: "Secure Backend Infrastructure",
      summary:
        "Implemented refresh token rotation, Redis-ready rate limiting, Helmet/CORS hardening, and robust migration-driven schema updates.",
      stack: "JWT, bcrypt, Redis, express-rate-limit, Helmet, express-validator",
    },
    {
      title: "AI-Supported Delivery Workflow",
      summary:
        "Used AI pair-programming support for architecture iteration, faster test coverage, and cleaner implementation of complex edge-case handling.",
      stack: "AI-assisted coding, testing, refactoring, and documentation",
    },
  ];

  const skills = [
    "Next.js App Router and modern React",
    "Node.js + Express API design",
    "PostgreSQL data modeling with Sequelize",
    "JWT auth and refresh-token security",
    "Rate limiting, validation, and API hardening",
    "AI-assisted software delivery workflow",
  ];

  return (
    <main className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 pb-20 pt-10 sm:px-10 lg:px-16">
      <div className="orb orb-a" aria-hidden />
      <div className="orb orb-b" aria-hidden />

      <header className="reveal flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--muted)]">
          Portfolio 2026
        </p>
        <nav className="flex items-center gap-6 text-sm text-[var(--muted)]">
          <a href="#projects" className="hover:text-[var(--foreground)] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[var(--foreground)] transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-[var(--foreground)] transition-colors">
            Contact
          </a>
        </nav>
      </header>

      <section className="reveal delay-1 mt-20 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent-2)]">
            Full-Stack Developer
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            I build production-ready booking systems with a modern JS stack and
            AI-supported engineering workflow.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[var(--muted)]">
            My core stack comes directly from Booker: Next.js 16 + React 19 on
            the frontend, Node.js/Express APIs, PostgreSQL with Sequelize,
            Redis-enabled rate limiting, and secure token-based auth.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-primary rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--border)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--foreground)] transition-colors hover:bg-[var(--surface)]"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
        <aside className="reveal delay-2 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
            Current Focus
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight">
            Scalable backend logic, resilient auth, and clean frontend UX.
          </h2>
          <p className="mt-4 text-[var(--muted)]">
            Open to full-stack roles where shipping quality software fast matters.
          </p>
        </aside>
      </section>

      <section id="projects" className="reveal delay-3 mt-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium leading-tight">{project.title}</h3>
              <p className="mt-3 text-sm uppercase tracking-[0.15em] text-[var(--accent-2)]">
                {project.stack}
              </p>
              <p className="mt-4 leading-7 text-[var(--muted)]">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="reveal delay-4 mt-24">
        <h2 className="text-3xl font-semibold sm:text-4xl">Skills</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <p
              key={skill}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm"
            >
              {skill}
            </p>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="reveal delay-4 mt-24 rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10"
      >
        <h2 className="text-3xl font-semibold sm:text-4xl">Contact</h2>
        <p className="mt-4 max-w-xl text-[var(--muted)]">
          Want to build secure, scalable products with a practical AI-assisted
          workflow? Let&apos;s connect.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="btn-primary rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em]"
          >
            hello@example.com
          </a>
          <a
            href="https://github.com/SergeyAleksandrowicz"
            className="rounded-full border border-[var(--border)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-[var(--surface)]"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
