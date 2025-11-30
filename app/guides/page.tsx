import Link from "next/link";
import { getLatestArticles } from "../lib/sanity.articles";

export default async function GuidesPage() {
  const articles = await getLatestArticles(50);

  return (
    <main className="px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-2xl font-semibold text-slate-100">Guides</h1>
          <Link href="/" className="text-xs font-semibold text-sky-300 hover:text-sky-200">Home</Link>
        </div>

        {articles.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
            <h2 className="text-lg font-semibold text-slate-900">Guides are coming soon</h2>
            <p className="mt-2 text-sm text-slate-600">We’re fetching content from Sanity — check back later.</p>
          </div>
        ) : (
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
    </main>
  );
}
