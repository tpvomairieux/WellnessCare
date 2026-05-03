import React from "react";

const videos = [
  {
    title: "Jogging Form and Technique",
    description:
      "A video resource for understanding basic jogging form, rhythm, and movement mechanics.",
    embed: "https://www.youtube.com/embed/idkXamhMTas",
  },
  {
    title: "Jogging and Movement Support",
    description:
      "A helpful guide for patients interested in building safer, more comfortable movement habits.",
    embed: "https://www.youtube.com/embed/hZS0S1vphio",
  },
  {
    title: "Jogging Wellness Resource",
    description:
      "A wellness-focused jogging video that can support patient education around exercise and consistency.",
    embed: "https://www.youtube.com/embed/ilkzRjeUllE",
  },
];

export default function Jogging(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="px-8 py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-4xl pl-0 lg:pl-8">
            <p className="text-[1.25rem] font-semibold text-sky-700">
              Wellness Resource
            </p>

            <h1 className="mt-4 text-[4rem] font-bold leading-tight text-sky-950">
              Jogging, movement, and long-term wellness.
            </h1>

            <p className="mt-6 text-[1.25rem] leading-9 text-slate-600">
              Regular movement can support circulation, strength, stress
              management, and overall health. These jogging resources can help
              patients think about safe, sustainable exercise habits.
            </p>
          </div>

          <div className="pr-0 lg:pr-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <img
                src="/ultraslowjogging.jpg"
                alt="Ultra slow jogging"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[3rem] font-bold text-sky-950">
            Jogging Video Resources
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.embed}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm"
              >
                <iframe
                  src={video.embed}
                  title={video.title}
                  className="h-[260px] w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <div className="p-6">
                  <h3 className="text-[1.5rem] font-bold text-sky-900">
                    {video.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] leading-7 text-slate-600">
                    {video.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}