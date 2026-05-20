export default function Home() {
  return (
    <main className="bg-[#0B0B0B] text-white">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold tracking-widest text-lg">ARTDUBETON</h1>

          <nav className="flex gap-6 text-sm text-zinc-300">
            <a className="hover:text-[#D4AF37] transition" href="#services">
              Services
            </a>
            <a className="hover:text-[#D4AF37] transition" href="#realisations">
              Réalisations
            </a>
            <a className="hover:text-[#D4AF37] transition" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs">
            Sites web • Image • Conversion
          </p>

          <h2 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
            Mettez en valeur votre savoir-faire et attirez des clients qualifiés
          </h2>

          <p className="text-zinc-400 mt-6 text-lg max-w-2xl mx-auto">
            Je crée des sites premium qui transforment votre activité en une
            image professionnelle crédible et génératrice de rendez-vous.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">
            <a
              href="https://calendly.com/contact-artdubeton/30min"
              target="_blank"
              className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
            >
              Réserver un appel
            </a>

            <a
              href="#realisations"
              className="border border-[#D4AF37] text-[#D4AF37] px-8 py-4 rounded-xl hover:bg-[#D4AF37] hover:text-black transition"
            >
              Voir les réalisations
            </a>
          </div>
        </div>
      </section>

      {/* TRUST / PREUVES */}
      <section className="border-t border-[#1f1f1f] py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 text-center gap-6 px-6">
          <div>
            <p className="text-[#D4AF37] text-3xl font-bold">+20%</p>
            <p className="text-zinc-400 text-sm mt-2">d’image perçue premium</p>
          </div>

          <div>
            <p className="text-[#D4AF37] text-3xl font-bold">x2</p>
            <p className="text-zinc-400 text-sm mt-2">de demandes clients</p>
          </div>

          <div>
            <p className="text-[#D4AF37] text-3xl font-bold">24h</p>
            <p className="text-zinc-400 text-sm mt-2">réponse garantie</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-12">
          Ce que vous obtenez
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-[#1f1f1f] p-6 rounded-xl hover:border-[#D4AF37] transition">
            <h4 className="text-[#D4AF37] font-semibold mb-2">Image premium</h4>
            <p className="text-zinc-400 text-sm">
              Un site qui inspire immédiatement confiance et crédibilité.
            </p>
          </div>

          <div className="border border-[#1f1f1f] p-6 rounded-xl hover:border-[#D4AF37] transition">
            <h4 className="text-[#D4AF37] font-semibold mb-2">
              Mise en valeur
            </h4>
            <p className="text-zinc-400 text-sm">
              Vos réalisations présentées comme un portfolio haut de gamme.
            </p>
          </div>

          <div className="border border-[#1f1f1f] p-6 rounded-xl hover:border-[#D4AF37] transition">
            <h4 className="text-[#D4AF37] font-semibold mb-2">Conversion</h4>
            <p className="text-zinc-400 text-sm">
              Transformation de visiteurs en demandes de rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* REALISATIONS */}
      <section id="realisations" className="max-w-6xl mx-auto px-6 py-24">
        <h3 className="text-3xl font-bold text-center mb-12">Réalisations</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#111] border border-[#1f1f1f] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-[#D4AF37] text-sm">Chantier</p>
            <h4 className="font-semibold mt-2">Béton décoratif premium</h4>
          </div>

          <div className="bg-[#111] border border-[#1f1f1f] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-[#D4AF37] text-sm">Entreprise</p>
            <h4 className="font-semibold mt-2">Site vitrine professionnel</h4>
          </div>

          <div className="bg-[#111] border border-[#1f1f1f] p-6 rounded-xl hover:scale-105 transition">
            <p className="text-[#D4AF37] text-sm">Projet</p>
            <h4 className="font-semibold mt-2">Mise en avant artisan</h4>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="contact"
        className="text-center px-6 py-24 border-t border-[#1f1f1f]"
      >
        <h3 className="text-4xl font-bold mb-4">
          Prêt à passer au niveau supérieur ?
        </h3>

        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          Réservez un appel gratuit de 30 minutes pour analyser votre projet et
          voir comment améliorer votre image en ligne.
        </p>

        <a
          href="https://calendly.com/contact-artdubeton/30min"
          target="_blank"
          className="bg-[#D4AF37] text-black px-10 py-4 rounded-xl font-semibold hover:scale-105 transition inline-block"
        >
          Réserver un appel 30 min
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-zinc-500 text-sm py-10 border-t border-[#1f1f1f]">
        © {new Date().getFullYear()} ARTDUBETON - Tous droits réservés
      </footer>
    </main>
  );
}
