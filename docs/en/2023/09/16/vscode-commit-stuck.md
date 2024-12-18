---
title: 使用 VS Code 进行 git commit 时一直加载
date: 2023/09/16
tags: 
 - VS Code
 - Git
 - debug
---

# 使用 VS Code 进行 git commit 一直加载

## 问题

在 VS Code 的 `Source Control` 界面点击 `commit` 后，卡住，一直不能成功 commit：

![commit-stuck](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/16/vscode-commit-stuck/1-commit-stuck.png)

## 解决

依次点击 VS Code 菜单栏的 `File` - `Preferences` - `Settings`，搜索 `Use Editor As Commit Input`，取消勾选。

![commit-input](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/16/vscode-commit-stuck/2-commit-input.png)

## 参考

- [git bash可以正常commit，但是 VSCode 里不能正常commit使用的解决方法_vscode提交代码一直加载_洛洛er的博客-CSDN博客](https://blog.csdn.net/Er_Studying_Bai/article/details/128088429)
