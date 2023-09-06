import{_ as t,o as d,c as r,Q as e}from"./chunks/framework.1fa2d359.js";const x=JSON.parse('{"title":"STM32 命名规则","description":"","frontmatter":{},"headers":[],"relativePath":"embeded/stm32-naming-rule.md","filePath":"embeded/stm32-naming-rule.md","lastUpdated":null}'),a={name:"embeded/stm32-naming-rule.md"},o=e('<h1 id="stm32-命名规则" tabindex="-1">STM32 命名规则 <a class="header-anchor" href="#stm32-命名规则" aria-label="Permalink to &quot;STM32 命名规则&quot;">​</a></h1><h2 id="命名规则" tabindex="-1">命名规则 <a class="header-anchor" href="#命名规则" aria-label="Permalink to &quot;命名规则&quot;">​</a></h2><p>STM32 xx ww y z α β</p><ul><li><code>xx</code>：系列家族</li><li><code>ww</code>：子类型，因系列家族的不同而异</li><li><code>y</code>：封装引脚数</li><li><code>z</code>：闪存 (Flash) 容量</li><li><code>α</code>：封装类型</li><li><code>β</code>：工作温度</li></ul><h2 id="例" tabindex="-1">例 <a class="header-anchor" href="#例" aria-label="Permalink to &quot;例&quot;">​</a></h2><h3 id="stm32-f1-03-c-8-t-6" tabindex="-1">STM32 F1 03 C 8 T 6 <a class="header-anchor" href="#stm32-f1-03-c-8-t-6" aria-label="Permalink to &quot;STM32 F1 03 C 8 T 6&quot;">​</a></h3><ul><li><code>F1</code>：F1 系列</li><li><code>03</code>：03 子系列</li><li><code>C</code>：48 个引脚</li><li><code>8</code>：64 KB Flash</li><li><code>T</code>：<a href="https://en.wikipedia.org/wiki/Quad_flat_package#LQFP" target="_blank" rel="noreferrer">LQFP</a> 封装</li><li><code>6</code>：-40℃ ~ 85℃</li></ul><h3 id="stm32-f4-07-z-g-t-6" tabindex="-1">STM32 F4 07 Z G T 6 <a class="header-anchor" href="#stm32-f4-07-z-g-t-6" aria-label="Permalink to &quot;STM32 F4 07 Z G T 6&quot;">​</a></h3><ul><li><code>F4</code>：F4 系列</li><li><code>07</code>：07 子系列</li><li><code>Z</code>：144 引脚</li><li><code>G</code>：1024 KB Flash</li><li><code>T</code>：LQFP 封装</li><li><code>6</code>：-40℃ ~ 85℃</li></ul><p>具体编码对应数值见后续表格。</p><details class="details custom-block"><summary>数据来源</summary><p>系列家族、引脚数、闪存容量 来自 <a href="https://en.wikipedia.org/wiki/STM32#Part_number_decoding" target="_blank" rel="noreferrer">STM32_Part number decoding - Wikipedia</a>，使用 <a href="https://tableconvert.com/html-to-markdown" target="_blank" rel="noreferrer">Convert HTML Table to Markdown Table - Table Convert Online</a> 工具，将 HTML &lt;table&gt; 转化为 Markdown Table</p><p>封装类型、工作温度 来自 <a href="https://www.digikey.com/en/maker/blogs/2020/understanding-stm32-naming-conventions" target="_blank" rel="noreferrer">Understanding STM32 Naming Conventions</a></p></details><h2 id="xx-系列家族" tabindex="-1">xx：系列家族 <a class="header-anchor" href="#xx-系列家族" aria-label="Permalink to &quot;xx：系列家族&quot;">​</a></h2><table><thead><tr><th>Code</th><th>Core</th><th>Max freq [MHz]</th><th>Max FLASH [KB]</th><th>Max SRAM [KB]</th><th>Target</th></tr></thead><tbody><tr><td>F0</td><td>Cortex-M0</td><td>48</td><td>256</td><td>32</td><td>Mainstream</td></tr><tr><td>F1</td><td>Cortex-M3</td><td>72</td><td>1024</td><td>96</td><td>Mainstream</td></tr><tr><td>F2</td><td>Cortex-M3</td><td>120</td><td>1024</td><td>128</td><td>High performance</td></tr><tr><td>F3</td><td>Cortex-M4F</td><td>72</td><td>512</td><td>80</td><td>Mainstream</td></tr><tr><td>F4</td><td>Cortex-M4F</td><td>180</td><td>2048</td><td>384</td><td>High performance</td></tr><tr><td>G0</td><td>Cortex-M0+</td><td>64</td><td>512</td><td>144</td><td>Mainstream</td></tr><tr><td>G4</td><td>Cortex-M4F</td><td>170</td><td>512</td><td>128</td><td>Mainstream</td></tr><tr><td>F7</td><td>Cortex-M7F</td><td>216</td><td>2048</td><td>512</td><td>High performance</td></tr><tr><td>H7</td><td>Cortex-M7F</td><td>480</td><td>2048</td><td>1024</td><td>High performance</td></tr><tr><td>L0</td><td>Cortex-M0+</td><td>32</td><td>192</td><td>20</td><td>Ultra low power</td></tr><tr><td>L1</td><td>Cortex-M3</td><td>32</td><td>512</td><td>80</td><td>Ultra low power</td></tr><tr><td>L4</td><td>Cortex-M4F</td><td>80</td><td>1024</td><td>320</td><td>Ultra low power</td></tr><tr><td>L4+</td><td>Cortex-M4F</td><td>120</td><td>2048</td><td>640</td><td>Ultra low power</td></tr><tr><td>L5</td><td>Cortex-M33F</td><td>110</td><td>512</td><td>256</td><td>Ultra low power</td></tr><tr><td>U5</td><td>Cortex-M33F</td><td>160</td><td>2048</td><td>786</td><td>Ultra low power</td></tr><tr><td>WB</td><td>Cortex-M4F</td><td>64</td><td>1024</td><td>256</td><td>Wireless</td></tr><tr><td>WL</td><td>Cortex-M4</td><td>48</td><td>256</td><td>64</td><td>Wireless</td></tr></tbody></table><h2 id="y-封装引脚数" tabindex="-1">y：封装引脚数 <a class="header-anchor" href="#y-封装引脚数" aria-label="Permalink to &quot;y：封装引脚数&quot;">​</a></h2><table><thead><tr><th>Code</th><th>Number of pins</th></tr></thead><tbody><tr><td>A</td><td>169</td></tr><tr><td>B</td><td>208</td></tr><tr><td>C</td><td>48</td></tr><tr><td>F</td><td>20</td></tr><tr><td>G</td><td>28</td></tr><tr><td>H</td><td>40</td></tr><tr><td>I</td><td>176</td></tr><tr><td>J</td><td>8/72</td></tr><tr><td>K</td><td>32</td></tr><tr><td>M</td><td>81</td></tr><tr><td>N</td><td>216</td></tr><tr><td>Q</td><td>132</td></tr><tr><td>R</td><td>64</td></tr><tr><td>T</td><td>36</td></tr><tr><td>U</td><td>63</td></tr><tr><td>V</td><td>100</td></tr><tr><td>Z</td><td>144</td></tr></tbody></table><h2 id="z-闪存容量" tabindex="-1">z：闪存容量 <a class="header-anchor" href="#z-闪存容量" aria-label="Permalink to &quot;z：闪存容量&quot;">​</a></h2><table><thead><tr><th>Code</th><th>FLASH size [KB]</th></tr></thead><tbody><tr><td>4</td><td>16</td></tr><tr><td>6</td><td>32</td></tr><tr><td>8</td><td>64</td></tr><tr><td>B</td><td>128</td></tr><tr><td>Z</td><td>192</td></tr><tr><td>C</td><td>256</td></tr><tr><td>D</td><td>384</td></tr><tr><td>E</td><td>512</td></tr><tr><td>F</td><td>768</td></tr><tr><td>G</td><td>1024</td></tr><tr><td>H</td><td>1536</td></tr><tr><td>I</td><td>2048</td></tr></tbody></table><h2 id="α-封装类型" tabindex="-1">α：封装类型 <a class="header-anchor" href="#α-封装类型" aria-label="Permalink to &quot;α：封装类型&quot;">​</a></h2><table><thead><tr><th>Code</th><th>Package</th></tr></thead><tbody><tr><td>P</td><td>TSOOP</td></tr><tr><td>H</td><td>BGA</td></tr><tr><td>U</td><td>VFQFPN</td></tr><tr><td>T</td><td>LQFP</td></tr><tr><td>Y</td><td>WLCSP</td></tr></tbody></table><h2 id="β-工作温度" tabindex="-1">β：工作温度 <a class="header-anchor" href="#β-工作温度" aria-label="Permalink to &quot;β：工作温度&quot;">​</a></h2><table><thead><tr><th>Code</th><th>Temperature</th></tr></thead><tbody><tr><td>6</td><td>-40℃ ~ 85℃</td></tr><tr><td>7</td><td>-40℃ ~ 105℃</td></tr></tbody></table><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://en.wikipedia.org/wiki/STM32#Part_number_decoding" target="_blank" rel="noreferrer">STM32_Part number decoding - Wikipedia</a></li><li><a href="https://www.digikey.com/en/maker/blogs/2020/understanding-stm32-naming-conventions" target="_blank" rel="noreferrer">Understanding STM32 Naming Conventions</a></li></ul>',23),l=[o];function i(n,h,c,s,m,b){return d(),r("div",null,l)}const M=t(a,[["render",i]]);export{x as __pageData,M as default};
