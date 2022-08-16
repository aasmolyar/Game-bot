'use strict'

function game(someNumber) {

    function showAlert(message, isCallGame = false) {

        alert(message);
        isCallGame && nestedGame();
    }

    let guesNumber;

    function nestedGame() {

        if (guesNumber === undefined) {

            guesNumber = prompt("Угадай число от 1 до 100");

        } else { guesNumber = prompt("Введите новый вариант"); }

        if (guesNumber === null) {
            showAlert("Игра окончена");
            return;
        }

        if (isNaN(guesNumber) || guesNumber.trim() === "") {

            showAlert("введите число", true);
        }

        guesNumber = +guesNumber;

        if (guesNumber > someNumber) {

            showAlert("Загаданное число меньше", true);

        } else if (guesNumber < someNumber) {

            showAlert("Загаданное число больше", true);

        } else {

            showAlert("Поздравляю, Вы угадали!!!");
        }
    }

    nestedGame();
}

game(15);