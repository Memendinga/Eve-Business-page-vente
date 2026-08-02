import React, { useState } from "react";
import { Sprout, Leaf, Flame, Wheat, MessageCircle, Check, ChevronDown, Fish, PiggyBank, Egg } from "lucide-react";

const WA_NUMBER = "242067257950"; // (+242) 06 725 7950
const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

// Ripening piment gradient: vert -> jaune -> orange -> rouge, comme le piment sur pied
const paymentSteps = [
  "Compose *105# sur ton téléphone MTN",
  "Choisis \"Envoi d'argent\" puis \"Abonné Mobile Money\"",
  "Entre le numéro 06 725 7950",
  "Entre le montant exact et valide avec ton code PIN",
  "Clique sur \"J'ai payé\" sous le produit que tu as choisi",
];

const tiers = [
  {
    stage: "Vert",
    icon: Sprout,
    color: "#2F8F4E",
    title: "Contenus gratuits",
    price: "Gratuit",
    tagline: "Pour savoir si l'agriculture est faite pour toi",
    items: [
      "Checklist de lancement en agriculture",
      "Contenus TikTok chaque semaine",
      "Conseils tirés de mon exploitation à Odziba",
    ],
    cta: "Recevoir la checklist",
    waText: "Bonjour Eve, je veux recevoir la checklist de lancement gratuite.",
  },
  {
    stage: "Jaune",
    icon: Leaf,
    color: "#F0A824",
    title: "5 guides PDF",
    price: "10 000 FCFA / guide",
    tagline: "Pour poser les bases sans te tromper",
    items: [
      "Guide de lancement en agriculture",
      "Calendrier agricole",
      "Les erreurs à éviter",
      "Les cultures les plus rentables",
      "Budget de lancement d'un poulailler",
    ],
    cta: "Voir les guides",
    waText: "Bonjour Eve, je suis intéressé(e) par les guides PDF.",
    paidWaText: "Bonjour Eve, je viens de payer un guide PDF par MTN Mobile Money. Voici le nom du guide et ma preuve de paiement :",
  },
  {
    stage: "Orange",
    icon: Flame,
    color: "#E06B26",
    title: "Diagnostic personnalisé",
    price: "12 000 FCFA",
    tagline: "Pour savoir précisément où tu perds de l'argent",
    items: [
      "Analyse de ton terrain, ton budget, ton activité",
      "Recommandations chiffrées en FCFA",
      "Échange direct avec moi par appel ou WhatsApp",
    ],
    cta: "Demander mon diagnostic",
    waText: "Bonjour Eve, je veux un diagnostic personnalisé pour mon projet agricole.",
    paidWaText: "Bonjour Eve, je viens de payer le diagnostic personnalisé (12 000 FCFA) par MTN Mobile Money. Voici ma preuve de paiement :",
  },
  {
    stage: "Rouge",
    icon: Wheat,
    color: "#C4322A",
    title: "Immersion sur le terrain",
    price: "35 000 FCFA",
    tagline: "Pour voir, toucher, comprendre — chez moi, à Odziba",
    items: [
      "Journée complète sur mon exploitation intégrée",
      "Pisciculture, élevage, maraîchage : tout en vrai",
      "Plan d'action personnalisé à la sortie",
    ],
    cta: "Réserver mon immersion",
    waText: "Bonjour Eve, je veux réserver une immersion sur le terrain à Odziba.",
    paidWaText: "Bonjour Eve, je viens de payer l'immersion terrain (35 000 FCFA) par MTN Mobile Money. Voici ma preuve de paiement :",
  },
];

const activities = [
  { icon: Fish, label: "Pisciculture" },
  { icon: PiggyBank, label: "Élevage de porcs" },
  { icon: Sprout, label: "Maïs & maraîchage" },
  { icon: Egg, label: "Poulets de chair" },
];

const faqs = [
  {
    q: "Je n'ai jamais touché à l'agriculture, je commence où ?",
    a: "Par la checklist gratuite. Elle est faite pour ceux qui partent de zéro et veulent un premier cap clair avant d'investir un franc.",
  },
  {
    q: "Le diagnostic remplace l'immersion ?",
    a: "Non. Le diagnostic répond à une question précise sur ton projet. L'immersion, c'est une journée complète sur le terrain pour tout voir en vrai avant de te lancer.",
  },
  {
    q: "Comment je paie ?",
    a: "Par Mobile Money, Airtel ou MTN. Tu écris sur WhatsApp, je t'envoie les instructions.",
  },
];

function PriceBanner({ text, color }) {
  return (
    <div
      className="inline-block text-white font-extrabold px-4 py-1.5 rounded-sm shadow-sm -rotate-2"
      style={{
        backgroundColor: color,
        fontFamily: "'Work Sans', sans-serif",
        letterSpacing: "0.02em",
      }}
    >
      {text}
    </div>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#E06B26]/25 py-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4322A] rounded"
      >
        <span className="font-semibold text-[#20291F]" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          {q}
        </span>
        <ChevronDown
          className={`shrink-0 text-[#C4322A] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </button>
      {open && (
        <p className="mt-3 text-[#4A4335] leading-relaxed" style={{ fontFamily: "'Work Sans', sans-serif" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export default function EveSalesPageV2() {
  return (
    <div style={{ fontFamily: "'Work Sans', sans-serif" }} className="bg-[#FFFBF2] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600;700;800&display=swap');
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      {/* HERO */}
      <section
        className="relative text-white px-6 pt-16 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #2F8F4E 0%, #E9A324 100%)" }}
      >
        <div className="max-w-xl mx-auto text-center relative z-10">
          <p
            className="uppercase tracking-[0.2em] text-white/90 text-xs font-bold mb-5"
            style={{ fontFamily: "'Work Sans', sans-serif" }}
          >
            Eve Business CG · Odziba, Congo
          </p>
          <h1
            className="text-4xl sm:text-5xl leading-[1.1] mb-6"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 900 }}
          >
            Je construis mon patrimoine en République du Congo, à travers l'agriculture
          </h1>
          <p className="text-white/95 text-base leading-relaxed mb-9 max-w-md mx-auto">
            Sur mon exploitation à Odziba, je transforme le terrain en revenus. Je partage tout, étape par étape,
            du contenu gratuit jusqu'à l'immersion complète.
          </p>
          <a
            href={waLink("Bonjour Eve, je découvre votre page et je veux savoir par où commencer.")}
            className="inline-flex items-center gap-2 bg-[#C4322A] hover:bg-[#A82922] text-white font-bold px-7 py-3.5 rounded-full shadow-lg transition-colors"
          >
            <MessageCircle size={19} />
            Parler avec Eve sur WhatsApp
          </a>
        </div>
      </section>

      {/* OFFERS */}
      <section className="px-6 py-16">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl sm:text-3xl text-center mb-2 text-[#20291F]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}
          >
            Du vert au rouge, avance à ton rythme
          </h2>
          <p className="text-center text-[#4A4335] mb-12">
            Comme un piment sur pied : chaque étape te rapproche d'un projet qui rapporte vraiment.
          </p>

          <div className="grid gap-6">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border-t-4"
                  style={{ borderColor: tier.color }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${tier.color}1A` }}
                    >
                      <Icon style={{ color: tier.color }} size={22} />
                    </div>
                    <div>
                      <p
                        className="text-[11px] uppercase tracking-wider font-bold"
                        style={{ color: tier.color, fontFamily: "'Work Sans', sans-serif" }}
                      >
                        {tier.stage}
                      </p>
                      <h3
                        className="text-lg text-[#20291F] leading-tight"
                        style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }}
                      >
                        {tier.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mb-3">
                    <PriceBanner text={tier.price} color={tier.color} />
                  </div>

                  <p className="text-[#4A4335] text-sm mb-4">{tier.tagline}</p>

                  <ul className="space-y-2 mb-5">
                    {tier.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-[#20291F]">
                        <Check style={{ color: tier.color }} className="mt-0.5 shrink-0" size={16} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(tier.waText)}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
                    style={{ backgroundColor: tier.color }}
                  >
                    <MessageCircle size={15} />
                    {tier.cta}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CREDIBILITY */}
      <section className="px-6 py-16" style={{ backgroundColor: "#20291F" }}>
        <div className="max-w-xl mx-auto text-center text-white">
          <h2 className="text-2xl mb-4" style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}>
            Pourquoi m'écouter
          </h2>
          <p className="text-white/85 leading-relaxed mb-8">
            Je construis mon patrimoine en République du Congo à travers l'immobilier, l'agriculture et le
            business. Sur mon exploitation intégrée à Odziba, à 100 km de Brazzaville, je gère tout ça moi-même —
            et je partage chaque leçon apprise sur le terrain.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {activities.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.label}
                  className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-3 justify-center"
                >
                  <Icon size={18} className="text-[#F0A824]" />
                  <span className="text-sm font-medium">{a.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <div className="max-w-xl mx-auto">
          <h2
            className="text-2xl text-center mb-8 text-[#20291F]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}
          >
            Questions fréquentes
          </h2>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pt-16">
        <div
          className="max-w-xl mx-auto rounded-2xl p-8 text-center text-white"
          style={{ background: "linear-gradient(135deg, #E06B26 0%, #C4322A 100%)" }}
        >
          <h2 className="text-xl mb-3" style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}>
            Prêt à commencer ?
          </h2>
          <p className="text-white/90 mb-6">
            Écris-moi sur WhatsApp, je te réponds directement et on regarde ensemble quelle étape est faite pour toi.
          </p>
          <a
            href={waLink("Bonjour Eve, je veux commencer mon projet agricole avec vous.")}
            className="inline-flex items-center gap-2 bg-white text-[#C4322A] font-bold px-6 py-3 rounded-full shadow-lg transition-opacity hover:opacity-90"
          >
            <MessageCircle size={18} />
            (+242) 06 725 7950
          </a>
        </div>
      </section>

      {/* COMMENT PAYER */}
      <section className="px-6 py-14" style={{ backgroundColor: "#FFF3D6" }}>
        <div className="max-w-xl mx-auto">
          <h2
            className="text-xl sm:text-2xl text-center mb-6 text-[#20291F]"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 800 }}
          >
            Comment payer par Mobile Money
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ol className="space-y-3 mb-2">
              {paymentSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-3 text-sm text-[#20291F]">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: "#F0A824" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <p className="text-center text-xs text-[#4A4335] mt-4">
            Paiement uniquement par MTN Mobile Money, au (+242) 06 725 7950.
          </p>
          <div className="text-center mt-6">
            <a
              href={waLink(
                "Bonjour Eve, je viens de payer par MTN Mobile Money. Voici le produit choisi et ma preuve de paiement :"
              )}
              className="inline-flex items-center gap-2 text-sm font-bold text-white px-6 py-3 rounded-full shadow-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#20291F" }}
            >
              <Check size={16} />
              J'ai payé
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
