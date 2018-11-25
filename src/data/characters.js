const images = require.context('./images', true, /\.png$/);

const characters = [
  {
    id: 1,
    name: 'Ant-Man',
    intro: 'When ex-criminal Scott Lang turned to his illicit skills in order \nto save his daughter\'s life, he unexpectedly became the size-shifting, insect-commanding Super Hero known as Ant-Man!',
    superpower: 'Size and Shape Alteration, Energy Blasts',
    src: images('./antman.png'),
  },
  {
    id: 2,
    name: 'Doctor Stange',
    intro: 'Once a highly successful, yet notably egotistical, surgeon, \nDoctor Stephen Strange endured a terrible accident that led him to evolve in ways he could have never foreseen.',
    superpower: 'Energy Manipulation, Teleportation, Chronokinesis',
    src: images('./drstrange.png'),
  },
  {
    id: 3,
    name: 'Hulk',
    intro: 'Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.',
    superpower: 'Healing Factor, Superhuman Durability, Superhuman Strength',
    src: images('./hulk.png'),
  },
  {
    id: 4,
    name: 'Groot',
    intro: 'This tree-like being branched out of his comfort zone to help the Guardians of the Galaxy keep the people of the universe safe.',
    superpower: 'Healing Factor, Superhuman Strength',
    src: images('./groot.png'),
  },
  {
    id: 5,
    name: 'Valkyrie',
    intro: 'Gifted the power of the legendary Asgardian Brunnhilde, Parrington assumed the mantle and the cosmic responsibilities of the Valkyrie.',
    superpower: 'Superhuman Strength, Superhuman Durability, Heightened Senses',
    src: images('./valkyrie.png'),
  },
  {
    id: 6,
    name: 'Corvus Glaive',
    intro: 'As one of the most direct and brutal members of Thanos’ Children, Corvus Glaive enjoys employing tricks and sneak attacks to quickly defeat his targets, using a powerful bladed weapon to do most of his dirty work.',
    superpower: 'Superhuman Endurance, Immortality, Superhuman Strength',
    src: images('./corvusglaive.png'),
  },
  {
    id: 7,
    name: 'Ebony Maw',
    intro: 'As a henchman of Thanos, Maw can manipulate anyone to bend to his – or Thanos\' – will. His powers have the ability to cause trouble for both sides of a battle.',
    superpower: 'Mind Control',
    src: images('./ebonymaw.png'),
  },
  {
    id: 8,
    name: 'Heimdall',
    intro: 'Heimdall is the guardian of the Bifrost Bridge, and as its gatekeeper, he controls access and travel between Asgard and the other nine realms. With his all-seeing eyes, Heimdall protects Asgard and all of its citizens.',
    superpower: 'Slowed Aging, Heightened Senses, Superhuman Strength, Superhuman Durability',
    src: images('./heimdall.png'),
  },
];

export default characters;
