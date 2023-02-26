/**
 * @param {string} s
 * @return {number}
 */

// Solution: We want to want to iterate over each character 
// in the string starting from the end (right to left) and
// then count the letters of the last word and return that 
// stored count

 var lengthOfLastWord = function(s) {
    // Create an index that equals the last character in the array
    let i = s.length - 1;

    // Initialize a variable to count the letters in the last word
    let lastWordLength = 0;
 
    // In the case that there is one space or a bunch of spaces at the end 
    // of the input string, simply loop over them and decrement our index
    // variable until we find the last letter of the last word
    while (s[i] === " " && i >= 0) {
      i--;  
    }

    // Now that we have found the last letter, incrememnt our counter
    // until we hit the next space, which tells us that we have reached
    // the first letter of the last word - at that point we can exit
    // the loop because we don't care about anything to the left of the 
    // last word in the input string
     while (s[i] !== " " && i >= 0) {
     lastWordLength++; 
     i--; 
    }

    // Return the counter containing the number of letters in the last word
    return lastWordLength;
 }; 

 
/* Concise solution without comments:

var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let lastWordLength = 0;

    while (s[i] === " " && i >= 0) {
        i--;  
    }

    while (s[i] !== " " && i >= 0) {
        lastWordLength++; 
        i--; 
    }

    return lastWordLength;
}; 

*/
 