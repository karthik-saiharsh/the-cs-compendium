---
layout: ../../../layout/Content.astro
title: Largest Element in an Array
heading: Largest Element in an Array
author: Karthik Saiharsh
---

The question given to us is really simple

> Given an array arr[]. The task is to find the largest element and return it.

The solution for this problem is really simple.

We can iterate over the array element by element in a linear fashion, and use one additional variable, max to keep track of the maximum element found so far.

This, gives us `O(n)` Time Complexity, and `O(1)` Space Complexity.

```cpp
int largest(vector<int> &arr) {
  int max = arr[0];

  for(int num : arr) {
      if(num > max) max = num;
  }

  return max;
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./1" class="next-button">Back</a>
    <a href="./second-largest-element" class="next-button">Next</a>
</div>
