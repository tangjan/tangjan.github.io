import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WELCOME","description":"","frontmatter":{},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":1728721541000}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="welcome" tabindex="-1">WELCOME <a class="header-anchor" href="#welcome" aria-label="Permalink to &quot;WELCOME&quot;">​</a></h1><p><a href="https://ciallo.cc/" target="_blank" rel="noreferrer">Ciallo～(∠・ω&lt; )⌒★</a></p><p><a href="https://twitter.com/n3vermind_mir/status/1754120872049475983" target="_blank"><img src="https://pbs.twimg.com/media/GFfjjiqaYAAV8X0?format=jpg&amp;name=900x900" alt="锦木千束"></a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
