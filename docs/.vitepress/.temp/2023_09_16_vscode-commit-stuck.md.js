import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"使用 VS Code 进行 git commit 时一直加载","description":"","frontmatter":{"title":"使用 VS Code 进行 git commit 时一直加载","date":"2023/09/16","tags":["VS Code","Git","debug"]},"headers":[],"relativePath":"2023/09/16/vscode-commit-stuck.md","filePath":"2023/09/16/vscode-commit-stuck.md","lastUpdated":1728746449000}');
const _sfc_main = { name: "2023/09/16/vscode-commit-stuck.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="使用-vs-code-进行-git-commit-一直加载" tabindex="-1">使用 VS Code 进行 git commit 一直加载 <a class="header-anchor" href="#使用-vs-code-进行-git-commit-一直加载" aria-label="Permalink to &quot;使用 VS Code 进行 git commit 一直加载&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>在 VS Code 的 <code>Source Control</code> 界面点击 <code>commit</code> 后，卡住，一直不能成功 commit：</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/16/vscode-commit-stuck/1-commit-stuck.png" alt="commit-stuck"></p><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>依次点击 VS Code 菜单栏的 <code>File</code> - <code>Preferences</code> - <code>Settings</code>，搜索 <code>Use Editor As Commit Input</code>，取消勾选。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/16/vscode-commit-stuck/2-commit-input.png" alt="commit-input"></p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/Er_Studying_Bai/article/details/128088429" target="_blank" rel="noreferrer">git bash可以正常commit，但是 VSCode 里不能正常commit使用的解决方法_vscode提交代码一直加载_洛洛er的博客-CSDN博客</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/09/16/vscode-commit-stuck.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vscodeCommitStuck = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vscodeCommitStuck as default
};
