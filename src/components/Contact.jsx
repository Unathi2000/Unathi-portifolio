import { useState } from "react";
import { profile } from "../data";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "./Icons.jsx";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function Error({ children }) {
  return (
    <small role="alert" className="mt-1 block text-xs font-medium text-red-500">
      {children}
    </small>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
    setSent(false);
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your name.";
    if (!emailOk(form.email)) er.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) er.message = "Message should be at least 10 characters.";
    return er;
  };

  // No backend needed: this opens the visitor's email app with the message pre-filled.
  // To receive messages directly, swap this for a Formspree / Web3Forms POST (see README).
  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) return;

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const rows = [
    { icon: <MailIcon />, label: "Email", text: profile.email, href: `mailto:${profile.email}` },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      text: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { icon: <LinkedInIcon />, label: "LinkedIn", text: "unathi-pikiso", href: profile.linkedin, external: true },
    { icon: <GitHubIcon />, label: "GitHub", text: "Unathi2000", href: profile.github, external: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <h2 className="section-title">Get in touch</h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg text-muted">
              I'm open to junior frontend roles, internships and freelance projects. Send me a
              message and I'll get back to you.
            </p>
            <ul className="mt-8 space-y-4">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-center gap-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-onaccent">
                      {r.icon}
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                        {r.label}
                      </span>
                      <span className="break-all font-medium transition group-hover:text-accent">
                        {r.text}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="card space-y-5" onSubmit={submit} noValidate>
            <label className="block text-sm font-semibold">
              Name
              <input
                name="name"
                value={form.name}
                onChange={update}
                autoComplete="name"
                placeholder="Your name"
                aria-invalid={!!errors.name}
                className="field"
              />
              {errors.name && <Error>{errors.name}</Error>}
            </label>

            <label className="block text-sm font-semibold">
              Email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={update}
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                className="field"
              />
              {errors.email && <Error>{errors.email}</Error>}
            </label>

            <label className="block text-sm font-semibold">
              Message
              <textarea
                name="message"
                rows="5"
                value={form.message}
                onChange={update}
                placeholder="How can I help?"
                aria-invalid={!!errors.message}
                className="field resize-y"
              />
              {errors.message && <Error>{errors.message}</Error>}
            </label>

            <button className="btn btn-primary w-full" type="submit">
              Send message
            </button>

            {sent && (
              <p role="status" className="text-sm font-medium text-accent">
                Your email app should open with the message ready to send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
