import { sanityClient } from "./sanity.client";

export type Article = {
  _id: string;
  title: string;
  slug?: string | null;
  intro?: string;
  publishedAt?: string;
};

export async function getLatestArticles(limit = 5): Promise<Article[]> {
  try {
    const query = `*[_type == "article" && defined(publishedAt)] | order(publishedAt desc)[0...${limit}] { _id, title, "slug": slug.current, intro, publishedAt }`;
    const articles = await sanityClient.fetch<Article[]>(query);
    return articles ?? [];
  } catch (err) {
    // For any error (network, dataset not found, etc.) return empty array
    // instead of throwing to keep the app resilient.
    console.warn("getLatestArticles: failed to fetch articles", err);
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  if (!slug) return null;
  try {
    const query = `*[_type == "article" && slug.current == $slug][0]{ _id, title, "slug": slug.current, intro, publishedAt }`;
    const article = await sanityClient.fetch<Article | null>(query, { slug });
    return article ?? null;
  } catch (err) {
    console.warn("getArticleBySlug: failed to fetch article", err);
    return null;
  }
}
