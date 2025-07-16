export const paladinFeatures = {
  "Lay on Hands": {
    name: "Lay on Hands",
    description: `Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you finish a Long Rest. With that pool, you can restore a total number of Hit Points equal to five times your Paladin level.

    As a Bonus Action, you can touch a creature (which could be yourself) and draw power from the pool of healing to restore a number of Hit Points to that creature, up to the maximum amount remaining in the pool.

    You can also expend 5 Hit Points from the pool of healing power to remove the Poisoned condition from the creature; those points don't also restore Hit Points to the creature.`,
  },
  "Spellcasting (Paladin)": {
    name: "Spellcasting (Paladin)",
    description: `You have learned to cast spells through prayer and meditation.

    Spell Slots. The Paladin Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Paladin spells.

    The number of spells on your list increases as you gain Paladin levels, as shown in the Prepared Spells column of the Paladin Features table. Whenever that number increases, choose additional Paladin spells until the number of spells on your list matches the number in the Paladin Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Paladin, your list of prepared spells can include six Paladin spells of level 1 or 2 in any combination.

    If another Paladin feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Paladin spells for you.

    Changing Your Prepared Spells. Whenever you finish a Long Rest, you can replace one spell on your list with another Paladin spell for which you have spell slots.

    Spellcasting Ability. Charisma is your spellcasting ability for your Paladin spells.

    Spellcasting Focus. You can use a Holy Symbol as a Spellcasting Focus for your Paladin spells.`,
  },
  "Paladin's Smite": {
    name: "Paladin's Smite",
    description:
      "You always have the Divine Smite spell prepared. In addition, you can cast it without expending a spell slot, but you must finish a Long Rest before you can cast it in this way again.",
  },
  "Channel Divinity (Paladin)": {
    name: "Channel Divinity (Paladin)",
    description: `You can channel divine energy directly from the Outer Planes, using it to fuel magical effects. You start with one such effect: Divine Sense, which is described below. Other Paladin features give additional Channel Divinity effect options. Each time you use this class's Channel Divinity, you choose which effect from this class to create.

    You can use this class's Channel Divinity twice. You regain one of its expended uses when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest. You gain an additional use when you reach Paladin level 11.

    If a Channel Divinity effect requires a saving throw, the DC equals the spell save DC from this class's Spellcasting feature.

    Divine Sense. As a Bonus Action, you can open your awareness to detect Celestials, Fiends, and Undead. For the next 10 minutes or until you have the Incapacitated condition, you know the location of any creature of those types within 60 feet of yourself, and you know its creature type. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the Hallow spell.`,
  },
  "Faithful Steed": {
    name: "Faithful Steed",
    description: `You can call on the aid of an otherworldly steed. You always have the Find Steed spell prepared.

    You can also cast the spell once without expending a spell slot, and you regain the ability to do so when you finish a Long Rest.`,
  },
  "Aura of Protection": {
    name: "Aura of Protection",
    description: `You radiate a protective, unseeable aura in a 10-foot Emanation that originates from you. The aura is inactive while you have the Incapacitated condition.

    You and your allies in the aura gain a bonus to saving throws equal to your Charisma modifier (minimum bonus of +1).

    If another Paladin is present, a creature can benefit from only one Aura of Protection at a time; the creature chooses which aura while in them.`,
  },
  "Abjure Foes": {
    name: "Abjure Foes",
    description: `As a Magic action, you can expend one use of this class's Channel Divinity to overwhelm foes with awe. As you present your Holy Symbol or weapon, you can target a number of creatures equal to your Charisma modifier (minimum of one creature) that you can see within 60 feet of yourself. Each target must succeed on a Wisdom saving throw or have the Frightened condition for 1 minute or until it takes any damage. While Frightened in this way, a target can do only one of the following on its turns: move, take an action, or take a Bonus Action.`,
  },
  "Aura of Courage": {
    name: "Aura of Courage",
    description:
      "You and your allies have Immunity to the Frightened condition while in your Aura of Protection. If a Frightened ally enters the aura, that condition has no effect on that ally while there.",
  },
  "Radiant Strikes": {
    name: "Radiant Strikes",
    description:
      "Your strikes now carry supernatural power. When you hit a target with an attack roll using a Melee weapon or an Unarmed Strike, the target takes an extra 1d8 Radiant damage.",
  },
  "Restoring Touch": {
    name: "Restoring Touch",
    description:
      "When you use Lay On Hands on a creature, you can also remove one or more of the following conditions from the creature: Blinded, Charmed, Deafened, Frightened, Paralyzed, or Stunned. You must expend 5 Hit Points from the healing pool of Lay On Hands for each of these conditions you remove; those points don't also restore Hit Points to the creature.",
  },
  "Aura Expansion": {
    name: "Aura Expansion",
    description: "Your Aura of Protection is now a 30-foot Emanation.",
  },

  // Subclass Features

  // Oath of Devotion

  "Devoted Oath": {
    name: "Devoted Oath",
    description: `The Oath of Devotion binds Paladins to the ideals of justice and order. These Paladins meet the archetype of the knight in shining armor. They hold themselves to the highest standards of conduct, and some—for better or worse—hold the rest of the world to the same standards.

    These paladins share the following tenets:

            Let your word be your promise.
            Protect the weak and never fear to act.
            Let your honorable deeds be an example.`,
  },
  "Oath of Devotion Spells": {
    name: "Oath of Devotion Spells",
    description: `When you reach a Paladin level specified in the Oath of Devotion Spells table, you thereafter always have the listed spells prepared.

    3	Protection from Evil and Good, Shield of Faith
    5	Aid, Zone of Truth
    9	Beacon of Hope, Dispel Magic
    13	Freedom of Movement, Guardian of Faith
    17	Commune, Flame Strike`,
  },
  "Sacred Weapon": {
    name: "Sacred Weapon",
    description: `When you take the Attack action, you can expend one use of your Channel Divinity to imbue one Melee weapon that you are holding with positive energy. For 10 minutes or until you use this feature again, you add your Charisma modifier to attack rolls you make with that weapon (minimum bonus of +1), and each time you hit with it, you cause it to deal its normal damage type or Radiant damage.

    The weapon also emits Bright Light in a 20-foot radius and Dim Light 20 feet beyond that.

    You can end this effect early (no action required). This effect also ends if you aren't carrying the weapon.`,
  },
  "Aura of Devotion": {
    name: "Aura of Devotion",
    description:
      "You and your allies have Immunity to the Charmed condition while in your Aura of Protection. If a Charmed ally enters the aura, that condition has no effect on that ally while there.",
  },
  "Smite of Protection": {
    name: "Smite of Protection",
    description:
      "Your magical smite now radiates protective energy. Whenever you cast Divine Smite, you and your allies have Half Cover while in your Aura of Protection. The aura has this benefit until the start of your next turn.",
  },
  "Holy Nimbus": {
    name: "Holy Nimbus",
    description: `As a Bonus Action, you can imbue your Aura of Protection with holy power, granting the benefits below for 10 minutes or until you end them (no action required). Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).

    Holy Ward. You have Advantage on any saving throw you are forced to make by a Fiend or an Undead.

    Radiant Damage. Whenever an enemy starts its turn in the aura, that creature takes Radiant damage equal to your Charisma modifier plus your Proficiency Bonus.

    Sunlight. The aura is filled with Bright Light that is sunlight.`,
  },

  // Oath of Glory

  "Glorious Oath": {
    name: "Glorious Oath",
    description: `Paladins who take the Oath of Glory believe they and their companions are destined to achieve glory through deeds of heroism. They train diligently and encourage their companions, so they're all ready when destiny calls.

    These paladins share the following tenets:

            Endeavor to be known by your deeds.
            Face hardships with courage.
            Inspire others to strive for glory.`,
  },
  "Oath of Glory Spells": {
    name: "Oath of Glory Spells",
    description: `When you reach a Paladin level specified in the Oath of Glory Spells table, you thereafter always have the listed spells prepared.

                Oath of Glory Spells

            3	Guiding Bolt, Heroism
            5	Enhance Ability, Magic Weapon
            9	Haste, Protection from Energy
            13	Compulsion, Freedom of Movement
            17	Legend Lore, Yolande's Regal Presence`,
  },
  "Inspiring Smite": {
    name: "Inspiring Smite",
    description:
      "Immediately after you cast Divine Smite, you can expend one use of your Channel Divinity and distribute Temporary Hit Points to creatures of your choice within 30 feet of yourself, which can include you. The total number of Temporary Hit Points equals 2d8 plus your Paladin level, divided among the chosen creatures however you like.",
  },

  "Peerless Athlete": {
    name: "Peerless Athlete",
    description:
      "As a Bonus Action, you can expend one use of your Channel Divinity to augment your athleticism. For 1 hour, you have Advantage on Strength (Athletics) and Dexterity (Acrobatics) checks, and the distance of your Long and High Jumps increases by 10 feet (this extra distance costs movement as normal).",
  },
  "Aura of Alacrity": {
    name: "Aura of Alacrity",
    description: `Your Speed increases by 10 feet.

    In addition, whenever an ally enters your Aura of Protection for the first time on a turn or starts their turn there, the ally's Speed increases by 10 feet until the end of their next turn.`,
  },
  "Glorious Defense": {
    name: "Glorious Defense",
    description: `You can turn defense into a sudden strike. When you or another creature you can see within 10 feet of you is hit by an attack roll, you can take a Reaction to grant a bonus to the target's AC against that attack, potentially causing it to miss. The bonus equals your Charisma modifier (minimum of +1). If the attack misses, you can make one attack with a weapon against the attacker as part of this Reaction if the attacker is within your weapon's range.

    You can use this feature a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.`,
  },
  "Living Legend": {
    name: "Living Legend",
    description: `You can empower yourself with the legends—whether true or exaggerated—of your great deeds. As a Bonus Action, you gain the benefits below for 10 minutes. Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).

    Charismatic. You are blessed with an otherworldly presence and have Advantage on all Charisma checks.

    Saving Throw Reroll. If you fail a saving throw, you can take a Reaction to reroll it. You must use this new roll.

    Unerring Strike. Once on each of your turns when you make an attack roll with a weapon and miss, you can cause that attack to hit instead.`,
  },

  // Oath of the Ancients

  "Ancient Oath": {
    name: "Ancient Oath",
    description: `The Oath of the Ancients is as old as the first elves. Paladins who swear this oath cherish the light; they love the beautiful and life-giving things of the world more than any principles of honor, courage, and justice. They often adorn their armor and clothing with images of growing things—leaves, antlers, or flowers—to reflect their commitment to preserving life and light.

    These paladins share the following tenets:

        Kindle the light of hope.
        Shelter life.
        Delight in art and laughter.`,
  },
  "Nature's Wrath": {
    name: "Nature's Wrath",
    description: `As a Magic action, you can expend one use of your Channel Divinity to conjure spectral vines around nearby creatures. Each creature of your choice that you can see within 15 feet of yourself must succeed on a Strength saving throw or have the Restrained condition for 1 minute. A Restrained creature repeats the save at the end of each of its turns, ending the effect on itself on a success.`,
  },
  "Oath of Ancients Spells": {
    name: "Oath of Ancients Spells",
    description: `When you reach a Paladin level specified in the Oath of the Ancients Spells table, you thereafter always have the listed spells prepared.

            Oath of the Ancients Spells

        3	Ensnaring Strike, Speak with Animals
        5	Misty Step, Moonbeam
        9	Plant Growth, Protection from Energy
        13	Ice Storm, Stoneskin
        17	Commune with Nature, Tree Stride`,
  },
  "Aura of Warding": {
    name: "Aura of Warding",
    description:
      "Ancient magic lies so heavily upon you that it forms an eldritch ward, blunting energy from beyond the Material Plane; you and your allies have Resistance to Necrotic, Psychic, and Radiant damage while in your Aura of Protection.",
  },
  "Undying Sentinel": {
    name: "Undying Sentinel",
    description: `When you are reduced to 0 Hit Points and not killed outright, you can drop to 1 Hit Point instead, and you regain a number of Hit Points equal to three times your Paladin level. Once you use this feature, you can't do so again until you finish a Long Rest.

    Additionally, you can't be aged magically, and you cease visibly aging.`,
  },
  "Elder Champion": {
    name: "Elder Champion",
    description: `As a Bonus Action, you can imbue your Aura of Protection with primal power, granting the benefits below for 1 minute or until you end them (no action required). Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 5 spell slot (no action required).

    Diminish Defiance. Enemies in the aura have Disadvantage on saving throws against your spells and Channel Divinity options.

    Regeneration. At the start of each of your turns, you regain 10 Hit Points.

    Swift Spells. Whenever you cast a spell that has a casting time of an action, you can cast it using a Bonus Action instead.`,
  },

  // Oath of Vengeance

  "Aura Expansion": {
    name: "Aura Expansion",
    description: "",
  },
  "Aura Expansion": {
    name: "Aura Expansion",
    description: "",
  },
  "Aura Expansion": {
    name: "Aura Expansion",
    description: "",
  },
  "Aura Expansion": {
    name: "Aura Expansion",
    description: "",
  },
  "Aura Expansion": {
    name: "Aura Expansion",
    description: "",
  },
};
