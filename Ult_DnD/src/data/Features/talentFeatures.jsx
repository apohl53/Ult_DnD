export const talentFeatures = {
  "Strain to Maintain": {
    name: "Strain to Maintain",
    description: `Whenever you fail a Constitution saving throw to maintain concentration on one or more powers you gain from this class, you can gain strain to keep all the powers you are concentrating on active. This strain is equal to the sum of the order of those powers.`,
  },
  "Psionic Exertion": {
    name: "Psionic Exertion",
    description: `You can expend your energy to give your powers an extra effect. You gain one of the following Psionic Exertion options of your choice. You gain additional options at 7th, 11th, and 15th level.
You can use only one Psionic Exertion option on a power when you manifest it.`,
  },
  "Psychic Boost": {
    name: "Psychic Boost",
    description: `You learn to focus your mind and draw forth reserved mental strength to replenish your body and brain. You can use a bonus action to remove strain equal to your proficiency bonus. Once you use this feature, you can't use it again until you finish a long rest.
You can use this feature twice between long rests starting at 12th level, and three times between long rests starting at 17th level.`,
  },
  "Psionic Bastion": {
    name: "Psionic Bastion",
    description: `You gain mastery over your mind and emotions. You can't be charmed or frightened, and magic or psionics can't put you to sleep. Additionally, you have resistance to psychic damage.`,
  },
  "Shielded Mind": {
    name: "Shielded Mind",
    description: `Your mind instinctively shields you from danger. You have advantage on Intelligence, Wisdom, and Charisma saving throws, and you are immune to powers, spells, and other supernatural effects that allow other creatures to read your thoughts, determine whether you are lying, know your alignment, or know your creature type. Additionally, creatures can telepathically communicate with you only if you allow it.`,
  },
  "Ignore Strain": {
    name: "Ignore Strain",
    description: `You use powers so frequently that your body has adapted to the strain put on them. Whenever you finish a long rest, choose body strain, mind strain, or soul strain.
You ignore the effects of the chosen type of strain until you finish a long rest`,
  },

  // Chronopath
  "Chronopathy Adept": {
    name: "Chronopathy Adept",
    description: `When you roll a manifestation die to learn a new chronopathy power, you can roll the die twice and use either roll.

    In addition, after you make a manifestation test to manifest a chronopathy power, you can reroll the manifestation die and use either roll. You can reroll a number of manifestation tests equal to your Intelligence modifier (minimum one test), regaining all uses when you finish a long rest. You can use this feature only once for a single manifestation test.`,
  },
  "Rapid Manifestation": {
    name: "Rapid Manifestation",
    description: `You cause time around you to shift, speeding up the amount of time it takes to manifest a power. When you manifest a power, you can use this feature to shorten its manifestation time in any of the following ways:

    • You manifest a power that normally requires a bonus action or a reaction (no action required). You can’t cast a spell or manifest another power during the same turn, except for a cantrip with a casting time of 1 action or a 1st-order power with a manifestation time of 1 action.
    • You use a bonus action to manifest a power that normally requires an action.
    • You use an action to manifest a power that normally requires 1 minute.
    • If a power has a manifestation time greater than 1 minute, you can manifest it in half its normal time.

    You can use this feature a number of times equal to your Intelligence modifier (minimum once), regaining all uses when you finish a long rest.`,
  },

  Decay: {
    name: "Decay",
    description: `You rapidly advance the age of objects with your mind, causing them to turn to dust. You can use an action to gain 1 strain while touching a mundane object not carried or worn by another creature. If the object is Medium or smaller, it disintegrates into a pile of dust.

    If the object is Large or bigger, you disintegrate a 5-foot- cubic portion of the object.

    Additionally, while touching a Construct, you can use an action to gain strain up to your proficiency bonus. The Construct must make a Wisdom saving throw against your talent power save DC, taking 2d10 necrotic damage for each strain you gain on a failed save, or half as much damage on a successful one.`,
  },

  "Fickle Readiness": {
    name: "Fickle Readiness",
    description: `At the beginning of a fight, you bend time to your advantage. If you are surprised at the start of combat and aren't incapacitated, you can act normally on your first turn. You can also gain 1 strain to allow a surprised creature within 90 feet of you that you can see to act normally on their first turn.

    Additionally, whenever you roll initiative, you can switch the initiative count of two creatures you can see within 90 feet of you that rolled initiative at the same time as you.`,
  },

  "Time Pocket": {
    name: "Time Pocket",
    description: `You temporarily remove a creature from space and time with your mind. As an action, you gain 3 strain and focus your mind on bending time around a creature you can see within 120 feet of you, which must make a Charisma saving throw against your talent power save DC. On a failed save, the creature takes 6d10 psychic damage and disappears, reappearing at the end of your turn 1d4 + 1 rounds later. The creature reappears in the space it previously occupied, or the nearest unoccupied space. On a success, the creature takes half as much damage and their speed is halved until the end of their next turn.`,
  },

  // Maverick

  "Raw Power": {
    name: "Raw Power",
    description: `Your raw mental power hits your enemies harder. You can add your Intelligence modifier to one damage roll of any 1st-order power you manifest.`,
  },
  "Reduce Stress": {
    name: "Reduce Stress",
    description: `You have trained your mind to take on less stress. When you gain strain as a result of manifesting a power, you can halve the strain you gain, to a minimum 1 strain. Once you use this feature, you can't use it again until you finish a short or long rest.`,
  },
  "Energy Unleashed": {
    name: "Energy Unleashed",
    description: `When your powers tax you, you release some of that debilitating energy out into the world. Whenever you gain strain, you can choose a creature you can see within 60 feet of you. That creature must succeed on a Wisdom saving throw against your talent power save DC or take 1d6 psychic damage for each strain you gain.`,
  },
  "Shock Absorbtion": {
    name: "Shock Absorbtion",
    description: `By making use of your psychic energy, you shield yourself from harm. Whenever you take damage, you can use your reaction to gain 1 strain and halve the damage.`,
  },
  "Full Force": {
    name: "Full Force",
    description: `With intense focus, you pour all your might into a manifested power. When you deal damage with a power, you can deal maximum damage instead of rolling damage dice. Once you use this feature, you can’t use it again until you finish a short or long rest.`,
  },

  // Metamorph

  "Metamorphosis Adept": {
    name: "Metamorphosis Adept",
    description: `When you roll a manifestation die to learn a new metamorphosis power, you can roll the die twice and use either roll.

    In addition, after you make a manifestation test to manifest a metamorphosis power, you can reroll the manifestation die and use either roll. You can reroll a number of manifestation tests equal to your Intelligence modifier (minimum one test), regaining all uses when you finish a long rest. You can use this feature only once for a single manifestation test.`,
  },
  "Psionic Toughness": {
    name: "Psionic Toughness",
    description: `Your touch enhances a creature's toughness. As an action, you touch one creature (which can be yourself) and confer the following benefits to them for 1 hour:

    • The creature's hit point maximum and current hit points increase by a number equal to your Intelligence modifier + your talent level (minimum 1).

    • The creature has advantage on death saving throws.

    You can use this feature a number of times equal to your Intelligence modifier (minimum once), regaining all uses when you finish a long rest.`,
  },
  "Mind Surgeon": {
    name: "Mind Surgeon",
    description: `By force of will alone, you close a creature's wounds or cure what ails them. As an action, you touch one creature (which can be yourself) and gain strain up to your proficiency bonus. For each strain you gain this way, the target regains 1d10 hit points, or you cure the target of one disease or neutralize one poison affecting them.`,
  },
  "Super Senses": {
    name: "Super Senses",
    description: `The psionic power flowing through your body heightens your senses. You add a bonus equal to your Intelligence modifier to Wisdom (Perception) checks and to your passive Wisdom (Perception) score.`,
  },
  "Death Foiled": {
    name: "Death Foiled",
    description: `By expending psionic energy, you return a dead creature to life. After spending 1 hour concentrating on and touching the remains of a creature that died within the last 8 hours, you gain 8 strain, and the creature returns to life with 1 hit point. Any poisons or diseases that affected the creature when they died are neutralized or cured when they return to life. This power closes all mortal wounds and restores any missing body parts.

    Additionally, if you die and can gain 8 strain without surpassing your strain maximum, you gain 8 strain and your remains reform 1 hour after your death. When your remains reform, you return to life as above.

    You can use this feature to return a creature to life (including yourself) once, regaining the ability to do so when you finish a long rest.`,
  },
  "Psionic Evolution": {
    name: "Psionic Evolution",
    description: `Any creature that benefits from your Psionic Toughness feature gains the following additional benefits for 1 hour:

    • The creature is immune to disease, poison damage, and the poisoned condition.

    • The creature's speed increases by 10 feet.

    • Once on each of the creature's turns when they deal damage to a target with an attack, power, or spell, they can deal extra psychic damage to the target equal to your Intelligence modifier (minimum 1 damage).`,
  },

  // Pyrokinetic

  "Pyrokinetic Adept": {
    name: "Pyrokinetic Adept",
    description: `When you roll a manifestation die to learn a new pyrokinesis power, you can roll the die twice and use either roll.

    In addition, after you make a manifestation test to manifest a pyrokinesis power, you can reroll the manifestation die and use either roll. You can reroll a number of manifestation tests equal to your Intelligence modifier (minimum one test), regaining all uses when you finish a long rest. You can use this feature only once for a single manifestation test.`,
  },
  "Flame On": {
    name: "Flame On",
    description: `As an action, you psionically create a ball of flame that appears on your body. The flame harms neither you nor your equipment, and sheds bright light in a 20-foot radius and dim light for an additional 20 feet. You can create only one flame at a time this way.

    As part of the action used to create the flame, or as an action if you created the flame previously, you can make a melee or ranged power attack with it. If you make a ranged attack, you can hurl the flame at a target up to 60 feet away from you. On a hit, the target takes fire damage equal to 1d6 + your Intelligence modifier (minimum +1). Any flammable object hit by the flame ignites if it isn't being worn or carried. The flame lasts until you make an attack with it or dismiss it (no action required). If you become incapacitated, the flame disappears.

    As you reach higher levels in this class, this feature allows you to create more than one flame. When you attack while holding multiple flames, you do so with all of them at once, making separate attack rolls for each flame and directing them at one target or several. You can create two flames at 5th level, three flames at 11th level, and four flames at 17th level.`,
  },
  "Bend Flame": {
    name: "Bend Flame",
    description: `A mastery of pyrokinesis allows you to change flame into raw energy and bend it to your will. Whenever you manifest a pyrokinesis power, you can pick one of the following options:

    • You can change any fire damage dealt by the power to force damage.

    • Choose a number of creatures affected by the power equal to the power's order. The chosen creatures automatically succeed on their saving throws against the power, and they take no damage if they would normally take half damage on a successful save.`,
  },
  "Heat Seeking": {
    name: "Heat Seeking",
    description: `Your psionic fires can seek and destroy your targets. Ranged attacks you make with the flames created by your Flame On feature have a range of 120 feet. All attacks you make with your Flame On feature ignore half cover and three-quarters cover.

    Additionally, the fire damage dealt by attacks made with your Flame On feature improves to 1d8 + your Intelligence modifier (minimum +1).`,
  },
  Immolate: {
    name: "Immolate",
    description: `Channeling your pyrokinesis powers lets you set your enemies ablaze. Once per turn when you deal fire damage to a creature with a pyrokinesis power or your Flame On feature, you can make the target catch fire for 1 minute. While on fire, a target takes fire damage equal to twice your proficiency bonus at the start of each of their turns. At the end of each of their turns, a target can make a Dexterity saving throw against your talent power save DC, extinguishing the fire on themself on a success.`,
  },

  // Resopath
  "Manipulate Terrain": {
    name: "Manipulate Terrain",
    description: `You can shape the terrain around you, making it disadvantageous for your enemies by creating grasping hands, sentient vines, or other hindrances. As a bonus action, choose a point on the ground you can see within 60 feet of you. A 20-foot-square area centered on that point becomes difficult terrain for creatures of your choice. The effect remains in the area for 1 minute, or until you use this feature again.

    Once the area is established, you can use a bonus action each round to move the area up to 20 feet, or to move one willing creature you can see within the area to any unoccupied space within the area.

    You can use this feature a number of times equal to your Intelligence modifier (minimum once), regaining all uses when you finish a long rest.`,
  },
  "Resopathy Adept": {
    name: "Resopathy Adept",
    description: `When you roll a manifestation die to learn a new resopathy power, you can roll the die twice and use either roll.
    
    In addition, after you make a manifestation test to manifest a resopathy power, you can reroll the manifestation die and use either roll. You can reroll a number of manifestation tests equal to your Intelligence modifier (minimum one test), regaining all uses when you finish a long rest. You can use this feature only once for a single manifestation test.`,
  },
  "Manifest Ally": {
    name: "Manifest Ally",
    description: `The power of your mind creates one or more living creatures that come to your aid. As a bonus action, you gain strain to create a soulless creature with the statistics of a Beast of your choice, whose challenge rating is no higher than your talent level divided by 3 (rounded down). The strain you gain equals the creature's challenge rating (minimum 1). The creature appears in an unoccupied space of your choice within 30 feet of you that you can see, and acts after you on your initiative count. The creature can understand any languages you speak and follows your commands to the best of their ability. If you don't issue any commands to the creature, they defend themself from hostile creatures but otherwise take no actions. Your manifested ally disappears if they are reduced to 0 hit points, if you die, if you use this feature again to create another ally, or after 10 minutes.`,
  },
  "Imagination Creation": {
    name: "Imagination Creation",
    description: `You make objects you need appear from nowhere. As an action, you create any Large or smaller mundane object, which appears in an unoccupied space within 5 feet of you, with you touching the object. You can use this feature to create a copy of any object you have touched, such as a key or a statue of a specific dragon. This feature can't be used to make functional spell components. The object you create disappears if you stop touching it for 5 minutes or until you use this feature again. You can use this feature a number of times equal to your Intelligence modifier (minimum once), regaining all uses when you finish a long rest.`,
  },
  "Nightmare Terrain": {
    name: "Nightmare Terrain",
    description: `Terrain you shape with your mind is capable of harming your enemies. At the start of each of your turns while your Manipulate Terrain feature is active, you can select up to three creatures you can see in the area affected by that feature and shape the ground around them into attacking weapons (no action required). Each creature must succeed on a Dexterity saving throw against your talent power save DC or take bludgeoning, piercing, or slashing damage (your choice) equal to your talent level.`,
  },

  // Telekinetic

  "Telekinesis Adept": {
    name: "Telekinesis Adept",
    description: `When you roll a manifestation die to learn a new telekinesis power, you can roll the die twice and use either roll.

    In addition, after you make a manifestation test to manifest a telekinesis power, you can reroll the manifestation die and use either roll. You can reroll a number of manifestation tests equal to your Intelligence modifier (minimum one test), regaining all uses when you finish a long rest. You can use this feature only once for a single manifestation test.`,
  },
  "Invisible Armor": {
    name: "Invisible Armor",
    description: `By altering the arc of incoming attacks, you ward yourself or your allies against those attacks. When you or a creature you can see within 30 feet of you is hit by an attack, you can use a reaction to give the target of the attack a bonus to AC. This bonus is equal to your Intelligence modifier (minimum 1), is effective against the triggering attack, and lasts until the start of your next turn. You can use this feature a number of times equal to your Intelligence modifier (minimum once), regaining all uses when you finish a long rest.`,
  },
  "Strong Mind": {
    name: "Strong Mind",
    description: `Whenever you manifest a power that allows you to move one or more creatures or objects, you can increase the distance the power allows you to move the targets by 10 feet.

    Additionally, when you make a Strength or Dexterity saving throw, you can gain 1 strain to make an Intelligence saving throw instead.`,
  },
  "Reflective Armor": {
    name: "Reflective Armor",
    description: `Enemies feel your power when their attacks are reflected back at them. When you use a reaction to activate Invisible Armor and the triggering attack misses, you can make a power attack roll against the creature that triggered the reaction. If your attack hits, the target is hit by the triggering attack and takes extra damage equal to your Intelligence modifier (minimum 1).`,
  },
  "Mind Wings": {
    name: "Mind Wings",
    description: `The might of your mind allows you to move yourself and your allies with ease. You gain a flying speed of 60 feet.

    In addition, as a bonus action, you can move a willing creature you can see within 60 feet of you up to 15 feet in any direction, including up. A creature moved up begins to fall as soon as that movement ends.`,
  },

  // Telepath

  "Telepathy Adept": {
    name: "Telepathy Adept",
    description: `When you roll a manifestation die to learn a new telepathy power, you can roll the die twice and use either roll.

    In addition, after you make a manifestation test to manifest a telepathy power, you can reroll the manifestation die and use either roll. You can reroll a number of manifestation tests equal to your Intelligence modifier (minimum one test), regaining all uses when you finish a long rest. You can use this feature only once for a single manifestation test.`,
  },
  "Greater Telepathy": {
    name: "Greater Telepathy",
    description: `You gain the ability to telepathically communicate at will. You can speak telepathically to any creature within 30 feet of you, which understands you whether or not the two of you share a common language. You can communicate even with creatures that have a low Intelligence or that understand no languages, and can speak telepathically in this way to one creature at a time.

    Additionally, as an action, you can forge a telepathic link with other willing creatures of your choice within 30 feet of you, up to a total number of creatures equal to your Intelligence modifier. This link lasts for 1 hour. You and any of the targets can communicate telepathically with each other through the bond, whether or not you share a common language. Once this telepathic link is established, communication is possible over any distance, though it can't extend to other planes of existence. If you are incapacitated or die, the telepathic link ends.

    You can use this feature a number of times equal to your Intelligence modifier (minimum once), regaining all uses when you finish a long rest. If you create a telepathic link with this feature while an existing link is already active, the first link ends.`,
  },
  "Emotional Intelligence": {
    name: "Emotional Intelligence",
    description: `Your awakened mind is acutely sensitive to the emotions of others. Whenever you make an ability check that makes use of the Deception, Insight, Intimidation, or Persuasion skills, you gain a bonus to the check equal to your Intelligence modifier (minimum +1).`,
  },
  "Not in the Face": {
    name: "Not in the Face",
    description: `Your foes develop an overwhelming sympathy for you thanks to your telepathy powers. When a creature fails a saving throw against a power you manifest, you can momentarily flood the creature with conflicting emotions that prevent them from attacking you until the start of your next turn. Creatures that can't be charmed are immune to this effect.`,
  },
  "Shared Connection": {
    name: "Shared Connection",
    description: `You can facilitate an incredible psychic connection between yourself and other creatures. When you forge a telepathic link with your Greater Telepathy feature, each linked creature gains the following benefits:

    • The creature can choose to hear, smell, and see what any other linked creature experiences.

    • Each creature can take the Help action as a bonus action to aid another linked creature.

    • A creature can use the Help action to grant advantage on another linked creature's attack roll even if the creature taking the Help action isn't within 5 feet of the target of the attack.`,
  },
  "Truth Hurts": {
    name: "Truth Hurts",
    description: `As you open up the minds of your enemies, you cause their secrets to spill forth. Whenever a creature fails a saving throw against a telepathy power you manifest, you can choose one of the following options:

    • You gain any amount of strain, then deal psychic damage to the creature equal to 2d8 for each strain you gain this way.

    • You gain 2 strain to telepathically ask the creature one question, which they answer telepathically, honestly, and fully to the best of their ability. A creature that can't be charmed is immune to this effect.`,
  },
};
