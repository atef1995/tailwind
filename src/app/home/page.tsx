const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
      before:dark:to-blue-200
      before:dark:opacity-10
      after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-50 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      >
        <h1 className="text-xl font-mono ">Home</h1>
      </div>
      <div className="mb-32 grid text-center justify-center items-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left ">
        {/* 
        <div className="after:absolute after:-z-20 after:h-[180px] after:w-[900px] after:blur-2xl after:bottom-24 after:left-1/3 after:bg-gradient-conic after:dark:from-blue-600 after:dark:via-[#0141ff] after:dark:opacity-40 hover:animate-pulse transition-all duration-1000">
          <button title="button" className="rounded-full bg-blue-600 w-full">
            button
          </button>
        </div> */}
        <div className="p-4 lg:p-0">
          <div className="after:absolute after:-z-20 after:h-[180px] after:w-[900px] after:blur-2xl after:left-1/2 after:bg-gradient-conic after:dark:from-blue-600 after:dark:via-[#0141ff] after:dark:opacity-30 animate-pulse transition-all duration-1000" />
          <h2 className="text-xl font-semibold hover:animate-spin">
            Tailwind CSS
          </h2>
          <p className="mt-4 text-sm">
            A utility-first CSS framework for rapidly building custom designs.
          </p>
        </div>
        <div className="p-4 lg:p-0">
          <h2 className="text-xl font-semibold">Next.js</h2>
          <p className="mt-4 text-sm">The React framework for production.</p>
        </div>
        <div className="p-4 lg:p-0">
          <h2 className="text-xl font-semibold">TypeScript</h2>
          <p className="mt-4 text-sm">
            An open-source language which builds on JavaScript.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
