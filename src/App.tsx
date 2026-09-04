function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col bg-[url(src/assets/hero-sample.png)] bg-cover px-5 py-10 text-white">
      <div className="flex flex-1 flex-col justify-center pb-48">
        <h1 className="py-2.5 text-6xl">金沢旅行</h1>
        <p className="px-1.5">2026.09.13 - 2026.09.15</p>
      </div>

      <button className="rounded-full bg-black p-4 text-center">
        出発する
      </button>
    </main>
  );
}

export default App;
