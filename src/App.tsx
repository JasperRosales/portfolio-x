import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";

function AppContent() {
  return (
    <div className="min-h-screen text-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none"></div>

      <Navigation />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export function App() {
  return <AppContent />;
}

export default App;
