export const wizardFeatures = {
  "Spellcasting (Wizard)": {
    name: "Spellcasting (Wizard)",
    description: `As a student of arcane magic, you have learned to cast spells. Cantrips. You know three Wizard cantrips of your choice. Whenever you finish a Long Rest, you can replace one of your cantrips from this feature with another Wizard cantrip of your choice. When you reach Wizard levels 4 and 10, you learn another Wizard cantrip of your choice, as shown in the Cantrips column of the Wizard Features table.

    Spellbook. Your wizardly apprenticeship culminated in the creation of a unique book: your spellbook. It is a Tiny object that weighs 3 pounds, contains 100 pages, and can be read only by you or someone casting Identify. You determine the book's appearance and materials, such as a gilt-edged tome or a collection of vellum bound with twine. The book contains the level 1+ spells you know. It starts with six level 1 Wizard spells of your choice.

    Whenever you gain a Wizard level after 1, add two Wizard spells of your choice to your spellbook. Each of these spells must be of a level for which you have spell slots, as shown in the Wizard Features table. The spells are the culmination of arcane research you do regularly.

    Spell Slots. The Wizard Features table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To do so, choose four spells from your spellbook. The chosen spells must be of a level for which you have spell slots.

    The number of spells on your list increases as you gain Wizard levels, as shown in the Prepared Spells column of the Wizard Features table. Whenever that number increases, choose additional Wizard spells until the number of spells on your list matches the number in the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 3 Wizard, your list of prepared spells can include six spells of levels 1 and 2 in any combination, chosen from your spellbook.

    If another Wizard feature gives you spells that you always have prepared, those spells don't count against the number of spells you can prepare with this feature, but those spells otherwise count as Wizard spells for you.

    Changing Your Prepared Spells. Whenever you finish a Long Rest, you can change your list of prepared spells, replacing any of the spells there with spells from your spellbook.

    Spellcasting Ability. Intelligence is your spellcasting ability for your Wizard spells.

    Spellcasting Focus. You can use an Arcane Focus or your spellbook as a Spellcasting Focus for your Wizard spells.
`,
  },
  "Arcane Recovery": {
    name: "Arcane Recovery",
    description: `You can regain some of your magical energy by studying your spellbook. When you finish a Short Rest, you can choose expended spell slots to recover. The spell slots can have a combined level equal to no more than half your Wizard level (round up), and none of the slots can be level 6 or higher. For example, if you're a level 4 Wizard, you can recover up to two levels' worth of spell slots, regaining either one level 2 spell slot or two level 1 spell slots.

    Once you use this feature, you can't do so again until you finish a Long Rest.`,
  },
  "Ritual Adept": {
    name: "Ritual Adept",
    description:
      "You can cast any spell as a Ritual if that spell has the Ritual tag and the spell is in your spellbook. You needn't have the spell prepared, but you must read from the book to cast a spell in this way.",
  },
  Scholar: {
    name: "Scholar",
    description:
      "While studying magic, you also specialized in another field of study. Choose one of the following skills in which you have proficiency: Arcana, History, Investigation, Medicine, Nature, or Religion. You have Expertise in the chosen skill.",
  },
  "Memorize Spell": {
    name: "Memorize Spell",
    description:
      "Whenever you finish a Short Rest, you can study your spellbook and replace one of the level 1+ Wizard spells you have prepared for your Spellcasting feature with another level 1+ spell from the book.",
  },
  "Modify Spell": {
    name: "Modify Spell",
    description: `*Homebrew* 
    
    Using arcane formulas in your spellbook you can magically alter one Wizard spell you have prepared.	You	can	change	the	spell's	color sound, and smell, and	you	make one of the following modifications to the spell:

    Components. Remove one of the spell's components: Verbal, Somatic, or Material. You can't remove the Material component of a spell that consumes that component.

    Concentration. If the spell requires Concentration, damage can't break your Concentration on the spell.

    Damage Type. If the spell has a damage type, 
    replace it with one of the following types: Acid, 
    Cold, Fire, Lightning, Necrotic, Poison, or 
    Thunder. If the spell has multiple damage types, you can change only one of them.

    Range. If the spell has a range of at least 5 feet 
    and doesn't have a range of Self, increase its 
    range by a number of feet equal to 30 times 
    your Wizard level.

    Ritual. If the spell lacks the Ritual tag and has a 
    casting time of at least 10 minutes, give it the 
    Ritual tag.
    
    Targets. If the spell affects one or more 
    creatures and doesn't have a range of Self, it 
    now affects only your allies or enemies 
    (choose which when you cast Modify Spell).

    You can only have one modified spell prepared at a time, and the modification lasts until you Long Rest. This altere version of the spell can't be added to a spellbook or Spell Scroll without first using Create Spell. You may have to expend additional spell slots or spend money to initially modify the spell, at the DM's discretion`,
  },
  "Create Spell": {
    name: "Create Spell",
    description:
      "Synthezing your arcane knowledge and power, you strive to create a new spell. To succeed you must expend a 5th level spell slot and spend an hour meditating on a spell you have modified. You use components in this creation usually comprised of an arcane focus or rare components that add up to 1000gp per level of the spell. If you succeed you may scribe this new spell into your spellbook, it becomes a Wizard spell known by you and gains a name of your choice",
  },
  "Spell Mastery": {
    name: "Spell Mastery",
    description: `You have achieved such mastery over certain spells that you can cast them at will. Choose a level 1 and a level 2 spell in your spellbook that have a casting time of an action. You always have those spells prepared, and you can cast them at their lowest level without expending a spell slot. To cast either spell at a higher level, you must expend a spell slot.

    Whenever you finish a Long Rest, you can study your spellbook and replace one of those spells with an eligible spell of the same level from the book.`,
  },

  "Signature Spells": {
    name: "Signature Spells",
    description:
      "Choose two level 3 spells in your spellbook as your signature spells. You always have these spells prepared, and you can cast each of them once at level 3 without expending a spell slot. When you do so, you can't cast them in this way again until you finish a Short or Long Rest. To cast either spell at a higher level, you must expend a spell slot.",
  },

  // Subclasses

  // Abjurer
  "Abjuration Savant": {
    name: "Abjuration Savant",
    description: `Choose two Wizard spells from the Abjuration school, each of which must be no higher than level 2, and add them to your spellbook for free.

    In addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Abjuration school to your spellbook for free. The chosen spell must be of a level for which you have spell slots.`,
  },
  "Arcane Ward": {
    name: "Arcane Ward",
    description: `You can weave magic around yourself for protection. When you cast an Abjuration spell with a spell slot, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a Long Rest. The ward has a Hit Point maximum equal to twice your Wizard level plus your Intelligence modifier. Whenever you take damage, the ward takes the damage instead, and if you have any Resistances or Vulnerabilities, apply them before reducing the ward's Hit Points. If the damage reduces the ward to 0 Hit Points, you take any remaining damage. While the ward has 0 Hit Points, it can't absorb damage, but its magic remains.

    Whenever you cast an Abjuration spell with a spell slot, the ward regains a number of Hit Points equal to twice the level of the spell slot. Alternatively, as a Bonus Action, you can expend a spell slot, and the ward regains a number of Hit Points equal to twice the level of the spell slot expended.

    Once you create the ward, you can't create it again until you finish a Long Rest.`,
  },
  "Projected Ward": {
    name: "Projected Ward",
    description: `When a creature that you can see within 30 feet of yourself takes damage, you can take a Reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 Hit Points, the warded creature takes any remaining damage. If that creature has any Resistances or Vulnerabilities, apply them before reducing the ward's Hit Points.`,
  },
  "Spell Breaker": {
    name: "Spell Breaker",
    description: `You always have the Counterspell and Dispel Magic spells prepared. In addition, you can cast Dispel Magic as a Bonus Action, and you can add your Proficiency Bonus to its ability check.

    When you cast either spell with a spell slot, that slot isn't expended if the spell fails to stop a spell.`,
  },
  "Spell Resistance": {
    name: "Spell Resistance",
    description:
      "You have Advantage on saving throws against spells, and you have Resistance to the damage of spells.",
  },

  // Bladesinger
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },

  // Chronomancer
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },

  // Diviner

  "Divination Savant": {
    name: "Divination Savant",
    description: `Choose two Wizard spells from the Divination school, each of which must be no higher than level 2, and add them to your spellbook for free.

    In addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Divination school to your spellbook for free. The chosen spell must be of a level for which you have spell slots.`,
  },
  Portent: {
    name: "Portent",
    description: `Glimpses of the future begin to press on your awareness. Whenever you finish a Long Rest, roll two d20s and record the numbers rolled. You can replace any d20 Test made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.

    Each foretelling roll can be used only once. When you finish a Long Rest, you lose any unused foretelling rolls.`,
  },
  "Expert Divination": {
    name: "Expert Divination",
    description: `Casting Divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a Divination spell using a level 2+ spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the slot you expended and can't be higher than level 5.`,
  },
  "Third Eye": {
    name: "Third Eye",
    description: `You can increase your powers of perception. As a Bonus Action, choose one of the following benefits, which lasts until you start a Short or Long Rest. You can't use this feature again until you finish a Short or Long Rest.

    Darkvision: You gain Darkvision with a range of 120 feet.

    Greater Comprehension: You can read any language.

    See Invisibility: You can cast See Invisibility without expending a spell slot.`,
  },
  "Greater Portent": {
    name: "Greater Portent",
    description:
      "The visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. Roll three d20s for your Portent feature rather than two.",
  },

  // Evoker
  "Evocation Savant": {
    name: "Evocation Savant",
    description: `Choose two Wizard spells from the Evocation school, each of which must be no higher than level 2, and add them to your spellbook for free.

    In addition, whenever you gain access to a new level of spell slots in this class, you can add one Wizard spell from the Evocation school to your spellbook for free. The chosen spell must be of a level for which you have spell slots.`,
  },
  "Potent Cantrip": {
    name: "Potent Cantrip",
    description:
      "Your damaging cantrips affect even creatures that avoid the brunt of the effect. When you cast a cantrip at a creature and you miss with the attack roll or the target succeeds on a saving throw against the cantrip, the target takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip.",
  },
  "Sculpt Spells": {
    name: "Sculpt Spells",
    description:
      "You can create pockets of relative safety within the effects of your evocations. When you cast an Evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1 plus the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save.",
  },
  "Empowered Evocation": {
    name: "Empowered Evocation",
    description:
      "Whenever you cast a Wizard spell from the Evocation school, you can add your Intelligence modifier to one damage roll of that spell.",
  },
  Overchannel: {
    name: "Overchannel",
    description: `You can increase the power of your spells. When you cast a Wizard spell with a spell slot of levels 1-5 that deals damage, you can deal maximum damage with that spell on the turn you cast it.

    The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a Long Rest, you take 2d12 Necrotic damage for each level of the spell slot immediately after you cast it. This damage ignores Resistance and Immunity.

    Each time you use this feature again before finishing a Long Rest, the Necrotic damage per spell level increases by 1d12.`,
  },

  // Graviturgist

  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },

  // Illusionist

  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
  "fill fill": {
    name: "fill fill",
    description: "",
  },
};
