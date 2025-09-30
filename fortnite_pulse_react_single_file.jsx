import React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

// Fortnite-themed Pulse clone
// Single-file React component using Tailwind classes.
// Replace placeholder images with your own assets in /public or remote URLs.

export default function FortnitePulse() {
  const sampleCards = [
    { id: 1, title: "Battle Bus BTC", subtitle: "BTC - Battle Royale", img: "/images/bus.jpg", tag: "HOT" },
    { id: 2, title: "Loot Lake ETH", subtitle: "ETH - Zone Control", img: "/images/loot.jpg", tag: "NEW" },
    { id: 3, title: "Storm SOL", subtitle: "SOL - Storm Surge", img: "/images/storm.jpg", tag: "TREND" },
    { id: 4, title: "V-Bucks Vault", subtitle: "FNA - Cosmetics", img: "/images/vbucks.jpg", tag: "RARE" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#071029] to-[#061228] text-white font-sans">
      {/* Top nav */}
      <header className="backdrop-blur-sm bg-white/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center shadow-2xl">
                <span className="font-extrabold tracking-wider">FN</span>
              </div>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-200/90">
                <a className="hover:text-white transition">Discover</a>
                <a className="hover:text-white transition">Pulse</a>
                <a className="hover:text-white transition">Trackers</a>
                <a className="hover:text-white transition">Perpetuals</a>
                <a className="hover:text-white transition">Vision</a>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center bg-slate-800/40 border border-white/5 rounded-lg px-3 py-1.5 gap-2">
                <Search size={16} />
                <input
                  className="bg-transparent outline-none text-sm placeholder:text-slate-300/60"
                  placeholder="Search by token or island"
                />
              </div>
              <button className="bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-4 py-2 rounded-xl font-semibold shadow-lg hover:opacity-95">
                Connect
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Pulse header */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="lg:col-span-2 bg-gradient-to-br from-[#061228]/60 via-[#071029]/40 to-transparent rounded-2xl p-6 shadow-xl border border-white/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Pulse — Fortnite Edition</h1>
                <p className="mt-2 text-slate-300/80 max-w-xl">
                  Live map of tokens, islands and in-game events — styled like a Fortnite hub. Fast glints, vibrant cards, and playful animations.
                </p>
              </div>

              <div className="hidden md:flex flex-col items-end gap-2">
                <div className="text-right">
                  <div className="text-xs text-slate-300/70">Network</div>
                  <div className="font-medium">Battle Royale</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-300/70">Status</div>
                  <div className="font-medium text-emerald-300">Connected</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* small stat tiles */}
              {[
                { label: "Active Islands", value: "4" },
                { label: "Storm Events", value: "2" },
                { label: "Vaults", value: "7" },
                { label: "Players Nearby", value: "1.2k" },
              ].map((s, i) => (
                <div key={i} className="bg-white/3 rounded-lg p-3">
                  <div className="text-xs text-slate-300/80">{s.label}</div>
                  <div className="text-lg font-semibold mt-1">{s.value}</div>
                </div>
              ))}
            </div>

            {/* Card grid */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-slate-200/90 mb-3">Hot Islands</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sampleCards.map((c) => (
                  <motion.div
                    key={c.id}
                    whileHover={{ y: -6 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#0b1220] to-[#071229] border border-white/4"
                  >
                    <div className="absolute inset-0 opacity-30 bg-[url('/images/placeholder.jpg')] bg-cover bg-center" />
                    <div className="relative p-4 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-black font-bold">
                        <span className="text-sm">{c.title.split(' ')[0]}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">{c.title}</div>
                            <div className="text-xs text-slate-300/70">{c.subtitle}</div>
                          </div>
                          <div className="text-xs px-2 py-1 rounded-md bg-white/6">{c.tag}</div>
                        </div>
                        <div className="mt-3 text-sm text-slate-300/70">Quick snapshot — player density, loot score, and rotation heatmap.
                        </div>
                      </div>
                    </div>
                    <div className="p-3 border-t border-white/5 flex items-center justify-between text-xs">
                      <div>Loot: <span className="font-semibold">High</span></div>
                      <div>ETA: <span className="font-semibold">2m</span></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side column */}
          <aside className="space-y-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-gradient-to-b from-[#061228]/50 to-transparent rounded-2xl p-4 border border-white/3 shadow-lg">
              <h4 className="text-sm font-semibold">Live Events</h4>
              <ul className="mt-3 space-y-3">
                <li className="flex items-center justify-between">
                  <div className="text-sm">Supply Drop — Loot Lake</div>
                  <div className="text-xs text-slate-300/70">3m</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="text-sm">Vault Unlocked — V-Bucks Vault</div>
                  <div className="text-xs text-slate-300/70">6m</div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="text-sm">Storm Shift at North Ridge</div>
                  <div className="text-xs text-slate-300/70">—</div>
                </li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="bg-gradient-to-b from-[#081226]/40 to-transparent rounded-2xl p-4 border border-white/3 shadow-lg">
              <h4 className="text-sm font-semibold">Top Trackers</h4>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Battle Bus BTC</span>
                  <span className="text-xs text-slate-300/70">+3.2%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Loot Lake ETH</span>
                  <span className="text-xs text-slate-300/70">+1.1%</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="rounded-2xl p-4 border border-white/3 bg-white/1">
              <h4 className="text-sm font-semibold">Quick Actions</h4>
              <div className="mt-3 grid grid-cols-1 gap-2">
                <button className="py-2 rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] font-semibold">Create Tracker</button>
                <button className="py-2 rounded-lg border border-white/5">Import Island</button>
              </div>
            </motion.div>
          </aside>
        </section>

        {/* Footer area with small cards to mimic Axiom's 'pulse tiles' */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-xl p-4 bg-gradient-to-br from-[#071229] to-[#05121f] border border-white/4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">Island #{100 + i}</div>
                <div className="text-xs text-slate-300/70">Live</div>
              </div>
              <div className="mt-2 text-xs text-slate-300/70">Loot Score: {Math.floor(60 + i * 4)}</div>
            </div>
          ))}
        </section>
      </main>

      <footer className="text-center py-6 text-slate-300/70 text-sm">
        FortnitePulse • Mockup inspired by Axiom Pulse — replace images and data with your own game feeds.
      </footer>
    </div>
  );
}
