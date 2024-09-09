/**
 * chair --> 3 CFT(Cubit Feet)
 * table --> 10 CFT(Cubit Feet)
 * bed --> 50 CFT(Cubit Feet)
 *
 */

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairTotalWood = chairQuantity * perChairWood;
  const tableTotalWood = tableQuantity * perTableWood;
  const bedTotalWood = bedQuantity * perBedWood;

  const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
  return totalWood;
}

const wood = woodQuantity(6, 1, 0);
console.log(wood);
