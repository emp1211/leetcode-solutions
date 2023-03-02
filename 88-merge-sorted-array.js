/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // i will keep track of nums1 index - using example 1 i will start 
    // as element at array index 2 (nums1[2] which holds the value 3)
    // j will keep track of nums2 index - using example 1 j will start
    // as element at array index 2 (nums2[2] which holds the value 6)
    // k will count the total amount of elements in both arrays (m + n - 1)
    // thus k is decremented each time until k = 0
    
    for (let i = m - 1, j = n - 1, k = m + n - 1; k >= 0; k--) {
        if ((nums1[i] >= nums2[j]) && (i >= 0) || (j < 0)) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];     
            j--;
        }
    }
};

/*

    Explanation: We simply need to iterate over the two input
    arrays (nums1 and nums2), comparing each value and pushing 
    the values in order to build the merged array. However, we
    are asked to not create and return a new merged array, but 
    instead overwrite the values in nums1. Thus, we cannot
    compare the values left to right because we risk overwriting
    the values in our nums1 array before we have had a chance to
    compare them. To avoid this, we can merge the arrays by from
    right to left, starting with the highest values and pushing 
    them to the farthest right index of nums1 -- since these indices
    are filled with zeros. 

    In this case, we simply initialize two separate counters - we 
    need one for the nums1 array and another for the nums2 array,
    and they are only decremented if we push a value from that 
    specific array. (i.e. if the value from nums2 is larger, then 
    we push that value and decrememnt only our nums2 counter). We
    also need a counter that is the total amount of values in both
    input arrays.

 */