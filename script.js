'use strict'


function game(someNumber) {

    let guesNumber = +prompt("Угадай число от 1 до 100");

    function nestedGame() {

        console.log(someNumber, "число во влод ф-ии");

        if (guesNumber > someNumber) {

            alert("Загаданное число меньше");
            guesNumber = +prompt("Введите новый вариант");
            console.log(guesNumber, "Введенное число при больше");

            nestedGame();

        } else if (guesNumber < someNumber) {

            alert("Загаданное число больше");
            guesNumber = +prompt("Введите новый вариант");
            console.log(guesNumber, "Введенное число меньше");

            nestedGame();

        } else if (!isNaN(guesNumber)) {

            alert("введите число");
            guesNumber = +prompt("Введите новый вариант");
            console.log(guesNumber, "Введенное число при !isNan");

            nestedGame();

        } else if (guesNumber === null) {
            alert("Игра окончена");

        } else if (guesNumber === someNumber) {

            alert("Поздравляю, Вы угадали!!!");
            console.log("Поздравляю, Вы угадали!!!");
        }
    }

    nestedGame();
}

game(10);