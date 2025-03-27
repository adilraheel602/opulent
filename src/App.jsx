import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogPage from "./components/BlogPage";
import CursorFollower from "./components/CursorFollower";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function Layout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {/* Show Navbar and ImageSlider only if NOT on the Login page */}
      {!isLoginPage && (
        <div className="relative w-full h-[100vh] overflow-hidden">
          <ImageSlider />
          <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/20 to-transparent">
            <Navbar />
          </div>
        </div>
      )}

      {/* Cursor Follower (optional, keep if needed) */}
      {!isLoginPage && <CursorFollower />}

      {/* Page Content */}
      <main
        className={`relative z-10 ${
          isLoginPage
            ? "w-screen h-screen flex items-center justify-center bg-white"
            : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen"
        }`}
      >
        <div
          className={`${
            isLoginPage
              ? "w-full h-full flex items-center justify-center"
              : "backdrop-blur-sm bg-white/70 dark:bg-gray-900/70 rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs/:blogId" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
