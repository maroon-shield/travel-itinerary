import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "~/auth/RequireAuth";
import DayView from "~/pages/DayView";
import Home from "~/pages/Home";
import NotFound from "~/pages/NotFound";
import ScheduleDetail from "~/pages/ScheduleDetail";
import ScheduleEdit from "~/pages/ScheduleEdit";

export default function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/day-view" element={<DayView />} />
        <Route path="/schedule/:id" element={<ScheduleDetail />} />
        <Route path="/schedule/:id/edit" element={<ScheduleEdit />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
