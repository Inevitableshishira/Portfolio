export default function Home() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-24 py-32">
      <h1 className="text-6xl md:text-7xl font-light mb-8">Shishira B J</h1>
      <p className="text-xl text-gray-400 max-w-2xl mb-6">
        Software Engineer · Machine Learning Developer · Visual Thinker
      </p>
      <p className="text-gray-500 max-w-3xl mb-12">
        I build intelligent software systems and curate visual experiences.
        This portfolio reflects my engineering discipline and creative restraint.
      </p>
      <a href="/resume.pdf" download className="border px-6 py-3">
        Download Resume
      </a>
    </section>
  );
}
