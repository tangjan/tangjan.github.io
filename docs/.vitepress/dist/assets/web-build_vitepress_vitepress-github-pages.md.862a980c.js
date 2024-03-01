import{_ as o,C as t,o as c,c as r,k as n,a as s,H as p,w as e,Q as a}from"./chunks/framework.1fa2d359.js";const k=JSON.parse('{"title":"VitePress 部署到 Github Pages","description":"","frontmatter":{},"headers":[],"relativePath":"web-build/vitepress/vitepress-github-pages.md","filePath":"web-build/vitepress/vitepress-github-pages.md","lastUpdated":1693988373000}'),i={name:"web-build/vitepress/vitepress-github-pages.md"},y=a('<h1 id="vitepress-部署到-github-pages" tabindex="-1">VitePress 部署到 Github Pages <a class="header-anchor" href="#vitepress-部署到-github-pages" aria-label="Permalink to &quot;VitePress 部署到 Github Pages&quot;">​</a></h1><h2 id="下载安装-node-js" tabindex="-1">下载安装 Node.js <a class="header-anchor" href="#下载安装-node-js" aria-label="Permalink to &quot;下载安装 Node.js&quot;">​</a></h2><p>下载安装 <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">Node.js</a> 。</p><details class="details custom-block"><summary>个人小插曲：在 Windows 注册表更改 Node.js 的安装路径</summary><p>之前我为了扩展 C 盘的空间，需要清空 D 盘。 <img src="https://cdn.tangjiayan.com/notes/vitepress-github-pages/C-D-Merge.jpg" alt="C-D-Merge"></p><p>当时蠢蠢地直接把 Node.js 文件夹剪切到了 E 盘，于是理所当然地运行不了，也卸载不了，提示 <code>Invalid D: drive</code>。</p><p>参考 <a href="https://stackoverflow.com/questions/35451598/change-node-js-installation-directory" target="_blank" rel="noreferrer">change node.js installation directory - Stack Overflow</a>，在注册表 <code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Node.js</code> 下将 Node.js 的安装路径从 <code>D:\\Program Files\\nodejs</code> 改为 <code>E:\\Program Files\\nodejs</code>，才卸载重装成功。</p><p>Windows 注册表：<code>Win</code> + <code>R</code> → <code>regedit</code> 。</p></details><h2 id="安装-vitepress-配置-gitignore-文件" tabindex="-1">安装 VitePress，配置 .gitignore 文件 <a class="header-anchor" href="#安装-vitepress-配置-gitignore-文件" aria-label="Permalink to &quot;安装 VitePress，配置 .gitignore 文件&quot;">​</a></h2><p>在本地新建一个文件夹，用来存放 VitePress 文件，在这个文件夹内运行 <a href="https://en.wikipedia.org/wiki/Cmd.exe" target="_blank" rel="noreferrer">CMD</a>，执行以下命令：</p><details class="details custom-block"><summary>TIP：CMD 打开指定路径的方法</summary><p>方法1：点击文件浏览器的地址栏，在当前文件目录地址前加个 <code>cmd</code>，回车即可</p><p>方法2：<code>Win</code> + <code>R</code> → 输入 <code>cmd</code>，回车 → 输入 <code>cd /d 目录地址</code> 执行</p></details>',7),E={class:"details custom-block"},d=n("summary",null,"TIP：我建了两个 VitePress 站点",-1),u=a(`<p>我的文件夹结构：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">vitepress</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ vitepress-jan-draft</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ vitepress-jan-note</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">vitepress</span></span>
<span class="line"><span style="color:#24292e;">├─ vitepress-jan-draft</span></span>
<span class="line"><span style="color:#24292e;">└─ vitepress-jan-note</span></span></code></pre></div>`,2),h=a(`<div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npx</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npx</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><p>将 <code>.vitepress/config.js</code> 扩展名更改为 <code>.mjs</code></p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs:dev</span></span></code></pre></div><p>然后按照 <a href="https://vitepress.dev/reference/default-theme-config" target="_blank" rel="noreferrer">官方手册</a> 配置 <code>config.mts</code> 文件、写 markdown 文件就行了，推荐用 <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code</a> 写。</p><p>到这一步，在 VitePress 站点文件夹内应该是有 4 个项目的：</p><ul><li><code>node_modules</code></li><li><code>自己起的站点文件夹名称</code>（按照 <a href="https://vitepress.dev/guide/getting-started#installation" target="_blank" rel="noreferrer">官方步骤</a> 来，会是 <code>docs</code>）</li><li><code>package.json</code></li><li><code>package-lock.json</code></li></ul><p>其中的 <code>node_modules</code> 在部署 GitHub Pages 时不需要 push 到 GitHub 仓库，所以要配置一下 <code>.gitignore</code> 文件。</p><p>参考：<a href="https://blog.csdn.net/sunxiaoju/article/details/86495234" target="_blank" rel="noreferrer">git忽略某个目录或文件不上传_git忽略指定文件_sxjlinux的博客-CSDN博客</a></p><p>在站点文件夹下创建名为 <code>.gitignore</code> 的文件，用编辑器打开（notepad、notepad++、VS Code 都可以），里面写上 <code>node_modules</code> 。</p><h2 id="创建-deploy-yml-github-工作流文件" tabindex="-1">创建 <code>deploy.yml</code> GitHub 工作流文件 <a class="header-anchor" href="#创建-deploy-yml-github-工作流文件" aria-label="Permalink to &quot;创建 \`deploy.yml\` GitHub 工作流文件&quot;">​</a></h2><p>在本地的 VitePress 站点文件夹 <code>.github/workflows</code> 下建立 名为 <code>deploy.yml</code> 的文件，内容如下：</p><details class="details custom-block"><summary><code>deploy.yml</code> 文件的内容</summary><div class="language-yml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Sample workflow for building and deploying a VitePress site to GitHub Pages</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Runs on pushes targeting the \`main\` branch. Change this to \`master\` if you&#39;re</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># using the \`master\` branch as the default branch.</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">push</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">branches</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">main</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">workflow_dispatch</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span></span>
<span class="line"><span style="color:#85E89D;">permissions</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">contents</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">read</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">pages</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">write</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">id-token</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.</span></span>
<span class="line"><span style="color:#6A737D;"># However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.</span></span>
<span class="line"><span style="color:#85E89D;">concurrency</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">group</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pages</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">cancel-in-progress</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">jobs</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Build job</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">build</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">fetch-depth</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># Not needed if lastUpdated is not enabled</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - uses: pnpm/action-setup@v2 # Uncomment this if you&#39;re using pnpm</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - uses: oven-sh/setup-bun@v1 # Uncomment this if you&#39;re using Bun</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">node-version</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">18</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">cache</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># or pnpm / yarn</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/configure-pages@v3</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">npm ci</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># or pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">run</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span></span>
<span class="line"><span style="color:#9ECBFF;">          npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="color:#9ECBFF;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">with</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># Deployment job</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">deploy</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">needs</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">build</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">runs-on</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">steps</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">deployment</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">uses</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">actions/deploy-pages@v2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Sample workflow for building and deploying a VitePress site to GitHub Pages</span></span>
<span class="line"><span style="color:#6A737D;">#</span></span>
<span class="line"><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy VitePress site to Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Runs on pushes targeting the \`main\` branch. Change this to \`master\` if you&#39;re</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># using the \`master\` branch as the default branch.</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">push</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">branches</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">main</span><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Allows you to run this workflow manually from the Actions tab</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">workflow_dispatch</span><span style="color:#24292E;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages</span></span>
<span class="line"><span style="color:#22863A;">permissions</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">contents</span><span style="color:#24292E;">: </span><span style="color:#032F62;">read</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">pages</span><span style="color:#24292E;">: </span><span style="color:#032F62;">write</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">id-token</span><span style="color:#24292E;">: </span><span style="color:#032F62;">write</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.</span></span>
<span class="line"><span style="color:#6A737D;"># However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.</span></span>
<span class="line"><span style="color:#22863A;">concurrency</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">group</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pages</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">cancel-in-progress</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">jobs</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Build job</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">build</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Checkout</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">fetch-depth</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># Not needed if lastUpdated is not enabled</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - uses: pnpm/action-setup@v2 # Uncomment this if you&#39;re using pnpm</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - uses: oven-sh/setup-bun@v1 # Uncomment this if you&#39;re using Bun</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Setup Node</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">node-version</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">18</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">cache</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># or pnpm / yarn</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Setup Pages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/configure-pages@v3</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Install dependencies</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#032F62;">npm ci</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># or pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Build with VitePress</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">run</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span></span>
<span class="line"><span style="color:#032F62;">          npm run docs:build # or pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="color:#032F62;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Upload artifact</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">with</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># Deployment job</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">deploy</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">github-pages</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">needs</span><span style="color:#24292E;">: </span><span style="color:#032F62;">build</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">runs-on</span><span style="color:#24292E;">: </span><span style="color:#032F62;">ubuntu-latest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">steps</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">deployment</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">uses</span><span style="color:#24292E;">: </span><span style="color:#032F62;">actions/deploy-pages@v2</span></span></code></pre></div></details><p>以下我是以 <code>tangjan.github.io/</code> 根路径作为站点部署地址的，所以不需要修改 VitePress 的 <code>base</code>。</p><p>若需修改部署地址，参考 <a href="https://vitepress.dev/guide/deploy#setting-a-public-base-path" target="_blank" rel="noreferrer">Deploy Your VitePress Site | VitePress</a> 。</p><h2 id="上传到-github-仓库" tabindex="-1">上传到 GitHub 仓库 <a class="header-anchor" href="#上传到-github-仓库" aria-label="Permalink to &quot;上传到 GitHub 仓库&quot;">​</a></h2><p>在 GitHub 创建一个名为 <code>&lt;username&gt;.github.io</code> 的仓库，然后在本地的 VitePress 站点文件夹下：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">init</span></span></code></pre></div><blockquote><p>关于 git 的初始化请另找教程，本文对此略过 <br>如：<a href="https://blog.csdn.net/bjbz_cxy/article/details/116703787" target="_blank" rel="noreferrer">关于Git这一篇就够了_17岁boy想当攻城狮的博客-CSDN博客</a></p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">remote</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">git@github.com:</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">usernam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">usernam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">.github.io.git</span></span>
<span class="line"><span style="color:#6A737D;"># &lt;username&gt; 改为自己的 GitHub 用户名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">remote</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">git@github.com:</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">usernam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">usernam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">.github.io.git</span></span>
<span class="line"><span style="color:#6A737D;"># &lt;username&gt; 改为自己的 GitHub 用户名</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;initial commit&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;initial commit&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.</span></span></code></pre></div><blockquote><p>双引号内的内容是 <a href="https://git-scm.com/docs/git-commit#Documentation/git-commit.txt--mltmsggt" target="_blank" rel="noreferrer">提交信息</a>，可任意</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">origin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">main</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">origin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">main</span></span></code></pre></div><h2 id="部署-github-pages-设定用户域名" tabindex="-1">部署 GitHub Pages，设定用户域名 <a class="header-anchor" href="#部署-github-pages-设定用户域名" aria-label="Permalink to &quot;部署 GitHub Pages，设定用户域名&quot;">​</a></h2><p>VitePress 站点相关文件上传到 GitHub 仓库后，就会自动执行 <code>Deploy VitePress site to Pages</code> 的 <a href="https://docs.github.com/en/actions/learn-github-actions" target="_blank" rel="noreferrer">Github Action</a>。过一会就会自动部署完成，访问 <code>&lt;username&gt;.github.io</code> 就能看见 VitePress 站点了。</p><p>在 <code>&lt;username&gt;.github.io</code> 仓库的 <code>Settings</code> → <code>Pages</code> → <code>Custom domain</code> 可以设定自定义域名。</p><p>在域名购买的服务商处添加一条 <code>CNAME</code> 类型的记录，指向 <code>&lt;username.github.io&gt;</code> 即可。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://vitepress.dev/guide/what-is-vitepress" target="_blank" rel="noreferrer">VitePress Guide</a></li><li><a href="https://blog.csdn.net/sunxiaoju/article/details/86495234" target="_blank" rel="noreferrer">git忽略某个目录或文件不上传_git忽略指定文件_sxjlinux的博客-CSDN博客</a></li><li><a href="https://docs.github.com/en/actions/learn-github-actions" target="_blank" rel="noreferrer">Learn GitHub Actions - GitHub Docs</a></li></ul>`,30);function g(F,m,b,v,C,D){const l=t("font");return c(),r("div",null,[y,n("details",E,[d,n("p",null,[s("我建了两个 VitePress 站点文件夹，一个是正式的 "),p(l,{color:"red"},{default:e(()=>[s("笔记站")]),_:1}),s("；另一个是笔记 "),p(l,{color:"red"},{default:e(()=>[s("草稿站")]),_:1}),s("，用来预览和测试用。")]),u]),h])}const _=o(i,[["render",g]]);export{k as __pageData,_ as default};
