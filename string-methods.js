let capitalLetterString = ' this string has to start with a capital letter. ';

let veryLongString = ' This is a long string; it has to be cut at a certain point, according to specified limits.';

let mainString = 'Aurora the cat'

let substring = 'rora';

const capitalizeFirstLetter = (str) => {
    str = str.trim();
    return `${str[0].toUpperCase()}${str.slice(1)}`;
};

console.log(capitalizeFirstLetter(capitalLetterString));

const shortenString = (str, maxLength) => {
    const placesToCut = [' ', '.', ',', '!', '?', ';', ':'];
    let shortenedString = '';
    str = str.trim();
    if (str.length > maxLength) {
        shortenedString += str.slice(0, maxLength).trim();
        let flag = false;
        for (let i = 0; i < placesToCut.length; i++) {
            if (shortenedString.at(-1).endsWith(placesToCut[i])) {
                flag = true;
            }
        }
        if (flag) {
            shortenedString = shortenedString.slice(0, shortenedString.length - 1) + '...';
        } else {
            let closestSpaceIndex = shortenedString.lastIndexOf(' ');
            shortenedString = shortenedString.slice(0, closestSpaceIndex) + '...';
        }
    }
    return shortenedString;
};

console.log(shortenString(veryLongString, 40));

const checkSubstring = (str1, str2) => {
    if (str1.includes(str2) || str2.includes(str1)) {
        return true;
    }
    return false;
};

console.log(checkSubstring(mainString, substring));
