export const Activity = () => {
  return (
    <section className="bg-background">
      <div className="py-20 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 text-balance">
            Kita ngapain aja nanti?
          </h2>
          <p className="text-gray-600 font-medium text-lg">
            Kelas yang ga formal! kita topiknya fokus untuk bangun skill
            komunikasi kamu!
          </p>
        </div>
        <div className="bg-accent rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                6 Weeks
              </h3>
              <p className="font-medium text-background">Program</p>
            </div>

            <div className="text-center md:text-left md:border-l md:border-gray-400 md:pl-8">
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                13x
              </h3>
              <p className="font-medium text-background">Meetings</p>
            </div>

            <div className="md:border-l md:border-gray-400 md:pl-8">
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xl text-secondary font-bold ">8x</span>
                  <span className="font-medium text-background">
                    Sesi Belajar & Praktek
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xl text-secondary font-bold ">2x</span>
                  <span className="font-medium text-background">
                    Sesi Workshop skill
                  </span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xl text-secondary font-bold ">3x</span>
                  <span className="font-medium text-background">
                    Sesi Refleksi & Sharing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-secondary rounded-3xl p-8 space-y-6 min-h-[4rem]">
            <h3 className="text-xl md:text-2xl font-bold text-text leading-tight">
              8 Sesi Belajar & Praktik
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Vocab drills buat tambah kosakata
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Guided practice biar pede step by step
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Activities variatif: roleplay, diskusi, games
                </span>
              </li>
              <li className="mt-6 pt-4 border-t border-text">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-text leading-relaxed text-lg">
                    Setiap sesi interaktif & bikin pede naik
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-3xl p-8 space-y-6 min-h-[4rem]">
            <h3 className="text-xl md:text-2xl font-bold text-text leading-tight">
              2 Sesi Collaboration Workshop
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Bikin project mini bareng tim (trip plan, event, campaign,
                  café)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Semua dikerjain di kelas (no homework)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Presentasi bareng di Presentation Day
                </span>
              </li>
              <li className="mt-6 pt-4 border-t border-text">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-text leading-relaxed text-lgs">
                    Latihan teamwork, kreativitas & public speaking
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-3xl p-8 space-y-6 min-h-[4rem]">
            <h3 className="text-xl md:text-2xl font-bold text-text leading-tight">
              3 Sesi Refleksi & Sharing
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Sharing pengalaman & tantangan
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Feedback langsung dari facilitator
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-500 mt-1 text-lg">•</span>
                <span className="text-gray-700 leading-relaxed">
                  Ngerayain growth bareng circle
                </span>
              </li>
              <li className="mt-6 pt-4 border-t border-text">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-text leading-relaxed text-lg">
                    Biar kamu sadar progress, bukan jalan sendiri
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
