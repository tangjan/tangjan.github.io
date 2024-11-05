import type { DefaultTheme, LocaleConfig } from "vitepress";
import { sidebar, sidebar_en } from "./sidebar";

export const i18n: LocaleConfig<DefaultTheme.Config> = {
  root: {
    label: "简体中文",
    lang: "zh-CN",
    themeConfig: {
      sidebar: sidebar,
    },
  },
  en: {
    label: "English",
    lang: "en-US",
    link: "/en/",
    title: "Jan's Learning Notes",
    themeConfig: {
      nav: [
        { text: "Tags", link: "/en/tags.md" },
        { text: "Archive", link: "/en/archives.md" },
      ],
      sidebar: sidebar_en,
    },
  },
};
