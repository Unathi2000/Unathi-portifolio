import { profile } from "../data";
import useReveal from "../useReveal";
import { PinIcon } from "./Icons.jsx";

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section id="about" className="section">
      <div ref={ref} className={`container-x reveal ${visible ? "reveal-in" : ""}`}>
        <h2 className="section-title">About me</h2>

        <div className="grid items-start gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="flex items-center gap-2 pt-2 text-base font-semibold text-ink">
              <span className="text-accent">
                <PinIcon />
              </span>
              {profile.location}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <a className="btn btn-primary btn-sm" href={profile.cv} download="Unathi_Pikiso_CV.pdf">
                Download CV ↓
              </a>
              <a
                className="btn btn-ghost btn-sm"
                href={profile.certificates}
                target="_blank"
                rel="noreferrer"
              >
                View certificates ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
            {profile.stats.map((s) => (
              <div key={s.label} className="card flex flex-col p-5 md:flex-row md:items-baseline md:gap-4">
                <strong className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-3xl font-extrabold text-transparent">
                  {s.value}
                </strong>
                <span className="text-sm text-muted">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
