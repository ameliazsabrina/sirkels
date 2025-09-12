import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import ScrollReveal from "@/components/ui/ScrollReveal";

export function Testimonial() {
  const testimonials = [
    {
      quote:
        "SERUU BANGETTT sumpah kalo misalnya nadine ada uang, pasti bakal ikut lagi sih 😛, belajarnya seru banget bikin nyaman dan pede, dan ga kaku kaya di kelas formal",
      name: "Nadin (13yo)",
      designation: "Pelajar",
      src: "/nadin.png",
    },
    {
      quote:
        "Belajar di Sirkels seru banget, plizz??!! Miss ngajarnya asik dan gokil abiez jadi ga berasa formal bruuhh. Masih newbie juga gaada tuh dijudge malah dibikin makin pede😎 n ofc dapet teman baru yang asik dan supportif ",
      name: "Rara (22yo)",
      designation: "Mahasiswa",
      src: "/rara.png",
    },
  ];
  return (
    <section className="bg-background py-16 ">
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
