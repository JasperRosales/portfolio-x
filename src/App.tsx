import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Project from "./pages/projects";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import {
  VscHome,
  VscAccount,
  VscCallIncoming,
  VscFolderOpened,
} from "react-icons/vsc";
import Dock from "./components/dock";
import { useSound } from "./hooks/useSound";
import PageTransition from "./components/PageTransition";
import { useState, useCallback, useEffect } from "react";

interface TransitionCoords {
  x: number;
  y: number;
}

interface LocationState {
  transitionCoords?: TransitionCoords;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { playSound } = useSound("/finger-snap.mp3");
  const [transitionCoords, setTransitionCoords] = useState<TransitionCoords | null>(null);

  useEffect(() => {
    const state = location.state as LocationState;
    if (state?.transitionCoords) {
      setTransitionCoords(state.transitionCoords);
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  const handleNavigation = useCallback((path: string, x: number, y: number) => {
    playSound();
    navigate(path, { state: { transitionCoords: { x, y } } });
  }, [navigate, playSound]);

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: (x: number, y: number) => handleNavigation("/", x, y),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About",
      onClick: (x: number, y: number) => handleNavigation("/about", x, y),
    },
    {
      icon: <VscFolderOpened size={18} />,
      label: "Portfolio",
      onClick: (x: number, y: number) => handleNavigation("/portfolio", x, y),
    },
    {
      icon: <VscCallIncoming size={18} />,
      label: "Contact",
      onClick: (x: number, y: number) => handleNavigation("/contact", x, y),
    },
  ];

  return (
    <>
      <PageTransition
        transitionCoords={transitionCoords}
        onAnimationComplete={() => setTransitionCoords(null)}
      />
      <div className="min-h-screen flex flex-col">
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

