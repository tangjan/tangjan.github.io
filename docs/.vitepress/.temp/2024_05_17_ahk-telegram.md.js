import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AutoHotkey 配置 Telegram 快捷键","description":"","frontmatter":{"title":"AutoHotkey 配置 Telegram 快捷键","date":"2024/05/17","tags":["AutoHotkey","Telegram"]},"headers":[],"relativePath":"2024/05/17/ahk-telegram.md","filePath":"2024/05/17/ahk-telegram.md","lastUpdated":1728728432000}');
const _sfc_main = { name: "2024/05/17/ahk-telegram.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="autohotkey-配置-telegram-快捷键" tabindex="-1">AutoHotkey 配置 Telegram 快捷键 <a class="header-anchor" href="#autohotkey-配置-telegram-快捷键" aria-label="Permalink to &quot;AutoHotkey 配置 Telegram 快捷键&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>最近在整理快捷键，想设定按下 <code>Ctrl</code> + <code>Alt</code> + <code>T</code> 唤出 Telegram 窗口，但在 Telegram 的设置找没找到，在 <a href="https://github.com/telegramdesktop/tdesktop/wiki/Keyboard-Shortcuts" target="_blank" rel="noreferrer">Telegram 官方快捷键列表</a> 也确实没有。</p><p>搜了一下，发现 <a href="https://meta.appinn.net/t/topic/34541/8" target="_blank" rel="noreferrer">小众软件论坛</a> 有老哥说可以使用 <a href="https://www.autohotkey.com/" target="_blank" rel="noreferrer">AutoHotkey</a> 。</p><h2 id="ahk-v2-脚本" tabindex="-1">AHK v2 脚本 <a class="header-anchor" href="#ahk-v2-脚本" aria-label="Permalink to &quot;AHK v2 脚本&quot;">​</a></h2><p>上述 <a href="https://meta.appinn.net/t/topic/34541/8" target="_blank" rel="noreferrer">小众软件论坛</a> 的老哥给的代码用的是 AHK v1 语法，但 AutoHotkey v1 已经弃用了，得参考 v2 的参考文档重写个脚本。</p><details class="details custom-block"><summary>相关 AHK 文档</summary><ul><li><a href="https://www.autohotkey.com/docs/v2/Hotkeys.htm#Symbols" target="_blank" rel="noreferrer">Hotkeys - Definition &amp; Usage</a></li><li><a href="https://www.autohotkey.com/docs/v2/lib/WinExist.htm" target="_blank" rel="noreferrer">WinExist</a></li><li><a href="https://www.autohotkey.com/docs/v2/lib/WinClose.htm" target="_blank" rel="noreferrer">WinClose</a></li><li><a href="https://www.autohotkey.com/docs/v2/lib/Run.htm" target="_blank" rel="noreferrer">Run</a></li></ul></details><p>结合 ChatGPT 和官方手册，写了个 AHK v2 的脚本。</p><p><code>telegram.ahk</code> :</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>^!t::</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>    if WinExist(&quot;ahk_exe Telegram.exe&quot;) {</span></span>
<span class="line"><span>        WinClose(&quot;ahk_exe Telegram.exe&quot;)</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>        Run &quot;C:\\Users\\salt\\AppData\\Roaming\\Telegram Desktop\\Telegram.exe&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>其中</p><ul><li><code>C:\\Users\\salt\\AppData\\Roaming\\Telegram Desktop\\Telegram.exe</code></li></ul><p>替换为自己的 Telegram 路径即可。</p><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><ol><li><p>下载安装 <a href="https://www.autohotkey.com/" target="_blank" rel="noreferrer">AutoHotkey</a> v2</p></li><li><p><code>Win</code> + <code>R</code> → <code>%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup</code></p></li><li><p>将上述 <code>telegram.ahk</code> 放到这里</p></li></ol><p>这样 <code>telegram.ahk</code> 就会开机自动运行了。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2024/05/17/ahk-telegram.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ahkTelegram = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ahkTelegram as default
};
