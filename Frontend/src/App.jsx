import DetailPage from "./components/DetailPage";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="w-full min-h-screen bg-black pb-12 overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
