import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Karna muridnya lebih sedikit jadi lebih semi privat alhasil interaktif - ada moment sharing cerita satu sama lain alhasil bondingnya okee banget! Jujur suka banget ada moment new vocab yang jarang ditemui, pembawaan makna, contoh dan adanya keselarasan dengan topicnya juga. Bagian conversation juga mewajibkan untuk pede aja dulu buat ngomong,",
      name: "Asmuna (24yo)",
      designation: "Pekerja",
      src: "/asmuna.png",
    },
    {
      quote:
        "Belajar di Sirkels seru banget, plizz??!! Miss ngajarnya asik dan gokil abiez jadi ga berasa formal bruuhh. Masih newbie juga gaada tuh dijudge malah dibikin makin pede😎 n ofc dapet teman baru yang asik dan supportif ",
      name: "Rara (22yo)",
      designation: "Mahasiswa",
      src: "/rara.png",
    },
    {
      quote:
        "SERUU BANGETTT sumpah kalo misalnya nadine ada uang, pasti bakal ikut lagi sih 😛, belajarnya seru banget bikin nyaman dan pede, dan ga kaku kaya di kelas formal",
      name: "Nadin (13yo)",
      designation: "Pelajar",
      src: "/nadin.png",
    },
  
 
  ];
  return (
    <section className="bg-background py-16 " id="testimoni">
      <div className="text-center">
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={1}
          blurStrength={3}
          containerClassName="text-4xl md:text-5xl font-bold text-primary max-w-3xl mx-auto"
        >
          Ini Kata Mereka yang Udah Pernah Jadi #Buddy Sirkels
        </ScrollReveal>
      </div>
      <div className="max-w-5xl mx-auto">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
