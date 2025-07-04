export const gunslingerFeatures = {
  "Fighting Style (Gunslinger)": {
    name: "Fighting Style (Gunslinger)",
    description: `You gain a Fighting Style feat of your choice. If you choose a feat, such as Great Weapon Fighting, that requires you to hold a Melee weapon in one or two hands, you can use that feat with Ranged weapons.

    Whenever you gain a Gunslinger level, you can replace the feat you chose with a different Fighting Style feat.`,
  },
  "Quick Draw": {
    name: "Quick Draw",
    description: `You're adept at drawing and firing before others have time to react, granting you the following benefits.

    Initiative. You have Advantage on Initiative rolls.

    Double Draw. You can draw or stow two weapons that lack the Two-Handed property when you would normally be able to draw or stow only one.`,
  },
  "Critical Shot": {
    name: "Critical Shot",
    description: `Your attack rolls with Ranged weapons can score a Critical Hit on a roll of 19 or 20 on the d20.

    At Gunslinger level 9, your attack rolls with Ranged weapons score a Critical Hit on a roll of 18-20. At Gunslinger level 17, they score a Critical Hit on a roll of 17-20.`,
  },
  Risk: {
    name: "Risk",
    description: `You can perform incredible feats of daring fueled by special dice called Risk Dice.

    Risk Dice. You have four Risk Dice, which are d8s. A Risk Die is expended when you use it. You regain all expended Risk Dice when you finish a Short or Long Rest. Your Risk Die changes and more Risk Dice become available as shown on the Risk Dice column of the Gunslinger Features table.

    Maneuvers. You can expend Risk Dice to perform maneuvers. Your maneuver options are detailed later in the class description.

    Saving Throws. If a maneuver requires a saving throw, the DC equals 8 plus your Dexterity modifier and Proficiency Bonus.`,
  },
  "Gut Shot": {
    name: "Gut Shot",
    description: `Whenever you score a Critical Hit against a Large or smaller creature with a ranged attack using a weapon, the projectile lodges itself in the target. For 1 minute or until the target replaces one of its attacks with dislodging the projectile, its Speed is halved and it has Disadvantage on attack rolls.`,
  },
  Overkill: {
    name: "Overkill",
    description: `When you deal damage with a Ranged weapon that doesn't add your ability modifier to the roll, you add your ability modifier nonetheless. If you already add your modifier to the damage roll, the target takes an extra 1d8 damage of the weapon's type.

    Note that weapons that have the Firearm property don't add your ability modifier to damage rolls.`,
  },
  "Cheat Death": {
    name: "Cheat Death",
    description: `When you are reduced to 0 Hit Points and not killed outright, you can drop to 1 Hit Point instead, and you regain a number of Hit Points equal to your Gunslinger level.

    Once you use this feature, you can't use it again until you finish a Short or Long Rest.`,
  },
  "Dire Gambit": {
    name: "Dire Gambit",
    description: `Whenever you roll Initiative or score a Critical Hit, you regain one expended Risk Die.`,
  },
  "Deft Maneuver": {
    name: "Deft Maneuver",
    description: `You gain a special additional Bonus Action that you can take once on each of your turns. You can take this special Bonus Action only to use a maneuver.`,
  },
  Headshot: {
    name: "Headshot",
    description: `When you score a Critical Hit against a creature using a Ranged weapon, you can choose for it to be a Headshot. If the creature has less than 100 Hit Points, it dies. Otherwise, it takes an extra 10d10 damage of the weapon's type.

    Once you use this feature, you can't use it again until you finish a Short or Long Rest. You can also restore your use of it by expending three Risk Dice (no action required).`,
  },

  // Gunslinger Subclasses

  // Deadeye
  "Eagle Eye Maneuver": {
    name: "Eagle Eye Maneuver",
    description: `Once per turn when you miss with a ranged attack roll, you can expend one Risk Die and add it to the attack roll, potentially causing the attack to hit.`,
  },
  "Sharpshooter's Stance": {
    name: "Sharpshooter's Stance",
    description: `You have trained to fire from a stable Prone position, granting the following conditions.

    Fire While Prone. You don't have Disadvantage on ranged attack rolls as a result of the Prone condition.

    Quick Stand. When you have the Prone condition, you can right yourself and thereby end the condition with only 5 feet of movement.`,
  },
  "Concealed Position": {
    name: "Concealed Position",
    description: `You excel at firing from concealment, granting you the following benefits.

    Camouflage. You can take the Hide action even if you aren't Heavily Obscured or behind Three-Quarters Cover or Total Cover, as long as you have the Prone condition. The Invisible condition of this Hide action ends if you don't have the Prone condition.

    Sniper's Nest. If you make an attack roll while hidden and the roll misses, making the attack roll doesn't reveal your location.`,
  },
  Reposition: {
    name: "Reposition",
    description: `Whenever a creature misses you with an attack roll, you can take a Reaction to end the Prone condition on yourself and move up to half your Speed.`,
  },
  "Focused Shot": {
    name: "Focused Shot",
    description: `When you take the Attack action, you can choose to make only one ranged attack roll using a weapon to make a Focused Shot. You have Advantage on this attack roll and, on a hit, score a Critical Hit.`,
  },

  // High Roller
  "Poker Face": {
    name: "Poker Face",
    description: `You gain proficiency with all Gaming Sets and in one of the following skills of your choice: Deception, Insight, or Perception.`,
  },
  "Liar's Dice Maneuver": {
    name: "Liar's Dice Maneuver",
    description: `When you make a damage roll with a Ranged weapon, you can expend one Risk Die as a Bonus Action and declare it to be a hidden roll. Roll the damage in secret and declare any total you wish. The GM has the option to call your bluff, in which case you reveal the damage dice you rolled. This has different consequences based on whether or not you lied.

    The GM Calls Your Bluff; You Lied. The damage you deal is halved.

    The GM Calls Your Bluff; You Told the Truth. The damage you deal is doubled.

    The GM Doesn't Call Your Bluff. Use the total damage you declared, even if you rolled a different total.`,
  },
  "Risky Business": {
    name: "Risky Business",
    description: `Once per turn when you make an attack roll against an enemy and the roll doesn't have Disadvantage, you can choose to make the roll with Disadvantage. When you do, you regain one expended Risk Die.`,
  },
  "Risk Taker": {
    name: "Risk Taker",
    description: `You can use your Maverick Spirit and Skin of Your Teeth maneuvers without expending a Risk Die. When you do so, roll a d6 instead of a Risk Die.
`,
  },
  "Double or Nothing": {
    name: "Double or Nothing",
    description: `When you score a Critical Hit using a Ranged weapon, you can gamble for a higher result. Roll a d20. If the roll is a 10 or higher, roll all of the attack's damage dice four times and add them together, instead of only two times as normal for a Critical Hit. If you roll a 9 or lower on the d20, the Critical Hit becomes a normal hit.`,
  },

  // Secret Agent
  "Operative Training": {
    name: "Operative Training",
    description: `Your covert training grants you the following benefits:

    Concealed Shot. You learn the Concealed Shot cantrip. Intelligence, Wisdom, or Charisma is your spellcasting ability for this cantrip (choose when you select this subclass).

    Operative Tools. You gain a Disguise Kit and Thieves' Tools, and you have proficiency with them.

    Skill Proficiencies. You gain proficiency in two of these skills of your choice: Deception, Investigation, Persuasion, Sleight of Hand, or Stealth.`,
  },
  "Parting Shot Maneuver": {
    name: "Parting Shot Maneuver",
    description: `When you take the Dash, Disengage, or Dodge action on your turn, you can expend one Risk Die to make a ranged attack using a weapon as a Bonus Action. Add the Risk Die to the damage roll on a hit.`,
  },
  Fieldcraft: {
    name: "Fieldcraft",
    description: `Your experience in the field grants you the following benefits.

    Quick Change. Using a Disguise Kit, you can create a Costume and don it as a Bonus Action.

    Slick Talker. Whenever you make a Charisma (Deception) or Charisma (Persuasion) check, you can treat a d20 roll of 9 or lower as a 10.`,
  },
  "Exit Strategy": {
    name: "Exit Strategy",
    description: `When you take damage, you can take a Reaction to evade further harm. You have the Invisible condition until the start of your next turn, and you can immediately move up to 10 feet.

    Once you use this feature, you can't use it again until you finish a Short or Long Rest. You can also restore your use of it by expending one Risk Die (no action required).
`,
  },
  "License to Kill": {
    name: "License to Kill",
    description: `Whenever you deal damage with a Ranged weapon, you can expend either one or two Risk Dice and add them to the damage roll. If you roll the highest number on a Risk Die, you can roll the die again and add it to the damage without expending it, rolling again if it is the highest number again, and so on. The maximum number of Risk Dice you can add to the damage equals your Proficiency Bonus.`,
  },

  // Spellshot

  "Spellcasting (Spellslinger)": {
    name: "Spellcasting (Spellslinger)",
    description: `You complement your bullets with the ability to cast spells.

    Cantrips. You know two cantrips of your choice from the Wizard spell list (see that class's section for its list). Fire Bolt and Message are recommended. Whenever you gain a Gunslinger level, you can replace one of these cantrips with another cantrip of your choice from the Wizard spell list.

    When you reach Gunslinger level 10, you learn another Wizard cantrip of your choice.

    Spell Slots. The Spellslinger Spellcasting table shows how many spell slots you have to cast your level 1+ spells. You regain all expended slots when you finish a Long Rest.

    Prepared Spells of Level 1+. You prepare the list of level 1+ spells that are available for you to cast with this feature. To start, choose three level 1 spells from the Wizard spell list. Chromatic Orb, Jump, and Shield are recommended.

    The number of spells on your list increases as you gain Gunslinger levels, as shown in the Prepared Spells column of the Spellslinger Spellcasting table. Whenever that number increases, choose additional spells from the Wizard spell list until the number of spells on your list matches the number on the table. The chosen spells must be of a level for which you have spell slots. For example, if you're a level 7 Gunslinger, your list of prepared spells can include five Wizard spells of levels 1 and 2 in any combination.

    Changing your Prepared Spells. Whenever you gain a Gunslinger level, you can replace one spell on your list with another Wizard spell for which you have spell slots.

    Spellcasting Ability. Intelligence is your spellcasting ability for your Wizard spells.

    Spellcasting Focus. You can use an Arcane Focus or a Ranged weapon as a Spellcasting Focus for your Wizard spells.`,
  },
  "Bang, You're Dead": {
    name: "Bang, You're Dead",
    description: `You can use magic in place of guns.

    Finger Guns. You learn the Finger Guns cantrip. See the New Spells section for details.

    Arcane Shot. When you hit a target with a Finger Guns attack, you can expend one Risk Die as a Bonus Action and add it to the damage roll.`,
  },
  Spellshot: {
    name: "Spellshot",
    description: `When you take the Attack action on your turn, you can replace one of the attacks with a casting of one of your Wizard cantrips that has a casting time of an action.`,
  },
  "Counter-Mage": {
    name: "Counter-Mage",
    description: `Your experience in combating spellcasters grants you the following benefits.

    Abjuration-Breaker. Whenever you make a ranged attack roll, you temporarily disrupt protective magic affecting the target. For the duration of the attack, the effects of spells targeting the creature, such as Mage Armor, as well as the properties and powers of magic items worn or carried by the creature, are suppressed and don't function. The target of the attack can't take a Reaction to cast spells such as Shield in response to the attack or damage.

    Antimagic Shot. When you score a Critical Hit and the target is affected by your Gut Shot feature, it also impedes the target's ability to cast spells. While the projectile is lodged in the target, it can't cast spells or take the Magic action. Additionally, the target has Disadvantage on Constitution saving throws it makes to maintain Concentration.

    Inured to Magic. When you fail a saving throw against a spell or magical effect, you can take a Reaction to roll 1d6 and add it to the roll, potentially turning the failure into a success.`,
  },
  "Magic Bullet Maneuver": {
    name: "Magic Bullet Maneuver",
    description: `When you make a spell attack roll, you can expend one Risk Die as a Bonus Action to substitute the spell attack with a ranged attack using a weapon. Add the Risk Die to the attack roll. On a hit, the attack deals the weapon's normal damage, in addition to the effects of the spell attack roll.`,
  },

  // Trick Shot

  "Creative Trajectory": {
    name: "Creative Trajectory",
    description: `You can make your projectiles travel in unexpected ways. Your ranged attacks with weapons ignore Half Cover and Three-Quarters Cover.`,
  },
  "Ricochet Maneuver": {
    name: "Ricochet Maneuver",
    description: `When you miss with a ranged attack using a weapon, you can take a Bonus Action and expend one Risk Die to reroll the attack and add the Risk Die to the roll. You must use the new roll.`,
  },
  "Fancy Gunplay": {
    name: "Fancy Gunplay",
    description: `Your flashy weapon tricks grant you the following benefits.

    Gun Spinning. Once per turn when you make a Charisma (Performance) check or a Dexterity (Sleight of Hand) check using one of your Ranged weapons, you can roll a Risk Die and add it to the ability check without expending it.

    Speed Loader. On your turn, you can reload a weapon with the Reload property without taking an action or Bonus Action.`,
  },
  "Deft Deflection Maneuver": {
    name: "Deft Deflection Maneuver",
    description: `You can shoot projectiles out of the air. When an ally within 30 feet of you is hit by an attack, you can take a Reaction and expend one Risk Die to grant that ally the benefit of the Skin of Your Teeth maneuver against that attack. You must be holding a Ranged weapon to use this maneuver.`,
  },
  "Pinball Shot": {
    name: "Pinball Shot",
    description: `Once on each of your turns when you hit a creature with a ranged attack using a weapon, you can deflect the projectile at additional targets. Choose a different target within 30 feet of the first and make an attack roll against it. On a hit, you can repeat this attack against a new target within 30 feet until you miss or make a total of five attacks. You can't target the same creature with more than one attack each time you use this feature.

    Once you use this feature, you can't use it again until you finish a Short or Long Rest. You can also restore your use of it by expending two Risk Dice (no action required).`,
  },

  // White Hat

  "Lay Down the Law Maneuver": {
    name: "Lay Down the Law Maneuver",
    description: `You can take a Bonus Action and expend one Risk Die to keep an eye out for dangers that threaten your companions. Choose an ally that you can see within 60 feet of you. That ally gains Temporary Hit Points equal to the number rolled on the Risk Die. Until the start of your next turn, if the ally is hit by an attack, you can take a Reaction to make a ranged attack using a weapon against the attacker.`,
  },
  "Steely-Eyed Aura": {
    name: "Steely-Eyed Aura",
    description: `An aura of stoic confidence radiates from you in a 10-foot Emanantion. You and allies within the Emanantion have Advantage on saving throws made to avoid or end the Frightened condition. The aura is inactive while you have the Incapacitated condition.`,
  },
  "Reach for the Skies": {
    name: "Reach for the Skies",
    description: `When you score a Critical Hit against a creature, you call for the target to surrender instead of lodging a projectile in it. The target must succeed on a Wisdom saving throw against your Maneuver save DC or have the Frightened and Incapacitated conditions for 1 minute. These conditions end early if the creature takes any damage, if you have the Incapacitated condition, or if you die. The creature can repeat the Wisdom saving throw at the end of each of its turns, ending the conditions on itself on a success.`,
  },
  "Long Arm of the Law": {
    name: "Long Arm of the Law",
    description: `Once per turn when you hit a Large or smaller creature with a ranged attack using a weapon, you can hobble the target. The creature can't move on its next turn unless it first takes the Disengage action.`,
  },
  "Gold Star Hero": {
    name: "Gold Star Hero",
    description: `Though gunslinging heroism, you gain the following benefits.

    Improved Aura. The range of your Steely-Eyed Aura feature increases to 30 feet.

    Iron-Clad Law. When you use your Lay Down the Law maneuver, the ally has Resistance to Bludgeoning, Piercing, and Slashing damage until the start of your next turn.

    Stunned Surrender. When a creature fails its saving throw against your Reach for the Skies feature, it has the Stunned condition instead of the Incapacitated condition.`,
  },
};
