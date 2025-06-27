export default function CharacterDisplay({
  charClass,
  level,
  subclass,
  features,
}) {
  return (
    <div>
      <h2>
        {charClass} - {subclass} (Level {level})
      </h2>

      <h3>Class Features</h3>
      <ul>
        {features.classLevelFeatures.length > 0 ? (
          features.classLevelFeatures.map((feat, index) => (
            <li key={index}>
              <strong>{feat.name}</strong>
              <p>{feat.description}</p>
            </li>
          ))
        ) : (
          <li>No class features at this level.</li>
        )}
      </ul>

      <h3>Subclass Features</h3>
      <ul>
        {features.subclassLevelFeatures.length > 0 ? (
          features.subclassLevelFeatures.map((feat, index) => (
            <li key={index}>
              <strong>{feat.name}</strong>
              <p>{feat.description}</p>
            </li>
          ))
        ) : (
          <li>No subclass features at this level.</li>
        )}
      </ul>
    </div>
  );
}
