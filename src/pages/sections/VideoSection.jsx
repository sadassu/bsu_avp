const CornerMark = ({ position }) => {
  const base = "absolute w-6 h-6 border-red-700 pointer-events-none";
  const map = {
    tl: "-top-3 -left-3 border-t-2 border-l-2",
    tr: "-top-3 -right-3 border-t-2 border-r-2",
    bl: "-bottom-3 -left-3 border-b-2 border-l-2",
    br: "-bottom-3 -right-3 border-b-2 border-r-2",
  };
  return <span aria-hidden="true" className={`${base} ${map[position]}`} />;
};

const VideoSection = () => {
  return (
    <>
      <section
        id="video-section"
        className="w-full min-h-screen bg-slate-100 flex items-center mx-auto"
      >
        <div className="w-full max-w-7xl mx-auto px-6 py-16 md:px-10 lg:py-24 grid gap-12 lg:gap-16 lg:grid-cols-12 items-center">
          {/* Text column */}
          <div className="lg:col-span-5">
            {/* Logo placeholder */}
            <div
              role="img"
              aria-label="University logo placeholder"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-dashed border-slate-400 bg-white/70 flex items-center justify-center text-center text-xs font-medium text-slate-500"
            >
              Logo
              <br />
              here
            </div>

            <h2 className="mt-8 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Batangas State University
              <span className="block text-red-700">Balayan Campus</span>
            </h2>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              A proud part of the National Engineering University, shaping
              future leaders for the global knowledge economy.
            </p>
          </div>

          {/* Video column */}
          <div className="lg:col-span-7">
            <div className="relative">
              <CornerMark position="tl" />
              <CornerMark position="tr" />
              <CornerMark position="bl" />
              <CornerMark position="br" />

              {/* Video placeholder (16:9) */}
              <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-slate-900 shadow-xl">
                {/* Poster background */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Play button */}
                <button
                  type="button"
                  aria-label="Play campus video"
                  className="absolute inset-0 m-auto h-20 w-20 md:h-24 md:w-24 rounded-full bg-red-700 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 md:h-10 md:w-10 ml-1"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                {/* Placeholder caption */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-slate-950/60 text-xs text-slate-300">
                  <span>Video placeholder</span>
                  <span>16:9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoSection;
