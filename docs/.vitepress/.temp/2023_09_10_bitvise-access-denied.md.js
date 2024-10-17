import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bitvise Access Denied 问题","description":"","frontmatter":{"title":"Bitvise Access Denied 问题","date":"2023/09/10","tags":["debug","Bitvise"]},"headers":[],"relativePath":"2023/09/10/bitvise-access-denied.md","filePath":"2023/09/10/bitvise-access-denied.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2023/09/10/bitvise-access-denied.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bitvise-access-denied-问题" tabindex="-1">Bitvise Access Denied 问题 <a class="header-anchor" href="#bitvise-access-denied-问题" aria-label="Permalink to &quot;Bitvise Access Denied 问题&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>使用 <a href="https://www.bitvise.com/" target="_blank" rel="noreferrer">Bitvise</a> 通过 SFTP 配置 <code>nginx.conf</code>，鼠标双击时，出现：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Opening remote file</span></span>
<span class="line"><span>&#39;...\\nginx.conf&#39; failed.</span></span>
<span class="line"><span>Access denied.</span></span>
<span class="line"><span>See log for more information</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/10/bitvise-access-denied.png" alt="bitvise-access-denied"></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>原因是没选对打开方式，<code>右键</code> - <code>Edit With...</code>，选择 VS Code 即可。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/10/bitvise-access-denied-solution.png" alt="bitvise-access-denied-solution"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/09/10/bitvise-access-denied.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bitviseAccessDenied = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bitviseAccessDenied as default
};
