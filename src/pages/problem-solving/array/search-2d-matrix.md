---
layout: ../../../layout/Content.astro
title: Search 2D Matrix
heading: Search 2D Matrix (Easy Problem)
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/search-a-2d-matrix/description/)

The matrix is sorted in such a way that we can treat it like one sorted array arrays.

For a matrix with m rows and n columns: index = `0 ... m*n - 1`

Convert a 1D index back to matrix coordinates:

- row = `mid / n`
- col = `mid % n`

Then apply normal binary search.

**Complexity:**
- Time: `O(log(m × n))`
- Space `O(1)`

```cpp
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int i=0, j = matrix.size()-1;
    int mid;
    int nj = matrix[0].size();

    int check_in = -1;

    while(i <= j) {
        mid = (i + j) / 2;
        int start = matrix[mid][0];
        int next_end = matrix[mid][nj-1];
        int prev_end = matrix[max(0,mid-1)][nj-1];

        if(target >= start && target <= next_end) {
            check_in = mid;
            break;
        }

        if(target > next_end) i = mid + 1;
        else j = mid - 1;
        
    }

    if(check_in != -1) {
        auto x = lower_bound(matrix[check_in].begin(), matrix[check_in].end(), target);

        if(*x == target) return true;
    }

    return false;
}
```