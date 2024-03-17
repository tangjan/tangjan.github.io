import{_ as e,c as t,o as a,a4 as i}from"./chunks/framework.iZPUC10f.js";const u=JSON.parse('{"title":"向 Hyper-V 虚拟机中传输文件","description":"","frontmatter":{},"headers":[],"relativePath":"unclassified/hyper-v/transfer-files-to-vm.md","filePath":"unclassified/hyper-v/transfer-files-to-vm.md","lastUpdated":1710679796000}'),r={name:"unclassified/hyper-v/transfer-files-to-vm.md"},n=i('<h1 id="向-hyper-v-虚拟机中传输文件" tabindex="-1">向 Hyper-V 虚拟机中传输文件 <a class="header-anchor" href="#向-hyper-v-虚拟机中传输文件" aria-label="Permalink to &quot;向 Hyper-V 虚拟机中传输文件&quot;">​</a></h1><h2 id="序" tabindex="-1">序 <a class="header-anchor" href="#序" aria-label="Permalink to &quot;序&quot;">​</a></h2><p>在淘宝花了6块钱买了个升级密钥，把系统升级为了Windows专业版，可以使用 <a href="https://en.wikipedia.org/wiki/Hyper-V" target="_blank" rel="noreferrer">Hyper-V</a> 了。</p><p>在 <a href="https://msdn.itellyou.cn/" target="_blank" rel="noreferrer">itellyou</a> 下载了 Win7-Enterprise 镜像，然后参考</p><ul><li><a href="https://blog.csdn.net/qq_16051405/article/details/121121119" target="_blank" rel="noreferrer">Hyper-V的安装和基本使用方法_hyper-v安装_静夜聆雨的博客-CSDN博客</a></li></ul><p>安装好了虚拟机。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>我的系统语言改为了英文，因此本文的选项描述为英文。中文系统对应汉译找即可。</p></div><p>我的系统是 Win11，虚拟机的系统是 Win7，因此可以使用 Windows 的 <span style="color:red;">局域网文件共享</span> 来传输文件给虚拟机。</p><h2 id="开启虚拟机的虚拟交换机" tabindex="-1">开启虚拟机的虚拟交换机 <a class="header-anchor" href="#开启虚拟机的虚拟交换机" aria-label="Permalink to &quot;开启虚拟机的虚拟交换机&quot;">​</a></h2><p>在 Hyper-V Manager 界面右击虚拟机，点击<code>Settings</code></p><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/select-settings" alt="" width="188"><figcaption></figcaption></figure><p>在<code>Network Adapter</code> - <code>Virtual switch</code> - 选择 <code>Default-switch</code></p><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/select-default-switch.png" alt="" width="563"><figcaption></figcaption></figure><p><br> 然后点击 OK，虚拟机就会弹出 设置网络位置，选 家庭网络/工作网络 均可。</p><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/network-position.png" alt="" width="563"><figcaption></figcaption></figure><h2 id="局域网共享文件夹" tabindex="-1">局域网共享文件夹 <a class="header-anchor" href="#局域网共享文件夹" aria-label="Permalink to &quot;局域网共享文件夹&quot;">​</a></h2><p>创建一个要共享给虚拟机的文件夹，右击 → <code>Properties</code> → <code>Sharing</code> → <code>Share...</code>，添加一个 <code>Everyone</code>，允许读写，然后 <code>Share</code>。</p><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/share-network-access.png" alt="" width="375"><figcaption><p>共享文件夹成功界面</p></figcaption></figure><p>然后 <code>Win</code>+<code>R</code> → <code>cmd</code> → <code>ipconfig</code>，找到 <code>Ethernet adapter vEthernet (Default Switch)</code>，找到这个本地 IP 地址。</p><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/lan-ip.png" alt="" width="563"><figcaption></figcaption></figure><p>在 Win7 虚拟机中 <code>Win</code>+<code>R</code> → <code>\\\\IP地址</code> 回车 (或者在文件浏览器的地址栏)，就能打开局域网文件共享窗口了。</p><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/vm-run-lan-ip.png" alt="" width="375"><figcaption></figcaption></figure><figure><img src="https://cdn.tangjiayan.com/notes/hyper-v/transfer-files-to-virtual-machine/share-success.png" alt="" width="563"><figcaption></figcaption></figure>',23),o=[n];function c(s,p,d,l,h,f){return a(),t("div",null,o)}const m=e(r,[["render",c]]);export{u as __pageData,m as default};
