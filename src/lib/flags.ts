// Build-time switches for temporary campaigns. The site is static, so turning
// one on or off ships with the next deploy.
export const flags = {
  // Full-screen "few spots left" seagull alert on the home page.
  seagullAlert: true,
} as const;
