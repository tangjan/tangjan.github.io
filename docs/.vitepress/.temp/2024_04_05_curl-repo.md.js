import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"安装 curl 时遇到的软件源问题","description":"","frontmatter":{"title":"安装 curl 时遇到的软件源问题","date":"2024/04/05","tags":["Debian","debug"]},"headers":[],"relativePath":"2024/04/05/curl-repo.md","filePath":"2024/04/05/curl-repo.md","lastUpdated":1728721541000}');
const _sfc_main = { name: "2024/04/05/curl-repo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="安装-curl-时遇到的软件源问题" tabindex="-1">安装 curl 时遇到的软件源问题 <a class="header-anchor" href="#安装-curl-时遇到的软件源问题" aria-label="Permalink to &quot;安装 curl 时遇到的软件源问题&quot;">​</a></h1><h2 id="目标" tabindex="-1">目标 <a class="header-anchor" href="#目标" aria-label="Permalink to &quot;目标&quot;">​</a></h2><p>为了更新 v2ray 服务端，根据 <a href="https://github.com/v2fly/fhs-install-v2ray" target="_blank" rel="noreferrer">v2fly/fhs-install-v2ray</a>，需要执行以下指令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">bash</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &lt;(</span><span style="${ssrRenderStyle({ "--shiki-light": "#6F42C1", "--shiki-dark": "#B392F0" })}">curl</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> -L</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)</span></span></code></pre></div><p>然而，在执行命令时提示 <code>curl: command not found</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># bash &lt;(curl -L https://raw.githubusercontent.com/v2fly/fhs-install-v2ray/master/install-release.sh)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-bash: curl: command not found</span></span></code></pre></div><p>也就是说 curl 还没安装，需要安装 <a href="https://curl.se/" target="_blank" rel="noreferrer">curl</a> 。</p><h2 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h2><p>使用 <code>apt install curl</code> 安装 curl，然后就提示了报错信息</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># apt install curl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree       </span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following additional packages will be installed:</span></span>
<span class="line"><span>  libcurl4</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  curl libcurl4</span></span>
<span class="line"><span>0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 601 kB of archives.</span></span>
<span class="line"><span>After this operation, 1,127 kB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue? [Y/n] y</span></span>
<span class="line"><span>Err:1 http://security.debian.org/debian-security buster/updates/main amd64 libcurl4 amd64 7.64.0-4+deb10u6</span></span>
<span class="line"><span>  404  Not Found [IP: 146.75.94.132 80]</span></span>
<span class="line"><span>Err:2 http://security.debian.org/debian-security buster/updates/main amd64 curl amd64 7.64.0-4+deb10u6</span></span>
<span class="line"><span>  404  Not Found [IP: 146.75.94.132 80]</span></span>
<span class="line"><span>E: Failed to fetch http://security.debian.org/debian-security/pool/updates/main/c/curl/libcurl4_7.64.0-4+deb10u6_amd64.deb  404  Not Found [IP: 146.75.94.132 80]</span></span>
<span class="line"><span>E: Failed to fetch http://security.debian.org/debian-security/pool/updates/main/c/curl/curl_7.64.0-4+deb10u6_amd64.deb  404  Not Found [IP: 146.75.94.132 80]</span></span>
<span class="line"><span>E: Unable to fetch some archives, maybe run apt-get update or try with --fix-missing?</span></span></code></pre></div><h2 id="解决" tabindex="-1">解决 <a class="header-anchor" href="#解决" aria-label="Permalink to &quot;解决&quot;">​</a></h2><p>根据 Stack Exchange 的 <a href="https://unix.stackexchange.com/questions/743839/apt-get-update-failed-to-fetch-debian-amd64-packages-while-building-dockerfile-f" target="_blank" rel="noreferrer">这篇回答</a>，了解到是 <a href="https://en.wikipedia.org/wiki/Software_repository" target="_blank" rel="noreferrer">软件源</a> 的问题。</p><p>不过这篇回答提到要把软件源更改为 <code>archive.debian.org</code> ，但那是 <code>Debian 9</code> 的软件源，而我的系统是 <code>Debian 10</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># cat /etc/os-release</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PRETTY_NAME=&quot;Debian GNU/Linux 10 (buster)&quot;</span></span>
<span class="line"><span>NAME=&quot;Debian GNU/Linux&quot;</span></span>
<span class="line"><span>VERSION_ID=&quot;10&quot;</span></span>
<span class="line"><span>VERSION=&quot;10 (buster)&quot;</span></span>
<span class="line"><span>VERSION_CODENAME=buster</span></span>
<span class="line"><span>ID=debian</span></span>
<span class="line"><span>HOME_URL=&quot;https://www.debian.org/&quot;</span></span>
<span class="line"><span>SUPPORT_URL=&quot;https://www.debian.org/support&quot;</span></span>
<span class="line"><span>BUG_REPORT_URL=&quot;https://bugs.debian.org/&quot;</span></span></code></pre></div><p>所以我尝试使用以下指令设置软件源为 <code>http://deb.debian.org/debian</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">echo</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> &quot;deb http://deb.debian.org/debian buster main&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> &gt;</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}"> /etc/apt/sources.list</span></span></code></pre></div><p>然后再执行 <code>apt install curl</code>，就成功了</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># apt install curl</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reading package lists... Done</span></span>
<span class="line"><span>Building dependency tree       </span></span>
<span class="line"><span>Reading state information... Done</span></span>
<span class="line"><span>The following additional packages will be installed:</span></span>
<span class="line"><span>  libcurl4</span></span>
<span class="line"><span>The following NEW packages will be installed:</span></span>
<span class="line"><span>  curl libcurl4</span></span>
<span class="line"><span>0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.</span></span>
<span class="line"><span>Need to get 597 kB of archives.</span></span>
<span class="line"><span>After this operation, 1,125 kB of additional disk space will be used.</span></span>
<span class="line"><span>Do you want to continue? [Y/n] y</span></span>
<span class="line"><span>Get:1 http://deb.debian.org/debian buster/main amd64 libcurl4 amd64 7.64.0-4+deb10u2 [332 kB]</span></span>
<span class="line"><span>Get:2 http://deb.debian.org/debian buster/main amd64 curl amd64 7.64.0-4+deb10u2 [265 kB]</span></span>
<span class="line"><span>Fetched 597 kB in 0s (4,978 kB/s)</span></span>
<span class="line"><span>Selecting previously unselected package libcurl4:amd64.</span></span>
<span class="line"><span>(Reading database ... 34038 files and directories currently installed.)</span></span>
<span class="line"><span>Preparing to unpack .../libcurl4_7.64.0-4+deb10u2_amd64.deb ...</span></span>
<span class="line"><span>Unpacking libcurl4:amd64 (7.64.0-4+deb10u2) ...</span></span>
<span class="line"><span>Selecting previously unselected package curl.</span></span>
<span class="line"><span>Preparing to unpack .../curl_7.64.0-4+deb10u2_amd64.deb ...</span></span>
<span class="line"><span>Unpacking curl (7.64.0-4+deb10u2) ...</span></span>
<span class="line"><span>Setting up libcurl4:amd64 (7.64.0-4+deb10u2) ...</span></span>
<span class="line"><span>Setting up curl (7.64.0-4+deb10u2) ...</span></span>
<span class="line"><span>Processing triggers for man-db (2.8.5-2) ...</span></span>
<span class="line"><span>Processing triggers for libc-bin (2.28-10+deb10u2) ...</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("2024/04/05/curl-repo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const curlRepo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  curlRepo as default
};