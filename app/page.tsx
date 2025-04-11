import { CustomFilter, Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      {/* Car Catlogs Start Here */}
      <div className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="font-extrabold text-4xl text-blue-600">Car Catlogs</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
