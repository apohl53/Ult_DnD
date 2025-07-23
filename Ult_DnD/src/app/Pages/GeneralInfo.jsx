import React, { useState } from "react";
import "./css/GeneralInfo.css";
import { weapons, armor, shield } from "../../data/additional-info/equipment";
import feats from "../../data/additional-info/feats";
import options from "../../data/additional-info/additional-options";
import equipmentProperties from "../../data/additional-info/equipmentProperties";

const data = {
  Weapons: weapons,
  Armor: armor,
  Shields: shield,
  Feats: feats,
  Properties: equipmentProperties,
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
  const isArmorSection = (header) => header === "Armor";
  const isShieldsSection = (header) => header === "Shields";
  const isOptionsSection = (header) => header === "Options";
  const isPropertiesSection = (header) => header === "Properties";

  const filteredWeapons =
    weaponType === null
      ? []
      : data.Weapons.filter((w) => w.type === weaponType);

  const groupedProperties = {
    "Weapon Properties": equipmentProperties.filter(
      (p) => p.category === "weapon"
    ),
    "Armor Properties": equipmentProperties.filter(
      (p) => p.category === "armor"
    ),
    "Weapon Masteries": equipmentProperties.filter(
      (p) => p.category === "mastery"
    ),
  };

  return (
    <div className="general-container">
      {/* Sidebar on the left */}
      <div className="sidebar">
        {Object.keys(data).map((header) => (
          <h2
            key={header}
            onClick={() => toggleSection(header)}
            style={{ cursor: "pointer", color: "blue", marginBottom: "1rem" }}
          >
            {header}
          </h2>
        ))}
      </div>

      {/* Main content on the right */}
      <div className="main-content">
        {openSection && (
          <>
            {isWeaponsSection(openSection) && (
              <div className="content-inner">
                <h3 onClick={() => setWeaponType("melee")}>Melee Weapons</h3>
                <h3 onClick={() => setWeaponType("ranged")}>Ranged Weapons</h3>

                {weaponType && (
                  <table className="data-table">
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
            )}

            {isArmorSection(openSection) && (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>AC</th>
                    <th>Type</th>
                    <th>Weight</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {data.Armor.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.ac}</td>
                      <td>{item.type}</td>
                      <td>{item.weight}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Add similar blocks for Shields, Options, Properties, etc. here */}
          </>
        )}
      </div>
    </div>
  );
}

export default General;
