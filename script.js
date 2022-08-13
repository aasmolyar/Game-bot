'use strict'


const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite());
}

function game(someNumber) {

    let guesNumber = +prompt("Угадай число от 1 до 100");

    function nestedGame() {

        someNumber--;

        console.log(someNumber, "число во влод ф-ии");

        if (guesNumber > someNumber) {

            alert("Загаданное число меньше");
            guesNumber = +prompt("Введите новый вариант");
            console.log(guesNumber, "Введенное число");

            nestedGame();

        } else if (guesNumber < someNumber) {

            alert("Загаданное число больше");
            guesNumber = +prompt("Введите новый вариант");
            console.log(guesNumber, "Введенное число");

            nestedGame();

        } else if (!isNaN(guesNumber)) {

            alert("введите число");
            guesNumber = +prompt("Введите новый вариант");
            console.log(guesNumber, "Введенное число");

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