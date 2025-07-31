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
  Properties: equipmentProperties,
  Feats: feats,
  Options: options,
};

function General() {
  const [openSection, setOpenSection] = useState(null);
  const [openDetail, setOpenDetail] = useState(null);
  const [weaponType, setWeaponType] = useState(null);
  const [openProperty, setOpenProperty] = useState(null);
  const [propertyCategory, setPropertyCategory] = useState(null);
  const [openOptionCategory, setOpenOptionCategory] = useState(null);

  const toggleSection = (header) => {
    setOpenSection(openSection === header ? null : header);
    setOpenDetail(null);
    setWeaponType(null);
    setOpenOptionCategory(null);
    setPropertyCategory(null);
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
    "Equipment Properties": equipmentProperties.filter(
      (p) => p.category === "property"
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
                <div className="weapon-type-buttons">
                  <button
                    className={weaponType === "melee" ? "active" : ""}
                    onClick={() => setWeaponType("melee")}
                  >
                    Melee Weapons
                  </button>
                  <button
                    className={weaponType === "ranged" ? "active" : ""}
                    onClick={() => setWeaponType("ranged")}
                  >
                    Ranged Weapons
                  </button>
                </div>

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
                    <th>Properties</th>
                    <th>Weight</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {data.Armor.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.ac}</td>
                      <td>{item.category}</td>
                      <td>{item.stealth}</td>
                      <td>{item.weight}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isShieldsSection(openSection) && (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>AC</th>
                    <th>Properties</th>
                    <th>Weight</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {data.Shields.map((item) => (
                    <tr key={item.name}>
                      <td>{item.name}</td>
                      <td>{item.ac}</td>
                      <td>{item.properties}</td>
                      <td>{item.weight}</td>
                      <td>{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {isPropertiesSection(openSection) && (
              <div className="content-inner">
                <div className="weapon-type-buttons">
                  <button
                    className={propertyCategory === "property" ? "active" : ""}
                    onClick={() => setPropertyCategory("property")}
                  >
                    Equipment Properties
                  </button>
                  <button
                    className={propertyCategory === "mastery" ? "active" : ""}
                    onClick={() => setPropertyCategory("mastery")}
                  >
                    Weapon Masteries
                  </button>
                </div>

                {propertyCategory && (
                  <ul className="property-list">
                    {groupedProperties[
                      propertyCategory === "property"
                        ? "Equipment Properties"
                        : "Weapon Masteries"
                    ].map((prop) => (
                      <li key={prop.name} className="property-item">
                        <div
                          className="property-name"
                          onClick={() =>
                            setOpenProperty(
                              openProperty === prop.name ? null : prop.name
                            )
                          }
                        >
                          {prop.name}
                        </div>
                        {openProperty === prop.name && (
                          <div className="property-description">
                            {prop.description}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {isOptionsSection(openSection) && (
              <div className="content-inner">
                <div className="option-category-buttons">
                  {Object.keys(data.Options).map((category) => (
                    <button
                      key={category}
                      className={
                        openOptionCategory === category ? "active" : ""
                      }
                      onClick={() => toggleOptionCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {openOptionCategory === "Beastheart Companions" && (
                  <ul className="option-list">
                    {data.Options["Beastheart Companions"].map((companion) => (
                      <li key={companion.name}>
                        <strong>{companion.name}</strong> — {companion.type}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Beastheart Exploits" && (
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ferocity</th>
                        <th>Prerequisites</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Options["Beastheart Exploits"].map(
                        (entry, index) => (
                          <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.ferocity}</td>
                            <td>{entry.prerequisite}</td>
                            <td>{entry.description}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                )}

                {openOptionCategory === "Finishers" && (
                  <ul className="option-list">
                    {data.Options["Finishers"].map((meta) => (
                      <li key={meta.name} className="option-item">
                        <div
                          className="option-name"
                          onClick={() =>
                            setOpenDetail(
                              openDetail === meta.name ? null : meta.name
                            )
                          }
                        >
                          <strong>{meta.name}</strong>
                        </div>
                        {openDetail === meta.name && (
                          <div className="option-description">
                            <div>{meta.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Focus Arts" && (
                  <ul className="option-list">
                    {data.Options["Focus Arts"].map((meta) => (
                      <li key={meta.name} className="option-item">
                        <div
                          className="option-name"
                          onClick={() =>
                            setOpenDetail(
                              openDetail === meta.name ? null : meta.name
                            )
                          }
                        >
                          <strong>{meta.name}</strong>
                        </div>
                        {openDetail === meta.name && (
                          <div className="option-description">
                            <div>{meta.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Maneuvers" && (
                  <ul className="option-list">
                    {data.Options["Maneuvers"].map((meta) => (
                      <li key={meta.name} className="option-item">
                        <div
                          className="option-name"
                          onClick={() =>
                            setOpenDetail(
                              openDetail === meta.name ? null : meta.name
                            )
                          }
                        >
                          <strong>{meta.name}</strong>
                        </div>
                        {openDetail === meta.name && (
                          <div className="option-description">
                            <div>{meta.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Sorcerer Metamagic" && (
                  <ul className="option-list">
                    {data.Options["Sorcerer Metamagic"].map((meta) => (
                      <li key={meta.name} className="option-item">
                        <div
                          className="option-name"
                          onClick={() =>
                            setOpenDetail(
                              openDetail === meta.name ? null : meta.name
                            )
                          }
                        >
                          <strong>{meta.name}</strong>
                        </div>
                        {openDetail === meta.name && (
                          <div className="option-description">
                            <div>
                              <strong>Cost:</strong> {meta.cost}
                            </div>
                            <div>{meta.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Psionic Exertion" && (
                  <ul className="option-list">
                    {data.Options["Psionic Exertion"].map((meta) => (
                      <li key={meta.name} className="option-item">
                        <div
                          className="option-name"
                          onClick={() =>
                            setOpenDetail(
                              openDetail === meta.name ? null : meta.name
                            )
                          }
                        >
                          <strong>{meta.name}</strong>
                        </div>
                        {openDetail === meta.name && (
                          <div className="option-description">
                            <div>{meta.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Warlock Invocations" && (
                  <ul className="option-list">
                    {data.Options["Warlock Invocations"].map((invocation) => (
                      <li key={invocation.name} className="option-item">
                        <div
                          className="option-name"
                          onClick={() =>
                            setOpenDetail(
                              openDetail === invocation.name
                                ? null
                                : invocation.name
                            )
                          }
                        >
                          <strong>{invocation.name}</strong>
                        </div>
                        {openDetail === invocation.name && (
                          <div className="option-description">
                            {invocation.prerequisite && (
                              <div>
                                <strong>Prerequisite:</strong>{" "}
                                {invocation.prerequisite}
                              </div>
                            )}
                            <div>{invocation.description}</div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                )}

                {openOptionCategory === "Wild Magic Table" && (
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Roll</th>
                        <th>Effect</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Options["Wild Magic Table"].map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.roll}</td>
                          <td>{entry.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                {openOptionCategory === "Wild Magic Rage Table" && (
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Roll</th>
                        <th>Effect</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.Options["Wild Magic Rage Table"].map(
                        (entry, index) => (
                          <tr key={index}>
                            <td>{entry.roll}</td>
                            <td>{entry.result}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            )}

            {/*  feats */}
          </>
        )}
      </div>
    </div>
  );
}

export default General;
