import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(): React.JSX.Element {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="relative flex h-32 w-full items-center px-6">
        <NavLink to="/" className="flex items-center gap-4">
          <div className="h-20 w-20 overflow-hidden rounded-md">
            <img
              src="/WellnessCareLogo.png"
              alt="Wellness Care logo"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col leading-none justify-center">
            <span className="text-[3.5rem] font-bold tracking-tight text-sky-900">
              Wellness Care
            </span>
            <span className="mt-[0.2rem] pl-[3px] text-[1.175rem] text-slate-600">
              Chiropractic & Acupuncture Clinic
            </span>
          </div>
        </NavLink>

        <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-14">
          <NavLink
            to="/"
            end
            className="text-[1.5rem] font-semibold text-slate-700 hover:text-sky-900"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-[1.5rem] font-semibold text-slate-700 hover:text-sky-900"
          >
            About
          </NavLink>

          <div className="group relative">
            <NavLink
              to="/services"
              className="text-[1.5rem] font-semibold text-slate-700 hover:text-sky-900"
            >
              Services
            </NavLink>

            <div className="absolute left-1/2 top-full h-4 w-40 -translate-x-1/2" />

            <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-80 -translate-x-1/2 translate-y-7 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-xl transition-all duration-350 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex flex-col">
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 text-left text-[1.1rem] font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-900"
                >
                  Acupuncture
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 text-left text-[1.1rem] font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-900"
                >
                  Hair Loss Treatment
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 text-left text-[1.1rem] font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-900"
                >
                  Chiropractor
                </button>
                <button
                  type="button"
                  className="rounded-xl px-4 py-3 text-left text-[1.1rem] font-medium text-slate-700 transition hover:bg-sky-50 hover:text-sky-900"
                >
                  Herbal Medication
                </button>
              </div>
            </div>
          </div>

          <NavLink
            to="/locations"
            className="text-[1.5rem] font-semibold text-slate-700 hover:text-sky-900"
          >
            Locations
          </NavLink>
        </nav>

        <div className="ml-auto">
          <NavLink
            to="/appointments"
            className="rounded-full bg-sky-700 px-12 py-5 text-[1.5rem] font-semibold text-white hover:bg-sky-800"
          >
            Book Appointment
          </NavLink>
        </div>
      </div>
    </header>
  );
}