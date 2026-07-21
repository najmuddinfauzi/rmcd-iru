export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">

      {/* Hero Section */}
      <section className="bg-[#0B1F3A] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="inline-block bg-[#C8A24A] text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Risk Management & Compliance Department
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Investment Risk Unit
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl">
            Independent risk oversight through portfolio analytics,
            liquidity stress testing, market intelligence and risk reporting.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-6">
          About Us
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          The Investment Risk Unit provides independent oversight of
          investment risks across LTAT portfolios through risk measurement,
          monitoring, stress testing and reporting. The unit supports
          informed decision-making by delivering timely risk analytics
          and actionable insights.
        </p>
      </section>

      {/* Core Functions */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Core Functions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="p-6 rounded-xl shadow-md border">
              <h3 className="font-bold text-xl mb-3">
                Portfolio Risk
              </h3>
              <p>
                Portfolio monitoring, risk analytics, concentration analysis and performance measurement.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border">
              <h3 className="font-bold text-xl mb-3">
                Liquidity Risk
              </h3>
              <p>
                Liquidity stress testing, cash flow monitoring and scenario analysis.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border">
              <h3 className="font-bold text-xl mb-3">
                Market Risk
              </h3>
              <p>
                Equity, fixed income, currency and macroeconomic risk monitoring.
              </p>
            </div>

            <div className="p-6 rounded-xl shadow-md border">
              <h3 className="font-bold text-xl mb-3">
                Risk Reporting
              </h3>
              <p>
                Management, Investment Committee and Board-level reporting.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Strategic Initiatives */}
      <section className="bg-[#0B1F3A] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Strategic Initiatives
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">
                Liquidity Stress Testing
              </h3>
              <p>
                Enhancing portfolio resilience through forward-looking stress scenarios.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">
                Risk Dashboard Automation
              </h3>
              <p>
                Leveraging data analytics to improve risk monitoring efficiency.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-3">
                Early Warning Indicators
              </h3>
              <p>
                Identifying emerging risks before they impact portfolios.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Capabilities */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Risk Analytics Capabilities
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {[
            "Stress Testing",
            "Scenario Analysis",
            "Liquidity Monitoring",
            "Portfolio Analytics",
            "Market Risk",
            "Performance Attribution",
            "SQL Analytics",
            "Power BI Dashboards"
          ].map((item) => (
            <div
              key={item}
              className="bg-[#C8A24A] text-black font-semibold rounded-lg p-5 text-center"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="font-bold text-xl mb-3">
            Investment Risk Unit
          </h3>

          <p className="text-slate-400">
            Risk Management & Compliance Department (RMCD)
          </p>

          <p className="text-slate-400">
            Lembaga Tabung Angkatan Tentera (LTAT)
          </p>

        </div>
      </footer>

    </main>
  );
}