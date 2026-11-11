// app/how-it-works/page.tsx
export default function HowItWorksPage() {
  return (
    <>
      {/* NAV */}
      <header className="nav">
        <div className="container nav__inner">
          <a href="/" className="logo">
            Brick<span>well</span>
          </a>
          <nav className="nav__links">
            <a href="/properties">Properties</a>
            <a href="/how-it-works" className="text-[#1f5c4e] font-bold">
              How it works
            </a>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
            <a href="/#faq">FAQ</a>
            <a href="/#cta" className="btn btn--small nav__cta">
              Start investing
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container" style={{ textAlign: "center", maxWidth: "800px" }}>
          <span className="pill">Simple & Transparent</span>
          <h1>
            How fractional real estate <em>works on Brickwell.</em>
          </h1>
          <p>
            We eliminate the millions in upfront capital, legal headaches, and property management stress. Here is how you go from creating an account to earning passive rental income.
          </p>
        </div>
      </section>

      {/* 3-STEP DETAILED PROCESS */}
      <section className="section section--tint">
        <div className="container">
          <div className="section__head" style={{ textAlign: "center", maxWidth: "600px", marginInline: "auto" }}>
            <span className="eyebrow">The Investor Journey</span>
            <h2>Three steps to your first property payout</h2>
          </div>

          <div className="steps" style={{ marginTop: "40px" }}>
            <div className="step">
              <span className="step__num">01</span>
              <h3>Create & Verify Account</h3>
              <p className="muted">
                Sign up in under 2 minutes. Complete a quick identity check (BVN/NIN verification) to ensure compliance with SEC and anti-money laundering regulations.
              </p>
            </div>

            <div className="step">
              <span className="step__num">02</span>
              <h3>Select & Buy Fractions</h3>
              <p className="muted">
                Browse fully vetted residential, commercial, or land assets in Lagos and Port Harcourt. Choose how many fractions you want to purchase starting from ₦50,000.
              </p>
            </div>

            <div className="step">
              <span className="step__num">03</span>
              <h3>Earn Returns & Liquidate</h3>
              <p className="muted">
                Receive rental dividends deposited directly into your Brickwell wallet monthly or quarterly. Sell your shares anytime via our secondary resale marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE: LEGAL & BACKEND STRUCTURE */}
      <section className="section">
        <div className="container why">
          <div>
            <span className="eyebrow">Legal Protection</span>
            <h2>How your ownership is secured legally</h2>
            <p className="muted" style={{ marginBottom: "16px" }}>
              When you invest on Brickwell, you aren't just buying digital tokens or speculative promises. You own direct beneficial ownership of real physical properties.
            </p>
            <ul className="checks">
              <li>
                <strong>Special Purpose Vehicle (SPV):</strong> Each property is held in an independent Special Purpose Vehicle legal entity managed by licensed trustees.
              </li>
              <li>
                <strong>Vetted Land Titles:</strong> Every listing undergoes complete due diligence—verifying Certificate of Ownership (C of O), Governor's Consent, or Deed of Conveyance.
              </li>
              <li>
                <strong>Professional Property Management:</strong> Brickwell oversees tenant sourcing, rent collection, routine repairs, and facility operations.
              </li>
            </ul>
          </div>

          {/* RETURNS CALCULATOR PREVIEW */}
          <div className="calc">
            <h3>Returns Model</h3>
            <div style={{ display: "grid", gap: "20px" }}>
              <div className="calc__result" style={{ margin: 0 }}>
                <small>1. Rental Yield Payouts</small>
                <strong style={{ fontSize: "1.5rem" }}>8% – 12% p.a.</strong>
                <p className="muted small" style={{ color: "#cfd9d5", marginTop: "4px" }}>
                  Earn regular income generated directly from verified tenant rents.
                </p>
              </div>

              <div className="calc__result" style={{ margin: 0 }}>
                <small>2. Capital Appreciation</small>
                <strong style={{ fontSize: "1.5rem" }}>15% – 25% long-term</strong>
                <p className="muted small" style={{ color: "#cfd9d5", marginTop: "4px" }}>
                  Benefit from rising land and building market valuations over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ LINK CTA */}
      <section className="cta">
        <div className="container cta__inner">
          <h2>Got more questions about how it works?</h2>
          <p>Check out our detailed FAQ or speak directly with our advisory team.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/#faq" className="btn btn--light">
              Read FAQ
            </a>
            <a href="/contact" className="btn btn--ghost" style={{ color: "#fff", borderColor: "#fff" }}>
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__inner">
          <a href="/" className="logo logo--light">
            Brick<span>well</span>
          </a>
          <p>© 2026 Brickwell. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}