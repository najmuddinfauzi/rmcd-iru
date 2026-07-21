export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      <nav className="bg-[#081120] text-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="font-bold text-xl">
            RMCD | Investment Risk Unit
          </h1>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-[#081120] via-[#0B1F3A] to-[#163A66] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-block bg-[#C8A24A] text-black px-4 py-2 rounded-full mb-6 font-semibold">
            Risk Management & Compliance Department
          </div>

          <h1 className="text-6xl font-bold mb-6">
            Investment Risk Unit
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            Independent risk oversight through portfolio analytics,
            liquidity stress testing, market intelligence and risk reporting.
          </p>

        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#0B1F3A]">4</div>
              <p>Core Risk Disciplines</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#0B1F3A]">24/7</div>
              <p>Market Monitoring</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#0B1F3A]">RMCD</div>
              <p>Independent Oversight</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl font-bold text-[#0B1F3A]">LTAT</div>
              <p>Institutional Portfolio</p>
            </div>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-8">
          About the Unit
        </h2>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-lg leading-8">
            The Investment Risk Unit provides independent oversight of
            investment risks through risk measurement, monitoring,
            stress testing and reporting.
          </p>
        </div>

      </section>

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Core Functions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="border rounded-xl p-6 shadow">
              <h3 className="font-bold mb-3">
                Portfolio Risk
              </h3>
              <p>
                Portfolio analytics and risk monitoring.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="font-bold mb-3">
                Liquidity Risk
              </h3>
              <p>
                Stress testing and liquidity analysis.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="font-bold mb-3">
                Market Risk
              </h3>
              <p>
                Equity, bond and FX monitoring.
              </p>
            </div>

            <div className="border rounded-xl p-6 shadow">
              <h3 className="font-bold mb-3">
                Risk Reporting
              </h3>
              <p>
                Management and committee reporting.
              </p>
            </div>

          </div>

        </div>

      </section>

      <footer className="bg-[#081120] text-white py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="font-bold text-xl">
            Investment Risk Unit
          </h3>

          <p className="text-slate-400">
            Risk Management & Compliance Department
          </p>

          <p className="text-slate-400">
            Lembaga Tabung Angkatan Tentera (LTAT)
          </p>

        </div>

      </footer>

    </main>
  );
}