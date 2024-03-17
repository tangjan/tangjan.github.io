import{_ as i,c as t,o as a,a4 as s}from"./chunks/framework.iZPUC10f.js";const k=JSON.parse('{"title":"Git / GitHub 的基本使用","description":"","frontmatter":{},"headers":[],"relativePath":"unclassified/git/git-github.md","filePath":"unclassified/git/git-github.md","lastUpdated":1710679796000}'),e={name:"unclassified/git/git-github.md"},n=s('<h1 id="git-github-的基本使用" tabindex="-1">Git / GitHub 的基本使用 <a class="header-anchor" href="#git-github-的基本使用" aria-label="Permalink to &quot;Git / GitHub 的基本使用&quot;">​</a></h1><p>本文论述通过 Git 管理本地项目文件并上传到 GitHub 的基本过程。</p><h2 id="git-初始化" tabindex="-1">Git 初始化 <a class="header-anchor" href="#git-初始化" aria-label="Permalink to &quot;Git 初始化&quot;">​</a></h2><h3 id="git-下载安装" tabindex="-1">Git 下载安装 <a class="header-anchor" href="#git-下载安装" aria-label="Permalink to &quot;Git 下载安装&quot;">​</a></h3><p>参考 <a href="https://blog.csdn.net/mukes/article/details/115693833?" target="_blank" rel="noreferrer">Git 详细安装教程（详解 Git 安装过程的每一个步骤）_git安装-CSDN博客</a>。</p><h3 id="git-用户名、邮箱配置" tabindex="-1">Git 用户名、邮箱配置 <a class="header-anchor" href="#git-用户名、邮箱配置" aria-label="Permalink to &quot;Git 用户名、邮箱配置&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;JanTang&quot;</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;tangjiayan2019@gmail.com&quot;</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>请将 <code>JanTang</code> 和 <code>tangjiayan2019@gmail.com</code> 替换为自己的昵称和邮箱，可以不和 GitHub 的昵称和邮箱一致。</p></div><h2 id="使用-git-管理本地仓库" tabindex="-1">使用 Git 管理本地仓库 <a class="header-anchor" href="#使用-git-管理本地仓库" aria-label="Permalink to &quot;使用 Git 管理本地仓库&quot;">​</a></h2><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><p>在本地创建项目文件夹，正常进行项目文件开发。</p><p>我创建了名为 <code>hello</code> 的文件夹，写了一个输出 <code>Hello, world</code> 的简单 C++ 程序：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/local-create-hello.png" alt="local-create-hello"></p><h3 id="init" tabindex="-1">init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;init&quot;">​</a></h3><p>使用 <a href="https://git-scm.com/docs/git-init" target="_blank" rel="noreferrer">init</a> 命令进行本地 Git 仓库初始化。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>执行完 <code>git init</code> 后，在文件夹中会出现名为 <code>.git</code> 的文件夹：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/init.png" alt="init"></p><h3 id="add" tabindex="-1">add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;add&quot;">​</a></h3><p>使用 <a href="https://git-scm.com/docs/git-add" target="_blank" rel="noreferrer">add</a> 命令将项目内容 (与 <code>.git</code> 同目录的 文件/文件夹) 添加到本地暂存区。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><p>可以用 <a href="https://git-scm.com/docs/git-status" target="_blank" rel="noreferrer">status</a> 命令查看当前的工作树状态。</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/add-status.png" alt="add-status"></p><h3 id="commit" tabindex="-1">commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;commit&quot;">​</a></h3><p>使用 <a href="https://git-scm.com/docs/git-commit" target="_blank" rel="noreferrer">commit</a> 将项目内容从暂存区提交到本地 Git 仓库，<code>initial commit</code> 是提交注释。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commit</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;initial commit&quot;</span></span></code></pre></div><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/commit-status.png" alt="commit-status"></p><p>至此，已经可以通过 Git 在本地进行项目的版本控制了。</p><p>接下来讲述本地仓库如何上传到 GitHub 远程仓库。</p><h2 id="github-上创建仓库" tabindex="-1">GitHub 上创建仓库 <a class="header-anchor" href="#github-上创建仓库" aria-label="Permalink to &quot;GitHub 上创建仓库&quot;">​</a></h2><details class="details custom-block"><summary>GitHub 的注册及 SSH 绑定</summary><p>参考 <a href="https://blog.csdn.net/weixin_43888891/article/details/112385076" target="_blank" rel="noreferrer">github新手用法详解（建议收藏！！！）_github详解_怪 咖@的博客-CSDN博客</a></p></details><p>在 GitHub 创建一个仓库，名字最好和本地库的一样。</p><p>推荐勾选上 <code>Add a README file</code>，<code>.gitignore</code> 和 <code>license</code> 可以不选，保持为 <code>None</code>。</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/github-new-repository.png" alt="github-new-repository"></p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/details-github-new-repository.png" alt="details-github-new-repository"></p><p>然后点击 <code>Create repository</code> 即可创建一个 GitHub 仓库。</p><h2 id="本地-git-仓库上传到-github-远程库" tabindex="-1">本地 Git 仓库上传到 GitHub 远程库 <a class="header-anchor" href="#本地-git-仓库上传到-github-远程库" aria-label="Permalink to &quot;本地 Git 仓库上传到 GitHub 远程库&quot;">​</a></h2><p>本地 <code>commit</code> 后，可以通过 <a href="https://git-scm.com/docs/git-push" target="_blank" rel="noreferrer">push</a> 上传到 GitHub 远程库。</p><h3 id="用-remote-给远程库起别名" tabindex="-1">用 <code>remote</code> 给远程库起别名 <a class="header-anchor" href="#用-remote-给远程库起别名" aria-label="Permalink to &quot;用 `remote` 给远程库起别名&quot;">​</a></h3><p>使用 <a href="https://git-scm.com/docs/git-remote" target="_blank" rel="noreferrer">remote</a> 命令给远程库起别名。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:tangjan/hello.git</span></span></code></pre></div><p>其中 GitHub 仓库的 SSH url 来自：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/github-ssh-url.png" alt="github-ssh-url"></p><p>使用 <code>git remote -v</code> 查看远程库列表详细信息。</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/remote.png" alt="remote"></p><details class="details custom-block"><summary>为什么将远程库起名为 <code>origin</code></summary><p>一般是将远程库起名为 <code>origin</code>，原因参见：</p><ul><li><a href="https://www.zhihu.com/question/27712995/answer/39946123" target="_blank" rel="noreferrer">Git 里面的 origin 到底代表啥意思? - 田雅文的回答 - 知乎</a> 。</li></ul></details><h3 id="用-branch-修改主分支名称-push" tabindex="-1">用 <code>branch</code> 修改主分支名称，<code>push</code> <a class="header-anchor" href="#用-branch-修改主分支名称-push" aria-label="Permalink to &quot;用 `branch` 修改主分支名称，`push`&quot;">​</a></h3><blockquote><p>本节内容参考自：</p><ul><li><a href="https://blog.csdn.net/gongdamrgao/article/details/115032436" target="_blank" rel="noreferrer">关于git的问题：error: src refspec main does not match any_TripleGold.的博客-CSDN博客</a></li></ul></blockquote><p>本地 Git 仓库默认主分支的名称是 <code>master</code>，而 Github 仓库默认主分支的名称是 <code>main</code>，二者名称不一致，这时如果 <code>push</code> 会提示 <code>error: src refspec main does not match any</code>：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/error-src.png" alt="error-src"></p><p>解决方法是通过 <a href="https://git-scm.com/docs/git-branch" target="_blank" rel="noreferrer">branch</a> 命令将本地主分支的名称从 <code>master</code> 修改为 <code>main</code>:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><p>之后还存在一个问题：GitHub 远程库和本地库的内容不一致，导致无法 <code>push</code>：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/push-rejected.png" alt="push-rejected"></p><p>解决方法：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --allow-unrelated-histories</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin/main</span></span></code></pre></div><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/fetch-merge.png" alt="fetch-merge"></p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/merge-annotation.png" alt="merge-annotation"></p><p>然后就可以看本地库中多了缺少的 <code>README.md</code>：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/new-README.png" alt="new-README"></p><p>然后就可以通过 push 将本地库上传到 GitHub 远程库了：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre></div><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/push.png" alt="push"></p><p><code>push</code> 命令执行成功后，可以看到 GitHub 仓库里已经成功上传了本地库的项目内容：</p><p><img src="https://cdn.tangjiayan.com/notes/git/git-github/github-push-success.png" alt="github-push-success."></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/bjbz_cxy/article/details/116703787" target="_blank" rel="noreferrer">关于Git这一篇就够了_17岁boy想当攻城狮的博客-CSDN博客</a></li><li><a href="https://www.zhihu.com/question/27712995/answer/39946123" target="_blank" rel="noreferrer">Git 里面的 origin 到底代表啥意思? - 田雅文的回答 - 知乎</a></li><li><a href="https://blog.csdn.net/gongdamrgao/article/details/115032436" target="_blank" rel="noreferrer">关于git的问题：error: src refspec main does not match any_TripleGold.的博客-CSDN博客</a></li></ul>',69),h=[n];function o(l,r,p,c,d,g){return a(),t("div",null,h)}const m=i(e,[["render",o]]);export{k as __pageData,m as default};
