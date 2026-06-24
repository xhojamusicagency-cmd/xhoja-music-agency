// Fallback for when an EmailJS send fails.
//
// The site is a static SPA with no backend, so there is no server-side way to
// notify us when a submission fails to send (e.g. the EmailJS Gmail OAuth token
// expires, as it did in 2026). Without a fallback, a failed send is silent: the
// visitor sees an error and we never learn a lead was lost.
//
// This builds a `mailto:` link pre-filled with the visitor's details so a failed
// automated send becomes a one-click direct email instead. The lead still reaches
// us (and we find out the form is down). Contact fields should be passed first so
// they survive even if a long message hits a browser's mailto length cap.

const FALLBACK_EMAIL = 'xhojamusicagency@gmail.com';

export function buildLeadMailto(
  subject: string,
  fields: Record<string, string | undefined>,
): string {
  const body = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value.trim() !== '')
    .map(([label, value]) => `${label}: ${value}`)
    .join('\n');

  return `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
