import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { motion } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import DayView from "~/pages/DayView";
import Home from "~/pages/Home";
import ScheduleDetail from "~/pages/ScheduleDetail";
import ScheduleEdit from "~/pages/ScheduleEdit";

function App() {
  const { error, isLoading } = useAuth0();
  const location = useLocation();

  return (
    <Fade key={location.pathname}>
      {isLoading ? (
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day-view" element={<DayView />} />
          <Route path="/schedule/:id" element={<ScheduleDetail />} />
          <Route path="/schedule/:id/edit" element={<ScheduleEdit />} />
        </Routes>
      )}
    </Fade>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => (
    <Fade>
      <LoadingSpinner />
    </Fade>
  ),
});

function Fade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
