import Link from "next/link";

export default function Hero() {
  return (
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
  );
}
