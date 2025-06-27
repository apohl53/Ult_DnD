import "./App.css";
import { useState } from "react";
import InputForm from "../components/InputForm";
import CharacterDisplay from "../components/CharacterDisplay";
import { dndData } from "../data/dndData";
import { featureDetails } from "../data/featureDetails";

const resolveFeatures = (featureNames) =>
  featureNames.map(
    (name) =>
      featureDetails[name] || {
        name,
        description: "Description not found.",
      }
  );

function App() {
  const [characterInfo, setCharacterInfo] = useState(null);

  const handleFormSubmit = ({ charClass, level, subclass }) => {
    const numericLevel = parseInt(level, 10);

    const classFeatureNames =
      dndData[charClass]?.classFeatures?.[numericLevel] || [];

    const subclassFeatureNames =
      dndData[charClass]?.[subclass]?.subclassFeatures?.[numericLevel] || [];

    const features = {
      classLevelFeatures: resolveFeatures(classFeatureNames),
      subclassLevelFeatures: resolveFeatures(subclassFeatureNames),
    };

    setCharacterInfo({ charClass, level, subclass, features });
  };

  return (
    <div className="App">
      <h1>D&D Character Features</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {characterInfo && <CharacterDisplay {...characterInfo} />}
    </div>
  );
}

export default App;
