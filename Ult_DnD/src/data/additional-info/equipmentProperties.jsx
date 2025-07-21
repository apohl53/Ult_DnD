const weaponProperties = {
  Ammunition: {
    name: "Ammunition",
    description: `You can use a weapon that has the Ammunition property to make a ranged attack only if you have ammunition to fire from it. The type of ammunition required is specified with the weapon's range. Each attack expends one piece of ammunition. Drawing the ammunition is part of the attack (you need a free hand to load a one-handed weapon). After a fight, you can spend 1 minute to recover half the ammunition (round down) you used in the fight; the rest is lost.`,
  },
  Finesse: {
    name: "Finesse",
    description: `When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.`,
  },
  Heavy: {
    name: "Heavy",
    description: `You have Disadvantage on attack rolls with a Heavy weapon if it's a Melee weapon and your Strength score isn't at least 13 or if it's a Ranged weapon and your Dexterity score isn't at least 13.`,
  },
  Light: {
    name: "Light",
    description: `When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn. That extra attack must be made with a different Light weapon, and you don't add your ability modifier to the extra attack's damage unless that modifier is negative. For example, you can attack with a Shortsword in one hand and a Dagger in the other using the Attack action and a Bonus Action, but you don't add your Strength or Dexterity modifier to the damage roll of the Bonus Action unless that modifier is negative.`,
  },
  Loading: {
    name: "Loading",
    description: `You can fire only one piece of ammunition from a Loading weapon when you use an action, a Bonus Action, or a Reaction to fire it, regardless of the number of attacks you can normally make.`,
  },
  Range: {
    name: "Range",
    description: `A Range weapon has a range in parentheses after the Ammunition or Thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second is the weapon's long range. When attacking a target beyond normal range, you have Disadvantage on the attack roll. You can't attack a target beyond the long range.`,
  },
  Reach: {
    name: "Reach",
    description: `A Reach weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for Opportunity Attacks with it.`,
  },
  Thrown: {
    name: "Thrown",
    description: `If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack. If the weapon is a Melee weapon, use the same ability modifier for the attack and damage rolls that you use for a melee attack with that weapon.`,
  },
  "Two-Handed": {
    name: "Two-Handed",
    description: `A Two-Handed weapon requires two hands when you attack with it.`,
  },
  Versatile: {
    name: "Versatile",
    description: `A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.`,
  },

  Firearm: {
    name: "Firearm",
    description: `You don't add your ability modifier to the weapon's damage, unless otherwise stated. Firearm ammunition is destroyed upon use.`,
  },
  Recoil: {
    name: "Recoil",
    description: `After you make an attack with this weapon, you can't make ranged attacks beyond the weapon's normal range until the end of the current turn.`,
  },
  //   "": {
  //     name: "",
  //     description: ``,
  //   },
  //   "": {
  //     name: "",
  //     description: ``,
  //   },
  //   "": {
  //     name: "",
  //     description: ``,
  //   },

  // Mastery Properties
  Cleave: {
    name: "Cleave",
    description: `If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.`,
  },

  Graze: {
    name: "Graze",
    description: `If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.`,
  },
  Nick: {
    name: "Nick",
    description: `When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.`,
  },
  Push: {
    name: "Push",
    description: `If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.`,
  },
  Sap: {
    name: "Sap",
    description: `If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.`,
  },
  Slow: {
    name: "Slow",
    description: `If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.`,
  },
  Topple: {
    name: "Topple",
    description: `If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.`,
  },
  Vex: {
    name: "Vex",
    description: `If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.`,
  },

  Automatic: {
    name: "Automatic",
    description: `When you make an attack with this weapon, you can choose to make two attacks instead. These attacks are always made with Disadvantage, regardless of circumstance. You can't replace these attacks. If this weapon has the Ammunition property, these attacks use twice the normal amount of ammunition.`,
  },

  Explode: {
    name: "Explode",
    description: `When you take the Attack action, you can replace one of your attacks with an explosion from this weapon's projectile. This explosion is a 5-foot-radius Sphere centered on a point you choose within the weapon's normal range. Each creature within the Sphere makes a Dexterity saving throw (DC 8 plus your Strength or Dexterity modifier and your Proficiency Bonus). On a failed save, a creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. On a successful save, a creature takes half as much damage. You can create an explosion only once per turn.`,
  },
  Scatter: {
    name: "Scatter",
    description: `Being within 5 feet of an enemy doesn't impose Disadvantage on your ranged attack rolls with this weapon.`,
  },

  Sighted: {
    name: "Sighted",
    description: `Attacking at long range with this weapon doesn't impose Disadvantage on your attack rolls. When you hit a creature with an attack using this weapon at long range, you can reroll any of the damage dice and must use the new roll.`,
  },

  //
  //   fill: {
  //     name: "fill",
  //     description: ``,
  //   },
};

export default weaponProperties;
