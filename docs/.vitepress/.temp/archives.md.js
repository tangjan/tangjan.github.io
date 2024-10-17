import { g as goToLink, d as data, a as getChineseZodiac, b as getChineseZodiacAlias, c as getQueryParam, T as Tag, _ as __unplugin_components_7 } from "./article.data.D7eO_43g.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, resolveComponent, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import "./Content.Bi_-8LTg.js";
import "@vueuse/core";
import "blueimp-md5";
import "dayjs";
import "dayjs/locale/zh-cn.js";
import "dayjs/plugin/relativeTime.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Archive",
  __ssrInlineRender: true,
  setup(__props) {
    let $articleData;
    let archiveData;
    let $category;
    let $tag;
    let $year;
    function initTimeline() {
      $articleData = [];
      archiveData = {};
      $category = getQueryParam("category");
      $tag = getQueryParam("tag");
      $year = getQueryParam("year");
      if ($category && $category.trim() != "") {
        for (let i = 0; i < data.length; i++) {
          let article = data[i];
          if (article.categories && article.categories.includes($category)) {
            $articleData.push(article);
          }
        }
      } else if ($tag && $tag.trim() != "") {
        for (let i = 0; i < data.length; i++) {
          let article = data[i];
          if (article.tags && article.tags.includes($tag)) {
            $articleData.push(article);
          }
        }
      } else if ($year && $year.trim() != "") {
        for (let i = 0; i < data.length; i++) {
          let article = data[i];
          if (article.date && new Date(article.date).getFullYear() == $year) {
            $articleData.push(article);
          }
        }
      } else {
        $articleData.push(...data);
      }
      $articleData.sort((a, b) => b.date.localeCompare(a.date));
      for (let i = 0; i < $articleData.length; i++) {
        const article = $articleData[i];
        let year = new Date(article.date).getFullYear() + "年";
        let month = new Date(article.date).getMonth() + 1 + "月";
        if (!archiveData[year]) {
          archiveData[year] = {};
        }
        if (!archiveData[year][month]) {
          archiveData[year][month] = [];
        }
        archiveData[year][month].push(article);
      }
    }
    initTimeline();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tag = Tag;
      const _component_ArticleMetadata = __unplugin_components_7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "timeline-wrap" }, _attrs))} data-v-a3671bc4><div class="timeline-header" data-v-a3671bc4>`);
      if (unref($category)) {
        _push(ssrRenderComponent(_component_a_tag, {
          class: "content",
          closable: "",
          onClose: ($event) => unref(goToLink)("/archives")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($category))} (共 ${ssrInterpolate(unref($articleData).length)} 篇) `);
            } else {
              return [
                createTextVNode(toDisplayString(unref($category)) + " (共 " + toDisplayString(unref($articleData).length) + " 篇) ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref($tag)) {
        _push(ssrRenderComponent(_component_a_tag, {
          class: "content",
          closable: "",
          onClose: ($event) => unref(goToLink)("/archives")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($tag))} (共 ${ssrInterpolate(unref($articleData).length)} 篇) `);
            } else {
              return [
                createTextVNode(toDisplayString(unref($tag)) + " (共 " + toDisplayString(unref($articleData).length) + " 篇) ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else if (unref($year)) {
        _push(ssrRenderComponent(_component_a_tag, {
          class: "content",
          closable: "",
          onClose: ($event) => unref(goToLink)("/archives")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref($year))}年 (共 ${ssrInterpolate(unref($articleData).length)} 篇) `);
            } else {
              return [
                createTextVNode(toDisplayString(unref($year)) + "年 (共 " + toDisplayString(unref($articleData).length) + " 篇) ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_a_tag, { class: "content" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 共 ${ssrInterpolate(unref(data).length)} 篇，未完待续······ `);
            } else {
              return [
                createTextVNode(" 共 " + toDisplayString(unref(data).length) + " 篇，未完待续······ ", 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div><!--[-->`);
      ssrRenderList(unref(archiveData), (item, year) => {
        _push(`<div class="timeline-item" data-v-a3671bc4><div class="year" data-v-a3671bc4><img class="chinese-zodiac"${ssrRenderAttr("src", "/img/svg/chinese-zodiac/" + unref(getChineseZodiac)(year.replace("年", "")) + ".svg")}${ssrRenderAttr("title", unref(getChineseZodiacAlias)(year.replace("年", "")))} alt="生肖" data-v-a3671bc4><span data-v-a3671bc4>${ssrInterpolate(year)}</span></div><div class="timeline-item-content" data-v-a3671bc4><!--[-->`);
        ssrRenderList(item, (articles, month) => {
          _push(`<div data-v-a3671bc4><span class="month" data-v-a3671bc4>${ssrInterpolate(month)}</span><div class="articles" data-v-a3671bc4><!--[-->`);
          ssrRenderList(articles, (article) => {
            _push(`<span class="article" data-v-a3671bc4><svg role="img" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="arco-icon arco-icon-bug" stroke-width="4" stroke-linecap="butt" stroke-linejoin="miter" style="${ssrRenderStyle({ "color": "#39c5bb" })}" data-v-a3671bc4><path d="M16.734 12.686 5.42 24l11.314 11.314m14.521-22.628L42.57 24 31.255 35.314M27.2 6.28l-6.251 35.453" data-v-a3671bc4></path></svg><a${ssrRenderAttr("href", article.path)} class="title" target="_blank" data-v-a3671bc4>${ssrInterpolate(article.title)}</a><br data-v-a3671bc4>`);
            _push(ssrRenderComponent(_component_ArticleMetadata, { article }, null, _parent));
            _push(`</span>`);
          });
          _push(`<!--]--></div></div>`);
        });
        _push(`<!--]--></div><div id="main" data-v-a3671bc4></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/theme/components/Archive.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a3671bc4"]]);
const __pageData = JSON.parse('{"title":"归档","description":"","frontmatter":{"title":"归档","aside":false,"editLink":false,"lastUpdated":false,"sidebar":false,"prev":false,"next":false},"headers":[],"relativePath":"archives.md","filePath":"archives.md","lastUpdated":null}');
const _sfc_main = { name: "archives.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ClientOnly = resolveComponent("ClientOnly");
  const _component_Archive = __unplugin_components_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_ClientOnly, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Archive, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Archive)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("archives.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const archives = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  archives as default
};
