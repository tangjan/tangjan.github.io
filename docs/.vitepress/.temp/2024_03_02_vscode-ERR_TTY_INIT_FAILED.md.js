import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"运行 npx vitepress init 时出现 ERR_TTY_INIT_FAILED","description":"","frontmatter":{"title":"运行 `npx vitepress init` 时出现 `ERR_TTY_INIT_FAILED`","date":"2024/03/02","tags":["VitePress","debug"]},"headers":[],"relativePath":"2024/03/02/vscode-ERR_TTY_INIT_FAILED.md","filePath":"2024/03/02/vscode-ERR_TTY_INIT_FAILED.md","lastUpdated":1728746449000}');
const _sfc_main = { name: "2024/03/02/vscode-ERR_TTY_INIT_FAILED.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="运行-npx-vitepress-init-时出现-err-tty-init-failed" tabindex="-1">运行 <code>npx vitepress init</code> 时出现 <code>ERR_TTY_INIT_FAILED</code> <a class="header-anchor" href="#运行-npx-vitepress-init-时出现-err-tty-init-failed" aria-label="Permalink to &quot;运行 \`npx vitepress init\` 时出现 \`ERR_TTY_INIT_FAILED\`&quot;">​</a></h1><p>想给笔记站加个时间轴页面，想试一试 <a href="https://github.com/brc-dd/vitepress-blog-demo/tree/main" target="_blank" rel="noreferrer">brc-dd/vitepress-blog-demo</a> 看一看效果。</p><p>按照 <a href="https://vitepress.dev/guide/getting-started" target="_blank" rel="noreferrer">Getting Started | VitePress</a>，先执行 <code>npm add -D vitepress</code> ：</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ npm add -D vitepress</span></span>
<span class="line"><span></span></span>
<span class="line"><span>added 78 packages in 25s</span></span>
<span class="line"><span></span></span>
<span class="line"><span>10 packages are looking for funding</span></span>
<span class="line"><span>run npm fund for details</span></span></code></pre></div><p>然后在执行 <code>npx vitepress init</code> 时出了问题</p><details class="details custom-block"><summary><code>npx vitepress init</code></summary><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>$ npx vitepress init</span></span>
<span class="line"><span></span></span>
<span class="line"><span>T  Welcome to VitePress!</span></span>
<span class="line"><span>node:internal/errors:563</span></span>
<span class="line"><span>    ErrorCaptureStackTrace(err);</span></span>
<span class="line"><span>    ^</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SystemError [ERR_TTY_INIT_FAILED]: TTY initialization failed: uv_tty_init retured EBADF (bad file descriptor)</span></span>
<span class="line"><span>    at new SystemError (node:internal/errors:259:5)</span></span>
<span class="line"><span>    at new NodeError (node:internal/errors:370:7)</span></span>
<span class="line"><span>    at new WriteStream (node:tty:93:11)</span></span>
<span class="line"><span>    at oD.prompt (file:///E:/github/vitepress-timeline/node_modules/vitepress/dst/node/serve-Bbz0dL6j.js:46852:704)</span></span>
<span class="line"><span>    at te (file:///E:/github/vitepress-timeline/node_modules/vitepress/dist/nod/serve-Bbz0dL6j.js:46867:7)</span></span>
<span class="line"><span>    at root (file:///E:/github/vitepress-timeline/node_modules/vitepress/dist/nde/serve-Bbz0dL6j.js:48966:19)</span></span>
<span class="line"><span>    at he (file:///E:/github/vitepress-timeline/node_modules/vitepress/dist/nod/serve-Bbz0dL6j.js:46884:95)</span></span>
<span class="line"><span>    at init (file:///E:/github/vitepress-timeline/node_modules/vitepress/dist/nde/serve-Bbz0dL6j.js:48964:25)</span></span>
<span class="line"><span>    at file:///E:/github/vitepress-timeline/node_modules/vitepress/dist/node/cl.js:423:3</span></span>
<span class="line"><span>    at ModuleJob.run (node:internal/modules/esm/module_job:218:25) {</span></span>
<span class="line"><span>  code: &#39;ERR_TTY_INIT_FAILED&#39;,</span></span>
<span class="line"><span>  info: {</span></span>
<span class="line"><span>    errno: -4083,</span></span>
<span class="line"><span>    code: &#39;EBADF&#39;,</span></span>
<span class="line"><span>    message: &#39;bad file descriptor&#39;,</span></span>
<span class="line"><span>    syscall: &#39;uv_tty_init&#39;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  errno: [Getter/Setter],</span></span>
<span class="line"><span>  syscall: [Getter/Setter]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Node.js v20.11.1</span></span></code></pre></div></details><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>改用 VS Code 终端执行 <code>npx vitepress init</code>。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/vscode-ERR_TTY_INIT_FAILED/vscode-ERR_TTY_INIT_FAILED.png" alt="vscode-ERR_TTY_INIT_FAILED"></p><p>解决方法提供者不知道为啥，我也不知道为啥。。</p><p>这种问题 ChatGPT 就帮不上忙了。。🤣</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://stackoverflow.com/questions/75750730/cannot-create-sveltekit-app-err-tty-init-failed-uv-tty-init-returned-ebadf-ba" target="_blank" rel="noreferrer">node.js - Cannot create Sveltekit app - ERR_TTY_INIT_FAILED uv_tty_init returned EBADF (bad file descriptor) - Stack Overflow</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2024/03/02/vscode-ERR_TTY_INIT_FAILED.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vscodeERR_TTY_INIT_FAILED = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vscodeERR_TTY_INIT_FAILED as default
};
