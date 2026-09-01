---
layout: ../../../layout/Content.astro
title: Next Permutation
heading: Next Permutation
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/next-permutation/description/)

So, we need to find the next lexographic permutation of the given array.
And I just discovered the algorithm for this was created by **Narayana Pandita**

Alright, so, here's how it works

- **Find the pivot**: Scan the sequence from right to left to find the first index `(i)` where the element is smaller than the next element `(a[i] < a[i+1])` This index `(i)` is your pivot. If no such index exists, the sequence is the last permutation (sorted in descending order).

- **Find the successor**: Scan from the right end again to find the first element `(a[j])` that is larger than the pivot element `(a[i])` `((a[j] > a[i]))`.

- **Swap the elements**: Swap the values of `(a[i])` and `(a[j])`.

- **Reverse the suffix**: Reverse the entire sub-sequence starting from the element right after the pivot index `(i+1)` to the very end of the sequence.

```cpp
void nextPermutation(vector<int>& nums) {
    int i=-1, j=-1;

    // Find i
    for(int idx=nums.size()-2; idx >= 0; idx--) {
        if(nums[idx] < nums[idx+1]) {
            i = idx;
            break;
        }
    }

    // If no i exists then it is the last permutation
    // So return the next permutation (reverse of the last permutation)
    if(i == -1) {
        reverse(nums.begin(), nums.end());
        return;
    }

    // Find j
    for(int idx=nums.size()-1; idx>=0; idx--) {
        if(nums[idx] > nums[i]) {
            j = idx;
            break;
        }
    }

    // Swap i and j
    swap(nums[i], nums[j]);

    // Reverse j+1 to end
    reverse(nums.begin()+i+1, nums.end());
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./stock-market" class="next-button">Back</a>
    <a href="./re-arrange-by-sign" class="next-button">Next</a>
</div>