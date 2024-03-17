import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.iZPUC10f.js";const y=JSON.parse('{"title":"Debian 10 部署 Typecho","description":"","frontmatter":{},"headers":[],"relativePath":"web-build/typecho/debian10-typecho.md","filePath":"web-build/typecho/debian10-typecho.md","lastUpdated":null}'),i={name:"web-build/typecho/debian10-typecho.md"},p=e(`<h1 id="debian-10-部署-typecho" tabindex="-1">Debian 10 部署 Typecho <a class="header-anchor" href="#debian-10-部署-typecho" aria-label="Permalink to &quot;Debian 10 部署 Typecho&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>已经建好了，链接：<a href="https://story.tangjiayan.cn/" target="_blank" rel="noreferrer">盐之</a>，欢迎参观 ~</p></div><h2 id="起因" tabindex="-1">起因 <a class="header-anchor" href="#起因" aria-label="Permalink to &quot;起因&quot;">​</a></h2><p>很喜欢 <a href="https://typecho.org/" target="_blank" rel="noreferrer">Typecho</a> 的 <a href="https://github.com/txperl/Story-for-Typecho" target="_blank" rel="noreferrer">Story</a> 主题，想基于它建一个网站。</p><p>第一时间先搜了下「Typecho 怎么部署到 Github Pages」，然后发现 Typecho 是动态的 PHP 框架，而 Github Pages 只能托管静态网站，所以 Typecho 没法部署到 Github Pages，是需要云计算支撑的。</p><details class="details custom-block"><summary>GitHub 只能托管静态网站</summary><blockquote><p>GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.</p></blockquote><p>—— <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages" target="_blank" rel="noreferrer">About GitHub Pages - GitHub Docs</a></p></details><p>初步了解过后，摆在我面前的选项有两个：</p><ol><li><a href="https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E4%B8%93%E7%94%A8%E6%9C%8D%E5%8A%A1%E5%99%A8" target="_blank" rel="noreferrer">VPS</a></li><li><a href="https://vercel.com/docs" target="_blank" rel="noreferrer">Vercel</a></li></ol><p>用 Vercel 部署的好处有：</p><ol><li>很省事儿，基本没什么运维问题</li><li>基本免费</li><li>使用简单，不用对着黑漆漆的服务器 <a href="https://zh.wikipedia.org/wiki/%E5%91%BD%E4%BB%A4%E8%A1%8C%E7%95%8C%E9%9D%A2" target="_blank" rel="noreferrer">CLI</a> 敲指令</li><li>我还算有点使用经验。之前咱在给博客添加评论功能的时候，有用到 <a href="https://waline.js.org/" target="_blank" rel="noreferrer">Waline</a> + <a href="https://leancloud.app/" target="_blank" rel="noreferrer">LeanCloud</a> + <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">Vercel</a></li></ol><p>但是——</p><p>考虑了一下，我还是选择先用 VPS 用着。</p><h2 id="选择-vps-的考量" tabindex="-1">选择 VPS 的考量 <a class="header-anchor" href="#选择-vps-的考量" aria-label="Permalink to &quot;选择 VPS 的考量&quot;">​</a></h2><h3 id="运维也不麻烦" tabindex="-1">运维也不麻烦 <a class="header-anchor" href="#运维也不麻烦" aria-label="Permalink to &quot;运维也不麻烦&quot;">​</a></h3><p>之前有在腾讯云轻量应用服务器上用过一段时间的 <a href="https://wordpress.org/" target="_blank" rel="noreferrer">WordPress</a>，我的感受是：除了建站时需要折腾一下，日常使用基本不需要运维。</p><p>我当时是安装的 <a href="https://www.bt.cn/new/index.html" target="_blank" rel="noreferrer">宝塔</a>，然后用宝塔一键部署 LNMP 环境，安装配置 WordPress 就行了。宝塔本身也有一键安装 WordPress。</p><p>日常就用 WordPress 的 Dashboard 管理网站就行，很方便。</p><p>所以据我推测，相较于 WordPress 更加轻量的 Typecho，运维成本也不大，建完站基本就不用管了。遇到问题估计也都是成熟的问题，Google 一下就行，甚至 ChatGPT 都能帮忙解决。</p><p>所以运维成本不用太在意。</p><h3 id="经济成本和数据迁移问题" tabindex="-1">经济成本和数据迁移问题 <a class="header-anchor" href="#经济成本和数据迁移问题" aria-label="Permalink to &quot;经济成本和数据迁移问题&quot;">​</a></h3><p>根据我对 <a href="https://story.tangjiayan.cn/" target="_blank" rel="noreferrer">盐之</a> 的构思定位，这个网站可能是要运营一辈子的 (•̀ᴗ• )，所以要从长远的角度考虑经济问题和数据迁移问题。</p><h4 id="经济成本" tabindex="-1">经济成本 <a class="header-anchor" href="#经济成本" aria-label="Permalink to &quot;经济成本&quot;">​</a></h4><p>事实上，我目前有两台闲置的服务器，一台是 <a href="https://www.racknerd.com/" target="_blank" rel="noreferrer">RackNerd</a> 的，25 年 3 月才到期；还有一台是 <a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">腾讯云</a> 的，不过今年12月就要到期了。</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/racknerd%26tencent-cloud.png" alt="RackNerd和腾讯云服务器"></p><p>所以我不需要买新的服务器，用它们就行。</p><p>此外，放着也是放着，不如趁机会利用起来，学点运维的知识。</p><div class="mask">用起来还能觉得没浪费金钱，好受一些 |•&#39;-&#39;•) ✧</div><p>先用 RackNerd 用到明年 3 月份，到时到期再说。</p><details class="details custom-block"><summary>到期之后咋办呢</summary><p>那到期之后咋办呢？选择有很多，例如：</p><ol><li>续费原来的 VPS</li><li>找新的便宜的 VPS，迁移过去</li><li>迁移到 Vercel</li></ol></details><details class="details custom-block"><summary>VPS 信息渠道 - 全球主机交流论坛</summary><p>之前在搭梯子的时候，有了解到 <a href="https://91ai.net/forum-45-1.html" target="_blank" rel="noreferrer">全球主机交流</a> 这个论坛，RackNerd 服务器的折扣链接就是通过这个论坛的帖子知道的。</p><p>应该还有其他的信息渠道，回头再找找。</p></details><p>便宜的 VPS 一个月 10 元以内就能买到，所以经济成本也不足为虑。</p><h4 id="数据迁移" tabindex="-1">数据迁移 <a class="header-anchor" href="#数据迁移" aria-label="Permalink to &quot;数据迁移&quot;">​</a></h4><p>至于迁移，初步了解 Typecho 本身有备份功能，迁移时不算太麻烦。</p><p>所以迁移问题也是小事儿。</p><p>综上，我选择用 VPS 部署 Typecho，下面说说详细过程吧。</p><h2 id="debian-10-部署-typecho-的过程" tabindex="-1">Debian 10 部署 Typecho 的过程 <a class="header-anchor" href="#debian-10-部署-typecho-的过程" aria-label="Permalink to &quot;Debian 10 部署 Typecho 的过程&quot;">​</a></h2><p>以下过程是在 <code>Debian 10</code> 系统下进行，用的 SSH 客户端是：</p><ul><li>SSH：<a href="https://www.netsarang.com/en/free-for-home-school/" target="_blank" rel="noreferrer">Xshell for home</a> 或 <a href="https://www.putty.org/" target="_blank" rel="noreferrer">PuTTY</a>（在家用 Xshell，在公司用 PuTTY）</li><li>SFTP：<a href="https://www.bitvise.com/" target="_blank" rel="noreferrer">Bitvise</a></li></ul><p>为了方便展示在目录中，后续标题都用二级标题。</p><h2 id="更新软件包和系统" tabindex="-1">更新软件包和系统 <a class="header-anchor" href="#更新软件包和系统" aria-label="Permalink to &quot;更新软件包和系统&quot;">​</a></h2><p>好久没用这个服务器了，先更新一下软件包列表。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>再用 <code>full-upgrade</code> 全面更新一下系统。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> full-upgrade</span></span></code></pre></div><h2 id="php-8-3" tabindex="-1">PHP 8.3 <a class="header-anchor" href="#php-8-3" aria-label="Permalink to &quot;PHP 8.3&quot;">​</a></h2><p>先下载并添加 <a href="https://en.wikipedia.org/wiki/GNU_Privacy_Guard" target="_blank" rel="noreferrer">GPG</a> key，以保证下载软件包的真实性：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lsb-release</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-transport-https</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ca-certificates</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/trusted.gpg.d/php.gpg</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://packages.sury.org/php/apt.gpg</span></span></code></pre></div><p>然后把 <a href="https://deb.sury.org/" target="_blank" rel="noreferrer">SURY</a> PHP 源放到下载源列表中：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;deb https://packages.sury.org/php/ $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lsb_release</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) main&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.d/php.list</span></span></code></pre></div><p>安装最新版 php ，及 Typecho 所需的 PHP 相关扩展包：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-mbstring</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-sqlite3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php-fpm</span></span></code></pre></div><p>然后修改 <code>php-fpm</code> 的配置文件 <code>www.conf</code>，配置 PHP 端口</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/php/8.3/fpm/pool.d/www.conf</span></span></code></pre></div><p>在 <code>www.conf</code> 文件中，把 <code>listen = /run/php/php8.3-fpm.sock</code> 注释掉，添加一行 <code>listen = 127.0.0.1:9000</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>; listen = /run/php/php8.3-fpm.sock</span></span>
<span class="line"><span>listen = 127.0.0.1:9000</span></span></code></pre></div><p>重启 php-fpm</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php8.3-fpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span></span></code></pre></div><h2 id="mariadb" tabindex="-1">MariaDB <a class="header-anchor" href="#mariadb" aria-label="Permalink to &quot;MariaDB&quot;">​</a></h2><details class="details custom-block"><summary>关于 MariaDB 的说明</summary><p><code>MariaDB</code> 是 <code>Debian 10</code> 的默认数据库。</p><p>虽然在 <a href="https://docs.typecho.org/install" target="_blank" rel="noreferrer">Typecho文档</a> 中说到：</p><blockquote><p>Mysql, PostgreSQL, SQLite 任意一种数据库支持，并在PHP中安装了相关扩展</p></blockquote><p>看上去不包括 <code>MariaDB</code>。但其实 <a href="https://en.wikipedia.org/wiki/MariaDB" target="_blank" rel="noreferrer">MariaDB</a> 是 MySQL 的一个分支，Typecho 是支持 <code>MariaDB</code> 的。</p></details><p>先安装 MariaDB 服务器端：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span></span></code></pre></div><p>然后执行 MySQL 默认脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql_secure_installation</span></span></code></pre></div><details class="details custom-block"><summary><code>FATAL ERROR: Could not find /usr/bin/mysql</code></summary><p>这一步我遇到了报错：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ mysql_secure_installation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FATAL ERROR: Could not find /usr/bin/mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you compiled from source, you need to run &#39;make install&#39; to</span></span>
<span class="line"><span>copy the software into the correct location ready for operation.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>If you are using a binary release, you must either be at the top</span></span>
<span class="line"><span>level of the extracted archive, or pass the --basedir option</span></span>
<span class="line"><span>pointing to that location.</span></span></code></pre></div><p>卸载重装，再执行 <code>mysql_secure_installation</code> 就能执行了，不知道为啥。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --purge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-client</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-common</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb-server</span></span></code></pre></div></details><p>按照提示设置就好。</p><details class="details custom-block"><summary>mysql_secure_installation</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>$ mysql_secure_installation</span></span>
<span class="line"><span></span></span>
<span class="line"><span>NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MariaDB</span></span>
<span class="line"><span>SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In order to log into MariaDB to secure it, we&#39;ll need the current</span></span>
<span class="line"><span>password for the root user.  If you&#39;ve just installed MariaDB, and</span></span>
<span class="line"><span>you haven&#39;t set the root password yet, the password will be blank,</span></span>
<span class="line"><span>so you should just press enter here.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter current password for root (enter for none):</span></span>
<span class="line"><span>OK, successfully used password, moving on...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Setting the root password ensures that nobody can log into the MariaDB</span></span>
<span class="line"><span>root user without the proper authorisation.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You already have a root password set, so you can safely answer &#39;n&#39;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Change the root password? [Y/n] y</span></span>
<span class="line"><span>New password:</span></span>
<span class="line"><span>Re-enter new password:</span></span>
<span class="line"><span>Password updated successfully!</span></span>
<span class="line"><span>Reloading privilege tables..</span></span>
<span class="line"><span>... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>By default, a MariaDB installation has an anonymous user, allowing anyone</span></span>
<span class="line"><span>to log into MariaDB without having to have a user account created for</span></span>
<span class="line"><span>them.  This is intended only for testing, and to make the installation</span></span>
<span class="line"><span>go a bit smoother.  You should remove them before moving into a</span></span>
<span class="line"><span>production environment.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remove anonymous users? [Y/n] n</span></span>
<span class="line"><span>... skipping.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Normally, root should only be allowed to connect from &#39;localhost&#39;.  This</span></span>
<span class="line"><span>ensures that someone cannot guess at the root password from the network.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disallow root login remotely? [Y/n] y</span></span>
<span class="line"><span>... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>By default, MariaDB comes with a database named &#39;test&#39; that anyone can</span></span>
<span class="line"><span>access.  This is also intended only for testing, and should be removed</span></span>
<span class="line"><span>before moving into a production environment.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remove test database and access to it? [Y/n] y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- Dropping test database...</span></span>
<span class="line"><span>... Success!</span></span>
<span class="line"><span>- Removing privileges on test database...</span></span>
<span class="line"><span>... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reloading the privilege tables will ensure that all changes made so far</span></span>
<span class="line"><span>will take effect immediately.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reload privilege tables now? [Y/n] y</span></span>
<span class="line"><span>... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Cleaning up...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>All done!  If you&#39;ve completed all of the above steps, your MariaDB</span></span>
<span class="line"><span>installation should now be secure.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Thanks for using MariaDB!</span></span></code></pre></div></details><p>然后在 MariaDB 中创建 Typecho 专属数据库：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MariaDB [(none)]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> GRANT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ALL PRIVILEGES </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> . </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">TO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;localhost&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IDENTIFIED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">BY</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;你的数据库root密码&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> WITH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> GRANT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> OPTION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Query OK, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> affected (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sec)</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MariaDB [(none)]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FLUSH PRIVILEGES;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Query OK, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> rows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> affected (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">002</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sec)</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MariaDB [(none)]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> quit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bye</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MariaDB [(none)]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CCREATE </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DATABASE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> typecho </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> CHARACTER</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> SET</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8mb4 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">COLLATE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> utf8mb4_unicode_ci;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Query OK, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> affected (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">001</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sec)</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">MariaDB [(none)]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> quit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Bye</span></span></code></pre></div><p>最后，重启 MariaDB：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb.service</span></span></code></pre></div><h2 id="建立站点文件夹" tabindex="-1">建立站点文件夹 <a class="header-anchor" href="#建立站点文件夹" aria-label="Permalink to &quot;建立站点文件夹&quot;">​</a></h2><p>这里先建立一个站点文件夹，因为后面 Nginx 配置就要用到了。</p><p>我给网站取的域名是 <code>story.tangjiayan.cn</code>，所以在 <code>/www/wwwroot</code> 下建立一个名为 <code>story.tangjiayan.cn</code> 的文件夹。</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/site-folder.png" alt="story.tangjiayan.cn 文件夹"></p><details class="details custom-block"><summary>站点文件夹名称不一定非得与网站域名相同</summary><p>站点文件夹名称不一定非得与网站域名相同，不信你问 ChatGPT ╰(°▽°)╯</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/site-folder-name_chatgpt-1.png" alt="chatgpt_site-folder-name-1"></p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/site-folder-name_chatgpt-2.png" alt="chatgpt_site-folder-name-2"></p></details><h2 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h2><p>先安装并启动 Nginx，设置自启：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><p>允许 Nginx 通过防火墙：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ufw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;Nginx HTTP’</span></span></code></pre></div><p>然后是修改 Nginx 的配置文件</p><details class="details custom-block"><summary>不知道 Nginx 的配置文件在哪？</summary><p>Nginx 的配置文件一般默认都是在 <code>/etc/nginx</code> 目录下。</p><p>真没找到，可以用 <code>nginx -t</code> 找到：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ nginx -t</span></span>
<span class="line"><span></span></span>
<span class="line"><span>nginx: the configuration file /etc/nginx/nginx.conf syntax is ok</span></span>
<span class="line"><span>nginx: configuration file /etc/nginx/nginx.conf test is successful</span></span></code></pre></div></details><p>用 Bitvise 建立 SFTP 连接，用 VS Code 打开编辑 <code>/etc/nginx/sites-available/default</code> 。</p><details class="details custom-block"><summary><code>/etc/nginx/sites-available/default</code> 文件关键内容</summary><p>Nginx 的内容我还是没完全搞懂，我是一边参考其他博客的 Nginx 配置文章，一边研读 <a href="https://nginx.org/en/docs/" target="_blank" rel="noreferrer">Nginx 文档</a> 配置的。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80 default_server;</span></span>
<span class="line"><span>    listen [::]:80 default_server;</span></span>
<span class="line"><span>    root /www/wwwroot/story.tangjiayan.cn;</span></span>
<span class="line"><span>    index index.php index.html index.htm index.nginx-debian.html;</span></span>
<span class="line"><span>    server_name _;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        if (-f $request_filename/index.html){</span></span>
<span class="line"><span>            rewrite (.*) $1/index.html break;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (-f $request_filename/index.php){</span></span>
<span class="line"><span>            rewrite (.*) $1/index.php;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (!-f $request_filename){</span></span>
<span class="line"><span>            rewrite (.*) /index.php;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try_files $uri $uri/ =404;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ \\.php$ {</span></span>
<span class="line"><span>        include snippets/fastcgi-php.conf;</span></span>
<span class="line"><span>        fastcgi_pass 127.0.0.1:9000;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location ~ /\\.ht {</span></span>
<span class="line"><span>        deny all;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div></details><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>注意选对打开方式，不然会出现 <a href="/unclassified/bitvise-access-denied.html">Bitvise Access Denied 问题</a>。</p></div><h2 id="typecho-相关配置" tabindex="-1">Typecho 相关配置 <a class="header-anchor" href="#typecho-相关配置" aria-label="Permalink to &quot;Typecho 相关配置&quot;">​</a></h2><h3 id="下载-typecho-上传到站点文件夹" tabindex="-1">下载 Typecho，上传到站点文件夹 <a class="header-anchor" href="#下载-typecho-上传到站点文件夹" aria-label="Permalink to &quot;下载 Typecho，上传到站点文件夹&quot;">​</a></h3><p>在 <a href="https://typecho.org/download" target="_blank" rel="noreferrer">这里</a> 下载最新版本的 Typecho，解压后用 Bitvise 将其内容都上传到 <code>/www/wwwroot/blog.tangjiayan.cn</code> 路径下。</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/upload-typecho.png" alt="upload-typecho"></p><h3 id="打开浏览器-进入网站后台进行配置" tabindex="-1">打开浏览器，进入网站后台进行配置 <a class="header-anchor" href="#打开浏览器-进入网站后台进行配置" aria-label="Permalink to &quot;打开浏览器，进入网站后台进行配置&quot;">​</a></h3><p>打开浏览器，输入服务器 IP 地址，就能进入 Typecho 的引导界面了。</p><p>按照提示一步步来就好。过程中我遇到了几个问题：</p><details class="details custom-block"><summary>上传目录无法写入</summary><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/upload-cannot-wirte.png" alt="upload-cannot-wirte"></p><p>解决：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /www/wwwroot/story.tangjiayan.cn/usr/uploads</span></span></code></pre></div></details><details class="details custom-block"><summary>无法连接数据库</summary><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/unable-open-database.png" alt="unable-open-database"></p><p>解决：</p><p>参考 <a href="http://astyg.shop/index.php/archives/4/" target="_blank" rel="noreferrer">这篇博客</a>，还是权限问题，干脆把整个 <code>/www/wwwroot</code> 文件夹的权限设为 <code>777</code>：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /www/wwwroot</span></span></code></pre></div></details><p>最后安装好了。</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/typecho-success.png" alt="typecho-success"></p><h3 id="更换为-story-主题" tabindex="-1">更换为 Story 主题 <a class="header-anchor" href="#更换为-story-主题" aria-label="Permalink to &quot;更换为 Story 主题&quot;">​</a></h3><p>在 <a href="https://github.com/txperl/Story-for-Typecho/releases" target="_blank" rel="noreferrer">Releases</a> 下载最新版本的 Story 主题源文件。</p><p>对于 <code>Debian 10</code>，<code>zip</code> 或者 <code>tar.gz</code> 格式的都行，我选择下载 <code>zip</code> 格式的。</p><p>解压后把文件夹改名为 <code>Story</code>，通过 Bitvise 把整个文件夹上传到 <code>/www/wwwroot/www.tangjiayan.cn/usr/themes</code> 路径下。</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/typecho/debian10-typecho/story.png" alt="story"></p><p>然后在 Typecho 后台启用 Story，根据 <a href="https://github.com/txperl/Story-for-Typecho" target="_blank" rel="noreferrer">README</a> 自定义主题就好。</p><p>然后是添加 favicon、添加归档页面等，随便搜一下就有教程。</p><h2 id="dns-和-ssl" tabindex="-1">DNS 和 SSL <a class="header-anchor" href="#dns-和-ssl" aria-label="Permalink to &quot;DNS 和 SSL&quot;">​</a></h2><p>DNS：在域名服务商配置 CNAME 指向服务器 IP 就好。</p><p>SSL：我没配置 SSL 证书，因为我的域名托管在 CloudFlare 上，它会提供 SSL。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://naiv.fun/Ops/typecho-move.html" target="_blank" rel="noreferrer">记一次 Typecho 博客迁移的经历 - Nativus&#39; Space</a></li><li><a href="https://github.com/typecho/typecho/issues/1044" target="_blank" rel="noreferrer">哥们求助！！如何部署typecho到github上？？ · Issue #1044 · typecho/typecho</a></li><li><a href="https://www.imydl.tech/ty/426.html" target="_blank" rel="noreferrer">个人博客如何选择 Typecho 和 Hexo ？ - 运维学习笔记</a></li><li><a href="https://blog.imlete.cn/article/Vercel-Deploy-Typecho.html" target="_blank" rel="noreferrer">Vercel部署Typecho动态博客 | Lete乐特 &#39;s Blog</a></li><li><a href="https://hk.v2ex.com/t/1003132" target="_blank" rel="noreferrer">nextjs 大家会选择 vercel 平台还是自己部署呢 - V2EX</a></li><li><a href="https://cloud.tencent.com/developer/article/2175395" target="_blank" rel="noreferrer">【说站】Typecho 1.2.0 来了，在安装 typecho 的时候怎么选择数据库适配器呢-腾讯云开发者社区-腾讯云</a></li><li><a href="https://wiki.dongxing.xin/pages/b1c12d" target="_blank" rel="noreferrer">Typecho 环境配置和博客搭建 | Dongxing&#39;s Wiki</a></li><li><a href="https://pongshy.com/index.php/%E5%AE%89%E8%A3%85%E4%B8%8E%E9%85%8D%E7%BD%AE/3.html" target="_blank" rel="noreferrer">Typecho安装与配置 - Pong-Blog</a></li><li><a href="https://wiki.crowncloud.net/?How_to_Install_PHP_7_4_in_Debian_10" target="_blank" rel="noreferrer">CrownCloud Wiki - How To Install PHP 7.4 In Debian 10</a></li><li><a href="https://www.cnblogs.com/lizhuming/p/16892021.html" target="_blank" rel="noreferrer">【网络】个人博客网站搭建之Typecho（命令版） - 李柱明 - 博客园</a></li><li><a href="https://www.higgs.xyz/index.php/archives/14/" target="_blank" rel="noreferrer">Typecho安装指南（一定要记得常备份啊😭） - 禾奈</a></li><li><a href="https://srin.top/index.php/archives/5/" target="_blank" rel="noreferrer">Typecho添加Favicon - 夜溅樱的茶馆</a></li></ul>`,117),t=[p];function l(h,r,o,c,d,k){return n(),a("div",null,t)}const u=s(i,[["render",l]]);export{y as __pageData,u as default};