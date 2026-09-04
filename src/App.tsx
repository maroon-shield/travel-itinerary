import { Route, Routes } from "react-router-dom";
import DayView from "~/pages/DayView";
import Home from "~/pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/day-view" element={<DayView />} />
    </Routes>
  );
}

export default App;
