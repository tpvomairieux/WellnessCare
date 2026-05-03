import React from "react";

const procedures = [
  "General Medicine",
  "Chiropractic Treatment",
  "Acupuncture",
  "Graston Technique",
  "Herbal Medicine",
  "Nutrition",
  "Dietary Therapy",
  "Stress Management",
];

const insurancePartners = [
  {
    industry: "Tech",
    company: "Amazon",
    insurance: "Aetna, Kaiser Permanente, Premera Blue Cross, Cigna, SIMNSA, HMSA",
  },
  {
    industry: "Tech",
    company: "Microsoft",
    insurance: "Kaiser Permanente, Premera Blue Cross, United Health Care",
  },
  {
    industry: "Tech",
    company: "Google",
    insurance: "Anthem Blue Cross",
  },
  {
    industry: "Lumber",
    company: "Weyerhaeuser",
    insurance: "Premera Blue Cross, Regence BlueShield, United Healthcare, Aetna",
  },
  {
    industry: "Trucking",
    company: "PACCAR",
    insurance: "Premera Blue Cross",
  },
  {
    industry: "Finance",
    company: "Russell Investments",
    insurance: "Blue Cross Blue Shield",
  },
  {
    industry: "Food",
    company: "Starbucks",
    insurance: "Premera Blue Cross, Aetna, Cigna, United Healthcare, Kaiser Permanente",
  },
  {
    industry: "Retail",
    company: "Costco",
    insurance: "Aetna",
  },
  {
    industry: "Fashion",
    company: "Nordstrom",
    insurance: "Premera Blue Cross, Aetna, Kaiser Permanente",
  },
  {
    industry: "Travel",
    company: "Alaska Airlines",
    insurance: "Premera Blue Cross",
  },
  {
    industry: "Military Contractor",
    company: "Boeing",
    insurance: "Blue Cross Blue Shield of Illinois, Embright",
  },
  {
    industry: "Logistics",
    company: "Expeditors International",
    insurance: "Aetna",
  },
];

export default function About(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="px-8 py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          {/* LEFT TEXT */}
          <div className="max-w-4xl pl-0 lg:pl-8">
            <p className="text-[1.25rem] font-semibold text-sky-700">
              About Wellness Care
            </p>

            <h1 className="mt-4 max-w-4xl text-[4rem] font-bold leading-[1.08] tracking-tight text-sky-950">
              A whole-person approach to healing through chiropractic care,
              acupuncture, herbal medicine, and wellness support.
            </h1>

            <p className="mt-6 max-w-3xl text-[1.25rem] leading-9 text-slate-600">
              Wellness Care blends western and alternative healthcare to create a
              tailored healing experience for each patient. Our team-based approach
              brings together chiropractic treatment, acupuncture, herbal medicine,
              nutrition, and health education to support long-term wellness.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="pr-0 lg:pr-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                src="/harmony.png"
                alt="Family enjoying wellness and outdoor relaxation"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto grid max-w-7xl items-stretch gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-between pt-8">
            <div>
              <h2 className="text-[2.5rem] font-bold text-sky-950">
                A Team Approach to Care
              </h2>

              <p className="mt-5 text-[1.15rem] leading-8 text-slate-600">
                In an effort to provide effective and efficient care, Wellness Care
                developed an approach designed to meet the needs of patients through
                a collaborative model. Rather than relying only on an individual
                doctor-patient plan, our team approach blends multiple areas of
                healthcare to create positive, measurable outcomes.
              </p>

              <p className="mt-5 text-[1.15rem] leading-8 text-slate-600">
                With physicians, an acupuncturist, a dietician, and health
                educators, Wellness Care is designed to support the full range of
                patient needs in one healing environment.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col justify-between rounded-[2rem] bg-sky-900 p-8 text-white">
            <div>
              <h3 className="text-[2.5rem] font-bold leading-tight">
                A New Approach to Healing
              </h3>

              <p className="mt-5 text-[1.15rem] leading-8 text-sky-50">
                Diet, exercise, and stress management are key elements of health.
                Our goal is to give patients the knowledge and tools to adopt a
                proactive approach to total well-being.
              </p>

              <p className="mt-5 text-[1.15rem] leading-8 text-sky-50">
                Wellness Care is dedicated to providing a healing environment that
                blends modern science with proven traditional techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTITIONERS */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[3rem] font-bold text-sky-950">
            Meet Our Practitioners
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-[2rem] font-bold text-sky-900">Winnie Yueh</h3>
              <p className="mt-2 text-[1.1rem] font-semibold text-slate-500">
                Licensed Acupuncturist & Herbalist
              </p>

              <div className="mt-6 space-y-5 text-[1.1rem] leading-8 text-slate-600">
                <p>
                  Winnie is a nationally board certified and Washington licensed
                  acupuncturist and herbalist.
                </p>
                <p>
                  Winnie received her Physical Therapy Bachelor degree in Taiwan
                  and practiced physical therapy for many years. Her early
                  exposure to Traditional Chinese Medicine shaped her
                  understanding of Chinese medicine and dietary therapy.
                </p>
                <p>
                  After completing her Chinese medicine and acupuncture education
                  in Taipei, she began integrating Chinese medicine and
                  acupuncture into her practice and found that this comprehensive
                  approach produced strong results for patients.
                </p>
                <p>
                  Winnie later moved to the United States and earned a master’s
                  degree in Acupuncture and Oriental Medicine from Oregon College
                  of Oriental Medicine. She is also a private student of Dr. Wei
                  Li, an 8th generation herbalist known nationally for
                  specialization in kidney disease.
                </p>
                <p>
                  Winnie is passionate about her work and devoted to bringing
                  patients quality and effective care.
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-[2rem] font-bold text-sky-900">
                Dr. Wen Pin Hou, DC
              </h3>
              <p className="mt-2 text-[1.1rem] font-semibold text-slate-500">
                Chiropractor
              </p>

              <div className="mt-6 space-y-5 text-[1.1rem] leading-8 text-slate-600">
                <p>
                  Dr. Wen Pin Hou, DC is a healthcare provider based in Renton,
                  WA. His specialty includes chiropractic care.
                </p>
                <p>
                  Dr. Hou works with patients experiencing concerns such as hip
                  pain, lower back pain, and neck pain.
                </p>
                <p>
                  His approach supports Wellness Care’s larger mission of
                  combining chiropractic treatment with complementary wellness
                  services to help patients feel better and move better.
                </p>
                <p>
                  Dr. Hou accepts the Meritain Health insurance plan.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[3rem] font-bold text-sky-950">
            Procedures & Services
          </h2>

          <p className="mt-4 max-w-3xl text-[1.2rem] leading-8 text-slate-600">
            Our clinic specializes in a range of western and alternative care
            services to help patients and families achieve and maintain optimal
            health and performance.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {procedures.map((procedure) => (
              <div
                key={procedure}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-[1.15rem] font-semibold text-sky-900"
              >
                {procedure}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[3rem] font-bold text-sky-950">
            Insurance Information
          </h2>

          <p className="mt-4 max-w-4xl text-[1.2rem] leading-8 text-slate-600">
            Patients may have coverage through a range of employer-sponsored
            insurance plans. The list below highlights common companies and
            insurance providers in the region. Please contact Wellness Care or
            your insurance provider to confirm current eligibility and benefits.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-sky-900 px-6 py-4 text-[1.05rem] font-bold text-white">
              <div>Industry</div>
              <div>Company</div>
              <div>Insurance</div>
            </div>

            {insurancePartners.map((item) => (
              <div
                key={`${item.company}-${item.industry}`}
                className="grid grid-cols-3 border-t border-slate-100 px-6 py-4 text-[1rem] text-slate-700"
              >
                <div className="font-semibold text-slate-900">
                  {item.industry}
                </div>
                <div>{item.company}</div>
                <div>{item.insurance}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}