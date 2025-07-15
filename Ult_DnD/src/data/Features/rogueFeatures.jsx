export const rogueFeatures = {
  "Sneak Attack": {
    name: "Sneak Attack",
    descriptions: `You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack roll if you have Advantage on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.

    You don't need Advantage on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the Incapacitated condition, and you don't have Disadvantage on the attack roll.

    The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table.
`,
  },
  "Thieves' Cant": {
    name: "Thieves' Cant",
    descriptions: `You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice.`,
  },
  "Cunning Action": {
    name: "Cunning Action",
    descriptions: `Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a Bonus Action: Dash, Disengage, or Hide.`,
  },
  "Steady Action": {
    name: "Steady Action",
    descriptions: `As a Bonus Action, you give yourself Advantage on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your Speed is 0 until the end of the current turn.`,
  },
  "Cunning Action": {
    name: "Cunning Action",
    descriptions: `You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove 1d6 from the Sneak Attack's damage before rolling.

    If a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency Bonus.

    Poison (Cost: 1d6). You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the Poisoned condition for 1 minute. At the end of each of its turns, the Poisoned target repeats the save, ending the effect on itself on a success.

    To use this effect, you must have a Poisoner's Kit on your person.

    Trip (Cost: 1d6). If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the Prone condition.

    Withdraw (Cost: 1d6). Immediately after the attack, you move up to half your Speed without provoking Opportunity Attacks.`,
  },
  "Uncanny Dodge": {
    name: "Uncanny Dodge",
    descriptions: `When an attacker that you can see hits you with an attack roll, you can take a Reaction to halve the attack's damage against you (round down).`,
  },
  Evasion: {
    name: "Evasion",
    descriptions: `You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the Incapacitated condition.,`,
  },
  "Reliable Talent": {
    name: "Reliable Talent",
    descriptions: `Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a d20 roll of 9 or lower as a 10.`,
  },
  "Improved Cunning Strike": {
    name: "Improved Cunning Strike",
    descriptions: `You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect.`,
  },
  "Devious Strikes": {
    name: "Devious Strikes",
    descriptions: `You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.

    Daze (Cost: 2d6). The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a Bonus Action.

    Knock Out (Cost: 6d6). The target must succeed on a Constitution saving throw, or it has the Unconscious condition for 1 minute or until it takes any damage. The Unconscious target repeats the save at the end of each of its turns, ending the effect on itself on a success.

    Obscure (Cost: 3d6). The target must succeed on a Dexterity saving throw, or it has the Blinded condition until the end of its next turn.`,
  },
  "Slippery Mind": {
    name: "Slippery Mind",
    descriptions: `Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.`,
  },
  Elusive: {
    name: "Elusive",
    descriptions: `You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have Advantage against you unless you have the Incapacitated condition.`,
  },
  "Stroke of Luck": {
    name: "Stroke of Luck",
    descriptions: `You have a marvelous knack for succeeding when you need to. If you fail a d20 Test, you can turn the roll into a 20.

    Once you use this feature, you can't use it again until you finish a Short or Long Rest.`,
  },

  // Subclasses

  // Arcane Trickster
  "Spellcasting (Arcane Trickster)": {
    name: "Spellcasting (Arcane Trickster)",
    descriptions: `
    You have learned to cast spells.

    Cantrips. You know three cantrips: Mage Hand and two other cantrips of your choice from the Wizard spell list.

    Whenever you gain a Rogue level, you can replace one of your cantrips, except Mage Hand, with another Wizard cantrip of your choice.

    When you reach Rogue level 10, you learn another Wizard cantrip of your choice.

    Spell Slots. The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended spell slots when you finish a Long Rest.
    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 Wizard spells.

    The number of spells on your list increases as you gain Rogue levels, as shown in the Prepared Spells column of the Arcane Trickster Spellcasting table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the Arcane Trickster Spellcasting table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Rogue, your list of prepared spells can include five Wizard spells of level 1 or 2 in any combination.

    Changing Your Prepared Spells. Whenever you gain a Rogue level, you can replace one spell on your list with another Wizard spell for which you have spell slots.

    Spellcasting Ability. Intelligence is your spellcasting ability for your Wizard spells.

    Spellcasting Focus. You can use an Arcane Focus as a Spellcasting Focus for your Wizard spells.`,
  },
  "Mage Hand Legerdemain": {
    name: "Mage Hand Legerdemain",
    descriptions: `When you cast Mage Hand, you can cast it as a Bonus Action, and you can make the spectral hand Invisible. You can control the hand as a Bonus Action, and through it, you can make Dexterity (Sleight of Hand) checks.`,
  },
  "Magical Ambush": {
    name: "Magical Ambush",
    descriptions: `If you have the Invisible condition when you cast a spell on a creature, it has Disadvantage on any saving throw it makes against the spell on the same turn.`,
  },
  "Versatile Trickster": {
    name: "Versatile Trickster",
    descriptions: `You gain the ability to distract targets with your Mage Hand. When you use the Trip option of your Cunning Strike on a creature, you can also use that option on another creature within 5 feet of the spectral hand.`,
  },
  "Spell Thief": {
    name: "Spell Thief",
    descriptions: `You gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.

    Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can take a Reaction to force the creature to make an Intelligence saving throw. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least level 1 and of a level you can cast (it doesn't need to be a Wizard spell). For the next 8 hours, you have the spell prepared. The creature can't cast it until the 8 hours have passed.

    Once you steal a spell with this feature, you can't use this feature again until you finish a Long Rest.`,
  },

  // Assassin

  Assassinate: {
    name: "Assassinate",
    descriptions: `You're adept at ambushing a target, granting you the following benefits.

    Initiative. You have Advantage on Initiative rolls.

    Surprising Strikes. During the first round of each combat, you have Advantage on attack rolls against any creature that hasn't taken a turn. If your Sneak Attack hits any target during that round, the target takes extra damage of the weapon's type equal to your Rogue level.`,
  },
  "Assassin's Tools": {
    name: "Assassin's Tool",
    descriptions: `You gain a Disguise Kit and a Poisoner's Kit, and you have proficiency with them.`,
  },
  "Infiltration Expertise": {
    name: "Infiltration Expertise",
    descriptions: `You are expert at the following techniques that aid your infiltrations.

    Masterful Mimicry. You can unerringly mimic another person's speech, handwriting, or both if you have spent at least 1 hour studying them.

    Roving Aim. Your Speed isn't reduced to 0 by using Steady Aim.`,
  },
  "Envenom Weapons": {
    name: "Envenom Weapons",
    descriptions: `When you use the Poison option of your Cunning Strike, the target also takes 2d6 Poison damage whenever it fails the saving throw. This damage ignores Resistance to Poison damage.`,
  },
  "Death Strike": {
    name: "Death Strike",
    descriptions: `When you hit with your Sneak Attack on the first round of a combat, the target must succeed on a Constitution saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus), or the attack's damage is doubled against the target.`,
  },

  // Grim Surgeon

  Medic: {
    name: "Medic",
    description: `When you choose this archetype at 3rd level, you gain proficiency in the Medicine skill if you don't already have it. Your proficiency bonus is doubled for any ability check you make that uses this skill.

      In addition, your familiarity with blood has become magical, giving you some degree of control over it. As a result, you can use a bonus action to magically stabilize an unconscious creature within 5 feet of you.

      You can use this same magic when you apply traditional healing techniques. You can use a bonus action to expend one use of a healer's kit on a creature. When you do, that creature regains hit points equal 1d4 + your proficiency bonus. The creature can't regain hit points from this feature again until it finishes a short or long rest.
`,

    Transfusion: {
      name: "Transfusion",
      description: `Starting at 3rd level, once on each of your turns when you deal Sneak Attack damage to a creature that isn't a construct or an undead, you gain temporary hit points equal to your Rogue Level. When you reach 13th level, you gain temporary hit points equal to twice your Rogue Level instead. These temporary hit points last until the start of your next turn.`,
    },

    "Field Surgeon": {
      name: "Field Surgeon",
      description:
        "By 9th level, your medical expertise and blood magic allow you to painlessly mend an ally's wounds using surgical techniques. You decide to use this feature at the start of a short rest, choosing a willing creature within your reach when you do. Roll your Sneak Attack dice and record the result. At the end of the short rest, that creature regains a number of hit points equal to the total of your Sneak Attack dice roll. Once a creature regains hit points from this feature, it can't do so again until it finishes a long rest.",
    },

    "Toxic Shock": {
      name: "Toxic Shock",
      description: `At 13th level, when you gain temporary hit points from your Transfusion feature, the target of the attack is overcome by a wave of sickness. Until the end of its next turn, the target's speed is reduced by 10 feet, and it has disadvantage on the next attack roll or ability check that it makes before the end of its next turn.`,
    },

    Bloodbound: {
      name: "Bloodbound",
      description: `By 17th level, you can command the blood inside certain creatures. Immediately after you deal Sneak Attack damage to a beast or humanoid, you can force that creature to make a Constitution saving throw. The DC is equal to 8 + your proficiency bonus + your Wisdom modifier. On a failed save, that creature is under the effect of the dominate beast or dominate person spell, respectively, for 1 minute or until you choose to end the effect (no action required).

      Once you use this feature, you can't use it again until you finish a short or long rest.`,
    },
  },
  // Inquisitive

  // Mastermind

  // Phantom (UA)

  // Scion of the Three (UA)

  // Scout

  // Soulknife

  "Psionic Power (Soulknife)": {
    name: "Psionic Power (Soulknife)",
    description: `
            Class Level/ Die Size/ Number of Die

                        3	d6	4
                        5	d8	6
                        9	d8	8
                        11	d10	8
                        13	d10	10
                        17	d12	12

    Any features in this subclass that use a Psionic Energy Die use only the dice from this subclass. Some of your powers expend a Psionic Energy Die, as specified in a power's description, and you can't use a power if it requires you to use a die when your Psionic Energy Dice are all expended.

    You regain one of your expended Psionic Energy Dice when you finish a Short Rest, and you regain all of them when you finish a Long Rest.

    Psi-Bolstered Knack. If you fail an ability check using a skill or tool with which you have proficiency, you can roll one Psionic Energy Die and add the number rolled to the check, potentially turning failure into success. The die is expended only if the roll then succeeds.

    Psychic Whispers. You can establish telepathic communication between yourself and others. As a Magic action, choose one or more creatures you can see, up to a number of creatures equal to your Proficiency Bonus, and then roll one Psionic Energy Die. For a number of hours equal to the number rolled, the chosen creatures can speak telepathically with you, and you can speak telepathically with them. To send or receive a message (no action required), you and the other creature must be within 1 mile of each other. A creature can end the telepathic connection at any time (no action required).`,
  },
  "Psychic Blades": {
    name: "Psychic Blades",
    description: `You can manifest shimmering blades of psychic energy. Whenever you take the Attack action or make an Opportunity Attack, you can manifest a Psychic Blade in your free hand and make the attack with that blade. The magic blade has the following traits:

    Weapon Category: Simple Melee
    Damage on a Hit: 1d6 Psychic plus the ability modifier used for the attack roll
    Properties: Finesse, Thrown (range 60/120 feet)
    Mastery: Vex (you can use this property, and it doesn’t count against the number of properties you can use with Weapon Mastery)

    The blade vanishes immediately after it hits or misses its target, and it leaves no mark if it deals damage.

    After you attack with the blade on your turn, you can make a melee or ranged attack with a second psychic blade as a Bonus Action on the same turn if your other hand is free to create it. The damage die of this bonus attack is 1d4 instead of 1d6.`,
  },
  "Soul Blades": {
    name: "Soul Blades",
    description: `You can now use the following powers with your Psychic Blades.

    Homing Strikes. If you make an attack roll with your Psychic Blade and miss the target, you can roll one Psionic Energy Die and add the number rolled to the attack roll. If this causes the attack to hit, the die is expended.

    Psychic Teleportation. As a Bonus Action, you manifest a Psychic Blade, expend one Psionic Energy Die and roll it, and throw the blade at an unoccupied space you can see up to a number of feet away equal to 10 times the number rolled. You then teleport to that space, and the blade vanishes.`,
  },
  "Psychic Veil": {
    name: "Psychic Veil",
    description: `You can weave a veil of psychic static to mask yourself. As a Magic action, you gain the Invisible condition for 1 hour or until you dismiss this effect (no action required). This invisibility ends early immediately after you deal damage to a creature or you force a creature to make a saving throw.

    Once you use this feature, you can't do so again until you finish a Long Rest unless you expend a Psionic Energy Die (no action required) to restore your use of it.`,
  },
  "Rend Mind": {
    name: "Rend Mind",
    description: `You can sweep your Psychic Blades through a creature's mind. When you use your Psychic Blades to deal Sneak Attack damage to a creature, you can force that target to make a Wisdom saving throw (DC 8 plus your Dexterity modifier and Proficiency Bonus). If the save fails, the target has the Stunned condition for 1 minute. The Stunned target repeats the save at the end of each of its turns, ending the effect on itself on a success.

    Once you use this feature, you can't do so again until you finish a Long Rest unless you expend three Psionic Energy Dice (no action required) to restore your use of it.`,
  },

  // Swashbuckler

  // Thief

  "Fast Hands": {
    name: "Fast Hands",
    description: `As a Bonus Action, you can do one of the following.

    Sleight of Hand. Make a Dexterity (Sleight of Hand) check to pick a lock or disarm a trap with Thieves' Tools or to pick a pocket.

    Use an Object. Take the Utilize action, or take the Magic action to use a magic item that requires that action.`,
  },
  "Second-Story Work": {
    name: "Second-Story Work",
    description: `You've trained to get into especially hard-to-reach places, granting you these benefits.

    Climber. You gain a Climb Speed equal to your Speed.

    Jumper. You can determine your jump distance using your Dexterity rather than your Strength.`,
  },
  "Supreme Sneak": {
    name: "Supreme Sneak",
    descriptions: `You gain the following Cunning Strike option.

    Stealth Attack (Cost: 1d6). If you have the Hide action's Invisible condition, this attack doesn't end that condition on you if you end the turn behind Three-Quarters Cover or Total Cover.`,
  },
  "Use Magic Device": {
    name: "Use Magic Device",
    description: ``,
  },
  "Thief's Reflexes": {
    name: "Thief's Reflexes",
    description: ``,
  },

  // Extra

  "": {
    name: "",
    description: ``,
  },
};
