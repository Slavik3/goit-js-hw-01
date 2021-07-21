let country = prompt("input country");
if (country !== null) {
  country = country.toLowerCase();
}
let cost;
switch (country) {
  case "китай":
    cost = 100;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "чили":
    cost = 500;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "австралия":
    cost = 170;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "индия":
    cost = 80;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case "ямайка":
    cost = 120;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна");
}
