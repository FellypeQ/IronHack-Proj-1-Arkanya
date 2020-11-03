window.onload = () => {
  "onload", backgroundSound.play();
};
mageChoice.addEventListener("click", () => {
  alterDisplayInitical(twoImage, beginBattle, oneImage, choiceOne);
  goodChoice.innerHTML = `A <i>Maga</i> é um ótima escolha!`;
  returnStatus(playerSkil, mageCaracteristcs, countSkil);
  atualPlayerTag = playerSkil;
  atualPlayerStatus = mageCaracteristcs;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  backgroundSound.play();
});
warriorChoice.addEventListener("click", () => {
  alterDisplayInitical(twoImage, beginBattle, oneImage, choiceOne);
  goodChoice.innerHTML = `O <i>Guerreiro</i> é um ótima escolha!`;
  returnStatus(playerSkil, warriorCaracteristcs, countSkil);
  atualPlayerTag = playerSkil;
  atualPlayerStatus = warriorCaracteristcs;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  backgroundSound.play();
});
startBattleGame.addEventListener("click", () => {
  ativeDesatived(beginBattle);
  ativeDesatived(choiceBattle);
  ativeDesatived(leftItem);
  ativeDesatived(monster);
  //ativeDesatived(monsterStatus);
  ativeDesatived(afterAction);
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
  }
  buttonNewSkil(countSkil);
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});
escapeClick.addEventListener("click", () => {
  ativeDesatived(twoImage);
  ativeDesatived(attack);
  ativeDesatived(escapeClick);
  ativeDesatived(afterAction);
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
  }
  background.style.backgroundImage = `url(${quitImage.src})`;
  backgroundSound.pause();
  quitSound.play();
});

newDefensive.addEventListener("click", () => {
  atualPlayerStatus.BLOCK += 0.19;
  countArmy++;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  damageEnemyAcumulate = 0;
  manaEnergiAcumulate = 0;
  afterAction.innerText = "";
  returnStatus(atualPlayerTag, atualPlayerStatus, countSkil);
  countEnemy++;
  ativeDesatived(congratulation);
  ativeDesatived(twoImage);
  ativeDesatived(continueBattle);
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
    buttonNewSkil(i);
  }
  ativeDesatived(escapeClick);
  ativeDesatived(newDefensive);
  ativeDesatived(newOfensive);
  ativeDesatived(newSkill);
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});
newOfensive.addEventListener("click", () => {
  atualPlayerStatus.DMG *= Math.round(1.47);
  countArmy++;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  damageEnemyAcumulate = 0;
  manaEnergiAcumulate = 0;
  afterAction.innerText = "";
  returnStatus(atualPlayerTag, atualPlayerStatus, countSkil);
  countEnemy++;
  ativeDesatived(congratulation);
  ativeDesatived(twoImage);
  ativeDesatived(continueBattle);
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
    buttonNewSkil(i);
  }
  ativeDesatived(escapeClick);
  ativeDesatived(newDefensive);
  ativeDesatived(newOfensive);
  ativeDesatived(newSkill);
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});
newSkill.addEventListener("click", () => {
  countSkil++;
  damageEnemyAcumulate = 0;
  manaEnergiAcumulate = 0;
  afterAction.innerText = "";
  returnStatus(atualPlayerTag, atualPlayerStatus, countSkil);
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
    buttonNewSkil(i);
  }
  countEnemy++;
  ativeDesatived(congratulation);
  ativeDesatived(twoImage);
  ativeDesatived(continueBattle);
  ativeDesatived(escapeClick);
  ativeDesatived(newDefensive);
  ativeDesatived(newOfensive);
  ativeDesatived(newSkill);
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
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

skil1.addEventListener("click", () => {
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "ataque",
    0
  );
});
skil2.addEventListener("click", () => {
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "ataque",
    1
  );
});
skil3.addEventListener("click", () => {
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "ataque",
    2
  );
});
skil4.addEventListener("click", () => {
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "ataque",
    3
  );
});
skil5.addEventListener("click", () => {
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "ataque",
    4
  );
});
