import React, { useState } from "react";
import "./CharacterDisplay.css";
import ReactMarkdown from "react-markdown";

function CharacterDisplay({
  charClass,
  level,
  subclass,
  species,
  features,
  subclassImage,
}) {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleClick = (feature) => {
    setSelectedFeature(feature);
  };

  const renderFeatureList = (featureList, title) => (
    <div className="feature-section">
      <h3>{title}</h3>
      {featureList.map((feature) => (
        <button
          key={feature.name}
          className="feature-button"
          onClick={() => handleClick(feature)}
        >
          {feature.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="character-display">
      {/* LEFT: Feature list */}
      <div className="feature-list">
        <h2>
          {charClass} - Level {level} ({subclass})
        </h2>
        {renderFeatureList(features.classLevelFeatures, "Class Features")}
        {renderFeatureList(features.subclassLevelFeatures, "Subclass Features")}
      </div>

      {/* MIDDLE: Feature detail */}
      <div className="feature-detail">
        {selectedFeature ? (
          <>
            <h3>{selectedFeature.name}</h3>
            <p className="feature-text">{selectedFeature.description}</p>
          </>
        ) : (
          <p>Select a feature to see details</p>
        )}
      </div>

      {/* RIGHT: Subclass image */}
      <div className="subclass-image-container">
        <img
          src={subclassImage}
          alt={`${subclass} artwork`}
          className="subclass-image"
        />
      </div>
    </div>
  );
}

export default CharacterDisplay;
