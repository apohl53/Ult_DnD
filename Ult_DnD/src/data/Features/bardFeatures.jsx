export const bardFeatures = {
  "Bardic Inspiration": {
    name: "Bardic Inspiration",
    description: `You can supernaturally inspire others through words, music, or dance. This inspiration is represented by your Bardic Inspiration die, which is a d6. 
    
    Using Bardic Inspiration. As a Bonus Action, you can inspire another creature within 60 feet of yourself who can see or hear you. That creature gains one of your Bardic Inspiration dice. A creature can have only one Bardic Inspiration die at a time.

    Once within the next hour when the creature fails a D20 Test, the creature can roll the Bardic Inspiration die and add the number rolled to the d20, potentially turning the failure into a success. A Bardic Inspiration die is expended when it's rolled.

    Number of Uses. You can confer a Bardic Inspiration die a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.

    At Higher Levels. Your Bardic Inspiration die changes when you reach certain Bard levels, as shown in the Bardic Die column of the Bard Features table. The die becomes a d8 at level 5, a d10 at level 10, and a d12 at level 15.`,
  },

  "Spellcasting (Bard)": {
    name: "Spellcasting (Bard)",
    description: `You have learned to cast spells through your bardic arts.

    Cantrips. You know two cantrips of your choice from the Bard spell list.

    Whenever you gain a Bard level, you can replace one of your cantrips with another cantrip of your choice from the Bard spell list.

    When you reach Bard levels 4 and 10, you learn another cantrip of your choice from the Bard spell list, as shown in the Cantrips column of the Bard Features table.

    Spell Slots. The Bard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose four level 1 spells from the Bard spell list.

    The number of spells on your list increases as you gain Bard levels, as shown in the Prepared Spells column of the Bard Features table. Whenever that number increases, choose additional spells from the Bard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Bard, your list of prepared spells can include six spells of levels 1 and 2 in any combination.

    If another Bard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Bard spells for you.

    Changing Your Prepared Spells. Whenever you gain a Bard level, you can replace one spell on your list with another Bard spell for which you have spell slots.

    Spellcasting Ability. Charisma is your spellcasting ability for your Bard spells.

    Spellcasting Focus. You can use a Musical Instrument as a Spellcasting Focus for your Bard spells.`,
  },
  "Expertise (Bard)": {
    name: "Expertise (Bard)",
    description: `You gain Expertise in two of your skill proficiencies of your choice.

    At Bard level 9, you gain Expertise in two more of your skill proficiencies of your choice.`,
  },
  "Jack of All Trades": {
    name: "Jack of All Trades",
    description: `You can add half your Proficiency Bonus (round down) to any ability check you make that uses a skill proficiency you lack and that doesn't otherwise use your Proficiency Bonus.

    For example, if you make a Strength (Athletics) check and lack Athletics proficiency, you can add half your Proficiency Bonus to the check.`,
  },
  "Font of Inspiration": {
    name: "Font of Inspiration",
    description: `You now regain all your expended uses of Bardic Inspiration when you finish a Short or Long Rest.

    In addition, you can expend a spell slot (no action required) to regain one expended use of Bardic Inspiration.`,
  },
  Countercharm: {
    name: "Countercharm",
    description: `You can use musical notes or words of power to disrupt mind-influencing effects. If you or a creature within 30 feet of you fails a saving throw against an effect that applies the Charmed or Frightened condition, you can take a Reaction to cause the save to be rerolled, and the new roll has Advantage.`,
  },
  "Magical Secrets": {
    name: "Magical Secrets",
    description: `You've learned secrets from various magical traditions. Whenever you reach a Bard level (including this level) and the Prepared Spells number in the Bard Features table increases, you can choose any of your new prepared spells from the Bard, Cleric, Druid, and Wizard spell lists, and the chosen spells count as Bard spells for you. In addition, whenever you replace a spell prepared for this class, you can replace it with a spell from those lists.`,
  },
  "Superior Inspiration": {
    name: "Superior Inspiration",
    description: `When you roll Initiative, you regain expended uses of Bardic Inspiration until you have two if you have fewer than that.`,
  },
  "Words of Creation": {
    name: "Words of Creation",
    description: `You have mastered two of the Words of Creation: the words of life and death. You therefore always have the Power Word Heal and Power Word Kill spells prepared. When you cast either spell, you can target a second creature with it if that creature is within 10 feet of the first target.`,
  },

  // Subclasses

  // Creation

  "Mote of Potential": {
    name: "Mote of Potential",
    description: `Whenever you give a creature a Bardic Inspiration die, you can utter a note from the Song of Creation to create a Tiny mote of potential, which orbits within 5 feet of that creature. The mote is intangible and invulnerable, and it lasts until the Bardic Inspiration die is lost. The mote looks like a musical note, a star, a flower, or another symbol of art or life that you choose.

    When the creature uses the Bardic Inspiration die, the mote provides an additional effect based on whether the die benefits an ability check, an attack roll, or a saving throw, as detailed below:

    Ability Check. When the creature rolls the Bardic Inspiration die to add it to an ability check, the creature can roll the Bardic Inspiration die again and choose which roll to use, as the mote pops and emits colorful, harmless sparks for a moment.

    Attack Roll. Immediately after the creature rolls the Bardic Inspiration die to add it to an attack roll against a target, the mote thunderously shatters. The target and each creature of your choice that you can see within 5 feet of it must succeed on a Constitution saving throw against your spell save DC or take thunder damage equal to the number rolled on the Bardic Inspiration die.

    Saving Throw. Immediately after the creature rolls the Bardic Inspiration die and adds it to a saving throw, the mote vanishes with the sound of soft music, causing the creature to gain temporary hit points equal to the number rolled on the Bardic Inspiration die plus your Charisma modifier (minimum of 1 temporary hit point).`,
  },
  "Performance of Creation": {
    name: "Performance of Creation",
    description: `As an action, you can channel the magic of the Song of Creation to create one nonmagical item of your choice in an unoccupied space within 10 feet of you. The item must appear on a surface or in a liquid that can support it. The gp value of the item can't be more than 20 times your bard level, and the item must be Medium or smaller. The item glimmers softly, and a creature can faintly hear music when touching it. The created item disappears after a number of hours equal to your proficiency bonus. For examples of items you can create, see the equipment chapter of the Player's Handbook.

    Once you create an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 2nd level or higher to use this feature again. You can have only one item created by this feature at a time; if you use this action and already have an item from this feature, the first one immediately vanishes.

    The size of the item you can create with this feature increases by one size category when you reach 6th level (Large) and 14th level (Huge).`,
  },
  "Animating Performance": {
    name: "Animating Performance",
    description: `As an action, you can animate one Large or smaller nonmagical item within 30 feet of you that isn't being worn or carried. The animate item uses the Dancing Item stat block, which uses your proficiency bonus (PB). The item is friendly to you and your companions and obeys your commands. It lives for 1 hour, until it is reduced to 0 hit points, or until you die.

    In combat, the item shares your initiative count, but it takes its turn immediately after yours. It can move and use its reaction on its own, but the only action it takes on its turn is the Dodge action, unless you take a bonus action on your turn to command it to take another action. That action can be one in its stat block or some other action. If you are incapacitated, the item can take any action of its choice, not just Dodge.

    When you use your Bardic Inspiration feature, you can command the item as part of the same bonus action you use for Bardic Inspiration.

    Once you animate an item with this feature, you can't do so again until you finish a long rest, unless you expend a spell slot of 3rd level or higher to use this feature again. You can have only one item animated by this feature at a time; if you use this action and already have a dancing item from this feature, the first one immediately becomes inanimate. (Uses Dancing Item statblock)`,
  },
  "Creative Crescendo": {
    name: "Creative Crescendo",
    description: `When you use your Performance of Creation feature, you can create more than one item at once. The number of items equals your Charisma modifier (minimum of two items). If you create an item that would exceed that number, you choose which of the previously created items disappears. Only one of these items can be of the maximum size you can create; the rest must be Small or Tiny.

    You are no longer limited by gp value when creating items with Performance of Creation.`,
  },
  // Dance
  "Dazzling Footwork": {
    name: "Dazzling Footwork",
    description: `While you aren't wearing armor or wielding a Shield, you gain the following benefits.

    Dance Virtuoso. You have Advantage on any Charisma (Performance) check you make that involves you dancing.

    Unarmored Defense. Your base Armor Class equals 10 plus your Dexterity and Charisma modifiers.

    Agile Strikes. When you expend a use of your Bardic Inspiration as part of an action, a Bonus Action, or a Reaction, you can make one Unarmed Strike as part of that action, Bonus Action, or Reaction.

    Bardic Damage. You can use Dexterity instead of Strength for the attack rolls of your Unarmed Strikes. When you deal damage with an Unarmed Strike, you can deal Bludgeoning damage equal to a roll of your Bardic Inspiration die plus your Dexterity modifier, instead of the strike's normal damage. This roll doesn't expend the die.`,
  },
  "Inspiring Movement": {
    name: "Inspiring Movement",
    description: `When an enemy you can see ends its turn within 5 feet of you, you can take a Reaction and expend one use of your Bardic Inspiration to move up to half your Speed. Then one ally of your choice within 30 feet of you can also move up to half their Speed using their Reaction.

    None of this feature's movement provokes Opportunity Attacks.`,
  },
  "Tandem Footwork": {
    name: "Tandem Footwork",
    description: `When you roll Initiative, you can expend one use of your Bardic Inspiration if you don't have the Incapacitated condition. When you do so, roll your Bardic Inspiration die; you and each ally within 30 feet of you who can see or hear you gains a bonus to Initiative equal to the number rolled.`,
  },
  "Leading Evasion": {
    name: "Leading Evasion",
    description: `When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. If any creatures within 5 feet of you are making the same Dexterity saving throw, you can share this benefit with them for that save.

    You can't use this feature if you have the Incapacitated condition.`,
  },

  // Drama

  "Tragic Hero": {
    name: "Tragic Hero",
    description: `A great performance sometimes comes at a cost to the artist. If you fail a saving throw, choose other creatures you can see within 60 feet of yourself. Each of the chosen creatures gains a bonus to saving throws equal to your Charisma modifier (minimum of +1) against the same effect that triggered this feature, potentially turning a failure into a success.`,
  },
  "One Life, Many Roles": {
    name: "One Life, Many Roles",
    description: `You use your magic and dramatic training to step into a role. As a Bonus Action, you can cast Disguise Self with this feature. If you take on the appearance of a specific creature you can see when you cast Disguise Self in this way, you can adopt that creature's mannerisms and voice.

    Once you use this feature, you can't use it again until you finish a Short or long rest.`,
  },
  "Stage Direction": {
    name: "Stage Direction",
    description: `You gain the ability to direct others as you inspire them, allowing them to make the most of your guidance. When a creature that can see you would normally roll one of your Bardic Inspiration die, don't roll the die; instead use the highest number possible for the die.

    You can use this feature a number of times equal to your Charisma modifier (minimum of once). You regain expended uses when you finish a long rest.`,
  },
  "Assemble the Troupe": {
    name: "Assemble the Troupe",
    description: `When you cast Disguise Self using your One Life, Many Roles feature, you can target up to six willing creatures you can see within 30 feet of you with the Disguise Self spell. You choose the appearance each creature takes. While under the effects of the spell cast with this feature, the chosen creatures gain a bonus to Charisma checks equal to your Charisma modifier (minimum of +1).`,
  },
  "Grand Finale": {
    name: "Grand Finale",
    description: `You gain the ability to deliver a stirring performance that spurs your companions to mighty deeds. As a Magic action, choose up to two other creatures within 60 feet that can see or hear you. Each of the chosen creatures can immediately take an action this turn.

    Once you use this feature, you can't use it again until you finish a long rest.`,
  },

  // Eloquence

  "Silver Tongue": {
    name: "Silver Tongue",
    description: `You are a master at saying the right thing at the right time. When you make a Charisma (Persuasion) or Charisma (Deception) check, you can treat a d20 roll of 9 or lower as a 10.`,
  },
  "Unsettling Words": {
    name: "Unsettling Words",
    description: `You can spin words laced with magic that unsettle a creature and cause it to doubt itself. As a bonus action, you can expend one use of your Bardic Inspiration and choose one creature you can see within 60 feet of you. Roll the Bardic Inspiration die. The creature must subtract the number rolled from the next saving throw it makes before the start of your next turn.`,
  },
  "Unfailing Inspiration": {
    name: "Unfailing Inspiration",
    description: `Your inspiring words are so persuasive that others feel driven to succeed. When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll fails, the creature can keep the Bardic Inspiration die.`,
  },
  "Universal Speech": {
    name: "Universal Speech",
    description: `You gain the ability to make your speech intelligible to any creature. As an action, choose one or more creatures within 60 feet of you, up to a number equal to your Charisma modifier (minimum of one creature). The chosen creatures can magically understand you, regardless of the language you speak, for 1 hour.

    Once you use this feature, you can't use it again until you finish a long rest, unless you expend a spell slot of any level to use it again.`,
  },
  "Infectious Inspiration": {
    name: "Infectious Inspiration",
    description: `When you successfully inspire someone, the power of your eloquence can now spread to someone else. When a creature within 60 feet of you adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses.

    You can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.`,
  },
  // Glamour

  "Beguiling Magic": {
    name: "Beguiling Magic",
    description: `You always have the Charm Person and Mirror Image spells prepared.

    In addition, immediately after you cast an Enchantment or Illusion spell using a spell slot, you can cause a creature you can see within 60 feet of yourself to make a Wisdom saving throw against your spell save DC. On a failed save, the target has the Charmed or Frightened condition (your choice) for 1 minute. The target repeats the save at the end of each of its turns, ending the effect on itself on a success.

    Once you use this benefit, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending one use of your Bardic Inspiration (no action required).`,
  },
  "Mantle of Inspiration": {
    name: "Mantle of Inspiration",
    description: `You can weave fey magic into a song or dance to fill others with vigor. As a Bonus Action, you can expend a use of Bardic Inspiration, rolling a Bardic Inspiration die. When you do so, choose a number of other creatures within 60 feet of yourself, up to a number equal to your Charisma modifier (minimum of one creature). Each of those creatures gains a number of Temporary Hit Points equal to two times the number rolled on the Bardic Inspiration die, and then each can use its Reaction to move up to its Speed without provoking Opportunity Attacks.`,
  },
  "Mantle of Majesty": {
    name: "Mantle of Majesty",
    description: `You always have the Command spell prepared.

    As a Bonus Action, you cast Command without expending a spell slot, and you take on an unearthly appearance for 1 minute or until your Concentration ends. During this time, you can cast Command as a Bonus Action without expending a spell slot.

    Any creature Charmed by you automatically fails its saving throw against the Command you cast with this feature.

    Once you use this feature, you can't use it again until you finish a Long Rest. You can also restore your use of it by expending a level 3+ spell slot (no action required).`,
  },
  "Unbreakable Majesty": {
    name: "Unbreakable Majesty",
    description: `As a Bonus Action, you can assume a magically majestic presence for 1 minute or until you have the Incapacitated condition. For the duration, whenever any creature hits you with an attack roll for the first time on a turn, the attacker must succeed on a Charisma saving throw against your spell save DC, or the attack misses instead, as the creature recoils from your majesty.

    Once you assume this majestic presence, you can't do so again until you finish a Short or Long Rest.`,
  },

  // Lore

  "Bonus Proficiencies(Lore)": {
    name: "Bonus Proficiencies(Lore)",
    description: `You gain proficiency with three skills of your choice.`,
  },
  "Cutting Words": {
    name: "Cutting Words",
    description: `You learn to use your wit to supernaturally distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of yourself makes a damage roll or succeeds on an ability check or attack roll, you can take a Reaction to expend one use of your Bardic Inspiration; roll your Bardic Inspiration die, and subtract the number rolled from the creature's roll, reducing the damage or potentially turning the success into a failure.`,
  },
  "Magical Discoveries": {
    name: "Magical Discoveries",
    description: `You learn two spells of your choice. These spells can come from the Cleric, Druid, or Wizard spell list or any combination thereof. A spell you choose must be a cantrip or a spell for which you have spell slots, as shown in the Bard Features table.

    You always have the chosen spells prepared, and whenever you gain a Bard level, you can replace one of the spells with another spell that meets these requirements.`,
  },
  "Peerless Skill": {
    name: "Peerless Skill",
    description: `When you make an ability check or attack roll and fail, you can expend one use of Bardic Inspiration; roll the Bardic Inspiration die, and add the number rolled to the d20, potentially turning a failure into a success. On a failure, the Bardic Inspiration isn't expended.`,
  },

  // Spirits
  "Guiding Whispers": {
    name: "Guiding Whispers",
    description: `You can reach out to spirits to guide you and others. You learn the guidance cantrip, which doesn't count against the number of bard cantrips you know. For you, it has a range of 60 feet when you cast it.`,
  },
  "Spiritual Focus": {
    name: "Spiritual Focus",
    description: `You employ tools that aid you in channeling spirits, be they historical figures or fictional archetypes. You can use the following objects as a spellcasting focus for your bard spells: a candle, crystal ball, skull, spirit board, or tarokka deck.

    Starting at 6th level, when you cast a bard spell that deals damage or restores hit points through the Spiritual Focus, roll a d6, and you gain a bonus to one damage or healing roll of the spell equal to the number rolled.`,
  },
  "Tales from Beyond": {
    name: "Tales from Beyond",
    description: `You reach out to spirits who tell their tales through you. While you are holding your Spiritual Focus, you can use a bonus action to expend one use of your Bardic Inspiration and roll on the Spirit Tales table using your Bardic Inspiration die to determine the tale the spirits direct you to tell. You retain the tale in mind until you bestow the tale's effect or you finish a short or long rest.

    You can use an action to choose one creature you can see within 30 feet of you (this can be you) to be the target of the tale's effect. Once you do so, you can't bestow the tale's effect again until you roll it again.

    You can retain only one of these tales in mind at a time, and rolling on the Spirit Tales table immediately ends the effect of the previous tale.

    If the tale requires a saving throw, the DC equals your spell save DC.

    (Look at the General Page for the Spirit Tales Tables)
`,
  },
  "Spirit Session": {
    name: "Spirit Session",
    description: `Spirits provide you with supernatural insights. You can conduct an hour-long ritual channeling spirits (which can be done during a short or long rest) using your Spiritual Focus. You can conduct the ritual with a number of willing creatures equal to your proficiency bonus (including yourself). At the end of the ritual, you temporarily learn one spell of your choice from any class.

    The spell you choose must be of a level equal to the number of creatures that conducted the ritual or less, the spell must be of a level you can cast, and it must be in the school of divination or necromancy. The chosen spell counts as a bard spell for you but doesn't count against the number of bard spells you know.

    Once you perform the ritual, you can't do so again until you start a long rest, and you know the chosen spell until you start a long rest.

`,
  },
  "Mystical Connection": {
    name: "Mystical Connection",
    description: `You now have the ability to nudge the spirits of Tales from Beyond toward certain tales. Whenever you roll on the Spirit Tales table, you can roll the die twice and choose which of the two effects to bestow. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.`,
  },

  // Swords

  "Bonus Proficiencies (Swords)": {
    name: "Bonus Proficiencies (Swords)",
    description: `When you join the College of Swords at 3rd level, you gain proficiency with medium armor and the scimitar.

    If you're proficient with a simple or martial melee weapon, you can use it as a spellcasting focus for your bard spells.`,
  },

  "Blade Flourish": {
    name: "Blade Flourish",
    description: `At 3rd level, you learn to perform impressive displays of martial prowess and speed.

    Whenever you take the Attack action on your turn, your walking speed increases by 10 feet until the end of the turn, and if a weapon attack that you make as part of this action hits a creature, you can use one of the following Blade Flourish options of your choice. You can use only one Blade Flourish option per turn.

    Defensive Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You also add the number rolled to your AC until the start of your next turn.

    Slashing Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit and to any other creature of your choice that you can see within 5 feet of you. The damage equals the number you roll on the Bardic Inspiration die.

    Mobile Flourish. You can expend one use of your Bardic Inspiration to cause the weapon to deal extra damage to the target you hit. The damage equals the number you roll on the Bardic Inspiration die. You can also push the target up to 5 feet away from you, plus a number of feet equal to the number you roll on that die. You can then immediately use your reaction to move up to your walking speed to an unoccupied space within 5 feet of the target.`,
  },
  "Master's Flourish": {
    name: "Master's Flourish",
    description: `Starting at 14th level, whenever you use a Blade Flourish option, you can roll a d6 and use it instead of expending a Bardic Inspiration die.`,
  },

  // Valor

  "Combat Inspiration": {
    name: "Combat Inspiration",
    description: `You can use your wit to turn the tide of battle. A creature that has a Bardic Inspiration die from you can use it for one of the following effects.

    Defense. When the creature is hit by an attack roll, that creature can use its Reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, potentially causing the attack to miss.

    Offense. Immediately after the creature hits a target with an attack roll, the creature can roll the Bardic Inspiration die and add the number rolled to the attack's damage against the target.`,
  },
  "Martial Training": {
    name: "Martial Training",
    description: `You gain proficiency with Martial weapons and training with Medium armor and Shields.

    In addition, you can use a Simple or Martial weapon as a Spellcasting Focus to cast spells from your Bard spell list.`,
  },
  "Extra Attack (Gish)": {
    name: "Extra Attack (Gish)",
    description: `You can attack twice instead of once whenever you take the Attack action on your turn.

    In addition, you can cast one of your cantrips that has a casting time of an action in place of one of those attacks.`,
  },
  "Battle Magic": {
    name: "Battle Magic",
    description: `After you cast a spell that has a casting time of an action, you can make one attack with a weapon as a Bonus Action.`,
  },

  // Whispers

  "Psychic Blades": {
    name: "Psychic Blades",
    description: `When you join the College of Whispers at 3rd level, you gain the ability to make your weapon attacks magically toxic to a creature's mind.

    When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an extra 2d6 psychic damage to that target. You can do so only once per round on your turn.

    The psychic damage increases when you reach certain levels in this class, increasing to 3d6 at 5th level, 5d6 at 10th level, and 8d6 at 15th level.`,
  },
  "Words of Terror": {
    name: "Words of Terror",
    description: `At 3rd level, you learn to infuse innocent-seeming words with an insidious magic that can inspire terror.

    If you speak to a humanoid alone for at least 1 minute, you can attempt to seed paranoia in its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened of you or another creature of your choice. The target is frightened in this way for 1 hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged.

    If the target succeeds on its saving throw, the target has no hint that you tried to frighten it.

    Once you use this feature, you can't use it again until you finish a short or long rest.`,
  },
  "Mantle of Whispers": {
    name: "Mantle of Whispers",
    description: `At 6th level, you gain the ability to adopt a humanoid's persona. When a humanoid dies within 30 feet of you, you can magically capture its shadow using your reaction. You retain this shadow until you use it or you finish a long rest.

    You can use the shadow as an action. When you do so, it vanishes, magically transforming into a disguise that appears on you. You now look like the dead person, but healthy and alive. This disguise lasts for 1 hour or until you end it as a bonus action.

    While you're in the disguise, you gain access to all information that the humanoid would freely share with a casual acquaintance. Such information includes general details on its background and personal life, but doesn't include secrets. The information is enough that you can pass yourself off as the person by drawing on its memories.

    Another creature can see through this disguise by succeeding on a Wisdom (Insight) check contested by your Charisma (Deception) check. You gain a +5 bonus to your check.

    Once you capture a shadow with this feature, you can't capture another one with it until you finish a short or long rest.`,
  },
  "Shadow Lore": {
    name: "Shadow Lore",
    description: `At 14th level, you gain the ability to weave dark magic into your words and tap into a creature's deepest fears.

    As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn't share a language with you or if it can't hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect.

    On a failed saving throw, the target is charmed by you for the next 8 hours or until you or your allies attack it, damage it, or force it to make a saving throw. It interprets the whispers as a description of its most mortifying secret. You gain no knowledge of this secret, but the target is convinced you know it.

    The charmed creature obeys your commands for fear that you will reveal its secret. It won't risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend.

    When the effect ends, the creature has no understanding of why it held you in such fear.

    Once you use this feature, you can't use it again until you finish a long rest.`,
  },
};
