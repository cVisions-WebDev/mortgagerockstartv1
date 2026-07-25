import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { ScrollProgress } from "../components/motion";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="max-w-md text-center">
        <p className="label-eyebrow">404 &mdash; Off the strategy file</p>
        <h1 className="mt-4 font-display text-4xl font-black tracking-tight text-[color:var(--ink)]">
          This page isn&rsquo;t in the folder.
        </h1>
        <p className="mt-4 text-sm text-[color:var(--muted-foreground)]">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="max-w-md text-center">
        <p className="label-eyebrow">Something interrupted the file</p>
        <h1 className="mt-4 font-display text-2xl font-black tracking-tight text-[color:var(--ink)]">
          This page didn&rsquo;t load.
        </h1>
        <p className="mt-3 text-sm text-[color:var(--muted-foreground)]">
          Try again, or head back to the strategy dossier.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mortgage Rockstar\\u2122 | Mortgage Clarity Before Commitment" },
      {
        name: "description",
        content:
          "Know what you can really afford before you start shopping. Education-first mortgage guidance from Matt Arana, powered by Cornerstone First Mortgage.",
      },
      { name: "author", content: "Mortgage Rockstar\u2122" },
      { property: "og:site_name", content: "Mortgage Rockstar\u2122" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Mortgage Rockstar\\u2122 | Mortgage Clarity Before Commitment" },
      {
        property: "og:description",
        content:
          "Know what you can really afford before you start shopping. Education-first mortgage guidance from Matt Arana, powered by Cornerstone First Mortgage.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a2942" },
      { name: "twitter:title", content: "Mortgage Rockstar\\u2122 | Mortgage Clarity Before Commitment" },
      { name: "twitter:description", content: "Know what you can really afford before you start shopping. Education-first mortgage guidance from Matt Arana, powered by Cornerstone First Mortgage." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d591dcbc-e4d3-475b-a97a-0902fc96d182/id-preview-051e6d83--56768a74-4b9c-4b9e-8164-a7cf648fbc9b.lovable.app-1784204583318.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d591dcbc-e4d3-475b-a97a-0902fc96d182/id-preview-051e6d83--56768a74-4b9c-4b9e-8164-a7cf648fbc9b.lovable.app-1784204583318.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@600;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Mortgage Rockstar",
          alternateName: "Mortgage Rockstar\u2122",
          description:
            "Matt Arana\u2019s education-first mortgage guidance platform, powered by Cornerstone First Mortgage.",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded focus:bg-[color:var(--ink)] focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
