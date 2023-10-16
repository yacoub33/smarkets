import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Football from "./screens/Football";
import { useEffect } from "react";
import Boxing from "./screens/Boxing";
import MMA from "./screens/MMA";
import AmericanFootball from "./screens/AmericanFootball";

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  return (
    <Router>
      <>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Football />} />
          <Route path="/boxing" element={<Boxing />} />
          <Route path="/mma" element={<MMA />} />
          <Route path="/americanfootball" element={<AmericanFootball />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
