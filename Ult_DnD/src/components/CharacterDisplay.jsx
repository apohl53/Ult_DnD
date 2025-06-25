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
      <p>Feature: {features || "No data available"}</p>
    </div>
  );
}
