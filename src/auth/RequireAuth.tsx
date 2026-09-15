import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LoadingSpinner } from "~/components/LoadingSpinner";

export function RequireAuth() {
  const { error, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !error && !isAuthenticated) {
      loginWithRedirect({
        appState: {
          returnTo: `${location.pathname}${location.search}${location.hash}`,
        },
      });
    }
  }, [isLoading, error, isAuthenticated, loginWithRedirect, location]);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      key={location.pathname}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {isLoading || (!error && !isAuthenticated) ? (
        <LoadingSpinner />
      ) : error ? (
        <main className="bg-paper text-ink mx-auto flex min-h-screen max-w-md items-center justify-center font-thin">
          <div>
            <p className="text-muted text-xs tracking-[0.2em]">ERROR</p>
            <h1 className="mt-4 text-2xl">Something went wrong.</h1>
            <p className="text-muted mt-3 text-sm">{error.message}</p>
          </div>
        </main>
      ) : (
        <Outlet />
      )}
    </motion.div>
  );
}
