const weapons = [
  // Simple Melee Weapons
  {
    name: "Club",
    damage: "1d4 Bludgeoning",
    properties: "Light",
    mastery: "Slow",
    weight: "2 lbs",
    type: "melee",
    cost: "1 SP",
  },
  {
    name: "Dagger",
    damage: "1d4 Piercing",
    properties: "Finesse, Light, Thrown (Range 20/60)",
    mastery: "Nick",
    type: "melee",
    weight: "1 lb.",
    cost: "2 GP",
  },
  {
    name: "Greatclub",
    damage: "1d8 Bludgeoning",
    properties: "Two-Handed",
    mastery: "Push",
    type: "melee",
    weight: "10 lb.",
    cost: "2 SP",
  },
  {
    name: "Handaxe",
    damage: "1d6 Slashing",
    properties: "Light, Thrown (20/60)",
    mastery: "Vex",
    type: "melee",
    weight: "2 lb.",
    cost: "5 GP",
  },
  {
    name: "Javelin",
    damage: "1d6 Piercing",
    properties: "Thrown (30/120)",
    mastery: "Slow",
    type: "melee",
    weight: "2 lb.",
    cost: "5 SP",
  },
  {
    name: "Light Hammer",
    damage: "1d4 Bludgeoning",
    properties: "Light, Thrown (20/60)",
    mastery: "Nick",
    type: "melee",
    weight: "2 lb.",
    cost: "2 GP",
  },
  {
    name: "Mace",
    damage: "1d6 Bludgeoning",
    properties: "-",
    mastery: "Sap",
    type: "melee",
    weight: "4 lb.",
    cost: "5 GP",
  },
  {
    name: "Quarterstaff",
    damage: "1d6 Bludgeoning",
    properties: "Versatile (1d8)",
    mastery: "Topple",
    type: "melee",
    weight: "4 lb.",
    cost: "2 SP",
  },
  {
    name: "Sickle",
    damage: "1d4 Slashing",
    properties: "Light",
    mastery: "Nick",
    type: "melee",
    weight: "4 lb.",
    cost: "2 SP",
  },
  {
    name: "Spear",
    damage: "1d6 Piercing",
    properties: "Thrown (20/60), Versatile (1d8)",
    mastery: "Sap",
    type: "melee",
    weight: "3 lb.",
    cost: "1 GP",
  },

  // Martial melee Weapons
  {
    name: "Battleaxe",
    damage: "1d8 Slashing",
    properties: "Versatile (1d10)",
    mastery: "Topple",
    type: "melee",
    weight: "4 lb.",
    cost: "10 GP",
  },
  {
    name: "Flail",
    damage: "1d8 Bludgeoning",
    properties: "-",
    mastery: "Sap",
    type: "melee",
    weight: "2 lb.",
    cost: "10 GP",
  },
  {
    name: "Glaive",
    damage: "1d10 Slashing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Graze",
    type: "melee",
    weight: "6 lb.",
    cost: "20 GP",
  },
  {
    name: "Greataxe",
    damage: "1d12 Slashing",
    properties: "Heavy, Two-Handed",
    mastery: "Cleave",
    type: "melee",
    weight: "7 lb.",
    cost: "30 GP",
  },
  {
    name: "Greatsword",
    damage: "2d6 Slashing",
    properties: "Heavy, Two-Handed",
    mastery: "Cleave",
    type: "melee",
    weight: "30 lb.",
    cost: "50 GP",
  },
  {
    name: "Halberd",
    damage: "1d10 Slashing",
    properties: "Heavy, Reach, Two-Handed",
    mastery: "Cleave",
    type: "melee",
    weight: "6 lb.",
    cost: "20 GP",
  },
  {
    name: "Lance",
    damage: "1d10 Piercing",
    properties: "Heavy, Reach, Two-Handed (unless mounted)",
    mastery: "Topple",
    type: "melee",
    weight: "6 lb.",
    cost: "10 GP",
  },
  {
    name: "Longsword",
    damage: "1d8 Slashing",
    properties: "Versatile (1d10)",
    mastery: "Sap",
    type: "melee",
    weight: "3 lb.",
    cost: "15 gp",
  },
  {
    name: "Maul",
    damage: "2d6 Bludgeoning",
    properties: "Heavy, Two-Handed",
    mastery: "Topple",
    type: "melee",
    weight: "10lb.",
    cost: "10 GP",
  },
  {
    name: "Morningstar",
    damage: "1d8 Piercing",
    properties: "-",
    mastery: "Sap",
    type: "melee",
    weight: "4 lb.",
    cost: "15 GP",
  },
  {
    name: "Pike",
    damage: "1d10 Piercing",
    properties: "Finesse",
    mastery: "Push",
    type: "melee",
    weight: "18 lb.",
    cost: "5 GP",
  },
  {
    name: "Rapier",
    damage: "1d8 Piercing",
    properties: "Finesse",
    mastery: "Vex",
    type: "melee",
    weight: "2 lb.",
    cost: "25 GP",
  },
  {
    name: "Scimitar",
    damage: "1d6 Slashing",
    properties: "Finesse, Light",
    mastery: "Nick",
    type: "melee",
    weight: "3 lb.",
    cost: "25 GP",
  },
  {
    name: "Shortsword",
    damage: "1d8 Slashing",
    properties: "Finesse, Light",
    mastery: "Vex",
    type: "melee",
    weight: "2 lb.",
    cost: "10 GP",
  },
  {
    name: "Trident",
    damage: "1d8 Piercing",
    properties: "Thrown (20/60), Versatile (1d10)",
    mastery: "Topple",
    type: "melee",
    weight: "4 lb.",
    cost: "5 GP",
  },
  {
    name: "Warhammer",
    damage: "1d8 Bludgeoning",
    properties: "Versatile (1d10)",
    mastery: "Push",
    type: "melee",
    weight: "5 lb.",
    cost: "15 GP",
  },
  {
    name: "War Pick",
    damage: "1d8 Piercing",
    properties: "Versatile (1d10)",
    mastery: "Sap",
    type: "melee",
    weight: "2 lb.",
    cost: "5 GP",
  },
  {
    name: "Whip",
    damage: "1d4 Slashing",
    properties: "Finesse, Reach",
    mastery: "Slow",
    type: "melee",
    weight: "3 lb.",
    cost: "2 GP",
  },

  // Simple Ranged Weapons

  {
    name: "Dart",
    damage: "1d4 Piercing",
    properties: "Finesse, Thrown (Range 20/60)",
    mastery: "Vex",
    type: "ranged",
    weight: "1/4 lb.",
    cost: "5 CP",
  },
  {
    name: "Light Crossbow",
    damage: "1d8 Piercing",
    properties: "Ammunition (Range 80/320), Loading, Two-Handed",
    mastery: "Slow",
    type: "ranged",
    weight: "5 lb.",
    cost: "25 GP",
  },
  {
    name: "Shortbow",
    damage: "1d6 Piercing",
    properties: "Ammunition (80/320), Two-Handed",
    mastery: "Vex",
    type: "ranged",
    weight: "2 lb.",
    cost: "25 gp",
  },
  {
    name: "Sling",
    damage: "1d8 Slashing",
    properties: "Ammunition (Range 30/120)",
    mastery: "Slow",
    type: "ranged",
    weight: "-",
    cost: "1 GP",
  },
  // Martial Ranged Weapons
];

export default weapons;

const armor = [
  {
    name: "Plate Armor",
    "armor class": 18,
    weight: "",
    cost: "",
  },
];

// Weapons
// Weapon Mastery
// Armor
// Equipment Properties (Cold Iron, Silver, Adamantine, Mithril)

// Simple Ranged Weapons
// Dart	1d4 Piercing	Finesse, Thrown (Range 20/60)	Vex	1/4 lb.	5 CP
// Light Crossbow	1d8 Piercing	Ammunition (Range 80/320; Bolt), Loading, Two-Handed	Slow	5 lb.	25 GP
// Shortbow	1d6 Piercing	Ammunition (Range 80/320; Arrow), Two-Handed	Vex	2 lb.	25 GP
// Sling	1d4 Bludgeoning	Ammunition (Range 30/120; Bullet)	Slow	—	1 SP

// Martial Ranged Weapons
// Blowgun	1 Piercing	Ammunition (Range 25/100; Needle), Loading	Vex	1 lb.	10 GP
// Hand Crossbow	1d6 Piercing	Ammunition (Range 30/120; Bolt), Light, Loading	Vex	3 lb.	75 GP
// Heavy Crossbow	1d10 Piercing	Ammunition (Range 100/400; Bolt), Heavy, Loading, Two-Handed	Push	18 lb.	50 GP
// Longbow	1d8 Piercing	Ammunition (Range 150/600; Arrow), Heavy, Two-Handed	Slow	2 lb.	50 GP
// Musket	1d12 Piercing	Ammunition (Range 40/120; Bullet), Loading, Two-Handed	Slow	10 lb.	500 GP
// Pistol	1d10 Piercing	Ammunition (Range 30/90; Bullet), Loading	Vex	3 lb.	250 GP
