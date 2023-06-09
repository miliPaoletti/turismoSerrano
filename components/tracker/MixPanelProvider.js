import mixpanel, { Config } from "mixpanel-browser";

import { Provider } from "./context/mixpanel";

const defaults = {
  track_pageview: false, // Rarely makes sense to track page views in React apps
};

export const MixpanelProvider = ({ children, config, token }) => {
  config = Object.assign({}, defaults, config);
  mixpanel.init(token, config);

  return <Provider value={mixpanel}>{children}</Provider>;
};
