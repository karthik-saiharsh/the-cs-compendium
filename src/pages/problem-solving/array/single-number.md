---
layout: ../../../layout/Content.astro
title: Single Number
heading: Single Number
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/single-number/description/)
Imagine sorting through a massive pile of socks to find the single one missing its match. If you have enough table space, you can organize them into pairs as you go. But what if you only have room in your hand to hold a single piece of information at a time?

This is the constraint of LeetCode 136: you are given an array where every element appears exactly twice except for one. You need to find that unique element in linear time (`O(n)`) and constant extra space (`O(1)`).

## Ideas
The obvious approach is to use a hash set or hash map to keep track of the numbers you have seen. However, tracking state like that costs `O(n)` space, violating the memory constraint. Sorting the array first allows you to just check adjacent numbers, but sorting takes `O(n \log n)` time, violating the speed constraint.

To solve this without storing historical data, we need a mechanism where matching pairs automatically **annihilate** each other upon contact, regardless of the order they arrive in. We need a mathematical operation that acts like a toggle switch.

## Solution
This is exactly what the bitwise XOR operation (^) is built for.

- `x ^ x = 0`
- `x ^ 0 = x`

Importantly, XOR is both commutative and associative. This means the order in which we process the numbers does not matter at all.

If your array is [4, 1, 2, 1, 2], and you start with a running total of 0 and XOR every number into it, the math looks like this: `0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2`

Because order doesn't matter, the universe effectively regroups this as: `4 ^ (1 ^ 1) ^ (2 ^ 2)`

The pairs annihilate each other into zeros: `4 ^ 0 ^ 0`

Leaving only the unique number: `4`.

By simply iterating through the array once and continuously updating a single variable with the XOR of the current number, we achieve the goal. The time complexity is `O(n)` because we touch each element once. Space is `O(1)` because we only need a single integer to accumulate the result. We traded the spatial cost of a hash map for the algebraic properties of binary operations.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int result = 0;
        
        for (int num : nums) {
            result ^= num; // XOR the current number with our running total
        }
        
        return result;
    }
};
```

- **Time Complexity:** **O(n)** — We iterate through the vector exactly once.
- **Space Complexity:** **O(1)** — We allocate a single integer (result) to hold the state, regardless of how massive the input array gets.

## Problem Extensions

- What if the duplicates appear three times instead of two? The XOR trick fails because `x ^ x ^ x = x`. The pairs don't cleanly vanish. Instead, you have to count the occurrences of each bit across all numbers and take the total modulo 3.

- What if there are two unique numbers instead of one? The final XOR result will be the XOR of the two unique numbers combined. You then have to find a set bit in that combined result and use it to partition the array into two separate buckets, effectively turning the problem into two distinct "Single Number" problems.

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./missing-number" class="next-button">Back</a>
    <a href="./subarray-sum-k" class="next-button">Next</a>
</div>