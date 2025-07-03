export const clericFeatures = {
  // Cleric
  "Spellcasting(Cleric)": {
    name: "Spellcasting(Cleric)",
    description: `You have learned to cast spells through prayer and meditation. The information below details how you use those rules with Cleric spells, which appear on the Cleric spell list.
    Cantrips. You know three cantrips of your choice from the Cleric spell list.

    Whenever you gain a Cleric level, you can replace one of your cantrips with another cantrip of your choice from the Cleric spell list.

    When you reach Cleric levels 4 and 10, you learn another cantrip of your choice from the Cleric spell list, as shown in the Cantrips column of the Cleric Features table.

    Spell Slots. The Cleric Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Cleric spell list.

    The number of spells on your list increases as you gain Cleric levels, as shown in the Prepared Spells column of the Cleric Features table. Whenever that number increases, choose additional spells from the Cleric spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you’re a level 3 Cleric, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

    If another Cleric feature gives you spells that you always have prepared, those spells don’t count against the number of spells you can prepare with this feature, but those spells otherwise count as Cleric spells for you.

    Changing Your Prepared Spells. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with other Cleric spells for which you have spell slots.

    Spellcasting Ability. Wisdom is your spellcasting ability for your Cleric spells.

    Spellcasting Focus. You can use a Holy Symbol as a Spellcasting Focus for your Cleric spells.`,
  },
  "Divine Order": {
    name: "Divine Order",
    description: `You have dedicated yourself to one of the following sacred roles of your choice.

    Protector
     - Trained for battle, you gain proficiency with Martial weapons and training with Heavy armor.

    Thaumaturge
    - You know one extra cantrip from the Cleric spell list. In addition, your mystical connection to the divine gives you a bonus to your Intelligence (Arcana or Religion) checks. The bonus equals your Wisdom modifier (minimum of +1).`,
  },
  "Channel Divinity": {
    name: "Channel Divinity",
    description: `You can channel divine energy directly from the Outer Planes to fuel magical effects. You start with two such effects: Divine Spark and Turn Undead, each of which is described below. Each time you use this class's Channel Divinity, choose which Channel Divinity effect from this class to create. You gain additional effect options at higher Cleric levels.

    You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain additional uses when you reach certain Cleric levels, as shown in the Channel Divinity column of the Cleric Features table.

    If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

    Divine Spark. As a Magic action, you point your Holy Symbol at another creature you can see within 30 feet of yourself and focus divine energy at it. Roll 1d8 and add your Wisdom modifier. You either restore Hit Points to the creature equal to that total or force the creature to make a Constitution saving throw. On a failed save, the creature takes Necrotic or Radiant damage (your choice) equal to that total. On a successful save, the creature takes half as much damage (round down).

    You roll an additional d8 when you reach Cleric levels 7 (2d8), 13 (3d8), and 18 (4d8).

    Turn Undead. As a Magic action, you present your Holy Symbol and censure Undead creatures. Each Undead of your choice within 30 feet of you must make a Wisdom saving throw. If the creature fails its save, it has the Frightened and Incapacitated conditions for 1 minute. For that duration, it tries to move as far from you as it can on its turns. This effect ends early on the creature if it takes any damage, if you have the Incapacitated condition, or if you die.`,
  },
  "Sear Undead": {
    name: "Sear Undead",
    description:
      "Whenever you use Turn Undead, you can roll a number of d8s equal to your Wisdom modifier (minimum of 1d8) and add the rolls together. Each Undead that fails its saving throw against that use of Turn Undead takes Radiant damage equal to the roll's total. This damage doesn't end the turn effect.",
  },
  "Blessed Strikes": {
    name: "Blessed Strikes",
    description: `Divine power infuses you in battle. You gain one of the following options of your choice (if you get either option from a Cleric subclass in an older book, use only the option you choose for this feature).

    Divine Strike. Once on each of your turns when you hit a creature with an attack roll using a weapon, you can cause the target to take an extra 1d8 Necrotic or Radiant damage (your choice).

    Potent Spellcasting. Add your Wisdom modifier to the damage you deal with any Cleric cantrip.

`,
  },
  "Divine Intervention": {
    name: "Divine Intervention",
    description:
      "You can call on your deity or pantheon to intervene on your behalf. As a Magic action, choose any Cleric spell of level 5 or lower that doesn't require a Reaction to cast. As part of the same action, you cast that spell without expending a spell slot or needing Material components. You can't use this feature again until you finish a Long Rest.",
  },
  "Improved Blessed Strikes": {
    name: "Improved Blessed Strikes",
    description: `The option you chose for Blessed Strikes grows more powerful.

    Divine Strike
    The extra damage of your Divine Strike increases to 2d8.

    Potent Spellcasting
    When you cast a Cleric cantrip and deal damage to a creature with it, you can give vitality to yourself or another creature within 60 feet of yourself, granting a number of Temporary Hit Points equal to twice your Wisdom modifier.`,
  },
  "Greater Divine Intervention": {
    name: "Greater Divine Intervention",
    description: `You can call on even more powerful divine intervention. When you use your Divine Intervention feature, you can choose Wish when you select a spell. If you do so, you can't use Divine Intervention again until you finish 2d4 Long Rests.`,
  },
  // Cleric Subclasses
};
