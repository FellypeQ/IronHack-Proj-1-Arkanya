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

/*instância as imagens*/
const mageImage1 = new Image();
mageImage1.src = "./images/maga-1.jpg";
const mageImage2 = new Image();
mageImage2.src = "./images/maga-2.jpg";
const mageImage3 = new Image();
mageImage3.src = "./images/maga-3.jpg";

const warriorImage1 = new Image();
warriorImage1.src = "./images/barbaro-1.jpg";
const warriorImage2 = new Image();
warriorImage2.src = "./images/barbaro-2.jpg";
const warriorImage3 = new Image();
warriorImage3.src = "./images/barbaro-3.jpg";

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
