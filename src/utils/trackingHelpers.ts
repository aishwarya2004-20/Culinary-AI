import { trackPageView, trackEvent, identifyUser } from '../../analytics';
import { ANALYTICS_CONFIG } from '../ownanalyticsconfig';

// Generate a simple UUID for anonymous users
const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Get or create session ID
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('ws_session_id');
  if (!sessionId) {
    sessionId = generateUUID();
    sessionStorage.setItem('ws_session_id', sessionId);
  }
  return sessionId;
};

export const trackAppPageView = (pageName: string) => {
  trackPageView(pageName, {
    page_url: window.location.href,
    timestamp: Date.now()
  }).catch(() => {});
};

export const identifyAppUser = (userData?: { email?: string; name?: string; method?: string }) => {
  const userId = userData?.email ? ANALYTICS_CONFIG.VITE_ANALYTICS_USER_ID.toString() : getSessionId();
  identifyUser(userId, {
    userType: userData ? 'authenticated' : 'anonymous',
    ...userData,
    timestamp: Date.now()
  }).catch(() => {});
};

export const trackAppEvent = (eventName: string, properties: Record<string, any> = {}) => {
  trackEvent(eventName, {
    ...properties,
    page_url: window.location.href,
    timestamp: Date.now()
  }).catch(() => {});
};
