---
title: Configure Telegram Hotkeys with AutoHotkey
date: 2024/05/17
tags: 
 - AutoHotkey
 - Telegram
---

# Configure Telegram Hotkeys with AutoHotkey

## Goal

Recently while organizing hotkeys, I wanted to set `Ctrl` + `Alt` + `T` to toggle the Telegram window, but couldn't find this option in Telegram's settings or in the [Telegram Official Shortcuts List](https://github.com/telegramdesktop/tdesktop/wiki/Keyboard-Shortcuts).

After searching, I found someone on [Appinn Forum](https://meta.appinn.net/t/topic/34541/8) suggesting the use of [AutoHotkey](https://www.autohotkey.com/).

## AHK v2 Script

The code provided by the user on [Appinn Forum](https://meta.appinn.net/t/topic/34541/8) uses AHK v1 syntax, but since AutoHotkey v1 is deprecated, I needed to rewrite the script using v2 documentation.

::: details Related AHK Documentation

- [Hotkeys - Definition & Usage](https://www.autohotkey.com/docs/v2/Hotkeys.htm#Symbols)
- [WinExist](https://www.autohotkey.com/docs/v2/lib/WinExist.htm)
- [WinClose](https://www.autohotkey.com/docs/v2/lib/WinClose.htm)
- [Run](https://www.autohotkey.com/docs/v2/lib/Run.htm)

:::

Using ChatGPT and the official manual, I wrote an AHK v2 script.

`telegram.ahk`:

```
^!t::
{
    if WinExist("ahk_exe Telegram.exe") {
        WinClose("ahk_exe Telegram.exe")
    } else {
        Run "C:\Users\salt\AppData\Roaming\Telegram Desktop\Telegram.exe"
    }
    return
}
```

Replace

- `C:\Users\salt\AppData\Roaming\Telegram Desktop\Telegram.exe`

with your own Telegram path.

## Usage

1. Download and install [AutoHotkey](https://www.autohotkey.com/) v2
2. `Win` + `R` → `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup`
3. Place the `telegram.ahk` script here

This way, `telegram.ahk` will run automatically at startup.
