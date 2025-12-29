import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Software from "./pages/Software";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Photography />} />
        <Route path="/dev" element={<Software />} />
      </Routes>
    </BrowserRouter>
  );
}
