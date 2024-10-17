import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Typecho首页文章没排满就换页","description":"","frontmatter":{"title":"Typecho首页文章没排满就换页","date":"2024/03/02","tags":["Typecho"]},"headers":[],"relativePath":"2024/03/02/typecho-page-change.md","filePath":"2024/03/02/typecho-page-change.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2024/03/02/typecho-page-change.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typecho首页文章没排满就换页" tabindex="-1">Typecho首页文章没排满就换页 <a class="header-anchor" href="#typecho首页文章没排满就换页" aria-label="Permalink to &quot;Typecho首页文章没排满就换页&quot;">​</a></h1><h2 id="问题及解决" tabindex="-1">问题及解决 <a class="header-anchor" href="#问题及解决" aria-label="Permalink to &quot;问题及解决&quot;">​</a></h2><p>如图，今天又在 <a href="https://story.tangjiayan.cn/" target="_blank" rel="noreferrer">盐之</a> 上又写了一篇文章，文章总数现在是 6。</p><p>然后发现 Typecho 首页显示 5 篇文章就换页了，应该显示 8 篇再换页才对。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/typecho-page-change/5-articles-page-change.png" alt="首页没排满就换页"></p><p>第一反应是 Story 这个主题的什么参数没设置对，参照其 <a href="https://github.com/txperl/Story-for-Typecho" target="_blank" rel="noreferrer">README</a> 改了几个参数试了试，结果还是没变化。</p><p>以「Typecho 换页」为关键词搜了一下 Google，一眼看过去搜索结果的都是些主题开发相关的。</p><p>然后我想着说不定问题其实很简单，说不定是 Typecho 本身就有首页显示文章数量的设置呢？</p><p>在 Typecho 后台找了找，结果还真有 (￣ i ￣;)</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/typecho-page-change/typecho-setting.png" alt="Typecho 后台设置翻页数量"></p><p>改成 <code>8</code>，就 OK 了。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/03/02/typecho-page-change/8-articles-page-change.png" alt="首页正常了"></p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li><blockquote><p>看上去相当不合理的问题，说不定答案很简单。(o゜▽゜)o <br>—— 糖加盐</p></blockquote></li><li><p>做了两三个月的游戏测试工作，看到 <code>每页文章数目</code> 时，脑中自然地想到了 <code>上限是多少</code> 之类的问题。</p><p>比如文章数量很多，有 100 篇，把 <code>每页文章数目</code> 设置为 <code>100</code>，会怎么样？</p><p>看来，在测试岗位工作，还有点用。。</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2024/03/02/typecho-page-change.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const typechoPageChange = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  typechoPageChange as default
};
