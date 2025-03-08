const user = {
    name: 'Aurora',
    species: 'cat',
    age: 2,
    friends: 4,
    owners: 1,
    projects: 11,
    houses: 5,
    getSum(obj) {
        let totalSum = 0;
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                totalSum += obj[key];
            }
        }
        return totalSum;
    },
    sortKeys(obj) {
        let sortedArray = [];
        for (let key in obj) {
            if (typeof obj[key] === 'number') {
                sortedArray.push(key);
            }
        }
        sortedArray.sort((a, b) => obj[b] - obj[a]);
        return sortedArray;
    }
};

console.log(user.getSum(user));
console.log(user.sortKeys(user));
