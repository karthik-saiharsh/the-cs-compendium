---
layout: ../../layout/Content.astro
title: Competitive Programming - Data Structures
heading: Competitive Programming -Data Structures
author: Karthik Saiharsh
source: Competitive Programmer’s Handbook by Antti Laaksonen
---

## Dynamic Arrays

Use Vectors

```cpp
vector<int> v;
v.push_back(3); // [3]
v.push_back(2); // [3, 2]
```

- Elements can be accessed just like regular arrays `a[2]` works with vectors
- Doing `v.size()` returns the size of the vector.

A few more vector properties

```cpp
v.pop_back(); // Remove the last element
v.back(); // Peek/See the last element of the vector without popping. Returns last element not pointer to the last element

vector<int> v(10); // Creates a new vector of size 10 all initialized to 0
vector<int> v(10, 5); // Vector of size 10, with initial value of 5
```

## Strings

- Strings can be concatenated by a `+`
- `<string_reference>.substr(k, x)` returns the substring that begins at position k and has length x
- `find(t)` returns the position of the first occurrence of substring t.

## Sets

- C++ has `set` and `unordered_set`. `set` is implemented internally using a balanced binary tree so `O(logn)` operation time. While `unordered_set` uses hashing for `O(1)` operations.

A few Set Operations include

```cpp
set<int> s;

a.insert(12);
a.count(12); // Return 0 or 1 based on whether 12 is part of the set or not.
a.erase(3); // Remove 3 from the set
```

A set cannot have duplicate elements in it.
However, if you do want to add multiple copies of the same element to a set, use a `multiset` or `unordered_multiset` which behave just like `set` and `unordered_set`.

```cpp
multiset<int> x;
x.insert(5); x.insert(5); x.insert(5);

x.count(5); // Returns 3.

x.erase(5); // Deletes all instances of 5

x.find(5); // returns a pointer to the element 5 or return .end() if element is not in the set

if(x.find(5) != x.end()) {
  // 5 is in the set
}

x.erase(x.find(5)); // Deletes only one instance of 5
```

## Maps

Similar to sets, there exist two versions of maps in C++.
`map` is implemented using a balance binary tree and so has `O(logn)` time complexity, while `unordered_map` uses hashing.

Common Map usage includes

```cpp
map<string, int> m;

m["sun"] = 12;
m["moon"] = 15;

m["sun"]; //will return 12

m["jupiter"]; // new key jupiter is created with default value 0;
```

- If an attempt is made to access a key that does not exist, say `m["jupiter"]`, that key is added to the map with a default value, 0 in this case for int.

- Use `m.count(<key>)` to check if a key exists in a map.

Iterating over Maps can be done as follows:

```cpp
for(auto x : m) {
  string key = x.first;
  int value = x.second;
}
```

## Iterators and Ranges

- An iterator is a variables that points to an element in a data structure.
- For data structure d, `d.begin()` points to the **first** element in the data structure, while `d.end()` points **after** the last element.

```cpp
set<int>::iterator it = s.begin(); // Creates an iterator to the first element of the set
```

- Since iterators are points to elements, to access the actual value, they must be dereferenced.

## BitSet

- A bit set is an array where every element can be only 0 or 1.

```cpp
bitset<10> bs();

bs[2] = 0;
bs[3] = 1;
...

```

BitSets can also be initialized using strings

```
bitset<int> bs bs(string("010011")); // From right to left
```

## Deque

```cpp
deque<int> dq;
dq.push_back(); //Add at the back
dq.push_front(); //Add at the front

dq.pop_back(); // Remove from the end
dq.pop_front(); // Remove from the front
```

<div class="btn-cont">
    <a href="./1" class="next-button">Contents</a>
    <a href="./sorting" class="next-button">Back</a>
    <a href="" class="next-button">Next</a>
</div>
