/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 3) return n;

    let combos = 0, x = 1, y = 2;
    for (let i = 0; i <= n - 3; i++) {
        combos = x + y;
        x = y;
        y = combos;
    }
    return combos;
};

/*
    Given the step level (n), we need to find out how many 
    different combinations of 1s and 2s add up to equal n. If we
    manually start to count the possibilities for each step level,
    a clear pattern emerges:

        case n = 0  ---  well, we use 0 steps to go 0 steps so return 0 in this case
        case n = 1  ---  only 1 possibility to get to 1 step, so return 1
        case n = 2  ---  we can have [1, 1] or [2] so return 2 possibilities
        case n = 3  ---  possibilities [1, 1, 1], [1, 2], or [2, 1], so return 3
        =================================================================
        case n = 4  --- [1,1,1,1],[1,1,2],[1,2,1],[2,1,1],[2,2], so return 5
        case n = 5  --- [11111][1112][1121][1211][2111][221][212][122], return 8

    To recap our answer for each case where n = (0 through 5):

      n=     0, 1, 2, 3, 4, 5...
      sum=   0, 1, 2, 3, 5, 8...

    We can see the pattern is the running sum of the previous 2 sums,
    also known as the fibonacci sequence (1+2=3, 2+3=5, 3+5=8, 5+8=13, etc...)

    For the cases where n is <= 3, we can just return n since they are the same:

      n=    0, 1, 2, 3    ///////    4, 5
      sum=  0, 1, 2, 3    ///////    5, 8

    When n > 3, we can setup a loop to calculate the running fibonacci sum
    up to the nth step. 

    Initialize our counter and previous 2 sums:
      let combos = 0, x = 1, y = 2;

    Initialize our loop - stop the loop at n - 3 because cases 0 through 3 are covered
      for (let i = 0; i <= n - 3; i++) 

    Update our number of combos
                          // if n = 4 // here i is still < 1
        combos = x + y;   // combos = 1 + 2
        x = y;            // x = 2
        y = combos;       // y = 3

                          // will iterate again, 2nd iteration:
                          // combos = 2 + 3
                          // x = 3
                          // y = 5

        now i = 1, so loop breaks and we return combos (5)
        (could also return y) and for n = 4, there a 5 possible combos
 */

