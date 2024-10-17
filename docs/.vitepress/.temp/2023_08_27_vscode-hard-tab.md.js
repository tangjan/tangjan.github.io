import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VS Code no-hard-tabs","description":"","frontmatter":{"title":"VS Code no-hard-tabs","date":"2023/08/27","tags":["VS Code"]},"headers":[],"relativePath":"2023/08/27/vscode-hard-tab.md","filePath":"2023/08/27/vscode-hard-tab.md","lastUpdated":1728746449000}');
const _sfc_main = { name: "2023/08/27/vscode-hard-tab.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vs-code-插件-markdownlint-提示-no-hard-tabs" tabindex="-1">VS Code 插件 markdownlint 提示 “no-hard-tabs” <a class="header-anchor" href="#vs-code-插件-markdownlint-提示-no-hard-tabs" aria-label="Permalink to &quot;VS Code 插件 markdownlint 提示 “no-hard-tabs”&quot;">​</a></h1><p>VS Code 启用 <a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a> 插件编写 md 文件的时候，发现提示 <code>MD010/no-hard-tabs：Hard tabs</code>：</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/27/vscode-hard-tab/vscode-hard-tab.png" alt="vscode-hard-tab"></p><p>好奇调查了一下：</p><p>所谓的 <code>hard tab</code> 是指 <a href="https://en.wikipedia.org/wiki/Tab_key#Tab_characters" target="_blank" rel="noreferrer">制表符</a>，ASCII 码为 <code>9</code>，C语言中转义序列表示为 <code>\\t</code>。</p><p>与 <code>hard tab</code> 相对应的是 <code>soft tab</code>，是由 2个 或 4个 空格组成。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://github.com/DavidAnson/markdownlint/blob/v0.29.0/doc/md010.md" target="_blank" rel="noreferrer">markdownlint/doc/md010.md at v0.29.0 · DavidAnson/markdownlint</a></li><li><a href="https://stackoverflow.com/questions/26350689/what-are-hard-and-soft-tabs" target="_blank" rel="noreferrer">coding style - What are hard and soft tabs? - Stack Overflow</a></li><li><a href="https://en.wikipedia.org/wiki/Tab_key#Tab_characters" target="_blank" rel="noreferrer">Tab key - Wikipedia</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/08/27/vscode-hard-tab.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vscodeHardTab = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vscodeHardTab as default
};
