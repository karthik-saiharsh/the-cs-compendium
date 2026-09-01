---
layout: ../../../layout/Content.astro
title: Best Time to Buy and Sell Stock
heading: Best Time to Buy and Sell Stock
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

We essentially need to find for all indices `i` what is the maximum prize that appears in the array after `i` to the end.

Once we have that we then need to find the pair with the argest difference between `i` and the maximum number in the remaining array after `i`.

**Complexities**
- Time: `O(n)`
- Space: `Q(1)`

```cpp
int maxProfit(vector<int>& prices) {
    int max = numeric_limits<int>::min(), ans = numeric_limits<int>::min();

    for(int i=prices.size()-1; i >= 0; i--) {
        int num = prices[i];
        if(num > max) max = num;
        if(max - num > ans) ans = max - num;
    }

    return ans;
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./maximum-subarray" class="next-button">Back</a>
    <a href="./next-permutation" class="next-button">Next</a>
</div>