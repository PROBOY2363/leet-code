/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const find = (t) => {
    let l = 0, r = nums.length;
    while (l < r) {
      const m = (l + r) >> 1;
      nums[m] >= t ? (r = m) : (l = m + 1);
    }
    return l;
  };

  const first = find(target);
  return nums[first] === target ? [first, find(target + 1) - 1] : [-1, -1];
};