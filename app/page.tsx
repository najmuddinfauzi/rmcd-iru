export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Mohamad Najmuddin Ahmad Fauzi
          </h1>
          <p className="text-xl mb-8">
            Investment Risk Analyst | Portfolio Analytics | Liquidity Stress Testing
          </p>
          #about
            Learn More
          </a>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          Experienced in investment risk analysis, liquidity stress testing,
          portfolio monitoring, market risk assessment, and financial reporting.
        </p>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Expertise</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Portfolio Risk</h3>
              <p>Tracking error, Sharpe ratio and risk attribution.</p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Liquidity Analysis</h3>
              <p>Stress testing and cash flow forecasting.</p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">Market Research</h3>
              <p>Macro, fixed income and equity market monitoring.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}