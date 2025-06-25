import { useState } from "react";
import { dndData } from "../data/dndData";

export default function InputForm({ onSubmit }) {
  const [charClass, setCharClass] = useState("");
  const [level, setLevel] = useState("");
  const [subclass, setSubclass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ charClass, level, subclass });
  };

  // Get subclasses for selected class
  const subclassOptions = charClass ? Object.keys(dndData[charClass]) : [];

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class:
        <select
          value={charClass}
          onChange={(e) => {
            setCharClass(e.target.value);
            setSubclass(""); // reset subclass when class changes
          }}
        >
          <option value="">Select a class</option>
          {Object.keys(dndData).map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </label>

      <label>
        Level:
        <input
          type="number"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          min="1"
          max="20"
        />
      </label>

      <label>
        Subclass:
        <select
          value={subclass}
          onChange={(e) => setSubclass(e.target.value)}
          disabled={!charClass}
        >
          <option value="">Select a subclass</option>
          {subclassOptions.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        disabled={!charClass || !subclass || !level}
        title={
          !charClass || !subclass || !level
            ? "Please select class, subclass, and level"
            : ""
        }
      >
        Submit
      </button>
    </form>
  );
}
