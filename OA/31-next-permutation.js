/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// First attempt - pretty close
var nextPermutation = function(nums) {
  const swap = (left, right) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  };
  // find next greater permutation
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        swap(i, j);
        return nums;
      }
    }
  }
  // find lowest possible order
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (nums[i] < nums[j]) {
        swap(i, j);
        break;
      }
    }
  }

  return nums;
};

var nextPermutation = function(nums) {
  // swap function
  const swap = (left, right) => {
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  };

  // Insertion sort
  function insertionSort(k) {
    for (let i = k; i < nums.length; i++) {
      let temp = nums[i];
      let j = i - 1;
      while (j >= k && nums[j] > temp) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = temp;
    }
  }

  // find next greater permutation
  let i = 0;
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let j = i;
      while (nums[i - 1] < nums[j]) j++;

      swap(i - 1, j - 1);
      break;
    }
  }
  insertionSort(i);
};
