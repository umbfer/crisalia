export default function Home() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Artificial Intelligence for Occupational Health and Safety
        </p>

        <h1 className="mx-auto max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
          CRISALIA
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Artificial Intelligence methods and tools for accessing, processing
          and querying occupational  health and safety knowledge.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#project"
            className="rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-80"
          >
            Discover the project
          </a>

          <a
            href="#research"
            className="rounded-lg border px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            Research activities
          </a>
        </div>
      </section>

      {/* PROJECT */}
      <section
        id="project"
        className="border-t bg-muted/30"
      >
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                The project
              </p>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                AI technologies for safer workplaces
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                CRISALIA develops and experimentally evaluates Artificial
                Intelligence methodologies and software components for the
                acquisition, processing and querying of documentation related
                to occupational health and safety.
              </p>

              <p>
                The project combines semantic document processing,
                Retrieval-Augmented Generation, Knowledge Graphs and Large
                Language Models to develop intelligent tools supporting access
                to occupational health and safety knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH */}
      <section id="research">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Research
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Research areas
            </h2>

            <p className="mt-4 text-lg text-muted-foreground">
              CRISALIA investigates how modern AI technologies can improve
              access to complex and evolving occupational health and safety
              information.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Knowledge Acquisition
              </h3>
              <p className="leading-7 text-muted-foreground">
                Automated acquisition, extraction and semantic indexing of
                occupational health and safety documentation.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                RAG
              </h3>
              <p className="leading-7 text-muted-foreground">
                Retrieval-Augmented Generation architectures for grounded and
                context-aware access to domain knowledge.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Knowledge Graphs
              </h3>
              <p className="leading-7 text-muted-foreground">
                Structured representation of regulations, concepts,
                relationships and the evolution of occupational safety
                knowledge.
              </p>
            </div>

            <div className="rounded-xl border p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Large Language Models
              </h3>
              <p className="leading-7 text-muted-foreground">
                Integration and experimental evaluation of LLMs for intelligent
                conversational access to specialised information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TERALAB */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">
                Hosted by
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                TeraLab · Sapienza University of Rome
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                CRISALIA is hosted by TeraLab, a research laboratory focused on
                high-performance computing, data-intensive applications and
                Artificial Intelligence.
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

      {/* FOLLOW */}
      <section className="border-t">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <p className="text-muted-foreground">
            Follow project updates through{" "}
            <a
              href="https://www.linkedin.com/company/teralab-sapienza"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4"
            >
              TeraLab on LinkedIn
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
