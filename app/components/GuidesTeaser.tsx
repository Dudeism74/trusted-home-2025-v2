import Link from "next/link";

export default function GuidesTeaser() {
  return (
    <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Not sure where to start?</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600">The guides walk through full setups, not just single products. Think “complete cleaning reset for a weekend” or “what to pack for a 7-day cruise without hauling a second suitcase.”</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/guides/starter-cleaning-kit" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:bg-slate-800">See the Cleaning Starter Kit guide</Link>
          <Link href="/guides" className="text-right text-xs font-semibold text-sky-700 hover:text-sky-600 md:text-left">Browse all guides →</Link>
        </div>
      </div>
    </section>
  );
}
