export default function Software() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-24 py-32">
      <h1 className="text-5xl font-light mb-12">Software Engineering</h1>

      <h2 className="text-2xl mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300 mb-16">
        <span>Python</span><span>Java</span><span>JavaScript</span><span>Machine Learning</span>
        <span>Flask</span><span>FastAPI</span><span>SQL</span><span>Git</span>
        <span>Docker</span><span>React</span><span>Pandas</span><span>NumPy</span>
      </div>

      <h2 className="text-2xl mb-8">Projects</h2>
      <div className="space-y-8">
        <a href="https://github.com/Inevitableshishira/Optimal-Cricket-Team-Selection" target="_blank" className="block border p-6">
          Optimal Cricket Team Selection (IEEE)
        </a>
        <a href="https://github.com/Inevitableshishira/file-upload-annotation" target="_blank" className="block border p-6">
          File Upload & Annotation System
        </a>
      </div>
    </section>
  );
}
