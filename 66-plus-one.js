/**
 * @param {number[]} digits
 * @return {number[]}
 */

 var plusOne = function(digits) {

    // Step-by-Step Explanation:
    // =========================

    // Convert array to string by joining each
    // digit in digits array: [1, 2, 3] becomes '123'
    let str = digits.join("");

    // Cast the string str as datatype BigInt and add 1 to it
    // Note: 1 must also be cast as BigInt or will throw
    
    // a TypeError: '123' becomes 124 (BigInt)
    let sum = BigInt(str) + BigInt(1);

    // Convert sum back to a string so it can be split
    // back into an array of individual digits
    // 124 (BigInt) becomes "124" of type string
    let stringSum = sum.toString();

    // Convert updated stringSum back to an array
    // Passing in '' to split() will make each char its
    // own separate element in the array
    // So that "124" becomes [1, 2, 4]
    let arraySum = stringSum.split('');

    return arraySum;
}

/*

   **Now that we have broken it down into individual steps, 
   the entire multi-step process can be condensed into a single
   line of code, achieving the same result as described above**

    var plusOne = function(digits) {
        return (BigInt(digits.join("")) + BigInt(1)).toString().split("");  
    }

*/