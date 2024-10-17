import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Do not declare C-style arrays, use std::array<> instead","description":"","frontmatter":{"title":"Do not declare C-style arrays, use std::array<> instead","date":"2023/08/31","tags":["C++"]},"headers":[],"relativePath":"2023/08/31/cpp-array.md","filePath":"2023/08/31/cpp-array.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2023/08/31/cpp-array.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="牛客-do-not-declare-c-style-arrays-use-std-array-instead" tabindex="-1">牛客 Do not declare C-style arrays, use std::array&lt;&gt; instead <a class="header-anchor" href="#牛客-do-not-declare-c-style-arrays-use-std-array-instead" aria-label="Permalink to &quot;牛客 Do not declare C-style arrays, use std::array&lt;&gt; instead&quot;">​</a></h1><p>使用牛客在线编译器时，选择 C++ 语言定义字符数组 <code>char str\\[5000]</code> 时提示</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Do not declare C-style arrays, use std::array&lt;&gt; instead</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/cpp-array/use-array.png" alt="array"></p><p>参阅 <a href="https://www.develer.com/en/blog/three-ways-to-avoid-arrays-in-modern-cpp/" target="_blank" rel="noreferrer">Three ways to avoid arrays in modern C++</a>，C语言中的字符数组会存在很多问题，因此在Modern C++ 中，使用 <code>std::array</code> 定义字符数组。</p><div class="language-cpp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">#include</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &lt;array&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">std</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">::array</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&lt;char</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">, </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">5000</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">&gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> str;</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/08/31/cpp-array.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cppArray = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cppArray as default
};
