window.onload = () => {
  "onload", backgroundSound.play();
};

mageChoice.addEventListener("click", () => {
  zeraContadores();
  alterDisplayInitical(twoImage, beginBattle, oneImage, choiceOne);
  goodChoice.innerHTML = `A <i>Maga</i> é um ótima escolha!`;
  returnStatus(playerSkil, mageCaracteristcs, countSkil);
  atualPlayerTag = playerSkil;
  atualPlayerStatus = mageCaracteristcs;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  backgroundSound.play();
});
warriorChoice.addEventListener("click", () => {
  zeraContadores();
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
  ativeBonus(infoBonusAtk);
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});
escapeClick.addEventListener("click", () => {
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
  }
  ativeDesatived(twoImage);
  ativeDesatived(attack);
  ativeDesatived(escapeClick);
  ativeDesatived(afterAction);
  ativeDesatived(tryAgain);
  ativeDesatived(tryAgainButton);
  ativeDesatived(attack);
  ativeBonus(infoBonusAtk);
  background.style.backgroundImage = `url(${quitImage.src})`;
  backgroundSound.pause();
  quitSound.play();
});

newDefensive.addEventListener("click", () => {
  bonus2x.style.backgroundColor = "#0a1017";
  bonus3x.style.backgroundColor = "#0a1017";
  bonus5x.style.backgroundColor = "#0a1017";
  bonus8x.style.backgroundColor = "#0a1017";
  atualPlayerStatus.BLOCK += 0.19;
  countArmy++;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  damageEnemyAcumulate = 0;
  manaEnergiAcumulate = 0;
  window.alert(
    `Você escolheu aumentar sua defesa!\n
    Agora você consegue bloquear os ataques em ${
      atualPlayerStatus.BLOCK * 100
    }%\n
    --------------------------------------------\n
    Como subiu de nivel, seu novos status é:\n
    Vida: ${atualPlayerStatus.HP}\n
    Dano: ${atualPlayerStatus.DMG}\n
    Mana/Energia: ${atualPlayerStatus.MANA}`
  );
  afterAction.innerText = "";
  returnStatus(atualPlayerTag, atualPlayerStatus, countSkil);
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
  ativeBonus(infoBonusAtk);
  countEnemy++;
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});
newOfensive.addEventListener("click", () => {
  bonus2x.style.backgroundColor = "#0a1017";
  bonus3x.style.backgroundColor = "#0a1017";
  bonus5x.style.backgroundColor = "#0a1017";
  bonus8x.style.backgroundColor = "#0a1017";
  atualPlayerStatus.DMG *= Math.round(1.75);
  countArmy++;
  playerImage.src = atualPlayerStatus.PlayerImage[countArmy];
  damageEnemyAcumulate = 0;
  manaEnergiAcumulate = 0;
  afterAction.innerText = "";
  returnStatus(atualPlayerTag, atualPlayerStatus, countSkil);
  window.alert(
    `Você escolheu aumentar seu ataque!\n
    Seu dano base atual (${Math.round(
      atualPlayerStatus.DMG / 1.75
    )}) aumentou em 75%\n
    --------------------------------------------\n
    Ao subir de nivel, seu novos status é:\n
    Vida: ${atualPlayerStatus.HP}\n
    Dano: ${atualPlayerStatus.DMG}\n
    Mana/Energia: ${atualPlayerStatus.MANA}`
  );
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
  ativeBonus(infoBonusAtk);
  countEnemy++;
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});
newSkill.addEventListener("click", () => {
  bonus2x.style.backgroundColor = "#0a1017";
  bonus3x.style.backgroundColor = "#0a1017";
  bonus5x.style.backgroundColor = "#0a1017";
  bonus8x.style.backgroundColor = "#0a1017";
  countSkil++;
  damageEnemyAcumulate = 0;
  manaEnergiAcumulate = 0;
  afterAction.innerText = "";
  window.alert(
    `Você escolheu uma nova habilidade!\n
    Habilidade: ${atualPlayerStatus.SKIL[countSkil]}\n
    Aumento de Dano: ${Math.round(
      atualPlayerStatus.acrescimoDeDano[countSkil] * 100 - 100
    )}%\n
    Mana/Energia: ${atualPlayerStatus.manaGasta[countSkil]}
    --------------------------------------------\n
    Como subiu de nivel, seu novos status é:\n
    Vida: ${atualPlayerStatus.HP}\n
    Dano: ${atualPlayerStatus.DMG}\n
    Mana/Energia: ${atualPlayerStatus.MANA}`
  );
  returnStatus(atualPlayerTag, atualPlayerStatus, countSkil);
  for (let i = 0; i <= countSkil; i++) {
    ativeDesatived(listBottonSkil[i]);
    buttonNewSkil(i);
  }
  ativeDesatived(congratulation);
  ativeDesatived(twoImage);
  ativeDesatived(continueBattle);
  ativeDesatived(escapeClick);
  ativeDesatived(newDefensive);
  ativeDesatived(newOfensive);
  ativeDesatived(newSkill);
  ativeBonus(infoBonusAtk);
  countEnemy++;
  currentlyEnemy = enemyList[countEnemy];
  currentlyEnemyTag = monsterStatus;
  returnStatus(currentlyEnemyTag, currentlyEnemy);
  backgroundSound.src = currentlyEnemy.MonsterSound;
  background.style.backgroundImage = `url(${currentlyEnemy.MonsterBackground})`;
  monsterImage.src = currentlyEnemy.MonsterImage;
  backgroundSound.play();
});

attack.addEventListener("click", () => {
  bonus2x.style.backgroundColor = "#0a1017";
  bonus3x.style.backgroundColor = "#0a1017";
  bonus5x.style.backgroundColor = "#0a1017";
  bonus8x.style.backgroundColor = "#0a1017";
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "defesa"
  );
});

skil1.addEventListener("click", () => {
  bonus30.style.backgroundColor = "#0a1017";
  bonus60.style.backgroundColor = "#0a1017";
  bonus80.style.backgroundColor = "#0a1017";
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
  bonus30.style.backgroundColor = "#0a1017";
  bonus60.style.backgroundColor = "#0a1017";
  bonus80.style.backgroundColor = "#0a1017";
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
  bonus30.style.backgroundColor = "#0a1017";
  bonus60.style.backgroundColor = "#0a1017";
  bonus80.style.backgroundColor = "#0a1017";
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
  bonus30.style.backgroundColor = "#0a1017";
  bonus60.style.backgroundColor = "#0a1017";
  bonus80.style.backgroundColor = "#0a1017";
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
  bonus30.style.backgroundColor = "#0a1017";
  bonus60.style.backgroundColor = "#0a1017";
  bonus80.style.backgroundColor = "#0a1017";
  attackChoice(
    atualPlayerStatus,
    atualPlayerTag,
    currentlyEnemyTag,
    currentlyEnemy,
    "ataque",
    4
  );
});

bonus30Ative = 0;
bonus60Ative = 0;
bonus80Ative = 0;

bonus2x.addEventListener("click", () => {
  if (bonus2xAtive === 0) {
    bonus2x.style.backgroundColor = "darkRed";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 2;
    bonusAtkCost = 2;
    bonus2xAtive = 1;
    bonus3xAtive = 0;
    bonus5xAtive = 0;
    bonus8xAtive = 0;
  } else {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 1;
    bonusAtkCost = 1;
    bonus2xAtive = 0;
    bonus3xAtive = 0;
    bonus5xAtive = 0;
    bonus8xAtive = 0;
  }
});
bonus3x.addEventListener("click", () => {
  if (bonus3xAtive === 0) {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "darkRed";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 3;
    bonusAtkCost = 3;
    bonus2xAtive = 0;
    bonus3xAtive = 1;
    bonus5xAtive = 0;
    bonus8xAtive = 0;
  } else {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 1;
    bonusAtkCost = 1;
    bonus2xAtive = 0;
    bonus3xAtive = 0;
    bonus5xAtive = 0;
    bonus8xAtive = 0;
  }
});
bonus5x.addEventListener("click", () => {
  if (bonus5xAtive === 0) {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "darkRed";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 5;
    bonusAtkCost = 5;
    bonus2xAtive = 0;
    bonus3xAtive = 0;
    bonus5xAtive = 1;
    bonus8xAtive = 0;
  } else {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 1;
    bonusAtkCost = 1;
    bonus2xAtive = 0;
    bonus3xAtive = 0;
    bonus5xAtive = 0;
    bonus8xAtive = 0;
  }
});
bonus8x.addEventListener("click", () => {
  if (bonus8xAtive === 0) {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "darkRed";
    bonusAtk = 8;
    bonusAtkCost = 8;
    bonus2xAtive = 0;
    bonus3xAtive = 0;
    bonus5xAtive = 0;
    bonus8xAtive = 1;
  } else {
    bonus2x.style.backgroundColor = "#0a1017";
    bonus3x.style.backgroundColor = "#0a1017";
    bonus5x.style.backgroundColor = "#0a1017";
    bonus8x.style.backgroundColor = "#0a1017";
    bonusAtk = 1;
    bonusAtkCost = 1;
    bonus2xAtive = 0;
    bonus3xAtive = 0;
    bonus5xAtive = 0;
    bonus8xAtive = 0;
  }
});

bonus30.addEventListener("click", () => {
  if (bonus30Ative === 0) {
    bonus30.style.backgroundColor = "darkRed";
    bonus60.style.backgroundColor = "#0a1017";
    bonus80.style.backgroundColor = "#0a1017";
    bonusDef = 0.7; //bloqueia 30% do dano
    bonusDefCost = 0.85; //consome 15% da mana
    bonus30Ative = 1;
    bonus60Ative = 0;
    bonus80Ative = 0;
  } else {
    bonus30.style.backgroundColor = "#0a1017";
    bonus60.style.backgroundColor = "#0a1017";
    bonus80.style.backgroundColor = "#0a1017";
    bonusDef = 1;
    bonusDefCost = 1;
    bonus30Ative = 0;
    bonus60Ative = 0;
    bonus80Ative = 0;
  }
});
bonus60.addEventListener("click", () => {
  if (bonus60Ative === 0) {
    bonus30.style.backgroundColor = "#0a1017";
    bonus60.style.backgroundColor = "darkRed";
    bonus80.style.backgroundColor = "#0a1017";
    bonusDef = 0.4; //bloqueia 60% do dano
    bonusDefCost = 0.7; //consome 30% da mana
    bonus30Ative = 0;
    bonus60Ative = 1;
    bonus80Ative = 0;
  } else {
    bonus30.style.backgroundColor = "#0a1017";
    bonus60.style.backgroundColor = "#0a1017";
    bonus80.style.backgroundColor = "#0a1017";
    bonusDef = 1;
    bonusDefCost = 1;
    bonus30Ative = 0;
    bonus60Ative = 0;
    bonus80Ative = 0;
  }
});
bonus80.addEventListener("click", () => {
  if (bonus80Ative === 0) {
    bonus30.style.backgroundColor = "#0a1017";
    bonus60.style.backgroundColor = "#0a1017";
    bonus80.style.backgroundColor = "darkRed";
    bonusDef = 0.2; //bloqueia 80% do dano
    bonusDefCost = 0.6; //consome 40% da mana
    bonus30Ative = 0;
    bonus60Ative = 0;
    bonus80Ative = 1;
  } else {
    bonus30.style.backgroundColor = "#0a1017";
    bonus60.style.backgroundColor = "#0a1017";
    bonus80.style.backgroundColor = "#0a1017";
    bonusDef = 1;
    bonusDefCost = 1;
    bonus30Ative = 0;
    bonus60Ative = 0;
    bonus80Ative = 0;
  }
});
