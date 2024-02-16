import{_ as s,c as i,o as a,V as n}from"./chunks/framework.BtBBSXHf.js";const g=JSON.parse('{"title":"使用库函数配置 STM32F103C8T6 最小系统板 PC13 端口 实现板载 LED 灯闪烁","description":"","frontmatter":{},"headers":[],"relativePath":"embeded/stm32-blink.md","filePath":"embeded/stm32-blink.md","lastUpdated":1698590652000}'),e={name:"embeded/stm32-blink.md"},l=n(`<h1 id="使用库函数配置-stm32f103c8t6-最小系统板-pc13-端口-实现板载-led-灯闪烁" tabindex="-1">使用库函数配置 STM32F103C8T6 最小系统板 PC13 端口 实现板载 LED 灯闪烁 <a class="header-anchor" href="#使用库函数配置-stm32f103c8t6-最小系统板-pc13-端口-实现板载-led-灯闪烁" aria-label="Permalink to &quot;使用库函数配置 STM32F103C8T6 最小系统板 PC13 端口 实现板载 LED 灯闪烁&quot;">​</a></h1><p>承 <a href="/embeded/stm32-light.html">配置 STM32F103C8T6 最小系统板 PC13 寄存器点亮板载 LED 灯</a>，本笔记通过库函数配置 PC13 引脚，控制其交替输出高低电平实现控制 LED 灯闪烁，用来复习库函数的基本使用。</p><p>参考自：<a href="https://www.bilibili.com/video/BV1th411z7sn" target="_blank" rel="noreferrer">STM32入门教程-2023持续更新中_哔哩哔哩_bilibili</a></p><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><video src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/stm32-blink.mp4" controls></video><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/overview.png" alt="overview"></p><h2 id="添加所需文件到工程" tabindex="-1">添加所需文件到工程 <a class="header-anchor" href="#添加所需文件到工程" aria-label="Permalink to &quot;添加所需文件到工程&quot;">​</a></h2><h3 id="新建-libraries-文件夹-添加所需文件" tabindex="-1">新建 <code>Libraries</code> 文件夹， 添加所需文件 <a class="header-anchor" href="#新建-libraries-文件夹-添加所需文件" aria-label="Permalink to &quot;新建 \`Libraries\` 文件夹，   添加所需文件&quot;">​</a></h3><p>Keil5/本地 新建 <code>Libraries</code> 文件夹，添加官方库的下述路径文件到其中：</p><ul><li><code>\\Libraries\\STM32F10x_StdPeriph_Driver\\inc</code><ul><li>所有文件</li></ul></li><li><code>\\Libraries\\STM32F10x_StdPeriph_Driver\\src</code><ul><li>所有文件</li></ul></li></ul><h3 id="新建-system-文件夹-添加-delay-h-和-delay-c" tabindex="-1">新建 <code>System</code> 文件夹，添加 <code>Delay.h</code> 和 <code>Delay.c</code> <a class="header-anchor" href="#新建-system-文件夹-添加-delay-h-和-delay-c" aria-label="Permalink to &quot;新建 \`System\` 文件夹，添加 \`Delay.h\` 和 \`Delay.c\`&quot;">​</a></h3><p>我是用的 <a href="https://jiangxiekeji.com/download.html" target="_blank" rel="noreferrer">江协科技</a> 提供的 <code>Delay.h</code> 和 <code>Delay.c</code>。</p><details class="details custom-block"><summary>Delay.h</summary><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifndef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __DELAY_H</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> __DELAY_H</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Delay_us</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> us</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Delay_s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div></details><details class="details custom-block"><summary>Delay.c</summary><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stm32f10x.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@brief</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  微秒级延时</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  xus</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 延时时长，范围：0~233015</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@retval</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 无</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Delay_us</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SysTick-&gt;LOAD </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 72</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xus;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //设置定时器重装值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SysTick-&gt;VAL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     //清空当前计数值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SysTick-&gt;CTRL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000005</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //设置时钟源为HCLK，启动定时器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SysTick-&gt;CTRL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00010000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //等待计数到0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SysTick-&gt;CTRL </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">00000004</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //关闭定时器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@brief</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  毫秒级延时</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  xms</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 延时时长，范围：0~4294967295</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@retval</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 无</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xms</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Delay_us</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@brief</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  秒级延时</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  xs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 延时时长，范围：0~4294967295</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@retval</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 无</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Delay_s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint32_t</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> xs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h3 id="向-user-文件夹添加所需文件" tabindex="-1">向 <code>User</code> 文件夹添加所需文件 <a class="header-anchor" href="#向-user-文件夹添加所需文件" aria-label="Permalink to &quot;向 \`User\` 文件夹添加所需文件&quot;">​</a></h3><p>添加官方库的下述路径文件到 <code>User</code> 文件夹中：</p><ul><li><code>\\Project\\STM32F10x_StdPeriph_Template</code><ul><li><code>stm32f10x_conf.h</code></li><li><code>stm32f10x_it.c</code></li><li><code>stm32f10x_it.h</code></li></ul></li></ul><details class="details custom-block"><summary>Keil5中 将不常修改的目录上移</summary><p>一般情况下我们只需要修改 <code>User</code> 文件夹下的文件，<code>Startup</code>、<code>Libraries</code> 里的内容并不需要修改。</p><p>点击三个箱子的按钮 (<code>File Extensions, Books and Environment...</code>)</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-extensions.png" alt="button-extensions"></p><p>可以调整文件夹的排列顺序。</p><p>把这些不用修改的组靠上放置，会看着舒服一些。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/uncommon-top.png" alt="uncommon-top"></p></details><h2 id="宏定义-use-stdperiph-driver" tabindex="-1">宏定义 <code>USE_STDPERIPH_DRIVER</code> <a class="header-anchor" href="#宏定义-use-stdperiph-driver" aria-label="Permalink to &quot;宏定义 \`USE_STDPERIPH_DRIVER\`&quot;">​</a></h2><p>右击</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stm32f10x.h&quot;</span></span></code></pre></div><p>这一行，点击 <code>Open document &#39;stm32f10x.h&#39;</code>，可以打开 <code>stm32f10x.h</code>。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/right-to-stm32f10x_conf.h.png" alt="right-to-stm32f10x_conf.h"></p><p>在 <code>stm32f10x.h</code> 临近末尾的位置，可以看到有这样的宏 <a href="https://blog.csdn.net/wordwarwordwar/article/details/84932183" target="_blank" rel="noreferrer">条件编译</a>：</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> USE_STDPERIPH_DRIVER</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  #include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stm32f10x_conf.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#endif</span></span></code></pre></div><p>点击魔术棒按钮 (<code>Options for Target</code>)</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/keil5/button-magic-wand.png" alt="button-magic-wand"></p><p>在 <code>C/C++</code> - <code>Preprocessor Symbols</code> - <code>Define</code> 填入 <code>USE_STDPERIPH_DRIVER</code></p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/preprocessor-symbols-define.png" alt="preprocessor-symbols-define"></p><details class="details custom-block"><summary>宏定义的好处</summary><p>对于上述过程，也可以直接在 <code>main.c</code> 中插入 <code>#include &quot;stm32f10x_conf.h&quot;</code>，不过使用宏定义的方式好处多一些。</p><blockquote><p>宏定义是在程序中预先定义的一些宏指令或宏函数，可以用来简化复杂逻辑、重复性代码的编写。在编译时，预处理器将宏定义替换为相应的代码或表达式，从而使程序更加高效、易于维护和修改。</p></blockquote></details><p>这里顺便在 <code>Include Pahts</code> 里加上 <code>.\\Libraries</code>、<code>.\\User</code>、<code>.\\System</code>。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/include-Libraries-User-System.png" alt="include-Libraries-User-System"></p><p>至此，基于库函数的工程就建好了，编译一下试试。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Build started: Project: Project</span></span>
<span class="line"><span>*** Using Compiler &#39;V5.06 update 6 (build 750)&#39;, folder: &#39;E:\\Program Files\\Keil_v5\\ARM\\ARMCC\\Bin&#39;</span></span>
<span class="line"><span>Build target &#39;Target 1&#39;</span></span>
<span class="line"><span>linking...</span></span>
<span class="line"><span>Program Size: Code=700 RO-data=252 RW-data=0 ZI-data=1632  </span></span>
<span class="line"><span>FromELF: creating hex file...</span></span>
<span class="line"><span>&quot;.\\Objects\\Project.axf&quot; - 0 Error(s), 0 Warning(s).</span></span>
<span class="line"><span>Build Time Elapsed:  00:00:00</span></span></code></pre></div><p>接下来要通过库函数配置 PC13 引脚的高低电平交替输出，步骤：</p><ol><li>使能 GPIOC 时钟</li><li>配置 PC13 引脚输出模式</li><li>设置 PC13 引脚高低电平交替输出</li></ol><h2 id="使能-gpioc-时钟" tabindex="-1">使能 GPIOC 时钟 <a class="header-anchor" href="#使能-gpioc-时钟" aria-label="Permalink to &quot;使能 GPIOC 时钟&quot;">​</a></h2><p>使能时钟函数是 <code>RCC_APB2PeriphClockCmd</code>，右键 - 点击 <code>Go To Definition Of &#39;RCC_APB2PeriphClockCmd&#39;</code> 可以看到它的用法。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/go-to-definition.png" alt="go-to-definition"></p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/RCC_APB2PeriphClockCmd-Keil.png" alt="RCC_APB2PeriphClockCmd-Keil"></p><p>所以 <code>RCC_APB2PeriphClockCmd</code> 的配置为：</p><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RCC_APB2PeriphClockCmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RCC_APB2Periph_GPIOC, ENABLE);</span></span></code></pre></div><details class="details custom-block"><summary>通过 <code>stm32f10x_stdperiph_lib_um.chm</code> 查询库函数</summary><p>在官方固件库的 <code>stm32f10x_stdperiph_lib_um.chm</code> 文件中也可以查到标准外设固件库函数列表及用法，这里标示得更清晰一些。</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/RCC_APB2PeriphClockCmd.png" alt="RCC_APB2PeriphClockCmd"></p></details><h2 id="配置-pc13-引脚输出模式" tabindex="-1">配置 PC13 引脚输出模式 <a class="header-anchor" href="#配置-pc13-引脚输出模式" aria-label="Permalink to &quot;配置 PC13 引脚输出模式&quot;">​</a></h2><p>配置引脚输出模式的函数是 <code>GPIO_Init</code>，用法：</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/GPIO_Init.png" alt="GPIO_Init"></p><p><code>GPIO_InitStruct</code> 这个参数需要自己定义一个 <code>GPIO_InitTypeDef</code> 类型的结构体。其名字随便起，但根据官方推荐，起为 <code>GPIO_InitStructure</code> 比较好。</p><p><code>GPIO_InitTypeDef</code> 结构体有三个参数，分别是 <code>GPIO_Mode</code>、<code>GPIO_Pin</code> 和 <code>GPIO_Speed</code>:</p><p><img src="https://cdn.tangjiayan.com/notes/embeded/stm32-blink/GPIO_InitTypeDef-Keil.png" alt="GPIO_InitTypeDef-Keil"></p><p>分别 <code>Go To Definition</code> 进行查询，得到配置：</p><ul><li><code>GPIO_Mode</code>: <code>GPIO_Mode_Out_PP</code></li><li><code>GPIO_Pin</code>: <code>GPIO_Pin_13</code></li><li><code>GPIO_Speed</code>: <code>GPIO_Speed_50MHz</code></li></ul><p>所以 <code>GPIO_Init</code> 的配置为</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIO_InitTypeDef GPIO_InitStructure;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIO_InitStructure.GPIO_Mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GPIO_Mode_Out_PP;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIO_InitStructure.GPIO_Pin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GPIO_Pin_13;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIO_InitStructure.GPIO_Speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GPIO_Speed_50MHz;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GPIO_Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GPIOC, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">GPIO_InitStructure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="设置-pc13-引脚高低电平交替输出" tabindex="-1">设置 PC13 引脚高低电平交替输出 <a class="header-anchor" href="#设置-pc13-引脚高低电平交替输出" aria-label="Permalink to &quot;设置 PC13 引脚高低电平交替输出&quot;">​</a></h2><p>使用 <code>GPIO_ResetBits</code> 和 <code>GPIO_SetBits</code> 来设置 PC13 的高低电平；</p><p>使用 <code>Delay_ms</code> 实现延时。</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Delay.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    GPIO_ResetBits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GPIOC, GPIO_Pin_13);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    GPIO_SetBits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GPIOC, GPIO_Pin_13);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="完整的-main-c" tabindex="-1">完整的 <code>main.c</code> <a class="header-anchor" href="#完整的-main-c" aria-label="Permalink to &quot;完整的 \`main.c\`&quot;">​</a></h2><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;stm32f10x.h&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  // Device header</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Delay.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    RCC_APB2PeriphClockCmd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(RCC_APB2Periph_GPIOC, ENABLE);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    GPIO_InitTypeDef GPIO_InitStructure;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    GPIO_InitStructure.GPIO_Mode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GPIO_Mode_Out_PP;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    GPIO_InitStructure.GPIO_Pin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GPIO_Pin_13;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    GPIO_InitStructure.GPIO_Speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GPIO_Speed_50MHz;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    GPIO_Init</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GPIOC, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GPIO_InitStructure);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        GPIO_ResetBits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GPIOC, GPIO_Pin_13);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        GPIO_SetBits</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(GPIOC, GPIO_Pin_13);</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Delay_ms</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,59),t=[l];function p(h,k,d,r,c,o){return a(),i("div",null,t)}const y=s(e,[["render",p]]);export{g as __pageData,y as default};
