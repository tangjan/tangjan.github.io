import{_ as s,c as i,o as a,V as n}from"./chunks/framework.BtBBSXHf.js";const c=JSON.parse('{"title":"MATLAB 拼图游戏设计","description":"","frontmatter":{},"headers":[],"relativePath":"unclassified/undergraduate/matlab-jigsaw.md","filePath":"unclassified/undergraduate/matlab-jigsaw.md","lastUpdated":1694274664000}'),h={name:"unclassified/undergraduate/matlab-jigsaw.md"},k=n(`<h1 id="matlab-拼图游戏设计" tabindex="-1">MATLAB 拼图游戏设计 <a class="header-anchor" href="#matlab-拼图游戏设计" aria-label="Permalink to &quot;MATLAB 拼图游戏设计&quot;">​</a></h1><p>这是我大三上学期《自动化软件工具》这门课的结课作业，也就是用 MATLAB 做一个项目出来。</p><p>参照 <a href="https://wuxian.blog.csdn.net/article/details/79219110" target="_blank" rel="noreferrer">基于MATLAB的拼图游戏设计_思绪无限_CSDN</a>，通过 <code>.m</code> 文件编程做了个拼图游戏。</p><p>Github：<a href="https://github.com/tangjan/MATLAB_jigsaw" target="_blank" rel="noreferrer">tangjan/MATLAB_jigsaw</a></p><p>这里的拼图指的是华容道式的拼图，不过每次只能移动一块拼图。</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/shuzi-huarongdao.jpg" alt="shuzi-huarongdao"></p><h2 id="分割拼图" tabindex="-1">分割拼图 <a class="header-anchor" href="#分割拼图" aria-label="Permalink to &quot;分割拼图&quot;">​</a></h2><p>首先要准备一张正方形图片用来拼，这里就拿我就读的中国矿业大学校徽作为对象。</p><p>校徽图片的宽度和高度都是 300 像素。因此，该 jpeg 图片在 MATLAB 工作区中的储存形式是一个 <code>300*300*3</code> 的矩阵。其中，<code>300*300</code> 表示像素点的个数，<code>3</code> 表示以 RGB 的数组形式储存像素点的颜色。</p><p>比如，这里我制作了一张只有一个白色像素点的图片（用 mspaint 制作的），在 MATLAB 中使用 <code>imread</code> 函数来读取这张图片，显示出数组信息如图：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/1-pixel-info.png" alt="1-pixel-info"></p><p><code>(255，255，255)</code> 即表示白色</p><p>接下来，为便于解释，现把整个图片分为 9 个部分，编号如图所示：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/cumt-numbering.png" alt="cumt-numbering"></p><p>其中最后一个位置用作空白块，所以为了显示出其特殊性，编号为 0 而非编号为 9。这样一来，运行 <code>x1 = image(1:100, 1:100, :)</code> 赋值语句之后，<code>x1</code> 即是表示 拼图块1 的矩阵。</p><p>同理，有：</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x2 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块2矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x3 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块3矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x4 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块4矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x5 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块5矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x6 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块6矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x7 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块7矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x8 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块8矩阵数据</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x0 = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">201</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> );   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%拼图块0矩阵数据</span></span></code></pre></div><p>可使用 <code>axis on</code> 函数显示出横纵坐标帮助理解：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/axis-on.png" alt="axis-on"></p><p>接下来定义一个从原图中分割拼图块并标记编号的函数，不妨命名为 <code>split(image, index)</code>，其中 <code>image</code> 为原图的数据矩阵，<code>index</code> 为要选择的拼图块的编号。<code>split</code> 函数的输出为矩阵 <code>x</code>，是序号为 <code>index</code> 的拼图块的数据矩阵。</p><p>比如，运行语句 <code>x5 = split(image, 5);</code> 后，<code>x5</code> 即表示校徽图片的最中央的拼图块的数据矩阵。</p><p><code>split</code> 函数内容如下：</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">index</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> index </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  %拼图块1~8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    % 计算出行数 row 以及列数 column</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    row = fix((index-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% fix 表示向零方向取整</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    column = mod(index-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x = image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+row*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*(row+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+column*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*(column+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), :);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  %拼图块0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    x = uint8(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">255</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ones(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span></code></pre></div><h2 id="按编号矩阵显示拼图" tabindex="-1">按编号矩阵显示拼图 <a class="header-anchor" href="#按编号矩阵显示拼图" aria-label="Permalink to &quot;按编号矩阵显示拼图&quot;">​</a></h2><p>一幅拼图可以由一个 <code>3*3</code> 的矩阵 <code>A</code> 来表示，接下来编写一个根据编号矩阵显示对应拼图情况的函数，命名为 <code>drawmap(A)</code>，代码如下</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> drawmap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">A</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    origin = imread(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jigsawImage.jpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    image = origin;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   % 根据编号矩阵A构建要显示的拼图数据矩阵image</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> col = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        image(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+(row-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*row, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">+(col-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">*col, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ) = split(origin, A(row,col));</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    imshow(image)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 显示拼图</span></span></code></pre></div><p>比如，假设矩阵 <code>A</code> 为</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/assuming-drawmap.png" alt="assuming-drawmap"></p><p>则运行 <code>drawmap(A)</code> 可得到：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/drawmap.png" alt="drawmap"></p><h2 id="移动拼图" tabindex="-1">移动拼图 <a class="header-anchor" href="#移动拼图" aria-label="Permalink to &quot;移动拼图&quot;">​</a></h2><p>移动拼图的过程是：点击空白处旁的拼图，则拼图将移动到空白处。而拼图块和空白块的相对位置只有四种，即上下左右四种位置，按照这个想法，定义函数为 <code>function tag = movejig(tag, row, col)</code>。其中，<code>tag</code> 表示当前拼图的编号矩阵，<code>row</code> 和 <code>col</code> 分别表示鼠标点击位置的行数和列数，输出为移动后得到的编号矩阵。</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">movejig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">tag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">col</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">% 4 个 if 分 4 种情况对不同位置处的点坐标与矩阵行列式统一</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  num = tag(row, col);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  % 鼠标位置与号码牌一致</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (row&amp;gt;1) &amp;amp;&amp;amp; (tag(row-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col)==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  % 点击位置在第 2 或 3 行，空白块在点击位置的上一行  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col) = num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row, col) = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (row&amp;lt;3) &amp;amp;&amp;amp; (tag(row+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col)==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  % 点击位置在第 1 或 2 行，空白块在点击位置的下一行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, col) = num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row, col) = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (col&amp;gt;1) &amp;amp;&amp;amp; (tag(row, col-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  % 点击位置在第 2 或 3 列，空白块在点击位置的左边一列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row, col-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) = num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row, col) = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (col&amp;lt;3) &amp;amp;&amp;amp; (tag(row, col+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  % 点击位置在第 2 或 3 列，空白块在点击位置的右边一列</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row, col+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) = num;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    tag(row, col) = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span></code></pre></div><h2 id="打乱拼图" tabindex="-1">打乱拼图 <a class="header-anchor" href="#打乱拼图" aria-label="Permalink to &quot;打乱拼图&quot;">​</a></h2><p>这里需要注意，不可以使用 <code>rand</code> 函数生成一个由数字 0~8 随机排列构成的 3*3 的矩阵作为拼图矩阵，因为那样生成的矩阵大概率无法还原为原图，这在数学上是有证明的。</p><p>这里采取另一种想法来打乱拼图，即随机移动初始拼图使其打乱。取循环 <code>400</code> 次（也可以更多，但 400 次已经足够了），每次使用 <code>rand</code> 函数随机生成模拟点击的行列数，然后调用上述定义的 <code>movejig</code> 函数进行移动。定义函数为 <code>function y = Disrupt()</code>，代码如下</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Disrupt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%随机打乱原拼图排列顺序</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  y =[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%原始的拼图矩阵</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    row = randi([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    col = randi([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    y = movejig(y, row, col);  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span></code></pre></div><h2 id="拼图主函数和回调函数" tabindex="-1">拼图主函数和回调函数 <a class="header-anchor" href="#拼图主函数和回调函数" aria-label="Permalink to &quot;拼图主函数和回调函数&quot;">​</a></h2><p>主函数是一个整合中心，用来整合调用各已定义好的子函数。</p><p>另外，很明显主函数需要重复获得鼠标点击时的位置坐标来进行拼图游戏，也要有游戏胜利的终止条件。这里采用 <code>figure</code> 的 <code>WindowButtonDownFcn</code> 属性，MATLAB 官方文件中对其介绍如下：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/WindowButtonDownFcn.png" alt="WindowButtonDownFcn"></p><p>据此可以结合 <code>set</code> 函数、<code>gcf</code> 图形句柄和函数句柄定义一个获取鼠标点击坐标的回调函数。当在图上按下鼠标左键的时候，就自动执行回调函数来获取坐标值，同时在回调函数中判断游戏是否胜利。</p><p>主函数：</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> jigsaw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%主函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Tag_A = Disrupt(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%获得打乱好的拼图编号矩阵</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  drawmap(Tag_A);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%按照编号矩阵显示拼图</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tag;        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%Tag是游戏过程中的拼图编号矩阵，定义为全局变量以方便参 数传递</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Tag = Tag_A;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  set(gcf, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;WindowButtonDownFcn&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, @ButtonDownFcn);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  %点击鼠标时调用ButtonDownFcn函数</span></span></code></pre></div><p>回调函数：</p><div class="language-matlab vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">matlab</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ButtonDownFcn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%回调函数，鼠标点击事件发生时调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pt = get(gca, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;CurrentPoint&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%获取当前鼠标点击位置坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  xpos = pt(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%鼠标点击处的横坐标实际值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ypos = pt(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%鼠标点击处的纵坐标实际值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  col = ceil(xpos/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%将横坐标值转换为列数,ceil表示向无穷大方向取整</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  row = ceil(ypos/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);          </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%将纵坐标值转换为行数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  global</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Tag;                    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%全局变量声明</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(col &amp;lt;= </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;amp;&amp;amp; col &amp;gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) &amp;amp;&amp;amp; (row &amp;lt;= </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;amp;&amp;amp; row &amp;gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%鼠标点击位置在有效范围内    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Tag = movejig(Tag, row, col);      　　　　　 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%按点击位置移动拼图</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    drawmap(Tag)                     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%显示拼图</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    order = [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%原图的编号矩阵</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    zt = abs(Tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> order);           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%比较两个矩阵,要加绝对值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sum(zt(:)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               %与原图已吻合</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　      image = imread(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jigsawImage.jpeg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　      imshow(image)                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">%游戏完成，显示全图</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　      msgbox(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;恭喜完成！&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　      pause(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">　      close</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  else</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  end</span></span></code></pre></div><p>至此，拼图游戏设计完成。</p><h2 id="结果分析" tabindex="-1">结果分析 <a class="header-anchor" href="#结果分析" aria-label="Permalink to &quot;结果分析&quot;">​</a></h2><p>点击运行程序，会显示打乱好的拼图：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/broken-jigsaw.png" alt="broken-jigsaw"></p><p>点击空白块旁边的拼图，会移动拼图块：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/click-jigsaw.png" alt="click-jigsaw"></p><p>完成拼图后会提示 “恭喜完成”：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/complete-jigsaw.png" alt="complete-jigsaw"></p><p>稍作修改，也可以将该程序改为 4<em>4、5</em>5、……的拼图游戏。主要需要修改循环次数、行列数、行列计算公式、原始数据矩阵等，disrupt 函数中的随机点击的次数也应适当增加。我做了个 <code>10*10</code> 的拼图游戏，效果如图:</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/10%2A10-jigsaw.png" alt="10%2A10-jigsaw"></p><p>另外，结合 <code>tic toc</code> 指令，可以实现游戏计时功能：</p><p><img src="https://cdn.tangjiayan.com/notes/undergraduate/matlab-jigsaw/tic-toc.png" alt="tic-toc"></p>`,58),p=[k];function l(t,e,E,d,g,r){return a(),i("div",null,p)}const o=s(h,[["render",l]]);export{c as __pageData,o as default};
