import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.iZPUC10f.js";const p=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"programming/vscode/vscode-hard-tab.md","filePath":"programming/vscode/vscode-hard-tab.md","lastUpdated":1710679796000}'),o={name:"programming/vscode/vscode-hard-tab.md"},d=r('<h2 id="vs-code-插件-markdownlint-提示-no-hard-tabs" tabindex="-1">VS Code 插件 markdownlint 提示 “no-hard-tabs” <a class="header-anchor" href="#vs-code-插件-markdownlint-提示-no-hard-tabs" aria-label="Permalink to &quot;VS Code 插件 markdownlint 提示 “no-hard-tabs”&quot;">​</a></h2><p>VS Code 启用 <a href="https://github.com/DavidAnson/markdownlint" target="_blank" rel="noreferrer">markdownlint</a> 插件编写 md 文件的时候，发现提示 <code>MD010/no-hard-tabs：Hard tabs</code>：</p><figure><img src="https://cdn.tangjiayan.com/notes/debug/vs-code-hard-tab.png" alt=""><figcaption></figcaption></figure><p>好奇调查了一下：</p><p>所谓的 <code>hard tab</code> 是指 <a href="https://en.wikipedia.org/wiki/Tab_key#Tab_characters" target="_blank" rel="noreferrer">制表符</a>，ASCII 码为 <code>9</code>，C语言中转义序列表示为 <code>\\t</code>。</p><p>与 <code>hard tab</code> 相对应的是 <code>soft tab</code>，是由 2个 或 4个 空格组成。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://github.com/DavidAnson/markdownlint/blob/v0.29.0/doc/md010.md" target="_blank" rel="noreferrer">markdownlint/doc/md010.md at v0.29.0 · DavidAnson/markdownlint</a></li><li><a href="https://stackoverflow.com/questions/26350689/what-are-hard-and-soft-tabs" target="_blank" rel="noreferrer">coding style - What are hard and soft tabs? - Stack Overflow</a></li><li><a href="https://en.wikipedia.org/wiki/Tab_key#Tab_characters" target="_blank" rel="noreferrer">Tab key - Wikipedia</a></li></ul>',8),n=[d];function i(s,c,l,h,m,_){return t(),e("div",null,n)}const f=a(o,[["render",i]]);export{p as __pageData,f as default};
