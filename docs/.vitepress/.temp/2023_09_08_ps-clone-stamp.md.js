import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PhotoShop 仿制图章工具","description":"","frontmatter":{"title":"PhotoShop 仿制图章工具","date":"2023/09/08","tags":["PhotoShop"]},"headers":[],"relativePath":"2023/09/08/ps-clone-stamp.md","filePath":"2023/09/08/ps-clone-stamp.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2023/09/08/ps-clone-stamp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="photoshop-仿制图章工具" tabindex="-1">PhotoShop 仿制图章工具 <a class="header-anchor" href="#photoshop-仿制图章工具" aria-label="Permalink to &quot;PhotoShop 仿制图章工具&quot;">​</a></h1><p><a href="https://helpx.adobe.com/cn/photoshop/using/tool-techniques/clone-stamp-tool.html" target="_blank" rel="noreferrer">仿制图章工具</a> (Clone Stamp Tool) 作用：将图像中某个部分的像素复制到另一部分。</p><h2 id="视频演示" tabindex="-1">视频演示 <a class="header-anchor" href="#视频演示" aria-label="Permalink to &quot;视频演示&quot;">​</a></h2><video src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/08/ps-clone-stamp/clone-stamp.mp4" controls></video><h2 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h2><h3 id="处理前" tabindex="-1">处理前 <a class="header-anchor" href="#处理前" aria-label="Permalink to &quot;处理前&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/08/ps-clone-stamp/before.png" alt="example-before"></p><h3 id="处理后" tabindex="-1">处理后 <a class="header-anchor" href="#处理后" aria-label="Permalink to &quot;处理后&quot;">​</a></h3><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/08/ps-clone-stamp/after.jpeg" alt="example-after"></p><p>此图片素材来自 <a href="https://huaban.com/pins/1209679345" target="_blank" rel="noreferrer">花瓣网</a> 。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://helpx.adobe.com/cn/photoshop/using/tool-techniques/clone-stamp-tool.html" target="_blank" rel="noreferrer">使用“仿制图章”工具对图像进行修饰</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/09/08/ps-clone-stamp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const psCloneStamp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  psCloneStamp as default
};
