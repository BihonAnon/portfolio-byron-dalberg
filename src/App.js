import 'bootstrap/dist/css/bootstrap.min.css';
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div class="d-flex flex-column min-vh-100">
      <Router>
        <Routes>
          <Route
            path="/portfolio-byron-dalberg/"
            element={<AboutMe />}
          />
          <Route
            path="/portfolio-byron-dalberg/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/portfolio-byron-dalberg/contact"
            element={<ContactMe />}
          />
                    <Route
            path="/portfolio-byron-dalberg/resume"
            element={<Resume />}
          />
        </Routes>
      </Router >
      </div>
  );
}

export default App;