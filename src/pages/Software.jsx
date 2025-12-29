export default function Software() {
  return (
    <section className="min-h-screen bg-black px-6 md:px-24 py-20 text-white">

      {/* Intro */}
      <div className="max-w-4xl mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Software Engineering
        </h1>
        <p className="text-gray-400 text-lg">
          I specialize in Machine Learning and backend development, building
          intelligent systems and scalable web applications with a strong
          focus on clean architecture and real-world impact.
        </p>
      </div>

      {/* Skills */}
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300">
          <div>Python</div>
          <div>Java</div>
          <div>JavaScript</div>
          <div>Machine Learning</div>
          <div>Flask / FastAPI</div>
          <div>SQL & Databases</div>
          <div>REST APIs</div>
          <div>Git & GitHub</div>
          <div>Docker (Basics)</div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-10">Selected Projects</h2>

        <div className="space-y-10">

          <div className="border border-gray-700 rounded-xl p-8 hover:border-accent transition">
            <h3 className="text-xl font-semibold mb-2">
              Optimal Cricket Team Selection (IEEE)
            </h3>
            <p className="text-gray-400">
              Machine learning system that recommends optimal cricket teams
              using player statistics and match conditions. Achieved 85%
              accuracy using SVM and was featured on IEEE.
            </p>
            <p className="mt-3 text-sm text-accent">
              Python · Scikit-learn · Pandas · NumPy
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-8 hover:border-accent transition">
            <h3 className="text-xl font-semibold mb-2">
              File Upload & Annotation Management System
            </h3>
            <p className="text-gray-400">
              Web application that enables users to upload files and manage
              structured annotations efficiently, improving document
              organization and retrieval.
            </p>
            <p className="mt-3 text-sm text-accent">
              Python · JavaScript · SQLite · HTML · CSS
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-8 hover:border-accent transition">
            <h3 className="text-xl font-semibold mb-2">
              Cricket Score Card System
            </h3>
            <p className="text-gray-400">
              Database-driven system with optimized SQL queries and stored
              procedures for managing cricket scorecards.
            </p>
            <p className="mt-3 text-sm text-accent">
              MySQL · SQL · Python
            </p>
          </div>

        </div>
      </div>

    </section>
  )
}
