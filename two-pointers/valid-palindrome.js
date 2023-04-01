// const s = "A man, a plan, a canal: Panama"
// console.log(s)

const isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[^0-9a-z]/gi, '')
    let arr = Array.from(s)
    arr = arr.reverse()
    s = arr.join("")

    return s
    // console.log(s)
    // console.log(arr)
};

// isPalindrome(s)

module.exports = isPalindrome

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// PSEUDO

// convert to lowercase
    // .toLowerCase()

// remove non-alphanumeric chars (including spaces)
    // str.replace(/[^0-9a-z]/gi, '')

// convert into array (strings can't be reversed in-place)
    // Array.from()

// reverse array
    // .reverse

// turn back into string
    // .join()

// compare