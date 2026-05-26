"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Béton désactivé",
    desc: "Surface élégante et antidérapante idéale pour les allées, cours et espaces extérieurs. 21 variantes disponibles selon les granulats et finitions.",
    img: "/beton-desactive-orchidees.jpg",
  },

  {
    title: "Béton empreinte",
    desc: "Moules disponibles : Pavé Queue de Paon, Pavé Londonien, Pavé Fontainebleau, Peau Old Granit, Dalle de Bourgogne et Lattes de bois.",
    img: "/beton-empreinte.jpg",
  },

  {
    title: "Béton coloré",
    desc: "12 coloris premium disponibles pour personnaliser vos espaces extérieurs.",
    img: "/beton-colore.jpg",
  },

  {
    title: "Béton bouchardé",
    desc: "Finition texturée haut de gamme avec 7 variantes disponibles.",
    img: "/beton-boucharde.jpg",
  },

  {
    title: "Béton drainant",
    desc: "Permet une évacuation naturelle de l’eau pour les terrasses et contours de piscine.",
    img: "/beton-drainant.jpg",
  },

  {
    title: "Béton poli",
    desc: "Finition ultra moderne et lisse avec 4 variantes disponibles.",
    img: "/hero-beton.png",
  },
];

const realisations = [
  "/beton-desactive-orchidees.jpg",
  "/beton-empreinte-lattes-de-bois-piscine.jpg",
  "/beton-empreinte-pave-queue-de-paon-rosas.jpg",
  "/beton-empreinte-1.jpg",
];

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* IMAGE FOND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/hero-beton.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CONTENU */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#F3D28B] uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-semibold drop-shadow-[0_0_15px_rgba(243,210,139,0.7)]"
            >
              Béton décoratif haut de gamme • Intervention sur toute l'île
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-8xl font-semibold leading-tight mb-6"
            >
              L’Art du Béton
              <br />à La Réunion
            </motion.h1>

            {/* BY MBZ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10"
            >
              <span className="text-[#C8A96B] uppercase tracking-[0.3em] text-lg md:text-2xl">
                by
              </span>

              <img
                src="/logo-mbz.jpg"
                alt="Logo MBZ"
                className="h-28 md:h-40 w-auto object-contain rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-12"
            >
              Béton désactivé, empreinte, coloré, bouchardé, drainant et poli
              avec finitions premium pour villas, piscines, terrasses et espaces
              contemporains.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-5 mb-12"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#devis"
                  className="bg-[#C8A96B] hover:bg-[#d8ba7d] transition px-8 py-5 rounded-full text-black font-semibold text-center"
                >
                  Demander un devis
                </a>

                <a
                  href="https://calendly.com/contact-artdubeton/30min"
                  target="_blank"
                  className="border border-white/20 hover:border-[#C8A96B] hover:text-[#C8A96B] transition px-8 py-5 rounded-full text-center"
                >
                  Réserver un appel
                </a>
              </div>

              {/* CONTACT */}
              <div className="flex flex-col gap-4 text-lg">
                <a
                  href="tel:+262692734606"
                  className="hover:text-[#C8A96B] transition"
                >
                  📞 0692 73 46 06
                </a>

                <a
                  href="tel:+262692698521"
                  className="hover:text-[#C8A96B] transition"
                >
                  📞 0692 69 85 21
                </a>

                <a
                  href="mailto:contact@artdubeton.re"
                  className="hover:text-[#C8A96B] transition"
                >
                  ✉️ contact@artdubeton.re
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= REALISATIONS ================= */}

      <section className="py-28 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-4">
            Réalisations
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Des réalisations pensées pour durer
          </h2>

          <p className="text-gray-400 max-w-3xl text-lg mx-auto">
            Chaque projet est conçu avec une attention particulière aux détails,
            à la durabilité et au rendu esthétique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {realisations.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: false }}
              className="overflow-hidden rounded-3xl border border-white/10 group"
            >
              <img
                src={img}
                alt=""
                className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}

      <section className="py-28 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="mb-20 text-center"
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-4">
              Nos services
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold mb-6">
              Nos types de béton décoratif
            </h2>

            <p className="text-gray-400 max-w-3xl text-lg mx-auto">
              Des solutions modernes et durables adaptées aux villas, piscines,
              terrasses et espaces architecturaux.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                viewport={{ once: false }}
                className="group overflow-hidden rounded-3xl border border-white/10 hover:border-[#C8A96B] transition bg-black"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-[#C8A96B]">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FORMULAIRE ================= */}

      <section
        id="devis"
        className="py-28 px-6 bg-gradient-to-b from-[#0d0d0d] to-black"
      >
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="max-w-3xl mx-auto"
        >
          {/* LOGO ART DU BETON */}
          <div className="flex justify-center mb-10">
            <img
              src="/logo-art-du-beton.jpg"
              alt="Logo Art du Béton"
              className="w-52 md:w-64 object-contain rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            />
          </div>

          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-semibold mb-6">
              Parlons de votre projet
            </h2>

            <p className="text-gray-400 text-lg">
              Recevez une étude personnalisée pour votre projet.
            </p>
          </div>

          <form className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl space-y-6">
            <input
              type="text"
              placeholder="Votre nom"
              className="w-full bg-black/60 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#C8A96B]"
            />

            <input
              type="text"
              placeholder="Votre téléphone"
              className="w-full bg-black/60 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#C8A96B]"
            />

            <input
              type="email"
              placeholder="Votre email"
              className="w-full bg-black/60 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#C8A96B]"
            />

            <textarea
              rows={6}
              placeholder="Décrivez votre projet..."
              className="w-full bg-black/60 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#C8A96B]"
            />

            <button
              type="submit"
              className="w-full bg-[#C8A96B] hover:bg-[#d8ba7d] transition text-black font-semibold py-5 rounded-2xl"
            >
              Envoyer ma demande
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
