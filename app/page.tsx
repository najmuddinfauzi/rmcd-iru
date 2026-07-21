export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-6xl font-bold mb-4">
            Investment Risk Unit
          </h1>

          <p className="text-xl text-slate-300">
            Risk Management & Compliance Department (RMCD)
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">
          About the Unit
        </h2>

        <p>
          The Investment Risk Unit provides independent oversight of
          investment risks through risk measurement, monitoring,
          stress testing and reporting.
        </p>
      </section>
    </main>
  );
}