---
layout: ../../layout/Content.astro
title: C++ for Problem Solving - Sorting
heading: C++ for Problem Solving - Sorting
author: Karthik Saiharsh
source: Competitive Programmer’s Handbook by Antti Laaksonen
---

## Swapping

- Swapping is a common operation. One easy way to swap two variables is via

```cpp
int x=2, y=3;
x = x ^ y;
y = x ^ y;
x = x ^ y;
```

C++ Also has a built in `swap` method

```cpp
int a=10, b=20;
swap(a, b);
```

## Sorting in C++

The following code uses built in library `sort` function to sort a vector.

```cpp
vector<int> a = {3301, 507, 509};
sort(a.begin(), a.end()); // Sorts to {507, 509, 3301}
sort(a.rbegin(), a.rend()); // Sorts to {3301, 509, 507};
```

Sorting arrays

```cpp
int a[] = {4,3,2,1};
sort(a, a+4);
```

Sorting Strings

```cpp
string name = "Cicada";
sort(name.begin(), name.end());
```

## Sorting User Defined Structs

Sorting requires the comparison `<` operation defined on the data type being sorted.
So for data types that do not have `<` defined on them, you must define a custom `<`

```cpp
struct P Person {
  string name;
  int age;

  // Overload the < operator in inside the struct
  bool operator<(const P &p) {
    return age < p.age;
  }
}
```

The sort function can also take a custom comparison function as the third argument.

```cpp
bool custom_compare(string a, string b) {
  return a.size() < b.size();
}

sort(v.begin(), v.end(), custom_compare); // let v be a vector of strings
```

## Binary Search

The most common implementation of binary search is

```cpp
while (l <= r) {
  int mid = (l + r) / 2;

  if(arr[mid] == target) //found target;
  else if(arr[mid] > target) r = mid - 1;
  else l = mid + 1;
}
```

Another way to implement Binary search is to make large jumps from the start of the array, and keep reducing the jump size as we get closer to our target. The jump size is going to start put being half the total length of the search space. So the first jump will reduce the search space by half. As subsequent jumps are made, we either reach the target or end of the array, while cutting down the search space everytime we make a jump.

```cpp
int k = 0;
for(int s=n/2; n >= 1; s/=2) {
  while(k + s < n && arr[k + s] <= target) k += s;
}

if(arr[k] == target) // element is found;
```

## Library Functions built on Binary Search

- `lower_bound(array, array+n, x)` returns a **Pointer** to the first array element whose value is **at least** x
- `upper_bound(array, array+n, x` returns a **Pointer** to the first element in the array whose value is **larger** than x
- `equal_range(array, array+n, x)` returns both the above two **Pointers**.

So to find the number of elements x in a sorted array, we can do

```cpp
auto r = equal_range(array, array+n, x);
cout << r.second - r.first << "\n";
```

<div class="btn-cont">
    <a href="./1" class="next-button">Contents</a>
    <a href="./basic-techniques" class="next-button">Back</a>
    <a href="./data-structures" class="next-button">Next</a>
</div>
