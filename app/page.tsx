// app/page.tsx
import SiteNav from "./components/site-nav";
export default function Home() {
  return (
    <>
      <SiteNav />

      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="pill">Fractional property investing</span>
            <h1>Own a piece of prime real estate, <em>from ₦50,000.</em></h1>
            <p>Browse vetted properties, invest in shares, and earn rental income and capital growth, without the stress of buying a whole building.</p>
            <div className="hero__actions">
              <a href="/properties" className="btn">Explore properties</a>
              <a href="#how" className="btn btn--ghost">How it works</a>
            </div>
            <div className="hero__trust">
              <div className="avatars">
                <span style={{ background: '#e9b872' }}></span>
                <span style={{ background: '#7fb5a0' }}></span>
                <span style={{ background: '#c98b8b' }}></span>
              </div>
              <p><strong>2,400+</strong> investors already building wealth</p>
            </div>
          </div>

          <div className="hero__visual">
            <div className="building">
              <svg viewBox="0 0 320 380" aria-hidden="true">
                <rect x="40" y="90" width="150" height="270" rx="6" fill="#16443a" />
                <rect x="170" y="150" width="110" height="210" rx="6" fill="#1f5c4e" />
                <g fill="#f6e7c8" opacity=".85">
                  <rect x="60" y="115" width="26" height="30" rx="3" /><rect x="100" y="115" width="26" height="30" rx="3" /><rect x="140" y="115" width="26" height="30" rx="3" />
                  <rect x="60" y="170" width="26" height="30" rx="3" /><rect x="100" y="170" width="26" height="30" rx="3" /><rect x="140" y="170" width="26" height="30" rx="3" />
                  <rect x="60" y="225" width="26" height="30" rx="3" /><rect x="100" y="225" width="26" height="30" rx="3" /><rect x="140" y="225" width="26" height="30" rx="3" />
                  <rect x="190" y="175" width="22" height="26" rx="3" /><rect x="230" y="175" width="22" height="26" rx="3" />
                  <rect x="190" y="225" width="22" height="26" rx="3" /><rect x="230" y="225" width="22" height="26" rx="3" />
                </g>
                <rect x="85" y="300" width="40" height="60" rx="4" fill="#e9b872" />
                <rect x="0" y="358" width="320" height="6" rx="3" fill="#0f2f29" />
              </svg>
            </div>
            <div className="float-card float-card--a">
              <small>Avg. annual return</small>
              <strong>12.4%</strong>
            </div>
            <div className="float-card float-card--b">
              <small>Rental yield</small>
              <strong>8.1%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats__grid">
          <div><strong data-count="48">0</strong><span>Properties funded</span></div>
          <div><strong data-count="2400">0</strong><span>Active investors</span></div>
          <div><strong data-count="12">0</strong><span>Cities covered</span></div>
          <div><strong data-count="99">0</strong><span>% payouts on time</span></div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="section" id="properties">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Featured listings</span>
            <h2>Properties open for investment</h2>
          </div>

          <div className="filters" id="filters">
            <button className="chip active" data-filter="all">All</button>
            <button className="chip" data-filter="residential">Residential</button>
            <button className="chip" data-filter="commercial">Commercial</button>
            <button className="chip" data-filter="land">Land</button>
          </div>

          <div className="cards" id="cards">
            <article className="card" data-type="residential">
              <div className="card__img" style={{ '--a': '#1f5c4e', '--b': '#7fb5a0' } as React.CSSProperties}><span className="tag">Residential</span></div>
              <div className="card__body">
                <h3>Lekki Garden Apartments</h3>
                <p className="muted">Lekki Phase 1, Lagos</p>
                <div className="meta"><span>Yield <b>8.5%</b></span><span>Min <b>₦50k</b></span></div>
                <div className="progress"><i style={{ width: '72%' }}></i></div>
                <p className="muted small">72% funded</p>
                <a href="/properties" className="btn btn--block">Invest now</a>
              </div>
            </article>

            <article className="card" data-type="commercial">
              <div className="card__img" style={{ '--a': '#c98b4b', '--b': '#f0cf9a' } as React.CSSProperties}><span className="tag">Commercial</span></div>
              <div className="card__body">
                <h3>Rumuola Office Plaza</h3>
                <p className="muted">Rumuola, Port Harcourt</p>
                <div className="meta"><span>Yield <b>9.2%</b></span><span>Min <b>₦100k</b></span></div>
                <div className="progress"><i style={{ width: '45%' }}></i></div>
                <p className="muted small">45% funded</p>
                <a href="/properties" className="btn btn--block">Invest now</a>
              </div>
            </article>

            <article className="card" data-type="land">
              <div className="card__img" style={{ '--a': '#3d6b3a', '--b': '#b7d4a0' } as React.CSSProperties}><span className="tag">Land</span></div>
              <div className="card__body">
                <h3>Epe Growth Corridor Plots</h3>
                <p className="muted">Epe, Lagos</p>
                <div className="meta"><span>Growth <b>15%</b></span><span>Min <b>₦75k</b></span></div>
                <div className="progress"><i style={{ width: '88%' }}></i></div>
                <p className="muted small">88% funded</p>
                <a href="/properties" className="btn btn--block">Invest now</a>
              </div>
            </article>

            <article className="card" data-type="residential">
              <div className="card__img" style={{ '--a': '#6a4c93', '--b': '#c9b6e4' } as React.CSSProperties}><span className="tag">Residential</span></div>
              <div className="card__body">
                <h3>Trans-Amadi Townhouses</h3>
                <p className="muted">Trans-Amadi, Port Harcourt</p>
                <div className="meta"><span>Yield <b>7.8%</b></span><span>Min <b>₦50k</b></span></div>
                <div className="progress"><i style={{ width: '31%' }}></i></div>
                <p className="muted small">31% funded</p>
                <a href="/properties" className="btn btn--block">Invest now</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--tint" id="how">
        <div className="container">
          <div className="section__head">
            <span className="eyebrow">Simple process</span>
            <h2>Start earning in three steps</h2>
          </div>
          <div className="steps">
            <div className="step"><span className="step__num">01</span><h3>Create an account</h3><p>Sign up and verify your details in a few minutes.</p></div>
            <div className="step"><span className="step__num">02</span><h3>Pick a property</h3><p>Compare yield, location and funding progress, then choose your shares.</p></div>
            <div className="step"><span className="step__num">03</span><h3>Earn income</h3><p>Receive rental payouts and watch your portfolio grow over time.</p></div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section" id="why">
        <div className="container why">
          <div>
            <span className="eyebrow">Why Brickwell</span>
            <h2>Built for first-time and seasoned investors</h2>
            <ul className="checks">
              <li>Every property legally verified before listing</li>
              <li>Low entry amounts, no huge capital needed</li>
              <li>Transparent fees and monthly reports</li>
              <li>Exit options through our resale marketplace</li>
            </ul>
          </div>
          <div className="calc">
            <h3>Estimate your returns</h3>
            <label>Investment amount: <b id="amtOut">₦500,000</b></label>
            <input type="range" id="amt" min="50000" max="5000000" step="50000" defaultValue="500000" />
            <label>Years: <b id="yrOut">5</b></label>
            <input type="range" id="yrs" min="1" max="15" step="1" defaultValue="5" />
            <div className="calc__result">
              <small>Projected value (at 12% p.a.)</small>
              <strong id="result">₦881,171</strong>
            </div>
            <p className="muted small">Illustration only. Returns are not guaranteed.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--tint" id="faq">
        <div className="container faq">
          <div className="section__head">
            <span className="eyebrow">Questions</span>
            <h2>Frequently asked</h2>
          </div>
          <details><summary>What is the minimum I can invest?</summary><p>You can start from ₦50,000 on selected properties.</p></details>
          <details><summary>How do I get paid?</summary><p>Rental income is paid out to your wallet monthly or quarterly, depending on the property.</p></details>
          <details><summary>Can I sell my shares?</summary><p>Yes. You can list your shares on the resale marketplace once the lock-in period ends.</p></details>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <div className="container cta__inner">
          <h2>Ready to build your property portfolio?</h2>
          <p>Join the waitlist and get early access to new listings.</p>
          <form className="cta__form" id="form">
            <input type="email" id="email" placeholder="Enter your email" required />
            <button className="btn btn--light" type="submit">Join waitlist</button>
          </form>
          <p className="form__msg" id="msg"></p>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#" className="logo logo--light">Brick<span>well</span></a>
          <p>© 2026 Brickwell. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}