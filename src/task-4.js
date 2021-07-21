let credits = 23580;
let pricePerDroid = 3000;
let number = Number(prompt("Сколько дроидов купить"));
let totalPrice = Number(pricePerDroid * number);
let balance;
if (number === null) {
  message = "Отменено пользователем!";
} else {
  if (totalPrice > credits) {
    alert("Недостаточно средств на счету!");
  } else {
    balance = credits - totalPrice;
    alert(
      "Вы купили " +
        number +
        " дроидов, на счету осталось " +
        balance +
        " кредитов"
    );
  }
}
