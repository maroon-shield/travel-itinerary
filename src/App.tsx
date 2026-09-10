import { Route, Routes } from "react-router-dom";
import DayView from "~/pages/DayView";
import Home from "~/pages/Home";
import ScheduleDetail from "~/pages/ScheduleDetail";
import ScheduleEdit from "~/pages/ScheduleEdit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day-view" element={<DayView />} />
      <Route path="/schedule/:id" element={<ScheduleDetail />} />
      <Route path="/schedule/:id/edit" element={<ScheduleEdit />} />
    </Routes>
  );
}

export default App;
