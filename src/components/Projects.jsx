import { projects } from "../data";
import useReveal from "../useReveal";

function ProjectCard({ project }) {
  const { title, description, tech, highlights, live, github } = project;

  return (
    <article className="card flex flex-col justify-between gap-6 transition duration-200 hover:-translate-y-1 hover:border-accent/60">
      <div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted">{description}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-muted">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="text-accent" aria-hidden="true">
                ✓
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <li key={t} className="chip">
            {t}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-3">
        {live ? (
          <a className="btn btn-primary btn-sm" href={live} target="_blank" rel="noreferrer">
            Live demo ↗
          </a>
        ) : (
          <span className="btn btn-disabled btn-sm" aria-disabled="true">
            Demo coming soon
          </span>
        )}
        <a className="btn btn-ghost btn-sm" href={github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section id="projects" className="section">
      <div ref={ref} className={`container-x reveal ${visible ? "reveal-in" : ""}`}>
        <h2 className="section-title">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
