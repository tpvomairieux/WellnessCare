import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(): React.JSX.Element {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="relative flex h-32 w-full items-center px-6">
        
        {/* LEFT */}
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

        {/* CENTER */}
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

          <NavLink
            to="/services"
            className="text-[1.5rem] font-semibold text-slate-700 hover:text-sky-900"
          >
            Services
          </NavLink>

          <NavLink
            to="/locations"
            className="text-[1.5rem] font-semibold text-slate-700 hover:text-sky-900"
          >
            Locations
          </NavLink>
        </nav>

        {/* RIGHT */}
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