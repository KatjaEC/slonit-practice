function calculate(calculatingFunction, valueA, valueB) {
   return calculatingFunction(valueA, valueB);
}

const getValuesSum = function (valueA, valueB) {
   return valueA + valueB;
};

const subtractValues = function (valueA, valueB) {
   return valueA - valueB;
};
const multiplyValues = function (valueA, valueB) {
   return valueA * valueB;
};
const divideValues = function (valueA, valueB) {
   return valueA / valueB;
};


const possibleOperations = {
   add: getValuesSum,
   subtract: subtractValues,
   multiply: multiplyValues,
   divide: divideValues,
};

const selectedOperation = 'add';

console.log(calculate(possibleOperations[selectedOperation], 10, 5));
