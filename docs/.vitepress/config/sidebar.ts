import { generateSidebar } from "../plugins/generateSidebar";

// 中文侧边栏
const sidebar = await generateSidebar("zh");
sidebar.push(
  {
    text: `CC BY-NC-SA 4.0`,
    link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    text: "旧笔记站",
    link: "https://old-notes.tangjiayan.com",
  },
  {
    text: "萌ICP备20210789号",
    link: "https://icp.gov.moe/?keyword=20210789",
  }
);

// 英文侧边栏
const sidebar_en = await generateSidebar("en");
sidebar_en.push(
  {
    text: `CC BY-NC-SA 4.0`,
    link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },
  {
    text: "old-notes",
    link: "https://old-notes.tangjiayan.com",
  },
  {
    text: "Moe-ICP No.20210789",
    link: "https://icp.gov.moe/?keyword=20210789",
  }
);

export { sidebar, sidebar_en };
