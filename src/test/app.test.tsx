import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, type ReactElement } from "react";

// i18n must be initialised before importing components that use useTranslation
import "../i18n/index";

import ContactSection   from "../components/ContactSection";
import LanguageSwitcher from "../components/LanguageSwitcher";

// ── test helper ─────────────────────────────────────────────────────────────
function withProviders(ui: ReactElement) {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={qc}>
      <MemoryRouter>
        <Suspense fallback={null}>{ui}</Suspense>
      </MemoryRouter>
    </QueryClientProvider>
  );
}

// ── 1. ContactSection ────────────────────────────────────────────────────────
describe("ContactSection", () => {
  it("affiche les 2 contacts avec nom, téléphone et email", () => {
    withProviders(<ContactSection />);

    expect(screen.getByText("Bernard VALLAT")).toBeInTheDocument();
    expect(screen.getByText("Elisabeth FIXARI-VALLAT")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /06 07 08 80 79/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /06 84 53 75 05/i })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "bv@semeuse.eu" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "efv@semeuse.eu" })).toBeInTheDocument();
  });
});

// ── 2. LanguageSwitcher ──────────────────────────────────────────────────────
describe("LanguageSwitcher", () => {
  it("change la langue quand on clique sur English", async () => {
    const user = userEvent.setup();
    withProviders(<LanguageSwitcher />);

    const trigger = screen.getByRole("button");
    await user.click(trigger);

    const enOption = screen.getByRole("button", { name: /english/i });
    await user.click(enOption);

    expect(screen.getByRole("button", { name: /en/i })).toBeInTheDocument();
  });
});

// ── 3. Index smoke test ──────────────────────────────────────────────────────
describe("Index page", () => {
  it("se rend sans erreur et contient un heading de niveau 1", async () => {
    const { default: Index } = await import("../pages/Index");
    withProviders(<Index />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });
});
