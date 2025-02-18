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