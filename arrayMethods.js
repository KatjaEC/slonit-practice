const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Version 1 with splice

const mySliceVer1 = (arr, start, end) => {
    let newArray = [...arr];
    if (Array.isArray(arr)) {
        if (start > 0 && end > 0) {
            newArray.splice(end, newArray.length);
            newArray.splice(0, start);
        } else if (start < 0 || end < 0) {
            newArray.reverse();
            if (start < 0 && end < 0) {
                start = start * -1;
                end = end * -1;
                newArray.splice(start, newArray.length - start);
                newArray.splice(0, end);
                newArray.reverse();
            } else if (start < 0 && end >= 0) {
                start = start * -1;
                newArray.splice(start, newArray.length - start);
                newArray.splice(0, end - newArray.length - 1);
                newArray.reverse();
            } else if (end < 0 && start >= 0) {
                end = end * -1;
                newArray.splice(0, end);
                newArray.splice(newArray.length - start, start);
                newArray.reverse();
            }
        }
    }
    return newArray;
};

// Version 2 with cycles

const mySliceVer2 = (arr, start, end) => {
    let newArray = [...arr];
    if (Array.isArray(arr)) {}
};

console.log([...testArray].slice(4, -2));
console.log(mySlice(testArray, 4, -2));

const myIndexOf = (arr, item, from) => {};

const myIncludes = (arr, item, from) => {};
