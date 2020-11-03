function ativeDesatived(cssTagId) {
  cssTagId.classList.toggle("ative");
  cssTagId.classList.toggle("desatived");
}
function alterDisplayInitical(
  aparece1,
  aparece2,
  esconde1,
  esconde2,
  apareceplayer
) {
  ativeDesatived(aparece1);
  ativeDesatived(aparece2);
  ativeDesatived(esconde1);
  ativeDesatived(esconde2);
}
function returnStatus(personTag, personStatus, skilCount) {
  personTag.innerHTML = "";
  personStatus.Name
    ? (personTag.innerHTML += `<li>Nome: ${personStatus.Name}</li>`)
    : false;
  personStatus.HP
    ? (personTag.innerHTML += `<li>Vida: ${personStatus.HP}</li>`)
    : false;
  personStatus.BLOCK
    ? (personTag.innerHTML += `<li>Bloqueio de Dano Recebido: ${Math.floor(
        personStatus.BLOCK * 100
      )}%</li>`)
    : false;
  personStatus.DMG
    ? (personTag.innerHTML += `<li>Dano: ${personStatus.DMG}</li>`)
    : false;
  personStatus.MANA
    ? (personTag.innerHTML += `<li>Mana/Energia: ${personStatus.MANA}</li>`)
    : false;
  if (personStatus.SKIL) {
    switch (skilCount) {
      case 0:
        personTag.innerHTML += `<li>Habilidades: ${personStatus.SKIL[0]}</li>`;
        break;
      case 1:
        personTag.innerHTML += `<li>Habilidades: ${personStatus.SKIL[0]}</li>
        <li>${personStatus.SKIL[1]}</li>`;
        break;
      case 2:
        personTag.innerHTML += `<li>Habilidades: ${personStatus.SKIL[0]}</li>
        <li>${personStatus.SKIL[1]}</li>
        <li>${personStatus.SKIL[2]}</li>`;
        break;
      case 3:
        personTag.innerHTML += `<li>Habilidades: ${personStatus.SKIL[0]}</li>
        <li>${personStatus.SKIL[1]}</li>
        <li>${personStatus.SKIL[2]}</li>
        <li>${personStatus.SKIL[3]}</li>`;
        break;
      default:
        personTag.innerHTML += `<li>Habilidades: ${personStatus.SKIL[0]}</li>`;
    }
  }
}
function luckAction() {
  const num = Math.round(Math.random() * 6 + countEnemy / 2);
  switch (num) {
    case 0:
      actionMessage.playerAtk = `Seu ataque falhou, ${currentlyEnemy.Name} desviou de seu ataque...`;
      actionMessage.playerDfs = `Parabéns, você conseguiu desviar com sucesso do ataque do ${currentlyEnemy.Name}!`;
      return 0;
      break;
    case 1:
      actionMessage.playerAtk = `Seu ataque acertou de raspão, ${currentlyEnemy.Name} levou pouco dano`;
      actionMessage.playerDfs = `Quase conseguiu desviar do ataque do ${currentlyEnemy.Name}, recebeu pouco dano`;
      return 0.2;
      break;
    case 2:
      actionMessage.playerAtk = `Treine mais o ataque para conseguir infligir mais dano!`;
      actionMessage.playerDfs = `Treine mais suas esquivas!`;
      return 0.4;
      break;
    case 3:
      actionMessage.playerAtk = `Vamos lá! Sua habilidade está quase maximizada!`;
      actionMessage.playerDfs = `Está faltando em seus treinos defensivos? O ${currentlyEnemy.Name} acertou onde não deveria...`;
      return 0.6;
      break;
    case 4:
      actionMessage.playerAtk = `Parabéns pelo grande dano! Suas habilidades estão cada vez melhores`;
      actionMessage.playerDfs = `Cuidado! O ataque do ${currentlyEnemy.Name} quase foi certeiro...`;
      return 0.8;
      break;
    case 5:
      actionMessage.playerAtk = `Maravilha! Seu ataque acertou totalmente o ${currentlyEnemy.Name}`;
      actionMessage.playerDfs = `Preste atenção no ${currentlyEnemy.Name}! Quase acertou um ponto vital!`;
      return 1;
      break;
    case 6:
      actionMessage.playerAtk = `Um ataque critico!!! O ${currentlyEnemy.Name} se distraiu e você acertou em cheio!`;
      actionMessage.playerDfs = `Socorro!!! Você caiu e o ataque do ${currentlyEnemy.Name} acertou um ponto vital`;
      return 2;
      break;
    default:
      actionMessage.playerAtk = `Uhuu o ${currentlyEnemy.Name} está sangrando!`;
      actionMessage.playerDfs =
        "O ataque foi fundo e agora você está sangrando!";
      return Number(Math.random().toFixed(1));
  }
}
function attackChoice(
  playerStatus,
  playerTag,
  enemyTag,
  enemyStatus,
  action,
  skillChoiced
) {
  if (action === "ataque") {
    damagePlayer = Math.round(
      playerStatus.DMG *
        playerStatus.acrescimoDeDano[skillChoiced] *
        luckAction()
    );
    enemyStatus.HP -= damagePlayer;
    if (enemyStatus.HP <= 0) {
      if (countEnemy === enemyList.length - 1) {
        window.alert(
          `Você utilizou ${playerStatus.SKIL[skillChoiced]}\n
              ${actionMessage.playerAtk}\n
              Causou ${damagePlayer} de dano\n
              --------------------------------------------\n
              O ${currentlyEnemy.Name} está morto\n
              E vida do ${currentlyEnemy.Name} foi reduzida em 0\n
              --------------------------------------------\n
              Encontre com a atendente da guilda para mais informações`
        );
        ativeDesatived(twoImage);
        ativeDesatived(gameEnd);
        for (let i = 0; i <= countSkil; i++) {
          ativeDesatived(listBottonSkil[i]);
        }
        ativeDesatived(escapeClick);
        background.style.backgroundImage = `url(${guildImage.src})`;
        tryAgainButton.innerHTML = "Jogar Novamente";
        tryAgainButton.classList.toggle("tryAgain");
        tryAgainButton.classList.toggle("beginBattle");
        tryAgainButton.classList.toggle("classButton");
        ativeDesatived(tryAgain);
        ativeDesatived(tryAgainButton);
        countEnemy = 0;
        countSkil = 0;
        countArmy = 0;
        informActionBattle = "";
        damageEnemy = 0;
        damageEnemyAcumulate = 0;
        damagePlayer = 0;
        manaEnergiAcumulate = 0;
        backgroundSound.pause();
      } else {
        ativeDesatived(twoImage);
        ativeDesatived(congratulation);
        for (let i = 0; i <= countSkil; i++) {
          ativeDesatived(listBottonSkil[i]);
        }
        ativeDesatived(escapeClick);
        ativeDesatived(continueBattle);
        ativeDesatived(newDefensive);
        ativeDesatived(newOfensive);
        ativeDesatived(newSkill);
        atualPlayerStatus.HP += damageEnemyAcumulate;
        atualPlayerStatus.MANA += manaEnergiAcumulate;
        window.alert(
          `Você utilizou ${playerStatus.SKIL[skillChoiced]}\n
        ${actionMessage.playerAtk}\n
        Causou ${damagePlayer} de dano\n
        --------------------------------------------\n
        O ${currentlyEnemy.Name} está morto\n
        E vida do ${currentlyEnemy.Name} foi reduzida em 0\n
        --------------------------------------------\n
        Você subiu de nível!!!\n
        Sua Vida e Mana/Energia serão restauradas!\n
        Vida, Dano e Mana/Energia aumentarão`
        );
        atualPlayerStatus.HP = Math.round(
          (atualPlayerStatus.HP *= countEnemy + 1.5)
        );
        atualPlayerStatus.DMG = Math.round(
          (atualPlayerStatus.DMG *= countEnemy + 1.15)
        );
        atualPlayerStatus.MANA = Math.round(
          (atualPlayerStatus.MANA *= countEnemy + 1.15)
        );
      }
    } else {
      for (let i = 0; i <= countSkil; i++) {
        ativeDesatived(listBottonSkil[i]);
      }
      ativeDesatived(attack);
      returnStatus(enemyTag, enemyStatus);
      playerStatus.MANA -= playerStatus.manaGasta[countSkil];
      manaEnergiAcumulate += playerStatus.manaGasta[countSkil];
      returnStatus(playerTag, playerStatus, countSkil);
      attack.innerText = "Defender"; //remover esta linha após configurar os botões
      window.alert(
        `Você utilizou ${playerStatus.SKIL[skillChoiced]}\n
        ${actionMessage.playerAtk}\n
        Causou ${damagePlayer} de dano\n
        --------------------------------------------\n
        A vida do ${currentlyEnemy.Name} reduziu para ${currentlyEnemy.HP}\n
        Sua Mana/Energia foi reduzida para ${playerStatus.MANA}`
      );
    }
    afterAction.innerText = `${actionMessage.playerAtk}`;
  }
  if (action === "defesa") {
    damageEnemy = Math.round(
      enemyStatus.DMG *
        (luckAction() >= 1 ? 0.5 : luckAction()) *
        (1 - playerStatus.BLOCK)
    );
    playerStatus.HP -= damageEnemy;
    damageEnemyAcumulate += damageEnemy;

    if (playerStatus.HP <= 0 || playerStatus.MANA < playerStatus.manaGasta[0]) {
      ativeDesatived(twoImage);
      ativeDesatived(attack);
      ativeDesatived(escapeClick);
      ativeDesatived(afterAction);
      background.style.backgroundImage = `url(${loseImage.src})`;
      ativeDesatived(gameOver);
      ativeDesatived(tryAgain);
      ativeDesatived(tryAgainButton);
      countEnemy = 0;
      countSkil = 0;
      countArmy = 0;
      informActionBattle = "";
      damageEnemy = 0;
      damageEnemyAcumulate = 0;
      damagePlayer = 0;
      manaEnergiAcumulate = 0;
      backgroundSound.pause();
      window.alert(
        `Recebeu ${damageEnemy} de dano\n
        --------------------------------------------\n
        E sua vida foi reduzida para 0`
      );
    } else {
      returnStatus(playerTag, playerStatus, countSkil);
      afterAction.innerText = `${actionMessage.playerDfs}`;
      for (let i = 0; i <= countSkil; i++) {
        ativeDesatived(listBottonSkil[i]);
      }
      ativeDesatived(attack);
      window.alert(
        `${actionMessage.playerDfs}\n
        Recebeu ${damageEnemy} de dano\n
        --------------------------------------------\n
        Sua vida foi reduzida para ${playerStatus.HP}`
      );
    }
  }
}

function buttonNewSkil(skilSlot) {
  listBottonSkil[skilSlot].innerHTML = `<h2>${
    atualPlayerStatus.SKIL[skilSlot]
  }</h2>Aumento de Dano: ${Math.round(
    atualPlayerStatus.acrescimoDeDano[skilSlot] * 100 - 100
  )}%<br/>Mana/Energia: ${atualPlayerStatus.manaGasta[skilSlot]}`;
}
