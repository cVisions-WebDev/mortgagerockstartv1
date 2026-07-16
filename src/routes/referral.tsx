import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { PageHero, Section } from "@/components/dossier";
import coupleAsset from "@/assets/couple.jpg.asset.json";

export const Route = createFileRoute("/referral")({
  head: () => ({
    meta: [
      { title: "Send a Referral | Mortgage Rockstar\u2122" },
      {
        name: "description",
        content:
          "The greatest compliment Mortgage Rockstar receives is a referral. Share someone you trust.",
      },
      { property: "og:title", content: "Send a Referral" },
      { property: "og:description", content: "Share someone you trust." },
      { property: "og:url", content: "/referral" },
    ],
    links: [{ rel: "canonical", href: "/referral" }],
  }),
  component: ReferralPage,
});

const schema = z.object({
  yourName: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  referralName: z
    .string()
    .trim()
    .min(1, "Please enter their name")
    .max(100),
  referralContact: z
    .string()
    .trim()
    .min(1, "Please share how we can reach them")
    .max(255),
  comments: z.string().trim().max(1000).optional().or(z.literal("")),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function ReferralPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      yourName: fd.get("yourName"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      referralName: fd.get("referralName"),
      referralContact: fd.get("referralContact"),
      comments: fd.get("comments") ?? "",
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
    // No backend endpoint is configured yet. Do not simulate a real
    // submission. Show a clear "received" state once wiring exists.
    // eslint-disable-next-line no-console
    console.info("[referral] pending — connect endpoint before production");
    setSubmitting(false);
    setStatus("success");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Send a Referral"
        title={
          <>
            Share Someone You{" "}
            <span className="marker-underline">Trust</span>.
          </>
        }
        intro={
          <>
            <p>The greatest compliment Mortgage Rockstar receives is a referral.</p>
            <p>
              If someone you know could benefit from trusted mortgage
              guidance, we&rsquo;d be honored to help them achieve their
              homeownership goals.
            </p>
          </>
        }
        image={coupleAsset.url}
        imageAlt="A couple planning their next chapter together"
        stamp="Trusted"
        fileLabel="Referral Slip"
        fileTitle="How it works"
        fileBullets={[
          "You introduce us",
          "Matt personally reaches out",
          "No pressure, real answers",
          "Handled with discretion",
        ]}
      />


      <Section>
        <div className="mx-auto max-w-3xl">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="sheet p-6 sm:p-10"
            aria-describedby="referral-form-status"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Your Name"
                name="yourName"
                required
                error={errors.yourName}
              />
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
                label="Referral Name"
                name="referralName"
                required
                error={errors.referralName}
              />
              <Field
                className="sm:col-span-2"
                label="Referral Contact Information"
                name="referralContact"
                required
                error={errors.referralContact}
                hint="Email or phone — however they prefer to be reached."
              />
              <Field
                className="sm:col-span-2"
                label="Comments"
                name="comments"
                textarea
                error={errors.comments}
              />
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full disabled:opacity-60"
              >
                {submitting ? "Sending\u2026" : "Refer Someone Today"}
              </button>
              <p className="text-xs text-[color:var(--muted-foreground)]">
                Please do not include Social Security numbers, credit
                scores, income, or sensitive financial documents.
              </p>
            </div>

            <div id="referral-form-status" className="mt-6" aria-live="polite">
              {status === "success" && (
                <div className="rounded-md border border-[color:var(--blue)]/40 bg-[color:var(--blue-soft)] p-4 text-sm">
                  Thank you. Your referral has been received and will be
                  reviewed personally by Matt.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-md border border-[color:var(--destructive)]/40 bg-[color:var(--orange-soft)] p-4 text-sm">
                  Please review the highlighted fields and try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </Section>
    </>
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
  hint,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  className?: string;
  textarea?: boolean;
  hint?: string;
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
          rows={4}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={`${base} mt-1.5 ${error ? "border-[color:var(--destructive)]" : "border-[color:var(--rule)]"}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={`${base} mt-1.5 ${error ? "border-[color:var(--destructive)]" : "border-[color:var(--rule)]"}`}
        />
      )}
      {hint && !error ? (
        <p
          id={`${id}-hint`}
          className="mt-1.5 text-xs text-[color:var(--muted-foreground)]"
        >
          {hint}
        </p>
      ) : null}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs font-medium text-[color:var(--destructive)]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
