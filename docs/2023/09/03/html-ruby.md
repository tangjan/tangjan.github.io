---
date: 2023/09/03
tags: 
  - HTML
---

# 注音元素 &lt;ruby&gt;

## 例

### 效果

<br>

<ruby>
    <span>尾 上</span>
    <rp>(</rp>
    <rt>おのえ</rt>
    <rp>)</rp>
</ruby>
<span>&nbsp;&nbsp;</span>
<ruby>
    世
    <rp>(</rp>
    <rt>せ</rt>
    <rp>)</rp>
    莉
    <rp>(</rp>
    <rt>り</rt>
    <rp>)</rp>
    架
    <rp>(</rp>
    <rt>か</rt>
    <rp>)</rp>
</ruby>

> [尾上 世莉架](https://zh.moegirl.org.cn/%E5%B0%BE%E4%B8%8A%E4%B8%96%E8%8E%89%E6%9E%B6)：《Chaos;Child》女主角。
> ![onoe-serika](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2023/09/03/html-ruby/chara_serika.png)

### HTML

```html
<ruby>
    <span>尾 上</span>
    <rp>（</rp>
    <rt>おのえ</rt>
    <rp>）</rp>
</ruby>
<span>&nbsp;</span>
<ruby>
    世
    <rp>（</rp>
    <rt>せ</rt>
    <rp>）</rp>
    莉
    <rp>（</rp>
    <rt>り</rt>
    <rp>）</rp>
    架
    <rp>（</rp>
    <rt>か</rt>
    <rp>）</rp>
</ruby>
```

### CSS

```css
.ruby rt {
    font-size: 0.8em;
}

.ruby {
    font-size: 25px;
}
```

## 元素

- `ruby`：东亚字符注音元素。ruby 取名自 [a unit of measurement used by typesetters](https://en.wikipedia.org/wiki/Agate_(typography)) 。
- `rp`：<span style="color:red">R</span>uby Fallback <span style="color:red">P</span>arenthesis，Ruby 后备括号元素。

以

<ruby>
    <span>尾 上</span>
    <rp>（</rp>
    <rt>おのえ</rt>
    <rp>）</rp>
</ruby>
<span>&nbsp;</span>
<ruby>
    世
    <rp>（</rp>
    <rt>せ</rt>
    <rp>）</rp>
    莉
    <rp>（</rp>
    <rt>り</rt>
    <rp>）</rp>
    架
    <rp>（</rp>
    <rt>か</rt>
    <rp>）</rp>
</ruby>

为例，在不支持 ruby 元素的浏览器中，会显示为

```
尾 上(おのえ)世(せ)莉(り)架(か)
```

- `rt`：<span style="color:red">R</span>uby <span style="color:red">T</span>ext，Ruby 文本元素，即注音。

## 参考

- [&lt;ruby&gt;: The Ruby Annotation element | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)
- [&lt;rp&gt;: The Ruby Fallback Parenthesis element | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)
- [&lt;rt&gt;: The Ruby Text element | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)
