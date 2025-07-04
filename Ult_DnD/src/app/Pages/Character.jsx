import { useState } from "react";
import InputForm from "../../components/InputForm";
import CharacterDisplay from "../../components/CharacterDisplay";
import { dndData } from "../../data/dndData";
import { featureDetails } from "../../data/featureDetails";

const resolveFeatures = (featureNames) =>
  featureNames.map(
    (name) =>
      featureDetails[name] || { name, description: "Description not found." }
  );

function CharacterPage() {
  const [characterInfo, setCharacterInfo] = useState(null);

  const handleFormSubmit = ({ charClass, level, subclass }) => {
    const numericLevel = parseInt(level, 10);
    let classFeatureNames = [];
    let subclassFeatureNames = [];

    for (let i = 1; i <= numericLevel; i++) {
      const featuresAtLevel = dndData[charClass]?.classFeatures?.[i] || [];
      classFeatureNames = classFeatureNames.concat(featuresAtLevel);

      const subclassFeaturesAtLevel =
        dndData[charClass]?.[subclass]?.subclassFeatures?.[i] || [];
      subclassFeatureNames = subclassFeatureNames.concat(
        subclassFeaturesAtLevel
      );
    }

    const features = {
      classLevelFeatures: resolveFeatures(classFeatureNames),
      subclassLevelFeatures: resolveFeatures(subclassFeatureNames),
    };

    setCharacterInfo({ charClass, level, subclass, features });
  };

  return (
    <div>
      <h1>D&D Character Features</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {characterInfo && <CharacterDisplay {...characterInfo} />}
    </div>
  );
}

export default CharacterPage;
