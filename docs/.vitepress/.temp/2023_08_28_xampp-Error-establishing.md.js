import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"XAMPP Error establishing a database connection","description":"","frontmatter":{"title":"XAMPP Error establishing a database connection","date":"2023/08/28","tags":["debug","XAMPP","WordPress"]},"headers":[],"relativePath":"2023/08/28/xampp-Error-establishing.md","filePath":"2023/08/28/xampp-Error-establishing.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2023/08/28/xampp-Error-establishing.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xampp-phpmyadmin-error-establishing-a-database-connection" tabindex="-1">XAMPP - phpmyadmin：Error establishing a database connection <a class="header-anchor" href="#xampp-phpmyadmin-error-establishing-a-database-connection" aria-label="Permalink to &quot;XAMPP - phpmyadmin：Error establishing a database connection&quot;">​</a></h1><h2 id="bug" tabindex="-1">BUG <a class="header-anchor" href="#bug" aria-label="Permalink to &quot;BUG&quot;">​</a></h2><p>参见 [Windows 本地 Wordpress CMS 搭建]，打开本地 wordpress 界面，提示 <code>Error-establishing a database connection</code></p><figure><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/xampp-Error-establishing/1-error-establishing.png" alt="" width="600"><figcaption></figcaption></figure><p>打开 <code>http://localhost/phpmyadmin/</code> phpMyAdmin 界面，提示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>The phpMyAdmin configuration storage is not completely configured, some extended features have been deactivated. Find out why.</span></span>
<span class="line"><span>Or alternately go to &#39;Operations&#39; tab of any database to set it up there.</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/xampp-Error-establishing/2-find-out-why.png" alt="" width="800"><figcaption></figcaption></figure><p>点击 <code>Find out why</code>，提示</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>phpMyAdmin configuration storage</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Configuration of pmadb… not OK Documentation</span></span>
<span class="line"><span>General relation features Disabled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Create a database named &#39;phpmyadmin&#39; and setup the phpMyAdmin configuration storage there.</span></span></code></pre></div><figure><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/xampp-Error-establishing/3-pmadb-not-ok.png" alt="" width="650"><figcaption></figcaption></figure><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>不知道是哪一步生效的。</p><ol><li><code>Databases</code> → <code>mysql</code> / <code>phpmyadmin</code> / <code>wordpress</code> → <code>Check all</code> → <code>Repair table</code></li><li><code>User accounts</code> → <code>pma</code> / <code>wordpress</code> → <code>Edit privileges</code> → <code>Check all</code> → <code>Go</code></li><li>运行 <code>\\xampp\\mysql\\bin\\mysql_upgrade.exe</code></li></ol><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://medium.com/enekochan/fix-configuration-of-pmadb-not-ok-in-phpmyadmin-9340cb604f2d" target="_blank" rel="noreferrer">Fix “Configuration of pmadb… not OK” in phpMyAdmin | by Eneko | enekochan | Medium</a></li><li><a href="https://stackoverflow.com/questions/60864367/1030-got-error-176-read-page-with-wrong-checksum-from-storage-engine-aria" target="_blank" rel="noreferrer">mysql - #1030 - Got error 176 &quot;Read page with wrong checksum&quot; from storage engine Aria - Stack Overflow</a></li><li><a href="https://stackoverflow.com/a/73564645/20834092" target="_blank" rel="noreferrer">How repair corrupt xampp &#39;mysql.user&#39; table? - Stack Overflow</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/08/28/xampp-Error-establishing.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xamppErrorEstablishing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  xamppErrorEstablishing as default
};
