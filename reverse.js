/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev = 0;
        
        while (x !== 0) {
            rev = rev * 10 + (x % 10);
            x = parseInt(x / 10);
        }
        return rev > Math.pow(2, 31) || rev < Math.pow(-2, 31) ? 0 : rev;
    };