import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, site } from "@/config/site";
import logoAsset from "@/assets/Mortgage_Rockstar_Logo1.png.asset.json";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-[color:var(--paper)]/95 backdrop-blur border-b border-[color:var(--rule)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <img
            src={logoAsset.url}
            alt={`${site.brandName} logo`}
            className="h-9 w-auto md:h-10"
          />
          <span className="sr-only">{site.brandName}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded px-3 py-2 text-sm font-medium text-[color:var(--ink)]/80 transition-colors hover:text-[color:var(--ink)]"
              activeProps={{
                className:
                  "rounded px-3 py-2 text-sm font-semibold text-[color:var(--ink)] bg-[color:var(--paper-2)]",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary text-sm">
            Schedule Strategy Session
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded border border-[color:var(--rule)] lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span
              className={`h-0.5 w-5 bg-[color:var(--ink)] transition-transform ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[color:var(--ink)] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[color:var(--ink)] transition-transform ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-[color:var(--rule)] bg-[color:var(--paper)] lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-3">
            <ul className="flex flex-col divide-y divide-[color:var(--rule)]">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="block py-3 text-base font-medium text-[color:var(--ink)]"
                    activeProps={{
                      className:
                        "block py-3 text-base font-bold text-[color:var(--blue)]",
                    }}
                    activeOptions={{ exact: item.to === "/" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-3 w-full">
              Schedule Strategy Session
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
