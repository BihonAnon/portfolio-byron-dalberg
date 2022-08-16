import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<AboutMe />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/contact"
            element={<ContactMe />}
          />
                    <Route
            path="/resume"
            element={<Resume />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;