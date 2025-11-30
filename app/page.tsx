import Link from "next/link";
import { getLatestArticles, Article } from "./lib/sanity.articles";

export default async function Home() {
  const articles: Article[] = await getLatestArticles(5);

  return (
    <main className="px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">

        {/* Hero section */}
        <section className="rounded-3xl bg-slate-800 px-6 py-10 text-slate-50 shadow-xl sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
            Trusted Home Essentials
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Make your home easier to live in, not harder to clean.
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-200 sm:text-base">
            Every recommendation on this site is tested in a real home,
            not pulled from a product catalog. Fewer pointless gadgets,
            more tools that actually make life smoother day after day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/categories"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-sky-300"
            >
              Browse categories
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-slate-50 transition hover:border-slate-300 hover:text-slate-100"
            >
              See setup guides
            </Link>
            <p className="text-xs text-slate-300">
              Honest reviews, clear pros and cons, affiliate links clearly labeled.
            </p>
          </div>
        </section>

        {/* Category highlights */}
        <section aria-labelledby="category-highlights">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="category-highlights"
              className="text-xl font-semibold text-slate-900"
            >
              Start with the essentials.
            </h2>
            <Link
              href="/categories"
              className="text-xs font-semibold text-sky-700 hover:text-sky-600"
            >
              View all categories
            </Link>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Cleaning gear that actually lasts
              </h3>
              <p className="mt-3 flex-1 text-xs text-slate-600">
                Mop systems, vacuums, scrubbers and laundry helpers that survive
                more than one spring cleaning, without turning your closet into a
                graveyard of plastic.
              </p>
              <Link
                href="/categories/cleaning"
                className="mt-4 inline-flex text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                See cleaning essentials →
              </Link>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Everyday home must-haves
              </h3>
              <p className="mt-3 flex-1 text-xs text-slate-600">
                From kitchen basics to power strips and storage, these are the
                workhorse items that quietly carry your whole house.
              </p>
              <Link
                href="/categories/home"
                className="mt-4 inline-flex text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                See home essentials →
              </Link>
            </article>

            <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Travel and on-the-road kits
              </h3>
              <p className="mt-3 flex-1 text-xs text-slate-600">
                Compact gear for road trips, cruises and weekend getaways,
                focused on comfort and sanity instead of Instagram checklists.
              </p>
              <Link
                href="/categories/travel"
                className="mt-4 inline-flex text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                See travel picks →
              </Link>
            </article>
          </div>
        </section>

        {/* Latest guides pulled from Sanity */}
        <section aria-labelledby="latest-guides" className="border-t border-slate-100 bg-slate-50/60">
          <div className="mx-auto max-w-6xl px-0 py-10 sm:px-2">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h2
                  id="latest-guides"
                  className="text-xl font-semibold text-slate-900"
                >
                  Latest guides and reviews.
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Dynamic guides from Sanity will go here once the connection is wired up.
                </p>
              </div>
              <Link
                href="/guides"
                className="text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                Browse all guides →
              </Link>
            </div>

            {articles.length === 0 && (
              <p className="mt-6 text-sm text-slate-500">
                No published articles found. Publish an
                <span className="mx-1 rounded bg-slate-200 px-1.5 py-0.5 text-xs font-mono">
                  article
                </span>
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
                    <h3 className="text-sm font-semibold text-slate-900">
                      {article.title}
                    </h3>
                    {article.intro && (
                      <p className="mt-3 flex-1 text-xs text-slate-600">
                        {article.intro}
                      </p>
                    )}
                    {article.publishedAt && (
                      <p className="mt-2 text-[11px] text-slate-500">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Featured products strip */}
        <section aria-labelledby="featured-products">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="featured-products"
              className="text-xl font-semibold text-slate-900"
            >
              Current top picks.
            </h2>
            <p className="text-xs text-slate-500">
              Prices and availability change, so always double-check before buying.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-200" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  High-capacity robot vacuum
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  For people who want floors handled automatically, with enough
                  bin capacity that it is not nagging you every day.
                </p>
                <p className="mt-2 text-[11px] text-slate-500">
                  Includes affiliate link, exact model and testing notes in the review.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-200" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Heavy-duty spin mop kit
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Built for real messes, not staged spills, with replacement heads
                  that are easy to find.
                </p>
                <p className="mt-2 text-[11px] text-slate-500">
                  Full breakdown of pros, cons and who should skip it.
                </p>
              </div>
            </article>

            <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-200" />
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Travel-ready coffee setup
                </h3>
                <p className="mt-1 text-xs text-slate-600">
                  Compact grinder and brewer combo for people who refuse to drink
                  hotel-lobby coffee.
                </p>
                <p className="mt-2 text-[11px] text-slate-500">
                  Pack list and real-world tips in the travel guide.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Guides teaser */}
        <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Not sure where to start?
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                The guides walk through full setups, not just single products.
                Think “complete cleaning reset for a weekend” or “what to pack
                for a 7-day cruise without hauling a second suitcase.”
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/guides/starter-cleaning-kit"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:bg-slate-800"
              >
                See the Cleaning Starter Kit guide
              </Link>
              <Link
                href="/guides"
                className="text-right text-xs font-semibold text-sky-700 hover:text-sky-600 md:text-left"
              >
                Browse all guides →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
