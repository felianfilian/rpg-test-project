const ATTACK_VALUE = 10;
const HEAL_VALUE = 20;

const attack = 'ATTACK';
const strongAttack = 'STRONG_ATTACK';

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
  if (mode == 'ATTACK') {
    let damage = dealMonsterDamage(ATTACK_VALUE);
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

function normalAttack() {
  dealDamage(attack);
}

function strongAttack() {
  dealDamage(strongAttack);
}

function healHandler() {}

function UpdateUI() {
  bonusLifeEl.innerText = bonusLife;
  monHealth.innerHTML = Math.round(currentMonsterHealth);
}

attackBtn.addEventListener('click', normalAttack);
strongAttackBtn.addEventListener('click', strongAttack);
healBtn.addEventListener('click', healHandler);
