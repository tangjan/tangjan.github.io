import{_ as e,c as t,o as a,V as i}from"./chunks/framework.BtBBSXHf.js";const k=JSON.parse('{"title":"配置 STM32F103C8T6 最小系统板 PC13 寄存器点亮板载 LED 灯","description":"","frontmatter":{},"headers":[],"relativePath":"embeded/stm32-light.md","filePath":"embeded/stm32-light.md","lastUpdated":1694168271000}'),s={name:"embeded/stm32-light.md"},n=i('<h1 id="配置-stm32f103c8t6-最小系统板-pc13-寄存器点亮板载-led-灯" tabindex="-1">配置 STM32F103C8T6 最小系统板 PC13 寄存器点亮板载 LED 灯 <a class="header-anchor" href="#配置-stm32f103c8t6-最小系统板-pc13-寄存器点亮板载-led-灯" aria-label="Permalink to &quot;配置 STM32F103C8T6 最小系统板 PC13 寄存器点亮板载 LED 灯&quot;">​</a></h1><p>本笔记的主要目的是 <span style="color:red;">复习 Keil5 的基本使用</span> 以及拾回本科电赛时的记忆。</p><p>基于寄存器进行编程的方式是不推荐的，因为寄存器太多了，编辑起来很麻烦，更多是用库函数的方式进行嵌入式开发的。</p><p>Keil5 的安装和破解就不叙述了。</p><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/overview.png" alt="overview"></p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/stm32-stlink.jpg" alt="stm32-stlink"></p><h2 id="在电脑上创建工程文件夹" tabindex="-1">在电脑上创建工程文件夹 <a class="header-anchor" href="#在电脑上创建工程文件夹" aria-label="Permalink to &quot;在电脑上创建工程文件夹&quot;">​</a></h2><p>在电脑上找个地方创建一个 Keil5 工程文件夹，文件夹的名字表明这个项目的内容。</p><p>我创建为 <code>stm32-light</code>。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/create-folder.png" alt="create-folder"></p><h2 id="keil5-创建工程" tabindex="-1">Keil5 创建工程 <a class="header-anchor" href="#keil5-创建工程" aria-label="Permalink to &quot;Keil5 创建工程&quot;">​</a></h2><h3 id="new-μvision-project" tabindex="-1">New μVision Project <a class="header-anchor" href="#new-μvision-project" aria-label="Permalink to &quot;New μVision Project&quot;">​</a></h3><p>点击 <code>Project</code> - <code>New μVision Project</code> 创建一个新工程：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/new-project.png" alt="new-project"></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>我这里出现了乱码，其中的 <code>?</code> 应是 <code>μ</code>。 乱码原因待深究。</p></div><p>工程文件命名为比较通用的 <code>Project</code>：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/new-project-naming.png" alt="new-project-naming"></p><h3 id="select-device" tabindex="-1">Select Device <a class="header-anchor" href="#select-device" aria-label="Permalink to &quot;Select Device&quot;">​</a></h3><p>然后是 Select Device 环节，选择 <code>STM32F108C8</code>：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/new-project-device-select.png" alt="new-project-device-select"></p><h3 id="manage-run-time-environment" tabindex="-1">Manage Run-Time Environment <a class="header-anchor" href="#manage-run-time-environment" aria-label="Permalink to &quot;Manage Run-Time Environment&quot;">​</a></h3><p>之后弹出的 <code>Manage Run-Time Environment</code> 环节可以关掉跳过：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/new-project-run-time-environment.png" alt="run-time-environment"></p><p>这样工程就建好了。</p><h2 id="从官方库中添加必要文件" tabindex="-1">从官方库中添加必要文件 <a class="header-anchor" href="#从官方库中添加必要文件" aria-label="Permalink to &quot;从官方库中添加必要文件&quot;">​</a></h2><h3 id="keil5-本地-创建-startup-文件夹" tabindex="-1">Keil5 / 本地 创建 <code>Startup</code> 文件夹 <a class="header-anchor" href="#keil5-本地-创建-startup-文件夹" aria-label="Permalink to &quot;Keil5 / 本地 创建 `Startup` 文件夹&quot;">​</a></h3><p>在 Keil5 工程 和 本地工程文件夹中都创建名为 <code>Startup</code> 的文件夹：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/startup-folder.png" alt="startup-folder"></p><h3 id="从官方标准外设库中添加所需文件" tabindex="-1">从官方标准外设库中添加所需文件 <a class="header-anchor" href="#从官方标准外设库中添加所需文件" aria-label="Permalink to &quot;从官方标准外设库中添加所需文件&quot;">​</a></h3><p>在 <a href="https://www.st.com/en/embedded-software/stsw-stm32054.html" target="_blank" rel="noreferrer">STM32F10x standard peripheral library - STMicroelectronics</a> 下载官方标准外设库。</p><p>在官方固件库中，将如下路径的文件复制到本地 <code>Startup</code> 文件夹中，然后添加到 Keil5 工程的 <code>Startup</code> 文件夹：</p><ul><li><code>\\Libraries\\CMSIS\\CM3\\DeviceSupport\\ST\\STM32F10x\\startup\\arm</code><ul><li><code>startup_stm32f10x_md.s</code></li></ul></li><li><code>\\Libraries\\CMSIS\\CM3\\CoreSupport</code><ul><li><code>core_cm3.c</code></li><li><code>core_cm3.h</code></li></ul></li><li><code>\\Libraries\\CMSIS\\CM3\\DeviceSupport\\ST\\STM32F10x</code><ul><li><code>stm32f10x.h</code></li><li><code>system_stm32f10x.c</code></li><li><code>system_stm32f10x.h</code></li></ul></li></ul><p>每个文件的作用可以在每个文件的文档注释里看到。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/add-files-to-startup.png" alt="add-files-to-startup"></p><h3 id="设置头文件路径" tabindex="-1">设置头文件路径 <a class="header-anchor" href="#设置头文件路径" aria-label="Permalink to &quot;设置头文件路径&quot;">​</a></h3><p>点击魔术棒按钮 (<code>Options for Target</code>)</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-magic-wand.png" alt="button-magic-wand"></p><p>在 <code>C/C++</code> - <code>Include Paths</code> 中添加 <code>Startup</code> 文件夹。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/include-paths.png" alt="include-paths"></p><h2 id="创建-main-c-编写配置寄存器代码" tabindex="-1">创建 <code>main.c</code>，编写配置寄存器代码 <a class="header-anchor" href="#创建-main-c-编写配置寄存器代码" aria-label="Permalink to &quot;创建 `main.c`，编写配置寄存器代码&quot;">​</a></h2><h3 id="创建-user-文件夹-添加-main-c" tabindex="-1">创建 <code>User</code> 文件夹，添加 <code>main.c</code> <a class="header-anchor" href="#创建-user-文件夹-添加-main-c" aria-label="Permalink to &quot;创建 `User` 文件夹，添加 `main.c`&quot;">​</a></h3><p>在 Keil5 工程 和 本地工程文件夹中都创建名为 <code>User</code> 的文件夹，在 Keil5 的 <code>User</code> 里右键创建 <code>main.c</code>。注意路径 (Location) 选择本地的 <code>User</code></p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/create-main.png" alt="create-main"></p><h3 id="main-c-include-头文件" tabindex="-1"><code>main.c</code> include 头文件 <a class="header-anchor" href="#main-c-include-头文件" aria-label="Permalink to &quot;`main.c` include 头文件&quot;">​</a></h3><p><code>右键</code> - <code>Insert &#39;#include file&#39;</code> 来 include 头文件：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/right-include.png" alt="right-include"></p><p>点击后得到：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stm32f10x.h&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // Device header</span></span></code></pre></div><h3 id="编写-main-函数" tabindex="-1">编写 <code>main</code> 函数 <a class="header-anchor" href="#编写-main-函数" aria-label="Permalink to &quot;编写 `main` 函数&quot;">​</a></h3><details class="details custom-block"><summary>TIP</summary><ul><li><code>Ctrl</code> + <code>鼠标滚轮</code> 可以放大/缩小编辑器文字大小。</li><li>在 <code>configuration</code> 中，可以 <img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-configuration.png" alt="button-configuration"><ul><li>设置编码格式 <code>Encoding</code> 为 <code>UTF-8</code></li><li>设置 C/C++ 文件的 <code>Tab Size</code> 为 <code>4</code></li></ul></li></ul></details><p>编写 <code>main</code> 代码如下：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  RCC-&gt;APB2ENR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  GPIOC-&gt;CRH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00300000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  GPIOC-&gt;ODR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="寄存器配置说明" tabindex="-1">寄存器配置说明 <a class="header-anchor" href="#寄存器配置说明" aria-label="Permalink to &quot;寄存器配置说明&quot;">​</a></h2><h3 id="点亮led灯原理" tabindex="-1">点亮LED灯原理 <a class="header-anchor" href="#点亮led灯原理" aria-label="Permalink to &quot;点亮LED灯原理&quot;">​</a></h3><p>根据 <code>STM32F103C8T6核心板原理图</code>，要点亮 <code>D2</code>，需要将 <code>PC13</code> 置为低电平。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/sch-led-pc13.png" alt="sch-led-pc13"></p><p>为了将 <code>PC13</code> 置为低电平，需要：</p><ol><li>使能 <code>GPIOC</code></li><li>配置 <code>PC13</code> 引脚模式为 <code>General purpose output push-pull</code>、<code>Output mode, max speed 50 MHz</code></li><li>配置 <code>PC13</code> 输出低电平</li></ol><p>接下来的讲解要用到 STM32F10x 参考手册，在 <a href="https://www.st.com/en/microcontrollers-microprocessors/stm32f101c8.html#documentation" target="_blank" rel="noreferrer">ST官方的这个页面</a> 可以下载。</p><h3 id="使能-gpioc" tabindex="-1">使能 GPIOC <a class="header-anchor" href="#使能-gpioc" aria-label="Permalink to &quot;使能 GPIOC&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RCC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APB2ENR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>在官方手册的 <code>7.3.7 APB2 peripheral clock enable register (RCC_APB2ENR)</code> 章节中可以看到 <code>RCC-&gt;APB2ENR</code> 这一寄存器的 <code>位4</code> (第5位) 用来使能 <code>GPIOC</code> 的时钟，设为 <code>1</code> 使能。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/RCC_APB2ENR.png" alt="RCC_APB2ENR"></p><p>所以 <code>0x00000010</code> 表示二进制的 <code>位4</code> 置 <code>1</code>，使能 <code>GPIOC</code> 的时钟，使其有效。</p><table><thead><tr><th>进制</th><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td>十六进制 0x</td><td style="text-align:center;">0000</td><td style="text-align:center;">00<span style="color:red;">1</span>0</td></tr><tr><td>二进制 0b</td><td style="text-align:center;">0000 0000 0000 0000</td><td style="text-align:center;">0000 0000 <span style="color:red;">0001</span> 0000</td></tr></tbody></table><h3 id="配置-pc13-引脚的模式" tabindex="-1">配置 PC13 引脚的模式 <a class="header-anchor" href="#配置-pc13-引脚的模式" aria-label="Permalink to &quot;配置 PC13 引脚的模式&quot;">​</a></h3><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIOC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CRH </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00300000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>在官方手册的 <code>9.2.2 Port configuration register high (GPIOx_CRH) (x=A..G)</code> 章节中可以看到，<code>GPIOx-&gt;CRH</code> 这一寄存器的 <code>位23</code> - <code>位20</code> 是配置 <code>GPIO13</code> 的模式。</p><ul><li><code>CNF13</code> 需要配置为 <code>00</code>: <code>General purpose output push-pull</code> (通用推挽输出模式)；</li><li><code>MODE13</code> 需要配置为 <code>11</code>: <code>Output mode, max speed 50 MHz</code> 。</li></ul><p>(至于为什么这样配置，见后续笔记。)</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/GPIOx-CRH.png" alt="GPIOx-CRH"></p><p>所以 <code>GPIOC-&gt;CRH</code> 配置为 <code>0x00300000</code>，表示 <code>位23</code> - <code>位20</code> 置为 <code>0011B</code> 。</p><table><thead><tr><th>进制</th><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td>十六进制 0x</td><td style="text-align:center;">00<span style="color:red;">3</span>0</td><td style="text-align:center;">0000</td></tr><tr><td>二进制 0b</td><td style="text-align:center;">0000 0000 <span style="color:red;">0011</span> 0000</td><td style="text-align:center;">0000 0000 0001 0000</td></tr></tbody></table><h3 id="配置-pc13-输出低电平" tabindex="-1">配置 PC13 输出低电平 <a class="header-anchor" href="#配置-pc13-输出低电平" aria-label="Permalink to &quot;配置 PC13 输出低电平&quot;">​</a></h3><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIOC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ODR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>在官方手册的 <code>9.2.4 Port output data register (GPIOx_ODR) (x=A..G)</code> 章节中可以看到，<code>ODR13</code> 这一位控制 <code>GPIO13</code> 的输出，写 <code>0</code>，<code>GPIO13</code> 就输出 <code>0</code>。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/GPIOx_ODR.png" alt="GPIOx_ODR"></p><p>所以 <code>GPIOC-&gt;ODR</code> 配置为 <code>0x00000000</code>，表示将 <code>ODR13</code> 置 <code>0</code>。</p><table><thead><tr><th>进制</th><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td>十六进制 0x</td><td style="text-align:center;">0000</td><td style="text-align:center;"><span style="color:red;">0</span>000</td></tr><tr><td>二进制 0b</td><td style="text-align:center;">0000 0000 0000 0000</td><td style="text-align:center;"><span style="color:red;">0000</span> 0000 0000 0000</td></tr></tbody></table><h2 id="使用-st-link-烧录程序" tabindex="-1">使用 ST-LINK <a href="https://blog.csdn.net/IT_xiao_bai0516/article/details/120748214" target="_blank" rel="noreferrer">烧录</a>程序 <a class="header-anchor" href="#使用-st-link-烧录程序" aria-label="Permalink to &quot;使用 ST-LINK [烧录](https://blog.csdn.net/IT_xiao_bai0516/article/details/120748214)程序&quot;">​</a></h2><h3 id="连接-st-link-和-stm32f103c8t6-最小系统板" tabindex="-1">连接 ST-LINK 和 STM32F103C8T6 最小系统板 <a class="header-anchor" href="#连接-st-link-和-stm32f103c8t6-最小系统板" aria-label="Permalink to &quot;连接 ST-LINK 和 STM32F103C8T6 最小系统板&quot;">​</a></h3><p>分别将 ST-LINK 和 STM32F103C8T6最小系统板 的 <code>SWCLK</code>、<code>SWDIO</code>、<code>GND</code>、<code>3.3V</code> 通过母对母杜邦线连接在一起。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/stm32-stlink.jpg" alt="stm32-stlink"></p><p>连接到电脑的 USB 口上后，ST-LINK 的蓝色的灯应该是常亮的，如果是闪烁状态很可能是没安装驱动，在 <a href="https://www.st.com/en/development-tools/stsw-link009.html" target="_blank" rel="noreferrer">ST官方下载</a> ST-LINK 的驱动并安装即可。</p><h3 id="选择-st-link-debugger" tabindex="-1">选择 ST-LINK Debugger <a class="header-anchor" href="#选择-st-link-debugger" aria-label="Permalink to &quot;选择 ST-LINK Debugger&quot;">​</a></h3><p>点击魔术棒按钮 (<code>Options for Target</code>)</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-magic-wand.png" alt="button-magic-wand"></p><p>在 <code>Debug</code> 中选择 <code>Use ST-Link Debugger</code></p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/ST-Link-debugger-select.png" alt="ST-Link-debugger-select"></p><h3 id="设置-reset-and-run" tabindex="-1">设置 <code>Reset and Run</code> <a class="header-anchor" href="#设置-reset-and-run" aria-label="Permalink to &quot;设置 `Reset and Run`&quot;">​</a></h3><p>点击 <code>Use ST-Link Debugger</code> 旁边的 <code>Settings</code>，在 <code>Flash Download</code> 中勾选 <code>Reset and Run</code>，这样使用 ST-LINK 烧录程序后，不用每次都手动按一下 STM32 板子上的复位按键。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/reset-and-run.png" alt="reset-and-run"></p><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h3><p>点击 <code>build</code> 按钮进行编译</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-build.png" alt="button-build"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Build started: Project: Project</span></span>\n<span class="line"><span>*** Using Compiler &#39;V5.06 update 6 (build 750)&#39;, folder: &#39;E:\\Program Files\\Keil_v5\\ARM\\ARMCC\\Bin&#39;</span></span>\n<span class="line"><span>Build target &#39;Target 1&#39;</span></span>\n<span class="line"><span>&quot;.\\Objects\\Project.axf&quot; - 0 Error(s), 0 Warning(s).</span></span>\n<span class="line"><span>Build Time Elapsed:  00:00:00</span></span></code></pre></div><details class="details custom-block"><summary>因缺少 ARM Complier Version 5 而编译失败</summary><p>我在编译时，出现了很多错误和警告，原因是缺少了 ARM Complier Version 5</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/light/missing-v5.png" alt="missing-v5"></p><p>解决：<a href="https://blog.csdn.net/qq_54995462/article/details/126533029" target="_blank" rel="noreferrer">KEIL5MDK最新版(3.37)安装以及旧编译器(V5)安装_keil5 mdk_二氧化碳的日常生活的博客-CSDN博客</a></p></details><h3 id="dwonload" tabindex="-1">Dwonload <a class="header-anchor" href="#dwonload" aria-label="Permalink to &quot;Dwonload&quot;">​</a></h3><p>编译完成后点击 <code>Download</code> 即可烧录程序。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-download.png" alt="button-download"></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Load &quot;Y:\\\\repositories\\\\embeded\\\\keil5 projects\\\\stm32-light\\\\Objects\\\\Project.axf&quot; </span></span>\n<span class="line"><span>Erase Done.</span></span>\n<span class="line"><span>Programming Done.</span></span>\n<span class="line"><span>Verify OK.</span></span>\n<span class="line"><span>Application running ...</span></span>\n<span class="line"><span>Flash Load finished at 23:44:28</span></span></code></pre></div><details class="details custom-block"><summary>点击 <code>Download</code> 出现闪退</summary><p>我在点击 <code>Download</code> 时，Keil5 闪退</p><p>原因是新版的 Keil 加入了盗版下载器的校验机制</p><p>参考：<a href="https://blog.csdn.net/weixin_41542513/article/details/129462111" target="_blank" rel="noreferrer">keil5.38 debug配置STlink调试，软件闪退_keil5下载程序闪退_豪哥追求卓越的博客-CSDN博客</a></p></details><details class="details custom-block"><summary>TIP: 使用 Micro-USB 进行烧录的方法</summary><p>也可以不使用 ST-LINK，而是通过 <a href="https://en.wikipedia.org/wiki/USB_hardware#Micro_connectors" target="_blank" rel="noreferrer">Micro-USB-B</a> + <a href="https://blog.csdn.net/m0_59161987/article/details/128480063" target="_blank" rel="noreferrer">USB转TTL</a> 使用串口烧录上位机软件，如 <a href="https://blog.csdn.net/qq_52102933/article/details/126882848" target="_blank" rel="noreferrer">FlyMCU</a>、<a href="https://www.st.com/en/development-tools/flasher-stm32.html" target="_blank" rel="noreferrer">STM32 Flash loader</a>，将程序烧录到 STM32。</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/MicroB_USB_Plug.jpg/255px-MicroB_USB_Plug.jpg" alt="MicroB_USB_Plug"></p><p>很多系统板板载 USB 转 CH340 电路，如正点原子的 STM32F103ZET6 最小系统板：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/zhengdian-F103ZET6.jpg" alt="zhengdian-F103ZET6"></p><p>而我的这个最小系统板上没有 USB 转 TTL 芯片 (如 CH340、FTDI)，所以需要外接 USB 转 TTL 模块。</p><p>对于我的这个 STM32F103C8T6，直接连接 Micro-USB 和电脑的 USB，只能起到供电作用。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-light/usb-to-stm32.jpg" alt="usb-to-stm32"></p><p>使用 MicroUSB 烧录程序的过程就不演示了，可参考：</p><ul><li><a href="https://blog.csdn.net/qq_52102933/article/details/126882848" target="_blank" rel="noreferrer">FlyMcu - 用于STM32芯片ISP串口程序一键下载的免费软件_零号萌新的博客-CSDN博客</a></li></ul></details><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://www.bilibili.com/video/BV1th411z7sn/?p=4" target="_blank" rel="noreferrer">STM32入门教程-2023持续更新中_[2-2] 新建工程_哔哩哔哩_bilibili</a></li><li><a href="https://www.st.com/en/microcontrollers-microprocessors/stm32f101c8.html#documentation" target="_blank" rel="noreferrer">stm32f103xx Reference manual</a></li><li><a href="https://blog.csdn.net/weixin_41542513/article/details/129462111" target="_blank" rel="noreferrer">keil5.38 debug配置STlink调试，软件闪退_keil5下载程序闪退_豪哥追求卓越的博客-CSDN博客</a></li><li><a href="https://blog.csdn.net/qq_54995462/article/details/126533029" target="_blank" rel="noreferrer">KEIL5MDK最新版(3.37)安装以及旧编译器(V5)安装_keil5 mdk_二氧化碳的日常生活的博客-CSDN博客</a></li><li><a href="https://blog.csdn.net/qq_52102933/article/details/126882848" target="_blank" rel="noreferrer">FlyMcu - 用于STM32芯片ISP串口程序一键下载的免费软件_零号萌新的博客-CSDN博客</a></li><li><a href="https://en.wikipedia.org/wiki/USB_hardware#Micro_connectors" target="_blank" rel="noreferrer">USB hardware - Wikipedia</a></li><li><a href="https://blog.csdn.net/m0_59161987/article/details/128480063" target="_blank" rel="noreferrer">STM32 —— USB 转 TTL（CH340）_ppqppl的博客-CSDN博客</a></li><li><a href="https://blog.csdn.net/qq_52102933/article/details/126882848" target="_blank" rel="noreferrer">FlyMcu - 用于STM32芯片ISP串口程序一键下载的免费软件_零号萌新的博客-CSDN博客</a></li></ul>',106),l=[n];function d(o,c,r,p,h,g){return a(),t("div",null,l)}const u=e(s,[["render",d]]);export{k as __pageData,u as default};
