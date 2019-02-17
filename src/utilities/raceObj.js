const raceObj = {
  dwarf: {
    raceModActive: false,
    mods: {
      constitution: '2',
      wisdom: '2',
      charisma: '-2',
    },
    size: 'medium',
  },
  elf: {
    raceModActive: false,
    mods: {
      dexterity: '2',
      constitution: '-2',
      intelligence: '2',
    },
    size: 'medium',
  },
  gnome: {
    raceModActive: false,
    mods: {
      strength: '-2',
      constitution: '2',
      charisma: '2',
    },
    size: 'small',
  },
  'half-elf': {
    raceModActive: true,
    size: 'medium',
  },
  'half-orc': {
    raceModActive: true,
    size: 'medium',
  },
  halfling: {
    raceModActive: false,
    mods: {
      strength: '-2',
      dexterity: '2',
      charisma: '2',
    },
    size: 'small',
  },
  human: {
    raceModActive: true,
    size: 'medium',
  },
  other: {
    raceModActive: true,
    size: 'medium',
  },
}

export default raceObj
