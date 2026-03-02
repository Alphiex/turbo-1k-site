window.TURBO_1K_CONFIG = {
  // Use the fully-qualified production URL for launch posts.
  // If omitted, the page auto-detects the current URL.
  canonicalBaseUrl: "https://kiddio.fun/turbo-1k/offer-page.html",

  // Destination for captured lead emails.
  contactEmail: "mike@kiddio.fun",

  // Campaign naming for source tracking.
  campaign: "turbo_1k_challenge",

  // Optional webhook endpoint (Formspree/Zapier/custom) for backup capture.
  // Leave blank to disable direct webhook submission.
  backupWebhookUrl: "",

  // Allowed inbound source tags. Unknown values are normalized to "direct".
  allowedSources: ["direct", "x", "linkedin", "reddit", "telegram", "email"]
};
