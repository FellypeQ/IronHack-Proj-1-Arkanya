const background = document.getElementById("principal");
const gameOver = document.getElementById("gameOver");
const tryAgain = document.getElementById("tryAgain");

const oneImage = document.getElementById("oneImage");
const choiceOne = document.getElementById("choice1");
const goodChoice = document.getElementById("goodChoice");
const mageChoice = document.getElementById("mage");
const warriorChoice = document.getElementById("warrior");
const mageImage = document.getElementById("magician");
const warriorImage = document.getElementById("Barbariam");

const mageSkil = document.getElementById("magicianSkil");
const warriorSkil = document.getElementById("BarbariamSkil");

const twoImage = document.getElementById("twoImages");

const choiceBattle = document.getElementById("choiceBattle");
const attack = document.getElementById("attack");
const escapeClick = document.getElementById("escape");

const afterAction = document.getElementById("afterAction");
const actionsReturn = document.getElementById("actionsReturn");
const beginBattle = document.getElementById("beginBattle");
const startBattleGame = document.getElementById("startBattleGame");
const leftItem = document.getElementById("leftItem");
const monster = document.getElementById("monster");
const monsterStatus = document.getElementById("monsterStatus");
let monsterImage = document.getElementById("monsterImage");

const congratulation = document.getElementById("congratulation");
const continueBattle = document.getElementById("continueBattle");
const continueBattleGame1 = document.getElementById("continueBattleGame1");

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

/*Instância todos os sons utilizados*/
const backgroundSound = new Audio();
backgroundSound.src = "./sounds/tristram.mp3";
backgroundSound.volume = 0.2;
const quitSound = new Audio();
quitSound.src = "./sounds/angry-ghost.wav";

/*instância as imagens*/
const backgroundFlorest = new Image();
backgroundFlorest.src = "./images/floresta.jpg";
const quitImage = new Image();
quitImage.src = "./images/haha.jpg";
const loseImage = new Image();
loseImage.src = "./images/died.png";
const goblinImage = new Image();
goblinImage.src = "./images/goblin.jpg";
const backgroundPrison = new Image();
backgroundPrison.src = "./images/masmorra.jpg";
const minotaurImage = new Image();
minotaurImage.src = "./images/minotaur.jpg";
