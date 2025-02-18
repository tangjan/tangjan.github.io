---
title: Windows 本地 Wordpress
date: 2023/08/31
tags: 
 - WordPress
 - XAMPP
---

# Windows 本地 Wordpress

因为：

1. 我的网站服务器是在海外，不论是直连还是走代理，连接都有点慢；
2. 想直接使用 wordpress 的环境进行博客草稿撰写，达到可视化预览效果；
3. 想定期本地备份；

所以我决定搭个本地 Wordpress 环境。

## 结果

![结果](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/9-result.png)

下面是过程。

## 下载解压所需文件

1. 下载安装 [XAMPP](https://www.apachefriends.org/)；
2. 下载 [Wordpress](https://wordpress.org/)；
3. 将 wordpress 压缩包解压，将解压得到的文件夹（此文件夹可自定义名称，我将其改为了 `Local-Wordpress`），放在 XAMPP 安装路径的 `xampp/htdocs` 内

![wordpress 压缩包解压](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/1-move-wordpress-to-xampp-folder.png)

## 数据库配置

启动 XAMPP 的 Apache 和 MySQL，在 phpMyAdmin 页面创建 Wordpress 数据库和数据库管理员，建议都取名为 `wordpress`，数据库格式选为 `utf8mb4_general_ci` ，并设置 Wordpress 数据库管理员的 Wordpress 数据库权限。

![启动 XAMPP 的 Apache 和 MySQL](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/XMAPP.png)

![创建 wordpress 数据库，格式选为 utf8mb4_general_ci<](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/2-create-mysql-database.png)

![创建 wordpress 数据库管理员](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/3-add-mysql-user.png)

![设置 wordpress 数据库管理员的 wordpress 数据库权限](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/4-set-wordpres-user-privileges.png)

## 打开浏览器进行配置

用浏览器打开 `http://localhost/Local-Wordpress/` (`Local-Wordpress` 替换为第3步的文件夹名称)，然后按提示一步步来就可以了。

![5](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/5.png)

![6](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/6.png)

![7](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/7.png)

![8](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/8.png)

![9](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/windows-local-wordpress/9-result.png)

## 参考

* [How to install WordPress | Adv-admin Handbook Handbook | WordPress Developer Resources](https://developer.wordpress.org/advanced-administration/before-install/howto-install/)
* [WordPress本地部署与搭建（Windows系统）\_本地部署wordpress\_wjh\_test的博客-CSDN博客](https://blog.csdn.net/qq\_42699580/article/details/107612645)
