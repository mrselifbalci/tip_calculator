
// John and his family went on a holiday and went to 4 different restaurants. The bills were $124, $48, $75 and $268. John paid the bills cash and he has $750 budget in his wallet.

// To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip;
// 20% of the bill when the bill is less than $50,
// 15% when the bill is between $50 and $200,
// 10% if the bill is more than $200.


let budget = 750;
let billOne = 124;
let billTwo = 78;
let billThree = 175;
let billFour = 268;
let totalBills = billOne + billTwo + billThree + billFour;
let tip;
function calculateTips(bill) {
  if (bill < 50) {
    return (tip = Math.floor(bill * 0.2));
  } else if (bill >= 50 && bill <= 200) {
    return (tip = Math.floor(bill * 0.15));
  } else if (bill > 200) {
    return (tip = Math.floor(bill * 0.1));
  }
}

function getTotalTips() {
  return (
    calculateTips(billOne) +
    calculateTips(billTwo) +
    calculateTips(billThree) +
    calculateTips(billFour)
  );
}

function bugdetDust() {
  return budget - getTotalTips() - totalBills;
}
let remaining = bugdetDust();

if (remaining === 0) {
  alert(`You have run out of money John!!! You will have to walk home.`);
} else if (remaining < 0) {
  alert(
    `Wow!That is more than your total budget. Did you borrow money from a friend?`
  );
} else if (remaining <= budget * 0.2) {
  alert(
    `Slow down John. You have already spent more than %80 of your budget.You have only ${bugdetDust()}$ left in your wallet.`
  );
} else {
  alert(`You still have ${remaining}$ in your wallet John. Keep on eating!`);
}
