import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CAA 类型解析记录会影响 SSL 证书的申请","description":"","frontmatter":{"title":"CAA 类型解析记录会影响 SSL 证书的申请","date":"2023/08/31","tags":["SSL","DNS"]},"headers":[],"relativePath":"2023/08/31/caa-ssl.md","filePath":"2023/08/31/caa-ssl.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2023/08/31/caa-ssl.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="caa-类型解析记录会影响-ssl-证书的申请" tabindex="-1">CAA 类型解析记录会影响 SSL 证书的申请 <a class="header-anchor" href="#caa-类型解析记录会影响-ssl-证书的申请" aria-label="Permalink to &quot;CAA 类型解析记录会影响 SSL 证书的申请&quot;">​</a></h1><p>之前七牛云图床 <a href="https://en.wikipedia.org/wiki/Content_delivery_network" target="_blank" rel="noreferrer">cdn</a> 域名 <code>cdn.tangjiayan.com</code> 的 SSL 证书到期了，试了好几次在七牛云申请 <code>TrustAsia DV</code> 和在阿里云申请 <code>Digicert DV</code>， 都没申请成功。</p><p>Google 了一下，参考 <a href="https://www.tangruiping.com/post/ssl-certificate-dns.html" target="_blank" rel="noreferrer">申请SSL证书一直无法通过DNS验证的问题</a>，将 <code>tangjiayan.com</code> DNS 记录中的 CAA 记录暂停解析，然后就申请成功了。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/caa-ssl/caa.png" alt="caa"></p><p><a href="https://en.wikipedia.org/wiki/DNS_Certification_Authority_Authorization" target="_blank" rel="noreferrer">CAA</a>，全称 <span style="${ssrRenderStyle({ "color": "red" })}">C</span>ertification <span style="${ssrRenderStyle({ "color": "red" })}">A</span>uthority <span style="${ssrRenderStyle({ "color": "red" })}">A</span>uthorization，证书颁发机构授权。</p><p>CAA 类型记录的作用是域名持有者向 <a href="https://en.wikipedia.org/wiki/Certificate_authority" target="_blank" rel="noreferrer">CA</a>（证书颁发机构）表明他们是否有权为特定域名颁发数字证书。</p><p>一条 CAA 记录由三部分组成，如 <code>0 issue &quot;letsencrypt.org&quot;</code>：</p><ul><li><code>0</code>：flag。未来才会用到，在那之前都是 <code>0</code>。</li><li><code>issue</code>：tag。<code>issue</code> 表示「域名持有者授权 <code>value</code> 机构颁发证书」。</li><li><code>value</code>：与 tag 相关联的值，<code>issue</code> tag 下，value 就是 CA 的网址。</li></ul><p><code>0 issue &quot;letsencrypt.org&quot;</code> 表示只授权 <a href="https://letsencrypt.org/" target="_blank" rel="noreferrer">letsencrypt.org</a> 机构颁发证书。</p><p><code>0 issue &quot;;&quot;</code> 则表示允许任何 CA 颁发证书。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/08/31/caa-ssl.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const caaSsl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  caaSsl as default
};
