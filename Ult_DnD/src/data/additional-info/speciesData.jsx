export const speciesData = {
  Aasimar: {
    size: ["Medium", "Small"],
    speed: 30,
    vision: {
      darkvision: 60,
    },
    resistances: ["Necrotic", "Radiant"],
    features: [
      {
        name: "Healing Hands",
        description: `As a Magic action, you touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains that many hit points.`,
        usage: "Once per Long Rest",
        actionType: "Magic Action",
        scaling: {
          basedOn: "Proficiency Bonus",
          dice: "d4",
        },
      },
      {
        name: "Light Bearer",
        description: `You know the Light cantrip.`,
        spell: "Light",
        sourceStat: "Charisma",
        type: "Innate Spellcasting",
      },
      {
        name: "Celestial Revelation",
        description: `At level 3, you can transform as a Bonus Action for 1 minute, choosing one of the following forms. Once used, can’t be used again until a Long Rest.`,
        levelRequirement: 3,
        actionType: "Bonus Action",
        duration: "1 minute",
        usage: "Once per Long Rest",
        transformations: [
          {
            name: "Heavenly Wings",
            effect: "Gain a fly speed equal to your walking speed.",
            damageBonus: {
              amount: "Proficiency Bonus",
              type: "Radiant",
              frequency: "Once per turn",
            },
          },
          {
            name: "Inner Radiance",
            light: {
              bright: 10,
              dim: 10,
            },
            endOfTurnEffect: {
              radius: 10,
              damage: {
                type: "Radiant",
                amount: "Proficiency Bonus",
              },
            },
          },
          {
            name: "Necrotic Shroud",
            frightenEffect: {
              radius: 10,
              saveDC: {
                base: 8,
                stat: "Charisma",
                proficiency: true,
              },
              condition: "Frightened",
              duration: "Until end of your next turn",
            },
            damageBonus: {
              amount: "Proficiency Bonus",
              type: "Necrotic",
              frequency: "Once per turn",
            },
          },
        ],
      },
    ],
  },
  Human: {
    size: ["Medium", "Small"],
    speed: 30,
  },
  Elf: {
    /* structured features here */
  },
  Dwarf: {
    /* structured features here */
  },
  // etc.
};
