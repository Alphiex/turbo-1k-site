# Turbo 1k Challenge — Go-Live Checklist

## 1) Configure launch values
1. Edit `go-live-config.json`
   - `baseUrl` must be the final public URL
   - `contactEmail` must be inbox monitored for leads
   - channel list + campaign values must match planned distribution
2. Edit `offer-config.js`
   - keep `canonicalBaseUrl`, `contactEmail`, and `campaign` aligned with JSON config
   - add `backupWebhookUrl` only if endpoint is live

## 2) Generate distribution copy (tracked links)
```bash
node projects/turbo-1k-challenge/scripts/generate-distribution-copy.mjs
```
Output:
- `projects/turbo-1k-challenge/distribution-copy-go-live.md`

## 3) Run hardening verification
```bash
node projects/turbo-1k-challenge/scripts/verify-go-live.mjs
```
Checks include:
- no placeholder domain in launch config
- tracked UTM links exist for every configured channel
- runtime config is wired into landing page
- anti-bot + backup capture hooks are present in `offer-page.html`

## 4) Publish and smoke test
1. Deploy `offer-page.html` + `offer-config.js` to production path.
2. Open each tracked link from generated copy.
3. Confirm:
   - source chip updates correctly
   - submit opens prefilled email draft
   - lead body includes source/campaign/timestamp/page URL

## 5) First-hour execution tracking
- Post one launch message per channel from `distribution-copy-go-live.md`.
- Log first 10 leads with source in `progress-YYYY-MM-DD.md`.
- If email client/open behavior is flaky on device, enable `backupWebhookUrl` as immediate safety net.
