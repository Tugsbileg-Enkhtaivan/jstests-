var containsDuplicate = function (nums) {
  const map = {};
  for (const i of nums) {
    if (map[i]) {
      return true;
    } else {
      map[i] = true;
    }
  }
  return false;
};

// console.log(containsDuplicate([1, 2, 3, 2]));


// var containsDuplicate = function (nums) {
//   const s = new Set(nums);
//   return s.size !== nums.length;
// };

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// console.log(containsDuplicate([1, 2, 3, 2]));
