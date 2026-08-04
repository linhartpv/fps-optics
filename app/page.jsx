export default function FPSOpticsLandingPage() {
  const services = [
    {
      title: "Optical System Design & Development",
      body:
        "We develop optical systems from concept to prototype, with a strong focus on realistic performance, integration constraints, and verification from the start.",
    },
    {
      title: "System Analysis & Troubleshooting",
      body:
        "When a system does not behave as expected, we identify the root cause across optics, detection, electronics, timing, calibration, and system assumptions.",
    },
    {
      title: "Optical System Audit",
      body:
        "A focused independent evaluation for teams that need clarity before committing to further development, optimization, or redesign.",
    },
  ];

  const painPoints = [
    "Unexplained noise or unstable signal behavior",
    "Sensitivity below theoretical or expected limits",
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
    "Laser ranging & time-of-flight",
    "High-speed optical detection",
    "Camera, sensor & illumination integration",
    "Performance optimization",
    "Independent technical audits",
  ];

  const applications = [
    "Semiconductor inspection & metrology",
    "Automotive imaging & sensing",
    "Traffic & enforcement imaging",
    "Laser ranging & time-of-flight",
    "Medical & scientific instrumentation",
    "Machine vision & optical inspection",
    "High-speed optical detection",
    "Custom industrial instrumentation",
  ];

  const selectedExperience = [
    {
      title: "Semiconductor inspection & metrology",
      body:
        "Optical and detection development for demanding inspection and measurement systems, with emphasis on signal quality, achievable performance, and robust system integration.",
    },
    {
      title: "Automotive imaging & sensing",
      body:
        "High-resolution optical and imaging systems for automotive applications, including image quality, sensor integration, field performance, environmental constraints, and system-level optimization.",
    },
    {
      title: "Traffic & enforcement imaging",
      body:
        "Optical design for long-range, high-resolution traffic camera systems, including low-light performance, resolution across the field, identification reliability, and operation in real-world conditions.",
    },
    {
      title: "Laser ranging & time-of-flight",
      body:
        "Ranging architectures, optical power budgets, receiver sensitivity, timing accuracy, high-speed detection, SNR, and reliable signal evaluation under real-world operating conditions.",
    },
    {
      title: "Medical & scientific instrumentation",
      body:
        "Optical and detection solutions for specialized medical, laboratory, measurement, and scientific instrumentation, with attention to sensitivity, stability, calibration, and practical integration.",
    },
    {
      title: "Custom industrial systems",
      body:
        "System architecture, prototyping, troubleshooting, and performance optimization for specialized industrial sensing, imaging, and measurement applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(30,41,59,0.08),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-300 bg-white shadow-sm">
              <div className="text-2xl font-black tracking-tight text-slate-900">
                FPS
              </div>
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
                First Principle Systems helps R&amp;D teams develop demanding
                optical and detection systems, understand why existing designs
                underperform, and define the fastest path to better performance.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
                Experience spans semiconductor inspection, automotive and
                traffic imaging, medical and scientific instrumentation, laser
                ranging, high-speed detection, and custom industrial systems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
                >
                  Discuss your system
                </a>

                <a
                  href="#audit"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Explore the audit
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Typical entry point
              </div>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Optical System Audit
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                A focused independent evaluation to understand what is limiting
                your system performance before committing to a larger redesign.
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
              The root cause is often hidden inside the optics, signal path, or
              system assumptions.
            </h2>
          </div>

          <div className="grid gap-3">
            {painPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 px-5 py-4 text-sm text-slate-700 shadow-sm"
              >
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
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="applications"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Selected application areas
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Built for demanding sensing and measurement applications.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              The work is especially relevant where performance depends on the
              interaction between optics, sensors, illumination, signal
              processing, timing, calibration, and real-world operating
              conditions.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {applications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="audit"
        className="scroll-mt-24 border-y border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Entry service
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Start with an Optical System Audit.
              </h2>

              <div className="mt-5 max-w-xl space-y-4 text-base leading-8 text-slate-600">
                <p>Most projects start here.</p>

                <p>
                  A focused, independent evaluation designed for situations
                  where performance is unclear, results do not match
                  expectations, or further development is uncertain.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Typical outcomes
              </div>

              <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                {outcomes.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
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
                Every system is analyzed based on physics, signal behavior, and
                realistic performance limits. The goal is not just to make a
                system work, but to understand why it works and where it breaks.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200"
                >
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
              Example challenge
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Turning an unstable prototype into a clear engineering problem.
            </h2>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-base leading-8 text-slate-700">
              A high-speed optical detection system showed strong
              temperature-dependent performance despite stable optical power.
              System-level analysis identified uncompensated timing drift
              interacting with a narrow detection window and defined a
              practical calibration strategy.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Problem
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Unstable detection
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Root cause
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Timing and temperature interaction
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Outcome
                </div>
                <div className="mt-2 text-sm text-slate-700">
                  Clear calibration path
                </div>
              </div>
            </div>

            <p className="mt-5 text-xs leading-6 text-slate-500">
              Example anonymized to protect confidential project information.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.82fr_1.18fr] md:items-start">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Selected experience
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Experience across advanced optical and detection systems.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Project experience includes optical, imaging, ranging, and
                detection solutions across semiconductor, automotive, traffic,
                medical, scientific, and specialized industrial applications.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                Specific technical and project details remain confidential.
              </p>
            </div>

            <div>
              <div className="rounded-3xl bg-slate-950 p-7 text-white shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  Project experience includes
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 text-xl font-semibold tracking-tight md:text-2xl">
                  <span>KLA</span>
                  <span className="text-slate-600">/</span>
                  <span>Teledyne DALSA</span>
                  <span className="text-slate-600">/</span>
                  <span>Qualcomm</span>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                  Selected experience from optical, imaging, and detection
                  development for advanced semiconductor, camera, sensing, and
                  measurement applications.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {selectedExperience.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:px-10 md:py-24"
      >
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div className="flex h-40 w-40 items-center justify-center rounded-3xl border border-slate-200 bg-slate-50">
              <div className="text-center">
                <div className="text-3xl font-black tracking-tight text-slate-900">
                  PL
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-500">
                  Optical systems
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Behind FPS
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Pavel Linhart
              </h2>

              <div className="mt-2 text-base font-medium text-slate-700">
                Optical Systems Architect
              </div>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                The work is led by Pavel Linhart, an Optical Systems Architect
                with experience across semiconductor inspection, automotive and
                traffic imaging, medical and scientific instrumentation, laser
                ranging, high-speed optical detection, and system-level
                performance analysis.
              </p>

              {/*
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                LinkedIn profile
              </a>
              */}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-slate-200 bg-slate-50"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Contact
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Let&apos;s discuss your system.
                </h2>

                <div className="mt-4 max-w-2xl space-y-4 text-base leading-8 text-slate-600">
                  <p>Send a short description of your system or problem.</p>

                  <p>
                    Whether you need a new optical system, troubleshooting, or
                    an independent audit, the fastest way to start is a direct
                    conversation.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
                <div className="text-sm uppercase tracking-[0.22em] text-slate-400">
                  Email
                </div>

                <a
                  href="mailto:info@fps-optics.cz"
                  className="mt-3 block text-xl font-semibold tracking-tight text-white"
                >
                  info@fps-optics.cz
                </a>

                <div className="mt-6 text-base text-slate-200">
                  First Principle Systems
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  Advanced Optical Engineering &amp; Sensing
                </div>

                <div className="mt-6 text-sm text-slate-300">
                  Pavel Linhart
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  Optical Systems Architect
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
