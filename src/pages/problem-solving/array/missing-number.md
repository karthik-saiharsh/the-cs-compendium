---
layout: ../../../layout/Content.astro
title: Missing Number
heading: Missing Number (Easy Problem)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/missing-number/description/)

This gives you an array of `n` unique numbers ranging from `0` to `n`, with one number missing. The fundamental insight is that **you know exactly what the array should contain**. So, finding the missing element isn't a search problem, but a comparison between the ideal state and the actual state.

## Solution
Since you are comparing a complete set against an incomplete set, you need a mathematical operation that can process a stream of numbers and extract the difference. There are two possible solutions:

### 1. Sum Solution
The sum of a complete sequence from `0` to `n` is universally defined by Gauss's formula: `(n * (n+1)) / 2`
If you calculate this expected sum and subtract the running sum of the actual elements in the array, the remainder is exactly the missing number.

### 2. Using XOR
The XOR operator (`^`) has a magical property: `a ^ a = 0`. It is self-canceling.
If you XOR every number you expect to see (`0` to `n`) with every number you actually see (the array elements), every number that is present will appear exactly twice and cancel itself out to `0`. The missing number will only appear once, leaving it as the final result.

## Trade-offs: Math vs. XOR
If `n` is very large (e.g., `10^6`), calculating `n(n+1) / 2` can exceed the maximum limit of a 32-bit signed integer, causing the sum to wrap around into negative numbers and yielding a garbage result. 
You can fix this by using 64-bit integers (long), but the XOR approach bypasses the problem entirely. XOR operates strictly at the bit level without carrying sums over to higher bits, making it mathematically immune to overflow.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        
        // Initialize with n because the loop below only checks indices 0 to n-1
        int missing = n; 
        
        for (int i = 0; i < n; i++) {
            // XOR the expected index and the actual value
            missing ^= i ^ nums[i]; 
        }
        
        return missing;
    }
};
```

### Problem Extensions
- What if the array wasn't `0` to `n`, but `1` to `n`, and the array was unsorted? You use the exact same logic. You just offset your expected values to match the bounds.

- What if you couldn't use extra space, but the array was sorted? You would pivot to Binary Search. The moment `nums[i] != i`, you've found the start of the missing gap.

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./max-consecutive-ones" class="next-button">Back</a>
    <a href="./single-number" class="next-button">Next</a>
</div>