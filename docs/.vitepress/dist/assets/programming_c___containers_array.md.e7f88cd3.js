import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.1fa2d359.js";const u=JSON.parse('{"title":"array","description":"","frontmatter":{},"headers":[],"relativePath":"programming/c++/containers/array.md","filePath":"programming/c++/containers/array.md","lastUpdated":1693417879000}'),l={name:"programming/c++/containers/array.md"},r=n(`<h1 id="array" tabindex="-1">array <a class="header-anchor" href="#array" aria-label="Permalink to &quot;array&quot;">​</a></h1><h2 id="c数组存在的问题" tabindex="-1">C数组存在的问题 <a class="header-anchor" href="#c数组存在的问题" aria-label="Permalink to &quot;C数组存在的问题&quot;">​</a></h2><p>参见 <a href="https://www.develer.com/en/blog/three-ways-to-avoid-arrays-in-modern-cpp/" target="_blank" rel="noreferrer">Three ways to avoid arrays in modern C++</a>，因为在 modern C++ 中，C数组（如 <code>int nums[MAX_N]];</code> ）被认为存在 <span style="color:red;">越界访问</span> / <span style="color:red;">大小过大</span> 的问题，所以在 modern C++ 中，C数组用 <code>&lt;array&gt;</code> 或 <code>&lt;vector&gt;</code> 替代。</p><p><code>array</code> 是定长数组，<code>vector</code> 是不定长数组。</p><h2 id="array-的特点" tabindex="-1">array 的特点 <a class="header-anchor" href="#array-的特点" aria-label="Permalink to &quot;array 的特点&quot;">​</a></h2><ol><li>Sequence（线性）</li><li>Contiguous storage（顺序存储）</li><li>Fixed-size aggregate（固定大小）</li></ol><h2 id="prototype" tabindex="-1">prototype <a class="header-anchor" href="#prototype" aria-label="Permalink to &quot;prototype&quot;">​</a></h2><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">template</span><span style="color:#E1E4E8;">&lt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">T</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#F97583;">size_t</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">N</span></span>
<span class="line"><span style="color:#E1E4E8;">&gt; </span><span style="color:#F97583;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">array</span><span style="color:#E1E4E8;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">template</span><span style="color:#24292E;">&lt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">T</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#D73A49;">size_t</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">N</span></span>
<span class="line"><span style="color:#24292E;">&gt; </span><span style="color:#D73A49;">struct</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">array</span><span style="color:#24292E;">;</span></span></code></pre></div><p><code>T</code>：<code>array</code> 存储的的元素类型</p><p><code>N</code>：<code>array</code> 的元素个数</p><p>例：</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">array</span><span style="color:#F97583;">&lt;int</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> nums </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">，</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">，</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">，</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">，</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">array</span><span style="color:#D73A49;">&lt;int</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> nums </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">，</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">，</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">，</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">，</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">};</span></span></code></pre></div><h2 id="成员函数列表" tabindex="-1">成员函数列表 <a class="header-anchor" href="#成员函数列表" aria-label="Permalink to &quot;成员函数列表&quot;">​</a></h2><h3 id="iterators-迭代器" tabindex="-1">Iterators（迭代器） <a class="header-anchor" href="#iterators-迭代器" aria-label="Permalink to &quot;Iterators（迭代器）&quot;">​</a></h3><ul><li><p>正序迭代器 <a href="https://cplusplus.com/reference/array/array/begin/" target="_blank" rel="noreferrer">begin</a> / <a href="https://cplusplus.com/reference/array/array/end/" target="_blank" rel="noreferrer">end</a> / <a href="https://cplusplus.com/reference/array/array/cbegin/" target="_blank" rel="noreferrer">cbegin</a> / <a href="https://cplusplus.com/reference/array/array/cend/" target="_blank" rel="noreferrer">cend</a></p><ul><li><code>begin</code>：返回指向 array 第一个元素的迭代器。</li><li><code>end</code>：返回指向 array <span style="color:red;">尾后元素</span> 的迭代器。</li><li><code>cbegin</code> / <code>cend</code>：返回 指向第一个元素 / 尾后元素 的迭代器，不过返回的类型是 <code>const</code>。</li></ul></li><li><p>逆序迭代器 <a href="https://cplusplus.com/reference/array/array/rbegin/" target="_blank" rel="noreferrer">rbegin</a> / <a href="https://cplusplus.com/reference/array/array/rend/" target="_blank" rel="noreferrer">rend</a> / <a href="https://cplusplus.com/reference/array/array/crbegin/" target="_blank" rel="noreferrer">crbegin</a> / <a href="https://cplusplus.com/reference/array/array/crend/" target="_blank" rel="noreferrer">crend</a></p><ul><li><code>rbegin</code>：返回指向 <span style="color:red;">逆序array</span> 第一个元素的迭代器。</li><li><code>end</code>：返回指向 <span style="color:red;">逆序array</span> <span style="color:red;">尾后元素</span> 的迭代器。</li><li><code>crbegin</code> / <code>crend</code>：返回指向 逆序array 第一个元素 / 尾后元素 的迭代器，不过返回的类型是 <code>const</code>。</li></ul></li></ul><figure><img src="https://upload.cppreference.com/mwiki/images/3/39/range-rbegin-rend.svg" alt="" width="800"><figcaption style="text-align:center;">图片引用自 <a href="https://upload.cppreference.com/mwiki/images/3/39/range-rbegin-rend.svg">cppreference</a></figcaption></figure><h3 id="capacity" tabindex="-1">Capacity <a class="header-anchor" href="#capacity" aria-label="Permalink to &quot;Capacity&quot;">​</a></h3><ul><li><a href="https://cplusplus.com/reference/array/array/size/" target="_blank" rel="noreferrer">size</a>：返回 array 中元素的数量。（区别于 <a href="https://en.cppreference.com/w/cpp/language/sizeof" target="_blank" rel="noreferrer">sizeof</a> ）</li><li><a href="https://cplusplus.com/reference/array/array/max_size/" target="_blank" rel="noreferrer">max_size</a>：返回 array 可以容纳的最大元素数。</li><li><a href="https://cplusplus.com/reference/array/array/empty/" target="_blank" rel="noreferrer">empty</a>：返回 <code>bool</code> 值，表明 array 是否为空。</li></ul><h3 id="element-access" tabindex="-1">Element access <a class="header-anchor" href="#element-access" aria-label="Permalink to &quot;Element access&quot;">​</a></h3><ul><li><a href="https://cplusplus.com/reference/array/array/operator%5B%5D/" target="_blank" rel="noreferrer">operator[n]</a>：返回 array 容器中位置 n 元素的 <span style="color:red;">引用</span>。如 <code>arr[5]</code>。</li><li><a href="https://cplusplus.com/reference/array/array/at/" target="_blank" rel="noreferrer">at</a>：和 <code>operator[n]</code> 一样，返回 array 容器中位置 n 元素的引用。如 <code>arr.at(5)</code> = <code>arr[5]</code>。</li><li><a href="https://cplusplus.com/reference/array/array/front/" target="_blank" rel="noreferrer">front</a>：返回 array 第一个元素的引用。</li><li><a href="https://cplusplus.com/reference/array/array/back/" target="_blank" rel="noreferrer">back</a>：返回 array 最后一个元素的引用。</li><li><a href="https://cplusplus.com/reference/array/array/data/" target="_blank" rel="noreferrer">data</a>：返回指向 array 中第一个元素的指针。</li></ul><h3 id="modifiers" tabindex="-1">Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;Modifiers&quot;">​</a></h3><ul><li><a href="https://cplusplus.com/reference/array/array/fill/" target="_blank" rel="noreferrer">fill</a>：将 array 中所有元素赋同一个值。</li><li><a href="https://cplusplus.com/reference/array/array/swap/" target="_blank" rel="noreferrer">swap</a>：将 array 与另一个 array 中的元素交换，两个 array 须是同类型、同大小。</li></ul><h2 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h2><h3 id="通过-for循环-和-迭代器-输出-array" tabindex="-1">通过 for循环 和 迭代器 输出 array <a class="header-anchor" href="#通过-for循环-和-迭代器-输出-array" aria-label="Permalink to &quot;通过 for循环 和 迭代器 输出 array&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;"> ()</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::vector</span><span style="color:#F97583;">&lt;int&gt;</span><span style="color:#E1E4E8;"> vec{</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> (</span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::</span><span style="color:#B392F0;">vector</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;">&gt;::iterator iter </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> vec.</span><span style="color:#B392F0;">begin</span><span style="color:#E1E4E8;">(); iter </span><span style="color:#F97583;">!=</span><span style="color:#E1E4E8;"> vec.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">(); </span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">iter){</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;old:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">iter;</span><span style="color:#6A737D;">  // 打印元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">        (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">iter) </span><span style="color:#F97583;">+=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span><span style="color:#6A737D;">  // 通过迭代器修改对应元素</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::cout </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;, new:&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">iter </span><span style="color:#F97583;">&lt;&lt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">std</span><span style="color:#E1E4E8;">::endl;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;"> ()</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::vector</span><span style="color:#D73A49;">&lt;int&gt;</span><span style="color:#24292E;"> vec{</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">4</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> (</span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::</span><span style="color:#6F42C1;">vector</span><span style="color:#24292E;">&lt;</span><span style="color:#D73A49;">int</span><span style="color:#24292E;">&gt;::iterator iter </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> vec.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(); iter </span><span style="color:#D73A49;">!=</span><span style="color:#24292E;"> vec.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">(); </span><span style="color:#D73A49;">++</span><span style="color:#24292E;">iter){</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;old:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">iter;</span><span style="color:#6A737D;">  // 打印元素</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">        (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">iter) </span><span style="color:#D73A49;">+=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span><span style="color:#6A737D;">  // 通过迭代器修改对应元素</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::cout </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;, new:&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">iter </span><span style="color:#D73A49;">&lt;&lt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">std</span><span style="color:#24292E;">::endl;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>输出：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">old:1, new:2</span></span>
<span class="line"><span style="color:#e1e4e8;">old:2, new:3</span></span>
<span class="line"><span style="color:#e1e4e8;">old:3, new:4</span></span>
<span class="line"><span style="color:#e1e4e8;">old:4, new:5</span></span>
<span class="line"><span style="color:#e1e4e8;">old:5, new:6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">old:1, new:2</span></span>
<span class="line"><span style="color:#24292e;">old:2, new:3</span></span>
<span class="line"><span style="color:#24292e;">old:3, new:4</span></span>
<span class="line"><span style="color:#24292e;">old:4, new:5</span></span>
<span class="line"><span style="color:#24292e;">old:5, new:6</span></span></code></pre></div><h3 id="array-降序排列" tabindex="-1">array 降序排列 <a class="header-anchor" href="#array-降序排列" aria-label="Permalink to &quot;array 降序排列&quot;">​</a></h3><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">sort</span><span style="color:#E1E4E8;">(nums.</span><span style="color:#B392F0;">begin</span><span style="color:#E1E4E8;">(), nums.</span><span style="color:#B392F0;">end</span><span style="color:#E1E4E8;">());</span></span>
<span class="line"><span style="color:#B392F0;">reverse</span><span style="color:#E1E4E8;">(nums.</span><span style="color:#B392F0;">begin</span><span style="color:#E1E4E8;">(), nums.</span><span style="color:#B392F0;">begin</span><span style="color:#E1E4E8;">());</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">sort</span><span style="color:#24292E;">(nums.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(), nums.</span><span style="color:#6F42C1;">end</span><span style="color:#24292E;">());</span></span>
<span class="line"><span style="color:#6F42C1;">reverse</span><span style="color:#24292E;">(nums.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">(), nums.</span><span style="color:#6F42C1;">begin</span><span style="color:#24292E;">());</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://cplusplus.com/reference/array/array/" target="_blank" rel="noreferrer">cplusplus.com/reference/array/array/</a></li><li><a href="https://en.cppreference.com/w/cpp/container/array" target="_blank" rel="noreferrer">std::array - cppreference.com</a></li><li><a href="https://blog.csdn.net/u013271656/article/details/113560304" target="_blank" rel="noreferrer">C++ 容器中 begin()、cbegin()、rbegin()、crbegin_肥喵王得福_ฅ・ω・ฅ的博客-CSDN博客</a></li></ul>`,31),o=[r];function p(t,c,y,i,E,d){return a(),e("div",null,o)}const g=s(l,[["render",p]]);export{u as __pageData,g as default};