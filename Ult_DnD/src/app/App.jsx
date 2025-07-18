import "./App.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import CharacterPage from "./Pages/Character";
import General from "./Pages/GeneralInfo";

function App() {
  return (
    <HashRouter>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/general">General Info</Link>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<CharacterPage />} />
          <Route path="/general" element={<General />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
