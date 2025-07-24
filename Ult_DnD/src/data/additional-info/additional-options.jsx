const options = {
  // Artificer Infusions

  // Barbarian Wild Magic Table

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

  // Druid Beast List

  // Fighter Battlemaster Maneuvers

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

  // Talent Psionic Exploits

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

  // etc...
};

export default options;
