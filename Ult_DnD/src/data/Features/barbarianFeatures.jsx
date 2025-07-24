export const barbarianFeatures = {
  Rage: {
    name: "Rage",
    description: `You can imbue yourself with a primal power called Rage, a force that grants you extraordinary might and resilience. You can enter it as a Bonus Action if you aren't wearing Heavy armor.

    You can enter your Rage the number of times shown for your Barbarian level in the Rages column of the Barbarian Features table. You regain one expended use when you finish a Short Rest, and you regain all expended uses when you finish a Long Rest.

    While active, your Rage follows the rules below.

    Damage Resistance 
    You have Resistance to Bludgeoning, Piercing, and Slashing damage.

    Rage Damage 
    When you make an attack using Strength—with either a weapon or an Unarmed Strike—and deal damage to the target, you gain a bonus to the damage that increases as you gain levels as a Barbarian, as shown in the Rage Damage column of the Barbarian Features table.

    Strength Advantage
    You have Advantage on Strength checks and Strength saving throws.

    No Concentration or Spells 
    You can't maintain Concentration, and you can't cast spells.

    Duration 
    The Rage lasts until the end of your next turn, and it ends early if you don Heavy armor or have the Incapacitated condition. If your Rage is still active on your next turn, you can extend the Rage for another round by doing one of the following:

    - Make an attack roll against an enemy  
    - Force an enemy to make a saving throw  
    - Take a Bonus Action to extend your Rage

    Each time the Rage is extended, it lasts until the end of your next turn. You can maintain a Rage for up to 10 minutes.`,
  },
  "Unarmored Defense": {
    name: "Unarmored Defense",
    description:
      "While you aren't wearing any armor, your base Armor Class equals 10 plus your Dexterity and Constitution modifiers. You can use a Shield and still gain this benefit.",
  },
  "Danger Sense": {
    name: "Danger Sense",
    description:
      "You gain an uncanny sense of when things aren't as they should be, giving you an edge when you dodge perils. You have Advantage on Dexterity saving throws unless you have the Incapacitated condition.",
  },
  "Reckless Attack": {
    name: "Reckless Attack",
    description:
      "You can throw aside all concern for defense to attack with increased ferocity. When you make your first attack roll on your turn, you can decide to attack recklessly. Doing so gives you Advantage on attack rolls using Strength until the start of your next turn, but attack rolls against you have Advantage during that time.",
  },
  "Primal Knowledge": {
    name: "Primal Knowledge",
    description:
      "You gain proficiency in another skill of your choice from the skill list available to Barbarians at level 1. In addition, while your Rage is active, you can channel primal power when you attempt certain tasks; whenever you make an ability check using one of the following skills, you can make it as a Strength check even if it normally uses a different ability: Acrobatics, Intimidation, Perception, Stealth, or Survival. When you use this ability, your Strength represents primal power coursing through you, honing your agility, bearing, and senses. ",
  },
  "Extra Attack": {
    name: "Extra Attack",
    description:
      "You can attack twice instead of once whenever you take the Attack action on your turn.",
  },
  "Fast Movement": {
    name: "Fast Movement",
    description:
      "Your speed increases by 10 feet while you aren't wearing Heavy armor.",
  },
  "Feral Instinct": {
    name: "Feral Instinct",
    description:
      "Your instincts are so honed that you have Advantage on Initiative rolls.",
  },
  "Instinctive Pounce": {
    name: "Instinctive Pounce",
    description:
      "As part of the Bonus Action you take to enter your Rage, you can move up to half your Speed.",
  },
  "Brutal Strike": {
    name: "Brutal Strike",
    description:
      "If you use Reckless Attack, you can forgo any Advantage on one Strength-based attack roll of your choice on your turn. The chosen attack roll mustn't have Disadvantage. If the chosen attack roll hits, the target takes an extra 1d10 damage of the same type dealt by the weapon or Unarmed Strike, and you can cause one Brutal Strike effect of your choice. You have the following effect options. Forceful Blow. The target is pushed 15 feet straight away from you. You can then move up to half your Speed straight toward the target without provoking Opportunity Attacks.Hamstring Blow. The target's Speed is reduced by 15 feet until the start of your next turn. A target can be affected by only one Hamstring Blow at a time—the most recent one.",
  },
  "Relentless Rage": {
    name: "Relentless Rage",
    description:
      "Your Rage can keep you fighting despite grievous wounds. If you drop to 0 Hit Points while your Rage is active and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, your Hit Points instead change to a number equal to twice your Barbarian level. Each time you use this feature after the first, the DC increases by 5. When you finish a Short or Long Rest, the DC resets to 10.",
  },
  "Improved Brutal Strike": {
    name: "Improved Brutal Strike",
    description:
      "You have honed new ways to attack furiously. The following effects are now among your Brutal Strike options. Staggering Blow. The target has Disadvantage on the next saving throw it makes, and it can't make Opportunity Attacks until the start of your next turn. Sundering Blow. Before the start of your next turn, the next attack roll made by another creature against the target gains a +5 bonus to the roll. An attack roll can gain only one Sundering Blow bonus.",
  },
  "Persistent Rage": {
    name: "Persistent Rage",
    description:
      "When you roll Initiative, you can regain all expended uses of Rage. After you regain uses of Rage in this way, you can't do so again until you finish a Long Rest. In addition, your Rage is so fierce that it now lasts for 10 minutes without you needing to do anything to extend it from round to round. Your Rage ends early if you have the Unconscious condition (not just the Incapacitated condition) or don Heavy armor.",
  },
  "Improved Brutal Strike (2)": {
    name: "Improved Brutal Strike (2)",
    description:
      "The extra damage of your Brutal Strike increases to 2d10. In addition, you can use two different Brutal Strike effects whenever you use your Brutal Strike feature.",
  },
  "Indomitable Might": {
    name: "Indomitable Might",
    description:
      "If your total for a Strength check or Strength saving throw is less than your Strength score, you can use that score in place of the total.",
  },
  "Epic Boon": {
    name: "Epic Boon",
    description:
      "You gain an Epic Boon feat or another feat of your choice for which you qualify.",
  },
  "Primal Champion": {
    name: "Primal Champion",
    description:
      "You embody primal power. Your Strength and Constitution scores increase by 4, and their maximum is now 25.",
  },
  // Barbarian Subclass Features

  // Ancestral Guardian

  "Ancestral Protectors": {
    name: "Ancestral Protectors",
    description: `Starting when you choose this path at 3rd level, spectral warriors appear when you enter your rage. While you're raging, the first creature you hit with an attack on your turn becomes the target of the warriors, which hinder its attacks. Until the start of your next turn, that target has disadvantage on any attack roll that isn't against you, and when the target hits a creature other than you with an attack, that creature has resistance to the damage dealt by the attack. The effect on the target ends early if your rage ends.`,
  },
  "Spirit Shield": {
    name: "Spirit Shield",
    description: `Beginning at 6th level, the guardian spirits that aid you can provide supernatural protection to those you defend. If you are raging and another creature you can see within 30 feet of you takes damage, you can use your reaction to reduce that damage by 2d6.

    When you reach certain levels in this class, you can reduce the damage by more: by 3d6 at 10th level and by 4d6 at 14th level.`,
  },
  "Consult the Spirits": {
    name: "Consult the Spirits",
    description: `At 10th level, you gain the ability to consult with your ancestral spirits. When you do so, you cast the augury or clairvoyance spell, without using a spell slot or material components. Rather than creating a spherical sensor, this use of clairvoyance invisibly summons one of your ancestral spirits to the chosen location. Wisdom is your spellcasting ability for these spells.

    After you cast either spell in this way, you can't use this feature again until you finish a short or long rest.`,
  },
  "Vengeful Ancestors": {
    name: "Vengeful Ancestors",
    description: `At 14th level, your ancestral spirits grow powerful enough to retaliate. When you use your Spirit Shield to reduce the damage of an attack, the attacker takes an amount of force damage equal to the damage that your Spirit Shield prevents.`,
  },

  // Beast

  "Form of the Beast": {
    name: "Form of the Beast",
    description: `When you enter your rage, you can transform, revealing the bestial power within you. Until the rage ends, you manifest a natural weapon. It counts as a simple melee weapon for you, and you add your Strength modifier to the attack and damage rolls when you attack with it, as normal.

    You choose the weapon's form each time you rage:

    Bite. Your mouth transforms into a bestial muzzle or great mandibles (your choice). It deals 1d8 piercing damage on a hit. Once on each of your turns when you damage a creature with this bite, you regain a number of hit points equal to your proficiency bonus, provided you have less than half your hit points when you hit.

    Claws. Each of your hands transforms into a claw, which you can use as a weapon if it's empty. It deals 1d6 slashing damage on a hit. Once on each of your turns when you attack with a claw using the Attack action, you can make one additional claw attack as part of the same action.

    Tail. You grow a lashing, spiny tail, which deals 1d8 piercing damage on a hit and has the reach property. If a creature you can see within 10 feet of you hits you with an attack roll, you can use your reaction to swipe your tail and roll a d8, applying a bonus to your AC equal to the number rolled, potentially causing the attack to miss you.

`,
  },
  "Bestial Soul": {
    name: "Bestial Soul",
    description: `The feral power within you increases, causing the natural weapons of your Form of the Beast to count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.

    You can also alter your form to help you adapt to your surroundings. When you finish a short or long rest, choose one of the following benefits, which lasts until you finish your next short or long rest:

    You gain a swimming speed equal to your walking speed, and you can breathe underwater.
    You gain a climbing speed equal to your walking speed, and you can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.
    When you jump, you can make a Strength (Athletics) check and extend your jump by a number of feet equal to the check's total. You can make this special check only once per turn.`,
  },
  "Infectious Fury": {
    name: "Infectious Fury",
    description: `When you hit a creature with your natural weapons while you are raging, the beast within you can curse your target with rabid fury. The target must succeed on a Wisdom saving throw (DC equal to 8 + your Constitution modifier + your proficiency bonus) or suffer one of the following effects (your choice):

    The target must use its reaction to make a melee attack against another creature of your choice that you can see.
    The target takes 2d12 psychic damage.
    You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  },
  "Call the Hunt": {
    name: "Call the Hunt",
    description: `The beast within you grows so powerful that you can spread its ferocity to others and gain resilience from them joining your hunt. When you enter your rage, you can choose a number of other willing creatures you can see within 30 feet of you equal to your Constitution modifier (minimum of one creature). You gain 5 temporary hit points for each creature that accepts this feature. Until the rage ends, the chosen creatures can each use the following benefit once on each of their turns: when the creature hits a target with an attack roll and deals damage to it, the creature can roll a d6 and gain a bonus to the damage equal to the number rolled.

    You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  },

  // Berserker
  Frenzy: {
    name: "Frenzy",
    description:
      "If you use Reckless Attack while your Rage is active, you deal extra damage to the first target you hit on your turn with a Strength-based attack. To determine the extra damage, roll a number of d6s equal to your Rage Damage bonus, and add them together. The damage has the same type as the weapon or Unarmed Strike used for the attack.",
  },
  "Mindless Rage": {
    name: "Mindless Rage",
    description:
      "You have Immunity to the Charmed and Frightened conditions while your Rage is active. If you're Charmed or Frightened when you enter your Rage, the condition ends on you.",
  },
  Retaliation: {
    name: "Retaliation",
    description:
      "When you take damage from a creature that is within 5 feet of you, you can take a Reaction to make one melee attack against that creature, using a weapon or an Unarmed Strike.",
  },
  "Intimidating Presence": {
    name: "Intimidating Presence",
    description:
      "As a Bonus Action, you can strike terror into others with your menacing presence and primal power. When you do so, each creature of your choice in a 30-foot Emanation originating from you must make a Wisdom saving throw (DC 8 plus your Strength modifier and Proficiency Bonus). On a failed save, a creature has the Frightened condition for 1 minute. At the end of each of the Frightened creature's turns, the creature repeats the save, ending the effect on itself on a success. Once you use this feature, you can't use it again until you finish a Long Rest unless you expend a use of your Rage (no action required) to restore your use of it.",
  },

  // Giant

  "Giant's Power": {
    name: "Giant's Power",
    description: `When you choose this path, you learn to speak, read, and write Giant or one other language of your choice if you already know Giant. Additionally, you learn a cantrip of your choice: either druidcraft or thaumaturgy. Wisdom is your spellcasting ability for this spell.`,
  },
  "Giant's Havoc": {
    name: "Giant's Havoc",
    description: `Your rages pull strength from the primal might of giants, transforming you into a hulking force of destruction. While raging, you gain the following benefits:

    Crushing Throw. When you make a successful ranged attack with a thrown weapon using Strength, you can add your Rage Damage bonus to the attack's damage roll.

    Giant Stature. Your reach increases by 5 feet, and if you are smaller than Large, you become Large, along with anything you are wearing. If there isn't enough room for you to increase your size, your size doesn't change.`,
  },
  "Elemental Cleaver": {
    name: "Elemental Cleaver",
    description: `Your bond with the elemental might of giants grows, and you learn to infuse weapons with primordial energy.

    When you enter your rage, you can choose one weapon that you are holding and infuse it with one of the following damage types: acid, cold, fire, thunder, or lightning. While you wield the infused weapon during your rage, the weapon's damage type changes to the chosen type, it deals an extra 1d6 damage of the chosen type when it hits, and it gains the thrown property, with a normal range of 20 feet and a long range of 60 feet. If you throw the weapon, it reappears in your hand the instant after it hits or misses a target. The infused weapon's benefits are suppressed while a creature other than you wields it.

    While raging and holding the infused weapon, you can use a bonus action to change the infused weapon's current damage type to another one from the damage type options above.`,
  },
  "Mighty Impel": {
    name: "Mighty Impel",
    description: `Your connection to giant strength allows you to hurl both allies and enemies on the battlefield. As a bonus action while raging, you can choose one Medium or smaller creature within your reach and move it to an unoccupied space you can see within 30 feet of yourself. An unwilling creature must succeed on a Strength saving throw (DC equals 8 + your proficiency bonus + your Strength modifier) to avoid the effect.

    If, at the end of this movement, the thrown creature isn't on a surface or liquid that can support it, the creature falls, taking damage as normal and landing prone.`,
  },
  "Demiurgic Colossus": {
    name: "Demiurgic Colossus",
    description: `The primordial power of your rage intensifies. When you rage, your reach increases by 10 feet, your size can increase to Large or Huge (your choice), and you can use your Mighty Impel to move creatures that are Large or smaller.

    In addition, the extra damage dealt by your Elemental Cleaver feature increases to 2d6.`,
  },

  // Spell Scorned

  "Instinctual Divination": {
    name: "Instinctual Divination",
    description: `You gain an intuitive sense about the supernatural facets of the world. When you take the Study action to make an Intelligence (Arcana) or Intelligence (Religion) check, you can make it as a Wisdom (Survival) check instead.`,
  },
  "Spell Hammer": {
    name: "Spell Hammer",
    description: `You sheathe your weapons in crackling energy that is particularly baneful to creatures from other worlds, those that wield magic, or those that are capable of tremendous destruction. Once per turn while your Rage is active, you can deal double your Rage Damage bonus to a target you hit with a Strength-based attack. If the target has Legendary Actions, can cast spells, or was summoned, you can deal triple your Rage Damage bonus instead.`,
  },
  "Spell Shield": {
    name: "Spell Shield",
    description: `You exert a void around you that consumes spells. While your Rage is active, you radiate a spell-consuming aura in a 30-foot Emanation that originates from you. You and your allies in the aura gain a bonus to saving throws against spells equal to your Rage Damage bonus.`,
  },
  "Sunder the Weave": {
    name: "Sunder the Weave",
    description: `You always have the Counterspell spell prepared. With this feature, you can cast it without a spell slot or components while your Rage is active, and your spellcasting ability for it is Strength. As part of the Reaction you take to cast the spell, you can move up to your Speed and make one attack with a weapon against the target of the spell.

    Once you cast the spell with this feature, you can't do so in this way again until you finish a Short or long rest.`,
  },
  "Bolstering Howl": {
    name: "Bolstering Howl",
    description: `When you or another creature that can hear you takes damage, you can take a Reaction to grant it Resistance against that damage. In addition, the target gains Resistance to that damage type until the end of the current turn.`,
  },
  "Dimensional Duel": {
    name: "Dimensional Duel",
    description: `You always have the Banishment spell prepared. When you activate your Rage or as a Bonus Action while your Rage is active, you can cast Banishment without a spell slot or components and while your Rage is active, and your spellcasting ability for it is Strength. You can maintain Concentration while your Rage is active. You can target up to three creatures when you cast Banishment this way. In addition, you can choose to pursue the creatures you banish. If you do so, the targets you banished don't have the Incapacitated condition for the spell's duration, and you travel with them to a demiplane. The demiplane is an empty room 30 to 200 feet in each dimension (you choose when you cast the spell) and made of wood or stone (your choice). You must create enough space for you and the targets, or the spell ends. The room is filled with Bright Light. When the spell ends, if you traveled with any targets, you and any dropped objects reappear in the space you left or in the nearest unoccupied space if that space is occupied.

    You can use this feature a number of times equal to your Strength modifier (minimum of once), and you regain all expended uses when you finish a long rest.`,
  },

  // Wild Heart
  "Animal Speaker": {
    name: "Animal Speaker",
    description: `You can cast the Beast Sense and Speak with Animals spells but only as Rituals. Wisdom is your spellcasting ability for them.`,
  },
  "Rage of the Wilds": {
    name: "Rage of the Wilds",
    description: `Your Rage taps into the primal power of animals. Whenever you activate your Rage, you gain one of the following options of your choice.

    Bear. While your Rage is active, you have Resistance to every damage type except Force, Necrotic, Psychic, and Radiant.

    Eagle. When you activate your Rage, you can take the Disengage and Dash actions as part of that Bonus Action. While your Rage is active, you can take a Bonus Action to take both of those actions.

    Wolf. While your Rage is active, your allies have Advantage on attack rolls against any enemy of yours within 5 feet of you.`,
  },
  "Aspect of the Wilds": {
    name: "Aspect of the Wilds",
    description: `You gain one of the following options of your choice. Whenever you finish a Long Rest, you can change your choice.

    Owl. You have Darkvision with a range of 60 feet. If you already have Darkvision, its range increases by 60 feet.

    Panther. You have a Climb Speed equal to your Speed.

    Salmon. You have a Swim Speed equal to your Speed.`,
  },
  "Nature Speaker": {
    name: "Nature Speaker",
    description: `You can cast the Commune with Nature spell but only as a Ritual. Wisdom is your spellcasting ability for it.`,
  },
  "Power of the Wilds": {
    name: "Power of the Wilds",
    description: `Whenever you activate your Rage, you gain one of the following options of your choice.

    Falcon. While your Rage is active, you have a Fly Speed equal to your Speed if you aren't wearing any armor.

    Lion. While your Rage is active, any of your enemies within 5 feet of you have Disadvantage on attack rolls against targets other than you or another Barbarian who has this option active.

    Ram. While your Rage is active, you can cause a Large or smaller creature to have the Prone condition when you hit it with a melee attack.`,
  },

  // Wild Magic

  "Magic Awareness": {
    name: "Magic Awareness",
    description: `As an action, you can open your awareness to the presence of concentrated magic. Until the end of your next turn, you know the location of any spell or magic item within 60 feet of you that isn't behind total cover. When you sense a spell, you learn which school of magic it belongs to.

    You can use this feature a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  },
  "Wild Surge": {
    name: "Wild Surge",
    description: `The magical energy roiling inside you sometimes erupts from you. When you enter your rage, roll on the Wild Magic table to determine the magical effect produced.

    If the effect requires a saving throw, the DC equals 8 + your proficiency bonus + your Constitution modifier. See General Page for Table`,
  },
  "Bolstering Magic": {
    name: "Bolstering Magic",
    description: `You can harness your wild magic to bolster yourself or a companion. As an action, you can touch one creature (which can be yourself) and confer one of the following benefits of your choice to that creature:

    For 10 minutes, the creature can roll a d3 whenever making an attack roll or an ability check and add the number rolled to the d20 roll.
    Roll a d3. The creature regains one expended spell slot, the level of which equals the number rolled or lower (the creature's choice). Once a creature receives this benefit, that creature can't receive it again until after a long rest.
    You can take this action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a long rest.`,
  },
  "Unstable Backlash": {
    name: "Unstable Backlash",
    description: `When you are imperiled during your rage, the magic within you can lash out; immediately after you take damage or fail a saving throw while raging, you can use your reaction to roll on the Wild Magic table and immediately produce the effect rolled. This effect replaces your current Wild Magic effect.`,
  },
  "Controlled Surge": {
    name: "Controlled Surge",
    description: `Whenever you roll on the Wild Magic table, you can roll the die twice and choose which of the two effects to unleash. If you roll the same number on both dice, you can ignore the number and choose any effect on the table.`,
  },
  // Path of the World Tree

  "Vitality of the Tree": {
    name: "Vitality of the Tree",
    description: `Your Rage taps into the life force of the World Tree. You gain the following benefits.

    Vitality Surge. When you activate your Rage, you gain a number of Temporary Hit Points equal to your Barbarian level.

    Life-Giving Force. At the start of each of your turns while your Rage is active, you can choose another creature within 10 feet of yourself to gain Temporary Hit Points. To determine the number of Temporary Hit Points, roll a number of d6s equal to your Rage Damage bonus, and add them together. If any of these Temporary Hit Points remain when your Rage ends, they vanish.`,
  },
  "Branches of the Tree": {
    name: "Branches of the Tree",
    description: `Whenever a creature you can see starts its turn within 30 feet of you while your Rage is active, you can take a Reaction to summon spectral branches of the World Tree around it. The target must succeed on a Strength saving throw (DC 8 plus your Strength modifier and Proficiency Bonus) or be teleported to an unoccupied space you can see within 5 feet of yourself or in the nearest unoccupied space you can see. After the target teleports, you can reduce its Speed to 0 until the end of the current turn.`,
  },

  "Battering Roots": {
    name: "Battering Roots",
    description: `During your turn, your reach is 10 feet greater with any Melee weapon that has the Heavy or Versatile property, as tendrils of the World Tree extend from you. When you hit with such a weapon on your turn, you can activate the Push or Topple mastery property in addition to a different mastery property you're using with that weapon.`,
  },

  "Travel along the Tree": {
    name: "Travel along the Tree",
    description: `When you activate your Rage and as a Bonus Action while your Rage is active, you can teleport up to 60 feet to an unoccupied space you can see.

    In addition, once per Rage, you can increase the range of that teleport to 150 feet. When you do so, you can also bring up to six willing creatures who are within 10 feet of you. Each creature teleports to an unoccupied space of your choice within 10 feet of your destination space.`,
  },

  //
  "": {
    name: "",
    description: ``,
  },

  // Zealot
  "Divine Fury": {
    name: "Divine Fury",
    description:
      "You can channel divine power into your strikes. On each of your turns while your Rage is active, the first creature you hit with a weapon or an Unarmed Strike takes extra damage equal to 1d6 plus half your Barbarian level (round down). The extra damage is Necrotic or Radiant; you choose the type each time you deal the damage.",
  },
  "Warrior of the Gods": {
    name: "Warrior of the Gods",
    description:
      "A divine entity helps ensure you can continue the fight. You have a pool of four d12s that you can spend to heal yourself. As a Bonus Action, you can expend dice from the pool, roll them, and regain a number of Hit Points equal to the roll's total. Your pool regains all expended dice when you finish a Long Rest. The pool's maximum number of dice increases by one when you reach Barbarian levels 6 (5 dice), 12 (6 dice), and 17 (7 dice).",
  },
  "Fanatical Focus": {
    name: "Fanatical Focus",
    description:
      "Once per active Rage, if you fail a saving throw, you can reroll it with a bonus equal to your Rage Damage bonus, and you must use the new roll.",
  },
  "Zealous Presence": {
    name: "Zealous Presence",
    description:
      "As a Bonus Action, you unleash a battle cry infused with divine energy. Up to ten other creatures of your choice within 60 feet of you gain Advantage on attack rolls and saving throws until the start of your next turn. Once you use this feature, you can't use it again until you finish a Long Rest unless you expend a use of your Rage (no action required) to restore your use of it.",
  },
  "Rage of the Gods": {
    name: "Rage of the Gods",
    description:
      "When you activate your Rage, you can assume the form of a divine warrior. This form lasts for 1 minute or until you drop to 0 Hit Points. Once you use this feature, you can't do so again until you finish a Long Rest. While in this form, you gain the benefits below. Flight. You have a Fly Speed equal to your Speed and can hover. Resistance. You have Resistance to Necrotic, Psychic, and Radiant damage. Revivification. When a creature within 30 feet of you would drop to 0 Hit Points, you can take a Reaction to expend a use of your Rage to instead change the target's Hit Points to a number equal to your Barbarian level.",
  },
};
