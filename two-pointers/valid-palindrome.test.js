const palindrome = require("./valid-palindrome.js")

const text = "A man, a plan, a canal: Panama"

test("velue is a palindrome", () => {
    expect(palindrome(text)).toBe("amanaplanacanalpanama")
})

