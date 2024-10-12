---
date: 2023/09/16
tags: 
 - VS Code
 - C++
---

# VS Code 配置 C++ MinGW 运行环境

## 下载安装 MinGW

在 [nuwen.net](https://nuwen.net/mingw.html) 或 [MSYS2](https://www.msys2.org/) 下载最新版本的 MinGW 并安装。

::: details [MinGW](https://en.wikipedia.org/wiki/MinGW) 是什么

让我们问问 ChatGPT 吧。

### Prompt

> MinGW 是什么

### Response

> MinGW 是一个 Windows 平台上的开发工具集，它提供了一组用于在 Windows 上进行 C、C++ 和其他编程语言开发的工具和库。MinGW 的全称是 "<span style='color:red'>Min</span>imalist "<span style='color:red'>G</span>NU for "<span style='color:red'>W</span>indows"，它的目标是在 Windows 平台上提供类似于 Unix 环境下的开发工具和环境。

:::

## 添加环境变量

将 MinGW 的安装路径添加到用户的 Path 环境变量。

添加方法参见

- [How do I set system environment variables in Windows 10? - Super User](https://superuser.com/questions/949560/how-do-i-set-system-environment-variables-in-windows-10)

环境变量添加好后，可以在 cmd 中运行 `g++ --version` 来测试是否添加成功了。

```
$ g++ --version

g++ (Rev3, Built by MSYS2 project) 13.2.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

## 配置 VS Code

### 安装 C/C++ 扩展

在 VS Code 中安装 [C/C++](https://marketplace.visualstudio.com/items?itemName=ms-vscode.cpptools) 扩展。

### 配置 `.vscode` 文件夹

创建 `.vscode` 文件夹，在里面创建 3 个文件，名字分别是：

- `c_cpp_properties.json`
- `launch.json`
- `tasks.json`

它们的内容分别填入：

::: details c_cpp_properties.json

```json
{
  "configurations": [
    {
      "name": "GCC",
      "includePath": ["${workspaceFolder}/**"],
      "defines": ["_DEBUG", "UNICODE", "_UNICODE"],
      "windowsSdkVersion": "10.0.22000.0",
      "compilerPath": "C:/msys64/ucrt64/bin/g++.exe",
      "cStandard": "c17",
      "cppStandard": "c++17",
      "intelliSenseMode": "windows-gcc-x64"
    }
  ],
  "version": 4
}
```

这里的 `compilerPath` 要按自己的 MinGW 安装目录来。

:::

::: details launch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(gdb) Launch", 
      "type": "cppdbg", 
      "request": "launch", 
      "program": "${fileDirname}\\${fileBasenameNoExtension}.exe", 
      "args": [], 
      "stopAtEntry": false,
      "cwd": "${workspaceRoot}",
      "environment": [],
      "externalConsole": true, 
      "MIMode": "gdb",
      "miDebuggerPath": "E:\\Program Files\\MinGW\\bin\\gdb.exe",
      "preLaunchTask": "g++",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        }
      ]
    }
  ]
}
```

:::

::: details tasks.json

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "g++",
      "command": "g++",
      "args": [
        "-g",
        "${file}",
        "-o",
        "${fileDirname}/${fileBasenameNoExtension}.exe"
      ],
      "problemMatcher": {
        "owner": "cpp",
        "fileLocation": ["relative", "${workspaceRoot}"],
        "pattern": {
          "regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
          "file": 1,
          "line": 2,
          "column": 3,
          "severity": 4,
          "message": 5
        }
      },
      "group": {
        "kind": "build",
        "isDefault": true
      }
    }
  ]
}
```

:::

这些文件的作用参阅 [Using GCC with MinGW](https://code.visualstudio.com/docs/cpp/config-mingw#_run-helloworldcpp) 。

::: tip `settings.json`

在一篇 CSDN 热门博客 [vscode配置C/C++环境](https://blog.csdn.net/m0_62721576/article/details/127207028) 中，有介绍到配置 `settings.json` 文件。

但我发现只配置上述三个文件也能运行 C++ 代码，`settings.jso`n 的配置貌似不是必要的。

以后有需要再参阅 [settings.json](https://code.visualstudio.com/docs/getstarted/settings#_settingsjson) 去研究。

:::

## Hello, world

上述步骤都完成了，就可以运行 C++ 程序了，来写个 [Hello, World](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) 吧！

```cpp
#include <iostream>
using namespace std;

int main(){
  cout << "Hello, world!";
}
```

![hello](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/16/hello.png)

## 参考

- [Get Started with C++ and MinGW-w64 in Visual Studio Code](https://code.visualstudio.com/docs/cpp/config-mingw)
