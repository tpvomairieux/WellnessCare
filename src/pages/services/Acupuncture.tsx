import React from "react";
import { NavLink } from "react-router-dom";

export default function Acupuncture(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="px-8 py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-4xl pl-0 lg:pl-8">
            <p className="text-[1.25rem] font-semibold text-sky-700">
              Acupuncture
            </p>

            <h1 className="mt-4 text-[4rem] font-bold leading-tight text-sky-950">
              Restoring balance through traditional acupuncture care.
            </h1>

            <p className="mt-6 text-[1.25rem] leading-9 text-slate-600">
              Acupuncture uses hair-thin, sterile needles placed at specific
              points on the body to support energy flow, pain relief, relaxation,
              and whole-body wellness.
            </p>

            <NavLink
              to="/appointments"
              className="mt-8 inline-block rounded-full bg-sky-700 px-8 py-4 text-[1.15rem] font-semibold text-white hover:bg-sky-800"
            >
              Book Appointment
            </NavLink>
          </div>

          <div className="pr-0 lg:pr-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <img
                src="/acupuncture.jpg"
                alt="Acupuncture treatment"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}