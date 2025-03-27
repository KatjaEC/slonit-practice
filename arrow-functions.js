const testArray = [1, 2, 3, 4, 10, 7, 13, 12, 60, 55, 9, 33, 75, 99, 201, 102];

const getEvenValues = (value) => {
   if (value % 2 === 0) {
      return value;
   }
}

const getOddValues = (value) => {
   if (value % 2 !== 0) {
      return value;
   }
};

const getValuesGreaterThanThirty = (value) => {
   if (value > 30) {
      return value;
   }
}

const getValuesLesserThanFive = (value) => {
   if (value < 5) {
      return value;
   }
}

const myFilter = (array, customFunction) => {
   let newArray = [];
   [...array].forEach((item) => {
      if (customFunction(item)) {
         newArray.push(customFunction(item));
      }
   })
   return newArray;
};

console.log(myFilter(testArray, getEvenValues));
console.log(myFilter(testArray, getOddValues));
console.log(myFilter(testArray, getValuesGreaterThanThirty));
console.log(myFilter(testArray, getValuesLesserThanFive));
