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
  ativeDesatived(apareceplayer);
}
function returnStatus(personTag, personStatus) {
  personTag.innerHTML = "";
  personStatus.Name
    ? (personTag.innerHTML += `<li>Nome: ${personStatus.Name}</li>`)
    : false;
  personStatus.HP
    ? (personTag.innerHTML += `<li>Vida: ${personStatus.HP}</li>`)
    : false;
  personStatus.DMG
    ? (personTag.innerHTML += `<li>Dano: ${personStatus.DMG}</li>`)
    : false;
  personStatus.MANA
    ? (personTag.innerHTML += `<li>Mana/Energia: ${personStatus.MANA}</li>`)
    : false;
  personStatus.SKIL
    ? (personTag.innerHTML += `<li>Habilidade: ${personStatus.SKIL[0]}</li>`)
    : false;
  personStatus.acrescimoDeDano
    ? (personTag.innerHTML += `<li>Aumento de Dano: ${Math.floor(
        personStatus.acrescimoDeDano[0] * 100 - 100
      )}%</li>`)
    : false;
  personStatus.manaGasta
    ? (personTag.innerHTML += `<li>Custo de Mana/Energia: ${personStatus.manaGasta[0]}</li>`)
    : false;
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
function attackChoice(playerStatus, playerTag, enemyTag, enemyStatus, action) {
  if (action === "ataque") {
    damagePlayer = Math.round(
      playerStatus.DMG * playerStatus.acrescimoDeDano * luckAction()
    );
    enemyStatus.HP -= damagePlayer;
    if (enemyStatus.HP <= 0) {
      ativeDesatived(twoImage);
      ativeDesatived(congratulation);
      ativeDesatived(attack);
      ativeDesatived(escapeClick);
      ativeDesatived(continueBattle);
      ativeDesatived(continueBattleGame1);
      atualPlayerStatus.HP += damageEnemyAcumulate;
      atualPlayerStatus.MANA += manaEnergiAcumulate;
      window.alert(
        `${actionMessage.playerAtk}\n
          Você matou o ${currentlyEnemy.Name}\n
          Causou ${damagePlayer} de dano\n
          E vida do ${currentlyEnemy.Name} foi reduzida em 0\n
          Sua Vida e Mana/Energia foram restauradas!`
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
    } else {
      returnStatus(enemyTag, enemyStatus);
      playerStatus.MANA -= playerStatus.manaGasta;
      manaEnergiAcumulate += playerStatus.manaGasta;
      returnStatus(playerTag, playerStatus);
      attack.innerText = "Defender";
      window.alert(
        `${actionMessage.playerAtk}\n
          Causou ${damagePlayer} de dano\n
          A vida do ${currentlyEnemy.Name} reduziu para ${currentlyEnemy.HP}\n
          Sua Mana/Energia foi reduzida para ${playerStatus.MANA}`
      );
    }
    afterAction.innerText = `${actionMessage.playerAtk}`;
  }
  if (action === "defesa") {
    damageEnemy = Math.round(
      enemyStatus.DMG * (luckAction() > 4 ? 1 : luckAction())
    );
    playerStatus.HP -= damageEnemy;
    damageEnemyAcumulate += damageEnemy;
    console.log(damageEnemyAcumulate);

    if (playerStatus.HP <= 0 || playerStatus.MANA < playerStatus.manaGasta) {
      ativeDesatived(twoImage);
      ativeDesatived(attack);
      ativeDesatived(escapeClick);
      ativeDesatived(afterAction);
      background.style.backgroundImage = `url(${loseImage.src})`;
      ativeDesatived(gameOver);
      ativeDesatived(tryAgain);
      backgroundSound.pause();
      window.alert(
        `Recebeu ${damageEnemy} de dano\n
          E sua vida foi reduzida para 0`
      );
    } else {
      returnStatus(playerTag, playerStatus);
      afterAction.innerText = `${actionMessage.playerDfs}`;
      window.alert(
        `${actionMessage.playerDfs}\n
          Recebeu ${damageEnemy} de dano\n
          Sua vida foi reduzida para ${playerStatus.HP}`
      );
    }
    attack.innerText = "Atacar";
  }
}
