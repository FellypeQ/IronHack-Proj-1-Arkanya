
window.onload = () => {
  "onload", backgroundSound.play();
};
mageChoice.addEventListener("click", () => {
  alterDisplayInitical(
    twoImage, 
    beginBattle, 
    oneImage, 
    choiceOne, 
    mageImage);
  goodChoice.innerHTML = `A <i>Maga</i> é um ótima escolha!`;
  returnStatus(mageSkil, mageCaracteristcs);
  atualPlayerTag = mageSkil;
  atualPlayerStatus = mageCaracteristcs;
  backgroundSound.play();
});
warriorChoice.addEventListener("click", () => {
  alterDisplayInitical(
    twoImage,
    beginBattle,
    oneImage,
    choiceOne,
    warriorImage
  );
  goodChoice.innerHTML = `O <i>Guerreiro</i> é um ótima escolha!`;
  returnStatus(warriorSkil, warriorCaracteristcs);
  atualPlayerTag = warriorSkil;
  atualPlayerStatus = warriorCaracteristcs;
  backgroundSound.play();
});
startBattleGame.addEventListener("click", () => {
  backgroundSound.src = "./sounds/jungle.mp3";
  background.style.backgroundImage = `url(${backgroundFlorest.src})`;
  monsterImage.src = goblinImage.src;
  ativeDesatived(beginBattle);
  ativeDesatived(choiceBattle);
  ativeDesatived(leftItem);
  ativeDesatived(monster);
  ativeDesatived(monsterStatus);
  ativeDesatived(afterAction);
  countEnemy += 1;
  returnStatus(monsterStatus, goblinCaracteristcs);
  currentlyEnemy = goblinCaracteristcs;
  currentlyEnemyTag = monsterStatus;
  backgroundSound.play();
});
escapeClick.addEventListener("click", () => {
  ativeDesatived(twoImage);
  ativeDesatived(attack);
  ativeDesatived(escapeClick);
  ativeDesatived(afterAction);
  background.style.backgroundImage = `url(${quitImage.src})`;
  backgroundSound.pause();
  quitSound.play();
});
attack.addEventListener("click", () => {
  if (attack.innerText === "Atacar") {
    attackChoice(
      atualPlayerStatus,
      atualPlayerTag,
      currentlyEnemyTag,
      currentlyEnemy,
      "ataque"
    );
  } else if (attack.innerText === "Defender") {
    attackChoice(
      atualPlayerStatus,
      atualPlayerTag,
      currentlyEnemyTag,
      currentlyEnemy,
      "defesa"
    );
  }
});
continueBattleGame1.addEventListener("click", () => {
  damageEnemyAcumulate = 0;
  afterAction.innerText = "";
  returnStatus(atualPlayerTag, atualPlayerStatus);
  backgroundSound.src = "./sounds/monastery.mp3";
  background.style.backgroundImage = `url(${backgroundPrison.src})`;
  monsterImage.src = minotaurImage.src;
  ativeDesatived(twoImage);
  ativeDesatived(congratulation);
  ativeDesatived(attack);
  ativeDesatived(escapeClick);
  ativeDesatived(continueBattle);
  ativeDesatived(continueBattleGame1);
  countEnemy += 1;
  currentlyEnemy = minotaurCaracteristcs;
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.play();
});
