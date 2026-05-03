import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const rentonReviews = [
  {
    name: "Audrey González",
    location: "Google Review",
    yearsAgo: "2020",
    text: "Coming here is part of my essential routine. Always feel so much better coming out of my sessions and you can feel the difference for days. 100% recommend Winnie for acupuncture treatments. She is professional, gentle, and knowledgeable.",
  },
  {
    name: "Lindsay Steinbach",
    location: "Google Review",
    yearsAgo: "2018",
    text: "I've been seeing Winnie for acupuncture treatments for over 3 years, she's helped me with chronic pain from a car accident and helped get my labor going when I had my son late last year. She truly listens to your complaints and treats the whole person.",
  },
  {
    name: "Diane Crooks",
    location: "Google Review",
    yearsAgo: "2018",
    text: "I have been dealing with a frozen shoulder and pain for two years now. After the first treatment by Winnie, my pain was diminished enough for me to sleep a full night, which I haven't done for about a year-and-a-half.",
  },
  {
    name: "Jeffrey Lebowski",
    location: "Google Review",
    yearsAgo: "2018",
    text: "Fantastic first impression! I had a great first visit with Winnie recently. She listened to my concerns and comments before treatment, and adjusted accordingly. I am very happy to be a client of hers. Thank you Winnie!!!",
  },
  {
    name: "Terre Berkovich",
    location: "Google Review",
    yearsAgo: "2020",
    text: "Fabulous combo of physical therapy with chiropractic help. Acupuncturist trained in Taiwan and very professional. They carry Chinese teas and do good cleansing.",
  },
  {
    name: "Elena G",
    location: "Google Review",
    yearsAgo: "2019",
    text: "So very much needed and thank you Winnie for the attention you take with me. I always leave feeling much much better. I recommend being seen and treated by Winnie for acupuncture treatments.",
  },
  {
    name: "Bonnie Z",
    location: "Google Review",
    yearsAgo: "2022",
    text: "Very efficient treatment! Highly recommend.",
  },
  {
    name: "Brian Robins",
    location: "Google Review",
    yearsAgo: "2017",
    text: "Good, friendly service, effective treatment.",
  },
  {
  name: "Rowe M.",
  location: "Yelp Review",
  yearsAgo: "2021",
  text: "I've been going to Winnie for what, 6 years now? Maybe more than that? Acupuncture works! She saved my knee from having to go surgery! Highly recommended this place for your acupuncture and chiropractor needs.",
},
{
  name: "Rachel B.",
  location: "Yelp Review",
  yearsAgo: "2019",
  text: "Winnie is amazing! She listens to your concerns and treats the whole body not just the area of concern like many American acupuncturists. I have referred many family members and friends to her.",
},
{
  name: "Stephanie S.",
  location: "Yelp Review",
  yearsAgo: "2018",
  text: "Both the acupuncture and chiropractic care are very effective for me. I started seeing Dr Hou for crippling back pain and later tried acupuncture. I am so glad I found this practice and highly recommend giving it a try.",
},
{
  name: "Zhaopeng G.",
  location: "Yelp Review",
  yearsAgo: "2017",
  text: "I have been to 3 different chiropractic clinics. This is the best one so far. Dr. Hou really releases my pain when I see him, and I already stayed with them for 6 years.",
},
];

export default function Home(): React.JSX.Element {
  const [reviewStart, setReviewStart] = useState(0);

  const visibleReviews = rentonReviews.slice(reviewStart, reviewStart + 3);

  const canGoBack = reviewStart > 0;
  const canGoForward = reviewStart + 3 < rentonReviews.length;

  function handlePreviousReviews(): void {
    if (canGoBack) {
      setReviewStart(reviewStart - 3);
    }
  }

  function handleNextReviews(): void {
    if (canGoForward) {
      setReviewStart(reviewStart + 3);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="px-8 py-24">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="max-w-4xl pl-0 lg:pl-8">
            <p className="text-[1.35rem] font-semibold text-sky-700">
              Chiropractic & Acupuncture Clinic
            </p>

            <h1 className="mt-4 max-w-4xl text-[4.5rem] font-bold leading-[1.05] tracking-tight text-sky-950">
              Personalized care for pain relief, recovery, and whole-body wellness.
            </h1>

            <p className="mt-6 max-w-3xl text-[1.35rem] leading-9 text-slate-600">
              At Wellness Care, eastern and western medicine are blended to give you a
              team-based approach to healthcare. We provide acupuncture, chiropractic
              care, herbal medicine, and wellness-focused treatments designed around
              your needs.
            </p>

            <div className="mt-10 flex gap-4">
              <NavLink
                to="/appointments"
                className="rounded-full bg-sky-700 px-9 py-4 text-[1.25rem] font-semibold text-white transition hover:bg-sky-800"
              >
                Book Appointment
              </NavLink>

              <NavLink
                to="/services"
                className="rounded-full border border-slate-300 bg-white px-9 py-4 text-[1.25rem] font-semibold text-slate-700 transition hover:border-sky-700 hover:text-sky-800"
              >
                View Services
              </NavLink>
            </div>
          </div>

          <div className="pr-0 lg:pr-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
              <img
                src="/rentonoffice.png"
                alt="Inside the Wellness Care Renton office"
                className="h-[320px] w-full object-cover md:h-[440px] lg:h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-[3rem] font-bold text-sky-950">Our Services</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Acupuncture", path: "/acupuncture" },
              { name: "Hair Loss Treatment", path: "/hairlosstreatment" },
              { name: "Chiropractor", path: "/chiropractor" },
              { name: "Herbal Medication", path: "/herbalmedication" },
            ].map((service) => (
              <NavLink
                key={service.name}
                to={service.path}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-[1.4rem] font-bold text-sky-900 underline underline-offset-4">
                  {service.name}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-7 text-slate-600">
                  Click to learn more about how this treatment option can be used
                  to support your long term wellness goals!
                </p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mt-2 text-[2.5rem] font-bold text-sky-950">
                What our patients are saying:
              </h2>
              <p className="mt-4 max-w-3xl text-[1.25rem] leading-8 text-slate-600">
                Featuring a few reviews from Wellness Care patients at our Renton Clinic location!
              </p>
            </div>

            <a
              href="https://www.google.com/search?q=wellness+care+renton+wa"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-700 px-7 py-4 text-[1.1rem] font-semibold text-white transition hover:bg-sky-800"
            >
              Read More Reviews...
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={handlePreviousReviews}
              disabled={!canGoBack}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-[1rem] font-semibold text-slate-700 transition hover:border-sky-700 hover:text-sky-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← Previous
            </button>

            <p className="text-[1rem] font-semibold text-slate-500">
              Showing {reviewStart + 1}–{Math.min(reviewStart + 3, rentonReviews.length)} of {rentonReviews.length}
            </p>

            <button
              type="button"
              onClick={handleNextReviews}
              disabled={!canGoForward}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-[1rem] font-semibold text-slate-700 transition hover:border-sky-700 hover:text-sky-800 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next →
            </button>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review) => (
              <article
                key={review.name}
                className="flex h-full min-h-[390px] flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-[1.4rem] text-amber-400">★★★★★</div>

                <p className="mt-4 text-[1.1rem] leading-8 text-slate-700">
                  “{review.text}”
                </p>

                <div className="mt-auto border-t border-slate-100 pt-5">
                  <p className="text-[1.1rem] font-bold text-slate-900">
                    {review.name}
                  </p>
                  <p className="mt-1 text-[0.95rem] text-slate-500">
                    {review.location} · {review.yearsAgo}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-sky-900 p-8 text-white">
            <h3 className="text-[2rem] font-bold">Had a good experience?</h3>
            <p className="mt-3 max-w-3xl text-[1.15rem] leading-8 text-sky-50">
              Share your experience with Wellness Care by leaving a Google review!
            </p>

            <a
              href="https://www.google.com/search?q=wellness+care+renton+wa"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-white px-7 py-4 text-[1.1rem] font-semibold text-sky-900 transition hover:bg-sky-50"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}