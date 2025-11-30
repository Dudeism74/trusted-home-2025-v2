export default function FeaturedProducts() {
  return (
    <section aria-labelledby="featured-products">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="featured-products" className="text-xl font-semibold text-slate-900">Current top picks.</h2>
        <p className="text-xs text-slate-500">Prices and availability change, so always double-check before buying.</p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-200" />
          <div>
            <h3 className="text-sm font-semibold text-slate-900">High-capacity robot vacuum</h3>
            <p className="mt-1 text-xs text-slate-600">For people who want floors handled automatically, with enough bin capacity that it is not nagging you every day.</p>
            <p className="mt-2 text-[11px] text-slate-500">Includes affiliate link, exact model and testing notes in the review.</p>
          </div>
        </article>

        <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-200" />
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Heavy-duty spin mop kit</h3>
            <p className="mt-1 text-xs text-slate-600">Built for real messes, not staged spills, with replacement heads that are easy to find.</p>
            <p className="mt-2 text-[11px] text-slate-500">Full breakdown of pros, cons and who should skip it.</p>
          </div>
        </article>

        <article className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-slate-200" />
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Travel-ready coffee setup</h3>
            <p className="mt-1 text-xs text-slate-600">Compact grinder and brewer combo for people who refuse to drink hotel-lobby coffee.</p>
            <p className="mt-2 text-[11px] text-slate-500">Pack list and real-world tips in the travel guide.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
