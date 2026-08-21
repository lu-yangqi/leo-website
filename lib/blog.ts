import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");
const requiredFields = ["title", "description", "date", "category"] as const;

function parseMetadata(fileName: string, content: string): BlogPost {
  const frontmatter = content.match(
    /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/,
  );

  if (!frontmatter) {
    throw new Error(`Missing frontmatter in blog post: ${fileName}`);
  }

  const metadata = Object.fromEntries(
    frontmatter[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const separatorIndex = line.indexOf(":");

        if (separatorIndex === -1) {
          throw new Error(`Invalid metadata line in ${fileName}: ${line}`);
        }

        return [
          line.slice(0, separatorIndex).trim(),
          line.slice(separatorIndex + 1).trim(),
        ];
      }),
  );

  for (const field of requiredFields) {
    if (!metadata[field]) {
      throw new Error(`Missing ${field} in blog post: ${fileName}`);
    }
  }

  return {
    slug: fileName.replace(/\.md$/, ""),
    title: metadata.title,
    description: metadata.description,
    date: metadata.date,
    category: metadata.category,
  };
}

export function getBlogPosts(): BlogPost[] {
  return readdirSync(blogDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const content = readFileSync(path.join(blogDirectory, fileName), "utf8");
      return parseMetadata(fileName, content);
    })
    .sort(
      (firstPost, secondPost) =>
        secondPost.date.localeCompare(firstPost.date) ||
        firstPost.title.localeCompare(secondPost.title),
    );
}
