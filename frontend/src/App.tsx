import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { HistoryPage } from "./components/HistoryPage";
import { RecordPage } from "./components/RecordPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/record" element={<RecordPage />}></Route>
        <Route path="/history" element={<HistoryPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
