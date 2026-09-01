---
layout: ../../../layout/Content.astro
title: Subarray Sum Equals K
heading: Subarray Sum Equals K
author: Karthik Saiharsh
---

# [Question](https://leetcode.com/problems/subarray-sum-equals-k/description/)
We need to count subarrays whose sum is exactly `k`.

We can use **prefix sum + hashmap**:

- Prefix Sum: Sum of elements from beginning to current index.

For a sub array to have sum `k`, we need to have `prefix(i) - prefix(j) = k` such that `j < i` and `0 < j < i < N` where N is the total size of array.

Rearranging the equation to `prefix(i) - k = prefix(j)`, tells us we need to check if `prefix(j)` has appeared before in the array. If it has, then it means a valid subarray exists with sum k.

We use a HashMap to keep track of prefix sums.

> At every position, count how many previous prefix sums equal currentPrefixSum - k.

```cpp
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int,int> store(nums.size());
    store[0] = 1;

    int sum = 0;

    int ans = 0;

    for(int num : nums) {
        sum += num;

        if(store.contains(sum - k)) ans += store[sum - k];

        if(store.contains(sum)) {
            store[sum] += 1;
        } else {
            store[sum] = 1;
        }
    }

    return ans;
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./single-number" class="next-button">Back</a>
    <a href="./search-2d-matrix" class="next-button">Next</a>
</div>