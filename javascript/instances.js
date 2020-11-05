const background = document.getElementById("principal");
const gameOver = document.getElementById("gameOver");
const tryAgain = document.getElementById("tryAgain");
const tryAgainButton = document.getElementById("tryAgainButton");
const gameEnd = document.getElementById("gameEnd");

const oneImage = document.getElementById("oneImage");
const choiceOne = document.getElementById("choice1");
const mageChoice = document.getElementById("mage");
const warriorChoice = document.getElementById("warrior");

const twoImage = document.getElementById("twoImages");
const goodChoice = document.getElementById("goodChoice");
const playerSkil = document.getElementById("playerSkil");
let playerImage = document.getElementById("playerImage");

const leftItem = document.getElementById("leftItem");
const beginBattle = document.getElementById("beginBattle");
const startBattleGame = document.getElementById("startBattleGame");
const monster = document.getElementById("monster");
const monsterStatus = document.getElementById("monsterStatus");
let monsterImage = document.getElementById("monsterImage");

const afterAction = document.getElementById("afterAction");
const actionsReturn = document.getElementById("actionsReturn");
const choiceBattle = document.getElementById("choiceBattle");
const attack = document.getElementById("attack");
const escapeClick = document.getElementById("escape");
const skilButtons = document.getElementById("skilButtons");
const skil1 = document.getElementById("skil1");
const skil2 = document.getElementById("skil2");
const skil3 = document.getElementById("skil3");
const skil4 = document.getElementById("skil4");
const skil5 = document.getElementById("skil5");
const listBottonSkil = [skil1, skil2, skil3, skil4, skil5];

const bonusButton = document.getElementById("bonusButton");
const infoBonusAtk = document.getElementById("infoBonusAtk");
const bonus2x = document.getElementById("bonus2x");
const bonus3x = document.getElementById("bonus3x");
const bonus5x = document.getElementById("bonus5x");
const bonus8x = document.getElementById("bonus8x");
const bonus10x = document.getElementById("bonus10x");
const bonus15x = document.getElementById("bonus15x");
const listBonusAtk = [bonus2x, bonus3x, bonus5x, bonus8x, bonus10x, bonus15x];

const infoBonusDef = document.getElementById("infoBonusDef");
const bonus30 = document.getElementById("bonus30");
const bonus60 = document.getElementById("bonus60");
const bonus80 = document.getElementById("bonus80");

const congratulation = document.getElementById("congratulation");
const continueBattle = document.getElementById("continueBattle");
const newDefensive = document.getElementById("newDefensive");
const newOfensive = document.getElementById("newOfensive");
const newSkill = document.getElementById("newSkill");

let atualPlayerTag = "";
let atualPlayerStatus = "";
let currentlyEnemy = "";
let currentlyEnemyTag = "";
let actionMessage = {
  playerAtk: "",
  playerDfs: "",
};

let bonusAtk = 1;
let bonusAtkCost = 1;
let bonus2xAtive = 0;
let bonus3xAtive = 0;
let bonus5xAtive = 0;
let bonus8xAtive = 0;
let bonus10xAtive = 0;
let bonus15xAtive = 0;
let bonusDef = 1;
let bonusDefCost = 1;
let bonus30Ative = 0;
let bonus60Ative = 0;
let bonus80Ative = 0;

let informActionBattle = "";
let damageEnemy = 0;
let damageEnemyAcumulate = 0;
let damagePlayer = 0;
let manaEnergiAcumulate = 0;

let countEnemy = 0;
let countSkil = 0;
let countArmy = 0;

/*Instância todos os sons utilizados*/
const backgroundSound = new Audio();
backgroundSound.src = "./sounds/tristram.mp3";
backgroundSound.volume = 0.05;
const quitSound = new Audio();
quitSound.src = "./sounds/angry-ghost.wav";

const bolaDeFogo = new Audio();
bolaDeFogo.src = "./sounds/bola-de-fogo.wav";
const labareda = new Audio();
labareda.src = "./sounds/labareda.wav";
const raioInfernalSound = new Audio();
raioInfernalSound.src = "./sounds/raio-infernal.wav";
const tempestadeDeFogo = new Audio();
tempestadeDeFogo.src = "./sounds/tempestade-de-fogo.wav";
const meteoroSound = new Audio();
meteoroSound.src = "./sounds/meteoro.wav";
const mundoEmChamas = new Audio();
mundoEmChamas.src = "./sounds/mundo-em-chamas.mp3";

const corteDiagonalSound = new Audio();
corteDiagonalSound.src = "./sounds/corte-diagonal.mp3";
const estocada = new Audio();
estocada.src = "./sounds/estocada.wav";
const dilaceracao = new Audio();
dilaceracao.src = "./sounds/dilaceracao.wav";
const ataqueFrenetico = new Audio();
ataqueFrenetico.src = "./sounds/ataque-frenetico.wav";
const odioDoBerserker = new Audio();
odioDoBerserker.src = "./sounds/odio-do-berserker.wav";
const furiaIncontrolavel = new Audio();
furiaIncontrolavel.src = "./sounds/furia-incontrolavel.wav";

const goblinSound = new Audio();
goblinSound.src = "./sounds/goblin.wav";
const minotauroSound = new Audio();
minotauroSound.src = "./sounds/minotauro.wav";
const loboDeGeloSound = new Audio();
loboDeGeloSound.src = "./sounds/lobo-de-gelo.wav";
const salamandraDeserticaSound = new Audio();
salamandraDeserticaSound.src = "./sounds/salamandra-desertica.wav";
const rainhaAranhaSound = new Audio();
rainhaAranhaSound.src = "./sounds/rainha-aranha.wav";
const demonLordSound = new Audio();
demonLordSound.src = "./sounds/demon-lord-atack.wav";

/*instância as imagens*/
const mageImage1 = new Image();
mageImage1.src = "./images/maga-1.jpg";
const mageImage2 = new Image();
mageImage2.src = "./images/maga-2.jpg";
const mageImage3 = new Image();
mageImage3.src = "./images/maga-3.png";
const mageImage4 = new Image();
mageImage4.src = "./images/maga-4.jpg";
const mageImage5 = new Image();
mageImage5.src = "./images/maga-5.jpg";
const mageImage6 = new Image();
mageImage6.src = "./images/maga-6.jpg";

const warriorImage1 = new Image();
warriorImage1.src = "./images/barbaro-1.jpg";
const warriorImage2 = new Image();
warriorImage2.src = "./images/barbaro-2.jpg";
const warriorImage3 = new Image();
warriorImage3.src = "./images/barbaro-3.jpg";
const warriorImage4 = new Image();
warriorImage4.src = "./images/barbaro-4.png";
const warriorImage5 = new Image();
warriorImage5.src = "./images/barbaro-5.jpg";
const warriorImage6 = new Image();
warriorImage6.src = "./images/barbaro-6.png";

const guildImage = new Image();
guildImage.src = "./images/Guild.png";
const loseImage = new Image();
loseImage.src = "./images/died.png";
const quitImage = new Image();
quitImage.src = "./images/haha.jpg";

const backgroundFlorest = new Image();
backgroundFlorest.src = "./images/floresta.jpg";
const goblinImage = new Image();
goblinImage.src = "./images/goblin.jpg";
const backgroundPrison = new Image();
backgroundPrison.src = "./images/masmorra.jpg";
const minotaurImage = new Image();
minotaurImage.src = "./images/minotaur.jpg";
const backgroundIce = new Image();
backgroundIce.src = "./images/congelado.jpg";
const iceWolfImage = new Image();
iceWolfImage.src = "./images/iceWolf.png";
const backgroundDesert = new Image();
backgroundDesert.src = "./images/desert.jpg";
const salamandre = new Image();
salamandre.src = "./images/salamantra.jpg";
const backgroundSpiderCave = new Image();
backgroundSpiderCave.src = "./images/spider-cave.jpg";
const spiderQueeen = new Image();
spiderQueeen.src = "./images/spider-queen.jpg";
const backgroundInfern = new Image();
backgroundInfern.src = "./images/inferno.jpg";
const demonLord = new Image();
demonLord.src = "./images/demonLord.png";
