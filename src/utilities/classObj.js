const classObj = {
  cleric: {
    hd: 8,
    bab: 0.75,
    fort: 'good',
    ref: 'bad',
    will: 'good',
    skills: 2,
    classSkills: [
      'Appraise',
      'Craft',
      'Diplomacy',
      'Heal',
      'Kn: Arcana',
      'Kn: History',
      'Kn: Nobility',
      'Kn: Planes',
      'Kn: Religion',
      'Linguistics',
      'Profession',
      'Sense Motive',
      'Spellcraft',
    ],
  },
  bard: {
    hd: 8,
    bab: 0.75,
    fort: 'bad',
    ref: 'good',
    will: 'good',
    skills: 6,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Kn: Arcana',
      'Kn: Dungeoneering',
      'Kn: Engineering',
      'Kn: Geography',
      'Kn: History',
      'Kn: Local',
      'Kn: Nature',
      'Kn: Nobility',
      'Kn: Planes',
      'Kn: Religion',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Sleight of Hand',
      'Spellcraft',
      'Stealth',
      'Use Magic Device',
    ],
  },
  barbarian: {
    hd: 12,
    bab: 1,
    fort: 'good',
    ref: 'bad',
    will: 'bad',
    skills: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Kn: Nature',
      'Perception',
      'Ride',
      'Survival',
      'Swim',
    ],

  },
  fighter: {
    hd: 10,
    bab: 1,
    fort: 'good',
    ref: 'bad',
    will: 'bad',
    skills: 2,
    classSkills: [
      'Climb',
      'Craft',
      'Handle Animal',
      'Intimidate',
      'Kn: Dungeoneering',
      'Kn: Engineering',
      'Profession',
      'Ride',
      'Survival',
      'Swim',
    ],
  },
  druid: {
    hd: 8,
    bab: 0.75,
    fort: 'good',
    ref: 'bad',
    will: 'good',
    skills: 4,
    classSkills: [
      'Climb',
      'Craft',
      'Fly',
      'Handle Animal',
      'Heal',
      'Kn: Geography',
      'Kn: Nature',
      'Perception',
      'Profession',
      'Ride',
      'Spellcraft',
      'Survival',
      'Swim',
    ],
  },
  rogue: {
    hd: 8,
    bab: 0.75,
    fort: 'bad',
    ref: 'good',
    will: 'bad',
    skills: 8,
    classSkills: [
      'Acrobatics',
      'Appraise',
      'Bluff',
      'Climb',
      'Craft',
      'Diplomacy',
      'Disable Device',
      'Disguise',
      'Escape Artist',
      'Intimidate',
      'Kn: Dungeoneering',
      'Kn: Local',
      'Linguistics',
      'Perception',
      'Perform',
      'Profession',
      'Sense Motive',
      'Stealth',
      'Swim',
      'Use Magic Device',
    ],
  },
  monk: {
    hd: 8,
    bab: 0.75,
    fort: 'good',
    ref: 'good',
    will: 'good',
    skills: 4,
    classSkills: [
      'Acrobatics',
      'Climb',
      'Craft',
      'Escape Artist',
      'Intimidate',
      'Kn: History',
      'Kn: Religion',
      'Perception',
      'Perform',
      'Profession',
      'Ride',
      'Sense Motive',
      'Stealth',
      'Swim',
    ],
  },
  paladin: {
    hd: 10,
    bab: 1,
    fort: 'good',
    ref: 'bad',
    will: 'good',
    skills: 2,
    classSkills: [
      'Craft',
      'Diplomacy',
      'Handle Animal',
      'Heal',
      'Kn: Nobility',
      'Kn: Religion',
      'Profession',
      'Ride',
      'Sense Motive',
      'Spellcraft',
    ],
  },
  ranger: {
    hd: 10,
    bab: 1,
    fort: 'good',
    ref: 'good',
    will: 'bad',
    skills: 6,
    classSkills: [
      'Climb',
      'Craft',
      'Handle Animal',
      'Heal',
      'Intimidate',
      'Kn: Dungeoneering',
      'Kn: Geography',
      'Kn: Nature',
      'Perception',
      'Profession',
      'Ride',
      'Spellcraft',
      'Stealth',
      'Survival',
      'Swim',
    ],
  },
  sorcerer: {
    hd: 6,
    bab: 0.5,
    fort: 'bad',
    ref: 'bad',
    will: 'good',
    skills: 2,
    classSkills: [
      'Appraise',
      'Bluff',
      'Craft',
      'Kn: Arcana',
      'Profession',
      'Spellcraft',
      'Use Magic Device',
    ],
  },
  wizard: {
    hd: 6,
    bab: 0.5,
    fort: 'bad',
    ref: 'bad',
    will: 'good',
    skills: 2,
    classSkills: [
      'Appraise',
      'Craft',
      'Fly',
      'Kn: Arcana',
      'Kn: Dungeoneering',
      'Kn: Engineering',
      'Kn: Geography',
      'Kn: History',
      'Kn: Local',
      'Kn: Nature',
      'Kn: Nobility',
      'Kn: Planes',
      'Kn: Religion',
      'Linguistics',
      'Profession',
      'Spellcraft',
    ],
  },
}

export default classObj