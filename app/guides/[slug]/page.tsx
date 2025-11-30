import Link from "next/link";
import { getArticleBySlug } from "../../../app/lib/sanity.articles";

type Props = {
  params: { slug: string };
};

export default async function GuidePage({ params }: Props) {
  const { slug } = params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return (
      <main className="px-4 py-10">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-2xl font-semibold text-slate-100">Guide not found</h1>
          <p className="mt-2 text-sm text-slate-400">We could not find the requested guide.</p>
          <div className="mt-4">
            <Link href="/guides" className="text-sm font-semibold text-sky-300 hover:text-sky-200">Back to Guides</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <nav className="text-sm text-slate-400 mb-4">
          <Link href="/guides" className="text-sky-300 hover:text-sky-200">Guides</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{article.title}</span>
        </nav>

        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">{article.title}</h1>
          {article.publishedAt && (
            <p className="mt-2 text-xs text-slate-500">{new Date(article.publishedAt).toLocaleDateString()}</p>
          )}
          <div className="mt-6 text-sm text-slate-700">This is a preview of the guide. The full content will be rendered here.</div>
        </article>
      </div>
    </main>
  );
}
