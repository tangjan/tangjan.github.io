import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"向 Hyper-V 虚拟机中传输文件","description":"","frontmatter":{"title":"向 Hyper-V 虚拟机中传输文件","date":"2023/08/31","tags":["Hyper-V"]},"headers":[],"relativePath":"2023/08/31/transfer-files-to-hyperV.md","filePath":"2023/08/31/transfer-files-to-hyperV.md","lastUpdated":1728745336000}');
const _sfc_main = { name: "2023/08/31/transfer-files-to-hyperV.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="向-hyper-v-虚拟机中传输文件" tabindex="-1">向 Hyper-V 虚拟机中传输文件 <a class="header-anchor" href="#向-hyper-v-虚拟机中传输文件" aria-label="Permalink to &quot;向 Hyper-V 虚拟机中传输文件&quot;">​</a></h1><h2 id="序" tabindex="-1">序 <a class="header-anchor" href="#序" aria-label="Permalink to &quot;序&quot;">​</a></h2><p>在淘宝花了6块钱买了个升级密钥，把系统升级为了Windows专业版，可以使用 <a href="https://en.wikipedia.org/wiki/Hyper-V" target="_blank" rel="noreferrer">Hyper-V</a> 了。</p><p>在 <a href="https://msdn.itellyou.cn/" target="_blank" rel="noreferrer">itellyou</a> 下载了 Win7-Enterprise 镜像，然后参考</p><ul><li><a href="https://blog.csdn.net/qq_16051405/article/details/121121119" target="_blank" rel="noreferrer">Hyper-V的安装和基本使用方法_hyper-v安装_静夜聆雨的博客-CSDN博客</a></li></ul><p>安装好了虚拟机。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>我的系统语言改为了英文，因此本文的选项描述为英文。中文系统对应汉译找即可。</p></div><p>我的系统是 Win11，虚拟机的系统是 Win7，因此可以使用 Windows 的 <span style="${ssrRenderStyle({ "color": "red" })}">局域网文件共享</span> 来传输文件给虚拟机。</p><h2 id="开启虚拟机的虚拟交换机" tabindex="-1">开启虚拟机的虚拟交换机 <a class="header-anchor" href="#开启虚拟机的虚拟交换机" aria-label="Permalink to &quot;开启虚拟机的虚拟交换机&quot;">​</a></h2><p>在 Hyper-V Manager 界面右击虚拟机，点击<code>Settings</code></p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/1-settings.png" alt="1-settings"></p><p>在<code>Network Adapter</code> - <code>Virtual switch</code> - 选择 <code>Default Switch</code></p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/2-default-switch.png" alt="default-switch"></p><p>然后点击 OK，虚拟机就会弹出 设置网络位置，选 家庭网络/工作网络 均可。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/3-network-position.png" alt="-network-position"></p><h2 id="局域网共享文件夹" tabindex="-1">局域网共享文件夹 <a class="header-anchor" href="#局域网共享文件夹" aria-label="Permalink to &quot;局域网共享文件夹&quot;">​</a></h2><p>创建一个要共享给虚拟机的文件夹，右击 → <code>Properties</code> → <code>Sharing</code> → <code>Share...</code>，添加一个 <code>Everyone</code>，允许读写，然后 <code>Share</code>。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/4-share-network-access" alt="share-network-access"></p><p>然后 <code>Win</code>+<code>R</code> → <code>cmd</code> → <code>ipconfig</code>，找到 <code>Ethernet adapter vEthernet (Default Switch)</code>，找到这个本地 IP 地址。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/5-lan-ip.png" alt="lan-ip"></p><p>在 Win7 虚拟机中 <code>Win</code>+<code>R</code> → <code>\\\\IP地址</code> 回车 (或者在文件浏览器的地址栏)，就能打开局域网文件共享窗口了。</p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/6-vm-run-lan-ip.png" alt="vm-run-lan-ip"></p><p><img src="https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/08/31/transfer-files-to-hyperV/7-share-success.png" alt="share-success"></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2023/08/31/transfer-files-to-hyperV.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transferFilesToHyperV = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  transferFilesToHyperV as default
};