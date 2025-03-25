import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogPage from "./components/BlogPage";
import CursorFollower from "./components/CursorFollower";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Background Image Slider */}
      <div className="relative w-full">
        <ImageSlider />
        <Navbar />
      </div>

      {/* Cursor Follower */}
      <CursorFollower />

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:blogId" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
