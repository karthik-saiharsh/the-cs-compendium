---
layout: ../../../layout/Content.astro
title: Remove Duplicates from Sorted Array
heading: Remove Duplicates from Sorted Array (Easy)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

## Solution

Since the array is sorted, all duplicates are next to each other. That means we don't need to delete anything. We can simply overwrite the duplicate positions with the next unique values.

We can have two pointers: `original` scans through the array looking for new values, while `dup` tells us where the next unique value should be written.

We start both the pointers at index `1` since we know that the first element is always unique.

```cpp
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int dup = 1;
        int original = 1;

        while(original < nums.size()) {
            while(original < nums.size() && nums[original] == nums[original-1]) original++;

            if(original < nums.size()) {
                nums[dup] = nums[original];
                dup++;
                original++;
            }
        }
        return dup;
    }
};
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./check-array-sorted-and-rotated" class="next-button">Back</a>
    <a href="./rotate-array" class="next-button">Next</a>
</div>
