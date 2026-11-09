import { timeline } from "../data";
import useReveal from "../useReveal";

const dotColour = {
  work: "bg-accent",
  education: "bg-accent2",
  learning: "bg-muted",
};

function Item({ item, index }) {
  const [ref, visible] = useReveal(0.2);

  return (
    <li
      ref={ref}
      className={`reveal relative ${visible ? "reveal-in" : ""}`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {/* dot sits centred on the vertical line */}
      <span
        aria-hidden="true"
        className={`absolute -left-[41px] top-7 h-4 w-4 rounded-full border-4 border-alt ${
          dotColour[item.type] ?? "bg-accent"
        }`}
      />
      <div className="card">
        <span className="text-xs font-bold uppercase tracking-widest text-accent">
          {item.period}
        </span>
        <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
        <p className="text-sm font-medium text-muted">{item.place}</p>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted marker:text-accent">
          {item.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default function Timeline() {
  return (
    <section id="experience" className="section bg-alt">
      <div className="container-x">
        <h2 className="section-title">Experience &amp; education</h2>

        <div className="mb-8 flex flex-wrap gap-4 text-xs font-medium text-muted">
          <span className="flex items-center gap-2">
            <i className="h-3 w-3 rounded-full bg-accent" /> Work
          </span>
          <span className="flex items-center gap-2">
            <i className="h-3 w-3 rounded-full bg-accent2" /> Education
          </span>
          <span className="flex items-center gap-2">
            <i className="h-3 w-3 rounded-full bg-muted" /> Learning
          </span>
        </div>

        <ol className="ml-2 space-y-8 border-l-2 border-line pl-8">
          {timeline.map((item, i) => (
            <Item key={item.title + item.period} item={item} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
