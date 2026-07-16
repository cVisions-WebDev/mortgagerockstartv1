import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero, Section, Sheet } from "@/components/dossier";
import { site } from "@/config/site";
import homeAsset from "@/assets/home.jpg.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mortgage Rockstar\u2122" },
      {
        name: "description",
        content:
          "Let\u2019s start with a conversation. Every successful mortgage begins with understanding your goals.",
      },
      { property: "og:title", content: "Contact Mortgage Rockstar\u2122" },
      {
        property: "og:description",
        content: "Let\u2019s start with a conversation.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  message: z
    .string()
    .trim()
    .min(1, "Please share a message")
    .max(1000, "Message must be less than 1000 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      setStatus("error");
      return;
    }
    setSubmitting(true);
    // TODO: connect to an approved backend/email endpoint before enabling
    // production submissions. Until then, indicate receipt only.
    // eslint-disable-next-line no-console
    console.info("[contact] pending — connect endpoint before production");
    setSubmitting(false);
    setStatus("success");
    e.currentTarget.reset();
  }

  const hasOffice =
    site.approvedPhone ||
    site.approvedEmail ||
    site.approvedOfficeAddress ||
    site.approvedBusinessHours;

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&rsquo;s Start with a{" "}
            <span className="marker-underline">Conversation</span>.
          </>
        }
        intro={
          <>
            <p>
              Every successful mortgage begins with understanding your goals.
            </p>
            <p>
              Whether you&rsquo;re purchasing your first home, upgrading,
              investing, relocating, or preparing for the future, Mortgage
              Rockstar is here to help you build a financing strategy with
              confidence.
            </p>
          </>
        }
        image={homeAsset.url}
        imageAlt="Front porch of a welcoming home"
        stamp="Open"
        fileLabel="Intake Form"
        fileTitle="What we'll cover"
        fileBullets={[
          "Goals & timeline",
          "Numbers you can trust",
          "Program strategy",
          "Next actionable step",
        ]}
      />


      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="sheet p-6 sm:p-10"
            aria-describedby="contact-form-status"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required error={errors.name} />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                error={errors.email}
              />
              <Field
                label="Phone"
                name="phone"
                type="tel"
                required
                error={errors.phone}
              />
              <Field
                className="sm:col-span-2"
                label="Message"
                name="message"
                textarea
                required
                error={errors.message}
              />
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary disabled:opacity-60"
              >
                {submitting
                  ? "Sending\u2026"
                  : "Schedule Your Mortgage Strategy Session"}
              </button>
              <span className="text-xs text-[color:var(--muted-foreground)]">
                Your information is treated with care.
              </span>
            </div>

            <div id="contact-form-status" className="mt-6" aria-live="polite">
              {status === "success" && (
                <div className="rounded-md border border-[color:var(--blue)]/40 bg-[color:var(--blue-soft)] p-4 text-sm">
                  Thank you. Your message has been received and Matt will
                  follow up personally.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-md border border-[color:var(--destructive)]/40 bg-[color:var(--orange-soft)] p-4 text-sm">
                  Please review the highlighted fields and try again.
                </div>
              )}
            </div>
          </form>

          <aside className="space-y-5">
            <Sheet label="Direct line">
              <p className="font-display text-xl font-black">
                Talk with Matt.
              </p>
              <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
                You&rsquo;re not caller number 39. You never should have
                been.
              </p>
              {hasOffice ? (
                <dl className="mt-5 space-y-3 text-sm">
                  {site.approvedPhone ? (
                    <Row label="Phone">{site.approvedPhone}</Row>
                  ) : null}
                  {site.approvedEmail ? (
                    <Row label="Email">
                      <a
                        href={`mailto:${site.approvedEmail}`}
                        className="text-[color:var(--blue)] hover:text-[color:var(--orange)]"
                      >
                        {site.approvedEmail}
                      </a>
                    </Row>
                  ) : null}
                  {site.approvedOfficeAddress ? (
                    <Row label="Office">
                      <span className="whitespace-pre-line">
                        {site.approvedOfficeAddress}
                      </span>
                    </Row>
                  ) : null}
                  {site.approvedBusinessHours ? (
                    <Row label="Hours">
                      <span className="whitespace-pre-line">
                        {site.approvedBusinessHours}
                      </span>
                    </Row>
                  ) : null}
                </dl>
              ) : (
                <p className="mt-5 text-xs text-[color:var(--muted-foreground)]">
                  Contact details publish once approved. In the meantime,
                  the message form is the fastest way to reach Matt.
                </p>
              )}
            </Sheet>

            <Sheet label="Privacy" tone="blue">
              <p className="text-sm">
                Please do not send Social Security numbers, credit scores,
                income figures, or sensitive financial documents through
                this form. Matt will request anything specific through a
                secure channel.
              </p>
            </Sheet>
          </aside>
        </div>
      </Section>
    </>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3">
      <dt className="label-eyebrow text-[color:var(--muted-foreground)]">
        {label}
      </dt>
      <dd className="text-[color:var(--ink)]">{children}</dd>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
  className = "",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  textarea?: boolean;
}) {
  const id = `field-${name}`;
  const base =
    "w-full rounded-md border bg-white px-3 py-2.5 text-[color:var(--ink)] outline-none transition-colors focus:border-[color:var(--blue)] focus:ring-2 focus:ring-[color:var(--blue)]/25";
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[color:var(--ink)]"
      >
        {label}
        {required ? (
          <span className="ml-1 text-[color:var(--orange)]">*</span>
        ) : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          aria-invalid={!!error}
          className={`${base} mt-1.5 ${error ? "border-[color:var(--destructive)]" : "border-[color:var(--rule)]"}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          aria-invalid={!!error}
          className={`${base} mt-1.5 ${error ? "border-[color:var(--destructive)]" : "border-[color:var(--rule)]"}`}
        />
      )}
      {error ? (
        <p className="mt-1.5 text-xs font-medium text-[color:var(--destructive)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
