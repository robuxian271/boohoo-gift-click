import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import boohoomanLogo from "@/assets/boohooman-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Up to £500 boohooMAN Voucher" },
      {
        name: "description",
        content:
          "Claim up to a £500 boohooMAN voucher. Complete a few quick deals and get rewarded.",
      },
      { property: "og:title", content: "Up to £500 boohooMAN Voucher" },
      {
        property: "og:description",
        content:
          "Claim up to a £500 boohooMAN voucher. Complete a few quick deals and get rewarded.",
      },
    ],
  }),
  component: Index,
});

const OFFER_URL = "https://giftclick.org/aff_c?offer_id=2373&aff_id=20617";

const STEPS = [
  'Click on "Start Now"',
  "Enter a few quick details",
  "Complete 4–5 quick deals",
  "Enjoy your £500 boohooMAN voucher!",
];

const FAQS = [
  {
    q: "How long do the deals take?",
    a: "Most deals take just a few minutes each. The full process usually takes 15–25 minutes from start to finish.",
  },
  {
    q: "What are deals?",
    a: "Deals are short offers from our partner brands — things like trying a free product, signing up for a service, or downloading an app.",
  },
  {
    q: "How many deals do I have to do?",
    a: "You'll need to complete 4–5 quick deals to qualify for your boohooMAN voucher reward.",
  },
  {
    q: "When will I receive my reward?",
    a: "Rewards are typically delivered within 24–48 hours after all qualifying deals have been verified.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background py-8 px-4">
      <div className="mx-auto max-w-md space-y-6">
        <Card>
          <Header />
          <div className="px-6 pb-8 pt-8 text-center">
            <h1 className="text-5xl font-black tracking-tight text-foreground">
              Up to £500
            </h1>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              boohooMAN Voucher
            </p>

            <ol className="mt-8 space-y-5 text-left">
              {STEPS.map((step, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground text-sm font-bold text-background">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </li>
              ))}
            </ol>

            <a
              href={OFFER_URL}
              className="mt-8 block w-full rounded-md bg-foreground px-6 py-4 text-lg font-bold uppercase tracking-wide text-background transition-transform hover:scale-[1.02] hover:bg-foreground/90"
            >
              Start Now
            </a>

            <p className="mt-4 text-xs text-muted-foreground">
              Complete 4–5 quick deals to finish the process
            </p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">
              3,200+ UK Participants Rewarded
            </p>
          </div>
        </Card>

        <Card>
          <div className="px-6 py-6">
            <h2 className="text-lg font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="mt-4 divide-y divide-border">
              {FAQS.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </div>
        </Card>

        <p className="px-2 text-center text-[11px] leading-relaxed text-muted-foreground">
          This site is not affiliated with, endorsed by, or sponsored by boohoo.com UK
          Ltd. boohooMAN® is a registered trademark of its respective owner. Promotion
          is operated by a third-party advertiser.
        </p>
      </div>
    </main>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border">
      {children}
    </div>
  );
}

function Header() {
  return (
    <div className="flex items-center justify-center bg-foreground px-6 py-8">
      <img
        src={boohoomanLogo}
        alt="boohooMAN"
        className="h-10 w-auto md:h-12"
      />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-bold text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="mt-2 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
