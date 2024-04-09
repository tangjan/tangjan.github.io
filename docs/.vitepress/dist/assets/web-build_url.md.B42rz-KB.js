import{_ as e,c as a,o as r,a4 as t}from"./chunks/framework.iZPUC10f.js";const f=JSON.parse('{"title":"URL","description":"","frontmatter":{},"headers":[],"relativePath":"web-build/url.md","filePath":"web-build/url.md","lastUpdated":1710679796000}'),o={name:"web-build/url.md"},i=t('<h1 id="url" tabindex="-1">URL <a class="header-anchor" href="#url" aria-label="Permalink to &quot;URL&quot;">​</a></h1><p>URL，<span style="color:red;">U</span>niform <span style="color:red;">R</span>esource <span style="color:red;">L</span>ocator，统一资源定位符，俗称网址。用于定位 <a href="https://en.wikipedia.org/wiki/Computer_network" target="_blank" rel="noreferrer">计算机网络</a> 中的 <a href="https://en.wikipedia.org/wiki/Web_resource" target="_blank" rel="noreferrer">资源</a>（如 <code>.html</code>、<code>.css</code>、<code>.txt</code>、<code>.js</code>、<code>.png</code> 等文件）。比如本文的 url 是 <code>https://notes.tangjiayan.cn/web-build/url.html</code>。</p><p>URL 是 <a href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier" target="_blank" rel="noreferrer">URI</a> 的一种。</p><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><p>URL 符合 URI 的语法。URI 由五个部分组成：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>URI = scheme &quot;:&quot; [&quot;//&quot; authority] path [&quot;?&quot; query] [&quot;#&quot; fragment]</span></span></code></pre></div><p>从左到右按重要性递减，分别是 <code>scheme</code>、<code>[authority]</code>、<code>path</code>、<code>[query]</code>、<code>[fragment]</code></p><p>用<a href="https://en.wikipedia.org/wiki/Bracket#Square_brackets" target="_blank" rel="noreferrer">方括号</a> <code>[]</code> 括起来的内容表示是可选的。</p><p>语法图：</p><p><img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/URI_syntax_diagram.svg" alt="URI_syntax_diagram"></p><h3 id="scheme" tabindex="-1">scheme <a class="header-anchor" href="#scheme" aria-label="Permalink to &quot;scheme&quot;">​</a></h3><p>协议，后随 <code>:</code>，如 <a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol" target="_blank" rel="noreferrer">http</a>、<a href="https://en.wikipedia.org/wiki/HTTP_Secure" target="_blank" rel="noreferrer">https</a> 。</p><h3 id="authority" tabindex="-1">authority <a class="header-anchor" href="#authority" aria-label="Permalink to &quot;authority&quot;">​</a></h3><p>中文翻译为 <code>凭证</code>，前随 <code>//</code>。</p><p>语法：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>authority = [userinfo &quot;@&quot;] host [&quot;:&quot; port]</span></span></code></pre></div><p>这之中最主要的部分是 <code>host</code>，它可以是 <a href="https://en.wikipedia.org/wiki/Domain_name" target="_blank" rel="noreferrer">域名</a>、<a href="https://en.wikipedia.org/wiki/IPv4" target="_blank" rel="noreferrer">IPv4</a>地址、<a href="https://en.wikipedia.org/wiki/IPv6" target="_blank" rel="noreferrer">IPv6</a> 地址等。</p><p>虽然 authority 是可选内容，但在 URL 中一般是不会省略的。</p><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>路径，网页资源存储的的路径。</p><p>如</p><ul><li><code>https://notes.tangjiayan.cn/web-build/vitepress/vitepress-github-pages.html</code></li></ul><p><code>path</code> 是 <code>/web-build/vitepress/vitepress-github-pages.html</code> 。</p><h3 id="query" tabindex="-1">query <a class="header-anchor" href="#query" aria-label="Permalink to &quot;query&quot;">​</a></h3><p>查询组件，前随 <code>?</code>。在 url 中通常是由分隔符 <code>&amp;</code> 分隔的键值对，用于处理特定的 HTTP 请求。</p><p>例：<code>https://example.com/path/to/page?name=ferret&amp;color=purple</code></p><p><code>query</code>：<code>?name=ferret&amp;color=purple</code></p><p>详细参考 <a href="https://en.wikipedia.org/wiki/Query_string" target="_blank" rel="noreferrer">Query string - Wikipedia</a></p><h3 id="fragement" tabindex="-1">fragement <a class="header-anchor" href="#fragement" aria-label="Permalink to &quot;fragement&quot;">​</a></h3><p>片段，前随 <code>#</code>。用于直接定位到 web 文件的特定文本部分。</p><p>如 <a href="https://notes.tangjiayan.cn/web-build/url.html#fragement" target="_blank" rel="noreferrer">https://notes.tangjiayan.cn/web-build/url.html#fragement</a> 中的 <code>#fragement</code>，直接定位到了本章节部分。</p><p>详细参考：<a href="https://developer.mozilla.org/en-US/docs/Web/Text_fragments" target="_blank" rel="noreferrer">Text fragments | MDN</a></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier" target="_blank" rel="noreferrer">Uniform Resource Identifier - Wikipedia</a></li><li><a href="https://en.wikipedia.org/wiki/URL" target="_blank" rel="noreferrer">URL - Wikipedia</a></li><li><a href="https://zh.wikipedia.org/wiki/%E7%BB%9F%E4%B8%80%E8%B5%84%E6%BA%90%E5%AE%9A%E4%BD%8D%E7%AC%A6" target="_blank" rel="noreferrer">统一资源定位符 - 维基百科，自由的百科全书</a></li><li><a href="https://datatracker.ietf.org/doc/html/rfc1738" target="_blank" rel="noreferrer">RFC 1738</a></li><li><a href="https://en.wikipedia.org/wiki/Query_string" target="_blank" rel="noreferrer">Query string - Wikipedia</a></li></ul>',34),n=[i];function p(l,s,d,c,h,u){return r(),a("div",null,n)}const k=e(o,[["render",p]]);export{f as __pageData,k as default};