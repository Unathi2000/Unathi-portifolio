import { skills, softSkills } from "../data";
import useReveal from "../useReveal";

function Bar({ name, level, animate, delay }) {
  return (
    <div className="mt-5">
      <div className="mb-1.5 flex justify-between text-sm font-medium">
        <span>{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-line"
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent2 transition-[width] duration-1000 ease-out motion-reduce:transition-none"
          style={{ width: animate ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, visible] = useReveal(0.15);

  return (
    <section id="skills" className="section bg-alt">
      <div ref={ref} className="container-x">
        <h2 className="section-title">Skills</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((g, gi) => (
            <div key={g.group} className="card">
              <h3 className="text-lg font-bold">{g.group}</h3>
              {g.items.map((s, i) => (
                <Bar key={s.name} {...s} animate={visible} delay={gi * 120 + i * 90} />
              ))}
            </div>
          ))}
        </div>

        <h3 className="mb-4 mt-12 text-lg font-bold">Soft skills</h3>
        <ul className="flex flex-wrap gap-3">
          {softSkills.map((s) => (
            <li
              key={s}
              className="rounded-full border border-line bg-card px-4 py-2 text-sm font-medium"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
