import { Auth0Provider, type AppState } from "@auth0/auth0-react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

export function Auth0ProviderWithNavigate({
  children,
}: {
  children: ReactNode;
}) {
  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo ?? window.location.pathname);
  };

  return (
    <Auth0Provider
      authorizationParams={{ redirect_uri: window.location.origin }}
      cacheLocation="localstorage"
      clientId={clientId}
      domain={domain}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
}
