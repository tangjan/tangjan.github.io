import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"VS Code 同步扩展","description":"","frontmatter":{"title":"VS Code 同步扩展","date":"2024/04/28","tags":["VS Code"]},"headers":[],"relativePath":"2024/04/28/vscode-sync-extensions.md","filePath":"2024/04/28/vscode-sync-extensions.md","lastUpdated":1728746449000}');
const _sfc_main = { name: "2024/04/28/vscode-sync-extensions.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vs-code-同步扩展" tabindex="-1">VS Code 同步扩展 <a class="header-anchor" href="#vs-code-同步扩展" aria-label="Permalink to &quot;VS Code 同步扩展&quot;">​</a></h1><p>在公司使用 VS Code 编写 markdown 文件时，发现没有 <a href="https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint" target="_blank" rel="noreferrer">markdownlint</a> 的提示，于是意识到公司电脑上的 VS Code 没有同步安装账号的扩展。</p><p>有点纳闷的是，公司电脑上的 VS Code 已经登录了账号，也开启了 <code>Cloud Changes</code>（如下图），为什么还没同步扩展呢？</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/04/28/vscode-sync-extensions/1-already-logged-in.png" alt="already-logged-in"></p><p>于是调查了一圈，找到了答案。</p><h2 id="clound-changes-和-settings-sync-是两码事" tabindex="-1"><code>Clound Changes</code> 和 <code>Settings Sync</code> 是两码事 <a class="header-anchor" href="#clound-changes-和-settings-sync-是两码事" aria-label="Permalink to &quot;\`Clound Changes\` 和 \`Settings Sync\` 是两码事&quot;">​</a></h2><p><code>Cloud Changes</code>: 参见 <a href="https://code.visualstudio.com/docs/sourcecontrol/github#_continue-working-on" target="_blank" rel="noreferrer">Continue Working On...</a> ，是用来进行项目跟踪的。</p><p><code>Settings Sync</code>: 参见 <a href="https://code.visualstudio.com/docs/editor/settings-sync" target="_blank" rel="noreferrer">Settings Sync in Visual Studio Code</a>，这个才是我需要的扩展同步功能。</p><h2 id="如何同步扩展" tabindex="-1">如何同步扩展 <a class="header-anchor" href="#如何同步扩展" aria-label="Permalink to &quot;如何同步扩展&quot;">​</a></h2><p>参考的 <a href="https://betterprogramming.pub/sync-visual-studio-code-settings-extensions-shortcuts-across-multiple-devices-9fa6a980f25e" target="_blank" rel="noreferrer">这篇文章</a>，用 <a href="https://www.google.com/slides/about/" target="_blank" rel="noreferrer">Google Slides</a> 做了一张图来表述步骤。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/04/28/vscode-sync-extensions/2-steps.png" alt="步骤图示"></p><details class="details custom-block"><summary>VS Code 搜索内容开头的 <code>&gt;</code></summary><p>VS Code 搜索框内容以 <a href="https://en.wikipedia.org/wiki/Greater-than_sign" target="_blank" rel="noreferrer">&gt;</a> 开头时表示 <code>Show and Run Commands</code>，参见 <a href="https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette" target="_blank" rel="noreferrer">Command Palette</a>。</p></details></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2024/04/28/vscode-sync-extensions.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vscodeSyncExtensions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vscodeSyncExtensions as default
};
