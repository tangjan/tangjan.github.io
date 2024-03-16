import{_ as e,c as s,o as a,a4 as i}from"./chunks/framework.BY07jXTD.js";const b=JSON.parse('{"title":"Bitvise Access Denied 问题","description":"","frontmatter":{},"headers":[],"relativePath":"unclassified/bitvise-access-denied.md","filePath":"unclassified/bitvise-access-denied.md","lastUpdated":1694396499000}'),n={name:"unclassified/bitvise-access-denied.md"},t=i(`<h1 id="bitvise-access-denied-问题" tabindex="-1">Bitvise Access Denied 问题 <a class="header-anchor" href="#bitvise-access-denied-问题" aria-label="Permalink to &quot;Bitvise Access Denied 问题&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>使用 <a href="https://www.bitvise.com/" target="_blank" rel="noreferrer">Bitvise</a> 通过 SFTP 配置 <code>nginx.conf</code>，鼠标双击时，出现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Opening remote file</span></span>
<span class="line"><span>&#39;...\\nginx.conf&#39; failed.</span></span>
<span class="line"><span>Access denied.</span></span>
<span class="line"><span>See log for more information</span></span></code></pre></div><p><img src="https://cdn.tangjiayan.com/notes/common/bitvise-access-denied.png" alt="bitvise-access-denied"></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>原因是没选对打开方式，<code>右键</code> - <code>Edit With...</code>，选择 VS Code 即可。</p><p><img src="https://cdn.tangjiayan.com/notes/common/bitvise-access-denied-solution.png" alt="bitvise-access-denied-solution"></p>`,8),c=[t];function o(d,p,l,r,h,_){return a(),s("div",null,c)}const f=e(n,[["render",o]]);export{b as __pageData,f as default};
