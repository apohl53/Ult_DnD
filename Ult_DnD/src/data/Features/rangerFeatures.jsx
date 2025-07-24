export const rangerFeatures = {
  "Spellcasting (Ranger)": {
    name: "Spellcasting (Ranger)",
    description: `Spell Slots. The Ranger Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose two level 1 Ranger spells.

    The number of spells on your list increases as you gain Ranger levels, as shown in the Prepared Spells column of the Ranger Features table. Whenever that number increases, choose additional Ranger spells until the number of spells on your list matches the number in the Ranger Features table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 5 Ranger, your list of prepared spells can include six Ranger spells of level 1 or 2 in any combination.

    If another Ranger feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Ranger spells for you.

    Changing Your Prepared Spells. Whenever you finish a Long Rest, you can replace one spell on your list with another Ranger spell for which you have spell slots.

    Spellcasting Ability. Wisdom is your spellcasting ability for your Ranger spells.

    Spellcasting Focus. You can use a Druidic Focus as a Spellcasting Focus for your Ranger spells.`,
  },
  "Favored Enemy": {
    name: "Favored Enemy",
    description: `You always have the Hunter's Mark spell prepared. You can cast it twice without expending a spell slot, and you regain all expended uses of this ability when you finish a Long Rest.

    The number of times you can cast the spell without a spell slot increases when you reach certain Ranger levels.`,
  },
  "Deft Explorer": {
    name: "Deft Explorer",
    description: `Thanks to your travels, you gain the following benefits.

    Expertise. Choose one of your skill proficiencies with which you lack Expertise. You gain Expertise in that skill.

    Languages. You know two languages of your choice.`,
  },
  Roving: {
    name: "Roving",
    description: `Your Speed increases by 10 feet while you aren't wearing Heavy armor. You also have a Climb Speed and a Swim Speed equal to your Speed.`,
  },
  Tireless: {
    name: "Tireless",
    description: `Primal forces now help fuel you on your journeys, granting you the following benefits.

    Temporary Hit Points. As a Magic action, you can give yourself a number of Temporary Hit Points equal to 1d8 plus your Wisdom modifier (minimum of 1). You can use this action a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

    Decrease Exhaustion. Whenever you finish a Short Rest, your Exhaustion level, if any, decreases by 1.`,
  },
  "Relentless Hunter": {
    name: "Relentless Hunter",
    description: `Taking damage can't break your Concentration on Hunter's Mark.`,
  },
  "Nature's Veil": {
    name: "Nature's Veil",
    description: `You invoke spirits of nature to magically hide yourself. As a Bonus Action, you can give yourself the Invisible condition until the end of your next turn.

    You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.`,
  },
  "Precise Hunter": {
    name: "Precise Hunter",
    description: `You have Advantage on attack rolls against the creature currently marked by your Hunter's Mark.`,
  },
  "Feral Senses": {
    name: "Feral Senses",
    description: `Your connection to the forces of nature grants you Blindsight with a range of 30 feet.`,
  },
  "Foe Slayer": {
    name: "Foe Slayer",
    description: `The damage die of your Hunter's Mark is a d10 rather than a d6.`,
  },

  // Subclasses

  // Beastmaster
  "Primal Companion": {
    name: "Primal Companion",
    description: `You magically summon a primal beast, which draws strength from your bond with nature. Choose its stat block: Beast of the Land, Beast of the Sea, or Beast of the Sky. You also determine the kind of animal it is, choosing a kind appropriate for the stat block. Whatever beast you choose, it bears primal markings indicating its supernatural origin.

    The beast is Friendly to you and your allies and obeys your commands. It vanishes if you die.

    The Beast in Combat. In combat, the beast acts during your turn. It can move and use its Reaction on its own, but the only action it takes is the Dodge action unless you take a Bonus Action to command it to take an action in its stat block or some other action. You can also sacrifice one of your attacks when you take the Attack action to command the beast to take the Beast's Strike action. If you have the Incapacitated condition, the beast acts on its own and isn't limited to the Dodge action.

    Restoring or Replacing the Beast. If the beast has died within the last hour, you can take a Magic action to touch it and expend a spell slot. The beast returns to life after 1 minute with all its Hit Points restored.

    Whenever you finish a Long Rest, you can summon a different primal beast, which appears in an unoccupied space within 5 feet of you. You choose its stat block and appearance. If you already have a beast from this feature, the old one vanishes when the new one appears.
`,
  },
  "Exceptional Training": {
    name: "Exceptional Training",
    description: `When you take a Bonus Action to command your Primal Companion beast to take an action, you can also command it to take the Dash, Disengage, Dodge, or Help action using its Bonus Action.

    In addition, whenever it hits with an attack roll and deals damage, it can deal your choice of Force damage or its normal damage type.
`,
  },
  "Bestial Fury": {
    name: "Bestial Fury",
    description: `When you command your Primal Companion beast to take the Beast's Strike action, the beast can use it twice.

    In addition, the first time each turn it hits a creature under the effect of your Hunter's Mark spell, the beast deals extra Force damage equal to the bonus damage of that spell.`,
  },
  "Share Spells": {
    name: "Share Spells",
    description: `When you cast a spell targeting yourself, you can also affect your Primal Companion beast with the spell if the beast is within 30 feet of you.`,
  },
  // Fey Wanderer

  "Dreadful Strikes": {
    name: "Dreadful Strikes",
    description: `You can augment your weapon strikes with mind-scarring magic drawn from the murky hollows of the Feywild. When you hit a creature with a weapon, you can deal an extra 1d4 Psychic damage to the target, which can take this extra damage only once per turn. The extra damage increases to 1d6 when you reach Ranger level 11.
`,
  },
  "Otherwordly Glamour": {
    name: "Otherwordly Glamour",
    description: ``,
  },
  "Fey Wanderer Spells": {
    name: "Fey Wanderer Spells",
    description: `When you reach a Ranger level specified in the Fey Wanderer Spells table, you thereafter always have the listed spells prepared.

            Fey Wanderer Spells
        3	Charm Person
        5	Misty Step
        9	Summon Fey
        13	Dimension Door
        17	Mislead`,
  },
  "Beguiling Twist": {
    name: "Beguiling Twists",
    description: `The magic of the Feywild guards your mind. You have Advantage on saving throws to avoid or end the Charmed or Frightened condition.

    In addition, whenever you or a creature you can see within 120 feet of you succeeds on a saving throw to avoid or end the Charmed or Frightened condition, you can take a Reaction to force a different creature you can see within 120 feet of yourself to make a Wisdom save against your spell save DC. On a failed save, the target is Charmed or Frightened (your choice) for 1 minute. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.`,
  },
  "Fey Reinforcements": {
    name: "Fey Reinforcements",
    description: `You can cast Summon Fey without a Material component. You can also cast it once without a spell slot, and you regain the ability to cast it in this way when you finish a Long Rest.

    Whenever you start casting the spell, you can modify it so that it doesn't require Concentration. If you do so, the spell's duration becomes 1 minute for that casting.`,
  },
  "Misty Wanderer": {
    name: "Misty Wanderer",
    description: `You can cast Misty Step without expending a spell slot. You can do so a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

    In addition, whenever you cast Misty Step, you can bring along one willing creature you can see within 5 feet of yourself. That creature teleports to an unoccupied space of your choice within 5 feet of your destination space.`,
  },

  // Gloom Stalker

  "Gloom Stalker Spells": {
    name: "Gloom Stalker Spells",
    description: `When you reach a Ranger level specified in the Gloom Stalker Spells table, you thereafter always have the listed spells prepared.

                Gloom Stalker Spells

            3	Disguise Self
            5	Rope Trick
            9	Fear
            13	Greater Invisibility
            17	Seeming`,
  },
  "Dread Ambusher": {
    name: "Dread Ambusher",
    description: `You have mastered the art of creating fearsome ambushes, granting you the following benefits.

    Ambusher's Leap. At the start of your first turn of each combat, your Speed increases by 10 feet until the end of that turn.

    Dreadful Strike. When you attack a creature and hit it with a weapon, you can deal an extra 2d6 Psychic damage. You can use this benefit only once per turn, you can use it a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

    Initiative Bonus. When you roll Initiative, you can add your Wisdom modifier to the roll.`,
  },
  "Umbral Sight": {
    name: "Umbral Sight",
    description: `You gain Darkvision with a range of 60 feet. If you already have Darkvision when you gain this feature, its range increases by 60 feet.

    You are also adept at evading creatures that rely on Darkvision. While entirely in Darkness, you have the Invisible condition to any creature that relies on Darkvision to see you in that Darkness.`,
  },
  "Iron Mind": {
    name: "Iron Mind",
    description: `You have honed your ability to resist mind-altering powers. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you instead gain proficiency in Intelligence or Charisma saving throws (your choice).`,
  },
  "Stalker's Flurry": {
    name: "Stalker's Flurry",
    description: `The Psychic damage of your Dreadful Strike becomes 2d8. In addition, when you use the Dreadful Strike effect of your Dread Ambusher feature, you can cause one of the following additional effects.

    Sudden Strike. You can make another attack with the same weapon against a different creature that is within 5 feet of the original target and that is within the weapon's range.

    Mass Fear. The target and each creature within 10 feet of it must make a Wisdom saving throw against your spell save DC. On a failed save, a creature has the Frightened condition until the start of your next turn.`,
  },
  "Shadowy Dodge": {
    name: "Shadowy Dodge",
    description: `When a creature makes an attack roll against you, you can take a Reaction to impose Disadvantage on that roll. Whether the attack hits or misses, you can then teleport up to 30 feet to an unoccupied space you can see.
`,
  },

  // Hunter

  "Hunter's Lore": {
    name: "Hunter's Lore",
    description: `You can call on the forces of nature to reveal certain strengths and weaknesses of your prey. While a creature is marked by your Hunter's Mark, you know whether that creature has any Immunities, Resistances, or Vulnerabilities, and if the creature has any, you know what they are.`,
  },
  "Hunter's Prey": {
    name: "Hunter's Prey",
    description: `You gain one of the following feature options of your choice. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.

    Colossus Slayer
    Your tenacity can wear down even the most resilient foes. When you hit a creature with a weapon, the weapon deals an extra 1d8 damage to the target if it's missing any of its Hit Points. You can deal this extra damage only once per turn.

    Horde Breaker
    Once on each of your turns when you make an attack with a weapon, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target, that is within the weapon's range, and that you haven't attacked this turn.`,
  },
  "Defensive Tactics": {
    name: "Defensive Tactics",
    description: `You gain one of the following feature options of your choice. Whenever you finish a Short or Long Rest, you can replace the chosen option with the other one.

    Escape the Horde
    Opportunity Attacks have Disadvantage against you.

    Multiattack Defense
    When a creature hits you with an attack roll, that creature has Disadvantage on all other attack rolls against you this turn.`,
  },
  "Superior Hunter's Prey": {
    name: "Superior Hunter's Prey",
    description: `Once per turn when you deal damage to a creature marked by your Hunter's Mark, you can also deal that spell's extra damage to a different creature that you can see within 30 feet of the first creature.`,
  },
  "Superior Hunter's Defense": {
    name: "Superior Hunter's Defense",
    description: `When you take damage, you can take a Reaction to give yourself Resistance to that damage and any other damage of the same type until the end of the current turn.`,
  },

  // Trail Warden

  "Trail Warden Spells": {
    name: "Trail Warden Spells",
    description: `When you reach a Ranger level specified in the Trailwarden Spells table, you thereafter always have the listed spells prepared.

               Ranger Level	Spells  

                3	Goodberry
                5	Pass Without Trace
                9	Spirit Guardians
                13	Guardian of Faith
                17	Mass Cure Wounds`,
  },
  "Coordinated Tactics": {
    name: "Coordinated Tactics",
    description: `You have an innate understanding of coordinating teamwork. It is represented by your Teamwork Die, which is used in the powers you have from this subclass. The Teamwork Die table shows the die size when you reach certain Ranger levels.

At the start of your turn, roll your Teamwork Die and use that result for it until the start of your next turn when you reroll it.

Coordinated Strikes. When another creature you can see hits a target with an attack roll, you can take a Reaction to roll your Teamwork Die and add the number rolled to the attack's damage against the target. The damage is of the same type dealt by the original attack.

Coordinated Tactics. You grant your allies the ability to harmonize their positions on the battlefield. At the start of your turn, after you roll your Teamwork Die you can choose any number of willing creatures within 60 feet of you that can see you. Each of the chosen creatures can take a Reaction to move up to a number of feet equal to 5 times the number rolled or up to its Speed, whichever is lower. This movement doesn't provoke Opportunity Attack action and ignores Difficult Terrain.

            Ranger Level	-> Teamwork Die
            3 -> d6
            11 ->	d8
            17 ->	d10`,
  },
  "Lead the Way": {
    name: "Lead the Way",
    description: `When you make an ability check with a skill proficiency in which you have Expertise and succeed, you can choose other creatures within 60 feet of yourself. Until the start of your next turn, each of the chosen creatures gains a bonus to the same check equal to a roll of your Teamwork Die.`,
  },
  "Tactical Assault": {
    name: "Tactical Assault",
    description: `Your ability to direct the movement and attacks of your allies improves.

    Each ally you choose with your Coordinate Tactics feature that can see or hear you gains one of the following benefits of their choice.

    Guardian Maneuver. Until the start of your next turn, the first time the ally takes damage, they can reduce the damage taken by the number rolled on your Teamwork Die.

    Recon Maneuver. When an ally takes a Reaction to move, it can take the Hide action as part of that Reaction. It gains a bonus to the Dexterity (Stealth) check equal to the number rolled on your Teamwork Die.`,
  },
  "Coordinated Effort": {
    name: "Coordinated Effort",
    description: `When you roll Initiative, you can roll your Teamwork Die if you don't have the Incapacitated condition; you and each ally within 30 feet of you that can see or hear you gains a bonus to Initiative equal to the number rolled.`,
  },
  "Group Assault": {
    name: "Group Assault",
    description: `You coordinate your allies in their attacks against a powerful foe. If you take the Attack action and each attack you make is against the same target, you can choose other creatures within 60 feet of yourself. Each of the chosen creatures gains a bonus to one attack roll and damage roll equal to the number rolled on your Teamwork Die against the same target.`,
  },
};
