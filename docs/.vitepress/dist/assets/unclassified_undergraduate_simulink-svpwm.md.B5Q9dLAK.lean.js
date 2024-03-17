import{_ as a,c as n,o as l,a4 as t,m as s,a as e}from"./chunks/framework.iZPUC10f.js";const P=JSON.parse('{"title":"基于 Simulink 的 SVPWM 仿真","description":"","frontmatter":{"head":[["link",{"rel":"stylesheet","href":"https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}]]},"headers":[],"relativePath":"unclassified/undergraduate/simulink-svpwm.md","filePath":"unclassified/undergraduate/simulink-svpwm.md","lastUpdated":null}'),i={name:"unclassified/undergraduate/simulink-svpwm.md"},p=t("",12),r=s("p",null,[e("根据电压空间矢量的定义，交流电动机定子的三相绕组电压矢量在空间互差 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mn",null,"2"),s("mi",null,"π")]),s("mrow",null,[s("mn",null,"3")])])]),s("annotation",{encoding:"application/x-tex"},"\\frac{2\\pi}{3}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.845108em"}}),s("span",{class:"strut bottom",style:{height:"1.190108em","vertical-align":"-0.345em"}}),s("span",{class:"base textstyle uncramped"},[s("span",{class:"mord reset-textstyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.345em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord scriptstyle cramped"},[s("span",{class:"mord mathrm"},"3")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.394em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle uncramped"},[s("span",{class:"mord scriptstyle uncramped"},[s("span",{class:"mord mathrm"},"2"),s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"π")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])])]),e("，为了方便进行扇区判断，这里采用 3/2 变换将三相坐标系映射到两相坐标系中。")],-1),m=s("p",null,"3/2 变换的公式是：",-1),c=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("mrow",null,[s("mo",{fence:"true"},"["),s("mtable",null,[s("mtr",null,[s("mtd",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mi",null,"α")])])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mi",null,"β")])])])])]),s("mo",{fence:"true"},"]")]),s("mo",null,"="),s("msub",null,[s("mi",null,"C"),s("mrow",null,[s("mn",null,"2"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"3")])]),s("mrow",null,[s("mo",{fence:"true"},"["),s("mtable",null,[s("mtr",null,[s("mtd",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mi",null,"a")])])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mi",null,"b")])])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("msub",null,[s("mi",null,"u"),s("mi",null,"c")])])])])]),s("mo",{fence:"true"},"]")])]),s("annotation",{encoding:"application/x-tex"},"\\begin{bmatrix} u_\\alpha \\\\ u_\\beta \\end{bmatrix} = C_{2/3} \\begin{bmatrix} u_a \\\\ u_b \\\\ u_c \\end{bmatrix} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"2.05002em"}}),s("span",{class:"strut bottom",style:{height:"3.60004em","vertical-align":"-1.55002em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"minner displaystyle textstyle uncramped"},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"[")]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist"},[s("span",{style:{top:"-0.6099999999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"u"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.0037em"}},"α")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{style:{top:"0.5900000000000003em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"u"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.05278em"}},"β")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{class:"style-wrap reset-textstyle textstyle uncramped",style:{top:"0em"}},[s("span",{class:"delimsizing size3"},"]")])]),s("span",{class:"mrel"},"="),s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"vlist"},[s("span",{style:{top:"0.18019999999999992em","margin-right":"0.05em","margin-left":"-0.07153em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2"),s("span",{class:"mord mathrm"},"/"),s("span",{class:"mord mathrm"},"3")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"minner displaystyle textstyle uncramped"},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.9049999999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎣")])]),s("span",{style:{top:"-0.89502em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎡")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist"},[s("span",{style:{top:"-1.2099999999999997em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"u"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"a")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{style:{top:"-0.00999999999999951em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"u"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"b")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{style:{top:"1.1900000000000006em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"u"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathit"},"c")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])]),s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.9049999999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎦")])]),s("span",{style:{top:"-0.89502em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎤")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])])])])])])],-1),o=s("p",null,"其中",-1),u=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"C"),s("mrow",null,[s("mn",null,"2"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"3")])]),s("mo",null,"="),s("msqrt",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("mn",null,"2")]),s("mrow",null,[s("mn",null,"3")])])])]),s("mrow",null,[s("mo",{fence:"true"},"["),s("mtable",null,[s("mtr",null,[s("mtd",null,[s("mrow",null,[s("mn",null,"1")])]),s("mtd",null,[s("mrow",null,[s("mo",null,"−"),s("mfrac",null,[s("mrow",null,[s("mn",null,"1")]),s("mrow",null,[s("mn",null,"2")])])])]),s("mtd",null,[s("mrow",null,[s("mo",null,"−"),s("mfrac",null,[s("mrow",null,[s("mn",null,"1")]),s("mrow",null,[s("mn",null,"2")])])])])]),s("mtr",null,[s("mtd",null,[s("mrow",null,[s("mn",null,"0")])]),s("mtd",null,[s("mrow",null,[s("mfrac",null,[s("mrow",null,[s("msqrt",null,[s("mrow",null,[s("mn",null,"3")])])]),s("mrow",null,[s("mn",null,"2")])])])]),s("mtd",null,[s("mrow",null,[s("mo",null,"−"),s("mfrac",null,[s("mrow",null,[s("msqrt",null,[s("mrow",null,[s("mn",null,"3")])])]),s("mrow",null,[s("mn",null,"2")])])])])])]),s("mo",{fence:"true"},"]")])]),s("annotation",{encoding:"application/x-tex"},"C_{2/3} = \\sqrt{\\frac{2}{3}} \\begin{bmatrix} 1 & -\\frac{1}{2} & -\\frac{1}{2}\\\\ 0 & \\frac{\\sqrt{3}}{2} & -\\frac{\\sqrt{3}}{2} \\end{bmatrix} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"2.38883em"}}),s("span",{class:"strut bottom",style:{height:"4.27766em","vertical-align":"-1.88883em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"vlist"},[s("span",{style:{top:"0.18019999999999992em","margin-right":"0.05em","margin-left":"-0.07153em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2"),s("span",{class:"mord mathrm"},"/"),s("span",{class:"mord mathrm"},"3")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"mrel"},"="),s("span",{class:"sqrt mord"},[s("span",{class:"sqrt-sign",style:{top:"-0.16161000000000003em"}},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},[s("span",{class:"delimsizing size3"},"√")])]),s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord displaystyle textstyle cramped"},[s("span",{class:"mord reset-textstyle displaystyle textstyle cramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.686em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"3")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.677em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"2")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])]),s("span",{style:{top:"-1.57161em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped sqrt-line"})]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])]),s("span",{class:"minner displaystyle textstyle uncramped"},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist"},[s("span",{style:{top:"1.2050049999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎣")])]),s("span",{style:{top:"0.05000500000000008em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎢")])]),s("span",{style:{top:"-1.196015em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎡")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])]),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-c"},[s("span",{class:"vlist"},[s("span",{style:{top:"-1.06739em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord mathrm"},"1")])]),s("span",{style:{top:"1.20283em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord mathrm"},"0")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist"},[s("span",{style:{top:"-1.06739em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord reset-textstyle displaystyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.686em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"2")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.677em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped"},[s("span",{class:"mord textstyle uncramped"},[s("span",{class:"mord mathrm"},"1")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])]),s("span",{style:{top:"1.20283em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord reset-textstyle displaystyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.686em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"2")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.677em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped"},[s("span",{class:"mord textstyle uncramped"},[s("span",{class:"sqrt mord"},[s("span",{class:"sqrt-sign",style:{top:"-0.06722000000000006em"}},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},"√")]),s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"3")])]),s("span",{style:{top:"-0.8272200000000001em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped sqrt-line"})]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])])])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])]),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"arraycolsep",style:{width:"0.5em"}}),s("span",{class:"col-align-c"},[s("span",{class:"vlist"},[s("span",{style:{top:"-1.06739em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord reset-textstyle displaystyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.686em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"2")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.677em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped"},[s("span",{class:"mord textstyle uncramped"},[s("span",{class:"mord mathrm"},"1")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])]),s("span",{style:{top:"1.20283em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord displaystyle textstyle uncramped"},[s("span",{class:"mord"},"−"),s("span",{class:"mord reset-textstyle displaystyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.686em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"2")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.677em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped"},[s("span",{class:"mord textstyle uncramped"},[s("span",{class:"sqrt mord"},[s("span",{class:"sqrt-sign",style:{top:"-0.06722000000000006em"}},[s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},"√")]),s("span",{class:"vlist"},[s("span",{style:{top:"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"3")])]),s("span",{style:{top:"-0.8272200000000001em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped sqrt-line"})]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])])])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"1em"}},"​")]),e("​")])])])])]),s("span",{class:"style-wrap reset-textstyle textstyle uncramped"},[s("span",{class:"delimsizing mult"},[s("span",{class:"vlist"},[s("span",{style:{top:"1.2050049999999999em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎦")])]),s("span",{style:{top:"0.05000500000000008em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎥")])]),s("span",{style:{top:"-1.196015em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"delimsizinginner delim-size4"},[s("span",null,"⎤")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])])])])])])])])],-1),d=t("",20),y=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"t"),s("mn",null,"1")]),s("mo",null,"="),s("mi",null,"m"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",null,"("),s("mfrac",null,[s("mrow",null,[s("mi",null,"π")]),s("mrow",null,[s("mn",null,"3")])]),s("mo",null,"−"),s("mi",null,"θ"),s("mo",null,")")]),s("annotation",{encoding:"application/x-tex"},"t_1 = msin(\\frac{\\pi}{3} - \\theta) ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"1.10756em"}}),s("span",{class:"strut bottom",style:{height:"1.7935600000000003em","vertical-align":"-0.686em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"t"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"1")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"m"),s("span",{class:"mord mathit"},"s"),s("span",{class:"mord mathit"},"i"),s("span",{class:"mord mathit"},"n"),s("span",{class:"mopen"},"("),s("span",{class:"mord reset-textstyle displaystyle textstyle uncramped"},[s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist"},[s("span",{style:{top:"0.686em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle cramped"},[s("span",{class:"mord textstyle cramped"},[s("span",{class:"mord mathrm"},"3")])])]),s("span",{style:{top:"-0.22999999999999998em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped frac-line"})]),s("span",{style:{top:"-0.677em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle textstyle uncramped"},[s("span",{class:"mord textstyle uncramped"},[s("span",{class:"mord mathit",style:{"margin-right":"0.03588em"}},"π")])])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"sizing reset-size5 size5 reset-textstyle textstyle uncramped nulldelimiter"})]),s("span",{class:"mbin"},"−"),s("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"θ"),s("span",{class:"mclose"},")")])])])])],-1),z=s("p",null,[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",null,[s("semantics",null,[s("mrow",null,[s("msub",null,[s("mi",null,"t"),s("mn",null,"2")]),s("mo",null,"="),s("mi",null,"m"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mi",null,"θ")]),s("annotation",{encoding:"application/x-tex"},"t_2 = msin\\theta ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"strut",style:{height:"0.69444em"}}),s("span",{class:"strut bottom",style:{height:"0.84444em","vertical-align":"-0.15em"}}),s("span",{class:"base displaystyle textstyle uncramped"},[s("span",{class:"mord"},[s("span",{class:"mord mathit"},"t"),s("span",{class:"vlist"},[s("span",{style:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),s("span",{class:"reset-textstyle scriptstyle cramped"},[s("span",{class:"mord mathrm"},"2")])]),s("span",{class:"baseline-fix"},[s("span",{class:"fontsize-ensurer reset-size5 size5"},[s("span",{style:{"font-size":"0em"}},"​")]),e("​")])])]),s("span",{class:"mrel"},"="),s("span",{class:"mord mathit"},"m"),s("span",{class:"mord mathit"},"s"),s("span",{class:"mord mathit"},"i"),s("span",{class:"mord mathit"},"n"),s("span",{class:"mord mathit",style:{"margin-right":"0.02778em"}},"θ")])])])])],-1),f=t("",46),h=[p,r,m,c,o,u,d,y,z,f];function x(g,w,b,v,_,k){return l(),n("div",null,h)}const S=a(i,[["render",x]]);export{P as __pageData,S as default};
