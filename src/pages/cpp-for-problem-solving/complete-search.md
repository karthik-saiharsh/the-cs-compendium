---
layout: ../../layout/Content.astro
title: C++ for Problem Solving - Complete Search
heading: C++ for Problem Solving - Complete Search
author: Karthik Saiharsh
source: Competitive Programmer’s Handbook by Antti Laaksonen
---

## Complete Search

The process of generating all possible solutions to a given problem.
This method is complete and always works for any given problem because the entire search space is generated and explored.

## Generating Subsets

### Method 1

```cpp
void expand(k) {
  if(k == n) {
    // Do something with the subset
    return;
  } else {
        // We have two choices - Expand further by including the current element, expand further by not including the current element

    // Include the current element
    subset.push_back(<element at k>);
    expand(k+1);

    // Do not include the current element
    subset.pop_back();
    expand(k+1);
  }
}
```

### Method 2

This clever way of generating subsets uses the bit representation of the numbers.
Consider 19, my favourite number!
`19` can be written as `10011`.

Now assume the following convention:

- Start counting(incrementally) from the right end of the bit representation, starting with 0.
- Every 1 represents that number being included in the subset.
- Every 0 means an omission of the number.
- In case of `10011`, the first one(counting from right) means `0` is included, the next one means `1` is included, and we have two zeroes which means `2` and `3` are not included; finally, the last one means that `4` is included. Therefore `19` gives us the subset `{0, 1, 4}`.

If you think about this carefully, it is such a powerful idea. We just managed to convert a number into a set of numbers which can then be used as a subset to a larger set! Isn't math cool?!

Now how do we use this to generate our subsets ?

Consider I want to generate subsets of `{A, B, C}`.
Going by our earlier notation of converting numbers to subsets, we have the following:

- 0(000) = {}
- 1(001) = {A}
- 2(010) = {B}
- 3(011) = {A, B}
- 4(100) = {C}
- 5(101) = {A, C}
- 6(110) = {B, C}
- 7(111) = {A,B,C}

If we take the bit representation of the numbers from 0 to 7, and consider the ones from right to left as indices elements from `{A,B,C}` to be included, we get our subsets.
So for an array of size `n` we have to iterate from `0` to `n-1`.

```cpp
for(int i=0; i < (1 << n); i++) {
  // numbers from 0 to 2^n-1
}
```

So now to generating the actual subsets, we do

```cpp
char arr[] = {'A', 'B', 'C'};
for(int i=0; i < (1 << arr.size()); i++) {
  vector<int> subset;
  for(int j=0; j < n; j++) {
    if(i & (1 << j)) subset.push_back(arr[j]);
  }
}
```

## Generating Permutations

Unlike generating subsets where we get to choose whether to include a given element or otherwise, in the case of permutations, every element must be chosen, but the order is what changes.
So we need to ensure that every element is chosen only once, and in every possible order.

```cpp
void expand() {
  if(permutation.size() == n) {
    // Process this individual permutation
  } else {
    for(int i=0; i < n; i++) {
      // For every element
      if(chosen[i]) continue;
      // If not chosen already
      chosen[i] = true; // Choose it
      permutation.push_back(i); // Add it to permutation
      expand(); // recurse
      chosen[i] = false;
      permutation.pop_back(); // undo choice to prepare for next possible arrangement
    }
  }
}
```

### Easy Hack

C++ Provides a built in method that returns the next permutation.
Start with your array and keep calling the next permutation as long as it keeps going.
Sometimes you may need to `sort` your collection of elements to ensure all permutations are generated.

```cpp
do {
  // process permutation
} while(next_permutation(arr.begin(), arr.end()));
```

<div class="btn-cont">
    <a href="./1" class="next-button">Contents</a>
    <a href="./data-structures" class="next-button">Back</a>
    <a href="" class="next-button">Next</a>
</div>
