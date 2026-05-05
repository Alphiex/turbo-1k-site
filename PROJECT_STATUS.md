# Project: Turbo1k

## Vision
A portfolio of 3-5 concurrent low-capital experiments that compound toward
$1k/mo recurring income within 6 months from a $50 research budget. Initial
streams: AI-leveraged service arbitrage (Upwork/Fiverr/Twitter), micro-SaaS
shipped via Claude Code, affiliate/SEO content, and one Polymarket research
position. Pivot rules: kill any stream under $50/mo trajectory at day 30,
reallocate to top-performing $/hour stream. NO illegal activity, NO capital
concentration in one stream, NO sports betting (lives under CGO), and NO
emailing people (existing project rule).

## Status snapshot (2026-05-05)
- Repo: github.com/Alphiex/turbo-1k-site
- Stack: Static HTML + JS landing page (no framework yet)
- Last commit: 98e9e4f — Polymarket research position 001
- Telegram topic: 123 (only output channel — NO email per project rules)

## Initial $50 research-budget allocation
- $20 → service-arbitrage tooling (Upwork connects, profile setup, $X targeted Twitter post boost)
- $15 → micro-SaaS hosting & domain (Vercel + Cloudflare cheap domain for first product)
- $10 → content/SEO infrastructure (analytics, hosting if not free tier)
- $5 → 1 Polymarket research position (treat as a labeled research bet, not income)

## Pivot rules (the agent enforces)
- Track each stream's $/hour ratio + total $/mo in single-source-of-truth ledger
- Kill any stream with <$50/mo trajectory at day 30
- Reallocate killed budget to highest $/hour stream
- New experiment slot opens whenever a stream is killed
- Daily report: "experiments running, MTD revenue, active spend, kills/promotions, next experiment in queue"

## Done
- [x] Production landing page redesign (proof-first)
- [x] Offer page (offer-page.html)
- [x] Distribution copy drafts (go-live + 2026-03-02)
- [x] Go-live checklist + config
- [x] Sample copy + sample artifacts
- [x] **Tracking infrastructure** — `tracker/` dir: ledger.json (3 streams), dashboard.html, update-ledger.js CLI, ledger.js helper, README.md — commit `2e502e7` (2026-05-05)
- [x] **Polymarket research position 001** — `polymarket/research-position-001.md` + ledger stream added; market: "Will Anthropic have the best AI model at end of June 2026?" YES @ $0.64, $5 stake, resolves 2026-06-30. **PENDING BET — Mike must place manually** (see doc for bias warnings + risks). Commit `98e9e4f` (2026-05-05)

## Next 3 deliverables (in order)
1. **Launch service-arbitrage stream** ⚠️ BLOCKED — requires persona decision (see Blocked section below). Upwork or Fiverr profile, 3 posted gigs, first $1 of revenue captured to validate the loop end-to-end. Profile leverages Claude Code as the labor source (positioning: AI-augmented developer-for-hire, code reviews, SEO audits, custom scripts).
2. **Ship one micro-SaaS** ⚠️ BLOCKED — requires Stripe/PayPal decision and niche decision (see Blocked section). Domain, Vercel deploy, $5/mo Stripe checkout, Reddit/Indie Hackers launch post. First paying user is the milestone, even if it's $5.
3. **Place the Polymarket bet** — Mike manually places $5 USDC on Polymarket (see `polymarket/research-position-001.md`). After confirmed, update ledger entry with tx hash + fill price. Mark polymarket stream status → 'active'. Agent will track weekly until 2026-06-30 resolution.

## Realistic timing
- Month 1-2: setup + early gigs ($50-300/mo)
- Month 3-4: service flow + first SaaS users ($300-700/mo)
- Month 5-6: compounding ($700-1500/mo)

The cron loop reports progress against this curve, not "1k by week 4."

## Blocked / decisions needed from Mike
- **PERSONA** (blocks deliverable 1 — service-arbitrage launch): Agent posts publicly under your name (Twitter, Upwork bio, Reddit IH) OR anonymous personas? Affects launch strategy substantially.
- **PAYMENT PROCESSOR** (blocks deliverable 2 — micro-SaaS): Stripe / PayPal / other preference for SaaS billing?
- **AFFILIATE NICHE** (blocks deliverable 2 — micro-SaaS niche selection): Let agent pick based on Reddit/IH problem listening, or specify (golf? AI tools? React Native?)
- **POLYMARKET BET** (deliverable 3 — action item for Mike): Place $5 USDC on "Will Anthropic have best AI model end of June 2026?" YES @ ~$0.64. Read bias warnings in `polymarket/research-position-001.md` first. Verify Anthropic is currently #1 on lmarena.ai before placing.

## Delivery rules
- Use Claude Code via ACPX for all dev work; `frontend-design` skill for any UI
- Commit per deliverable; PR to main; push to origin
- Update this file's "Done" + "Next 3" each cycle
- Telegram topic 123 is the only output channel — no email, no other Telegram
  topics, no Twitter unless specifically authorized as a stream
