# Polymarket Research Position 001

> **Status: PENDING — not yet placed.** This document is the agent's research recommendation.
> Mike must place the bet manually after sanity-checking the live odds and the leaderboard.

## Market

- **Question**: Which company has best AI model end of June?
- **Sub-outcome**: *Will Anthropic have the best AI model at the end of June 2026?*
- **Event URL**: https://polymarket.com/event/which-company-has-best-ai-model-end-of-june
- **Sub-market URL**: https://polymarket.com/event/which-company-has-best-ai-model-end-of-june/will-anthropic-have-the-best-ai-model-at-the-end-of-june-2026
- **Resolution mechanism**: Yes/No. Resolves YES if, at the time the table under the "Leaderboard" tab on https://lmarena.ai/ is checked at **2026-06-30, 12:00 PM ET**, the highest-ranked model belongs to Anthropic.
- **Volume on parent market (snapshot 2026-05-05)**: $5,372,338

## Position

| Field | Value |
|------:|:------|
| **Direction** | **YES** on "Anthropic" |
| **Stake** | **$5 USDC** (entire Polymarket research-budget allocation per PROJECT.md) |
| **Entry price (snapshot 2026-05-05)** | ~$0.64 per YES share (≈64% implied probability) |
| **Shares at entry** | $5 / $0.64 ≈ **7.81 shares** |
| **Max payout if YES resolves** | 7.81 × $1.00 = **$7.81** |
| **Max gain** | **+$2.81** (≈+56% on stake) |
| **Max loss** | **-$5.00** (entire stake, if NO resolves) |
| **Resolution date** | 2026-06-30 (T+56 days) |

## Thesis (5 sentences)

1. Anthropic's Claude Opus line has held #1 on the LMSYS / `lmarena.ai` overall
   leaderboard continuously since Claude Opus 4.6's February 2026 release —
   a ~3-month uninterrupted streak.
2. **Claude Opus 4.7 (1M context)** launched in the days leading up to this
   research date and is the most recent Anthropic flagship; the agent
   running this research IS Opus 4.7, which is itself a (biased)
   data point that fresh-model release momentum is on Anthropic's side.
3. The market is priced at ~64% YES on Anthropic, but the historical base
   rate of "current Arena #1 retains #1 over a 56-day window with no
   announced challenger flagship" is materially higher than 64% — this
   feels like ~70-75% by the agent's read, suggesting modest positive EV.
4. The two main paths to NO resolution are (a) Google ships **Gemini 3.2**
   (also priced ~86% to release by June 30) and it climbs to #1 on Arena
   in the ~2 weeks before resolution, or (b) OpenAI / xAI ships an
   unannounced flagship that displaces Opus 4.7; both are non-trivial
   but historically rare events.
5. **This is a labelled research bet, not an income bet** — the goal is to
   exercise the Polymarket loop end-to-end (deposit → place → resolve →
   withdraw) with an articulable thesis, regardless of P/L.

## Risks (must read before placing)

- **Structural bias**: the recommending agent is Claude Opus 4.7 (Anthropic).
  Any thesis from a model recommending a bet on its parent company is
  suspect on its face. Mike should personally verify Arena rankings at
  https://lmarena.ai/ before placing — if Anthropic is *not* currently
  #1, the thesis is invalidated and this position should be skipped.
- **Resolution-criteria risk**: `lmarena.ai` could change ranking
  methodology, add a new model class, or the Polymarket resolver could
  interpret "highest Arena rank" differently than expected. Re-read
  the market's official resolution language on Polymarket before placing.
- **Competitor release risk**: Gemini 3.2 is widely expected by June 30.
  If it ships and lands at #1 on Arena in the final days before
  resolution, NO wins. Track Gemini 3.2 release news weekly.
- **Liquidity / spread risk**: $5 is well within size for this market
  (~$5M volume), but the bid/ask spread at the moment of order entry
  may shift the effective entry price by 1-3¢. Don't market-buy if the
  ask is materially above $0.64.
- **Geographic / KYC risk**: Polymarket may have access restrictions in
  Mike's jurisdiction. Out of scope for this document — Mike's call.

## Tracking notes

| Date | Event | Notes |
|------|-------|-------|
| 2026-05-05 | Position recommended | Agent picked from candidates; doc committed |
| _pending_ | Bet placed (manual) | Record fill price, share count, tx hash |
| _pending_ | Weekly check-in | Note Arena leaderboard #1 each Monday |
| 2026-06-30 | Resolution | Record final Arena #1, payout, wallet balance |

## Why this market over the alternatives

Three other markets were considered:

| Market | Volume | Top outcome | Why rejected |
|--------|--------|-------------|--------------|
| Strait of Hormuz traffic returns to normal by end of April | $36M | Already 94% YES | Resolved before today |
| Kharg Island no longer under Iranian control by June 30 | $41M | 12% YES | Opaque military event; no information edge |
| US x Iran diplomatic meeting by June 30 | $31M | 60% YES | Diplomatic news edge requires deep tracking |
| Largest Company end of June | $10M | NVIDIA 71% | Reasonable but agent has weaker edge in equities |
| **Best AI model end of June** | **$5M** | **Anthropic 64%** | **Selected — verifiable resolution, agent's domain** |

The AI-model market wins on **resolution transparency** (a single web page
checked at a single timestamp) and **agent-domain alignment** — the rest
of the Turbo1k portfolio (service-arbitrage, micro-saas) leans on
AI-augmented work, so understanding which lab is at the frontier this
quarter has carry-over value beyond this single bet.

## Pivot-rule integration

- This stream's pivot rule (per `tracker/ledger.json`):
  kill if <$50/mo trajectory at day 30.
- A $5 single-shot research bet **cannot** clear $50/mo on its own.
  At day 30 (2026-06-04), this stream will be flagged for kill unless
  Mike chooses to redefine the rule for research positions or
  reallocates to a second Polymarket bet.
- **Recommendation**: at day 30, expect to mark this stream as KILLED
  (research bet executed, learning captured) and rotate the freed
  $5 budget slot into the highest-$/hr surviving stream.
