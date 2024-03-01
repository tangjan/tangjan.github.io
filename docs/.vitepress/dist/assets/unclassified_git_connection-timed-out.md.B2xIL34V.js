import{_ as t,c as a,o as e,a4 as s}from"./chunks/framework.BY07jXTD.js";const g=JSON.parse('{"title":"GitHub Connection timed out 问题","description":"","frontmatter":{},"headers":[],"relativePath":"unclassified/git/connection-timed-out.md","filePath":"unclassified/git/connection-timed-out.md","lastUpdated":1694706254000}'),n={name:"unclassified/git/connection-timed-out.md"},o=s(`<h1 id="github-connection-timed-out-问题" tabindex="-1">GitHub <code>Connection timed out</code> 问题 <a class="header-anchor" href="#github-connection-timed-out-问题" aria-label="Permalink to &quot;GitHub \`Connection timed out\` 问题&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>Windows 11 系统下，通过 <code>git push</code> 将项目推送到 GitHub 时，提示 <code>Connection timed out</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ git push origin main</span></span>
<span class="line"><span>ssh: connect to host github.com port 22: Connection timed out</span></span>
<span class="line"><span>fatal: Could not read from remote repository.</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>打开 Windows 用户文件夹下的 <code>.ssh/config</code>，填入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>Hostname ssh.github.com</span></span>
<span class="line"><span>Port 443</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ssh -T git@github.com</span></span>
<span class="line"><span>Hi tangjan! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://stackoverflow.com/a/52817036" target="_blank" rel="noreferrer">git - ssh: connect to host github.com port 22: Connection timed out - Stack Overflow</a></li></ul>`,10),i=[o];function c(l,p,d,h,r,u){return e(),a("div",null,i)}const b=t(n,[["render",c]]);export{g as __pageData,b as default};
