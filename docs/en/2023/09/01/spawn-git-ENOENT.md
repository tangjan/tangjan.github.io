---
title: VitePress 设置 lastUpdated 时提示 spawn-git-ENOENT
date: 2023/09/01
tags: 
  - debug
  - VitePress
---

# VitePress 设置 lastUpdated 时提示 spawn-git-ENOENT

## 问题

在设置 VitePress 的 [lastUpdated](https://vitepress.dev/reference/default-theme-config#lastupdated) 时出现错误

```
[plugin:vitepress] spawn git ENOENT
```

![spawn-git-ENOENT](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/01/spawn-git-ENOENT/vitepress-spawn-git-ENOENT.png)

## 解决

原因是缺少了 Git 的环境变量，在用户环境变量的 `Path` 中添加一个 Git 的安装路径，然后关闭重新打开 CMD 即可。
