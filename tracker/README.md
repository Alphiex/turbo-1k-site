# Turbo1k Stream Ledger

A single source-of-truth ledger for the Turbo1k portfolio of income
experiments. Tracks per-stream income, time-spent, and $/hour so the
day-30 pivot rule can be enforced.

## Files

| File | Purpose |
|------|---------|
| `ledger.json`   | Canonical data — list of streams, each with entries + pivot rule. |
| `ledger.js`     | Auto-generated `window.LEDGER_DATA = …` shim so `dashboard.html` works without a local server (`file://` viewing). Rewritten on every CLI mutation. |
| `dashboard.html`| Standalone single-file dashboard. Open directly or serve via GitHub Pages. |
| `update-ledger.js` | Node.js CLI for adding entries and managing stream status. No external dependencies. |

## Data model

Each stream:

```json
{
  "id": "service-arbitrage",
  "name": "Service Arbitrage (Upwork/Fiverr)",
  "status": "active",            // or "killed"
  "started": "2026-05-05",
  "pivot_rule": {
    "min_monthly_revenue_usd": 50,
    "evaluate_after_days": 30,
    "action_if_below": "kill"
  },
  "entries": [
    { "date": "2026-05-05", "income_usd": 0, "time_hours": 0, "notes": "initial" }
  ]
}
```

## CLI usage

All commands are run from the `tracker/` directory.

### Add an entry

```bash
node update-ledger.js add \
  --stream service-arbitrage \
  --date 2026-05-05 \
  --income 0 \
  --hours 0 \
  --notes "initial"
```

Entries are kept sorted by date inside each stream.

### List

```bash
node update-ledger.js list                          # all streams
node update-ledger.js list --stream micro-saas      # one stream
```

### Kill / revive

```bash
node update-ledger.js kill   --stream polymarket-research --reason "below trajectory"
node update-ledger.js revive --stream polymarket-research
```

### Lifetime summary

```bash
node update-ledger.js summary
```

## Dashboard

- **Locally**: `python3 -m http.server` from `tracker/`, then open
  `http://localhost:8000/dashboard.html`. (Or just open
  `dashboard.html` directly — the `ledger.js` shim makes `file://`
  work, though the freshest data on GitHub Pages always comes from
  `ledger.json`.)
- **GitHub Pages**: `dashboard.html` works as-is from any path that
  serves `ledger.json` alongside it.

The dashboard renders one row per stream:

| Column | Meaning |
|--------|---------|
| MTD revenue | Sum of `income_usd` for entries in the current calendar month |
| MTD hours   | Sum of `time_hours` for entries in the current calendar month |
| $/hr        | MTD revenue ÷ MTD hours (blank if 0 hours) |
| 30-day trajectory | If ≥ 30 days of history: literal sum over last 30 days. Otherwise: lifetime income scaled by 30 ÷ days_active (shown as `(proj. day N)`). |
| Action      | Decision under the stream's `pivot_rule` |

### Action thresholds

For an active stream evaluated against `min_monthly_revenue_usd = MIN` after `evaluate_after_days = D`:

- Day < D/2 → 🔬 OBSERVING
- D/2 ≤ Day < D → ⚠️ AT RISK if trajectory < MIN/2; 📈 ON TRACK if trajectory ≥ MIN; otherwise 🔬 OBSERVING
- Day ≥ D → 💀 KILL if trajectory < MIN; otherwise ✅ KEEP

A killed stream just shows 💀 KILLED.

## Pivot workflow

1. Add daily entries via the CLI.
2. Open the dashboard whenever a decision is needed.
3. Around day 30 of each stream, the action column will say **KILL** or **KEEP**.
4. Run `node update-ledger.js kill --stream ID --reason "…"` to record the decision.
5. Reallocate the killed stream's budget to the highest $/hr surviving stream and seed a new experiment in `ledger.json` (manual edit — add a new stream object).
