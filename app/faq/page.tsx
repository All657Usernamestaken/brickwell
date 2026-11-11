import SiteNav from "../components/site-nav";
import SiteFooter from "../components/site-footer";

export default function FaqPage() {
  return (
    <>
      <SiteNav />
      <section className="section section--tint">
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
      <SiteFooter />
    </>
  );
}