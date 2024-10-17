import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Git Connection timed out","description":"","frontmatter":{"title":"Git Connection timed out","date":"2023/09/14","tags":["Git"]},"headers":[],"relativePath":"2023/09/14/git-connection-timed-out.md","filePath":"2023/09/14/git-connection-timed-out.md","lastUpdated":1728721541000}');
const _sfc_main = { name: "2023/09/14/git-connection-timed-out.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="git-connection-timed-out" tabindex="-1">Git Connection timed out <a class="header-anchor" href="#git-connection-timed-out" aria-label="Permalink to &quot;Git Connection timed out&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>执行 <code>git push origin main</code> 将项目 <a href="https://git-scm.com/docs/git-push" target="_blank" rel="noreferrer">push</a> 到 GitHub 时，提示 <code>Connection timed out</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ git push origin main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh: connect to host github.com port 22: Connection timed out</span></span>
<span class="line"><span>fatal: Could not read from remote repository.</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>参考</p><ul><li><a href="https://stackoverflow.com/a/52817036" target="_blank" rel="noreferrer">git - ssh: connect to host github.com port 22: Connection timed out - Stack Overflow</a></li></ul><p>打开 Windows 用户文件夹下的 <code>.ssh/config</code>，填入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>Host github.com</span></span>
<span class="line"><span>Hostname ssh.github.com</span></span>
<span class="line"><span>Port 443</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ ssh -T git@github.com</span></span>
<span class="line"><span>Hi tangjan! You&#39;ve successfully authenticated, but GitHub does not provide shell access.</span></span></code></pre></div><p>然后再执行 <code>git push origin main</code>，就能成功 push 了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/09/14/git-connection-timed-out.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gitConnectionTimedOut = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gitConnectionTimedOut as default
};
