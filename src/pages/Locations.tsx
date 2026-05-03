import React from "react";

const locations = [
  {
    name: "Renton Office",
    image: "/wellnesscarerenton.png",
    address: "9806 SE Carr Rd ste 101, Renton, WA 98055",
    phone: "(425) 738-5197",
    hours: [
      ["Friday", "10 AM–6 PM"],
      ["Saturday", "9 AM–2 PM"],
      ["Sunday", "Closed"],
      ["Monday", "10 AM–6 PM"],
      ["Tuesday", "10 AM–6 PM"],
      ["Wednesday", "10 AM–6 PM"],
      ["Thursday", "10 AM–6 PM"],
    ],
  },
  {
    name: "Bellevue Office",
    image: "/wellnesscarebellevue.png",
    address: "1451 158th Pl NE, Bellevue, WA 98008",
    phone: "(425) 738-5197",
    hours: [
      ["Friday", "Closed"],
      ["Saturday", "Closed"],
      ["Sunday", "Closed"],
      ["Monday", "9 AM–6 PM"],
      ["Tuesday", "Closed"],
      ["Wednesday", "9 AM–6 PM"],
      ["Thursday", "Closed"],
    ],
  },
];

export default function Locations(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[1.25rem] font-semibold text-sky-700">
            Visit Wellness Care
          </p>

          <h1 className="mt-4 text-[4rem] font-bold leading-tight tracking-tight text-sky-950">
            Our Locations
          </h1>

          <p className="mt-5 max-w-3xl text-[1.25rem] leading-8 text-slate-600">
            Wellness Care serves patients at our Renton and Bellevue clinic
            locations. See office details, phone information, and weekly hours
            below.
          </p>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {locations.map((location) => (
              <article
                key={location.name}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-[360px] w-full overflow-hidden bg-slate-100">
                  <img
                    src={location.image}
                    alt={`${location.name} building`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <h2 className="text-[2.25rem] font-bold text-sky-900">
                    {location.name}
                  </h2>

                  <div className="mt-6 space-y-4 text-[1.1rem] leading-7 text-slate-700">
                    <p>
                      <span className="font-bold text-slate-950">Address: </span>
                      {location.address}
                    </p>

                    <p>
                      <span className="font-bold text-slate-950">Phone: </span>
                      <a
                        href={`tel:${location.phone.replace(/[^\d]/g, "")}`}
                        className="text-sky-700 underline underline-offset-4 hover:text-sky-900"
                      >
                        {location.phone}
                      </a>
                    </p>
                  </div>

                  <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                    <h3 className="text-[1.35rem] font-bold text-sky-950">
                      Hours
                    </h3>

                    <div className="mt-4 space-y-2">
                      {location.hours.map(([day, time]) => (
                        <div
                          key={`${location.name}-${day}`}
                          className="grid grid-cols-2 text-[1.05rem] text-slate-700"
                        >
                          <span className="font-semibold text-slate-900">
                            {day}
                          </span>
                          <span>{time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <a
                      href={`tel:${location.phone.replace(/[^\d]/g, "")}`}
                      className="inline-block rounded-full bg-sky-700 px-7 py-4 text-[1.1rem] font-semibold text-white transition hover:bg-sky-800"
                    >
                      Call {location.name}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}