let mageCaracteristcs = {
  HP: 120,
  BLOCK: 0,
  DMG: 320,
  MANA: 130,
  SKIL: ["Bola de Fogo", "Labareda", "Meteoro"],
  acrescimoDeDano: [1.3, 1.98, 4.1],
  manaGasta: [35, 58, 122],
  PlayerImage: [mageImage1.src, mageImage2.src, mageImage3.src],
};
let warriorCaracteristcs = {
  HP: 320,
  BLOCK: 0,
  DMG: 210,
  MANA: 60,
  SKIL: ["Corte Diagonal", "Estocada", "Dilaceração"],
  acrescimoDeDano: [1.15, 1.6, 2.3],
  manaGasta: [6, 10, 21],
  PlayerImage: [warriorImage1.src, warriorImage2.src, warriorImage3.src],
};



const playerList = [mageCaracteristcs, warriorCaracteristcs];

let goblinCaracteristcs = {
  Name: "Goblin",
  HP: 180,
  DMG: 65,
  MonsterBackground: backgroundFlorest.src,
  MonsterSound: "./sounds/jungle.mp3",
  MonsterImage: goblinImage.src,
};
let minotaurCaracteristcs = {
  Name: "Minotauro",
  HP: 950,
  DMG: 85,
  MonsterBackground: backgroundPrison.src,
  MonsterSound: "./sounds/monastery.mp3",
  MonsterImage: minotaurImage.src,
};
let iceWolfCaracteristcs = {
  Name: "Lobo de Gelo",
  HP: 2310,
  DMG: 145,
  MonsterBackground: backgroundIce.src,
  MonsterSound: "./sounds/icecaves.mp3",
  MonsterImage: iceWolfImage.src,
};

const enemyList = [
  goblinCaracteristcs,
  minotaurCaracteristcs,
  iceWolfCaracteristcs,
];
