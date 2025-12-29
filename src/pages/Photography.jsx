export default function Photography() {
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-24 py-32">
      <h1 className="text-6xl font-light mb-16">Photography</h1>

      <div className="grid md:grid-cols-2 gap-24">
        <div className="h-[400px] border flex items-center justify-center text-gray-600">
          IMAGE
        </div>
        <div className="h-[600px] border flex items-center justify-center text-gray-600">
          IMAGE
        </div>
      </div>
    </section>
  );
}
