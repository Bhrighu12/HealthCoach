import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Bmi from "./components/Bmi";
import DIET from "./pages/DIET";
import Doctor from "./components/Doctors"
import Sign from "./components/Sign";
import Exercises from "./pages/Exercises";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bmi" element={<Bmi />} />
      <Route path="/diets" element={<DIET/>} />
      <Route path="/exercises" element={<Exercises/>} />
      <Route path="/doctor" element={<Doctor />} />
      <Route path="/signup" element={<Sign/>} />
    </Routes>
  );
}
export default App;
