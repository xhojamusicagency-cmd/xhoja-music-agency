import { useEffect } from 'react';

const BASE_TITLE = 'Xhoja Music Agency';

export default function usePageTitle(pageTitle?: string) {
  useEffect(() => {
    document.title = pageTitle
      ? `${pageTitle} | ${BASE_TITLE}`
      : `${BASE_TITLE} | Music Lessons & Event Bookings in Boston`;
  }, [pageTitle]);
}
