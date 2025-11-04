function solution(bandage, health, attacks) {
  const [during, secHealing, addHealing] = bandage;

  let attackIndex = 0;
  const attackLastIndex = attacks.length - 1;

  let comboHealing = 0;
  const maxHealth = health;

  for (let time = 1; time <= attacks[attackLastIndex][0]; time++) {
    if (attacks[attackIndex][0] === time) {
      comboHealing = 0;
      const [_, damage] = attacks[attackIndex];

      health -= damage;
      attackIndex += 1;

      if (health <= 0) {
        return -1;
      }
      continue;
    }

    health += secHealing;
    comboHealing += 1;
    if (comboHealing === during) {
      health += addHealing;
      comboHealing = 0;
    }

    if (health >= maxHealth) {
      health = maxHealth;
    }
  }
  return health;
}
