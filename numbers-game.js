// СУТЬ ИГРЫ

// Первый компьютер загадывает случайное число от 1 до 100.
// Второй компьютер пытается угадать число.
// >> Для угадывания второй компьютер использует стратегию бинарного поиска: 
// он начинает с середины возможного диапазона и уточняет диапазон в зависимости от подсказок 
// >>> "Больше" или "Меньше"
// Программа должна выводить шаги игры: попытки, диапазоны и результат.

const MIN_VALUE = 1;
const MAX_VALUE = 100;

const getRandomInteger = (a, b) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    const result = Math.random() * (upper - lower + 1) + lower;
    return Math.floor(result);
};

const getUniqueArray = (minVal, maxVal) => {
    const valuesArray = [];
    let filteredArray = [];
    while (filteredArray.length < maxVal) {
        valuesArray.push(getRandomInteger(minVal, maxVal));
        filteredArray = [...new Set(valuesArray)];
    }
    return filteredArray;
};

const getUniqueValue = (valuesArray) => {
    let randomIndex = Math.floor(Math.random() * valuesArray.length);
    let randomValue = valuesArray[randomIndex];
    return randomValue;
};

const initGame = (valueToGuess) => {
    const initialArray = getUniqueArray(MIN_VALUE, MAX_VALUE);
    initialArray.sort(function (a, b) {
        return a - b;
    });
    let initialValue = Math.round(initialArray.length/2);
    let randomValue = getUniqueValue(initialArray);
    let unusedValues = [...initialArray];
    unusedValues.splice(unusedValues.indexOf(initialValue), 1);
    console.log(`Компьютер 2: Пробую число ${initialValue}.`);
    if (initialValue > valueToGuess) {
        console.log('Компьютер 1: Меньше.');
        unusedValues.splice(initialValue - 1, initialValue);
    } else if (initialValue < valueToGuess) {
        console.log('Компьютер 1: Больше.');
        unusedValues.splice(0, initialValue - 1);
    } else {
        console.log('Компьютер 1: Угадал!');
    }
    while (randomValue !== valueToGuess) {
        let index = unusedValues.indexOf(randomValue);
        if (index !== -1) {
            unusedValues.splice(index, 1);
        }
        let newRandomValue = getUniqueValue(unusedValues);
        randomValue = newRandomValue;
        console.log(`Компьютер 2: Пробую число ${randomValue}.`);
        if (randomValue < valueToGuess) {
            console.log('Компьютер 1: Больше.');
        } else if (randomValue > valueToGuess) {
            console.log('Компьютер 1: Меньше.');
        } else {
            console.log('Компьютер 1: Угадал!');
            break;
        }
    }
    return console.log('Игра окончена.');
};

initGame(30);
