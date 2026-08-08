---
layout: ../../../layout/Content.astro
title: Check if Given array is Sorted
heading: Check if Array Is Sorted and Rotated (Easy Problem)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/)

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

## Solution

The initial idea is, given an array, try to unsort it with all possible values of `x` and see if it becomes properly sorted.

```cpp
class Solution {
public:
    bool check(vector<int>& nums) {
        for(int i=0; i < nums.size(); i++) {
            vector<int> original = build_arr(nums, i);
            bool ans = check_sorted(original);
            if(ans) return true;
        }
        return false;
    }

    vector<int> build_arr(vector<int>& nums, int x) {
        int len = nums.size();
        vector<int> original(len);

        for(int i = 0; i < len; i++) {
            int val = nums.at(i);
            int original_idx = (i+x) % len;
            original[original_idx] = val;
        }

        return original;
    }

    bool check_sorted(vector<int>& arr) {
        for(int i=0; i < arr.size()-1; i++) {
            if(arr[i] > arr[i+1]) return false;
        }
        return true;
    }
};
```

This approach is obviously not optimal and is brute forcing to the solution.

The optimal approach would be to recognize the pattern that if a sorted array were to be rotated, a **Jump** i.e a bigger element appearing before a smaller element will only happen once across the whole array. (including the first and last elements). We can loop over the array once and check for any jumps.

```cpp
class Solution {
public:
    bool check(vector<int>& nums) {
        int drops = 0;

        for(int i=0; i < nums.size(); i++) {
            if(nums[i] > nums[(i+1) % nums.size()]) drops++;
        }

        if(drops <= 1) return true;
        return false;
    }
};
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./second-largest-element" class="next-button">Back</a>
    <a href="./remove-duplicated" class="next-button">Next</a>
</div>
