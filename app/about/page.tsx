// app/about/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SiteNav from "../components/site-nav";

export default function AboutPage() {
  return (
    <>
      <SiteNav />

      <main className="bg-[#FBF8F2] font-sans text-[#0F2F29] antialiased">
        {/* NAV & HERO */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-8 lg:grid-cols-2 lg:px-10 lg:pt-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EFE6D1] px-3.5 py-1.5 text-xs font-bold text-[#16443A]">
              <span className="rounded-full bg-[#16443A] px-2 py-0.5 text-[10px] text-white">About Us</span>
              Democratizing Nigerian Real Estate
            </span>
            <h1 className="mt-6 font-['Fraunces'] text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0F2F29] sm:text-5xl lg:text-6xl">
              Redefining Wealth Creation Through <em className="text-[#E9B872] italic font-['Fraunces']">Fractional Ownership.</em>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[#667570] sm:text-base">
              We eliminate millions in upfront capital, legal friction, and management hassles. Brickwell empowers everyday investors to own vetted fractions of prime properties in Lagos and Port Harcourt starting from ₦50,000.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/properties" className="rounded-full bg-[#16443A] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0F2F29]">
                Explore Listings
              </Link>
              <Link href="/how-it-works" className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-bold text-[#0F2F29] transition hover:border-[#16443A]">
                How It Works
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-[4/4.4] overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F2F29] via-[#16443A] to-[#1F5C4E] p-8 text-white flex flex-col justify-between shadow-2xl relative">
              <div className="space-y-2">
                <span className="rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-[#E9B872] border border-[#E9B872]/20 inline-block">
                  Lekki & Trans-Amadi Portfolios
                </span>
                <h3 className="font-['Fraunces'] text-2xl font-bold">Institutional Assets, Retail Access</h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
                  <p className="text-xs text-[#CFD9D5]">Average Quarterly Yield</p>
                  <p className="text-2xl font-['Fraunces'] font-bold text-[#E9B872]">8.5% – 12% p.a.</p>
                </div>
                <p className="text-xs text-[#CFD9D5] leading-relaxed">
                  Backed by legal Special Purpose Vehicles (SPVs) and vetted Certificate of Occupancy (C of O) titles.
                </p>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute right-4 top-6 w-48 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur border border-gray-100">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#667570]">Minimum Buy-In</p>
              <p className="mt-1 font-['Fraunces'] text-xl font-bold text-[#0F2F29]">₦50,000</p>
              <div className="mt-3 h-1.5 w-full rounded-full bg-[#FBF8F2]">
                <div className="h-full w-4/5 rounded-full bg-[#E9B872]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST MARKETS */}
        <section className="border-y border-[#E6E0D3] bg-white py-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-[#667570]">Core Focus Markets & Trust Custodians</p>
          <div className="mx-auto mt-5 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 text-sm font-bold text-[#0F2F29]/60">
            <span>Lagos Island</span>
            <span>•</span>
            <span>Port Harcourt (Woji / GRA)</span>
            <span>•</span>
            <span>Secured SPV Trustees</span>
            <span>•</span>
            <span>Vetted C of O Titles</span>
          </div>
        </section>

        {/* FEATURE: REDEFINING & BENTO STATS */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-3xl bg-[#F2ECDD] p-8 lg:p-10 border border-[#E6E0D3]">
              <h2 className="font-['Fraunces'] text-3xl font-extrabold leading-tight tracking-tight text-[#0F2F29] sm:text-4xl">
                Democratizing<br />Nigerian Real Estate
              </h2>
              <p className="mt-4 max-w-sm text-sm text-[#667570] leading-relaxed">
                Smart tools that make owning, tracking, and earning rental dividends from prime property effortless.
              </p>
              <div className="mt-8 flex items-end gap-4">
                <div className="h-56 w-36 rounded-[1.75rem] border-[6px] border-[#0F2F29] bg-white p-3 shadow-xl flex flex-col justify-between">
                  <div className="h-3 w-12 rounded bg-[#FBF8F2]"></div>
                  <div className="h-16 rounded-xl bg-[#16443A] p-2 text-white text-[10px] flex flex-col justify-between">
                    <span>Dividend Paid</span>
                    <span className="font-bold text-[#E9B872] text-xs">₦145,000</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 rounded bg-[#FBF8F2]"></div>
                    <div className="h-2 w-2/3 rounded bg-[#FBF8F2]"></div>
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-md border border-[#E6E0D3]">
                  <p className="text-xs text-[#667570]">Quarterly Distribution</p>
                  <p className="font-['Fraunces'] text-lg font-bold text-[#0F2F29]">99% Payout Rate</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-3xl bg-[#0F2F29] p-8 text-white shadow-xl">
              <div className="flex -space-x-3">
                <span className="h-10 w-10 rounded-full border-2 border-[#0F2F29] bg-[#E9B872] grid place-items-center text-[#0F2F29] font-bold text-xs">✓</span>
                <span className="h-10 w-10 rounded-full border-2 border-[#0F2F29] bg-[#EFE6D1] grid place-items-center text-[#0F2F29] font-bold text-xs">SPV</span>
                <span className="h-10 w-10 rounded-full border-2 border-[#0F2F29] bg-emerald-300 grid place-items-center text-[#0F2F29] font-bold text-xs">SEC</span>
              </div>
              <div className="mt-8">
                <p className="font-['Fraunces'] text-5xl font-extrabold text-[#E9B872]">2,400+</p>
                <p className="mt-1 text-sm text-white/80">Active Co-Investors</p>
                <Link href="/properties" className="mt-6 inline-block rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#0F2F29] hover:bg-[#EFE6D1] transition">
                  View Properties
                </Link>
              </div>
            </div>
          </div>

          <h2 className="mt-20 font-['Fraunces'] text-3xl font-extrabold tracking-tight text-[#0F2F29] sm:text-4xl">
            Powering Growth for<br />Everyday Wealth Builders
          </h2>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#E6E0D3] pt-10 text-center md:grid-cols-4">
            <div>
              <p className="font-['Fraunces'] text-4xl font-extrabold text-[#16443A]">48+</p>
              <p className="mt-1 text-xs text-[#667570] font-medium">Properties Funded</p>
            </div>
            <div>
              <p className="font-['Fraunces'] text-4xl font-extrabold text-[#E9B872]">₦2.5B+</p>
              <p className="mt-1 text-xs text-[#667570] font-medium">Asset Value Managed</p>
            </div>
            <div>
              <p className="font-['Fraunces'] text-4xl font-extrabold text-[#16443A]">99%</p>
              <p className="mt-1 text-xs text-[#667570] font-medium">On-Time Dividend Payouts</p>
            </div>
            <div>
              <p className="font-['Fraunces'] text-4xl font-extrabold text-[#16443A]">12</p>
              <p className="mt-1 text-xs text-[#667570] font-medium">Prime Corridors Covered</p>
            </div>
          </div>
        </section>

        {/* SPV & TRANSACTION VETTING SECTION */}
        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="grid items-center gap-10 rounded-3xl bg-[#F2ECDD] p-8 lg:grid-cols-2 lg:p-12 border border-[#E6E0D3]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#16443A]">Vetting & Title Shield</span>
              <h2 className="mt-2 font-['Fraunces'] text-3xl font-extrabold leading-tight tracking-tight text-[#0F2F29] sm:text-4xl">
                Rigorous Property<br />Title Due Diligence
              </h2>
              <p className="mt-4 max-w-sm text-sm text-[#667570] leading-relaxed">
                Every brick, unit, and parcel of land undergoes thorough legal verification—verifying Certificates of Occupancy (C of O), Governor's Consent, and Deeds of Conveyance before listing.
              </p>
              <Link href="/how-it-works" className="mt-6 inline-block rounded-full bg-[#16443A] px-6 py-3 text-sm font-bold text-white hover:bg-[#0F2F29] transition shadow-md">
                Learn How We Vet
              </Link>
            </div>
            <div className="relative mx-auto grid h-72 w-full max-w-md place-items-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-dashed border-[#16443A]/30"
              />
              <div className="absolute inset-10 rounded-full border border-[#16443A]/20"></div>
              <div className="relative z-10 grid h-20 w-20 place-items-center rounded-2xl bg-[#16443A] font-['Fraunces'] text-xl font-bold text-[#E9B872] shadow-xl">
                BW
              </div>
              <span className="absolute left-0 top-10 rounded-xl bg-white px-3.5 py-2 text-xs font-extrabold text-[#0F2F29] shadow border border-gray-100">C of O Verified</span>
              <span className="absolute right-0 top-24 rounded-xl bg-white px-3.5 py-2 text-xs font-extrabold text-[#0F2F29] shadow border border-gray-100">SPV Custody</span>
              <div className="absolute bottom-2 left-4 rounded-xl bg-white px-3.5 py-2 text-[11px] font-bold text-[#16443A] shadow border border-gray-100">Facility Management Included</div>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <h2 className="max-w-md font-['Fraunces'] text-3xl font-extrabold leading-tight tracking-tight text-[#0F2F29] sm:text-4xl">
            Guided by Principles,<br />Driven by Financial Inclusion
          </h2>
          <p className="mt-3 max-w-md text-sm text-[#667570] leading-relaxed">
            The bedrock values that shape every property listing, legal agreement, and dividend distribution we manage.
          </p>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-[#EFE6D1] relative border border-[#E6E0D3]">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" alt="Brickwell team strategy" className="h-full w-full object-cover" />
            </div>
            <ul className="divide-y divide-[#E6E0D3]">
              <li className="flex gap-4 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFE6D1] font-bold text-[#16443A]">✓</span>
                <div>
                  <h3 className="font-bold text-[#0F2F29]">Absolute Transparency</h3>
                  <p className="mt-1 text-sm text-[#667570]">No hidden charges. Investor portals deliver real-time asset updates and clear quarterly distribution reports.</p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFE6D1] font-bold text-[#16443A]">⚡</span>
                <div>
                  <h3 className="font-bold text-[#0F2F29]">Liquidity & Secondary Resale</h3>
                  <p className="mt-1 text-sm text-[#667570]">Flexible exit points allow you to trade or list your property fractions on our secondary marketplace whenever you need capital.</p>
                </div>
              </li>
              <li className="flex gap-4 py-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#EFE6D1] font-bold text-[#16443A]">🔒</span>
                <div>
                  <h3 className="font-bold text-[#0F2F29]">Institutional Protection</h3>
                  <p className="mt-1 text-sm text-[#667570]">Every asset is held inside a standalone Special Purpose Vehicle managed by licensed corporate trustees.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#0F2F29] text-[#9FB0AA] py-8 border-t border-[#16443A]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap justify-between items-center gap-4">
            <Link href="/" className="font-['Fraunces'] text-2xl font-bold text-white">
              Brick<span className="text-[#E9B872]">well</span>
            </Link>
            <p className="text-xs">© 2026 Brickwell. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}