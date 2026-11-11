"use client";

import { useState } from "react";
import SiteNav from "../components/site-nav";
import SiteFooter from "../components/site-footer";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: send `email` to your backend or a form service
    setMsg("Thanks! You're on the list. We'll be in touch.");
    setEmail("");
  }

  return (
    <>
      <SiteNav />
      <section className="cta">
        <div className="container cta__inner">
          <h2>Ready to build your property portfolio?</h2>
          <p>Join the waitlist and get early access to new listings.</p>
          <form className="cta__form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn btn--light" type="submit">Join waitlist</button>
          </form>
          <p className="form__msg">{msg}</p>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}