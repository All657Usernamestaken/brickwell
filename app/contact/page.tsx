// app/contact/page.tsx
import Link from "next/link";
import SiteNav from "../components/site-nav";

export default function ContactPage() {
  return (
    <>
      <SiteNav />

      {/* CONTACT HERO & FORM SECTION */}
      <section className="py-16 md:py-24 bg-[#fbf8f2]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block bg-[#efe6d1] text-[#16443a] px-4 py-1.5 rounded-full text-[0.85rem] font-bold mb-4">
              Get in touch
            </span>
            <h1 className="font-['Fraunces'] text-4xl md:text-5xl font-semibold text-[#0f2f29] mb-4">
              We&apos;re here to help you grow your portfolio.
            </h1>
            <p className="text-lg text-[#667570]">
              Have questions about fractional ownership, legal verifications, or listing a property? Send us a message and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* CONTACT INFO SIDEBAR */}
            <div className="md:col-span-5 bg-[#0f2f29] text-white p-8 md:p-10 rounded-3xl space-y-8 shadow-xl">
              <div>
                <h3 className="font-['Fraunces'] text-2xl text-white mb-2">Reach out directly</h3>
                <p className="text-[#cfd9d5] text-sm">
                  Prefer a direct line or visiting an office? Here is where you can find us.
                </p>
              </div>

              <div className="space-y-6 text-[#cfd9d5]">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1f5c4e] text-[#e9b872] w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">
                    📍
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Headquarters</strong>
                    <p className="text-sm">Trans-Woji Road, Port Harcourt, Rivers State</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1f5c4e] text-[#e9b872] w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">
                    ✉️
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Email us</strong>
                    <p className="text-sm">support@brickwell.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1f5c4e] text-[#e9b872] w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0">
                    📞
                  </div>
                  <div>
                    <strong className="block text-white font-semibold mb-0.5">Phone / WhatsApp</strong>
                    <p className="text-sm">+234 800 274 25935</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="block text-xs uppercase tracking-wider text-[#9fb0aa] font-bold mb-3">
                  Support hours
                </span>
                <p className="text-sm text-[#cfd9d5]">Monday – Friday: 8:00 AM – 6:00 PM</p>
                <p className="text-sm text-[#cfd9d5]">Saturday: 9:00 AM – 2:00 PM</p>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="md:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-[#e6e0d3] shadow-sm">
              <h3 className="font-['Fraunces'] text-2xl text-[#0f2f29] mb-6">Send a message</h3>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1b2623] mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#e6e0d3] bg-[#fbf8f2] focus:outline-none focus:border-[#1f5c4e] transition-all text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1b2623] mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#e6e0d3] bg-[#fbf8f2] focus:outline-none focus:border-[#1f5c4e] transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1b2623] mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-[#e6e0d3] bg-[#fbf8f2] focus:outline-none focus:border-[#1f5c4e] transition-all text-sm">
                    <option>General Inquiry</option>
                    <option>Property Investment Question</option>
                    <option>Resale Marketplace Support</option>
                    <option>Legal & Title Verification</option>
                    <option>Partnership / Developer Listing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1b2623] mb-2">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 rounded-xl border border-[#e6e0d3] bg-[#fbf8f2] focus:outline-none focus:border-[#1f5c4e] transition-all text-sm resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#16443a] text-white py-4 rounded-xl font-bold hover:bg-[#1f5c4e] transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2f29] text-[#9fb0aa] py-8">
        <div className="max-w-[1120px] mx-auto px-5 flex flex-wrap justify-between items-center gap-4">
          <Link href="/" className="font-['Fraunces'] text-[1.6rem] font-semibold text-white">
            Brick<span className="text-[#e9b872]">well</span>
          </Link>
          <p>© 2026 Brickwell. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}