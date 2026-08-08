---
layout: ../../../layout/Content.astro
title: Second Largest Element in an Array
heading: Second Largest Element in an Array (Easy Problem)
author: Karthik Saiharsh
---

The question given is a simple modification of the [largest element](./largest-element-in-array) question.

> Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Like the previous question,
We iterate over the array element by element, and use two variables, one to keep track of the max, and one to keep track of the second max. In the end we return only the 2nd max variable.

- Time Complexity: `O(n)`
- Space Complexity: `O(1)`

```cpp
int getSecondLargest(vector<int> &arr) {

    if(arr.empty()) return -1;

    int max = arr[0];
    int second_max = -1;

    for(int num : arr) {
        if(num > max) {
            second_max = max;
            max = num;
        } else if(num > second_max && num < max) {
            second_max = num;
        }
    }

    return second_max;
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./largest-element-in-array" class="next-button">Back</a>
    <a href="./check-array-sorted-and-rotated" class="next-button">Next</a>
</div>
