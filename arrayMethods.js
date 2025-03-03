const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Version 1 with splice

const mySliceVerOne = (arr, start, end) => {
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
                newArray.splice(start, arr.length - start);
                newArray.splice(0, arr.length - end);
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

const mySliceVerTwo = (arr, start, end) => {
    let newArray = [];
    if (Array.isArray(arr)) {
        if (start > 0 && end > 0) {
            for (let i = start; i < end; i++) {
                newArray.push(arr[i]);
            }
        } else if (start < 0 && end < 0) {
            start = start * -1;
            end = end * -1;
            for (let i = arr.length - start; i < arr.length - end; i++) {
                newArray.push(arr[i]);
            }
        } else if (start < 0 && end >= 0) {
            start = start * -1;
            for (let i = end - 1; i >= arr.length - start; i--) {
                newArray.push(arr[i]);
                newArray.reverse();
            }
        } else if (end < 0 && start >= 0) {
            end = end * -1;
            for (let i = start; i < arr.length - end; i++) {
                newArray.push(arr[i]);
            }
        }
        
    }
    return newArray;
};

console.log([...testArray].slice(0, -4));
console.log(mySliceVerOne(testArray, 0, -4));
console.log(mySliceVerTwo(testArray, 0, -4));

const myIndexOf = (arr, item, from) => {};

const myIncludes = (arr, item, from) => {};
