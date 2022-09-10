const ATTACK_VALUE = 10;
const HEAL_VALUE = 20;

const attack = 'ATTACK';
const strongAttack = 'STRONG_ATTACK';

let battleLog = [];

enteredValue = prompt('Max life', '100');
let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

let bonusLife = 2;

monHealth.innerHTML = Math.round(currentMonsterHealth);

Start();

function Start() {
  UpdateUI();
}

function endRound() {
  if (currentPlayerHealth <= 0) {
    setPlayerHealth(chosenMaxLife);
    bonusLife -= 1;
    resetGame();
  } else if (currentMonsterHealth <= 0) {
    alert('you won');
  }
  UpdateUI();
}

function resetGame() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
}

function dealDamage(mode) {
  console.log(mode);
  if (mode == 'ATTACK') {
    let damage = dealMonsterDamage(ATTACK_VALUE);
    let logMessage = 'player dmg: ' + damage;
    battleLog.push(logMessage);
    console.log(logMessage);
    currentMonsterHealth -= damage;
  } else if (mode == 'STRONG_ATTACK') {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
  }
  damage = dealPlayerDamage(ATTACK_VALUE);
  currentPlayerHealth -= damage;
  UpdateUI();
  endRound();
}

function normalAttackHandler() {
  dealDamage(attack);
}

function strongAttackHandler() {
  dealDamage(strongAttack);
}

function healHandler() {}

function UpdateUI() {
  bonusLifeEl.innerText = bonusLife;
  monHealth.innerHTML = Math.round(currentMonsterHealth);
}

function showLog() {
  console.log(battleLog);
}

attackBtn.addEventListener('click', normalAttackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler);
logBtn.addEventListener('click', showLog);
