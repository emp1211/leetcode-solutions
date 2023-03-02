/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let answer = "";
    if (a.length < b.length) {
        for (let i = a.length - 1; i >= 0; i--) {
            if (parseInt(a[i] + parseInt(b[i]) === 1)) {
                b[i] = 1;
            } else if (parseInt(a[i] + parseInt(b[i]) === 0)) {
                b[i] = 0;
            } else {
                b[i] = 0
                b[i - 1] = 1
            }
        }
        return b;
    } else {
         for (let i = b.length - 1; i >= 0; i--) {
            if (parseInt(a[i] + parseInt(b[i]) === 1)) {
                a[i] = 1;
            } else if (parseInt(a[i] + parseInt(b[i]) === 0)) {
                a[i] = 0;
            } else {
                a[i] = 0
                a[i - 1] = 1
            }
        }
    }
    return a;
};