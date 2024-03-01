import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.1fa2d359.js";const m=JSON.parse('{"title":"jekyll 个人在线简历","description":"","frontmatter":{},"headers":[],"relativePath":"web-build/jekyll-cv.md","filePath":"web-build/jekyll-cv.md","lastUpdated":1698590652000}'),l={name:"web-build/jekyll-cv.md"},p=a(`<h1 id="jekyll-个人在线简历" tabindex="-1">jekyll 个人在线简历 <a class="header-anchor" href="#jekyll-个人在线简历" aria-label="Permalink to &quot;jekyll 个人在线简历&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>个人在线简历链接：<a href="https://cv.tangjiayan.cn/" target="_blank" rel="noreferrer">cv.tangjiayan.cn</a></p></div><p>在 jekyll 发现了 <a href="https://github.com/sharu725/online-cv" target="_blank" rel="noreferrer">online-cv</a> 这个主题，打算用其制作一个在线简历，需要在本地部署 Jekyll，运行本地服务器进行设计和预览。</p><p>首先参考 <a href="https://jekyllrb.com/docs/installation/windows/" target="_blank" rel="noreferrer">Jekyll on Windows</a> 使用 <a href="https://rubyinstaller.org/" target="_blank" rel="noreferrer">RubyInstaller</a> 安装好了 <code>MSYS2 and MINGW development tool chain</code>。</p><h2 id="uri-badurierror" tabindex="-1"><code>URI::BadURIError</code> <a class="header-anchor" href="#uri-badurierror" aria-label="Permalink to &quot;\`URI::BadURIError\`&quot;">​</a></h2><h3 id="uri-badurierror-问题" tabindex="-1"><code>URI::BadURIError</code> - 问题 <a class="header-anchor" href="#uri-badurierror-问题" aria-label="Permalink to &quot;\`URI::BadURIError\` - 问题&quot;">​</a></h3><p>运行 <code>gem install jekyll bundler</code> 时，报错 <code>URI::BadURIError</code>，详细信息如下：</p><details class="details custom-block"><summary><code>URI::BadURIError</code> 详细信息</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gem install jekyll bundler</span></span>
<span class="line"><span style="color:#e1e4e8;">ERROR:  While executing gem ... (URI::BadURIError)</span></span>
<span class="line"><span style="color:#e1e4e8;">    both URI are relative</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/3.2.0/uri/generic.rb:1119:in \`merge&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source.rb:236:in \`enforce_trailing_slash&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source.rb:84:in \`dependency_resolver_set&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/best_set.rb:24:in \`block in pick_sets&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each_source&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/best_set.rb:23:in \`pick_sets&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/best_set.rb:29:in \`find_all&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/installer_set.rb:173:in \`find_all&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/installer_set.rb:62:in \`add_always_install&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/dependency_installer.rb:319:in \`resolve_dependencies&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:206:in \`install_gem&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:231:in \`block in install_gems&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:224:in \`each&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:224:in \`install_gems&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:170:in \`execute&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command.rb:328:in \`invoke_with_build_args&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:253:in \`invoke_command&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:193:in \`process_args&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:151:in \`run&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/gem_runner.rb:56:in \`run&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/bin/gem:12:in \`&lt;main&gt;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gem install jekyll bundler</span></span>
<span class="line"><span style="color:#24292e;">ERROR:  While executing gem ... (URI::BadURIError)</span></span>
<span class="line"><span style="color:#24292e;">    both URI are relative</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/3.2.0/uri/generic.rb:1119:in \`merge&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source.rb:236:in \`enforce_trailing_slash&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source.rb:84:in \`dependency_resolver_set&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/best_set.rb:24:in \`block in pick_sets&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each_source&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/best_set.rb:23:in \`pick_sets&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/best_set.rb:29:in \`find_all&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/installer_set.rb:173:in \`find_all&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/resolver/installer_set.rb:62:in \`add_always_install&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/dependency_installer.rb:319:in \`resolve_dependencies&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:206:in \`install_gem&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:231:in \`block in install_gems&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:224:in \`each&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:224:in \`install_gems&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/install_command.rb:170:in \`execute&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command.rb:328:in \`invoke_with_build_args&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:253:in \`invoke_command&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:193:in \`process_args&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:151:in \`run&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/gem_runner.rb:56:in \`run&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/bin/gem:12:in \`&lt;main&gt;&#39;</span></span></code></pre></div></details><h3 id="uri-badurierror-尝试" tabindex="-1"><code>URI::BadURIError</code> - 尝试 <a class="header-anchor" href="#uri-badurierror-尝试" aria-label="Permalink to &quot;\`URI::BadURIError\` - 尝试&quot;">​</a></h3><h4 id="设置-cmd-代理" tabindex="-1">设置 cmd 代理 <a class="header-anchor" href="#设置-cmd-代理" aria-label="Permalink to &quot;设置 cmd 代理&quot;">​</a></h4><p>参考</p><ul><li><a href="https://blog.csdn.net/SHERLOCKSALVATORE/article/details/123599042" target="_blank" rel="noreferrer">windows 的cmd设置代理方法_Sherlock　Salvatore的博客-CSDN博客</a></li></ul><p>使用 <a href="https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/set_1" target="_blank" rel="noreferrer">set</a> 指令 <code>set http_proxy=http://127.0.0.1:端口号</code>、<code>set https_proxy=http://127.0.0.1:端口号</code> 设置 v2ray 代理，没有用。</p><h4 id="更换源" tabindex="-1">更换源 <a class="header-anchor" href="#更换源" aria-label="Permalink to &quot;更换源&quot;">​</a></h4><p>参考</p><ul><li><a href="https://github.com/juthilo/run-jekyll-on-windows/issues/34" target="_blank" rel="noreferrer">ERROR: Could not find a valid gem &#39;jekyll&#39; (&gt;= 0), here is why: · Issue #34 · juthilo/run-jekyll-on-windows</a></li><li><a href="https://github.com/jekyll/jekyll/issues/1409" target="_blank" rel="noreferrer">China : gem install jekyll do not work · Issue #1409 · jekyll/jekyll</a></li></ul><p>使用 <code>gem sources --remove</code>、<code>gem sources -a</code> 将 gem 源更换为：</p><ul><li><a href="http://rubygems.org/" target="_blank" rel="noreferrer">http://rubygems.org/</a></li><li><a href="http://ruby.taobao.org/" target="_blank" rel="noreferrer">http://ruby.taobao.org/</a></li><li><a href="https://mirrors.aliyun.com/rubygems/" target="_blank" rel="noreferrer">https://mirrors.aliyun.com/rubygems/</a></li><li><a href="https://gems.ruby-china.com/" target="_blank" rel="noreferrer">https://gems.ruby-china.com/</a></li></ul><p>没有用。</p><h3 id="uri-badurierror-解决" tabindex="-1"><code>URI::BadURIError</code> - 解决 <a class="header-anchor" href="#uri-badurierror-解决" aria-label="Permalink to &quot;\`URI::BadURIError\` - 解决&quot;">​</a></h3><p>参考</p><ul><li><a href="https://stackoverflow.com/questions/77321122/gem-update-system-error-while-executing-gem-uribadurierror/77330584" target="_blank" rel="noreferrer">ruby - gem update --system ERROR: While executing gem ... (URI::BadURIError) - Stack Overflow</a></li></ul><p>解决了问题。</p><p>原因是 gem 的源列表中多了一行空行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gem sources -l</span></span>
<span class="line"><span style="color:#e1e4e8;">*** CURRENT SOURCES ***</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">http://rubygems.org/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gem sources -l</span></span>
<span class="line"><span style="color:#24292e;">*** CURRENT SOURCES ***</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http://rubygems.org/</span></span></code></pre></div><p>使用 <code>gem sources --remove &quot;&quot;</code> 移除空行即可。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gem sources --remove &quot;&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;"> removed from sources</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gem sources --remove &quot;&quot;</span></span>
<span class="line"><span style="color:#24292e;"> removed from sources</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gem sources -l</span></span>
<span class="line"><span style="color:#e1e4e8;">*** CURRENT SOURCES ***</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">http://rubygems.org/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gem sources -l</span></span>
<span class="line"><span style="color:#24292e;">*** CURRENT SOURCES ***</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">http://rubygems.org/</span></span></code></pre></div><h2 id="gem-ext-builderror-error" tabindex="-1"><code>Gem::Ext::BuildError: ERROR</code> <a class="header-anchor" href="#gem-ext-builderror-error" aria-label="Permalink to &quot;\`Gem::Ext::BuildError: ERROR\`&quot;">​</a></h2><h3 id="gem-ext-builderror-error-问题" tabindex="-1"><code>Gem::Ext::BuildError: ERROR</code> - 问题 <a class="header-anchor" href="#gem-ext-builderror-error-问题" aria-label="Permalink to &quot;\`Gem::Ext::BuildError: ERROR\` - 问题&quot;">​</a></h3><p>运行 <code>bundle install</code> 时，提示 <code>Gem::Ext::BuildError: ERROR</code>，详细信息如下：</p><details class="details custom-block"><summary><code>Gem::Ext::BuildError: ERROR</code> 详细信息</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ bundle install</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching gem metadata from https://rubygems.org/.........</span></span>
<span class="line"><span style="color:#e1e4e8;">Resolving dependencies....</span></span>
<span class="line"><span style="color:#e1e4e8;">Using bundler 2.3.19</span></span>
<span class="line"><span style="color:#e1e4e8;">Using ruby2_keywords 0.0.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using concurrent-ruby 1.1.10</span></span>
<span class="line"><span style="color:#e1e4e8;">Using minitest 5.16.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using thread_safe 0.3.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Using zeitwerk 2.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using public_suffix 4.0.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Using coffee-script-source 1.11.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using execjs 2.8.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using colorator 1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using commonmarker 0.23.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using unf_ext 0.0.8.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using eventmachine 1.2.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Using http_parser.rb 0.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using ffi 1.15.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using forwardable-extended 2.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using faraday-net_http 3.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using gemoji 3.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rb-fsevent 0.11.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rexml 3.2.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using liquid 4.0.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using mercenary 0.3.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rouge 3.26.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using safe_yaml 1.0.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using mini_portile2 2.8.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using racc 1.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-paginate 1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rubyzip 2.3.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-swiss 1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using unicode-display_width 1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using webrick 1.8.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using i18n 0.9.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using tzinfo 1.2.10</span></span>
<span class="line"><span style="color:#e1e4e8;">Using addressable 2.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using coffee-script 2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using unf 0.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using em-websocket 0.5.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using ethon 0.15.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using faraday 2.5.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rb-inotify 0.10.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using kramdown 2.3.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using pathutil 0.16.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-commonmark 1.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using activesupport 6.0.5.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using simpleidn 0.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using sawyer 0.9.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using typhoeus 1.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using sass-listen 4.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using listen 3.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-coffeescript 1.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using kramdown-parser-gfm 1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using terminal-table 1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using dnsruby 1.61.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Using octokit 4.25.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using sass 3.7.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-watch 2.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using github-pages-health-check 1.17.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-sass-converter 1.5.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-gist 1.5.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll 3.9.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-avatar 0.7.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-commonmark-ghpages 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-default-layout 0.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-feed 0.15.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-github-metadata 2.13.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-include-cache 0.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-optional-front-matter 0.3.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-readme-index 0.3.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-redirect-from 0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-relative-links 0.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-remote-theme 0.4.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-seo-tag 2.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-sitemap 1.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-titles-from-headings 0.5.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-architect 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-cayman 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-dinky 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-hacker 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-leap-day 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-merlot 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-midnight 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-minimal 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-modernist 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-primer 0.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-slate 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-tactile 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-time-machine 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using minima 2.5.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing nokogiri 1.13.8 with native extensions</span></span>
<span class="line"><span style="color:#e1e4e8;">Gem::Ext::BuildError: ERROR: Failed to build gem native extension.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">current directory:</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/nokogiri-1.13.8/ext/nokogiri</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/bin/ruby.exe extconf.rb --use-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">--with-xml2-include\\=/usr/local/opt/libxml2/include/libxml2</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for whether -std=c99 is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for whether -Wno-declaration-after-statement is accepted as CFLAGS...</span></span>
<span class="line"><span style="color:#e1e4e8;">yes</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for whether -g is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for whether -Winline is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for whether -Wmissing-noreturn is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for whether  &quot;-Idummypath&quot; is accepted as CPPFLAGS... yes</span></span>
<span class="line"><span style="color:#e1e4e8;">Building nokogiri using system libraries.</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for gzdopen() in -lz... yes</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for xmlParseDoc() in -lxml2... no</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for xmlParseDoc() in -llibxml2... no</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for libxml-2.0 using \`pkg_config\`... no</span></span>
<span class="line"><span style="color:#e1e4e8;">Please install either the \`pkg-config\` utility or the \`pkg-config\` rubygem.</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for xmlParseDoc() in -lxml2... no</span></span>
<span class="line"><span style="color:#e1e4e8;">checking for xmlParseDoc() in -llibxml2... no</span></span>
<span class="line"><span style="color:#e1e4e8;">-----</span></span>
<span class="line"><span style="color:#e1e4e8;">extconf.rb:285:in \`ensure_package_configuration&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">extconf.rb:648:in \`&lt;main&gt;&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">xml2 is missing. Please locate mkmf.log to investigate how it is failing.</span></span>
<span class="line"><span style="color:#e1e4e8;">-----</span></span>
<span class="line"><span style="color:#e1e4e8;">*** extconf.rb failed ***</span></span>
<span class="line"><span style="color:#e1e4e8;">Could not create Makefile due to some reason, probably lack of necessary</span></span>
<span class="line"><span style="color:#e1e4e8;">libraries and/or headers.  Check the mkmf.log file for more details.  You may</span></span>
<span class="line"><span style="color:#e1e4e8;">need configuration options.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Provided configuration options:</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-opt-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-opt-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-opt-include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-opt-include=\${opt-dir}/include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-opt-lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-opt-lib=\${opt-dir}/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-make-prog</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-make-prog</span></span>
<span class="line"><span style="color:#e1e4e8;">        --srcdir=.</span></span>
<span class="line"><span style="color:#e1e4e8;">        --curdir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --ruby=C:/Ruby32-x64/bin/$(RUBY_BASE_NAME)</span></span>
<span class="line"><span style="color:#e1e4e8;">        --help</span></span>
<span class="line"><span style="color:#e1e4e8;">        --clean</span></span>
<span class="line"><span style="color:#e1e4e8;">        --prevent-strip</span></span>
<span class="line"><span style="color:#e1e4e8;">        --enable-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">        --disable-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">        --use-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">        --enable-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">        --disable-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">        --use-system-libraries</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-zlib-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-zlib-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-zlib-include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-zlib-include=\${zlib-dir}/include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-zlib-lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-zlib-lib=\${zlib-dir}/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-z-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-z-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-z-include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-z-include=\${z-dir}/include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-z-lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-z-lib=\${z-dir}/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-zlib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-zlib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-xml2-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-xml2-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-xml2-include=\${xml2-dir}/include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-xml2-lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-xml2-lib=\${xml2-dir}/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-xml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-xml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml2-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml2-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml2-include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml2-include=\${libxml2-dir}/include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml2-lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml2-lib=\${libxml2-dir}/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml-2.0-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml-2.0-dir</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml-2.0-include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml-2.0-include=\${libxml-2.0-dir}/include</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml-2.0-lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml-2.0-lib=\${libxml-2.0-dir}/lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml-2.0-config</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml-2.0-config</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-pkg-config</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-pkg-config</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-xml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-xml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --with-libxml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;">        --without-libxml2lib</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">To see why this extension failed to compile, please check the mkmf.log which can</span></span>
<span class="line"><span style="color:#e1e4e8;">be found here:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/extensions/x64-mingw-ucrt/3.2.0/nokogiri-1.13.8/mkmf.log</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">extconf failed, exit code 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Gem files will remain installed in</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/nokogiri-1.13.8 for inspection.</span></span>
<span class="line"><span style="color:#e1e4e8;">Results logged to</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/extensions/x64-mingw-ucrt/3.2.0/nokogiri-1.13.8/gem_make.out</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:120:in \`run&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/ext_conf_builder.rb:28:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`build&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:188:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`build_extension&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:222:in \`block</span></span>
<span class="line"><span style="color:#e1e4e8;">in build_extensions&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">  C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:219:in \`each&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:219:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`build_extensions&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/installer.rb:844:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`build_extensions&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/rubygems_gem_installer.rb:72:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`build_extensions&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/rubygems_gem_installer.rb:28:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`install&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/source/rubygems.rb:207:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`install&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/gem_installer.rb:54:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`install&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/gem_installer.rb:16:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`install_from_spec&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/parallel_installer.rb:186:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`do_install&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/parallel_installer.rb:177:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`block in worker_pool&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:62:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`apply_func&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:57:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`block in process_queue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:54:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`loop&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:54:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`process_queue&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:91:in</span></span>
<span class="line"><span style="color:#e1e4e8;">\`block (2 levels) in create_threads&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">An error occurred while installing nokogiri (1.13.8), and Bundler cannot</span></span>
<span class="line"><span style="color:#e1e4e8;">continue.</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">In Gemfile:</span></span>
<span class="line"><span style="color:#e1e4e8;">  github-pages was resolved to 227, which depends on</span></span>
<span class="line"><span style="color:#e1e4e8;">    jekyll-mentions was resolved to 1.6.0, which depends on</span></span>
<span class="line"><span style="color:#e1e4e8;">      html-pipeline was resolved to 2.14.2, which depends on</span></span>
<span class="line"><span style="color:#e1e4e8;">        nokogiri</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ bundle install</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Fetching gem metadata from https://rubygems.org/.........</span></span>
<span class="line"><span style="color:#24292e;">Resolving dependencies....</span></span>
<span class="line"><span style="color:#24292e;">Using bundler 2.3.19</span></span>
<span class="line"><span style="color:#24292e;">Using ruby2_keywords 0.0.5</span></span>
<span class="line"><span style="color:#24292e;">Using concurrent-ruby 1.1.10</span></span>
<span class="line"><span style="color:#24292e;">Using minitest 5.16.2</span></span>
<span class="line"><span style="color:#24292e;">Using thread_safe 0.3.6</span></span>
<span class="line"><span style="color:#24292e;">Using zeitwerk 2.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using public_suffix 4.0.7</span></span>
<span class="line"><span style="color:#24292e;">Using coffee-script-source 1.11.1</span></span>
<span class="line"><span style="color:#24292e;">Using execjs 2.8.1</span></span>
<span class="line"><span style="color:#24292e;">Using colorator 1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Using commonmarker 0.23.5</span></span>
<span class="line"><span style="color:#24292e;">Using unf_ext 0.0.8.2</span></span>
<span class="line"><span style="color:#24292e;">Using eventmachine 1.2.7</span></span>
<span class="line"><span style="color:#24292e;">Using http_parser.rb 0.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using ffi 1.15.5</span></span>
<span class="line"><span style="color:#24292e;">Using forwardable-extended 2.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using faraday-net_http 3.0.0</span></span>
<span class="line"><span style="color:#24292e;">Using gemoji 3.0.1</span></span>
<span class="line"><span style="color:#24292e;">Using rb-fsevent 0.11.1</span></span>
<span class="line"><span style="color:#24292e;">Using rexml 3.2.5</span></span>
<span class="line"><span style="color:#24292e;">Using liquid 4.0.3</span></span>
<span class="line"><span style="color:#24292e;">Using mercenary 0.3.6</span></span>
<span class="line"><span style="color:#24292e;">Using rouge 3.26.0</span></span>
<span class="line"><span style="color:#24292e;">Using safe_yaml 1.0.5</span></span>
<span class="line"><span style="color:#24292e;">Using mini_portile2 2.8.4</span></span>
<span class="line"><span style="color:#24292e;">Using racc 1.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-paginate 1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Using rubyzip 2.3.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-swiss 1.0.0</span></span>
<span class="line"><span style="color:#24292e;">Using unicode-display_width 1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using webrick 1.8.1</span></span>
<span class="line"><span style="color:#24292e;">Using i18n 0.9.5</span></span>
<span class="line"><span style="color:#24292e;">Using tzinfo 1.2.10</span></span>
<span class="line"><span style="color:#24292e;">Using addressable 2.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using coffee-script 2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Using unf 0.1.4</span></span>
<span class="line"><span style="color:#24292e;">Using em-websocket 0.5.3</span></span>
<span class="line"><span style="color:#24292e;">Using ethon 0.15.0</span></span>
<span class="line"><span style="color:#24292e;">Using faraday 2.5.1</span></span>
<span class="line"><span style="color:#24292e;">Using rb-inotify 0.10.1</span></span>
<span class="line"><span style="color:#24292e;">Using kramdown 2.3.2</span></span>
<span class="line"><span style="color:#24292e;">Using pathutil 0.16.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-commonmark 1.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using activesupport 6.0.5.1</span></span>
<span class="line"><span style="color:#24292e;">Using simpleidn 0.2.1</span></span>
<span class="line"><span style="color:#24292e;">Using sawyer 0.9.2</span></span>
<span class="line"><span style="color:#24292e;">Using typhoeus 1.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using sass-listen 4.0.0</span></span>
<span class="line"><span style="color:#24292e;">Using listen 3.7.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-coffeescript 1.1.1</span></span>
<span class="line"><span style="color:#24292e;">Using kramdown-parser-gfm 1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Using terminal-table 1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using dnsruby 1.61.9</span></span>
<span class="line"><span style="color:#24292e;">Using octokit 4.25.1</span></span>
<span class="line"><span style="color:#24292e;">Using sass 3.7.4</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-watch 2.2.1</span></span>
<span class="line"><span style="color:#24292e;">Using github-pages-health-check 1.17.9</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-sass-converter 1.5.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-gist 1.5.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll 3.9.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-avatar 0.7.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-commonmark-ghpages 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-default-layout 0.1.4</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-feed 0.15.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-github-metadata 2.13.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-include-cache 0.2.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-optional-front-matter 0.3.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-readme-index 0.3.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-redirect-from 0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-relative-links 0.6.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-remote-theme 0.4.3</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-seo-tag 2.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-sitemap 1.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-titles-from-headings 0.5.3</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-architect 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-cayman 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-dinky 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-hacker 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-leap-day 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-merlot 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-midnight 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-minimal 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-modernist 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-primer 0.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-slate 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-tactile 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-time-machine 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using minima 2.5.1</span></span>
<span class="line"><span style="color:#24292e;">Installing nokogiri 1.13.8 with native extensions</span></span>
<span class="line"><span style="color:#24292e;">Gem::Ext::BuildError: ERROR: Failed to build gem native extension.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">current directory:</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/nokogiri-1.13.8/ext/nokogiri</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/bin/ruby.exe extconf.rb --use-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">--with-xml2-include\\=/usr/local/opt/libxml2/include/libxml2</span></span>
<span class="line"><span style="color:#24292e;">checking for whether -std=c99 is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#24292e;">checking for whether -Wno-declaration-after-statement is accepted as CFLAGS...</span></span>
<span class="line"><span style="color:#24292e;">yes</span></span>
<span class="line"><span style="color:#24292e;">checking for whether -g is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#24292e;">checking for whether -Winline is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#24292e;">checking for whether -Wmissing-noreturn is accepted as CFLAGS... yes</span></span>
<span class="line"><span style="color:#24292e;">checking for whether  &quot;-Idummypath&quot; is accepted as CPPFLAGS... yes</span></span>
<span class="line"><span style="color:#24292e;">Building nokogiri using system libraries.</span></span>
<span class="line"><span style="color:#24292e;">checking for gzdopen() in -lz... yes</span></span>
<span class="line"><span style="color:#24292e;">checking for xmlParseDoc() in -lxml2... no</span></span>
<span class="line"><span style="color:#24292e;">checking for xmlParseDoc() in -llibxml2... no</span></span>
<span class="line"><span style="color:#24292e;">checking for libxml-2.0 using \`pkg_config\`... no</span></span>
<span class="line"><span style="color:#24292e;">Please install either the \`pkg-config\` utility or the \`pkg-config\` rubygem.</span></span>
<span class="line"><span style="color:#24292e;">checking for xmlParseDoc() in -lxml2... no</span></span>
<span class="line"><span style="color:#24292e;">checking for xmlParseDoc() in -llibxml2... no</span></span>
<span class="line"><span style="color:#24292e;">-----</span></span>
<span class="line"><span style="color:#24292e;">extconf.rb:285:in \`ensure_package_configuration&#39;</span></span>
<span class="line"><span style="color:#24292e;">extconf.rb:648:in \`&lt;main&gt;&#39;</span></span>
<span class="line"><span style="color:#24292e;">xml2 is missing. Please locate mkmf.log to investigate how it is failing.</span></span>
<span class="line"><span style="color:#24292e;">-----</span></span>
<span class="line"><span style="color:#24292e;">*** extconf.rb failed ***</span></span>
<span class="line"><span style="color:#24292e;">Could not create Makefile due to some reason, probably lack of necessary</span></span>
<span class="line"><span style="color:#24292e;">libraries and/or headers.  Check the mkmf.log file for more details.  You may</span></span>
<span class="line"><span style="color:#24292e;">need configuration options.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Provided configuration options:</span></span>
<span class="line"><span style="color:#24292e;">        --with-opt-dir</span></span>
<span class="line"><span style="color:#24292e;">        --without-opt-dir</span></span>
<span class="line"><span style="color:#24292e;">        --with-opt-include</span></span>
<span class="line"><span style="color:#24292e;">        --without-opt-include=\${opt-dir}/include</span></span>
<span class="line"><span style="color:#24292e;">        --with-opt-lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-opt-lib=\${opt-dir}/lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-make-prog</span></span>
<span class="line"><span style="color:#24292e;">        --without-make-prog</span></span>
<span class="line"><span style="color:#24292e;">        --srcdir=.</span></span>
<span class="line"><span style="color:#24292e;">        --curdir</span></span>
<span class="line"><span style="color:#24292e;">        --ruby=C:/Ruby32-x64/bin/$(RUBY_BASE_NAME)</span></span>
<span class="line"><span style="color:#24292e;">        --help</span></span>
<span class="line"><span style="color:#24292e;">        --clean</span></span>
<span class="line"><span style="color:#24292e;">        --prevent-strip</span></span>
<span class="line"><span style="color:#24292e;">        --enable-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">        --disable-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">        --use-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">        --enable-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">        --disable-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">        --use-system-libraries</span></span>
<span class="line"><span style="color:#24292e;">        --with-zlib-dir</span></span>
<span class="line"><span style="color:#24292e;">        --without-zlib-dir</span></span>
<span class="line"><span style="color:#24292e;">        --with-zlib-include</span></span>
<span class="line"><span style="color:#24292e;">        --without-zlib-include=\${zlib-dir}/include</span></span>
<span class="line"><span style="color:#24292e;">        --with-zlib-lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-zlib-lib=\${zlib-dir}/lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-z-dir</span></span>
<span class="line"><span style="color:#24292e;">        --without-z-dir</span></span>
<span class="line"><span style="color:#24292e;">        --with-z-include</span></span>
<span class="line"><span style="color:#24292e;">        --without-z-include=\${z-dir}/include</span></span>
<span class="line"><span style="color:#24292e;">        --with-z-lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-z-lib=\${z-dir}/lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-zlib</span></span>
<span class="line"><span style="color:#24292e;">        --without-zlib</span></span>
<span class="line"><span style="color:#24292e;">        --with-xml2-dir</span></span>
<span class="line"><span style="color:#24292e;">        --without-xml2-dir</span></span>
<span class="line"><span style="color:#24292e;">        --with-xml2-include=\${xml2-dir}/include</span></span>
<span class="line"><span style="color:#24292e;">        --with-xml2-lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-xml2-lib=\${xml2-dir}/lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-xml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-xml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml2-dir</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml2-dir</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml2-include</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml2-include=\${libxml2-dir}/include</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml2-lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml2-lib=\${libxml2-dir}/lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml-2.0-dir</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml-2.0-dir</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml-2.0-include</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml-2.0-include=\${libxml-2.0-dir}/include</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml-2.0-lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml-2.0-lib=\${libxml-2.0-dir}/lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml-2.0-config</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml-2.0-config</span></span>
<span class="line"><span style="color:#24292e;">        --with-pkg-config</span></span>
<span class="line"><span style="color:#24292e;">        --without-pkg-config</span></span>
<span class="line"><span style="color:#24292e;">        --with-xml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-xml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --with-libxml2lib</span></span>
<span class="line"><span style="color:#24292e;">        --without-libxml2lib</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">To see why this extension failed to compile, please check the mkmf.log which can</span></span>
<span class="line"><span style="color:#24292e;">be found here:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/extensions/x64-mingw-ucrt/3.2.0/nokogiri-1.13.8/mkmf.log</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">extconf failed, exit code 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Gem files will remain installed in</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/nokogiri-1.13.8 for inspection.</span></span>
<span class="line"><span style="color:#24292e;">Results logged to</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/extensions/x64-mingw-ucrt/3.2.0/nokogiri-1.13.8/gem_make.out</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:120:in \`run&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/ext_conf_builder.rb:28:in</span></span>
<span class="line"><span style="color:#24292e;">\`build&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:188:in</span></span>
<span class="line"><span style="color:#24292e;">\`build_extension&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:222:in \`block</span></span>
<span class="line"><span style="color:#24292e;">in build_extensions&#39;</span></span>
<span class="line"><span style="color:#24292e;">  C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:219:in \`each&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/ext/builder.rb:219:in</span></span>
<span class="line"><span style="color:#24292e;">\`build_extensions&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/installer.rb:844:in</span></span>
<span class="line"><span style="color:#24292e;">\`build_extensions&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/rubygems_gem_installer.rb:72:in</span></span>
<span class="line"><span style="color:#24292e;">\`build_extensions&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/rubygems_gem_installer.rb:28:in</span></span>
<span class="line"><span style="color:#24292e;">\`install&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/source/rubygems.rb:207:in</span></span>
<span class="line"><span style="color:#24292e;">\`install&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/gem_installer.rb:54:in</span></span>
<span class="line"><span style="color:#24292e;">\`install&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/gem_installer.rb:16:in</span></span>
<span class="line"><span style="color:#24292e;">\`install_from_spec&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/parallel_installer.rb:186:in</span></span>
<span class="line"><span style="color:#24292e;">\`do_install&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/installer/parallel_installer.rb:177:in</span></span>
<span class="line"><span style="color:#24292e;">\`block in worker_pool&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:62:in</span></span>
<span class="line"><span style="color:#24292e;">\`apply_func&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:57:in</span></span>
<span class="line"><span style="color:#24292e;">\`block in process_queue&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:54:in</span></span>
<span class="line"><span style="color:#24292e;">\`loop&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:54:in</span></span>
<span class="line"><span style="color:#24292e;">\`process_queue&#39;</span></span>
<span class="line"><span style="color:#24292e;">C:/Ruby32-x64/lib/ruby/gems/3.2.0/gems/bundler-2.3.19/lib/bundler/worker.rb:91:in</span></span>
<span class="line"><span style="color:#24292e;">\`block (2 levels) in create_threads&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">An error occurred while installing nokogiri (1.13.8), and Bundler cannot</span></span>
<span class="line"><span style="color:#24292e;">continue.</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">In Gemfile:</span></span>
<span class="line"><span style="color:#24292e;">  github-pages was resolved to 227, which depends on</span></span>
<span class="line"><span style="color:#24292e;">    jekyll-mentions was resolved to 1.6.0, which depends on</span></span>
<span class="line"><span style="color:#24292e;">      html-pipeline was resolved to 2.14.2, which depends on</span></span>
<span class="line"><span style="color:#24292e;">        nokogiri</span></span></code></pre></div></details><h3 id="gem-ext-builderror-error-解决" tabindex="-1"><code>Gem::Ext::BuildError: ERROR</code> - 解决 <a class="header-anchor" href="#gem-ext-builderror-error-解决" aria-label="Permalink to &quot;\`Gem::Ext::BuildError: ERROR\` - 解决&quot;">​</a></h3><p>解决办法是分别运行 <code>gem update</code> 和 <code>bundle update</code>。</p><p>运行 <code>gem update</code> 时又出现了 <code>Gem::RemoteFetcher::FetchError</code> 问题：</p><details class="details custom-block"><summary><code>Gem::RemoteFetcher::FetchError</code> 详细信息</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gem update</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)</span></span>
<span class="line"><span style="color:#e1e4e8;">    IO::TimeoutError: Failed to open TCP connection to rubygems.org:80 (http://rubygems.org/specs.4.8.gz) (Gem::RemoteFetcher::FetchError)</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/remote_fetcher.rb:266:in \`rescue in fetch_path&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/remote_fetcher.rb:246:in \`fetch_path&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/remote_fetcher.rb:294:in \`cache_update_path&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source.rb:191:in \`load_specs&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:253:in \`tuples_for&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:220:in \`block in available_specs&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each_source&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:215:in \`available_specs&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:91:in \`search_for_dependency&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:143:in \`fetch_remote_gems&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:168:in \`highest_remote_name_tuple&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:308:in \`block in which_to_update&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:304:in \`each&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:304:in \`which_to_update&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:103:in \`execute&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command.rb:328:in \`invoke_with_build_args&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:253:in \`invoke_command&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:193:in \`process_args&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:151:in \`run&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/gem_runner.rb:56:in \`run&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">        C:/Ruby32-x64/bin/gem:10:in \`&lt;main&gt;&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gem update</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ERROR:  While executing gem ... (Gem::RemoteFetcher::FetchError)</span></span>
<span class="line"><span style="color:#24292e;">    IO::TimeoutError: Failed to open TCP connection to rubygems.org:80 (http://rubygems.org/specs.4.8.gz) (Gem::RemoteFetcher::FetchError)</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/remote_fetcher.rb:266:in \`rescue in fetch_path&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/remote_fetcher.rb:246:in \`fetch_path&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/remote_fetcher.rb:294:in \`cache_update_path&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source.rb:191:in \`load_specs&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:253:in \`tuples_for&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:220:in \`block in available_specs&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/source_list.rb:94:in \`each_source&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:215:in \`available_specs&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/spec_fetcher.rb:91:in \`search_for_dependency&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:143:in \`fetch_remote_gems&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:168:in \`highest_remote_name_tuple&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:308:in \`block in which_to_update&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:304:in \`each&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:304:in \`which_to_update&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/commands/update_command.rb:103:in \`execute&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command.rb:328:in \`invoke_with_build_args&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:253:in \`invoke_command&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:193:in \`process_args&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/command_manager.rb:151:in \`run&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/lib/ruby/site_ruby/3.2.0/rubygems/gem_runner.rb:56:in \`run&#39;</span></span>
<span class="line"><span style="color:#24292e;">        C:/Ruby32-x64/bin/gem:10:in \`&lt;main&gt;&#39;</span></span></code></pre></div></details><p>尝试 打开系统代理 / 使用 <code>set http_proxy=http://127.0.0.1:端口号</code> 设置代理，都没有用，只好打开 Clash 的 <code>TUN Mode</code>。</p><p><code>gem update</code> 和 <code>bundle update</code> 的运行情况如下：</p><details class="details custom-block"><summary><code>gem update</code> 运行情况</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ gem update</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Updating installed gems</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating activesupport</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching activesupport-7.1.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching tzinfo-2.0.6.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching connection_pool-2.4.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed activesupport-7.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for activesupport-7.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Couldn&#39;t find file to include &#39;activesupport/README.rdoc&#39; from lib/active_support.rb</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for activesupport-7.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for tzinfo, connection_pool, activesupport after 4 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for activesupport-7.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Couldn&#39;t find file to include &#39;activesupport/README.rdoc&#39; from lib/active_support.rb</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for activesupport, connection_pool, tzinfo after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating bigdecimal</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching bigdecimal-3.1.4.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Temporarily enhancing PATH for MSYS/MINGW...</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for bigdecimal after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for bigdecimal after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating coffee-script-source</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching coffee-script-source-1.12.2.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for coffee-script-source after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for coffee-script-source after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating csv</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching csv-3.2.7.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed csv-3.2.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for csv-3.2.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for csv-3.2.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for csv after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for csv-3.2.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for csv after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating debug</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching debug-1.8.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed debug-1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for debug-1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for debug-1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for debug after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for debug-1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for debug after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating dnsruby</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching dnsruby-1.70.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing dnsruby...</span></span>
<span class="line"><span style="color:#e1e4e8;">  For issues and source code: https://github.com/alexdalitz/dnsruby</span></span>
<span class="line"><span style="color:#e1e4e8;">  For general discussion (please tell us how you use dnsruby): https://groups.google.com/forum/#!forum/dnsruby</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for dnsruby after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for dnsruby after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating erb</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching erb-4.0.3.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed erb-4.0.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for erb-4.0.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for erb-4.0.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for erb after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for erb-4.0.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for erb after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating ethon</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching ethon-0.16.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed ethon-0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for ethon-0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for ethon-0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for ethon after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for ethon-0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for ethon after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating execjs</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching execjs-2.9.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed execjs-2.9.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for execjs-2.9.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for execjs-2.9.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for execjs after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for execjs-2.9.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for execjs after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating faraday</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching faraday-2.7.11.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed faraday-2.7.11</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for faraday-2.7.11</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for faraday-2.7.11</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for faraday after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for faraday-2.7.11</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for faraday after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating faraday-net_http</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching faraday-net_http-3.0.2.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for faraday-net_http after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for faraday-net_http after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating fileutils</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching fileutils-1.7.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed fileutils-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for fileutils-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for fileutils-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for fileutils after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for fileutils-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for fileutils after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating gemoji</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching gemoji-4.1.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed gemoji-4.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for gemoji-4.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for gemoji-4.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for gemoji after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for gemoji-4.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for gemoji after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating github-pages-health-check</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching github-pages-health-check-1.18.2.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for github-pages-health-check after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for github-pages-health-check after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating irb</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching irb-1.8.3.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching reline-0.3.9.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed reline-0.3.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed irb-1.8.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for reline-0.3.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for reline-0.3.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for irb-1.8.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for irb-1.8.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for reline, irb after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for irb-1.8.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for reline-0.3.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for irb, reline after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jekyll-avatar</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jekyll-avatar-0.8.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-avatar after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-avatar after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jekyll-coffeescript</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jekyll-coffeescript-2.0.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-coffeescript after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-coffeescript after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jekyll-default-layout</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jekyll-default-layout-0.1.5.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-default-layout after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-default-layout after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jekyll-feed</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jekyll-feed-0.17.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-feed after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-feed after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jekyll-github-metadata</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jekyll-github-metadata-2.16.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-github-metadata after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-github-metadata after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jekyll-relative-links</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jekyll-relative-links-0.7.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-relative-links after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jekyll-relative-links after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating jemoji</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching jemoji-0.13.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching nokogiri-1.15.4-x64-mingw-ucrt.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed jemoji-0.13.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jemoji-0.13.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for jemoji-0.13.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for nokogiri, jemoji after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for jemoji-0.13.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for jemoji, nokogiri after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating liquid</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching liquid-5.4.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed liquid-5.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for liquid-5.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for liquid-5.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for liquid after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for liquid-5.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for liquid after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating mini_portile2</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching mini_portile2-2.8.5.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for mini_portile2 after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for mini_portile2 after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating minitest</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching minitest-5.20.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed minitest-5.20.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for minitest-5.20.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Couldn&#39;t find file to include &#39;README.rdoc&#39; from lib/minitest.rb</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for minitest-5.20.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for minitest after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for minitest-5.20.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Couldn&#39;t find file to include &#39;README.rdoc&#39; from lib/minitest.rb</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for minitest after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating net-imap</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching net-imap-0.4.2.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed net-imap-0.4.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for net-imap-0.4.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for net-imap-0.4.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for net-imap after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for net-imap-0.4.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for net-imap after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating net-smtp</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching net-smtp-0.4.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for net-smtp after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for net-smtp after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating nkf</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching nkf-0.1.3.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed nkf-0.1.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for nkf-0.1.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for nkf-0.1.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for nkf after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for nkf-0.1.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for nkf after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating octokit</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching octokit-7.2.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed octokit-7.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for octokit-7.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for octokit-7.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for octokit after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for octokit-7.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for octokit after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating openssl</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching openssl-3.2.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing required msys2 packages: mingw-w64-ucrt-x86_64-openssl</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed openssl-3.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for openssl-3.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for openssl-3.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for openssl after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for openssl-3.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for openssl after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating psych</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching psych-5.1.1.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing required msys2 packages: mingw-w64-ucrt-x86_64-libyaml</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed psych-5.1.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for psych-5.1.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for psych-5.1.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for psych after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for psych-5.1.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for psych after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating racc</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching racc-1.7.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed racc-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for racc-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for racc-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for racc after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for racc-1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for racc after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating rake</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching rake-13.1.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed rake-13.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rake-13.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for rake-13.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rake after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rake-13.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rake after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating rbs</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching rbs-3.2.2.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed rbs-3.2.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rbs-3.2.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for rbs-3.2.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rbs after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rbs-3.2.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rbs after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating rexml</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching rexml-3.2.6.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed rexml-3.2.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rexml-3.2.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for rexml-3.2.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rexml after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rexml-3.2.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rexml after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating rouge</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching rouge-4.2.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed rouge-4.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rouge-4.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for rouge-4.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rouge after 4 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rouge-4.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rouge after 3 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating rss</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching rss-0.3.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed rss-0.3.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rss-0.3.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for rss-0.3.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rss after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for rss-0.3.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for rss after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating sass-embedded</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching sass-embedded-1.69.5-x64-mingw-ucrt.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">sass-embedded&#39;s executable &quot;sass&quot; conflicts with sass</span></span>
<span class="line"><span style="color:#e1e4e8;">Overwrite the executable? [yN]  n</span></span>
<span class="line"><span style="color:#e1e4e8;">ERROR:  Error installing sass-embedded:</span></span>
<span class="line"><span style="color:#e1e4e8;">        &quot;sass&quot; from sass-embedded conflicts with installed executable from sass</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating stringio</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching stringio-3.0.8.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed stringio-3.0.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for stringio-3.0.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for stringio-3.0.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for stringio after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for stringio-3.0.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for stringio after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating strscan</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching strscan-3.0.7.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed strscan-3.0.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for strscan-3.0.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for strscan-3.0.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for strscan after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for strscan-3.0.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for strscan after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating syntax_suggest</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching syntax_suggest-1.1.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for syntax_suggest after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for syntax_suggest after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating test-unit</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching test-unit-3.6.1.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed test-unit-3.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for test-unit-3.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for test-unit-3.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for test-unit after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for test-unit-3.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for test-unit after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating timeout</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching timeout-0.4.0.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed timeout-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for timeout-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for timeout-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for timeout after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for timeout-0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for timeout after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating typeprof</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching typeprof-0.21.8.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed typeprof-0.21.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for typeprof-0.21.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for typeprof-0.21.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for typeprof after 1 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for typeprof-0.21.8</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for typeprof after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating uri</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching uri-0.12.2.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed uri-0.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for uri-0.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for uri-0.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for uri after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for uri-0.12.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for uri after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Updating zeitwerk</span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching zeitwerk-2.6.12.gem</span></span>
<span class="line"><span style="color:#e1e4e8;">Successfully installed zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#e1e4e8;">Installing ri documentation for zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for zeitwerk after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Parsing documentation for zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#e1e4e8;">Done installing documentation for zeitwerk after 0 seconds</span></span>
<span class="line"><span style="color:#e1e4e8;">Gems updated: activesupport connection_pool tzinfo bigdecimal coffee-script-source csv debug dnsruby erb ethon execjs faraday faraday-net_http fileutils gemoji github-pages-health-check irb reline jekyll-avatar jekyll-coffeescript jekyll-default-layout jekyll-feed jekyll-github-metadata jekyll-relative-links jemoji nokogiri liquid mini_portile2 minitest net-imap net-smtp nkf octokit openssl psych racc rake rbs rexml rouge rss sass-embedded stringio strscan syntax_suggest test-unit timeout typeprof uri zeitwerk</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ gem update</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Updating installed gems</span></span>
<span class="line"><span style="color:#24292e;">Updating activesupport</span></span>
<span class="line"><span style="color:#24292e;">Fetching activesupport-7.1.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Fetching tzinfo-2.0.6.gem</span></span>
<span class="line"><span style="color:#24292e;">Fetching connection_pool-2.4.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed activesupport-7.1.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for activesupport-7.1.1</span></span>
<span class="line"><span style="color:#24292e;">Couldn&#39;t find file to include &#39;activesupport/README.rdoc&#39; from lib/active_support.rb</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for activesupport-7.1.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for tzinfo, connection_pool, activesupport after 4 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for activesupport-7.1.1</span></span>
<span class="line"><span style="color:#24292e;">Couldn&#39;t find file to include &#39;activesupport/README.rdoc&#39; from lib/active_support.rb</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for connection_pool-2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for tzinfo-2.0.6</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for activesupport, connection_pool, tzinfo after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating bigdecimal</span></span>
<span class="line"><span style="color:#24292e;">Fetching bigdecimal-3.1.4.gem</span></span>
<span class="line"><span style="color:#24292e;">Temporarily enhancing PATH for MSYS/MINGW...</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for bigdecimal after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for bigdecimal-3.1.4</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for bigdecimal after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating coffee-script-source</span></span>
<span class="line"><span style="color:#24292e;">Fetching coffee-script-source-1.12.2.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for coffee-script-source after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for coffee-script-source-1.12.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for coffee-script-source after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating csv</span></span>
<span class="line"><span style="color:#24292e;">Fetching csv-3.2.7.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed csv-3.2.7</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for csv-3.2.7</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for csv-3.2.7</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for csv after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for csv-3.2.7</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for csv after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating debug</span></span>
<span class="line"><span style="color:#24292e;">Fetching debug-1.8.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed debug-1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for debug-1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for debug-1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for debug after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for debug-1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for debug after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating dnsruby</span></span>
<span class="line"><span style="color:#24292e;">Fetching dnsruby-1.70.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Installing dnsruby...</span></span>
<span class="line"><span style="color:#24292e;">  For issues and source code: https://github.com/alexdalitz/dnsruby</span></span>
<span class="line"><span style="color:#24292e;">  For general discussion (please tell us how you use dnsruby): https://groups.google.com/forum/#!forum/dnsruby</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for dnsruby after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for dnsruby-1.70.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for dnsruby after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating erb</span></span>
<span class="line"><span style="color:#24292e;">Fetching erb-4.0.3.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed erb-4.0.3</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for erb-4.0.3</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for erb-4.0.3</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for erb after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for erb-4.0.3</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for erb after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating ethon</span></span>
<span class="line"><span style="color:#24292e;">Fetching ethon-0.16.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed ethon-0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for ethon-0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for ethon-0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for ethon after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for ethon-0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for ethon after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating execjs</span></span>
<span class="line"><span style="color:#24292e;">Fetching execjs-2.9.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed execjs-2.9.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for execjs-2.9.1</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for execjs-2.9.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for execjs after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for execjs-2.9.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for execjs after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating faraday</span></span>
<span class="line"><span style="color:#24292e;">Fetching faraday-2.7.11.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed faraday-2.7.11</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for faraday-2.7.11</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for faraday-2.7.11</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for faraday after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for faraday-2.7.11</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for faraday after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating faraday-net_http</span></span>
<span class="line"><span style="color:#24292e;">Fetching faraday-net_http-3.0.2.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for faraday-net_http after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for faraday-net_http-3.0.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for faraday-net_http after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating fileutils</span></span>
<span class="line"><span style="color:#24292e;">Fetching fileutils-1.7.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed fileutils-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for fileutils-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for fileutils-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for fileutils after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for fileutils-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for fileutils after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating gemoji</span></span>
<span class="line"><span style="color:#24292e;">Fetching gemoji-4.1.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed gemoji-4.1.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for gemoji-4.1.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for gemoji-4.1.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for gemoji after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for gemoji-4.1.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for gemoji after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating github-pages-health-check</span></span>
<span class="line"><span style="color:#24292e;">Fetching github-pages-health-check-1.18.2.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for github-pages-health-check after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for github-pages-health-check-1.18.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for github-pages-health-check after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating irb</span></span>
<span class="line"><span style="color:#24292e;">Fetching irb-1.8.3.gem</span></span>
<span class="line"><span style="color:#24292e;">Fetching reline-0.3.9.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed reline-0.3.9</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed irb-1.8.3</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for reline-0.3.9</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for reline-0.3.9</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for irb-1.8.3</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for irb-1.8.3</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for reline, irb after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for irb-1.8.3</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for reline-0.3.9</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for irb, reline after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jekyll-avatar</span></span>
<span class="line"><span style="color:#24292e;">Fetching jekyll-avatar-0.8.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-avatar after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-avatar-0.8.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-avatar after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jekyll-coffeescript</span></span>
<span class="line"><span style="color:#24292e;">Fetching jekyll-coffeescript-2.0.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-coffeescript after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-coffeescript-2.0.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-coffeescript after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jekyll-default-layout</span></span>
<span class="line"><span style="color:#24292e;">Fetching jekyll-default-layout-0.1.5.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-default-layout after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-default-layout-0.1.5</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-default-layout after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jekyll-feed</span></span>
<span class="line"><span style="color:#24292e;">Fetching jekyll-feed-0.17.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-feed after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-feed-0.17.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-feed after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jekyll-github-metadata</span></span>
<span class="line"><span style="color:#24292e;">Fetching jekyll-github-metadata-2.16.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-github-metadata after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-github-metadata-2.16.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-github-metadata after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jekyll-relative-links</span></span>
<span class="line"><span style="color:#24292e;">Fetching jekyll-relative-links-0.7.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-relative-links after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jekyll-relative-links-0.7.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jekyll-relative-links after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating jemoji</span></span>
<span class="line"><span style="color:#24292e;">Fetching jemoji-0.13.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Fetching nokogiri-1.15.4-x64-mingw-ucrt.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed jemoji-0.13.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jemoji-0.13.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for jemoji-0.13.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for nokogiri, jemoji after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for jemoji-0.13.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for nokogiri-1.15.4-x64-mingw-ucrt</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for jemoji, nokogiri after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating liquid</span></span>
<span class="line"><span style="color:#24292e;">Fetching liquid-5.4.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed liquid-5.4.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for liquid-5.4.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for liquid-5.4.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for liquid after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for liquid-5.4.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for liquid after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating mini_portile2</span></span>
<span class="line"><span style="color:#24292e;">Fetching mini_portile2-2.8.5.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for mini_portile2 after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for mini_portile2-2.8.5</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for mini_portile2 after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating minitest</span></span>
<span class="line"><span style="color:#24292e;">Fetching minitest-5.20.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed minitest-5.20.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for minitest-5.20.0</span></span>
<span class="line"><span style="color:#24292e;">Couldn&#39;t find file to include &#39;README.rdoc&#39; from lib/minitest.rb</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for minitest-5.20.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for minitest after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for minitest-5.20.0</span></span>
<span class="line"><span style="color:#24292e;">Couldn&#39;t find file to include &#39;README.rdoc&#39; from lib/minitest.rb</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for minitest after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating net-imap</span></span>
<span class="line"><span style="color:#24292e;">Fetching net-imap-0.4.2.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed net-imap-0.4.2</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for net-imap-0.4.2</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for net-imap-0.4.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for net-imap after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for net-imap-0.4.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for net-imap after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating net-smtp</span></span>
<span class="line"><span style="color:#24292e;">Fetching net-smtp-0.4.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for net-smtp after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for net-smtp-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for net-smtp after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating nkf</span></span>
<span class="line"><span style="color:#24292e;">Fetching nkf-0.1.3.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed nkf-0.1.3</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for nkf-0.1.3</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for nkf-0.1.3</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for nkf after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for nkf-0.1.3</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for nkf after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating octokit</span></span>
<span class="line"><span style="color:#24292e;">Fetching octokit-7.2.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed octokit-7.2.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for octokit-7.2.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for octokit-7.2.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for octokit after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for octokit-7.2.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for octokit after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating openssl</span></span>
<span class="line"><span style="color:#24292e;">Fetching openssl-3.2.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Installing required msys2 packages: mingw-w64-ucrt-x86_64-openssl</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed openssl-3.2.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for openssl-3.2.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for openssl-3.2.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for openssl after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for openssl-3.2.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for openssl after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating psych</span></span>
<span class="line"><span style="color:#24292e;">Fetching psych-5.1.1.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Installing required msys2 packages: mingw-w64-ucrt-x86_64-libyaml</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed psych-5.1.1.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for psych-5.1.1.1</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for psych-5.1.1.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for psych after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for psych-5.1.1.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for psych after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating racc</span></span>
<span class="line"><span style="color:#24292e;">Fetching racc-1.7.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed racc-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for racc-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for racc-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for racc after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for racc-1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for racc after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating rake</span></span>
<span class="line"><span style="color:#24292e;">Fetching rake-13.1.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed rake-13.1.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rake-13.1.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for rake-13.1.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rake after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rake-13.1.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rake after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating rbs</span></span>
<span class="line"><span style="color:#24292e;">Fetching rbs-3.2.2.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed rbs-3.2.2</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rbs-3.2.2</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for rbs-3.2.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rbs after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rbs-3.2.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rbs after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating rexml</span></span>
<span class="line"><span style="color:#24292e;">Fetching rexml-3.2.6.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed rexml-3.2.6</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rexml-3.2.6</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for rexml-3.2.6</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rexml after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rexml-3.2.6</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rexml after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating rouge</span></span>
<span class="line"><span style="color:#24292e;">Fetching rouge-4.2.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed rouge-4.2.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rouge-4.2.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for rouge-4.2.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rouge after 4 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rouge-4.2.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rouge after 3 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating rss</span></span>
<span class="line"><span style="color:#24292e;">Fetching rss-0.3.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed rss-0.3.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rss-0.3.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for rss-0.3.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rss after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for rss-0.3.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for rss after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating sass-embedded</span></span>
<span class="line"><span style="color:#24292e;">Fetching sass-embedded-1.69.5-x64-mingw-ucrt.gem</span></span>
<span class="line"><span style="color:#24292e;">sass-embedded&#39;s executable &quot;sass&quot; conflicts with sass</span></span>
<span class="line"><span style="color:#24292e;">Overwrite the executable? [yN]  n</span></span>
<span class="line"><span style="color:#24292e;">ERROR:  Error installing sass-embedded:</span></span>
<span class="line"><span style="color:#24292e;">        &quot;sass&quot; from sass-embedded conflicts with installed executable from sass</span></span>
<span class="line"><span style="color:#24292e;">Updating stringio</span></span>
<span class="line"><span style="color:#24292e;">Fetching stringio-3.0.8.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed stringio-3.0.8</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for stringio-3.0.8</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for stringio-3.0.8</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for stringio after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for stringio-3.0.8</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for stringio after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating strscan</span></span>
<span class="line"><span style="color:#24292e;">Fetching strscan-3.0.7.gem</span></span>
<span class="line"><span style="color:#24292e;">Building native extensions. This could take a while...</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed strscan-3.0.7</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for strscan-3.0.7</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for strscan-3.0.7</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for strscan after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for strscan-3.0.7</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for strscan after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating syntax_suggest</span></span>
<span class="line"><span style="color:#24292e;">Fetching syntax_suggest-1.1.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for syntax_suggest after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for syntax_suggest-1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for syntax_suggest after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating test-unit</span></span>
<span class="line"><span style="color:#24292e;">Fetching test-unit-3.6.1.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed test-unit-3.6.1</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for test-unit-3.6.1</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for test-unit-3.6.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for test-unit after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for test-unit-3.6.1</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for test-unit after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating timeout</span></span>
<span class="line"><span style="color:#24292e;">Fetching timeout-0.4.0.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed timeout-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for timeout-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for timeout-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for timeout after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for timeout-0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for timeout after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating typeprof</span></span>
<span class="line"><span style="color:#24292e;">Fetching typeprof-0.21.8.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed typeprof-0.21.8</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for typeprof-0.21.8</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for typeprof-0.21.8</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for typeprof after 1 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for typeprof-0.21.8</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for typeprof after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating uri</span></span>
<span class="line"><span style="color:#24292e;">Fetching uri-0.12.2.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed uri-0.12.2</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for uri-0.12.2</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for uri-0.12.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for uri after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for uri-0.12.2</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for uri after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Updating zeitwerk</span></span>
<span class="line"><span style="color:#24292e;">Fetching zeitwerk-2.6.12.gem</span></span>
<span class="line"><span style="color:#24292e;">Successfully installed zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#24292e;">Installing ri documentation for zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for zeitwerk after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Parsing documentation for zeitwerk-2.6.12</span></span>
<span class="line"><span style="color:#24292e;">Done installing documentation for zeitwerk after 0 seconds</span></span>
<span class="line"><span style="color:#24292e;">Gems updated: activesupport connection_pool tzinfo bigdecimal coffee-script-source csv debug dnsruby erb ethon execjs faraday faraday-net_http fileutils gemoji github-pages-health-check irb reline jekyll-avatar jekyll-coffeescript jekyll-default-layout jekyll-feed jekyll-github-metadata jekyll-relative-links jemoji nokogiri liquid mini_portile2 minitest net-imap net-smtp nkf octokit openssl psych racc rake rbs rexml rouge rss sass-embedded stringio strscan syntax_suggest test-unit timeout typeprof uri zeitwerk</span></span></code></pre></div></details><details class="details custom-block"><summary><code>bundle update</code> 运行情况</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ bundle update</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Fetching gem metadata from https://rubygems.org/..........</span></span>
<span class="line"><span style="color:#e1e4e8;">Resolving dependencies........</span></span>
<span class="line"><span style="color:#e1e4e8;">Using base64 0.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using ruby2_keywords 0.0.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using mutex_m 0.1.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using bundler 2.3.19</span></span>
<span class="line"><span style="color:#e1e4e8;">Using bigdecimal 3.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using concurrent-ruby 1.2.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using connection_pool 2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using minitest 5.20.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using public_suffix 4.0.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Using coffee-script-source 1.11.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using execjs 2.9.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using colorator 1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using commonmarker 0.23.10</span></span>
<span class="line"><span style="color:#e1e4e8;">Using unf_ext 0.0.8.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using eventmachine 1.2.7</span></span>
<span class="line"><span style="color:#e1e4e8;">Using http_parser.rb 0.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using ffi 1.16.3 (x64-mingw-ucrt)</span></span>
<span class="line"><span style="color:#e1e4e8;">Using faraday-net_http 3.0.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using forwardable-extended 2.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using gemoji 3.0.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rb-fsevent 0.11.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rexml 3.2.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Using drb 2.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using liquid 4.0.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using mercenary 0.3.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rouge 3.26.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using safe_yaml 1.0.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using racc 1.7.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-paginate 1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rubyzip 2.3.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-swiss 1.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using unicode-display_width 1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using webrick 1.8.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using i18n 1.14.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using tzinfo 2.0.6</span></span>
<span class="line"><span style="color:#e1e4e8;">Using addressable 2.8.5</span></span>
<span class="line"><span style="color:#e1e4e8;">Using coffee-script 2.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using unf 0.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using em-websocket 0.5.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using ethon 0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using faraday 2.7.11</span></span>
<span class="line"><span style="color:#e1e4e8;">Using rb-inotify 0.10.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using pathutil 0.16.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-commonmark 1.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using kramdown 2.3.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using terminal-table 1.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using activesupport 7.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using simpleidn 0.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using sawyer 0.9.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using typhoeus 1.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using sass-listen 4.0.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using listen 3.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-coffeescript 1.1.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using kramdown-parser-gfm 1.1.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using dnsruby 1.70.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using octokit 4.25.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using sass 3.7.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-watch 2.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using github-pages-health-check 1.17.9</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-sass-converter 1.5.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-gist 1.5.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll 3.9.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-avatar 0.7.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-commonmark-ghpages 0.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-default-layout 0.1.4</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-feed 0.15.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-github-metadata 2.13.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-include-cache 0.2.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-optional-front-matter 0.3.2</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-readme-index 0.3.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-redirect-from 0.16.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-relative-links 0.6.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-remote-theme 0.4.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-seo-tag 2.8.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-sitemap 1.4.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-titles-from-headings 0.5.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-architect 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-cayman 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-dinky 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-hacker 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-leap-day 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-merlot 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-midnight 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-minimal 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-modernist 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-primer 0.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-slate 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-tactile 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-theme-time-machine 0.2.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using minima 2.5.1</span></span>
<span class="line"><span style="color:#e1e4e8;">Using nokogiri 1.15.4 (x64-mingw-ucrt)</span></span>
<span class="line"><span style="color:#e1e4e8;">Using html-pipeline 2.14.3</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jekyll-mentions 1.6.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using jemoji 0.12.0</span></span>
<span class="line"><span style="color:#e1e4e8;">Using github-pages 228</span></span>
<span class="line"><span style="color:#e1e4e8;">Bundle updated!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ bundle update</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Fetching gem metadata from https://rubygems.org/..........</span></span>
<span class="line"><span style="color:#24292e;">Resolving dependencies........</span></span>
<span class="line"><span style="color:#24292e;">Using base64 0.1.1</span></span>
<span class="line"><span style="color:#24292e;">Using ruby2_keywords 0.0.5</span></span>
<span class="line"><span style="color:#24292e;">Using mutex_m 0.1.2</span></span>
<span class="line"><span style="color:#24292e;">Using bundler 2.3.19</span></span>
<span class="line"><span style="color:#24292e;">Using bigdecimal 3.1.4</span></span>
<span class="line"><span style="color:#24292e;">Using concurrent-ruby 1.2.2</span></span>
<span class="line"><span style="color:#24292e;">Using connection_pool 2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Using minitest 5.20.0</span></span>
<span class="line"><span style="color:#24292e;">Using public_suffix 4.0.7</span></span>
<span class="line"><span style="color:#24292e;">Using coffee-script-source 1.11.1</span></span>
<span class="line"><span style="color:#24292e;">Using execjs 2.9.1</span></span>
<span class="line"><span style="color:#24292e;">Using colorator 1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Using commonmarker 0.23.10</span></span>
<span class="line"><span style="color:#24292e;">Using unf_ext 0.0.8.2</span></span>
<span class="line"><span style="color:#24292e;">Using eventmachine 1.2.7</span></span>
<span class="line"><span style="color:#24292e;">Using http_parser.rb 0.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using ffi 1.16.3 (x64-mingw-ucrt)</span></span>
<span class="line"><span style="color:#24292e;">Using faraday-net_http 3.0.2</span></span>
<span class="line"><span style="color:#24292e;">Using forwardable-extended 2.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using gemoji 3.0.1</span></span>
<span class="line"><span style="color:#24292e;">Using rb-fsevent 0.11.2</span></span>
<span class="line"><span style="color:#24292e;">Using rexml 3.2.6</span></span>
<span class="line"><span style="color:#24292e;">Using drb 2.1.1</span></span>
<span class="line"><span style="color:#24292e;">Using liquid 4.0.4</span></span>
<span class="line"><span style="color:#24292e;">Using mercenary 0.3.6</span></span>
<span class="line"><span style="color:#24292e;">Using rouge 3.26.0</span></span>
<span class="line"><span style="color:#24292e;">Using safe_yaml 1.0.5</span></span>
<span class="line"><span style="color:#24292e;">Using racc 1.7.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-paginate 1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Using rubyzip 2.3.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-swiss 1.0.0</span></span>
<span class="line"><span style="color:#24292e;">Using unicode-display_width 1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using webrick 1.8.1</span></span>
<span class="line"><span style="color:#24292e;">Using i18n 1.14.1</span></span>
<span class="line"><span style="color:#24292e;">Using tzinfo 2.0.6</span></span>
<span class="line"><span style="color:#24292e;">Using addressable 2.8.5</span></span>
<span class="line"><span style="color:#24292e;">Using coffee-script 2.4.1</span></span>
<span class="line"><span style="color:#24292e;">Using unf 0.1.4</span></span>
<span class="line"><span style="color:#24292e;">Using em-websocket 0.5.3</span></span>
<span class="line"><span style="color:#24292e;">Using ethon 0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Using faraday 2.7.11</span></span>
<span class="line"><span style="color:#24292e;">Using rb-inotify 0.10.1</span></span>
<span class="line"><span style="color:#24292e;">Using pathutil 0.16.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-commonmark 1.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using kramdown 2.3.2</span></span>
<span class="line"><span style="color:#24292e;">Using terminal-table 1.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using activesupport 7.1.1</span></span>
<span class="line"><span style="color:#24292e;">Using simpleidn 0.2.1</span></span>
<span class="line"><span style="color:#24292e;">Using sawyer 0.9.2</span></span>
<span class="line"><span style="color:#24292e;">Using typhoeus 1.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using sass-listen 4.0.0</span></span>
<span class="line"><span style="color:#24292e;">Using listen 3.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-coffeescript 1.1.1</span></span>
<span class="line"><span style="color:#24292e;">Using kramdown-parser-gfm 1.1.0</span></span>
<span class="line"><span style="color:#24292e;">Using dnsruby 1.70.0</span></span>
<span class="line"><span style="color:#24292e;">Using octokit 4.25.1</span></span>
<span class="line"><span style="color:#24292e;">Using sass 3.7.4</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-watch 2.2.1</span></span>
<span class="line"><span style="color:#24292e;">Using github-pages-health-check 1.17.9</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-sass-converter 1.5.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-gist 1.5.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll 3.9.3</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-avatar 0.7.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-commonmark-ghpages 0.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-default-layout 0.1.4</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-feed 0.15.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-github-metadata 2.13.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-include-cache 0.2.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-optional-front-matter 0.3.2</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-readme-index 0.3.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-redirect-from 0.16.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-relative-links 0.6.1</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-remote-theme 0.4.3</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-seo-tag 2.8.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-sitemap 1.4.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-titles-from-headings 0.5.3</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-architect 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-cayman 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-dinky 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-hacker 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-leap-day 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-merlot 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-midnight 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-minimal 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-modernist 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-primer 0.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-slate 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-tactile 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-theme-time-machine 0.2.0</span></span>
<span class="line"><span style="color:#24292e;">Using minima 2.5.1</span></span>
<span class="line"><span style="color:#24292e;">Using nokogiri 1.15.4 (x64-mingw-ucrt)</span></span>
<span class="line"><span style="color:#24292e;">Using html-pipeline 2.14.3</span></span>
<span class="line"><span style="color:#24292e;">Using jekyll-mentions 1.6.0</span></span>
<span class="line"><span style="color:#24292e;">Using jemoji 0.12.0</span></span>
<span class="line"><span style="color:#24292e;">Using github-pages 228</span></span>
<span class="line"><span style="color:#24292e;">Bundle updated!</span></span></code></pre></div></details><h2 id="成功运行本地服务器" tabindex="-1">成功运行本地服务器 <a class="header-anchor" href="#成功运行本地服务器" aria-label="Permalink to &quot;成功运行本地服务器&quot;">​</a></h2><p>使用 <code>bundle exec jekyll serve</code> 即可运行本地服务器</p><details class="details custom-block"><summary><code>bundle exec jekyll serve</code></summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$ bundle exec jekyll serve</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Configuration file: Y:/repositories/Github-Repos/online-cv/_config.yml</span></span>
<span class="line"><span style="color:#e1e4e8;">            Source: Y:/repositories/Github-Repos/online-cv</span></span>
<span class="line"><span style="color:#e1e4e8;">       Destination: Y:/repositories/Github-Repos/online-cv/_site</span></span>
<span class="line"><span style="color:#e1e4e8;"> Incremental build: disabled. Enable with --incremental</span></span>
<span class="line"><span style="color:#e1e4e8;">      Generating...</span></span>
<span class="line"><span style="color:#e1e4e8;">                    done in 2.128 seconds.</span></span>
<span class="line"><span style="color:#e1e4e8;">  Please add the following to your Gemfile to avoid polling for changes:</span></span>
<span class="line"><span style="color:#e1e4e8;">    gem &#39;wdm&#39;, &#39;&gt;= 0.1.0&#39; if Gem.win_platform?</span></span>
<span class="line"><span style="color:#e1e4e8;"> Auto-regeneration: enabled for &#39;Y:/repositories/Github-Repos/online-cv&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">    Server address: http://0.0.0.0:4000</span></span>
<span class="line"><span style="color:#e1e4e8;">  Server running... press ctrl-c to stop.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$ bundle exec jekyll serve</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Configuration file: Y:/repositories/Github-Repos/online-cv/_config.yml</span></span>
<span class="line"><span style="color:#24292e;">            Source: Y:/repositories/Github-Repos/online-cv</span></span>
<span class="line"><span style="color:#24292e;">       Destination: Y:/repositories/Github-Repos/online-cv/_site</span></span>
<span class="line"><span style="color:#24292e;"> Incremental build: disabled. Enable with --incremental</span></span>
<span class="line"><span style="color:#24292e;">      Generating...</span></span>
<span class="line"><span style="color:#24292e;">                    done in 2.128 seconds.</span></span>
<span class="line"><span style="color:#24292e;">  Please add the following to your Gemfile to avoid polling for changes:</span></span>
<span class="line"><span style="color:#24292e;">    gem &#39;wdm&#39;, &#39;&gt;= 0.1.0&#39; if Gem.win_platform?</span></span>
<span class="line"><span style="color:#24292e;"> Auto-regeneration: enabled for &#39;Y:/repositories/Github-Repos/online-cv&#39;</span></span>
<span class="line"><span style="color:#24292e;">    Server address: http://0.0.0.0:4000</span></span>
<span class="line"><span style="color:#24292e;">  Server running... press ctrl-c to stop.</span></span></code></pre></div></details><p>在浏览器中打开 <code>http://localhost:4000/</code> 即可预览编辑。</p><p><img src="https://cdn.tangjiayan.com/notes/web-build/jekyll/jekyll-cv/localhost.png" alt="localhost"></p><p>编辑好了 push 到 GitHub 就行了。</p>`,46),o=[p];function i(t,c,r,y,u,d){return n(),e("div",null,o)}const b=s(l,[["render",i]]);export{m as __pageData,b as default};
