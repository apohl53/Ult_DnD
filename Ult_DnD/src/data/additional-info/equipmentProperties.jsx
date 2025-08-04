const equipmentProperties = [
  {
    name: "Ammunition",
    description: `You can use a weapon that has the Ammunition property to make a ranged attack only if you have ammunition to fire from it. The type of ammunition required is specified with the weapon's range. Each attack expends one piece of ammunition. Drawing the ammunition is part of the attack (you need a free hand to load a one-handed weapon). After a fight, you can spend 1 minute to recover half the ammunition (round down) you used in the fight; the rest is lost.`,
    category: "property",
  },
  {
    name: "Finesse",
    description: `When making an attack with a Finesse weapon, use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.`,
    category: "property",
  },
  {
    name: "Flourish",
    description: `When you are wielding the nunchaku in two hands and take the Attack action on your turn, you can attempt to flourish with the weapon immediately before you make your first attack. To flourish, make a DC 13 Dexterity check, adding your proficiency bonus if you are proficient with nunchaku. On a success, you gain a +2 bonus to the first attack roll you make this turn. On a failure, you deal bludgeoning damage to yourself equal to your proficiency bonus and gain no bonus from your flourishes this turn.`,
    category: "property",
  },
  {
    name: "Heavy",
    description: `You have Disadvantage on attack rolls with a Heavy weapon if it's a Melee weapon and your Strength score isn't at least 13 or if it's a Ranged weapon and your Dexterity score isn't at least 13.`,
    category: "property",
  },
  {
    name: "Hookpull",
    description: `As a bonus action immediately after you hit a target no more than one size larger than you with an attack using the tetherhook, you can attempt to hook the target using the tetherhook's reach. Make a Strength (Athletics) check contested by the target's Strength (Athletics) or Dexterity (Acrobatics) check (the target chooses the ability to use). If you succeed, the target is hooked and can't move further away from you. A hooked creature is no longer hooked if you release the tether with both hands, but only one hand is required to keep a creature hooked. A hooked creature can use its action to escape. To do so, it must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your Strength (Athletics) check.

    As part of the bonus action to hook the target, and as a bonus action on any of your subsequent turns while it remains hooked, you can pull the creature 5 feet closer to you. If the target is an object that isn't fixed in place and that weighs less than your push, drag, or lift capacity, you can pull it 5 feet closer to you as a bonus action after you hit it with an attack.`,
    category: "property",
  },
  {
    name: "Light",
    description: `When you take the Attack action on your turn and attack with a Light weapon, you can make one extra attack as a Bonus Action later on the same turn. That extra attack must be made with a different Light weapon, and you don't add your ability modifier to the extra attack's damage unless that modifier is negative. For example, you can attack with a Shortsword in one hand and a Dagger in the other using the Attack action and a Bonus Action, but you don't add your Strength or Dexterity modifier to the damage roll of the Bonus Action unless that modifier is negative.`,
    category: "property",
  },
  {
    name: "Loading",
    description: `You can fire only one piece of ammunition from a Loading weapon when you use an action, a Bonus Action, or a Reaction to fire it, regardless of the number of attacks you can normally make.`,
    category: "property",
  },
  {
    name: "Range",
    description: `A Range weapon has a range in parentheses after the Ammunition or Thrown property. The range lists two numbers. The first is the weapon's normal range in feet, and the second is the weapon's long range. When attacking a target beyond normal range, you have Disadvantage on the attack roll. You can't attack a target beyond the long range.`,
    category: "property",
  },
  {
    name: "Reach",
    description: `A Reach weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for Opportunity Attacks with it.`,
    category: "property",
  },
  {
    name: "Thrown",
    description: `If a weapon has the Thrown property, you can throw the weapon to make a ranged attack, and you can draw that weapon as part of the attack. If the weapon is a Melee weapon, use the same ability modifier for the attack and damage rolls that you use for a melee attack with that weapon.`,
    category: "property",
  },
  {
    name: "Two-Handed",
    description: `A Two-Handed weapon requires two hands when you attack with it.`,
    category: "property",
  },
  {
    name: "Versatile",
    description: `A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.`,
    category: "property",
  },
  {
    name: "Whirl",
    description: `When you are wielding the twinblade in two hands, you can use a bonus action to attempt to whirl the weapon. To whirl, make a DC 10 Dexterity check, adding your proficiency bonus if you are proficient with twinblades. On a success, you gain a +1 bonus to your AC until the start of your next turn, the whirling blades acting as a barrier against attacks. On a result of 15 or higher, you gain a +2 bonus, instead. On a failure, you deal slashing damage to yourself equal to your proficiency bonus and gain no bonus to your AC from the whirl this turn.`,
    category: "property",
  },
  {
    name: "Firearm",
    description: `You don't add your ability modifier to the weapon's damage, unless otherwise stated. Firearm ammunition is destroyed upon use.`,
    category: "property",
  },
  {
    name: "Recoil",
    description: `After you make an attack with this weapon, you can't make ranged attacks beyond the weapon's normal range until the end of the current turn.`,
    category: "property",
  },

  // Shield Properties
  {
    name: "Buckler",
    description: `Though this small round shield offers less protection than larger models, it handily obfuscates your movements to confuse your enemies. While wielding this shield, you can make a Charisma (Deception) check as
    a bonus action, contested by another creature's Wisdom (Insight) check. On a success, you make your next attack against that creature before the end of your turn with advantage.`,
    category: "property",
  },
  {
    name: "Bladed",
    description: `The rim of this shield is fitted with sharp, curved blades. When you make an attack with this shield, you can choose whether the damage it deals is bludgeoning or slashing damage.`,
    category: "property",
  },
  {
    name: "Heraldic",
    description: `This fine shield bears an emblem or coat of arms associated with an organization, such as
    a knightly order or civil guard, the faith of a particular god, or a location, such as your country of origin. While you visibly carry this shield, you have advantage on Charisma checks to interact with members of the shield's displayed affiliation.`,
    category: "property",
  },
  {
    name: "Lantern",
    description: `This metal shield comes with a hooded lantern that can be hung from a hook on the shield's rim, allowing you to illuminate your path while keeping a hand free.`,
    category: "property",
  },
  {
    name: "Spiked",
    description: `This shield is outfitted with formidable metal spikes. A creature who attempts to grapple you takes 1d4 piercing damage, plus an extra 1d4 piercing damage at the start of each of their turns while grappling you. Additionally, attacks made with this shield deal an extra 1d4 piercing damage on a hit.`,
    category: "property",
  },
  {
    name: "Tower",
    description: `While wielding this heavy shield, ranged weapon attacks against you have disadvantage, but you can't add your Dexterity modifier to your Armor Class and you have disadvantage on Dexterity (Stealth) checks.`,
    category: "property",
  },
  {
    name: "Cumbersome",
    description: `A shield with the cumber- some property can't be effectively thrown regardless of its wielder's class features or other abilities.
`,
    category: "property",
  },

  // Mastery Properties
  {
    name: "Cleave",
    description: `If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.`,
    category: "mastery",
  },

  {
    name: "Graze",
    description: `If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.`,
    category: "mastery",
  },
  {
    name: "Nick",
    description: `When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.`,
    category: "mastery",
  },
  {
    name: "Push",
    description: `If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller.`,
    category: "mastery",
  },
  {
    name: "Sap",
    description: `If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.`,
    category: "mastery",
  },
  {
    name: "Slow",
    description: `If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.`,
    category: "mastery",
  },
  {
    name: "Topple",
    description: `If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.`,
    category: "mastery",
  },
  {
    name: "Vex",
    description: `If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.`,
    category: "mastery",
  },

  {
    name: "Automatic",
    description: `When you make an attack with this weapon, you can choose to make two attacks instead. These attacks are always made with Disadvantage, regardless of circumstance. You can't replace these attacks. If this weapon has the Ammunition property, these attacks use twice the normal amount of ammunition.`,
    category: "mastery",
  },

  {
    name: "Explode",
    description: `When you take the Attack action, you can replace one of your attacks with an explosion from this weapon's projectile. This explosion is a 5-foot-radius Sphere centered on a point you choose within the weapon's normal range. Each creature within the Sphere makes a Dexterity saving throw (DC 8 plus your Strength or Dexterity modifier and your Proficiency Bonus). On a failed save, a creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. On a successful save, a creature takes half as much damage. You can create an explosion only once per turn.`,
    category: "mastery",
  },
  {
    name: "Scatter",
    description: `Being within 5 feet of an enemy doesn't impose Disadvantage on your ranged attack rolls with this weapon.`,
    category: "mastery",
  },

  {
    name: "Sighted",
    description: `Attacking at long range with this weapon doesn't impose Disadvantage on your attack rolls. When you hit a creature with an attack using this weapon at long range, you can reroll any of the damage dice and must use the new roll.`,
    category: "mastery",
  },

  //
  //   fill: {
  //     name: "fill",
  //     description: ``,
  //   },
];

export default equipmentProperties;
