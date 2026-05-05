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

## Status snapshot (2026-05-04)
- Repo: github.com/Alphiex/turbo-1k-site
- Stack: Static HTML + JS landing page (no framework yet)
- Last commit: proof-first redesign
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

## Next 3 deliverables (in order)
1. **Set up tracking infrastructure** — single source-of-truth ledger (SQLite +
   tiny dashboard, or Google Sheet via API) that tracks per-stream income,
   time-spent, and $/hour. Without this, the day-30 pivot rule can't be
   enforced.
2. **Launch service-arbitrage stream** — Upwork or Fiverr profile, 3 posted
   gigs, first $1 of revenue captured to validate the loop end-to-end. Profile
   leverages Claude Code as the labor source (positioning: AI-augmented
   developer-for-hire, code reviews, SEO audits, custom scripts).
3. **Ship one micro-SaaS** — domain, Vercel deploy, $5/mo Stripe checkout,
   Reddit/Indie Hackers launch post. First paying user is the milestone, even
   if it's $5. Niche selection: agent picks based on Reddit/IH problem
   listening unless Mike specifies.

## Realistic timing
- Month 1-2: setup + early gigs ($50-300/mo)
- Month 3-4: service flow + first SaaS users ($300-700/mo)
- Month 5-6: compounding ($700-1500/mo)

The cron loop reports progress against this curve, not "1k by week 4."

## Blocked / decisions needed from Mike
- Persona: agent posts publicly under your name (Twitter, Upwork bio, Reddit
  IH) OR anonymous personas? Affects launch strategy substantially.
- Stripe / PayPal / payment processor preference for SaaS billing
- Affiliate content niche — let agent pick, or specify (golf? AI tools?
  React Native?)

## Delivery rules
- Use Claude Code via ACPX for all dev work; `frontend-design` skill for any UI
- Commit per deliverable; PR to main; push to origin
- Update this file's "Done" + "Next 3" each cycle
- Telegram topic 123 is the only output channel — no email, no other Telegram
  topics, no Twitter unless specifically authorized as a stream
