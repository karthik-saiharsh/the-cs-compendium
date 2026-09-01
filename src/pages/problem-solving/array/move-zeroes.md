---
layout: ../../../layout/Content.astro
title: Move Zeroes
heading: Move Zeroes (Easy Problem)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/move-zeroes/description/)
Question asks you to shift all zeros to the end of an array while maintaining the original relative order of the non-zero elements. You must do this in-place using `O(1)` auxiliary space.

### Idea
The main idea here is to use the two-pointer fast/slow traversal.

When you process an array in-place, you can imagine having two separate "heads" scanning the tape:
1. A **Read Pointer** (fast) that looks at every single element unconditionally.
1. A **Write Pointer** (slow) that only moves forward when it has a valid, non-zero element to place.

Because the Read pointer will always be equal to or ahead of the Write pointer, the Write pointer is completely safe. It will never overwrite an element that the Read pointer hasn't already processed.

## Algorithm Traced
Take `[0, 1, 0, 3, 12]`. Both pointers start at index `0`.

1. **Read** sees `0`: It ignores it. **Read** moves forward. **Write** stays at index `0`. (A gap forms between them).

1. **Read** sees `1`: We want to keep this! We swap the `1` with whatever is sitting at the **Write** pointer (which is `0`). **Write** moves forward.

1. **Read** sees `0`: Ignore. **Read** moves forward.

1. **Read** sees `3`: Swap with the **Write** pointer. **Write** moves forward.

By doing this, the gap between the Read and Write pointers acts like a snowball, scooping up all the zeros. Whenever Read finds a non-zero, it tosses it over the snowball to the Write pointer, pushing the zeros further down the line.

### Solution
```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int write = 0; // Tracks the destination for the next non-zero
        
        // Read pointer scans through the entire array
        for (int read = 0; read < nums.size(); ++read) {
            
            if (nums[read] != 0) {
                // Toss the non-zero to the front of the zero-snowball
                swap(nums[write], nums[read]);
                
                // Advance the write pointer for the next valid element
                write++;
            }
        }
    }
};
```

> Read aggressively, write conservatively. The space between a fast read pointer and a slow write pointer is your temporary garbage bin (the zeros). Whenever you find good data, swap it with the front of the garbage bin.

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./rotate-array" class="next-button">Back</a>
    <a href="./max-consecutive-ones" class="next-button">Next</a>
</div>

