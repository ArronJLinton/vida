import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID;

const Analytics = () => {
  const { pathname } = useLocation();
  const didInit = useRef(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production' || !gaTrackingId) {
      return;
    }

    if (!didInit.current) {
      ReactGA.initialize(gaTrackingId);
      didInit.current = true;
    }

    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
  }, [pathname]);

  return null;
};

export default Analytics;
