/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var searchInsert = function(nums, target) {
    // Iterate over each integer in sorted input array nums
    for (let i = 0; i < nums.length; i++) {
        
        // For each int in nums, check if it equals target
        // If it does, return index of matching int 
        if (target === nums[i]) {
            return i;

        // Since the array is sorted, if it did NOT find 
        // a match in the array AND the target is less
        // than the current integer at index i, this
        // means that all the remaining numbers in the 
        // nums array are greater than the target (recall:
        // it is sorted) - thus we can return the current
        // index as this is where the target would go
        } else if (nums[i] > target) {
            return i;
        }
    }
    // To cover the last case wherein the target is larger than
    // every number in the input array, simply return the length
    // of the array as the target would be pushed as the last index
    // of the array 
    return nums.length;
};

/* Concise solution without comments:

 var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (target === nums[i]) {
            return i;
        } else if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;
};

*/