/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let HashMap = new Map();

    for (let i = 0; i < nums.length; ++i) {
        let compliment = target - nums[i];
        if (HashMap.has(compliment))
            return [HashMap.get(compliment), i];
        else
            HashMap.set(nums[i], i);
    }

    return [];
};


int main() {
    std::cout << "Hello World!\n";
}