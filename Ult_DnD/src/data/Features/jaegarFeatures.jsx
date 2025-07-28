export const jaegarFeatures = {
  "Flexible Combatant": {
    name: "Flexible Combatant",
    description: `Beginning at 1st level, you can draw or stow two one- handed weapons when you would normally be able to draw or stow only one, and you can reload weapons with the loading, reload, or barrel properties without a free hand.

    Additionally, if you are carrying a one-handed melee weapon in one hand, and a one-handed ranged weapon in the other, you do not have disadvantage from being within 5 feet of a hostile creature on attacks made with that ranged weapon.`,
  },
  Focus: {
    name: "Focus",
    description: `Starting at 1st level, your concentration during battle is razor sharp, letting you keenly focus during critical moments. You have 1 Focus Point. You gain additional Focus Points at 2nd, 5th, 9th, 13th, and 17th level, as shown on the Jaeger table. You can expend Focus Points to use Focus Arts. You learn two such Focus Arts: Weapon Parry and Dodge Step. You learn one additional Focus Art of your choice at 2nd, 7th, 13th, and 17th level. Your Focus Art options are detailed at the end of the class description.

    You regain all expended Focus Points when you finish a short or long rest. When you roll a 20 on a saving throw or an attack roll against a hostile creature, you regain 1 Focus Point. When you roll initiative and have no Focus Points remaining, you regain 1 Focus Point.
    
    - Weapon Parry -
    Focus Art, reaction
    As a reaction to being hit by a creature you can see within range of a weapon you are holding, you can expend 1 Focus Point to make a special weapon attack against that creature. This attack does no damage, but instead blocks an amount of damage from the incoming attack equal to the weapon's damage roll (including your ability modifier), unless your attack roll is a 1. On a 20, any weapon damage dice are rolled twice (like a critical hit would be), and if this total fully blocks the incoming attack, the target is stunned until the start of its next turn.

    - Dodge Step -
    Focus Art, reaction
    As a reaction to being attacked by a creature you can see, if your speed is not 0, you can expend 1 Focus Point to move 5 feet without provoking opportunity attacks and make a Dexterity saving throw with a DC equal to the attacker's attack roll (including modifiers). On a success, you evade completely and take no damage. On a failure, you halve the attack's damage against you.
`,
  },
  "Eldritch Hunter": {
    name: "Eldritch Hunter",
    description: `Also at 1st level, when you make an ability check to track or identify an aberration, celestial, fiend, monstrosity, or undead, you can add your proficiency bonus to the ability check. If you are already proficient in the ability check, you can double your proficiency bonus.`,
  },
  Momentum: {
    name: "Momentum",
    description: `Starting at 2nd level, any time you expend a Focus Point, you gain 1 Momentum die, which is a d6. This die changes as you gain jaeger levels, as shown in the Jaeger table. You can have a maximum number of Momentum dice equal to your proficiency bonus + your Strength or Dexterity modifier (whichever is higher). Whenever you gain a Momentum die, or if you attack or end your turn within 5 feet of a hostile creature, all of your Momentum dice last until the end of your next turn.

    While you have 1 or more Momentum dice, you can expend all of your Momentum dice to execute a Finisher. You know the Brutal Finisher. You learn one additional Finisher (listed at the end of the class description) of your choice at 4th, 6th, 8th, and 12th level, and may gain others through Jaeger Chapter features.`,
  },
  "Fighting Style (Jaegar)": {
    name: "Fighting Style (Jaegar)",
    description: `At 2nd level, you adopt a style of fighting as your specialty. In addition to the normal styles you may pick from these additional options:
    
    - Flexible Fighting
        You can engage in two-weapon fighting with any weapons you can wield in one hand, including one- handed ranged weapons and weapons without the light property. When you do so, you gain a +1 bonus to the damage rolls of both weapons.
    
    - Focused Fighting
        You learn an additional Focus Art, and you gain 1 additional Focus Point.`,
  },
  "Piercing Gaze": {
    name: "Piercing Gaze",
    description: `Also at 3rd level, you gain the ability to activate a magical sight at will (no action required), allowing you to effortlessly pierce the gloom and see what lurks within. For 1 hour, you gain darkvision out to a range of 60 feet. If you already have darkvision, its range increases to 120 feet. This vision lets you see normally in dim light and darkness, both magical and nonmagical.

    When you reach 7th level, you also gain the effect of see invisibility for the duration, and when you reach 13th level, you additionally gain the effect of true seeing for the duration.

    Once you use this feature, you can't use it again until you finish a long rest.`,
  },
  "Seasoned Survivor": {
    name: "Seasoned Survivor",
    description: `At 4th level, you gain advantage on Investigation checks made to find secret passages, interpret markings or messages left by other creatures on walls or surfaces, or determine the fate of creatures from blood stains and remains.`,
  },
  "Hunter's Pursuit": {
    name: "Hunter's Pursuit",
    description: `Starting at 6th level, at the start of your turn, you can expend 1 Focus Point to immediately move up to half your speed without using any of your movement and without provoking opportunity attacks.`,
  },
  "Lethal Tempo": {
    name: "Lethal Tempo",
    description: `Starting at 11th level, the first time you hit a creature on your turn, you gain 1 Momentum die. You gain 1 additional Momentum die any time you reduce a creature to 0 hit points.`,
  },
  "Relentless Pursuit": {
    name: "Relentless Pursuit",
    description: `Starting at 13th level, when you use your Hunter's Pursuit, if you end your movement next to a hostile creature, you regain the expended Focus Point.`,
  },
  "Inured to Madness": {
    name: "Inured to Madness",
    description: `At 15th level, you gain advantage on saving throws against being charmed or frightened, and against effects that cause madness. If you fail a saving throw against madness, you can expend 1 Focus Point to reroll the die. You must use the new roll.`,
  },
  "Eternal Watch": {
    name: "Eternal Watch",
    description: `Starting at 18th level, you are always under the effect of your Piercing Gaze.`,
  },
  "Always Ready": {
    name: "Always Ready",
    description: `Starting at 20th level, once per round (beginning at the start of each of your turns), you gain one additional reaction, which you can only use on a Focus Art that requires a reaction (such as Weapon Parry or Dodge Step). When you expend a Focus Point on this special reaction, you immediately regain the expended Focus Point.`,
  },

  // Subclasses

  // Marauder
  "Path of Gore": {
    name: "Path of Gore",
    description: `Starting at 3rd level, you learn the Great Cleave Finisher. This does not count against your Finishers known.


    Great Cleave
    Finisher, special

    When you hit a creature with an attack using a weapon with the two-handed property, you can expend all of your Momentum dice. When you do so, the attack deals extra damage equal to 1 Momentum die to the target, and you cleave a number of adjacent targets within reach equal to the number of dice expended. Make a melee weapon attack against each creature targeted. You regain 1 Focus Point for each creature this reduces to 0 hit points, up to your maximum number of Focus Points.`,
  },
  "Marauder Momentum": {
    name: "Marauder Momentum",
    description: `Also at 3rd level, while you are wielding a melee weapon with the two-handed property, the size of your Momentum die is increased by one step (from a d6 to a d8, to a d10 at 11th level, and to a d12 at 17th level).

    Additionally, while you are wearing medium armor, you can add your Constitution modifier (to a maximum of +2) instead of your Dexterity modifier to determine your Armor Class.`,
  },
  "Leap Attack": {
    name: "Leap Attack",
    description: `At 7th level, once per turn, if you move more than 15 feet toward a creature (or fall 10 feet or more) immediately before making a weapon attack against them, you deal extra damage on a hit equal to your Momentum die.

    When falling, you can make this attack prior to hitting the ground if there is a target creature in range where you would fall. On a hit, any falling damage you take is reduced by half, and you do not fall prone from the fall.`,
  },
  "Fell the Leviathan": {
    name: "Fell the Leviathan",
    description: `Starting at 14th level, whenever you use a Finisher, the target must succeed on a Strength saving throw (DC = 8 + your Strength modifier + your proficiency bonus) or be knocked prone. Creatures that are Large or larger have disadvantage on this saving throw.`,
  },
  "Titanic Strength": {
    name: "Titanic Strength",
    description: `Starting at 17th level, your strength is so great that you can wield a two-handed weapon in one hand, and can use two-weapon fighting even when the weapons you are wielding aren't light (including using two- handed weapons).

    If you use two hands to wield a two-handed weapon, your attacks with it deal extra damage equal to half your Strength modifier (rounded up) on a hit.

    Additionally, when you use a Finisher, you can double the number of Momentum dice you have (to no more than your maximum Momentum dice + 1). Once you've doubled your dice, you can't do so again until you finish a long rest.`,
  },

  // Salvation

  "Art of Salvation": {
    name: "Art of Salvation",
    description: `At 3rd level, you learn the Prayer of Salvation Focus Art. This does not count against your Focus Arts known.

    Prayer of Salvation
    Focus Art, bonus action

    As a bonus action, you expend 1 Focus Point. You and one creature of your choice you can see within 60 feet of you each regain 1d6 hit points and gain an equal number of temporary hit points.`,
  },
  "Savior's Focus": {
    name: "Savior's Focus",
    description: `Also at 3rd level, you find new strength in the most desperate hours. When an allied creature you can see or hear is reduced to 0 hit points, you regain 1 Focus Point. Once you use this feature, you can't do so again for 1 minute.`,
  },
  "Santifying Light": {
    name: "Santifying Light",
    description: `Starting at 7th level, when you expend a Focus Point, you can choose to emit a glow of divine light until the end of your next turn, illuminating a 20-foot radius in bright light and an additional 20 feet in dim light. The light is sunlight. Any allied creature that enters the bright light for the first time on a turn or starts its turn there gains 1d6 + your proficiency bonus hit points. This light is extinguished if you become incapacitated.`,
  },
  "Purifying Salvation": {
    name: "Purifying Salvation",
    description: `Starting at 14th level, your Prayer of Salvation Focus Art can target an additional creature, and the number of hit points it restores and temporary hit points it grants increases to 1d12.

    Additionally, if any of the targets are charmed, frightened, poisoned, or suffering from a short-term madness, you can cleanse the condition from them, ending it.`,
  },
  "Light of Hope": {
    name: "Light of Hope",
    description: `Starting at 17th level, as a bonus action, you can unleash a blinding light from within for 1 minute, illuminating the darkness. You gain the following benefits for the duration:

    • The radius of your Sanctifying Light increases to 30 feet of bright light and 30 feet of dim light. You and each creature of your choice within the bright light are under the effect of bless. Creatures in the bright light have advantage on death saving throws, do not die at three failed saves, and becomes stable with three successful saves, even if they have three or more failed saves. A creature that is no longer within the bright light of this effect and is not stable dies if they have failed three or more death saving throws.

    • When you use Prayer of Salvation, you immediately regain the expended Focus Point.

    These benefits end early if you become incapacitated, or end this feature early as a bonus action. Once you use this feature, you can't use it again until you finish a long rest.`,
  },

  // Sanguine
  "Vital Consumption": {
    name: "Vital Consumption",
    description: `Starting at 3rd level, you gain the ability to draw power from the flowing blood of your foes. You learn the Blood Drain Finisher, which does not count against your Finishers known. Some of your abilities use a Blood Magic save DC, which is calculated as follows:

    Blood Magic save DC = 8 + your Intelligence or Constitution modifier (your choice) + your proficiency modifier.

    Blood Drain
    Finisher, bonus action

    As a bonus action, you can expend all of your Momentum dice to drain the blood of a creature within 5 feet of you magically consuming its vitality as your own. The target must make a Constitution saving throw against your Blood Magic save DC. On a failed save, it takes necrotic damage equal to the number rolled on each of the expended Momentum dice. On successful save, it takes half as much damage. Success or failure, you regain hit points equal to half the necrotic damage dealt.

    If the target is bloodied (has half its maximum hit points or fewer) after taking the damage from this Finisher or if you use this Finisher against a creature suffering from an effect that makes it bleed (such as Hemorrhaging Wound), you regain 1 Focus Point.`,
  },
  "Crimson Rage": {
    name: "Crimson Rage",
    description: `Also at 3rd level, when you become bloodied (have half your maximum hit points or fewer), you regain 1 Focus Point and gain 1 Momentum die. You cannot benefit from this feature again for 1 minute.`,
  },
  "Blood Hex": {
    name: "Blood Hex",
    description: `Starting at 7th level, when you use your Blood Drain Finisher and the target fails its saving throw, you can invoke a blood hex, selecting one of the following effects:

    • Blood Puppet. The target must use its reaction to move up to 5 feet in a direction of your choice (if the target's reaction is unavailable, it cannot move).

    • Bound Blood. The target's speed is reduced by half until the start of your next turn.

    • Burning Blood. The target takes fire damage equal to half the necrotic damage dealt.
`,
  },
  "Empowered Blood Hex": {
    name: "Empowered Blood Hex",
    description: `Starting at 14th level, you can invoke more powerful blood hexes. You gain the following options, each of which are improved versions of the hexes granted by Blood Hex, but cost 2 Focus Points to invoke.

    • Blood Puppet (Empowered). The target must use its reaction to move up to 5 feet and make a single weapon attack against a creature of your choice (if the target's reaction is unavailable, it cannot move).

    • Bound Blood (Empowered). The target is restrained until the start of your next turn.

    • Burning Blood (Empowered). At the start of each of its turns, the target takes fire damage equal to the necrotic damage dealt. The target can repeat the saving throw it made against the Blood Drain Finisher at the end of each of its turns, ending the effect on a success.`,
  },
  "Blood Frenzy": {
    name: "Blood Frenzy",
    description: `
    Starting at 17th level, while bloodied (have half your maximum hit points or fewer) you gain the following the benefits:

    • Your speed is increased by 20 feet.

    • When you take the attack action, the number of attacks you make increases to three.

    • All hit points you regain from your jaeger abilities are doubled.

    • You can use the Blood Craze Focus Art.
    
    Blood Craze
    Focus Art, reaction

    As a reaction to being reduced to 0 hit points but not killed outright, you can expend 1 Focus Point to drop to 1 hit point instead.
    Note: Blood Craze
    This is a Focus Art, so it works with Always Ready (which grants an additional reaction), making the Sanguine Chapter fairly difficult to stop at 20th level.
 `,
  },

  //
  //   "fill fill": {
  //     name: "fill fill",
  //     description: ``,
  //   },
};
