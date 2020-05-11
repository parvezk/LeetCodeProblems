/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (S, indexes, sources, targets) {
    let N = S.length,
        match = new Array(N).fill(-1);

    for (let i = 0; i < indexes.length; i++) {
        let ix = indexes[i];

        if (S.substring(ix, ix + sources[i].length) == sources[i])
            match[ix] = i;
    }

    let ans = '', j = 0;
    while (j < N) {

        if (match[j] >= 0) {
            ans += targets[match[j]]; // replacement
            j += sources[match[j]].length; // jump over
        } else
            ans += S.charAt(j++)
    }
    return ans;
};