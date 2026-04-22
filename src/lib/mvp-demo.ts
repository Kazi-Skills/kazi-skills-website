/**
 * Web build of the Expo MVP (e.g. Heroku). Override in `.env.local` if needed.
 */
export const MVP_DEMO_URL =
  process.env.NEXT_PUBLIC_MVP_DEMO_URL ??
  "https://kazi-skills-e8d8786121a7.herokuapp.com";

export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
