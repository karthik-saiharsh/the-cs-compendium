---
layout: ../../../layout/Content.astro
title: Majority Element
heading: Majority Element
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/majority-element/description/)
Think of every different number as cancelling out one occurrence of the majority element.

- Keep a `candidate` and a `count`.
- If `count == 0`, choose the current number as the new candidate.
- If the `current number = candidate`, them `count++`, else `count--`
- at the end

**Complexities**
- Time: `O(n)`, because the array is visited only once
- Space: `O(1)`, because we only keep track of `count` and `candidate`

## O(n) Time and O(n) Space Solution
```java
class Solution {
    public int majorityElement(int[] nums) {
        int ans[] = {nums[0], 1};

        HashMap<Integer, Integer> store = new HashMap<Integer, Integer>();

        for(int num : nums) {
            if(store.containsKey(num)) store.put(num, store.get(num)+1);
            else store.put(num, 1);
        }

        for(int key : store.keySet()) {
            int num = key;
            int count = store.get(num);

            if(count > ans[1]){
                ans[0] = num;
                ans[1] = count;
            }
        }

        return ans[0];
    }
}
```

## O(n) time and O(1) Space solution
```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int candidate = nums[0], count = 1;

        for(int i=1; i < nums.size(); i++) {
            if(count == 0){
                candidate = nums[i];
                count = 1;
            } else if(candidate == nums[i]) {
                count++;
            } else {
                count--;
            }
        }

        return candidate;
    }
};
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./search-2d-matrix" class="next-button">Back</a>
    <a href="./maximum-subarray" class="next-button">Next</a>
</div>