import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"开启 VitePress 本地服务器提示 Error listen EACCES","description":"","frontmatter":{"title":"开启 VitePress 本地服务器提示 Error listen EACCES","date":"2023/09/16","tags":["VitePress","debug"]},"headers":[],"relativePath":"2023/09/16/vitepress-listen-EACCES.md","filePath":"2023/09/16/vitepress-listen-EACCES.md","lastUpdated":1728728432000}');
const _sfc_main = { name: "2023/09/16/vitepress-listen-EACCES.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="使用-npm-run-docs-dev-开启-vitepress-本地服务器提示-error-listen-eacces" tabindex="-1">使用 <code>npm run docs:dev</code> 开启 VitePress 本地服务器提示 <code>Error: listen EACCES</code> <a class="header-anchor" href="#使用-npm-run-docs-dev-开启-vitepress-本地服务器提示-error-listen-eacces" aria-label="Permalink to &quot;使用 \`npm run docs:dev\` 开启 VitePress 本地服务器提示 \`Error: listen EACCES\`&quot;">​</a></h1><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>想启动 VitePress 本地服务器，执行 <code>npm run docs:dev</code> 命令时，出现 <code>Error: listen EACCES</code>:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ npm run docs:dev</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; docs:dev</span></span>
<span class="line"><span>&gt; vitepress dev draft</span></span>
<span class="line"><span></span></span>
<span class="line"><span>failed to start server. error:</span></span>
<span class="line"><span>Error: listen EACCES: permission denied ::1:5173</span></span>
<span class="line"><span>    at Server.setupListenHandle [as _listen2] (node:net:1734:21)</span></span>
<span class="line"><span>    at listenInCluster (node:net:1799:12)</span></span>
<span class="line"><span>    at GetAddrInfoReqWrap.doListen [as callback] (node:net:1948:7)</span></span>
<span class="line"><span>    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:110:8)</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>以管理员身份运行 CMD，执行：</p><ol><li><code>net stop winnat</code></li><li><code>net start winnat</code></li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ net stop winnat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The Windows NAT Driver service was stopped successfully.</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ net start winnat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The Windows NAT Driver service was started successfully.</span></span></code></pre></div><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://stackoverflow.com/a/67968597" target="_blank" rel="noreferrer">node.js - listen EACCES: permission denied in windows - Stack Overflow</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/09/16/vitepress-listen-EACCES.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vitepressListenEACCES = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vitepressListenEACCES as default
};
