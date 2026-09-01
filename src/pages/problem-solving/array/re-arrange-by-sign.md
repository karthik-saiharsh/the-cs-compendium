---
layout: ../../../layout/Content.astro
title: Rearrange Array Elements by Sign
heading: Rearrange Array Elements by Sign
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/rearrange-array-elements-by-sign/description/)
Can be solved in a single pass with `O(n)` Time and Space complexity.
The question.

We can have two pointers on starting at `0` and one starting at `1`.
We can then begin iterating over the original array and for each positive number write it to `i` and update `i` by 2 and for each negative number, write it at `j` and update `j` by 2.

```cpp
vector<int> rearrangeArray(vector<int>& nums) {
    vector<int> ans(nums.size());
    int i=0, j = 1;

    for(int num : nums) {
        if(num > 0) {
            ans[i] = num;
            i += 2;
        } else {
            ans[j] = num;
            j += 2;
        }
    }

    return ans;
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./next-permutation" class="next-button">Back</a>
    <a href="./rotate-image" class="next-button">Next</a>
</div>