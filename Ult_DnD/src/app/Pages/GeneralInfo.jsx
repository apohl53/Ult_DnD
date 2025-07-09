import React, { useState } from "react";
import weapons from "../../data/additional-info/equipment";
import feats from "../../data/additional-info/feats";
import options from "../../data/additional-info/additional-options";

const data = {
  Weapons: weapons,
  Feats: feats,
  Options: options,
};

function General() {
  const [openSection, setOpenSection] = useState(null);
  const [openDetail, setOpenDetail] = useState(null);
  const [weaponType, setWeaponType] = useState(null); // 'melee' or 'ranged'

  const toggleSection = (header) => {
    setOpenSection(openSection === header ? null : header);
    setOpenDetail(null);
    setWeaponType(null); // reset weapon type when switching sections
  };

  const toggleDetail = (item) => {
    setOpenDetail(openDetail === item ? null : item);
  };

  const isWeaponsSection = (header) => header === "Weapons";

  const filteredWeapons =
    weaponType === null
      ? []
      : data.Weapons.filter((w) => w.type === weaponType);

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
            <div style={{ marginLeft: "20px" }}>
              {isWeaponsSection(header) ? (
                <div>
                  <button onClick={() => setWeaponType("melee")}>
                    Melee Weapons
                  </button>
                  <button onClick={() => setWeaponType("ranged")}>
                    Ranged Weapons
                  </button>

                  {weaponType && (
                    <table
                      border="1"
                      cellPadding="8"
                      style={{ borderCollapse: "collapse", marginTop: "10px" }}
                    >
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Damage</th>
                          <th>Properties</th>
                          <th>Weight</th>
                          <th>Cost</th>
                          <th>Mastery</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredWeapons.map((weapon) => (
                          <tr key={weapon.name}>
                            <td>{weapon.name}</td>
                            <td>{weapon.damage}</td>
                            <td>{weapon.properties}</td>
                            <td>{weapon.weight}</td>
                            <td>{weapon.cost}</td>
                            <td>{weapon.mastery || "—"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li
                      key={typeof item === "string" ? item : item.name}
                      style={{ marginBottom: "4px" }}
                    >
                      <span
                        onClick={() => toggleDetail(item)}
                        style={{ cursor: "pointer", color: "darkgreen" }}
                      >
                        {typeof item === "string" ? item : item.name}
                      </span>
                      {openDetail === item && (
                        <p style={{ marginLeft: "20px" }}>
                          {item.description || "Details coming soon..."}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default General;
