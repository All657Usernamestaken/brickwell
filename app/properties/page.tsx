// app/properties/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import SiteNav from "../components/site-nav";

interface Property {
  id: string;
  title: string;
  location: string;
  city: "lagos" | "port-harcourt";
  category: "residential" | "commercial" | "land";
  yieldRate: string;
  minInvest: string;
  fundedPercent: number;
  totalValuation: string;
  gradientA: string;
  gradientB: string;
}

const PROPERTIES: Property[] = [
  {
    id: "1",
    title: "Lekki Garden Apartments",
    location: "Lekki Phase 1, Lagos",
    city: "lagos",
    category: "residential",
    yieldRate: "8.5%",
    minInvest: "₦50,000",
    fundedPercent: 72,
    totalValuation: "₦120,000,000",
    gradientA: "#1f5c4e",
    gradientB: "#7fb5a0",
  },
  {
    id: "2",
    title: "Rumuola Office Plaza",
    location: "Rumuola, Port Harcourt",
    city: "port-harcourt",
    category: "commercial",
    yieldRate: "9.2%",
    minInvest: "₦100,000",
    fundedPercent: 45,
    totalValuation: "₦250,000,000",
    gradientA: "#c98b4b",
    gradientB: "#f0cf9a",
  },
  {
    id: "3",
    title: "Epe Growth Corridor Plots",
    location: "Epe, Lagos",
    city: "lagos",
    category: "land",
    yieldRate: "15.0% (Appreciation)",
    minInvest: "₦75,000",
    fundedPercent: 88,
    totalValuation: "₦85,000,000",
    gradientA: "#3d6b3a",
    gradientB: "#b7d4a0",
  },
  {
    id: "4",
    title: "Trans-Amadi Townhouses",
    location: "Trans-Amadi, Port Harcourt",
    city: "port-harcourt",
    category: "residential",
    yieldRate: "7.8%",
    minInvest: "₦50,000",
    fundedPercent: 31,
    totalValuation: "₦180,000,000",
    gradientA: "#6a4c93",
    gradientB: "#c9b6e4",
  },
  {
    id: "5",
    title: "Victoria Island Luxury Suites",
    location: "Victoria Island, Lagos",
    city: "lagos",
    category: "residential",
    yieldRate: "10.1%",
    minInvest: "₦150,000",
    fundedPercent: 64,
    totalValuation: "₦450,000,000",
    gradientA: "#2b4c7e",
    gradientB: "#688bbd",
  },
  {
    id: "6",
    title: "GRA Phase 2 Commercial Hub",
    location: "GRA Phase 2, Port Harcourt",
    city: "port-harcourt",
    category: "commercial",
    yieldRate: "8.9%",
    minInvest: "₦100,000",
    fundedPercent: 92,
    totalValuation: "₦310,000,000",
    gradientA: "#9e472a",
    gradientB: "#e39a82",
  },
];

export default function PropertiesPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [cityFilter, setCityFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProperties = PROPERTIES.filter((prop) => {
    const matchesCategory = categoryFilter === "all" || prop.category === categoryFilter;
    const matchesCity = cityFilter === "all" || prop.city === cityFilter;
    const matchesSearch =
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesCity && matchesSearch;
  });

  return (
    <>
      <SiteNav />

      {/* HEADER SECTION */}
      <section className="py-12 bg-[#f2ecdd] border-b border-[#e6e0d3]">
        <div className="max-w-[1120px] mx-auto px-5">
          <span className="inline-block bg-[#efe6d1] text-[#16443a] px-4 py-1.5 rounded-full text-[0.85rem] font-bold mb-3">
            Investment Catalog
          </span>
          <h1 className="font-['Fraunces'] text-3xl md:text-5xl text-[#0f2f29] mb-3">
            Explore Fractional Properties
          </h1>
          <p className="text-[#667570] max-w-2xl text-base md:text-lg">
            Browse through legally verified real estate assets across high-growth corridors in Nigeria. Filter by category, location, or search specifically.
          </p>
        </div>
      </section>

      {/* CONTROLS & FILTER BAR */}
      <section className="py-8 bg-[#fbf8f2]">
        <div className="max-w-[1120px] mx-auto px-5">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            {/* SEARCH INPUT */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search by property name or neighborhood..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-3 rounded-full border border-[#e6e0d3] bg-white text-sm focus:outline-none focus:border-[#1f5c4e] transition-all"
              />
            </div>

            {/* CITY SELECTOR */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#667570] whitespace-nowrap">City:</span>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="px-4 py-2.5 rounded-full border border-[#e6e0d3] bg-white text-sm font-medium text-[#1b2623] focus:outline-none focus:border-[#1f5c4e] transition-all cursor-pointer"
              >
                <option value="all">All Cities</option>
                <option value="lagos">Lagos</option>
                <option value="port-harcourt">Port Harcourt</option>
              </select>
            </div>
          </div>

          {/* CATEGORY CHIPS */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[
              { label: "All Properties", value: "all" },
              { label: "Residential", value: "residential" },
              { label: "Commercial", value: "commercial" },
              { label: "Land & Plots", value: "land" },
            ].map((chip) => (
              <button
                key={chip.value}
                onClick={() => setCategoryFilter(chip.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap border ${
                  categoryFilter === chip.value
                    ? "bg-[#16443a] text-white border-[#16443a]"
                    : "bg-white text-[#1b2623] border-[#e6e0d3] hover:border-[#1f5c4e]"
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY GRID */}
      <section className="pb-24 bg-[#fbf8f2]">
        <div className="max-w-[1120px] mx-auto px-5">
          {filteredProperties.length === 0 ? (
            <div className="bg-white rounded-3xl border border-[#e6e0d3] p-12 text-center max-w-lg mx-auto">
              <span className="text-4xl mb-3 block">🔍</span>
              <h3 className="font-['Fraunces'] text-xl text-[#0f2f29] mb-2">No properties matched</h3>
              <p className="text-sm text-[#667570] mb-6">
                Try adjusting your search terms or clearing selected category filters.
              </p>
              <button
                onClick={() => {
                  setCategoryFilter("all");
                  setCityFilter("all");
                  setSearchQuery("");
                }}
                className="bg-[#16443a] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#1f5c4e] transition-all cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((prop) => (
                <article
                  key={prop.id}
                  className="bg-white border border-[#e6e0d3] rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* CARD IMAGE CONTAINER */}
                  <div
                    className="h-44 relative p-4 flex items-start justify-between"
                    style={{
                      background: `linear-gradient(135deg, ${prop.gradientA}, ${prop.gradientB})`,
                    }}
                  >
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#16443a] capitalize">
                      {prop.category}
                    </span>
                    <span className="bg-[#0f2f29]/80 text-[#e9b872] px-3 py-1 rounded-full text-xs font-bold border border-[#e9b872]/20">
                      {prop.yieldRate}
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-['Fraunces'] text-xl text-[#0f2f29] mb-1">
                        {prop.title}
                      </h3>
                      <p className="text-sm text-[#667570] mb-4 flex items-center gap-1">
                        <span>📍</span> {prop.location}
                      </p>

                      <div className="grid grid-cols-2 gap-2 bg-[#fbf8f2] p-3 rounded-2xl mb-4 border border-[#e6e0d3]">
                        <div>
                          <span className="block text-[0.75rem] text-[#667570]">Min Buy-in</span>
                          <strong className="text-sm text-[#0f2f29] font-bold">{prop.minInvest}</strong>
                        </div>
                        <div>
                          <span className="block text-[0.75rem] text-[#667570]">Valuation</span>
                          <strong className="text-sm text-[#0f2f29] font-bold">{prop.totalValuation}</strong>
                        </div>
                      </div>

                      {/* PROGRESS BAR */}
                      <div className="space-y-1.5 mb-6">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-[#667570]">Funding status</span>
                          <span className="text-[#1f5c4e] font-bold">{prop.fundedPercent}%</span>
                        </div>
                        <div className="h-2 bg-[#ece6d6] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#e9b872] rounded-full transition-all duration-500"
                            style={{ width: `${prop.fundedPercent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`/properties/${prop.id}`}
                      className="block text-center bg-[#16443a] text-white py-3 rounded-2xl text-sm font-bold hover:bg-[#1f5c4e] transition-all"
                    >
                      View Property Details
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f2f29] text-[#9fb0aa] py-8 border-t border-white/10">
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