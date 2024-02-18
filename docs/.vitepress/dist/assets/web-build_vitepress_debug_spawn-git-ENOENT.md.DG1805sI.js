import{_ as e,c as a,o as t,V as s}from"./chunks/framework.BtBBSXHf.js";const u=JSON.parse('{"title":"设置 lastUpdated 时出现 spawn-git-ENOENT","description":"","frontmatter":{},"headers":[],"relativePath":"web-build/vitepress/debug/spawn-git-ENOENT.md","filePath":"web-build/vitepress/debug/spawn-git-ENOENT.md","lastUpdated":1694843019000}'),i={name:"web-build/vitepress/debug/spawn-git-ENOENT.md"},n=s('<h1 id="设置-lastupdated-时出现-spawn-git-enoent" tabindex="-1">设置 lastUpdated 时出现 spawn-git-ENOENT <a class="header-anchor" href="#设置-lastupdated-时出现-spawn-git-enoent" aria-label="Permalink to &quot;设置 lastUpdated 时出现 spawn-git-ENOENT&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>在设置 VitePress 的 <a href="https://vitepress.dev/reference/default-theme-config#lastupdated" target="_blank" rel="noreferrer">lastUpdated</a> 时出现错误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[plugin:vitepress] spawn git ENOENT</span></span></code></pre></div><p><img src="https://cdn.tangjiayan.com/notes/vitepress/vitepress-spawn-git-ENOENT.png" alt="spawn-git-ENOENT"></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>原因是缺少了 Git 的环境变量，在用户环境变量的 <code>Path</code> 中添加一个 Git 的安装路径，然后关闭重新打开 CMD 即可。</p>',7),p=[n];function d(r,o,l,c,h,_){return t(),a("div",null,p)}const N=e(i,[["render",d]]);export{u as __pageData,N as default};