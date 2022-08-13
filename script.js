'use strict'


function game(someNumber) {

    console.log(someNumber, "число в ф-ии game");

    function nestedGame() {

        someNumber;

        let guesNumber;

        if (guesNumber === undefined) {

            guesNumber = +prompt("Угадай число от 1 до 100");

        } else { guesNumber = +prompt("Введите новый вариант"); }


        if (guesNumber > someNumber) {

            alert("Загаданное число меньше");

            nestedGame();

        } else if (guesNumber < someNumber) {

            alert("Загаданное число больше");

            nestedGame();

        } else if (!isNaN(guesNumber)) {

            alert("введите число");

            nestedGame();

        } else if (guesNumber == null) {
            alert("Игра окончена");

        } else if (guesNumber === someNumber) {

            alert("Поздравляю, Вы угадали!!!");

        }
    }

    nestedGame();
}

game(10);