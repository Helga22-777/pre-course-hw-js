let rule = "Еще не родился тот";
let rule2 =
  "Еще не родился тот человек, который, поставил бы цель, и не смог бы стать программистом.";
let rule3 = "Еще не родился тот челове";

switch (true) {
  case rule3.length === 25:
    console.log("50 на 50");
    break;
  case rule.length < 25:
    console.log("Все таки нет правил без исключения");
    break;
  case rule2.length > 25:
    console.log("У меня 100 пудов все получится");
    break;
  default:
    break;
}
