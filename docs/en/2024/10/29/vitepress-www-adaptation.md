---
title: Customizing VitePress as Personal Homepage
date: 2024/10/29
tags: 
 - VitePress
 - Vue
---

# Customizing VitePress as Personal Homepage

## Introduction

[My homepage](https://tangjiayan.com/) is built with [VitePress](https://vitepress.dev/). [Previously](https://github.com/tangjan/www/tree/0bec649e3d2a45303a4f95026b8511ebf19114aa), it looked like this:

![1-old-www](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/1-old-www.png)

The left and right sides were unbalanced, making it quite unappealing.

So I made a simple design mockup using [Google Slides](https://workspace.google.com/products/slides/):

![2-google-slides-www](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/2-google-slides-www.png)

With this as my target, I researched how to develop VitePress to achieve this design.

## Importing Components

After researching components related to "SNS links" and "theme toggle button", I decided to import these components from the [VitePress official repository](https://github.com/vuejs/vitepress/tree/main/src/client/theme-default/components):

- [VPSocialLink.vue](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSocialLink.vue)
- [VPSocialLinks.vue](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSocialLinks.vue)
- [VPSwitch.vue](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSwitch.vue)
- [VPSwitchAppearance.vue](https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPSwitchAppearance.vue)

## MyLayout.vue

Based on the slots provided in [Layout Slots](https://vitepress.dev/guide/extending-default-theme#layout-slots), I tested and chose the appropriate slot `home-hero-after`, and created a `MyLayout.vue` component:

::: details `MyLayout.vue`

```vue
<script setup>
import DefaultTheme from "vitepress/theme";

import VPSwitchAppearance from './VPSwitchAppearance.vue'
import VPSocialLinks from './VPSocialLinks.vue'

import { useData } from '../composables/data'
const { theme } = useData()

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <div>
        <VPSocialLinks :links="theme.socialLinks" />
      </div>
      <div class="my_VPSwitch">
        <VPSwitchAppearance />
      </div>
    </template>
  </Layout>
</template>
```

:::

Since the `VPSocialLinks` component needs `theme.socialLinks`, I imported `theme`.

## Centering the Theme Toggle Button

The SNS links `VPSocialLinks` component comes with centered CSS styles in its `<style>` section, so no manual adjustment was needed.

```vue
<style scoped>
.VPSocialLink {
  display: flex;
  -content: center;
  align-items: center;
}
</style>
```

What needs manual centering adjustment is the theme toggle button.

I added a `my_VPSwitch` class to the toggle button in `MyLayout.vue`, then adjusted the centering and padding in [`custom.css`](https://vitepress.dev/guide/extending-default-theme#customizing-css).

```css
.my_VPSwitch {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
```

Done.

## Background Image

I had planned to use a pure white line art as the background image, so visitors would be pleasantly surprised when clicking the theme toggle button.

`╰(￣ω￣ｏ)`

![3-bg](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/3-bg.png)

I searched Google using the keywords `Hatsune Miku Line Art`, casually found two line art images of MiKU, and fed them to ChatGPT to process them.

::: details ChatGPT Processing Line Art

### Prompt

![4-lineart](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/4-lineart.png)

Make white areas transparent and black areas white, please.

### Response

![5-chatgpt-lineart](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/5-chatgpt-lineart.png)

```py
# Load the new image
image_path = '/mnt/data/image.png'
image_new = Image.open(image_path)

# Convert the image to grayscale
grayscale_image_new = image_new.convert("L")

# Create a new image with an alpha channel (RGBA) based on the grayscale values
transparent_image_new = Image.new("RGBA", grayscale_image_new.size)

# Iterate through each pixel to apply the transformation:
# Convert non-white areas to white and white areas to transparent
for x in range(grayscale_image_new.width):
    for y in range(grayscale_image_new.height):
        pixel = grayscale_image_new.getpixel((x, y))
        # Set white areas (close to 255) to be transparent
        if pixel > 200:
            transparent_image_new.putpixel((x, y), (255, 255, 255, 0))  # Transparent
        else:
            transparent_image_new.putpixel((x, y), (255, 255, 255, 255))  # Solid white

# Save the transformed image
output_path_new = '/mnt/data/converted_image_transparent.png'
transparent_image_new.save(output_path_new)

output_path_new
```

:::

Then I estimated the middle spacing and combined the two images in Photoshop, setting it as the background for the `body`.

## Trying DALL-E for Images

I tried making some line art using ChatGPT's DALL-E, but the results weren't very satisfactory.

::: details 1
![6-DALLE-1](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/6-DALLE-1.webp)
:::

::: details 2
![7-DALLE-2](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/7-DALLE-2.webp)
:::

::: details 3
![8-DALLE-3](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/8-DALLE-3.webp)
:::

::: details 4
![9-DALLE-4](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/9-DALLE-4.webp)
:::

::: details 5
![10-DALLE-5](https://cdn.jsdelivr.net/gh/tangjan/imgBed/notes/2024/10/29/vitepress-www-adaptation/10-DALLE-5.png)
:::

I have already been exploring [Stable Diffusion](https://en.wikipedia.org/wiki/Stable_Diffusion).
