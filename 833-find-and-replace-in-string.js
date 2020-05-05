/**
 * @param {string} S
 * @param {number[]} indexes
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */

var findReplaceString = function(S, indexes, sources, targets) {
    
    let N = S.length;
    let match = new Array(N).fill(-1);
    
    for (let i=0; i<indexes.length; ++i) {
        let ix = indexes[i];
        if (S.substring(ix, ix + sources[i].length) == sources[i])
            match[ix] = i;
    }
    //if(S.slice(index, index+source.length) == source)
    let ans = '';
    let ix = 0;
    while (ix < N) {
        if (match[ix] >= 0) {
            ans += targets[match[ix]];
            ix += sources[match[ix]].length;
        } else {
            ans += S.charAt(ix++);
        }
    }
    return ans;
};