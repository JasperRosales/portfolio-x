import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscCallIncoming,
} from "react-icons/vsc";
import Dock from "./components/dock";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const navigate = useNavigate();
  const { cycleTheme } = useTheme();

  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () => {
        cycleTheme();
        navigate("/");
      },
    },
    {
      icon: <VscAccount size={18} />,
      label: "About",
      onClick: () => {
        cycleTheme();
        navigate("/about");
      },
    },
    {
      icon: <VscArchive size={18} />,
      label: "Portfolio",
      onClick: () => {
        cycleTheme();
        navigate("/portfolio");
      },
    },
    {
      icon: <VscCallIncoming size={18} />,
      label: "Contact",
      onClick: () => {
        cycleTheme();
        navigate("/contact");
      },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
  );
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
