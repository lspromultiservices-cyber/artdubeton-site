"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";

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
    desc: "Permet une évacuation naturelle de l’eau pour les terrasses et contours de piscine avec 7 coloris au choix.",
    img: "/beton-drainant.jpg",
  },
  {
    title: "Béton poli",
    desc: "Finition ultra moderne et lisse avec 4 variantes disponibles.",
    img: "/beton-poli.jpg",
  },
];

const realisations = [
  "/beton-desactive-orchidees.jpg",
  "/beton-empreinte-lattes-de-bois-piscine.jpg",
  "/beton-empreinte-pave-queue-de-paon-rosas.jpg",
  "/beton-empreinte-1.jpg",
];

const avantages = [
  "Intervention sur toute l'île",
  "Finitions haut de gamme",
  "Matériaux résistants au climat tropical",
  "Prise de rendez-vous sous 24h",
  "Accompagnement personnalisé",
  "Solutions durables et premium",
];

const communes = [
  "Saint-Denis",
  "Sainte-Marie",
  "Sainte-Suzanne",
  "Saint-André",
  "Bras-Panon",
  "Saint-Benoît",
  "Sainte-Rose",
  "La Plaine-des-Palmistes",
  "Cilaos",
  "Entre-Deux",
  "Le Tampon",
  "Saint-Joseph",
  "Saint-Philippe",
  "Saint-Louis",
  "L'Étang-Salé",
  "Les Avirons",
  "Saint-Leu",
  "Les Trois-Bassins",
  "Saint-Paul",
  "Le Port",
  "La Possession",
  "Salazie",
];

const scrollVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeOut" },
  }),
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    commune: "",
    projet: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const SERVICE_ID = "service_jmf4jjf";
    const TEMPLATE_ID = "template_8ozj2yj";
    const PUBLIC_KEY = "JpAZE4A-3b1_v0vpA";

    const emailData = {
      nom: formData.nom,
      telephone: formData.telephone,
      email: formData.email,
      commune: formData.commune,
      projet: formData.projet,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY).then(
      () => {
        setStatus("Merci ! Votre demande a bien été envoyée.");
        setFormData({
          nom: "",
          telephone: "",
          email: "",
          commune: "",
          projet: "",
        });
      },
      (error) => {
        console.error("Erreur EmailJS:", error);
        setStatus("Une erreur est survenue. Veuillez réessayer.");
      },
    );
  };

  return (
    <main className="bg-black text-white overflow-hidden scroll-smooth">
      {/* ================= HEADER ================= */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-art-du-beton.jpg"
              alt="Logo Art du Béton La Réunion"
              width={150}
              height={56}
              className="h-14 w-auto rounded-xl object-contain"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em]">
            <a href="#realisations" className="hover:text-[#C8A96B] transition">
              Réalisations
            </a>
            <a href="#services" className="hover:text-[#C8A96B] transition">
              Services
            </a>
            <a href="#devis" className="hover:text-[#C8A96B] transition">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#devis"
              className="bg-[#C8A96B] hover:bg-[#d8ba7d] transition px-6 py-3 rounded-full text-black font-semibold"
            >
              Devis gratuit
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#C8A96B] focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 space-y-4 text-center"
            >
              <a
                href="#realisations"
                onClick={() => setIsOpen(false)}
                className="block text-lg uppercase tracking-wider py-2"
              >
                Réalisations
              </a>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block text-lg uppercase tracking-wider py-2"
              >
                Services
              </a>
              <a
                href="#devis"
                onClick={() => setIsOpen(false)}
                className="block text-lg uppercase tracking-wider py-2"
              >
                Contact
              </a>
              <a
                href="#devis"
                onClick={() => setIsOpen(false)}
                className="block bg-[#C8A96B] text-black font-semibold py-3 rounded-full mt-4"
              >
                Devis gratuit
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-beton.png')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-40 pb-20">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[#F3D28B] uppercase tracking-[0.4em] text-sm md:text-base mb-6 font-semibold"
            >
              Béton décoratif haut de gamme • Aménagement extérieur à La Réunion
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-7xl font-semibold leading-tight mb-8"
            >
              Béton décoratif <br /> haut de gamme <br /> à La Réunion
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10"
            >
              <span className="text-[#C8A96B] uppercase tracking-[0.3em] text-lg md:text-xl">
                by
              </span>
              <Image
                src="/logo-mbz.jpg"
                alt="Logo MBZ"
                width={160}
                height={80}
                className="h-20 md:h-24 w-auto object-contain rounded-xl shadow-2xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-12"
            >
              Solutions durables d’aménagement extérieur pour terrasses, villas,
              piscines et espaces contemporains avec finitions premium
              antidérapantes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col gap-6"
            >
              <div className="flex flex-col sm:flex-row gap-5">
                <a
                  href="#devis"
                  className="bg-[#C8A96B] hover:bg-[#d8ba7d] transition px-8 py-5 rounded-full text-black font-semibold text-center flex items-center justify-center gap-3"
                >
                  Demander un devis <ArrowRight size={20} />
                </a>
                <a
                  href="https://calendly.com/contact-artdubeton/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:border-[#C8A96B] hover:text-[#C8A96B] transition px-8 py-5 rounded-full text-center"
                >
                  Réserver un appel
                </a>
              </div>

              <div className="flex flex-col gap-4 text-base md:text-lg text-gray-300">
                <a
                  href="tel:+262692734606"
                  className="hover:text-[#C8A96B] transition flex items-center gap-3"
                >
                  <Phone size={18} /> 0692 73 46 06
                </a>
                <a
                  href="tel:+262692698521"
                  className="hover:text-[#C8A96B] transition flex items-center gap-3"
                >
                  <Phone size={18} /> 0692 69 85 21
                </a>
                <a
                  href="mailto:contact@artdubeton.re"
                  className="hover:text-[#C8A96B] transition flex items-center gap-3"
                >
                  <Mail size={18} /> contact@artdubeton.re
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= AVANTAGES ================= */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollVariants}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-4">
              Pourquoi nous choisir
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Un savoir-faire premium
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
              Des solutions durables d’aménagement extérieur à La Réunion,
              pensées pour valoriser vos espaces et résister au climat tropical.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {avantages.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                className="bg-black border border-white/10 rounded-3xl p-8 hover:border-[#C8A96B] transition"
              >
                <CheckCircle className="text-[#C8A96B] mb-5" size={34} />
                <p className="text-lg font-medium leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REALISATIONS ================= */}
      <section id="realisations" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={scrollVariants}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-4">
            Réalisations
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Des chantiers pensés pour durer
          </h2>
          <p className="text-gray-400 max-w-3xl text-base md:text-lg mx-auto">
            Chaque projet est conçu avec une attention particulière aux détails,
            à la durabilité et au rendu esthétique unique.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {realisations.map((img, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={scaleVariants}
              className="overflow-hidden rounded-3xl border border-white/10 group relative h-[350px] md:h-[500px]"
            >
              <Image
                src={img}
                alt={`Réalisation béton décoratif haut de gamme - ${i + 1}`}
                fill
                sizes="(max-w-768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollVariants}
            className="mb-20 text-center"
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-4">
              Nos services
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Nos types de béton décoratif
            </h2>
            <p className="text-gray-400 max-w-3xl text-base md:text-lg mx-auto">
              Des revêtements modernes adaptés aux exigences architecturales et
              climatiques de La Réunion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={cardVariants}
                className="group overflow-hidden rounded-3xl border border-white/10 hover:border-[#C8A96B] transition bg-black flex flex-col"
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Béton décoratif premium : ${item.title}`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-[#C8A96B]">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollVariants}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-4">
              Notre méthode
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Un accompagnement complet
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Étude du projet",
              "Choix des finitions",
              "Préparation du terrain",
              "Coulage du béton",
              "Finitions premium",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                variants={scaleVariants}
                className="border border-white/10 rounded-3xl p-6 text-center bg-[#0d0d0d]"
              >
                <div className="text-[#C8A96B] text-4xl font-bold mb-4">
                  0{i + 1}
                </div>
                <p className="text-base font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DEVIS / FORMULAIRE ================= */}
      <section
        id="devis"
        className="py-24 px-6 bg-gradient-to-b from-[#0d0d0d] to-black"
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scaleVariants}
            className="flex justify-center mb-10"
          >
            <Image
              src="/logo-art-du-beton.jpg"
              alt="Art du Béton Réunion"
              width={350}
              height={130}
              className="object-contain rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.05)]"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={scrollVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-gray-400 text-base">
              Recevez une étude personnalisée et un devis gratuit pour votre
              aménagement extérieur.
            </p>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={scrollVariants}
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl space-y-5"
          >
            <input
              type="text"
              name="nom"
              required
              placeholder="Votre nom complet"
              value={formData.nom}
              onChange={(e) =>
                setFormData({ ...formData, nom: e.target.value })
              }
              className="w-full bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C8A96B] text-white transition"
            />

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="tel"
                name="telephone"
                required
                placeholder="Votre numéro de téléphone"
                value={formData.telephone}
                onChange={(e) =>
                  setFormData({ ...formData, telephone: e.target.value })
                }
                className="w-full bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C8A96B] text-white transition"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Votre adresse email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C8A96B] text-white transition"
              />
            </div>

            <select
              name="commune"
              required
              value={formData.commune}
              onChange={(e) =>
                setFormData({ ...formData, commune: e.target.value })
              }
              className="w-full bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C8A96B] text-gray-300 transition appearance-none"
            >
              <option value="" disabled className="text-gray-500">
                Sélectionnez votre commune
              </option>
              {communes.map((commune, index) => (
                <option
                  key={index}
                  value={commune}
                  className="bg-black text-white"
                >
                  {commune}
                </option>
              ))}
            </select>

            <textarea
              name="projet"
              rows={5}
              required
              placeholder="Décrivez brièvement les détails de votre projet (surface en m², type de béton souhaité, terrasse, allée, contour piscine...)"
              value={formData.projet}
              onChange={(e) =>
                setFormData({ ...formData, projet: e.target.value })
              }
              className="w-full bg-black/60 border border-white/10 p-4 rounded-xl outline-none focus:border-[#C8A96B] text-white transition"
            />

            <button
              type="submit"
              className="w-full bg-[#C8A96B] hover:bg-[#d8ba7d] transition text-black font-semibold py-4 rounded-xl shadow-lg shadow-[#C8A96B]/10 flex items-center justify-center gap-2"
            >
              Envoyer ma demande de devis
            </button>

            {status && (
              <p
                className={`text-center font-medium mt-4 text-sm ${status.includes("Merci") ? "text-green-400" : "text-amber-400"}`}
              >
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C8A96B]">
              Art du Béton
            </h3>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Spécialiste du béton décoratif haut de gamme à La Réunion.
              Aménagements extérieurs durables pour villas, piscines et espaces
              contemporains.
            </p>
          </div>

          <div className="space-y-3 text-sm text-gray-300">
            <a
              href="tel:+262692734606"
              className="flex items-center gap-3 hover:text-[#C8A96B] transition"
            >
              <Phone size={16} /> 0692 73 46 06
            </a>
            <a
              href="tel:+262692698521"
              className="flex items-center gap-3 hover:text-[#C8A96B] transition"
            >
              <Phone size={16} /> 0692 69 85 21
            </a>
            <a
              href="mailto:contact@artdubeton.re"
              className="flex items-center gap-3 hover:text-[#C8A96B] transition"
            >
              <Mail size={16} /> contact@artdubeton.re
            </a>
            <div className="flex items-center gap-3 text-gray-400">
              <MapPin size={16} /> Intervention sur toute l'île (La Réunion)
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-12 text-xs border-t border-white/5 pt-6">
          © 2026 Art du Béton — Tous droits réservés.
        </div>
      </footer>

      {/* ================= WHATSAPP FLOATING BUTTON ================= */}
      <a
        href="https://wa.me/262692734606"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
        style={{ animationDuration: "3s" }}
        aria-label="Contactez-nous sur WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-9 h-9 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.515 2.266 2.27 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.452 5.416 0 9.825-4.379 9.829-9.761.002-2.606-1.002-5.057-2.83-6.892-1.828-1.835-4.261-2.846-6.874-2.847-5.421 0-9.831 4.381-9.836 9.763-.002 1.994.521 3.945 1.517 5.666l-.991 3.619 3.765-.978zM17.65 14.3c-.31-.154-1.833-.895-2.115-.997-.28-.103-.485-.154-.69.154-.203.308-.787.974-.964 1.18-.178.205-.355.23-.665.077-.308-.154-1.3-.478-2.477-1.52-1.14-.1-1.912-.224-2.134-.38-.223-.153-.024-.236.13-.389.14-.138.31-.359.466-.538.154-.179.205-.308.31-.513.103-.205.05-.384-.026-.538-.077-.154-.692-1.642-.949-2.245-.25-.6-.523-.52-.718-.53l-.615-.01c-.205 0-.538.077-.82.384-.282.308-1.077 1.051-1.077 2.564 0 1.513 1.102 2.974 1.256 3.179.154.205 2.167 3.275 5.25 4.588.733.312 1.305.499 1.751.64.737.233 1.408.2 1.938.12.59-.088 1.833-.743 2.09-1.46.256-.718.256-1.333.179-1.46-.077-.128-.282-.205-.59-.359z" />
        </svg>
      </a>
    </main>
  );
}
