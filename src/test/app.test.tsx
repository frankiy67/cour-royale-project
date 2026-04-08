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
  it("affiche les 2 contacts avec noms et boutons de révélation du numéro", async () => {
    const user = userEvent.setup();
    withProviders(<ContactSection />);

    // Les noms sont visibles
    expect(screen.getByText("Bernard VALLAT")).toBeInTheDocument();
    expect(screen.getByText("Elisabeth FIXARI-VALLAT")).toBeInTheDocument();

    // Les téléphones sont masqués par défaut
    expect(screen.queryByText("+33 (0)6 07 08 80 79")).not.toBeInTheDocument();

    // Les boutons "Afficher le numéro" sont présents
    const revealBtns = screen.getAllByRole("button", { name: /afficher le num/i });
    expect(revealBtns).toHaveLength(2);

    // Au clic, le vrai numéro s'affiche comme lien tel:
    await user.click(revealBtns[0]);
    expect(await screen.findByRole("link", { name: /\(0\)6 07 08 80 79/i })).toBeInTheDocument();
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
