 /*
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reverse = 0;
    let original = x;

    while( x > 0 ) {
        
        const lastDigit = x % 10;

        reversed = reversed * 10 + lastDigit;

        x = Math.floor(x / 10);
    }

    return reverse === original;
};