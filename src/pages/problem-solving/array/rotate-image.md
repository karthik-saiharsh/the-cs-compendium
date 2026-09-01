---
layout: ../../../layout/Content.astro
title: Rotate Image
heading: Rotate Image
author: Karthik Saiharsh
---

## [Question](https://leetcode.com/problems/rotate-image/description/)

Looking at the examples given, it takes but a short time to notice that the given rotation operation is basically a comination of Matrix Transpose + a row wise reversal.

```cpp
void rotate(vector<vector<int>>& matrix) {
    // Transpose the Matrix
    for(int i=0; i < matrix.size(); i++) {
        for(int j=0; j < i; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }

    // Row wise reversal
    for(int i=0; i < matrix.size(); i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}
```

<div class="btn-cont">
    <a href="../contents" class="next-button">Contents</a>
    <a href="./re-arrange-by-sign" class="next-button">Back</a>
    <a href="" class="next-button">Next</a>
</div>