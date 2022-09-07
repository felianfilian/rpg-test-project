const ATTACK_VALUE = 10;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
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

function dealDamage() {
  let damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  damage = dealPlayerDamage(ATTACK_VALUE);
  currentPlayerHealth -= damage;
  UpdateUI();
  endRound();
}

function dealStrongDamage() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  UpdateUI();
}

function UpdateUI() {
  bonusLifeEl.innerText = bonusLife;
  monHealth.innerHTML = Math.round(currentMonsterHealth);
}

attackBtn.addEventListener('click', dealDamage);
strongAttackBtn.addEventListener('click', dealStrongDamage);
healBtn.addEventListener('click', dealStrongDamage);
