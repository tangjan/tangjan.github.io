import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VitePress 设置 lastUpdated 时提示 spawn-git-ENOENT","description":"","frontmatter":{"title":"VitePress 设置 lastUpdated 时提示 spawn-git-ENOENT","date":"2023/09/01","tags":["debug","VitePress"]},"headers":[],"relativePath":"2023/09/01/spawn-git-ENOENT.md","filePath":"2023/09/01/spawn-git-ENOENT.md","lastUpdated":1728746449000}');
const _sfc_main = { name: "2023/09/01/spawn-git-ENOENT.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vitepress-设置-lastupdated-时提示-spawn-git-enoent" tabindex="-1">VitePress 设置 lastUpdated 时提示 spawn-git-ENOENT <a class="header-anchor" href="#vitepress-设置-lastupdated-时提示-spawn-git-enoent" aria-label="Permalink to &quot;VitePress 设置 lastUpdated 时提示 spawn-git-ENOENT&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>在设置 VitePress 的 <a href="https://vitepress.dev/reference/default-theme-config#lastupdated" target="_blank" rel="noreferrer">lastUpdated</a> 时出现错误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[plugin:vitepress] spawn git ENOENT</span></span></code></pre></div><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/01/spawn-git-ENOENT/vitepress-spawn-git-ENOENT.png" alt="spawn-git-ENOENT"></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>原因是缺少了 Git 的环境变量，在用户环境变量的 <code>Path</code> 中添加一个 Git 的安装路径，然后关闭重新打开 CMD 即可。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/09/01/spawn-git-ENOENT.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const spawnGitENOENT = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  spawnGitENOENT as default
};
