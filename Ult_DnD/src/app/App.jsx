import "./App.css";
import { useState } from "react";
import InputForm from "../components/InputForm";
import CharacterDisplay from "../components/CharacterDisplay";
import { dndData } from "../data/dndData";

function App() {
  const [characterInfo, setCharacterInfo] = useState(null);

  const handleFormSubmit = ({ charClass, level, subclass }) => {
    const features = dndData[charClass]?.[subclass]?.[level];
    setCharacterInfo({ charClass, level, subclass, features });
  };

  return (
    <div className="App">
      <>
        <h1> D&D Character Features</h1>
        <InputForm onSubmit={handleFormSubmit} />
        {characterInfo && <CharacterDisplay {...characterInfo} />}
      </>
    </div>
  );
}

export default App;
