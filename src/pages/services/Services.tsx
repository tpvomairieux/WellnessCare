import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const serviceLinks = [
  { name: "Acupuncture", path: "/acupuncture" },
  { name: "Hair Loss Treatment", path: "/hairlosstreatment" },
  { name: "Chiropractor", path: "/chiropractor" },
  { name: "Herbal Medication", path: "/herbalmedication" },
];

const chiropracticFaqs = [
  {
    question: "What is Chiropractic Care?",
    answer:
      "Chiropractic care is a natural method of healthcare focused on treating the causes of physical problems rather than only the symptoms. It centers on the spine, nervous system, and the body's ability to heal when communication through the nervous system is functioning well.",
  },
  {
    question: "How does regular Chiropractic care help prevent illness?",
    answer:
      "Regular chiropractic visits can help detect spinal stress or joint issues early. Like routine dental cleanings or car maintenance, check-ups may help identify concerns before they become larger problems.",
  },
  {
    question: "Does insurance cover Chiropractic Care?",
    answer:
      "Many healthcare plans provide chiropractic coverage, though limits may apply. The best step is to contact Wellness Care so benefits can be verified before scheduling.",
  },
  {
    question: "How does an adjustment feel?",
    answer:
      "Most patients report a sense of well-being or calmness. Adjustments are designed to be comfortable and effective.",
  },
];

const acupunctureFaqs = [
  {
    question: "What is Acupuncture?",
    answer:
      "Acupuncture is the insertion of hair-thin needles at specific points on the skin to promote the flow of Qi, support balance, and encourage the body's natural healing response.",
  },
  {
    question: "How does Acupuncture work?",
    answer:
      "In Traditional Chinese Medicine, Qi flows through channels called meridians. When this flow becomes blocked or unbalanced, illness or discomfort may arise. Acupuncture is used to support healthy energy flow and bring the body back toward harmony.",
  },
  {
    question: "What can be treated with Acupuncture?",
    answer:
      "Acupuncture is commonly used for pain management, stress reduction, digestive concerns, inflammation, allergies, emotional imbalance, neurological symptoms, fatigue, and other wellness concerns.",
  },
  {
    question: "Is Acupuncture safe?",
    answer:
      "At Wellness Care, acupuncture uses sterile, disposable needles. Acupuncture needles are solid and hair-thin, and most patients find treatment relaxing.",
  },
  {
    question: "Does Acupuncture hurt?",
    answer:
      "Most insertions are usually painless. Many patients find acupuncture extremely relaxing, and some even fall asleep during treatment.",
  },
];

const hairLossFaqs = [
  {
    question: "What types of hair loss may treatment support?",
    answer:
      "Hair loss treatment may support forms of alopecia where the hair follicle still exists and is capable of producing hair. If follicles are fully dormant or absent, a transplant may be the only way to create new follicles.",
  },
  {
    question: "How can microneedling support hair growth?",
    answer:
      "Microneedling creates controlled micro-channels in the scalp and may stimulate blood vessel formation around the hair bulb. This can help nourish follicles and support healthier-looking hair growth.",
  },
  {
    question: "How many sessions are usually expected?",
    answer:
      "Protocols often involve a series of treatments rather than one visit. Dermapen guidance commonly describes 4–6 microneedling sessions spaced about 4 weeks apart, depending on the patient and treatment plan.",
  },
  {
    question: "Can hair loss treatment be combined with other therapies?",
    answer:
      "Yes. Hair loss microneedling may be combined with topical scalp products, PRP, LED therapy, or other professional treatment plans when appropriate.",
  },
];

const herbalFaqs = [
  {
    question: "What is Chinese Herbal Medicine?",
    answer:
      "Chinese Herbal Medicine is part of Traditional Chinese Medicine, a system developed through observation of nature, the body, and patterns of health. Herbs are selected for their specific functions, such as warming, cooling, strengthening, or calming particular organs or meridians.",
  },
  {
    question: "How does Herbal Medicine fit with Acupuncture?",
    answer:
      "Herbal medicine can support healing on a daily basis between visits. Combined with acupuncture, it may make treatment more comprehensive and effective for certain patients.",
  },
  {
    question: "Are formulas customized?",
    answer:
      "Wellness Care provides customized herbal formulas designed around individual patient needs rather than a one-size-fits-all approach.",
  },
  {
    question: "How does Wellness Care approach herbal quality and safety?",
    answer:
      "Wellness Care emphasizes high-quality herbs produced to exacting standards, with attention to effectiveness, safety, and avoiding toxicity, pollutants, chemical contaminants, heavy metals, and drugs.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl bg-white/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left text-[1.15rem] font-bold text-white"
      >
        <span>✓ {question}</span>
        <span className="text-[1.5rem]">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <p className="px-5 pb-5 text-[1.05rem] leading-7 text-sky-50">
          {answer}
        </p>
      )}
    </div>
  );
}

function FAQSection({
  title,
  faqs,
  colorClass,
}: {
  title: string;
  faqs: { question: string; answer: string }[];
  colorClass: string;
}): React.JSX.Element {
  return (
    <div className={`rounded-[2rem] p-8 text-white ${colorClass}`}>
      <h2 className="text-[2.2rem] font-bold underline underline-offset-8">
        {title}
      </h2>

      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default function Services(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[1.25rem] font-semibold text-sky-700">
            Services & FAQ
          </p>

          <h1 className="mt-4 max-w-5xl text-[4rem] font-bold leading-tight text-sky-950">
            Explore our treatments and common patient questions.
          </h1>

          <p className="mt-5 max-w-4xl text-[1.25rem] leading-8 text-slate-600">
            Wellness Care offers chiropractic care, acupuncture, herbal medicine,
            and wellness-focused treatments designed to support pain relief,
            recovery, and long-term health.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {serviceLinks.map((service) => (
              <NavLink
                key={service.name}
                to={service.path}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="text-[1.4rem] font-bold text-sky-900 underline underline-offset-4">
                  {service.name}
                </h2>
                <p className="mt-3 text-[1.05rem] leading-7 text-slate-600">
                  Visit this treatment page to learn more.
                </p>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <FAQSection
            title="Chiropractic Frequently Asked Questions"
            faqs={chiropracticFaqs}
            colorClass="bg-sky-900"
          />

          <FAQSection
            title="Acupuncture Frequently Asked Questions"
            faqs={acupunctureFaqs}
            colorClass="bg-slate-800"
          />

          <FAQSection
            title="Hair Loss Treatment Frequently Asked Questions"
            faqs={hairLossFaqs}
            colorClass="bg-cyan-900"
          />

          <FAQSection
            title="Herbal Medicine Frequently Asked Questions"
            faqs={herbalFaqs}
            colorClass="bg-emerald-900"
          />
        </div>
      </section>
    </div>
  );
}