function checkPalindrome(str) {

    // find the length of a string
    const len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input

// call the function
var first = "alla";
var second = "brrrr";

const value = checkPalindrome(first);
const value2 = checkPalindrome(second);

console.log(first + " " + value);
console.log(second + " " + value2);