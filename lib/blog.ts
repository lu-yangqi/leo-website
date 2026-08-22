import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export type BlogPostSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
};

export type BlogPost = BlogPostSummary & {
  content: string;
};

const blogDirectory = path.join(process.cwd(), "content", "blog");
const requiredFields = ["title", "description", "date", "category"] as const;

function getBlogFileNames() {
  return readdirSync(blogDirectory).filter((fileName) =>
    fileName.endsWith(".md"),
  );
}

function parseBlogPost(fileName: string, fileContent: string): BlogPost {
  const frontmatter = fileContent.match(
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
    content: fileContent.slice(frontmatter[0].length).trim(),
  };
}

function readBlogPost(fileName: string) {
  const fileContent = readFileSync(path.join(blogDirectory, fileName), "utf8");
  return parseBlogPost(fileName, fileContent);
}

export function getBlogPosts(): BlogPostSummary[] {
  return getBlogFileNames()
    .map((fileName) => {
      const { content, ...summary } = readBlogPost(fileName);
      return summary;
    })
    .sort(
      (firstPost, secondPost) =>
        secondPost.date.localeCompare(firstPost.date) ||
        firstPost.title.localeCompare(secondPost.title),
    );
}

export function getBlogPost(slug: string): BlogPost | null {
  const fileName = `${slug}.md`;

  if (!getBlogFileNames().includes(fileName)) {
    return null;
  }

  return readBlogPost(fileName);
}

export function getBlogSlugs(): string[] {
  return getBlogFileNames().map((fileName) => fileName.replace(/\.md$/, ""));
}
