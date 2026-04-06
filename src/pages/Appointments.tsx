import React from "react";

export default function Appointments(): React.JSX.Element {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold">Book Appointment</h1>
      <p className="mt-2">External scheduling will go here.</p>

      <a
        href="https://calendly.com/"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 px-5 py-3 bg-sky-700 text-white rounded-full"
      >
        Go to Scheduler
      </a>
    </div>
  );
}