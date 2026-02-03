import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Box } from "@mui/material";


import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import StudentLife from "./pages/StudentLife";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ flex: 1 }}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Box>

      <Footer />
    </BrowserRouter>
  );
}
