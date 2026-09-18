import Image from "next/image";

const stats = [
  { label: "Partners", value: "4" },
  { label: "Work Packages", value: "—" },
  { label: "Publications", value: "—" },
  { label: "Datasets", value: "—" },
  { label: "Software Releases", value: "—" },
  { label: "Deliverables", value: "—" },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="mx-auto flex min-h-[75vh] max-w-6xl flex-col justify-center px-6 py-20 text-center md:py-28">

        <div className="mx-auto mb-10 w-full max-w-md">
          <Image
            src="/crisalia-logo.png"
            alt="CRISALIA"
            width={1374}
            height={1145}
            priority
            className="h-auto w-full"
          />
        </div>

        <p className="mx-auto max-w-4xl text-2xl font-semibold tracking-tight md:text-3xl">
          Artificial Intelligence for Safer Workplaces
        </p>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          CRISALIA investigates Artificial Intelligence methods and
          technologies for improving access to occupational health and safety
          knowledge. The project combines advanced document processing,
          Large Language Models, Retrieval-Augmented Generation and Knowledge
          Graphs to develop intelligent, reliable and traceable tools for
          accessing complex and continuously evolving regulatory and technical
          documentation.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#about"
            className="rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-80"
          >
            About
          </a>

          {["Objectives", "Results", "Publications", "Resources"].map(
            (item) => (
              <span
                key={item}
                title="Coming soon"
                aria-disabled="true"
                className="cursor-not-allowed rounded-lg border px-6 py-3 font-medium text-muted-foreground opacity-45"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                About CRISALIA
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                AI technologies supporting occupational health and safety
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Occupational health and safety relies on a large and
                heterogeneous body of regulations, technical documentation,
                guidelines and operational procedures that continuously evolves
                over time.
              </p>

              <p>
                CRISALIA explores how Artificial Intelligence can make this
                knowledge easier to acquire, organise, analyse and query while
                preserving traceability to authoritative sources.
              </p>

              <p>
                The project investigates integrated architectures combining
                document databases, semantic analysis, vector databases,
                Knowledge Graphs, Retrieval-Augmented Generation, intelligent
                agents and specialised conversational systems.
              </p>

              <p>
                Particular attention is devoted to source verification,
                transparency, uncertainty management and the reliability of
                AI-generated answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT VISION */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Project vision
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
              From documents to trusted knowledge
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              CRISALIA aims to transform fragmented occupational health and
              safety information into a continuously updated, structured and
              verifiable knowledge ecosystem supporting both human users and
              intelligent software agents.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT INDICATORS */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-14">

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-semibold tracking-tight">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Project indicators will be updated as research outputs become
            publicly available.
          </p>
        </div>
      </section>

      {/* HOSTED BY TERALAB */}
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Hosted by
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                TeraLab · Sapienza University of Rome
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                CRISALIA is hosted by TeraLab, a research laboratory at
                Sapienza University of Rome working on High-Performance
                Computing, Artificial Intelligence and data-intensive
                applications.
              </p>
            </div>

            <a
              href="https://www.teralab.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-lg border px-5 py-3 font-medium transition-colors hover:bg-muted"
            >
              Visit TeraLab
            </a>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Contact
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Follow the project
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                Follow CRISALIA through TeraLab channels for project updates,
                research results, publications, software releases and events.
              </p>
            </div>

            <div className="space-y-4">

              <a
                href="https://github.com/umbfer/crisalia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border p-5 transition-colors hover:bg-muted"
              >
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Source code and project resources
                  </div>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/company/teralab-sapienza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border p-5 transition-colors hover:bg-muted"
              >
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    News and project updates
                  </div>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.teralab.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border p-5 transition-colors hover:bg-muted"
              >
                <div>
                  <div className="font-semibold">TeraLab</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    Research laboratory hosting CRISALIA
                  </div>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/*
        FUTURE SECTIONS

        These sections are intentionally not rendered yet.

        PROJECT
        - Why CRISALIA
        - The problem
        - Why Artificial Intelligence
        - Objectives
        - Expected results
        - Timeline

        PLATFORM
        - Architecture
        - Document Database
        - NLP Analysis
        - Knowledge Graph
        - Vector Database
        - RAG
        - Multi-Agent Framework
        - Guardrails
        - Specialized Chatbots

        RESEARCH
        - Publications
        - Preprints
        - Posters
        - Presentations
        - Conferences

        DATASETS
        - Methodology
        - Benchmarks
        - Statistics

        SOFTWARE
        - Repositories
        - Releases
        - Docker
        - API
        - Documentation

        DEMO

        NEWS

        DISSEMINATION

        PARTNERS

        TEAM

        PUBLICATIONS

        DOWNLOADS

        KNOWLEDGE OBSERVATORY
        - Regulatory updates
        - New FAQs
        - Source statistics
        - Knowledge Graph evolution
        - Document database update history
      */}

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© CRISALIA Project</p>

          <p>
            Hosted by TeraLab · Sapienza University of Rome
          </p>
        </div>
      </footer>

    </main>
  );
}
