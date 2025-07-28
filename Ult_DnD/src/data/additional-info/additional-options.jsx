const options = {
  // Artificer Infusions

  //  Wild Magic Rage Table

  // Bard Stories Table

  // Beastheart Companions
  "Beastheart Companions": [
    { name: "Abyssal Hyena", type: "Fiend" },
    { name: "Basilisk", type: "Monstrosity" },
    { name: "Bear", type: "Beast" },
    { name: "Blood-Borne Ooze", type: "Ooze" },
    { name: "Blood Hawk", type: "Beast" },
    { name: "Camel", type: "Beast" },
    { name: "Chimera", type: "Monstrosity" },
    { name: "Clawfish", type: "Beast" },
    { name: "Crawling Claw", type: "Undead" },
    { name: "Drangolin", type: "Dragon" },
    { name: "Earth Elemental", type: "Elemental" },
    { name: "Gem Jelly", type: "Ooze" },
    { name: "Gibbering Mouther", type: "Aberration" },
    { name: "Griffon", type: "Beast" },
    { name: "Hellhound", type: "Fiend" },
    { name: "Kingfissure Worm", type: "Monstrosity" },
    { name: "Leyleech", type: "Monstrosity" },
    { name: "Lightbender", type: "Monstrosity" },
    { name: "Manticore", type: "Monstrosity" },
    { name: "Mimic", type: "Monstrosity" },
    { name: "Mohler", type: "Beast" },
    { name: "Otyugh", type: "Aberration" },
    { name: "Owlbear", type: "Monstrosity" },
    { name: "Rotbeast", type: "Beast" },
    { name: "Shambling Mound", type: "Plant" },
    { name: "Skitterling", type: "Beast" },
    { name: "Stirge", type: "Monstrosity" },
    { name: "Stoneback Isopod", type: "Beast" },
    { name: "Wildcat", type: "Beast" },
    { name: "Worg", type: "Monstrosity" },
    { name: "Wyvern", type: "Dragon" },
  ],

  // Beastheart Exploits

  "Beastheart Exploits": [
    {
      name: "Aid Us, Friend",
      ferocity: "3",
      prerequisite: "Level 2+",
      description: `You can activate this exploit whenever you take the Attack action Before or after you attack, your companion can take the Help action as a bonus action`,
    },
    {
      name: "Bring Them Down",
      ferocity: "4",
      prerequisite: "2+",
      description:
        "When your com- panion hits a creature with their signature attack, you can use your reaction to command the companion to yank the target down The target must succeed on a Strength saving throw or fall prone",
    },
    {
      name: "Drag Them",
      ferocity: "4",
      prerequisite: "2+",
      description: `When your companion hits a Large or smaller creature with their signature attack and both the companion and the target are standing on the ground, you can use your reaction to command your companion to move the target The target must make a Strength saving throw On a failure, the companion moves up to half their walking speed in any direction you choose and pulls the target with it`,
    },
    {
      name: "Feral Reflexes",
      ferocity: "2",
      prerequisite: "2+",
      description:
        "When you or your companion is hit by an attack, you can use your reac- tion to increase the target's AC by 2 against the trigger- ing attack",
    },
    {
      name: "Hurricane Blow",
      ferocity: "3",
      prerequisite: "2+",
      description:
        "You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, the attack deals its normal efects, and you can push the target up to 10 feet away from you",
    },
    {
      name: "No Escape",
      ferocity: "1+",
      prerequisite: "2+",
      description:
        "At the start of your turn when your companion gains ferocity and doesn't enter a rampage, you can spend up to your Wisdom modifer in ferocity (minimum 1; no action required) Until the start of your next turn, your speed or your companion's speed (your choice) increases by 5 feet x the ferocity spent",
    },
    {
      name: "Primal Pounce",
      ferocity: "3",
      prerequisite: "2+",
      description:
        "When your companion hits a creature with their signature attack, you can use your reaction to command the companion to grapple the target The target must make a Dexterity saving throw On a failure, the companion grabs the target and the target is grappled (escape DC equal to your exploit save DC) The grapple also ends if your companion attacks a creature other than the target",
    },
    {
      name: "Quick Hide",
      ferocity: "2",
      prerequisite: "2+",
      description:
        "You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, your companion can take the Hide action as a reaction if they are able to hide",
    },
    {
      name: "Thrash",
      ferocity: "4",
      prerequisite: "2+",
      description: `When your companion hits a Large or smaller creature with a melee signature attack, you can use your reaction to command the companion to thrash the target from side to side, forcing them to make a Wisdom saving throw On a failure, the target has disadvantage on attack rolls, and attack rolls against the target have advantage, until the start of your next turn`,
    },
    {
      name: "Crushing Charge",
      ferocity: "8",
      prerequisite: "10+",
      description: `As an action, you move up to your speed in a straight line without provok- ing opportunity attacks You can move through other creatures' spaces, but must end your move in an unoccu- pied space Each creature in a space you move through, except for your companion, must make a Strength saving throw On a failure, a creature takes 4d6 bludgeoning damage and is knocked prone On a success, the creature takes half as much damage and isn't knocked prone

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Expanding Fury",
      ferocity: "6",
      prerequisite: "10+",
      description: `When your compan- ion uses a ferocity action that afects creatures within a specific distance of the companion, you can use your reaction to expand that distance by 10 feet`,
    },
    {
      name: "Furious Vengeance",
      ferocity: "5",
      prerequisite: "10+",
      description: `When a creature hits you or your companion with a melee attack, you can use your reaction to deal 4d6 psychic damage to the attacker.

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Marked Prey",
      ferocity: "4",
      prerequisite: "10+",
      description: `When your companion uses a ferocity action that requires a creature to make a saving throw, you can use your reaction to impose disad- vantage on the save`,
    },
    {
      name: "Primal Shout",
      ferocity: "6",
      prerequisite: "10+",
      description: `As an action, you let loose a menacing bellow Each creature of your choice that can hear you within 15 feet of you must succeed on a Wis- dom saving throw or become frightened of you until the end of your next turn`,
    },
    {
      name: "Wrath of the Pack",
      ferocity: "4",
      prerequisite: "10+",
      description: `When you hit a creature with an attack and that creature is within 5 feet of your companion, you can have your companion make a signature attack against the creature (no action required) On a hit, the attack deals its normal efects, and the target is knocked prone`,
    },
    {
      name: "Blood Sport",
      ferocity: "16",
      prerequisite: "17+",
      description: `When you hit a Large or smaller creature with a melee weapon attack, you can also push the target up to 30 feet away from you and knock them prone If the target ends this move within 5 feet of your companion, the companion can make a sig- nature attack against the target (no action required) On a hit, the attack deals its normal efects, and the target is pushed up to 30 feet away from your companion If the target ends this move within 5 feet of you, you can make a melee weapon attack against them (no action required) that deals an extra 4d6 damage if it hits`,
    },
    {
      name: "Break the Earth",
      ferocity: "14",
      prerequisite: "17+",
      description: `As an action, you open a 10-foot-radius pit in the ground, foor, or other surface within 60 feet of you The pit can be up to 50 feet deep, depending on the depth beneath the surface where it is opened Each creature standing in the area when the pit opens must make a Dexterity saving throw On a failure, a creature falls into the pit, taking 1d6 bludgeon- ing damage per 10 feet fallen and landing prone On a success, the creature moves to an unoccupied space of their choice at the edge of the pit A creature can climb the rough walls of the pit without an ability check`,
    },
    {
      name: "Bury the Dead",
      ferocity: "16",
      prerequisite: "17+",
      description: `When you and your companion are within 5 feet of a creature, you can use an action to cause a vicious whirlwind flled with debris and dirt to rise around the creature, which must make a Dex- terity saving throw On a failure, the creature takes 8d6 bludgeoning damage, is knocked prone, and is restrained On a success, the target takes half as much damage and isn't knocked prone or restrained A creature restrained this way can use an action to make a Strength (Athletics) check against your exploit save DC, freeing themself on a success`,
    },
    {
      name: "Imbue Projectile",
      ferocity: "14",
      prerequisite: "17+",
      description: ` As an action, you make a ranged weapon attack Whether or not the attack hits, a wave of energy explodes from the weapon or ammunition used in the attack, centered on your target Each creature within 20 feet of the target (including the target and excluding your companion) must make a Dex- terity saving throw, taking 10d6 force damage on a failed save, or half as much damage on a successful one`,
    },

    {
      name: "Rend",
      ferocity: "12",
      prerequisite: "17+",
      description: `As an action, choose a creature you can see within 5 feet of you and your companion You make a melee weapon attack against the target, and your companion makes a signature attack against the tar- get (no actions required) If you both hit and deal dam- age to the target, the target is knocked prone and takes an additional 6d6 damage of a type dealt by either attack (your choice)`,
    },
    {
      name: "Spirit Form",
      ferocity: "14",
      prerequisite: "17+",
      description: `As a bonus action, you make you and your companion incorporeal until the end of your next turn While incorporeal, you each have resistance to acid, cold, fre, lightning, and thunder dam- age, and to bludgeoning, piercing, and slashing damage from nonmagical attacks While incorporeal, you and your companion each gain a fying speed equal to your individual walking speed, and each of you can move through other creatures and objects as if they were dif- cult terrain Either of you takes 5 (1d10) force damage if you end your turn inside an object`,
    },
    // Infernal
    {
      name: "Drain Them",
      ferocity: "4",
      prerequisite: "3+, Infernal Bond",
      description: `When your companion hits another creature with their signature attack, you can use your reaction to have your companion regain hit points equal to half the damage dealt`,
    },
    {
      name: "Hellish Wound",
      ferocity: "4",
      prerequisite: "3+, Infernal Bond",
      description: `When your compan- ion hits another creature other than a construct or an undead with their attack, you can have the attack deal a hellish wound to the creature (no action required) At the start of each of their turns, a target with a hellish wound loses 1d10 hit points for each hellish wound they have All of a target's hellish wounds close if they receive mag- ical healing, or if any creature uses an action to staunch the wounds with a successful Wisdom (Medicine) check with a DC equal to your exploit save DC`,
    },
    {
      name: "Infernal Teleport",
      ferocity: "4",
      prerequisite: "3+, Infernal Bond",
      description: `As an action, you or your companion (your choice) are surrounded by swirling shadow and smoke The target teleports to an unoccupied space within 90 feet of their starting position`,
    },
    {
      name: "Wicked Deception",
      ferocity: "3",
      prerequisite: "3+, Infernal Bond",
      description: `As an action, choose a creature hostile to you that you can see within 30 feet of you That creature must succeed on a Wisdom saving throw or suddenly view you and your companion as friends until the end of your next turn While in this state, the creature is unable to attack or otherwise harm you or your companion This efect ends early if you or your companion attacks the afected creature Creatures immune to the charmed condition can't be afected by this exploit`,
    },
    {
      name: "Brimstone Teleport",
      ferocity: "8",
      prerequisite: "11+, Infernal Bond",
      description: `As an action, you teleport to an unoccupied space that you can see within 30 feet of you Each creature within 5 feet of the space you leave and each creature within 5 feet of your desti- nation space must make a Dexterity saving throw, taking 4d6 fre damage on a failed save, or half as much damage on a successful one You and your companion take no damage from this efect

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Chains from Hell",
      ferocity: "8",
      prerequisite: "11+, Infernal Bond",
      description: `As an action, you manifest fery chains that attempt to wrap around up to three creatures of your choice that you can see within 30 feet of you Each target must make a Dexterity saving throw On a failure, a target takes 4d6 fre damage and is restrained until the end of your next turn On a success, a target takes half as much damage and isn't restrained

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Dark of Hell",
      ferocity: "8",
      prerequisite: "11+, Infernal Bond",
      description: `As an action, you cause your companion to radiate an aura of magical darkness in a 10-foot radius until the end of your next turn You and your companion can see within this darkness, which moves with your companion`,
    },
    {
      name: "Infernal Flames",
      ferocity: "8",
      prerequisite: "11+, Infernal Bond",
      description: `As an action, you cause a blast of fre to erupt from your companion Each creature within 20 feet of the companion must make a Dexterity saving throw, taking 4d10 fre damage on a failed save, or half as much damage on a successful one You and your companion take no damage from this efect

      When you reach 17th level, the damage increases to 5d10`,
    },
    {
      name: "Poison Rain",
      ferocity: "8",
      prerequisite: "11+, Infernal Bond",
      description: `As an action, you cause toxic green rain to fall in a 20-foot cube centered on a point you can see within 60 feet of you Each creature in the area except for you and your companion must suc- ceed on a Constitution saving throw or become poisoned until the end of your next turn`,
    },

    // Primordial Bond
    {
      name: "Elemental Shield",
      ferocity: "3",
      prerequisite: "3+, Primordial Bond",
      description: `When a creature you can see within 30 feet of you takes acid, cold, fre, lightning, or thunder damage, you can use a reaction to give the afected creature resistance to that damage type (including against the triggering attack) until the end of their next turn`,
    },
    {
      name: "Freezing Strike",
      ferocity: "2",
      prerequisite: "3+, Primordial Bond",
      description: `You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, the attack deals an extra 1d6 cold damage and the target's speed is reduced by 10 feet until the start of your next turn

      The extra damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)`,
    },
    {
      name: "Sickening Strike",
      ferocity: "3",
      prerequisite: "3+, Primordial Bond",
      description: `You can activate this exploit whenever you take the Attack action The frst time you hit a creature with a weapon attack this turn, the target must succeed on a Constitution saving throw or be poisoned until the start of your next turn`,
    },
    {
      name: "Wings When I Need Them",
      ferocity: "5",
      prerequisite: "3+, Primordial Bond",
      description: `At the start of your turn when your companion gains ferocity and doesn't enter a rampage, you can manifest a spectral eagle (no action required) that lifts you or your com- panion (your choice) to the sky The target gains a fy- ing speed equal to their walking speed until the start of their next turn`,
    },
    {
      name: "Lava Geyser",
      ferocity: "8",
      prerequisite: "11+, Primordial Bond",
      description: `As an action, you sum- mon a powerful rush of lava centered on a point on the ground you can see within 30 feet of you The lava flls a cylinder that is 10 feet tall with a 5-foot radius, and forces each creature in its area to make a Dexterity sav- ing throw On a failure, a creature takes 4d6 fre damage and is knocked prone On a success, a creature takes half as much damage and isn't knocked prone The lava then dissolves into fery mist and fades away

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Lightning Eruption",
      ferocity: "8",
      prerequisite: "11+, Primordial Bond",
      description: `When you hit a creature with a weapon attack, the attack deals an extra 5d6 lightning damage and you can choose one other creature within 30 feet of the target that you can see That creature must make a Dexterity saving throw, taking 5d6 lightning damage on a failed save, or half as much damage on a successful one

      When you reach 17th level, both instances of damage increase to 6d6`,
    },
    {
      name: "Plant Prison",
      ferocity: "5",
      prerequisite: "11+, Primordial Bond",
      description: `As an action, choose a creature you can see within 30 feet of you Thorny vines erupt from the ground beneath the target, which must make a Dexterity saving throw On a failure, the target takes 4d6 piercing damage and is restrained until the start of your next turn On a success, the target takes half as much damage and isn't restrained

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Stinging Storm",
      ferocity: "6",
      prerequisite: "11+, Primordial Bond",
      description: `As an action, you conjure a swarm of stinging insects in a line that is 5 feet wide and 30 feet long Each creature in the line except your companion must make a Constitution saving throw, taking 4d6 piercing damage on a failed save, or half as much damage on a successful one The insects then dis- solve to shadow and fade away

      When you reach 17th level, the damage increases to 5d6`,
    },
    {
      name: "Thunderous Rebuke",
      ferocity: "6",
      prerequisite: "11+, Primordial Bond",
      description: `When you or your companion is hit with a melee attack by a creature within 5 feet of that target, you can use your reaction to force the attacker to make a Constitution saving throw On a failure, the attacker takes 3d6 thunder damage and is pushed 10 feet away from the target On a success, the attacker takes half as much damage and isn't pushed

      When you reach 17th level, the damage increases to 4d6`,
    },
  ],

  // Fighter Battlemaster Maneuvers

  Maneuvers: [
    {
      name: "Ambush",
      description: `When you make a Dexterity (Stealth) check or an Initiative roll, you can expend one Superiority Die and add the die to the roll, unless you have the Incapacitated condition.`,
    },
    {
      name: "Bait and Switch",
      description: `When you're within 5 feet of a creature on your turn, you can expend one Superiority Die and switch places with that creature, provided you spend at least 5 feet of movement and the creature is willing and doesn't have the Incapacitated condition. This movement doesn't provoke Opportunity Attacks.

    Roll the Superiority Die. Until the start of your next turn, you or the other creature (your choice) gains a bonus to AC equal to the number rolled.`,
    },
    {
      name: "Commander's Strike",
      description: `When you take the Attack action on your turn, you can replace one of your attacks to direct one of your companions to strike. When you do so, choose a willing creature who can see or hear you and expend one Superiority Die. That creature can immediately use its Reaction to make one attack with a weapon or an Unarmed Strike, adding the Superiority Die to the attack's damage roll on a hit.`,
    },
    {
      name: "Commanding Presence",
      description: `When you make a Charisma (Intimidation, Performance, or Persuasion) check, you can expend one Superiority Die and add that die to the roll.`,
    },
    {
      name: "Disarming Attack",
      description: `When you hit a creature with an attack roll, you can expend one Superiority Die to attempt to disarm the target. Add the Superiority Die roll to the attack's damage roll. The target must succeed on a Strength saving throw or drop one object of your choice that it's holding, with the object landing in its space.`,
    },
    {
      name: "Distracting Strike",
      description: `When you hit a creature with an attack roll, you can expend one Superiority Die to distract the target. Add the Superiority Die roll to the attack's damage roll. The next attack roll against the target by an attacker other than you has Advantage if the attack is made before the start of your next turn.`,
    },
    {
      name: "Evasive Footwork",
      description: `As a Bonus Action, you can expend one Superiority Die and take the Disengage action. You also roll the die and add the number rolled to your AC until the start of your next turn.`,
    },
    {
      name: "Feinting Attack",
      description: `As a Bonus Action, you can expend one Superiority Die to feint, choosing one creature within 5 feet of yourself as your target. You have Advantage on your next attack roll against that target this turn. If that attack hits, add the Superiority Die to the attack's damage roll.`,
    },
    {
      name: "Goading Attack",
      description: `When you hit a creature with an attack roll, you can expend one Superiority Die to attempt to goad the target into attacking you. Add the Superiority Die to the attack's damage roll. The target must succeed on a Wisdom saving throw or have Disadvantage on attack rolls against targets other than you until the end of your next turn.`,
    },
    {
      name: "Lunging Attack",
      description: `As a Bonus Action, you can expend one Superiority Die and take the Dash action. If you move at least 5 feet in a straight line immediately before hitting with a melee attack as part of the Attack action on this turn, you can add the Superiority Die to the attack's damage roll.`,
    },
    {
      name: "Maneuvering Attack",
      description: `When you hit a creature with an attack roll, you can expend one Superiority Die to maneuver one of your comrades into another position. Add the Superiority Die roll to the attack's damage roll, and choose a willing creature who can see or hear you. That creature can use its Reaction to move up to half its Speed without provoking an Opportunity Attack from the target of your attack.`,
    },
    {
      name: "Menacing Attack",
      description: `When you hit a creature with an attack roll, you can expend one Superiority Die to attempt to frighten the target. Add the Superiority Die to the attack's damage roll. The target must succeed on a Wisdom saving throw or have the Frightened condition until the end of your next turn.`,
    },
    {
      name: "Parry",
      description: `When another creature damages you with a melee attack roll, you can take a Reaction and expend one Superiority Die to reduce the damage by the number you roll on your Superiority Die plus your Strength or Dexterity modifier (your choice).`,
    },
    {
      name: "Precision Attack",
      description: `When you miss with an attack roll, you can expend one Superiority Die, roll that die, and add it to the attack roll, potentially causing the attack to hit.`,
    },
    {
      name: "Pushing Attack",
      description: `When you hit a creature with an attack roll using a weapon or an Unarmed Strike, you can expend one Superiority Die to attempt to drive the target back. Add the Superiority Die to the attack's damage roll. If the target is Large or smaller, it must succeed on a Strength saving throw or be pushed up to 15 feet directly away from you.`,
    },
    {
      name: "Rally",
      description: `As a Bonus Action, you can expend one Superiority Die to bolster the resolve of a companion. Choose an ally of yours within 30 feet of yourself who can see or hear you. That creature gains Temporary Hit Points equal to the Superiority Die roll plus half your Fighter level (round down).`,
    },
    {
      name: "Riposte",
      description: `When a creature misses you with a melee attack roll, you can take a Reaction and expend one Superiority Die to make a melee attack roll with a weapon or an Unarmed Strike against the creature. If you hit, add the Superiority Die to the attack's damage.`,
    },
    {
      name: "Sweeping Attack",
      description: `When you hit a creature with a melee attack roll using a weapon or an Unarmed Strike, you can expend one Superiority Die to attempt to damage another creature. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your Superiority Die. The damage is of the same type dealt by the original attack.`,
    },
    {
      name: "Tactical Assessment",
      description: `When you make an Intelligence (History or Investigation) check or a Wisdom (Insight) check, you can expend one Superiority Die and add that die to the ability check.`,
    },
    {
      name: "Trip Attack",
      description: `When you hit a creature with an attack roll using a weapon or an Unarmed Strike, you can expend one Superiority Die and add the die to the attack's damage roll. If the target is Large or smaller, it must succeed on a Strength saving throw or have the Prone condition.`,
    },
  ],

  // Jaegar Options

  "Aerial Vault": {
    name: "Aerial Vault",
    type: "Focus Art",
    action: "Special",
    description: `When you make a jump, you can expend 1 Focus Point to double your jumping distance for that jump, and you can ignore difficult terrain until the end of your turn. When you use this Focus Art, the maximum distance you can jump isn't limited by your walking speed.`,
  },
  "Elemental Art": {
    name: "Elemental Art",
    type: "Focus Art",
    action: "Bonus Action",
    description: `As a bonus action, you expend 1 Focus Point and touch a weapon you're carrying. Choose between acid, cold, fire, or lightning. For 1 minute, the weapon deals that damage type instead of its normal type.`,
  },
  "Focus Mind": {
    name: "Focus Mind",
    type: "Focus Art",
    action: "Reaction",
    description: `As a reaction to making a saving throw against being charmed, frightened, or having your mind read or influenced, you can expend 1 Focus Point to gain advantage on the roll. If you already have advantage on the roll, you can reroll one of the dice once.`,
  },
  "fill fill": {
    name: "fill fill",
    type: "Focus Art",
    action: "special",
    description: ``,
  },
  "fill fill": {
    name: "fill fill",
    type: "Focus Art",
    action: "special",
    description: ``,
  },

  // Talent Psionic Exploits

  // Sorcerer Metamagic

  "Sorcerer Metamagic": [
    {
      name: "Careful Spell",
      cost: "1",
      description:
        "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, spend 1 Sorcery Point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell, and it takes no damage if it would normally take half damage on a successful save.",
    },
    {
      name: "Distant Spell",
      cost: "1",
      description:
        "When you cast a spell that has a range of at least 5 feet, you can spend 1 Sorcery Point to double the spell's range. Or when you cast a spell that has a range of Touch, you can spend 1 Sorcery Point to make the spell's range 30 feet.",
    },
    {
      name: "Empowered Spell",
      cost: "1",
      description: `When you roll damage for a spell, you can spend 1 Sorcery Point to reroll a number of the damage dice up to your Charisma modifier (minimum of one), and you must use the new rolls.

      You can use Empowered Spell even if you've already used a different Metamagic option during the casting of the spell.`,
    },
    {
      name: "Extended Spell",
      cost: "1",
      description: `When you cast a spell that has a duration of 1 minute or longer, you can spend 1 Sorcery Point to double its duration to a maximum duration of 24 hours.

      If the affected spell requires Concentration, you have Advantage on any saving throw you make to maintain that Concentration.`,
    },
    {
      name: "Heightened Spell",
      cost: "2",
      description:
        "When you cast a spell that forces a creature to make a saving throw, you can spend 2 Sorcery Points to give one target of the spell Disadvantage on saves against the spell.",
    },
    {
      name: "Quickened Spell",
      cost: "2",
      description:
        "When you cast a spell that has a casting time of an action, you can spend 2 Sorcery Points to change the casting time to a Bonus Action for this casting. You can't modify a spell in this way if you've already cast a level 1+ spell on the current turn, nor can you cast a level 1+ spell on this turn after modifying a spell in this way.",
    },
    {
      name: "Seeking Spell",
      cost: "1",
      description: `If you make an attack roll for a spell and miss, you can spend 1 Sorcery Point to reroll the d20, and you must use the new roll.

      You can use Seeking Spell even if you've already used a different Metamagic option during the casting of the spell.`,
    },
    {
      name: "Subtle",
      cost: "1",
      description:
        "When you cast a spell, you can spend 1 Sorcery Point to cast it without any Verbal, Somatic, or Material components, except Material components that are consumed by the spell or that have a cost specified in the spell.",
    },
    {
      name: "Transmuted Spell",
      cost: "1",
      description:
        "When you cast a spell that deals a type of damage from the following list, you can spend 1 Sorcery Point to change that damage type to one of the other listed types: Acid, Cold, Fire, Lightning, Poison, Thunder.",
    },
    {
      name: "Twinned Spell",
      cost: "1",
      description:
        "When you cast a spell, such as Charm Person, that can be cast with a higher-level spell slot to target an additional creature, you can spend 1 Sorcery Point to increase the spell's effective level by 1.",
    },
  ],

  // Talent Psionic Exertion
  "Psionic Exertion": [
    {
      name: "Destructive Power",
      description:
        "When you roll damage for a power, you can gain strain equal to half the power's order (minimum 1 strain) to make half the damage dice you rolled deal the die's maximum value instead of the number rolled .",
    },
    {
      name: "Dynamic Power",
      description:
        "When a Medium or smaller creature is hit by an attack roll for a power you manifest or fails a saving throw against a power you manifest, you can gain 2 strain to move the target up to 15 feet in any direction or knock them prone . You can gain 3 strain to affect a Large creature with this Psionic Exertion option, or 4 strain to affect a Huge creature .",
    },
    {
      name: "Expanded Power",
      description:
        "After you make a manifestation test to manifest a power that creates an area of effect, you can gain strain equal to the power's order to double all dimensions of the area of effect .",
    },
    {
      name: "Fascinating Power",
      description: `When a creature fails a saving throw against a power you manifest, you can activate this Psionic Exertion option . If the creature has a challenge rating equal to or lower than your talent level (or if its level is equal to or lower than your talent level, for creatures that don't have a challenge rating), you gain 2 strain and the target is charmed by you for 1 minute or until you or your companions do anything harmful to it . If the creature has a challenge rating or level higher than your talent level, you gain no strain and the target is unaffected .

      A creature charmed in this way is friendly to you . When the condition ends for the target, they know they were charmed by you .`,
    },
    {
      name: "Halting Power",
      description:
        "When a Medium or smaller creature fails a saving throw against a power you manifest, you can gain 2 strain to make the target restrained until the start of your next turn . You can gain 4 strain to affect a Large creature with this Psionic Exertion option .",
    },
    {
      name: "Magnified Power",
      description: `After you make a manifestation test to manifest a power that has a duration of 1 minute or longer, you can gain 1 strain to double its duration, to a maximum of 24 hours .

      Alternatively, after you make a manifestation test to manifest a power that has a range of 5 feet or greater, you can gain 1 strain to double the range of the power . After you make a manifestation test to manifest a power that has a range of touch, you can gain 1 strain to make the range of the power 30 feet .`,
    },
    {
      name: "Overwhelming Power",
      description:
        "When a creature succeeds on a saving throw against a power you manifest, you can gain strain equal to the power's order to force the creature to reroll the saving throw with a penalty equal to your proficiency bonus . The creature must use the new roll .",
    },

    {
      name: "Shared Power",
      description:
        "After you make a manifestation test to manifest a power that can target only one creature and doesn't create an area of effect, you can gain strain equal to the power's order to target a second creature in range with the same power .",
    },
    {
      name: "Terrifying Power",
      description: `When a creature fails a saving throw against a power you manifest, you can activate this Psionic Exertion option . If the creature has a challenge rating equal to or lower than your talent level (or if its level is equal to or lower than your talent level, for creatures that don't have a challenge rating), you gain 3 strain and the target is frightened of you for 1 minute . If the creature has a challenge rating or level higher than your talent level, you gain no strain and the target is unaffected .

        Whenever a creature frightened in this way takes damage, they make a Wisdom saving throw against your talent power save DC, ending the condition on themself on a success .`,
    },
  ],
  // Warlock Invocations

  "Warlock Invocations": [
    {
      name: "Agonizing Blast",
      prerequisite: "Level 2+ Warlock, a Warlock Cantrip That Deals Damage",
      description: `Choose one of your known Warlock cantrips that deals damage. You can add your Charisma modifier to that spell's damage rolls.

      Repeatable. You can gain this invocation more than once. Each time you do so, choose a different eligible cantrip.`,
    },
    {
      name: "Armor of Shadows",
      prerequisite: "N/A",
      description:
        "You can cast Mage Armor on yourself without expending a spell slot.",
    },
    {
      name: "Ascendant Step",
      prerequisite: "Level 5+ Warlock",
      description:
        "You can cast Levitate on yourself without expending a spell slot.",
    },
    {
      name: "Devil's Sight",
      prerequisite: "Level 2+ Warlock",
      description:
        "You can see normally in Dim Light and Darkness—both magical and nonmagical—within 120 feet of yourself.",
    },
    {
      name: "Devouring Blade",
      prerequisite: "Level 12+ Warlock, Thirsting Blade Invocation",
      description:
        "The Extra Attack of your Thirsting Blade invocation confers two extra attacks rather than one.",
    },
    {
      name: "Eldritch Mind",
      prerequisite: "N/A",
      description:
        "You have Advantage on Constitution saving throws that you make to maintain Concentration.",
    },
    {
      name: "Eldritch Smite",
      prerequisite: "Level 5+ Warlock, Pact of the Blade Invocation",
      description:
        "Once per turn when you hit a creature with your pact weapon, you can expend a Pact Magic spell slot to deal an extra 1d8 Force damage to the target, plus another 1d8 per level of the spell slot, and you can give the target the Prone condition if it is Huge or smaller.",
    },
    {
      name: "Eldritch Spear",
      prerequisite: "Level 2+ Warlock, a Warlock Cantrip That Deals Damage",
      description: `Choose one of your known Warlock cantrips that deals damage and has a range of 10+ feet. When you cast that spell, its range increases by a number of feet equal to 30 times your Warlock level.

      Repeatable. You can gain this invocation more than once. Each time you do so, choose a different eligible cantrip.`,
    },
    {
      name: "Fiendish Vigor",
      prerequisite: "Level 2+ Warlock",
      description:
        "You can cast False Life on yourself without expending a spell slot. When you cast the spell with this feature, you don't roll the die for the Temporary Hit Points; you automatically get the highest number on the die.",
    },
    {
      name: "Gaze of Two Minds",
      prerequisite: "Level 5+ Warlock",
      description: `You can use a Bonus Action to touch a willing creature and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can take a Bonus Action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. The connection ends if you don't maintain it in this way.

      While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you can cast spells as if you were in your space or the other creature's space if the two of you are within 60 feet of each other.`,
    },
    {
      name: "Gift of Depths",
      prerequisite: "Level 5+ Warlock",
      description: `You can breathe underwater, and you gain a Swim Speed equal to your Speed.

      You can also cast Water Breathing once without expending a spell slot. You regain the ability to cast it in this way again when you finish a Long Rest.`,
    },
    {
      name: "Gift of the Protectors",
      prerequisite: "Level 9+ Warlock, Pact of the Tome Invocation",
      description: `A new page appears in your Book of Shadows when you conjure it. With your permission, a creature can take an action to write its name on that page, which can contain a number of names equal to your Charisma modifier (minimum of one name).

      When any creature whose name is on the page is reduced to 0 Hit Points but not killed outright, the creature magically drops to 1 Hit Point instead. Once this magic is triggered, no creature can benefit from it until you finish a Long Rest.

      As a Magic action, you can erase a name on the page by touching it.`,
    },
    {
      name: "Investment of the Chain Master",
      prerequisite: "Level 5+ Warlock, Pact of the Chain Invocation",
      description: `When you cast Find Familiar, you infuse the summoned familiar with a measure of your eldritch power, granting the creature the following benefits.

      Aerial or Aquatic. The familiar gains either a Fly Speed or a Swim Speed (your choice) of 40 feet.

      Quick Attack. As a Bonus Action, you can command the familiar to take the Attack action.

      Necrotic or Radiant Damage. Whenever the familiar deals Bludgeoning, Piercing, or Slashing damage, you can make it deal Necrotic or Radiant damage instead.

      Your Save DC. If the familiar forces a creature to make a saving throw, it uses your spell save DC.

      Resistance. When the familiar takes damage, you can take a Reaction to grant it Resistance against that damage.`,
    },
    {
      name: "Lessons of the First Ones",
      prerequisite: "Level 2+ Warlock",
      description: `You have received knowledge from an elder entity of the multiverse, allowing you to gain one Origin feat of your choice.

      Repeatable. You can gain this invocation more than once. Each time you do so, choose a different Origin feat.`,
    },
    {
      name: "Lifedrinker",
      prerequisite: "Level 9+ Warlock, Pact of the Blade Invocation",
      description:
        "Once per turn when you hit a creature with your pact weapon, you can deal an extra 1d6 Necrotic, Psychic, or Radiant damage (your choice) to the creature, and you can expend one of your Hit Point Dice to roll it and regain a number of Hit Points equal to the roll plus your Constitution modifier (minimum of 1 Hit Point).",
    },
    {
      name: "Mask of Many Faces",
      prerequisite: "Level 2+ Warlock",
      description: "You can cast Disguise Self without expending a spell slot.",
    },
    {
      name: "Master of Myriad Forms",
      prerequisite: "Level 5+ Warlock",
      description: "You can cast Alter Self without expending a spell slot.",
    },
    {
      name: "Misty Visions",
      prerequisite: "Level 2+ Warlock",
      description: "You can cast Silent Image without expending a spell slot.",
    },
    {
      name: "One with the Shadows",
      prerequisite: "Level 5+ Warlock",
      description:
        "While you're in an area of Dim Light or Darkness, you can cast Invisibility on yourself without expending a spell slot.",
    },
    {
      name: "Otherworldly Leap",
      prerequisite: "Level 2+ Warlock",
      description:
        "You can cast Jump on yourself without expending a spell slot.",
    },
    {
      name: "Pact of the Blade",
      prerequisite: "N/A",
      description: `As a Bonus Action, you can conjure a pact weapon in your hand—a Simple or Martial Melee weapon of your choice with which you bond—or create a bond with a magic weapon you touch; you can't bond with a magic weapon if someone else is attuned to it or another Warlock is bonded with it. Until the bond ends, you have proficiency with the weapon, and you can use it as a Spellcasting Focus.

      Whenever you attack with the bonded weapon, you can use your Charisma modifier for the attack and damage rolls instead of using Strength or Dexterity; and you can cause the weapon to deal Necrotic, Psychic, or Radiant damage or its normal damage type.

      Your bond with the weapon ends if you use this feature's Bonus Action again, if the weapon is more than 5 feet away from you for 1 minute or more, or if you die. A conjured weapon disappears when the bond ends.
`,
    },
    {
      name: "Pact of the Chain",
      prerequisite: "N/A",
      description: `You learn the Find Familiar spell and can cast it as a Magic action without expending a spell slot.

      When you cast the spell, you choose one of the normal forms for your familiar or one of the following special forms: Imp, Pseudodragon, Quasit, Skeleton, Slaad Tadpole, Sphinx of Wonder, Sprite, or Venomous Snake.

      Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to make one attack of its own with its Reaction.`,
    },
    {
      name: "Pact of the Tome",
      prerequisite: "N/A",
      description: `Stitching together strands of shadow, you conjure forth a book in your hand at the end of a Short or Long Rest. This Book of Shadows (you determine its appearance) contains eldritch magic that only you can access, granting you the benefits below. The book disappears if you conjure another book with this feature or if you die.

      Cantrips and Rituals. When the book appears, choose three cantrips, and choose two level 1 spells that have the Ritual tag. The spells can be from any class's spell list, and they must be spells you don't already have prepared. While the book is on your person, you have the chosen spells prepared, and they function as Warlock spells for you.

      Spellcasting Focus. You can use the book as a Spellcasting Focus.`,
    },
    {
      name: "Repelling Blast",
      prerequisite:
        "Level 2+ Warlock, a Warlock Cantrip That Deals Damage via an Attack Roll",
      description: `Choose one of your known Warlock cantrips that requires an attack roll. When you hit a Large or smaller creature with that cantrip, you can push the creature up to 10 feet straight away from you.

      Repeatable. You can gain this invocation more than once. Each time you do so, choose a different eligible cantrip.`,
    },
    {
      name: "Thirsting Blade",
      prerequisite: "Level 5+ Warlock, Pact of the Blade Invocation",
      description:
        "You gain the Extra Attack feature for your pact weapon only. With that feature, you can attack twice with the weapon instead of once when you take the Attack action on your turn.",
    },
    {
      name: "Visions of Distant Realms",
      prerequisite: "Level 9+ Warlock",
      description: "You can cast Arcane Eye without expending a spell slot.",
    },
    {
      name: "Whispers of the Grave",
      prerequisite: "Level 7+ Warlock",
      description:
        "You can cast Speak with Dead without expending a spell slot.",
    },
    {
      name: "Witch's Sight",
      prerequisite: "Level 15+ Warlock",
      description: "You have Truesight with a range of 30 feet.",
    },
  ],

  // Wild Magic table

  "Wild Magic Table": [
    {
      roll: "1-4",
      result: `Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.`,
    },

    {
      roll: "5-8",
      result: `A creature that is Friendly toward you appears in a random unoccupied space within 60 feet of you. The creature is under the DM's control and disappears 1 minute later. Roll 1d4 to determine the creature: on a 1, a Modron Duodrone appears; on a 2, a Flumph appears; on a 3, a Modron Monodrone appears; on a 4, a Unicorn appears. See the Monster Manual for the creature's stat block.`,
    },

    {
      roll: "9-12",
      result: `For the next minute, you regain 5 Hit Points at the start of each of your turns.`,
    },
    {
      roll: "13-16",
      result: `Creatures have Disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.`,
    },
    {
      roll: "17-20",
      result: `You are subjected to an effect that lasts for 1 minute unless its description says otherwise. Roll 1d8 to determine the effect: on a 1, you're surrounded by faint, ethereal music only you and creatures within 5 feet of you can hear; on a 2, your size increases by one size category; on a 3, you grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode from your face and vanish; on a 4, you must shout when you speak; on a 5, illusory butterflies flutter in the air within 10 feet of you; on a 6, an eye appears on your forehead, granting you Advantage on Wisdom (Perception) checks; on an 7, pink bubbles float out of your mouth whenever you speak; on an 8, your skin turns a vibrant shade of blue for 24 hours or until the effect is ended by a Remove Curse spell.`,
    },
    {
      roll: "21-24",
      result: `For the next minute, all your spells with a casting time of an action have a casting time of a Bonus Action.`,
    },
    {
      roll: "25-28",
      result: `You are transported to the Astral Plane until the end of your next turn. You then return to the space you previously occupied or the nearest unoccupied space if that space is occupied.`,
    },
    {
      roll: "29-32",
      result: `The next time you cast a spell that deals damage within the next minute, don't roll the spell's damage dice for the damage. Instead use the highest number possible for each damage die.`,
    },
    {
      roll: "33-36",
      result: `You have Resistance to all damage for the next minute.`,
    },
    {
      roll: "37-40",
      result: `You turn into a potted plant until the start of your next turn. While you're a plant, you have the Incapacitated condition and have Vulnerability to all damage. If you drop to 0 Hit Points, your pot breaks, and your form reverts.`,
    },
    {
      roll: "41-44",
      result: `For the next minute, you can teleport up to 20 feet as a Bonus Action on each of your turns.`,
    },
    {
      roll: "45-48",
      result: `You and up to three creatures you choose within 30 feet of you have the Invisible condition for 1 minute. This invisibility ends on a creature immediately after it makes an attack roll, deals damage, or casts a spell.`,
    },
    {
      roll: "49-52",
      result: `A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to Magic Missile.`,
    },
    { roll: "53-56", result: `You can take one extra action on this turn.` },
    {
      roll: "57-60",
      result: `You cast a random spell. If the spell normally requires Concentration, it doesn't require Concentration in this case; the spell lasts for its full duration. Roll 1d10 to determine the spell: on a 1, Confusion; on a 2, Fireball; on a 3, Fog Cloud; on a 4, Fly (cast on a random creature within 60 feet of you), on a 5, Grease; on a 6, Levitate (cast on yourself); on a 7, Magic Missile (cast as a level 5 spell); on an 8, Mirror Image; on a 9, Polymorph (cast on yourself), and if you fail the saving throw, you turn into a Goat; on a 10, See Invisibility.`,
    },
    {
      roll: "61-64",
      result: `For the next minute, any flammable, nonmagical object you touch that isn't being worn or carried by another creature bursts into flame, takes 1d4 Fire damage, and is burning.`,
    },
    {
      roll: "65-68",
      result: `If you die within the next hour, you immediately revive as if by the Reincarnate spell.`,
    },
    {
      roll: "69-72",
      result: `You have the Frightened condition until the end of your next turn. The DM determines the source of your fear.`,
    },
    {
      roll: "73-76",
      result: `You teleport up to 60 feet to an unoccupied space you can see.`,
    },
    {
      roll: "77-80",
      result: `A random creature within 60 feet of you has the Poisoned condition for 1d4 hours.`,
    },

    {
      roll: "81-84",
      result: `You radiate Bright Light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you has the Blinded condition until the end of its next turn.`,
    },
    {
      roll: "85-88",
      result: `Up to three creatures of your choice that you can see within 30 feet of you take 1d10 Necrotic damage. You regain Hit Points equal to the sum of the Necrotic damage dealt.`,
    },
    {
      roll: "89-92",
      result: `	Up to three creatures of your choice that you can see within 30 feet of you take 4d10 Lightning damage.`,
    },
    {
      roll: "93-96",
      result: `You and all creatures within 30 feet of you have Vulnerability to Piercing damage for the next minute.`,
    },
    {
      roll: "97-100",
      result: `Roll 1d6: On a 1, you regain 2d10 Hit Points; on a 2, one ally of your choice within 300 feet of you regains 2d10 Hit Points; on a 3, you regain your lowest-level expended spell slot; on a 4, one ally of your choice within 300 feet of you regains their lowest-level expended spell slot; on a 5, you regain all your expended Sorcery Points; on a 6, all the effects of row 17-20 affect you simultaneously.`,
    },
  ],

  "Wild Magic Rage Table": [
    {
      roll: "1",
      result: `Shadowy tendrils lash around you. Each creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d12 necrotic damage. You also gain 1d12 temporary hit points.`,
    },
    {
      roll: "2",
      result: `You teleport up to 30 feet to an unoccupied space you can see. Until your rage ends, you can use this effect again on each of your turns as a bonus action.`,
    },
    {
      roll: "3",
      result: `An intangible spirit, which looks like a flumph or a pixie (your choice), appears within 5 feet of one creature of your choice that you can see within 30 feet of you. At the end of the current turn, the spirit explodes, and each creature within 5 feet of it must succeed on a Dexterity saving throw or take 1d6 force damage. Until your rage ends, you can use this effect again, summoning another spirit, on each of your turns as a bonus action.`,
    },
    {
      roll: "4",
      result: `Magic infuses one weapon of your choice that you are holding. Until your rage ends, the weapon's damage type changes to force, and it gains the light and thrown properties, with a normal range of 20 feet and a long range of 60 feet. If the weapon leaves your hand, the weapon reappears in your hand at the end of the current turn.`,
    },
    {
      roll: "5",
      result: `Whenever a creature hits you with an attack roll before your rage ends, that creature takes 1d6 force damage, as magic lashes out in retribution.`,
    },
    {
      roll: "6",
      result: `Until your rage ends, you are surrounded by multicolored, protective lights; you gain a +1 bonus to AC, and while within 10 feet of you, your allies gain the same bonus.`,
    },
    {
      roll: "7",
      result: `Flowers and vines temporarily grow around you; until your rage ends, the ground within 15 feet of you is difficult terrain for your enemies.`,
    },
    {
      roll: "8",
      result: `A bolt of light shoots from your chest. Another creature of your choice that you can see within 30 feet of you must succeed on a Constitution saving throw or take 1d6 radiant damage and be blinded until the start of your next turn. Until your rage ends, you can use this effect again on each of your turns as a bonus action.`,
    },
  ],

  // etc...
};

export default options;
