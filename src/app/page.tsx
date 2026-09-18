import Image from "next/image";

const stats = [
  { label: "Partners", value: "4" },
  { label: "Duration", value: "24 months" },
  { label: "Research areas", value: "AI · RAG · KG · NLP" },
  { label: "Status", value: "Ongoing" },
];

export default function Home() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="crisalia-hero">
        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-20 text-center md:py-28">

          <div className="mx-auto mb-8 w-full max-w-md">
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

          <p className="mx-auto mt-5 max-w-3xl text-sm font-medium leading-6 text-muted-foreground md:text-base">
            A research project primarily developed at the{" "}
            <span className="font-semibold text-foreground">
              Department of Statistical Sciences
            </span>
            , Sapienza University of Rome
          </p>

          <div className="crisalia-gradient mx-auto mt-6 h-1 w-40 rounded-full" />

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
              className="crisalia-button px-6 py-3"
            >
              About CRISALIA
            </a>

            {["Objectives", "Results", "Publications", "Resources"].map(
              (item) => (
                <span
                  key={item}
                  title="Coming soon"
                  aria-disabled="true"
                  className="crisalia-button-outline cursor-not-allowed px-6 py-3 opacity-45"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="crisalia-surface border-t">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">

            <div>
              <p className="crisalia-label mb-3">
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

            <p className="crisalia-label mb-3">
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

      {/* FUNDING AND PARTNERS */}
      <section className="crisalia-surface border-t">
        <div className="mx-auto max-w-6xl px-6 py-20">

          {/* FUNDED BY */}
          <div className="text-center">

            <p className="crisalia-label">
              Funded by
            </p>

            <div className="sapienza-rule mx-auto mt-4" />

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-muted-foreground">
              CRISALIA is funded by INAIL, the Italian National Institute for
              Insurance against Accidents at Work.
            </p>

            <div className="mx-auto mt-8 flex max-w-xl justify-center">
              <Image
                src="/inail-logo.jpg"
                alt="INAIL"
                width={900}
                height={400}
                className="h-auto max-h-28 w-auto object-contain"
              />
            </div>

          </div>

          {/* PARTNERS */}
          <div className="mt-20 border-t pt-16">

            <div className="text-center">

              <p className="crisalia-label">
                Research partners
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                A multidisciplinary research collaboration
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
                CRISALIA brings together expertise in Artificial Intelligence,
                data science, occupational health and safety, knowledge
                representation and experimental validation.
              </p>

            </div>

            <div className="mt-12 grid items-stretch gap-8 md:grid-cols-3">

              {/* SAPIENZA */}
              <div className="crisalia-card flex min-h-48 flex-col items-center justify-center p-8 text-center">
                <Image
                  src="/sapienza-logo.webp"
                  alt="Sapienza University of Rome"
                  width={650}
                  height={300}
                  className="max-h-24 w-auto object-contain"
                />

                <p className="mt-5 text-sm font-medium text-muted-foreground">
                  Department of Statistical Sciences
                </p>
              </div>

              {/* PARTHENOPE */}
              <div className="crisalia-card flex min-h-48 flex-col items-center justify-center p-8 text-center">
                <Image
                  src="/parthenope-logo.jpg"
                  alt="University of Naples Parthenope"
                  width={600}
                  height={600}
                  className="max-h-28 w-auto object-contain"
                />

                <p className="mt-5 text-sm font-medium text-muted-foreground">
                  University of Naples Parthenope
                </p>
              </div>

              {/* ISS */}
              <div className="crisalia-card flex min-h-48 flex-col items-center justify-center p-8 text-center">
                <Image
                  src="/iss-logo.jpg"
                  alt="Istituto Superiore di Sanità"
                  width={700}
                  height={700}
                  className="max-h-28 w-auto object-contain"
                />

                <p className="mt-5 text-sm font-medium text-muted-foreground">
                  Istituto Superiore di Sanità
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PROJECT AT A GLANCE */}
      <section className="border-y">
        <div className="mx-auto max-w-6xl px-6 py-16">

          <div className="mb-10 text-center">
            <p className="crisalia-label">
              Project at a glance
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="crisalia-card flex min-h-32 flex-col items-center justify-center p-6 text-center"
              >
                <div className="text-2xl font-semibold tracking-tight">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* RESEARCH ENVIRONMENT */}
      <section className="crisalia-surface border-b">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr]">

            <div>

              <p className="institution-label">
                Research environment
              </p>

              <div className="sapienza-rule mt-4" />

              <h2 className="mt-6 text-3xl font-bold tracking-tight md:text-4xl">
                Department of Statistical Sciences
              </h2>

              <p className="mt-2 text-xl font-medium text-muted-foreground">
                Sapienza University of Rome
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                CRISALIA is primarily developed at the Department of
                Statistical Sciences of Sapienza University of Rome, within
                TeraLab. The project builds on research activities in
                Artificial Intelligence, knowledge representation,
                data-intensive computing and High-Performance Computing.
              </p>

            </div>

            <div className="crisalia-card flex flex-col justify-center p-8">

              <p className="crisalia-label">
                Developed within
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                TeraLab
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                TeraLab is a research laboratory of Sapienza University of Rome
                focused on High-Performance Computing, Artificial Intelligence
                and data-intensive applications.
              </p>

              <div className="mt-7">
                <a
                  href="https://www.teralab.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="crisalia-button-outline px-5 py-3"
                >
                  Visit TeraLab
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-6xl px-6 py-20">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="crisalia-label mb-3">
                Contact
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Project contacts and updates
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
                className="crisalia-card flex items-center justify-between p-5"
              >
                <div>
                  <div className="font-semibold">
                    GitHub
                  </div>

                  <div className="mt-1 text-sm text-muted-foreground">
                    Research software and public project resources
                  </div>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/company/teralab-sapienza"
                target="_blank"
                rel="noopener noreferrer"
                className="crisalia-card flex items-center justify-between p-5"
              >
                <div>
                  <div className="font-semibold">
                    LinkedIn
                  </div>

                  <div className="mt-1 text-sm text-muted-foreground">
                    News, events and project updates
                  </div>
                </div>

                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.teralab.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="crisalia-card flex items-center justify-between p-5"
              >
                <div>
                  <div className="font-semibold">
                    TeraLab
                  </div>

                  <div className="mt-1 text-sm text-muted-foreground">
                    Research environment hosting CRISALIA
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
        <div className="mx-auto max-w-6xl px-6 py-10">

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

            <div>
              <p className="font-semibold">
                CRISALIA
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Artificial Intelligence for Safer Workplaces
              </p>

              <p className="mt-5 text-sm text-muted-foreground">
                Department of Statistical Sciences · Sapienza University of Rome
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              <a
                href="https://www.teralab.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                TeraLab
              </a>

              <a
                href="https://github.com/umbfer/crisalia"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/company/teralab-sapienza"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
            </div>

          </div>

          <div className="mt-8 border-t pt-5 text-xs text-muted-foreground">
            © CRISALIA Project
          </div>

        </div>
      </footer>

    </main>
  );
}
