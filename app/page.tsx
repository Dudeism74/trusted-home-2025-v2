import Hero from "./components/Hero";
import CategoryHighlights from "./components/CategoryHighlights";
import LatestGuides from "./components/LatestGuides";
import FeaturedProducts from "./components/FeaturedProducts";
import GuidesTeaser from "./components/GuidesTeaser";

export default async function Home() {

  return (
    <main className="px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">

        <Hero />

        <CategoryHighlights />

        <LatestGuides />

        <FeaturedProducts />

        <GuidesTeaser />
      </div>
    </main>
  );
}
