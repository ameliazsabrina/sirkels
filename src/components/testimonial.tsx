import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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
        <h2 className="text-4xl md:text-5xl font-bold text-primary max-w-3xl mx-auto">
          Ini kata mereka yang udah pernah jadi #buddy sirkels
        </h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </section>
  );
}
