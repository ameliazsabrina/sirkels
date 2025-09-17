"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Apa bedanya Sirkels sama komunitas belajar gratis?",
    answer:
      "Komunitas gratis biasanya cuma latihan santai tanpa arah jelas. Di Sirkels, kamu dapet program 6 minggu yang terstruktur, circle kecil (4–6 orang), dan feedback personal dari fasilitator. Jadi progress-mu kerasa nyata, bukan asal kumpul.",
  },
  {
    question: "Apa harus udah jago bahasa Inggris?",
    answer:
      "Enggak, Sirkels diperuntukkan untuk yang udah tahu basic English (A2-B1 level). Kami bantu kamu untuk ngembangin confidence dan skill berbicara, bukan cuma ngafalin grammar.",
  },
  {
    question: "Untuk levelnya bagaimana?",
    answer:
      "Saat ini, Sirkels buka untuk kelas beginner-menengah (A2-B1). Jadi kalau kamu udah bisa basic conversation, Sirkels adalah tempat yang tepat untuk tingkatkan kepercayaan diri kamu ngomong bahasa Inggris.",
  },
  {
    question:
      "Aku masih pemalu dan nggak pede ngomong bahasa Inggris, bisa ikut?",
    answer:
      "Justru itu alasan Sirkels ada ✨. Banyak buddies yang awalnya juga pemalu, tapi di circle kecil yang safe & supportif, mereka jadi lebih berani step by step. Nggak ada yang nge-judge, semua datang dengan struggle yang sama.",
  },
  {
    question: "Kalau aku sibuk kuliah/kerja, masih bisa ikut?",
    answer:
      "Bisa banget! Programnya cuma 2–3 kali per minggu, tiap sesi sekitar 90 menit. Nggak makan waktu banyak, tapi progress terasa karena konsisten.",
  },
  {
    question: "Apa materinya cuma ngobrol aja?",
    answer:
      "Nggak. Tiap sesi ada vocab drills, guided practice, dan activities variatif (diskusi, roleplay, games). Plus ada workshop kolaborasi & refleksi bareng supaya kamu nggak cuma latihan ngomong, tapi juga ngerti progress-mu.",
  },
  {
    question: "Aku takut nggak nyambung sama temen-temen circle.",
    answer:
      "Tenang, circle dibuat kecil & intim (4–6 orang), dipisah cewek/cowok biar lebih nyaman. Justru banyak yang akhirnya jadi temen deket karena vibe-nya supportif dan fun.",
  },
  {
    question: "Setelah program selesai, apa ada kelanjutannya?",
    answer:
      "Ada! Kamu bakal gabung ke alumni group, dapet akses info program lanjutan, dan bisa ikutan referral bonus kalau ajak temen. Jadi Sirkels bukan cuma program, tapi komunitas yang terus hidup.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-accent" id="faqs">
      <div className="bg-primary rounded-b-4xl">
        <div className="py-20 px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={1}
              blurStrength={3}
              containerClassName="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-4"
            >
              FAQs
            </ScrollReveal>
          </div>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-600">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 text-left flex items-center justify-between group hover:bg-gray-800 transition-colors duration-200"
                >
                  <span
                    className={`text-lg font-medium pr-8 ${
                      openIndex === index ? "text-secondary" : "text-background"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 text-background">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="pb-6 px-0">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
