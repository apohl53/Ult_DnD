import React, { useState } from "react";

function CharacterDisplay({ charClass, level, subclass, features }) {
  const [expanded, setExpanded] = useState({});

  const toggleFeature = (name) => {
    setExpanded((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const renderFeatureList = (featureList, title) => (
    <div>
      <h2>{title}</h2>
      {featureList.map((feature) => (
        <div key={feature.name} style={{ marginBottom: "10px" }}>
          <button
            onClick={() => toggleFeature(feature.name)}
            style={{
              cursor: "pointer",
              background: "none",
              border: "none",
              fontWeight: "bold",
              color: "#007bff",
              padding: "0",
            }}
          >
            {feature.name}
          </button>
          {expanded[feature.name] && (
            <p style={{ marginTop: "5px" }}>{feature.description}</p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h2>
        {charClass} - Level {level} ({subclass})
      </h2>
      {renderFeatureList(features.classLevelFeatures, "Class Features")}
      {renderFeatureList(features.subclassLevelFeatures, "Subclass Features")}
    </div>
  );
}

export default CharacterDisplay;
