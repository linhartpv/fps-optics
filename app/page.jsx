export default function FPSOpticsLandingPage() {
  const services = [ 
    {
      title: "Optical System Design & Development",
      body:
        "Wew develop optical systems from concept to prototype, with a strong focus on performance from the start.",
    },
    {
      title: "System Analysis & Troubleshooting",
      body:
        "When systems don’t behave as expected, we identify the root cause and define a path forward.",
    },
    {
      title: "Optical System Audit",
      body:
        "A fast independent evaluation for teams that need clarity before committing to further development.",
    },
  ];

  const painPoints = [
    "Unexplained noise or unstable signal behavior",
    "Sensitivity below theoretical limits",
    "Unexpected performance loss in real-world conditions",
    "Unclear next step for system redesign or upgrade",
  ];

  const outcomes = [
    "Clear identification of performance bottlenecks",
    "Realistic performance limits and trade-offs",
    "Practical, physics-based improvement proposals",
    "A concrete path toward redesign, optimization, or next-generation development",
  ];

  const expertise = [
    "Optical system design",
    "Laser detection & sensing",
    "High-speed optical measurements",
    "Custom R&D and prototyping",
    "Performance optimization",
    "Independent technical audits",
  ];

  const experience = ["Qualcomm", "ASML", "Teledyne", "KLA", "Onto Innovation"];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(30,41,59,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300 bg-white shadow-sm">
              <div className="text-2xl font-black tracking-tight text-slate-900">FPS</div>
            </div>
            <div>
              <div className="text-xl font-semibold tracking-[0.18em] text-slate-900 md:text-2xl">
                FIRST PRINCIPLE SYSTEMS
              </div>
              <div className="mt-1 text-sm uppercase tracking-[0.24em] text-slate-500">
                Advanced Optical Engineering &amp; Sensing
              </div>
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-slate-300 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-600">
                From design to troubleshooting
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                We design, analyze, and fix high-performance optical systems.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                First Principle Systems helps teams build new systems, understand why existing ones underperform, and define the fastest path to better performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#audit"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Start with an audit
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Typical entry point
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">Optical System Audit</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                A fast independent evaluation to understand what is limiting your system performance before committing to a larger redesign.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>• clear identification of performance bottlenecks</li>
                <li>• realistic performance limits</li>
                <li>• actionable next steps</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              When performance is unclear
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              The root cause is often hidden inside the optics, signal path, or system assumptions.
            </h2>
          </div>
          <div className="grid gap-3">
            {painPoints.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 px-5 py-4 text-sm text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Core capabilities
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Design new systems. Fix existing ones. Start where it makes sense.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="audit" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Entry service
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Start with an Optical System Audit.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Most projects start here.

              A fast, independent evaluation designed for situations where performance is unclear, results don’t match expectations, or further development is uncertain.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Typical outcomes
            </div>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
              {outcomes.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
                From first principles
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                We do not rely on black-box assumptions.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                Every system is analyzed based on physics, signal behavior, and realistic performance limits. The goal is not just to make a system work, but to understand why it works and where it breaks.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Experience
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              High-performance background.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Experience includes work on high-performance systems in collaboration with leading global technology and semiconductor companies.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {experience.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 px-5 py-6 text-center text-sm font-medium tracking-wide text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Contact
                </div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Let’s discuss your system.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  Send a short description of your system or problem.

                  Whether you need a new optical system, troubleshooting, or an independent audit, the fastest way to start is a direct conversation.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-400">Email</div>
                <a href="mailto:info@fps-optics.cz" className="mt-3 block text-xl font-semibold tracking-tight text-white">
                  info@fps-optics.cz
                </a>
                <div className="mt-6 text-sm uppercase tracking-[0.22em] text-slate-400">Brand</div>
                <div className="mt-3 text-base text-slate-200">First Principle Systems</div>
                <div className="mt-1 text-sm text-slate-400">Advanced Optical Engineering &amp; Sensing</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
