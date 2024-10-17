import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VS Code 运行 python 代码输出乱码","description":"","frontmatter":{"title":"VS Code 运行 python 代码输出乱码","date":"2024/05/07","tags":["VS Code","Python"]},"headers":[],"relativePath":"2024/05/07/vscode-python-garbled.md","filePath":"2024/05/07/vscode-python-garbled.md","lastUpdated":1728728432000}');
const _sfc_main = { name: "2024/05/07/vscode-python-garbled.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vs-code-运行-python-代码输出乱码" tabindex="-1">VS Code 运行 python 代码输出乱码 <a class="header-anchor" href="#vs-code-运行-python-代码输出乱码" aria-label="Permalink to &quot;VS Code 运行 python 代码输出乱码&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>按照 <a href="https://code.visualstudio.com/docs/python/python-tutorial#__install-a-python-interpreter" target="_blank" rel="noreferrer">Getting Started with Python in VS Code</a> 配置好了 VS Code 的 python 环境，编写好了 <a href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program" target="_blank" rel="noreferrer">Hello, World</a> 代码</p><div class="language-py vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">py</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">msg </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;Hello, world!&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">print</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">(msg)</span></span></code></pre></div><p>在点击 <code>Run Code</code> 按钮的时候，VS Code 的 <code>OUTPUT</code> 窗口输出了乱码</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Running] python -u &quot;y:\\repositories\\Github-Repos\\Programming-Practice\\python\\hello.py&quot;</span></span>
<span class="line"><span>&#39;python&#39; �����ڲ����ⲿ���Ҳ���ǿ����еĳ���</span></span>
<span class="line"><span>���������ļ���</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Done] exited with code=1 in 0.034 seconds</span></span></code></pre></div><p>但点击 <code>Run Python File in Dedicated Terminal</code>，在 <code>TERMINAL</code> 窗口生成的就是正常的输出</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PS Y:\\repositories\\Github-Repos\\Programming-Practice&gt; &amp; y:/repositories/Github-Repos/Programming-Practice/.venv/Scripts/python.exe y:/repositories/Github-Repos/Programming-Practice/python/hello.py</span></span>
<span class="line"><span>Hello, world!</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>有两个关键点</p><ol><li><p>在 OUTPUT 窗口输出乱码，但在 TERMINAL 窗口就正常。<br>而 TERMINAL 窗口打开时有一段加载时间，说明它是新开的，加载了最新的环境变量。</p></li><li><p>在 OUPUT 窗口输出的乱码中，有个 <code>&#39;python&#39;</code> 字眼。<br>合理猜测，这段乱码的主要意思大概是 <code>无法找到 &#39;python&#39; 命令</code>，也就是在 OUTPUT 窗口中，刚配置的环境变量未生效。</p></li></ol><p>结论：我刚配置的环境变量在 VS Code 的 <code>OUTPUT</code> 窗口还没生效。</p><p>我试着关掉所有 VS Code 窗口，重新打开，点击 <code>Run Code</code> 再次运行代码。</p><p>嘿，成了。<code>o(*￣︶￣*)o</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Running] python -u &quot;y:\\repositories\\Github-Repos\\Programming-Practice\\python\\hello.py&quot;</span></span>
<span class="line"><span>Hello, world!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Done] exited with code=0 in 0.061 seconds</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2024/05/07/vscode-python-garbled.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vscodePythonGarbled = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vscodePythonGarbled as default
};
