---
date: 2023/08/31
tags: 
 - C++
---

# 牛客 Do not declare C-style arrays, use std::array<> instead

使用牛客在线编译器时，选择 C++ 语言定义字符数组 `char str\[5000]` 时提示

```txt
Do not declare C-style arrays, use std::array<> instead
```

![array](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/cpp-array/use-array.png)

参阅 [Three ways to avoid arrays in modern C++](https://www.develer.com/en/blog/three-ways-to-avoid-arrays-in-modern-cpp/)，C语言中的字符数组会存在很多问题，因此在Modern C++ 中，使用 `std::array` 定义字符数组。

```cpp
#include <array>
std::array<char, 5000> str;
```
