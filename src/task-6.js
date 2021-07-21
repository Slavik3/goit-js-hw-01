let number;
let total = 0;
do {
  number = prompt("введите число");
  total = total + Number(number);
} while (number !== null);
alert(`Общая сумма чисел равна  ${total}`);
