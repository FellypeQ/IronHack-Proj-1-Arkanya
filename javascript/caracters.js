let mageCaracteristcs = {
  HP: 120,
  BLOCK: 0,
  DMG: 320,
  MANA: 210,
  SKIL: [
    "Bola de Fogo",
    "Labareda",
    "Raio Infernal",
    "Tempestade de Fogo",
    "Meteoro",
  ],
  SkilSound: [
    bolaDeFogo,
    labareda,
    raioInfernalSound,
    tempestadeDeFogo,
    meteoroSound,
  ],
  acrescimoDeDano: [1.3, 3.98, 8.1, 11.4, 14.7],
  manaGasta: [35, 93, 383, 1263, 4167],
  PlayerImage: [
    mageImage1.src,
    mageImage2.src,
    mageImage3.src,
    mageImage4.src,
    mageImage5.src,
  ],
};
let warriorCaracteristcs = {
  HP: 320,
  BLOCK: 0,
  DMG: 210,
  MANA: 55,
  SKIL: [
    "Corte Diagonal",
    "Estocada",
    "Dilaceração",
    "Ataque Frenético",
    "Ódio do Berserker",
  ],
  SkilSound: [
    corteDiagonalSound,
    estocada,
    dilaceracao,
    ataqueFrenetico,
    odioDoBerserker,
  ],
  acrescimoDeDano: [1.15, 2.7, 5.2, 8.9, 12.6],
  manaGasta: [6, 9, 22, 81, 299],
  PlayerImage: [
    warriorImage1.src,
    warriorImage2.src,
    warriorImage3.src,
    warriorImage4.src,
    warriorImage5.src,
  ],
};

const playerList = [mageCaracteristcs, warriorCaracteristcs];

let goblinCaracteristcs = {
  Name: "Goblin",
  HP: 242,
  DMG: 65,
  MonsterBackground: backgroundFlorest.src,
  MonsterSound: "./sounds/jungle.mp3",
  MonsterImage: goblinImage.src,
  MonsterAtkSound: goblinSound,
};
let minotaurCaracteristcs = {
  Name: "Minotauro",
  HP: 440,
  DMG: 234,
  MonsterBackground: backgroundPrison.src,
  MonsterSound: "./sounds/monastery.mp3",
  MonsterImage: minotaurImage.src,
  MonsterAtkSound: minotauroSound,
};
let iceWolfCaracteristcs = {
  Name: "Lobo de Gelo",
  HP: 3696,
  DMG: 842,
  MonsterBackground: backgroundIce.src,
  MonsterSound: "./sounds/icecaves.mp3",
  MonsterImage: iceWolfImage.src,
  MonsterAtkSound: goblinSound,
};
let salamandrefCaracteristcs = {
  Name: "Salamandra desértica",
  HP: 84268,
  DMG: 3031,
  MonsterBackground: backgroundDesert.src,
  MonsterSound: "./sounds/desert.mp3",
  MonsterImage: salamandre.src,
  MonsterAtkSound: goblinSound,
};
let demonLordCaracteristcs = {
  Name: "Lorde Demônio",
  HP: 4381936,
  DMG: 10911,
  MonsterBackground: backgroundInfern.src,
  MonsterSound: "./sounds/leoric.mp3",
  MonsterImage: demonLord.src,
  MonsterAtkSound: demonLordSound,
};

const enemyList = [
  goblinCaracteristcs,
  minotaurCaracteristcs,
  iceWolfCaracteristcs,
  salamandrefCaracteristcs,
  demonLordCaracteristcs,
];

/*
Função para definir o HP do Monstro

function monsterHp(numMonster, hpAnterior) {
  const porcent = numMonster / 10;
  let currentyHp = 0;
  for (let i = 0; i <= numMonster; i++) {
    currentyHp += (hpAnterior * porcent * numMonster + hpAnterior) * numMonster;
  }
  console.log(currentyHp);
}

monsterHp(4, 84268);

------------------------------------------------------------------------------------
Função para definir o DMG do Monstro

function monsterDmg(numTotalMonster, dmgAnterior) {
  const porcent = numTotalMonster / 10;
  let currentyDmg = 0;
  for (let i = 0; i < numTotalMonster; i++) {
    currentyDmg += dmgAnterior * porcent;
  }
  console.log(currentyDmg);
}

monsterDmg(6, 3031);
*/
