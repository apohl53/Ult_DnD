import React, { useState } from "react";

const data = {
  Weapons: ["Sword", "Axe", "Bow"],
  "Weapon Mastery": ["Precision", "Power", "Cleave"],
  Armor: ["Leather", "Chainmail", "Plate"],
  Feats: ["Sharpshooter", "Lucky", "Alert"],
  "Sorcerer Metamagic": ["Quickened Spell", "Twinned Spell"],
  "Battlemaster Maneuvers": ["Disarming Attack", "Trip Attack"],
  "Gunslinger Maneuvers": ["Deadeye Shot", "Dazing Shot"],
  "Fighting Styles": ["Defense", "Dueling"],
  "Warlock Invocations": ["Agonizing Blast", "Devil's Sight"],
  "Talent Psionic Exertions": ["Mind Thrust", "Telekinetic Grip"],
  "Epic Boons": ["Boon of Immortality", "Boon of Spell Mastery"],
  "Beastheart Exploitations": ["Ferocious Strike", "Pack Tactics"],
};

// Dummy detail for each option
const details = {
  Sword: "A sword is a basic melee weapon...",
  Axe: "An axe is a heavy cleaving weapon...",
  Bow: "A bow is used for ranged attacks...",
  // Add the rest of your details here...
};

function General() {
  const [openSection, setOpenSection] = useState(null);
  const [openDetail, setOpenDetail] = useState(null);

  const toggleSection = (header) => {
    setOpenSection(openSection === header ? null : header);
    setOpenDetail(null); // Close detail view when section changes
  };

  const toggleDetail = (item) => {
    setOpenDetail(openDetail === item ? null : item);
  };

  return (
    <div>
      {Object.entries(data).map(([header, items]) => (
        <div key={header}>
          <h2
            onClick={() => toggleSection(header)}
            style={{ cursor: "pointer", color: "blue" }}
          >
            {header}
          </h2>

          {openSection === header && (
            <ul>
              {items.map((item) => (
                <li key={item}>
                  <span
                    onClick={() => toggleDetail(item)}
                    style={{ cursor: "pointer", color: "darkgreen" }}
                  >
                    {item}
                  </span>
                  {openDetail === item && (
                    <p style={{ marginLeft: "20px" }}>
                      {details[item] || "Details coming soon..."}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default General;

// Each header should be open a list of all the options, then you click on the name of that option to see full detail
