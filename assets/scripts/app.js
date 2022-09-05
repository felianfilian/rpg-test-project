const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;

monHealth.innerHTML = Math.round(currentMonsterHealth);

function dealDamage() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  monHealth.innerHTML = Math.round(currentMonsterHealth);
}

attackBtn.addEventListener('click', dealDamage);
