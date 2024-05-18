// arrayManipulation.js

// Function to process the array of numbers
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number; // Square even numbers
        } else {
            return number * 3; // 
        }
    });
}

// Function to format array of strings based on the corresponding processed numbers
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); 
        } else {
            return str.toLowerCase(); 
        }
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};
