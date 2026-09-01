---
layout: ../../../layout/Content.astro
title: Max Consecutive Ones
heading: Max Consecutive Ones (Easy Problem)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/max-consecutive-ones/description/)

This question asks you to find the longest sequence of consecutive 1s in a binary array.

While this is categorized as an "Easy" problem, its real value lies in teaching the most basic form of a state machine or a 1D sliding window. You are essentially walking down the array and reacting to binary signals: "continue the streak" or "break the streak."

## The Mechanism: Local vs. Global State

To solve this in a single pass with $O(1)$ space, we only need to track two pieces of information:

- **The Local State (current_streak)**: How many 1s have I seen in a row right now?
- **The Global State (max_streak):** What is the longest streak I have seen overall?

When you encounter a `1`, the local streak grows.
When you encounter a `0`, the local streak dies. Before you reset the local streak to `0`, you check if it beats the global record.

## Trade-offs: Eager vs. Lazy Evaluation

### Approach 1: Eager Update (Cleaner code)

You update the global maximum on every single `1` you see.

- **Pros**: The code is foolproof. You never have to worry about what happens when the array ends.
- **Cons**: You call the max() function unnecessarily often, doing extra CPU work on every iteration.

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int max_streak = 0;
        int current_streak = 0;

        for (int num : nums) {
            if (num == 1) {
                current_streak++;
                // Eager update: strictly safer, no post-loop cleanup needed
                max_streak = max(max_streak, current_streak);
            } else {
                // Streak broken
                current_streak = 0;
            }
        }

        return max_streak;
    }
};
```

### Approach 2: Lazy Update (Better performance, higher bug risk)

You only update the global maximum when the streak breaks (when you hit a 0).

- **Pros**: Fewer operations. You only compare numbers when a streak finishes.

- **Cons**: The final streak trap. If the array ends with a `1` (e.g., `[1, 1, 0, 1, 1, 1]`), the loop will finish without hitting a final `0`. If you don't explicitly check the maximum one last time after the loop ends, you will return the wrong answer. This is a very common off-by-one style bug.

```cpp
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int max_consecutive = 0;
        int section_highest = 0;

        for(int i=0; i <= nums.size(); i++) {
            if(i == nums.size()) {
                // We check one last time at the end
                max_consecutive = max(max_consecutive, section_highest);
                break;
            }

            int num = nums[i];

            if(num == 0) {
                // We update our global highest only at the break points
                max_consecutive = max(max_consecutive, section_highest);
                section_highest = 0;
            } else {
                section_highest++;
            }
        }

        return max_consecutive;
    }
};
```

> You are walking down a path collecting coins (1s). When you hit a wall (0), you put your current coins into a high-score ledger, drop your bag, and start over.

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./move-zeroes" class="next-button">Back</a>
    <a href="./missing-number" class="next-button">Next</a>
</div>
