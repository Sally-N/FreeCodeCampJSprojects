function palindrome(str) {
    let newStr = str.toLowerCase().replace(/[^a-z\d]/g, '')
        // console.log(newStr);
    return newStr.split('').reverse().join('') === newStr;

}

console.log(palindrome("2A3 3a2"));