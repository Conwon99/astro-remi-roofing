/**
 * Phone Number Configuration for Call Tracking
 * 
 * Canonical Number: Used in initial HTML and Schema.org (visible to search engines)
 * Tracking Number: Replaces canonical number after JavaScript loads (visible to users)
 */

export const PHONE_CONFIG = {
  // Canonical number - appears in Schema.org (visible to Google/search engines)
  canonical: {
    // E.164 format for Schema.org
    e164: "+447930951155",
    // Display format (not directly displayed, but kept for consistency)
    display: "+44 7930 951155",
    // Short format (without country code)
    short: "07930 951155",
  },
  // Tracking number - displayed to users and used for tel: links (for call tracking)
  tracking: {
    // E.164 format for tel: links
    e164: "+447427817924",
    // Display format for showing to users
    display: "+44 7427 817924",
    // Short format (without country code)
    short: "07427 817924",
  },
} as const;

