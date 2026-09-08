---
layout: ../../layout/Content.astro
title: C++ for Problem Solving - Basic Techniques
heading: C++ for Problem Solving - Basic Techniques
author: Karthik Saiharsh
source: Competitive Programmer’s Handbook by Antti Laaksonen
---

## Basics

- Competitive Programming = the design of algorithms + the implementation of algorithms
- Most problems in programming contests are set so that using a specific programming language is not an unfair advantage.
- Use `#include <bits/stdc++.h>` to import the entire standard library making all default features available.
- Using `g++ -std=c++11 -O2 -Wall <source.cpp> -o <output>` Compiles your source using the C++ 11 standard which is available on almost all systems `-O2` Optimizes with 2nd level optimization, and `-Wall` shows warnings about potential errors.

## Input and output

**Reading Input**

```cpp
int a, b;
string x;
cin >> a >> b >> x;
```

- There must be atleast one space or newline between `a`, `b`, and `x` for this to work properly
- Since `cin` deliminates by spaces, use `getline` to read strings with spaces in them

```cpp
string c;
getline(cin, s); // This reads the whole line till \n
```

When amount of data is unknown, use:

```cpp
while(cin >> x) {
  // Reads till no more data can be read

}
```

**Printing Output**

```cpp
int a = 3301, b = 509, c = 503;
string x = "Cicada"
cout << a << b << c << x << "\n";
```

- Using `endl` flushes the buffer and appends a newline character.
- However, this flushing may slow down the program, so use `\n` for more speed, and flush manually with a `count << flush` when needed.

**Speeding up the io**

By default `C++` syncs `cin` with `scanf` and `cout` with `printf`, meaning you can mix these two streams and get the same output.
But this is slower since every operation is coordinated.
Turning this sync off speeds up **io**, but breaks the sync.
You can do that with

```cpp
ios::sync_with_stdio(0);
cin.tie(0);
```

Now you can't mix C++ Streams with C streams.

**Dealing with files**

You can use `freopen` for **File reopen** to attach `stdin` and `stdout` to a file so that reading and writing to standard input and output streams, reads and writes to the file instead.

```cpp
freopen("input.txt", "r", stdin);
freopen("output.txt", "w", stdout);
```

`fopen` creates a new stream and you have to read from it, while `freopen` reuses an existing stream, `stdin` and `stdout` in this case

### Tips

- It is risky to compare floating point numbers with the == operator, because it is possible that the values should be equal but they are not because of precision errors. So, a better way to compare numbers is to do the following:

```cpp
if(abs(a-b) < 1e-9) cout << "a and b are equal\n";
```

<div class="btn-cont">
    <a href="./1" class="next-button">Contents</a>
    <a href="/" class="next-button">Home</a>
    <a href="./sorting" class="next-button">Next</a>
</div>
