import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

interface SidebarItem {
  text: string;
  link?: string;
  items?: SidebarItem[];
  collapsed?: boolean;
}

interface LangConfig {
  monthNames: string[];
  welcomeText: string;
}

const langConfigs: Record<string, LangConfig> = {
  zh: {
    monthNames: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
    welcomeText: "WELCOME",
  },
  en: {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    welcomeText: "WELCOME",
  },
};

async function generateSidebar(lang: string = "zh"): Promise<SidebarItem[]> {
  const docsDir = path.resolve(
    __dirname,
    "../../../docs",
    lang === "zh" ? "" : lang
  );
  const years = new Map<string, Map<string, any[]>>();
  const files = await getAllMarkdownFiles(docsDir);
  const config = langConfigs[lang];

  for (const file of files) {
    const match = file.match(
      /[/\\](\d{4})[/\\](\d{2})[/\\](\d{2})[/\\](.+?)\.md$/
    );
    if (!match) continue;

    const [, year, month, day, slug] = match;
    const content = await fs.readFile(file, "utf-8");
    const { data: frontmatter } = matter(content);

    if (!years.has(year)) {
      years.set(year, new Map());
    }
    const monthsMap = years.get(year)!;
    if (!monthsMap.has(month)) {
      monthsMap.set(month, []);
    }

    const linkPrefix = lang === "zh" ? "" : `/${lang}`;
    monthsMap.get(month)!.push({
      text: frontmatter.title || slug,
      link: `${linkPrefix}/${year}/${month}/${day}/${slug}`,
    });
  }

  const sidebar: SidebarItem[] = [
    {
      text: config.welcomeText,
      link: lang === "zh" ? "/" : `/${lang}/`,
    },
  ];

  const sortedYears = Array.from(years.keys()).sort().reverse();
  sortedYears.forEach((year, yearIndex) => {
    const yearItem: SidebarItem = {
      text: year,
      items: [],
    };

    const months = years.get(year)!;
    const sortedMonths = Array.from(months.keys()).sort().reverse();

    sortedMonths.forEach((month, monthIndex) => {
      const monthItem: SidebarItem = {
        text: config.monthNames[parseInt(month) - 1],
        collapsed: !(yearIndex === 0 && monthIndex === 0),
        items: months.get(month)!.sort((a, b) => {
          const dateA = a.link!.match(/\/\d{4}\/\d{2}\/(\d{2})/)?.[1] || "";
          const dateB = b.link!.match(/\/\d{4}\/\d{2}\/(\d{2})/)?.[1] || "";
          return parseInt(dateB) - parseInt(dateA);
        }),
      };
      yearItem.items!.push(monthItem);
    });

    sidebar.push(yearItem);
  });

  return sidebar;
}

async function getAllMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const rootEntries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of rootEntries) {
    if (entry.isDirectory() && entry.name.startsWith("20")) {
      const yearDir = path.join(dir, entry.name);

      async function scanYear(directory: string) {
        const entries = await fs.readdir(directory, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(directory, entry.name);
          if (entry.isDirectory()) {
            await scanYear(fullPath);
          } else if (entry.name.endsWith(".md")) {
            files.push(fullPath);
          }
        }
      }

      await scanYear(yearDir);
    }
  }

  return files;
}

export { generateSidebar };
