const ATTACK_VALUE = 10;
const HEAL_VALUE = 20;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;

monHealth.innerHTML = Math.round(currentMonsterHealth);

function dealDamage() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  monHealth.innerHTML = Math.round(currentMonsterHealth);
}

function dealStrongDamage() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  monHealth.innerHTML = Math.round(currentMonsterHealth);
}

attackBtn.addEventListener('click', dealDamage);
strongAttackBtn.addEventListener('click', dealStrongDamage);
healBtn.addEventListener('click', dealStrongDamage);
