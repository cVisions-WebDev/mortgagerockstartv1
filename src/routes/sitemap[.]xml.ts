import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { loanPrograms } from "@/config/loan-programs";

const BASE_URL = "";

interface Entry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: Entry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/loan-programs", changefreq: "monthly", priority: "0.9" },
          ...loanPrograms.map((p) => ({
            path: `/loan-programs/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          { path: "/education", changefreq: "weekly", priority: "0.8" },
          { path: "/success-stories", changefreq: "monthly", priority: "0.6" },
          { path: "/referral", changefreq: "yearly", priority: "0.5" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" },
        ];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq
                ? `    <changefreq>${e.changefreq}</changefreq>`
                : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
