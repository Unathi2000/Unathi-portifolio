import { useState } from "react";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";

function initials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

const social =
  "inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:border-accent hover:text-accent";

export default function Hero() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
      {/* soft background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent2/15 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
            Hi, I'm
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 bg-gradient-to-r from-accent to-accent2 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
            {profile.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-ghost" href={profile.cv} download="Unathi_Pikiso_CV.pdf">
              Download CV ↓
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className={social} href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a className={social} href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
            <a className={social} href={`mailto:${profile.email}`}>
              <MailIcon /> Gmail
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-3 rounded-[2rem] bg-gradient-to-br from-accent to-accent2 opacity-30"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-card shadow-soft">
              {imgFailed ? (
                <span className="grid h-full w-full place-items-center bg-gradient-to-br from-accent to-accent2 text-7xl font-extrabold text-white">
                  {initials(profile.name)}
                </span>
              ) : (
                <img
                  src={profile.photo}
                  alt={`Portrait of ${profile.name}`}
                  onError={() => setImgFailed(true)}
                  className="h-full w-full object-cover object-[45%_15%]"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
