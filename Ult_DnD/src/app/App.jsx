import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import CharacterPage from "./Pages/Character";
import General from "./Pages/GeneralInfo";

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link to="/general">General Info</Link>
      </nav>

      {/* Routing for pages */}
      <Routes>
        <Route path="/" element={<CharacterPage />} />
        <Route path="/general" element={<General />} />
      </Routes>
    </div>
  );
}

export default App;
