import React, { useState } from "react";
import "./CharacterDisplay.css";
import { getImageForClass } from "../util/imageLoader";

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

  const imageToUse =
    (subclassImage &&
      !subclassImage.includes("default.png") &&
      subclassImage) ||
    getImageForClass(charClass);

  console.log("charClass raw:", charClass);
  console.log("Image to use:", imageToUse);

  return (
    <div className="character-display">
      {/* Feature List */}
      <div className="feature-list">
        <h2>
          {charClass} - Level {level} ({subclass})
        </h2>
        {renderFeatureList(features.classLevelFeatures, "Class Features")}
        {renderFeatureList(features.subclassLevelFeatures, "Subclass Features")}
      </div>

      {/* Feature Detail */}
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

      {/* Image */}
      <div className="subclass-image-container">
        <img
          src={imageToUse}
          alt={`${subclass || charClass} artwork`}
          className="subclass-image"
        />
      </div>
    </div>
  );
}

export default CharacterDisplay;
