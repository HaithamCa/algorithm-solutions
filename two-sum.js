/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     const prevValue = {};
    
//     for (let i=0; i<nums.length; i++) {
//         const currentNumber = nums[i];
//         const neededNumber = target - currentNumber;
//         const index2 = prevValue[neededNumber];
//         if (index2 != null) {
//             return [index2, i];
//         } else {
//              prevValue[currentNumber] = i
//         }
//     }
// };

// 


var twoSum = function(nums, target) {
    const previousValues = {};
    
    for(let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const neededValue = target - currentNumber;
        const index2 = previousValues[neededValue];
        
        if (index2 != null) {
            return [index2, i];
        } else {
            previousValues[currentNumber] = i;
        }
    }
};
