import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.1fa2d359.js";const y=JSON.parse('{"title":"使用 npm run docs:dev 开启 VitePress 本地服务器提示 Error: listen EACCES","description":"","frontmatter":{},"headers":[],"relativePath":"web-build/vitepress/debug/listen-EACCES.md","filePath":"web-build/vitepress/debug/listen-EACCES.md","lastUpdated":null}'),l={name:"web-build/vitepress/debug/listen-EACCES.md"},p=a(`<h1 id="使用-npm-run-docs-dev-开启-vitepress-本地服务器提示-error-listen-eacces" tabindex="-1">使用 <code>npm run docs:dev</code> 开启 VitePress 本地服务器提示 <code>Error: listen EACCES</code> <a class="header-anchor" href="#使用-npm-run-docs-dev-开启-vitepress-本地服务器提示-error-listen-eacces" aria-label="Permalink to &quot;使用 \`npm run docs:dev\` 开启 VitePress 本地服务器提示 \`Error: listen EACCES\`&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>想启动 VitePress 本地服务器，执行 <code>npm run docs:dev</code> 命令时，出现 <code>Error: listen EACCES</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ npm run docs:dev</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; docs:dev</span></span>
<span class="line"><span style="color:#e1e4e8;">&gt; vitepress dev draft</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">failed to start server. error:</span></span>
<span class="line"><span style="color:#e1e4e8;">Error: listen EACCES: permission denied ::1:5173</span></span>
<span class="line"><span style="color:#e1e4e8;">    at Server.setupListenHandle [as _listen2] (node:net:1734:21)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at listenInCluster (node:net:1799:12)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at GetAddrInfoReqWrap.doListen [as callback] (node:net:1948:7)</span></span>
<span class="line"><span style="color:#e1e4e8;">    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:110:8)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ npm run docs:dev</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&gt; docs:dev</span></span>
<span class="line"><span style="color:#24292e;">&gt; vitepress dev draft</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">failed to start server. error:</span></span>
<span class="line"><span style="color:#24292e;">Error: listen EACCES: permission denied ::1:5173</span></span>
<span class="line"><span style="color:#24292e;">    at Server.setupListenHandle [as _listen2] (node:net:1734:21)</span></span>
<span class="line"><span style="color:#24292e;">    at listenInCluster (node:net:1799:12)</span></span>
<span class="line"><span style="color:#24292e;">    at GetAddrInfoReqWrap.doListen [as callback] (node:net:1948:7)</span></span>
<span class="line"><span style="color:#24292e;">    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:110:8)</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>以管理员身份运行 CMD，执行：</p><ol><li><code>net stop winnat</code></li><li><code>net start winnat</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ net stop winnat</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The Windows NAT Driver service was stopped successfully.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">$ net start winnat</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">The Windows NAT Driver service was started successfully.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ net stop winnat</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The Windows NAT Driver service was stopped successfully.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">$ net start winnat</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">The Windows NAT Driver service was started successfully.</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://stackoverflow.com/a/67968597" target="_blank" rel="noreferrer">node.js - listen EACCES: permission denied in windows - Stack Overflow</a></li></ul>`,10),o=[p];function t(r,c,i,d,u,v){return e(),n("div",null,o)}const C=s(l,[["render",t]]);export{y as __pageData,C as default};
