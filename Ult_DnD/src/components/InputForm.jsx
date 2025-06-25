import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [charClass, setCharClass] = useState("");
  const [level, setLevel] = useState("");
  const [subclass, setSubclass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ charClass, level, subclass });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Class:
        <input
          value={charClass}
          onChange={(e) => setCharClass(e.target.value)}
        />
      </label>
      <label>
        Level:
        <input value={level} onChange={(e) => setLevel(e.target.value)} />
      </label>
      <label>
        Subclass:
        <input value={Subclass} onChange={(e) => setSubclass(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
