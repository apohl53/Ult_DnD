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
  // Life Domain
  "Disciple of Life": {
    name: "Disciple of Life",
    description: `When a spell you cast with a spell slot restores Hit Points to a creature, that creature regains additional Hit Points on the turn you cast the spell. The additional Hit Points equal 2 plus the spell slot's level.`,
  },
  "Life Domain Spells": {
    name: "Life Domain Spells",
    description: `
    3	Aid, Bless, Cure Wounds, Lesser Restoration
    5	Mass Healing Word, Revivify
    7	Aura of Life, Death Ward
    9	Greater Restoration, Mass Cure Wounds`,
  },
  "Preserve Life": {
    name: "Preserve Life",
    description: `As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to evoke healing energy that can restore a number of Hit Points equal to five times your Cleric level. Choose Bloodied creatures within 30 feet of yourself (which can include you), and divide those Hit Points among them. This feature can restore a creature to no more than half its Hit Point maximum.`,
  },
  "Blessed Healer": {
    name: "Blessed Healer",
    description: `The healing spells you cast on others heal you as well. Immediately after you cast a spell with a spell slot that restores Hit Points to one or more creatures other than yourself, you regain Hit Points equal to 2 plus the spell slot’s level.`,
  },
  "Supreme Healing": {
    name: "Supreme Healing",
    description: `When you would normally roll one or more dice to restore Hit Points to a creature with a spell or Channel Divinity, don’t roll those dice for the healing; instead use the highest number possible for each die. For example, instead of restoring 2d6 Hit Points to a creature with a spell, you restore 12.`,
  },
  // Light Domain
  "Light Domain Spells": {
    name: "Light Domain Spells",
    description: `
    3	Burning Hands, Faerie Fire, Scorching Ray, See Invisibility
    5	Daylight, Fireball
    7	Arcane Eye, Wall of Fire
    9	Flame Strike, Scrying`,
  },
  "Radiance of the Dawn": {
    name: "Radiance of the Dawn",
    description: `As a Magic action, you present your Holy Symbol and expend a use of your Channel Divinity to emit a flash of light in a 30-foot Emanation originating from yourself. Any magical Darkness—such as that created by the Darkness spell—in that area is dispelled. Additionally, each creature of your choice in that area must make a Constitution saving throw, taking Radiant damage equal to 2d10 plus your Cleric level on a failed save or half as much damage on a successful one.`,
  },
  "Warding Flare": {
    name: "Warding Flare",
    description: `When a creature that you can see within 30 feet of yourself makes an attack roll, you can take a Reaction to impose Disadvantage on the attack roll, causing light to flare before it hits or misses.

    You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Long Rest.`,
  },
  "Improved Warding Flare": {
    name: "Improved Warding Flare",
    description: `You regain all expended uses of your Warding Flare when you finish a Short or Long Rest.

    In addition, whenever you use Warding Flare, you can give the target of the triggering attack a number of Temporary Hit Points equal to 2d6 plus your Wisdom modifier.`,
  },
  "Corona of Light": {
    name: "Corona of Light",
    description: `As a Magic action, you cause yourself to emit an aura of sunlight that lasts for 1 minute or until you dismiss it (no action required). You emit Bright Light in a 60-foot radius and Dim Light for an additional 30 feet. Your enemies in the Bright Light have Disadvantage on saving throws against your Radiance of the Dawn and any spell that deals Fire or Radiant damage.

    You can use this feature a number of times equal to your Wisdom modifier (minimum of once), and you regain all expended uses when you finish a Long Rest.`,
  },
  // Trickery Domain
  "Trickery Domain Spells": {
    name: "Trickery Domain Spells",
    description: `
    3	Charm Person, Disguise Self, Invisibility, Pass without Trace
    5	Hypnotic Pattern, Nondetection
    7	Confusion, Dimension Door
    9	Dominate Person, Modify Memory`,
  },
  "Blessing of the Trickster": {
    name: "Blessing of the Trickster",
    description: `As a Magic action, you can choose yourself or a willing creature within 30 feet of yourself to have Advantage on Dexterity (Stealth) checks. This blessing lasts until you finish a Long Rest or you use this feature again.`,
  },
  "Invoke Duplicity": {
    name: "Invoke Duplicity",
    description: `As a Bonus Action, you can expend one use of your Channel Divinity to create a perfect visual illusion of yourself in an unoccupied space you can see within 30 feet of yourself. The illusion is intangible and doesn't occupy its space. It lasts for 1 minute, but it ends early if you dismiss it (no action required) or have the Incapacitated condition. The illusion is animated and mimics your expressions and gestures. While it persists, you gain the following benefits.

    Cast Spells. You can cast spells as though you were in the illusion's space, but you must use your own senses.

    Distract. When both you and your illusion are within 5 feet of a creature that can see the illusion, you have Advantage on attack rolls against that creature, given how distracting the illusion is to the target.

    Move. As a Bonus Action, you can move the illusion up to 30 feet to an unoccupied space you can see that is within 120 feet of yourself.`,
  },
  "Trickster's Transposition": {
    name: "Trickster's Transposition",
    description: `Whenever you take the Bonus Action to create or move the illusion of your Invoke Duplicity, you can teleport, swapping places with the illusion.`,
  },
  "Improved Duplicity": {
    name: "Improved Duplicity",
    description: `The illusion of your Invoke Duplicity has grown more powerful in the following ways.

    Shared Distraction. When you and your allies make attack rolls against a creature within 5 feet of the illusion, the attack rolls have Advantage.

    Healing Illusion. When the illusion ends, you or a creature of your choice within 5 feet of it regains a number of Hit Points equal to your Cleric level.`,
  },
  // War Domain
  "War Domain Spells": {
    name: "War Domain Spells",
    description: `
    3	Guiding Bolt, Magic Weapon, Shield of Faith, Spiritual Weapon
    5	Crusader's Mantle, Spirit Guardians
    7	Fire Shield, Freedom of Movement
    9	Hold Monster, Steel Wind Strike`,
  },
  "Guided Strike": {
    name: "Guided Strike",
    description: `When you or a creature within 30 feet of you misses with an attack roll, you can expend one use of your Channel Divinity and give that roll a +10 bonus, potentially causing it to hit. When you use this feature to benefit another creature's attack roll, you must take a Reaction to do so.`,
  },
  "War Priest": {
    name: "War Priest",
    description: `As a Bonus Action, you can make one attack with a weapon or an Unarmed Strike. You can use this Bonus Action a number of times equal to your Wisdom modifier (minimum of once). You regain all expended uses when you finish a Short or Long Rest.`,
  },
  "War God's Blessing": {
    name: "War God's Blessing",
    description: `You can expend a use of your Channel Divinity to cast Shield of Faith or Spiritual Weapon rather than expending a spell slot. When you cast either spell in this way, the spell doesn’t require Concentration. Instead the spell lasts for 1 minute, but it ends early if you cast that spell again, have the Incapacitated condition, or die.`,
  },
  "Avatar of Battle": {
    name: "Avatar of Battle",
    description: `You gain Resistance to Bludgeoning, Piercing, and Slashing damage.`,
  },

  // Empty
  "": {
    name: "",
    description: ``,
  },
};
