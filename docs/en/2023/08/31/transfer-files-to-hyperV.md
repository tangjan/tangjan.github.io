---
title: 向 Hyper-V 虚拟机中传输文件
date: 2023/08/31
tags: 
 - Hyper-V
---

# 向 Hyper-V 虚拟机中传输文件

## 序

在淘宝花了6块钱买了个升级密钥，把系统升级为了Windows专业版，可以使用 [Hyper-V](https://en.wikipedia.org/wiki/Hyper-V) 了。

在 [itellyou](https://msdn.itellyou.cn/) 下载了 Win7-Enterprise 镜像，然后参考

* [Hyper-V的安装和基本使用方法\_hyper-v安装\_静夜聆雨的博客-CSDN博客](https://blog.csdn.net/qq\_16051405/article/details/121121119)

安装好了虚拟机。

::: tip
我的系统语言改为了英文，因此本文的选项描述为英文。中文系统对应汉译找即可。
:::

我的系统是 Win11，虚拟机的系统是 Win7，因此可以使用 Windows 的 <span style="color:red;">局域网文件共享</span> 来传输文件给虚拟机。

## 开启虚拟机的虚拟交换机

在 Hyper-V Manager 界面右击虚拟机，点击`Settings`

![1-settings](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/1-settings.png)

在`Network Adapter` - `Virtual switch` - 选择 `Default Switch`

![default-switch](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/2-default-switch.png)

然后点击 OK，虚拟机就会弹出 设置网络位置，选 家庭网络/工作网络 均可。

![-network-position](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/3-network-position.png)

## 局域网共享文件夹

创建一个要共享给虚拟机的文件夹，右击 → `Properties` → `Sharing` → `Share...`，添加一个 `Everyone`，允许读写，然后 `Share`。

![share-network-access](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/4-share-network-access)

然后 `Win`+`R` → `cmd` → `ipconfig`，找到 `Ethernet adapter vEthernet (Default Switch)`，找到这个本地 IP 地址。

![lan-ip](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/5-lan-ip.png)

在 Win7 虚拟机中 `Win`+`R` → `\\IP地址` 回车 (或者在文件浏览器的地址栏)，就能打开局域网文件共享窗口了。

![vm-run-lan-ip](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/6-vm-run-lan-ip.png)

![share-success](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/7-share-success.png)
