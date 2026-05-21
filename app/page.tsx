"use client";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* IMAGE DE FOND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: "url('/hero-beton.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENU */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* BADGE */}
            <p className="text-[#C8A96B] uppercase tracking-[0.3em] mb-4 text-sm">
              Béton décoratif haut de gamme
            </p>

            {/* TITRE */}
            <h1 className="text-white text-5xl md:text-7xl font-semibold leading-tight mb-4">
              L’Art du Béton Décoratif à La Réunion
            </h1>

            {/* SIGNATURE */}
            <p className="text-[#C8A96B] text-xl md:text-2xl tracking-[0.2em] uppercase mb-8">
              by LPM et MBZ
            </p>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
              Béton empreinte, désactivé, drainant, poli et finitions premium
              pour villas, terrasses et espaces contemporains.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#devis"
                className="bg-[#C8A96B] hover:bg-[#D6B97A] transition text-black px-8 py-4 rounded-full font-medium text-center"
              >
                Demander un devis
              </a>

              <a
                href="https://calendly.com/contact-artdubeton/30min"
                target="_blank"
                className="border border-white/30 hover:border-[#C8A96B] hover:text-[#C8A96B] transition text-white px-8 py-4 rounded-full font-medium text-center"
              >
                Réserver un appel
              </a>

              <a
                href="tel:+262692734606"
                className="border border-white/20 hover:border-white transition text-white px-8 py-4 rounded-full font-medium text-center"
              >
                Appeler maintenant
              </a>
            </div>

            {/* CONTACT */}
            <div className="text-sm text-gray-300 space-y-2">
              <p className="text-[#C8A96B] uppercase tracking-[0.2em] mb-2">
                Contact
              </p>

              <a
                href="tel:+262692734606"
                className="block hover:text-[#C8A96B]"
              >
                📞 0692 73 46 06
              </a>

              <a
                href="tel:+262692698521"
                className="block hover:text-[#C8A96B]"
              >
                📞 0692 69 85 21
              </a>

              <a
                href="mailto:contact@artdubeton.re"
                className="block hover:text-[#C8A96B]"
              >
                ✉️ contact@artdubeton.re
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TYPES DE BETON ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-center mb-16">
          Nos types de béton décoratif
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Béton empreinte",
              desc: "Imitation pierre, bois ou pavé avec rendu haut de gamme.",
              img: "/beton-empreinte.jpg",
            },
            {
              title: "Béton désactivé",
              desc: "Surface antidérapante avec gravillons apparents.",
              img: "/beton-desactive.jpg",
            },
            {
              title: "Béton drainant",
              desc: "Permet l’évacuation de l’eau, idéal extérieur.",
              img: "/beton-drainant.jpg",
            },
            {
              title: "Béton poli",
              desc: "Finition lisse et brillante style contemporain.",
              img: "/beton-poli.jpg",
            },
            {
              title: "Béton bouchardé",
              desc: "Aspect texturé et antiglisse très résistant.",
              img: "/beton-boucharde.jpg",
            },
            {
              title: "Béton coloré",
              desc: "Teintes personnalisées selon votre projet.",
              img: "/beton-colore.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-white/10 hover:border-[#C8A96B] transition"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* TEXTE */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#C8A96B]">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORMULAIRE ================= */}
      <section id="devis" className="py-20 px-6 bg-[#111]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C8A96B] uppercase tracking-[0.3em] text-sm mb-4">
              Demande de devis
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Parlons de votre projet
            </h2>

            <p className="text-gray-400">
              Décrivez votre projet et recevez une étude personnalisée.
            </p>
          </div>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();

              const form = e.target as HTMLFormElement;

              const nom = (form.elements.namedItem("nom") as HTMLInputElement)
                .value;

              const tel = (form.elements.namedItem("tel") as HTMLInputElement)
                .value;

              const email = (
                form.elements.namedItem("email") as HTMLInputElement
              ).value;

              const message = (
                form.elements.namedItem("message") as HTMLTextAreaElement
              ).value;

              window.location.href =
                `mailto:contact@artdubeton.re` +
                `?subject=Demande de devis - ${nom}` +
                `&body=Nom: ${nom}%0D%0A` +
                `Téléphone: ${tel}%0D%0A` +
                `Email: ${email}%0D%0A%0D%0A` +
                `Projet:%0D%0A${message}`;
            }}
          >
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white"
            />

            <input
              type="text"
              name="tel"
              placeholder="Votre téléphone"
              required
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Décrivez votre projet..."
              className="w-full bg-black border border-white/10 p-4 rounded-xl text-white"
            />

            <button
              type="submit"
              className="w-full bg-[#C8A96B] hover:bg-[#D6B97A] transition text-black font-semibold py-4 rounded-xl"
            >
              Envoyer ma demande
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
