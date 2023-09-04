import { adalFetch, AuthenticationContext } from "react-adal";

export const adalConfig = {
  tenant: process.env.REACT_APP_TENANT_ID as string,
  clientId: process.env.REACT_APP_CLIENT_ID as string,
  endpoints: {
    api: `api://${process.env.REACT_APP_CLIENT_ID}`,
  },
  cacheLocation: "localStorage" as const,
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch: any, url: string, options?: any) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);
