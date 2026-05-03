import React from "react";

export default function Appointments(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[1.25rem] font-semibold text-sky-700">
            Schedule Online
          </p>

          <h1 className="mt-4 text-[4rem] font-bold leading-tight tracking-tight text-sky-950">
            Book an Appointment
          </h1>

          <p className="mt-5 max-w-3xl text-[1.25rem] leading-8 text-slate-600">
            Use the scheduler below to book a call time with us during our free 
            operation time. Give us a call at the booked time, (we'll email you a 
            reminder!) and we can schedule an appointment!
          </p>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <iframe
              src="https://calendly.com/wellness-care-renton/30min"
              title="Schedule an appointment with Wellness Care"
              className="h-[850px] w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}