#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const projectDir = path.resolve(root, 'projects/turbo-1k-challenge');
const configPath = path.join(projectDir, 'go-live-config.json');
const landingPath = path.join(projectDir, 'offer-page.html');
const copyPath = path.join(projectDir, 'distribution-copy-go-live.md');
const runtimeConfigPath = path.join(projectDir, 'offer-config.js');

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const landing = fs.readFileSync(landingPath, 'utf8');
const copy = fs.readFileSync(copyPath, 'utf8');
const runtimeConfig = fs.readFileSync(runtimeConfigPath, 'utf8');

const failures = [];

const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

assert(config.baseUrl && !config.baseUrl.includes('YOUR-DOMAIN'), 'go-live-config.json baseUrl must be concrete (no placeholder).');
assert(config.contactEmail && config.contactEmail.includes('@'), 'go-live-config.json contactEmail must be set.');
assert(/^https?:\/\//.test(config.baseUrl), 'go-live-config.json baseUrl must be absolute URL.');

assert(runtimeConfig.includes('window.TURBO_1K_CONFIG'), 'offer-config.js must define window.TURBO_1K_CONFIG.');
assert(runtimeConfig.includes(config.contactEmail), 'offer-config.js should contain the configured contact email.');

assert(landing.includes('<script src="./offer-config.js"></script>'), 'offer-page.html must load offer-config.js.');
assert(landing.includes('id="website"'), 'offer-page.html must include hidden honeypot field.');
assert(landing.includes('backupWebhookUrl'), 'offer-page.html must include backup webhook submission path.');
assert(!landing.includes('YOUR-DOMAIN'), 'offer-page.html still contains YOUR-DOMAIN placeholder.');

for (const channel of config.channels || []) {
  const expectedBits = [`utm_source=${channel.id}`, `src=${channel.id}`, `utm_campaign=${config.campaign}`];
  for (const bit of expectedBits) {
    assert(copy.includes(bit), `distribution-copy-go-live.md missing ${bit} for ${channel.id}.`);
  }
}

if (failures.length > 0) {
  console.error('Go-live verification failed:');
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log('Go-live verification passed.');
console.log(`Verified files:`);
console.log(`- ${path.relative(root, configPath)}`);
console.log(`- ${path.relative(root, runtimeConfigPath)}`);
console.log(`- ${path.relative(root, landingPath)}`);
console.log(`- ${path.relative(root, copyPath)}`);
