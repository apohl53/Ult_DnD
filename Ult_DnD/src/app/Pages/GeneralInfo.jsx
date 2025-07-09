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
  const [weaponType, setWeaponType] = useState(null);
  const [openOptionCategory, setOpenOptionCategory] = useState(null);

  const toggleSection = (header) => {
    setOpenSection(openSection === header ? null : header);
    setOpenDetail(null);
    setWeaponType(null);
    setOpenOptionCategory(null);
  };

  const toggleDetail = (item) => {
    setOpenDetail(openDetail === item ? null : item);
  };

  const toggleOptionCategory = (category) => {
    setOpenOptionCategory(openOptionCategory === category ? null : category);
    setOpenDetail(null);
  };

  const isWeaponsSection = (header) => header === "Weapons";
  const isOptionsSection = (header) => header === "Options";

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
              ) : isOptionsSection(header) ? (
                <div>
                  {Object.entries(items).map(([category, list]) => (
                    <div key={category} style={{ marginBottom: "1em" }}>
                      <h3
                        onClick={() => toggleOptionCategory(category)}
                        style={{ cursor: "pointer", color: "purple" }}
                      >
                        {category}
                      </h3>

                      {openOptionCategory === category && (
                        <ul>
                          {list.map((item) => (
                            <li key={item.name}>
                              <span
                                onClick={() => toggleDetail(item)}
                                style={{
                                  cursor: "pointer",
                                  color: "darkgreen",
                                }}
                              >
                                {item.name}
                              </span>
                              {openDetail === item && (
                                <p style={{ marginLeft: "20px" }}>
                                  {item.type && <strong>Type:</strong>}{" "}
                                  {item.type} <br />
                                  {item.description || "Details coming soon..."}
                                </p>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <ul>
                  {items.map((item) => (
                    <li key={item.name}>
                      <span
                        onClick={() => toggleDetail(item)}
                        style={{ cursor: "pointer", color: "darkgreen" }}
                      >
                        {item.name}
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
