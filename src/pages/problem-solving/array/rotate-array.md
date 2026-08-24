---
layout: ../../../layout/Content.astro
title: Rotate Array
heading: Rotate Array (Easy Problem)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/rotate-array/description/)

### Core Idea
LeetCode 189 asks you to rotate an array to the right by `k` steps. The trivial solution is to create a new array and place each element at its new index, which takes `O(n)` time and `O(n)` space. The actual test, however, is whether you can do this in `O(1)` auxiliary space without degrading the time complexity to `O(n x k)`

### Solution
The most elegant `O(1)` space solution relies on array reversal.

Think about what a right rotation actually does: it takes the last `k` elements of the array and snaps them to the front.If we simply reverse the entire array, we successfully bring those last `k` elements to the front, and push the first `n-k` elements to the back.

There is just one problem: their internal order is now backwards. To fix this, we just reverse the two chunks independently.

### Live Replay
Take `[1, 2, 3, 4, 5, 6, 7]` and `k = 3`.
We want the last 3 elements `[5, 6, 7]` at the front.

1. Reverse the whole array: `[7, 6, 5, 4, 3, 2, 1]`
1. Reverse the first `k` elements: `[5, 6, 7, 4, 3, 2, 1]`
   _Why?_ This restores the original left-to-right order of the rotated chunk.
1. Reverse the remaining `n-k` elements: `[5, 6, 7, 1, 2, 3, 4]`
    _Why?_ This restores the original order of the rest of the array.

We touch every element exactly twice, giving us a strictly `O(n)` time complexity using only `O(1)` space for the swap variables.

> The effective rotation is always k % n. You must compute this before doing any reversals. (And if k % n == 0, you can return immediately, as the array remains unchanged).

### Cyclic Replacement Approach (Alternate)
There is a second `O(1)` space approach: Cyclic Replacement.
In this method, you pick up the first element, calculate its target index `(i + k) % n`, put the displaced element in your pocket, and repeat until you've moved `n` elements.


### Solution Program
```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        int n = nums.size();
        
        // 1. Normalize k to prevent IndexOutOfBounds
        k = k % n; 
        
        // Minor optimization: if k is 0, the array doesn't change
        if (k == 0) return; 

        // 2. Reverse the whole array
        // Moves the tail elements to the front, but mirrored
        reverse(nums.begin(), nums.end());
        
        // 3. Reverse the first k elements
        // Restores the correct order of the shifted tail
        reverse(nums.begin(), nums.begin() + k);
        
        // 4. Reverse the remaining n - k elements
        // Restores the correct order of the original front elements
        reverse(nums.begin() + k, nums.end());
    }
};
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./remove-duplicated" class="next-button">Back</a>
    <a href="./move-zeroes" class="next-button">Next</a>
</div>

