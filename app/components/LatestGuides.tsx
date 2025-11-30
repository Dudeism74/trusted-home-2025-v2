import Link from "next/link";
import { getLatestArticles } from "../lib/sanity.articles";
import type { Article } from "../lib/sanity.articles";

export default async function LatestGuides() {
  const articles: Article[] = await getLatestArticles(5);

  return (
    <section aria-labelledby="latest-guides" className="border-t border-slate-100 bg-slate-50/60">
      <div className="mx-auto max-w-6xl px-0 py-10 sm:px-2">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <h2 id="latest-guides" className="text-xl font-semibold text-slate-900">
              Latest guides and reviews.
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Dynamic guides from Sanity will go here once the connection is wired up.
            </p>
          </div>
          <Link href="/guides" className="text-xs font-semibold text-sky-700 hover:text-sky-600">
            Browse all guides →
          </Link>
        </div>

        {articles.length === 0 && (
          <p className="mt-6 text-sm text-slate-500">
            No published articles found. Publish an
            <span className="mx-1 rounded bg-slate-200 px-1.5 py-0.5 text-xs font-mono">article</span>
            document in Sanity and refresh this page.
          </p>
        )}

        {articles.length > 0 && (
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={article.slug ? `/guides/${article.slug}` : "/guides"}
                className="block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-slate-900">{article.title}</h3>
                {article.intro && <p className="mt-3 text-xs text-slate-600">{article.intro}</p>}
                {article.publishedAt && <p className="mt-2 text-[11px] text-slate-500">{new Date(article.publishedAt).toLocaleDateString()}</p>}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
