# `::`

`::`，[Scope Resolution Operator](https://en.wikipedia.org/wiki/Scope_resolution_operator)，作用域解析运算符，其作用是 <span style="color:red;">解析作用域</span>，`A::B` 表示作用域 A 中的名称 B，A 可以是`namespace`、`class`、`struct`；

## 在全局命名空间中查找

在类型名称前面加上 `::`，它会告诉编译器在全局命名空间中查找该类型

```cpp
int count = 0;

int main(void) {
  int count = 0;
  ::count = 1;  // set global count to 1
  count = 2;    // set local count to 2
  return 0;
}
```

输出：

```
1
2
```

## 啊

```cpp
namespace A {
    static int i = 4;
};

int main() {
std::cout << A::i;
}
```

## 啊1

```cpp
class Configuration; // class 1, in global namespace
namespace MyApp
{
    class Configuration; // class 2, different from class 1
    function blah()
    {
        // resolves to MyApp::Configuration, class 2
        Configuration::doStuff(...) 
        // resolves to top-level Configuration, class 1
        ::Configuration::doStuff(...)
    }
}
```

## 以文件目录来类比

参考自

* [c++ - What is the meaning of prepended double colon "::"? - Tony Delroy's answer - Stack Overflow](https://stackoverflow.com/a/4269232/20834092)

可以把 `::` 类比为文件系统目录中的 `/`

```cpp
::std::cout
```

如果位于名为 `X` 的 `namespace` 中，并且声明了 `using namespace Y`，那么：

```cpp
std::cout
```

会在：

* `::X::std::out`
* `::std::out`
* `::Y::std::cout`

内寻找，但由于 [argument-dependent lookup](https://en.cppreference.com/w/cpp/language/adl)，只有 `::std::out` 才是明确的对象。

## `::` 和 `.` 的区别

## 参考

* [c++ - What is the meaning of prepended double colon "::"? - Stack Overflow](https://stackoverflow.com/questions/4269034/what-is-the-meaning-of-prepended-double-colon)
* [Scope resolution operator - Wikipedia](https://en.wikipedia.org/wiki/Scope_resolution_operator)
* [C++中的 ::_c++ 的::_有梦想的伟仔的博客-CSDN博客](https://blog.csdn.net/qq1623803207/article/details/89398435)
* [C++中的.和::和：和->的区别_define_SGZ的博客-CSDN博客](https://blog.csdn.net/s15868887695/article/details/56834685)
