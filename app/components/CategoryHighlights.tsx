import Link from "next/link";

export default function CategoryHighlights() {
  return (
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
  );
}
