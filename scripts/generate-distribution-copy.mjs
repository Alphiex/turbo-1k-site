#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const projectDir = path.resolve(process.cwd(), 'projects/turbo-1k-challenge');
const configPath = process.argv[2]
  ? path.resolve(process.cwd(), process.argv[2])
  : path.join(projectDir, 'go-live-config.json');
const outputPath = process.argv[3]
  ? path.resolve(process.cwd(), process.argv[3])
  : path.join(projectDir, 'distribution-copy-go-live.md');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const ensureNoPlaceholder = (value, fieldName) => {
  if (!value || String(value).includes('YOUR-DOMAIN')) {
    throw new Error(`Invalid ${fieldName}: ${value}`);
  }
};

ensureNoPlaceholder(config.baseUrl, 'baseUrl');
ensureNoPlaceholder(config.contactEmail, 'contactEmail');

const trackedUrl = ({ source, medium }) => {
  const url = new URL(config.baseUrl);
  url.searchParams.set('src', source);
  url.searchParams.set('utm_source', source);
  url.searchParams.set('utm_medium', medium || 'social');
  url.searchParams.set('utm_campaign', config.campaign || 'turbo_1k_challenge');
  return url.toString();
};

const links = Object.fromEntries(
  (config.channels || []).map((channel) => [
    channel.id,
    trackedUrl({ source: channel.id, medium: channel.utmMedium })
  ])
);

const markdown = `# Distribution Copy — Go Live\n\nGenerated: ${new Date().toISOString()}\n\nBase URL: \`${config.baseUrl}\`\nContact: \`${config.contactEmail}\`\nCampaign: \`${config.campaign}\`\n\n## Tracked links\n${Object.entries(links)
  .map(([id, url]) => `- ${id}: \`${url}\``)
  .join('\n')}\n\n## X / Twitter\nI’m opening early access for **Turbo AI Ops Starter**.\n\nEvery week you get:\n- one action brief\n- 3 copy/paste automation templates\n- KPI tracker so you can measure what actually moves revenue\n\nFounding price: **$19/mo** for first 50 users.\n\nJoin here: ${links.x || config.baseUrl}\n\n## LinkedIn\nI just launched early access for **Turbo AI Ops Starter** — a practical weekly pack for operators and builders who want to ship with AI, not just read about it.\n\nIncluded each week:\n1. prioritized execution brief\n2. 3 reusable automations\n3. KPI tracker for growth and ops\n\nFounding price is **$19/mo** for first 50 users.\n\nDetails: ${links.linkedin || config.baseUrl}\n\n## Reddit\nI’m testing an offer for founders/operators who want practical AI automation without fluff.\n\nIncludes:\n- weekly action brief\n- 3 templates you can run immediately\n- KPI tracker for outputs/outcomes\n\nFounding price is $19/mo for first 50 users.\n\nWould love feedback on positioning and pain points too.\n\nLink: ${links.reddit || config.baseUrl}\n\n## Telegram\nTurbo AI Ops Starter early access is live.\n\nWhat’s inside every week:\n- clear execution brief\n- 3 automation templates\n- KPI tracker\n\nFounding price: $19/mo (first 50 users).\n\nJoin: ${links.telegram || config.baseUrl}\n`;

fs.writeFileSync(outputPath, markdown);
console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);
