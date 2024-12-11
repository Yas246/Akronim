"use client";
import { initAnimations } from "@/app/utils/animations";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Initialiser les animations
    initAnimations();

    // Animation immédiate pour la section hero
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <div className="min-h-screen page-content">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/home.jpeg"
          alt="AKRONIM Campus"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8 hero-content">
            <h1 className="text-5xl font-bold mb-6 text-blue-400">
              Bienvenue à AKRONIM
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              L&apos;École Supérieure de Gestion, d&apos;Informatique et des
              Sciences est une institution d&apos;excellence dédiée à former les
              leaders de demain.
            </p>
            <a
              href="/filieres"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              Découvrir nos formations
            </a>
          </div>
        </div>
      </section>

      {/* Présentation Section */}
      <section className="py-20 px-6 bg-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center fade-in opacity-100">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Excellence</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Plus de 20 ans d&apos;expertise
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Corps professoral international
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Programmes accrédités
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-600">✓</span>
                  Partenariats industriels
                </li>
              </ul>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/1.jpeg"
                alt="Étudiants AKRONIM"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nouvelle section Vie Étudiante */}
      <section className="py-20 px-6 bg-white/90">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center fade-in opacity-100">
            Vie Étudiante
          </h2>

          <div className="grid md:grid-cols-3 gap-8 fade-in opacity-100">
            {/* Associations Étudiantes */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/2.jpeg"
                  alt="Associations étudiantes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Associations Étudiantes
                </h3>
                <p className="text-gray-700">
                  Plus de 15 associations actives sur le campus, offrant des
                  opportunités d&apos;engagement dans divers domaines :
                  technologie, culture, sport, humanitaire.
                </p>
              </div>
            </div>

            {/* Campus Moderne */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/3.jpeg"
                  alt="Campus moderne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Campus Moderne</h3>
                <p className="text-gray-700">
                  Un environnement d&apos;apprentissage innovant avec des
                  laboratoires de pointe, des espaces de coworking et une
                  bibliothèque numérique.
                </p>
              </div>
            </div>

            {/* Événements */}
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/4.jpeg"
                  alt="Événements"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Événements & Networking
                </h3>
                <p className="text-gray-700">
                  Conférences, hackathons, forums entreprises et événements
                  culturels tout au long de l&apos;année pour enrichir votre
                  expérience étudiante.
                </p>
              </div>
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center fade-in opacity-100">
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1500+</div>
              <div className="text-gray-700">Étudiants</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-700">Associations</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Événements/an</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-700">Insertion pro.</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in opacity-100">
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
            >
              Rejoignez notre communauté
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center fade-in opacity-100">
            Nos Certifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in opacity-100">
            <div className="glass-effect rounded-xl p-6 text-center">
              <Image
                src="/images/5.jpeg"
                alt="ISO Certification"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">ISO 9001</h3>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <Image
                src="/images/6.jpeg"
                alt="CTI Certification"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">CTI</h3>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <Image
                src="/images/7.jpeg"
                alt="AACSB Certification"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">AACSB</h3>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <Image
                src="/images/8.jpeg"
                alt="EQUIS Certification"
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold">EQUIS</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA Formations */}
      <section className="py-20 px-6 bg-white/90">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glass-effect rounded-2xl p-12 fade-in opacity-100">
            <h2 className="text-4xl font-bold mb-6">
              Prêt à commencer votre parcours ?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Découvrez l&apos;ensemble de nos formations et trouvez celle qui
              correspond à vos ambitions.
            </p>
            <Link
              href="/filieres"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Voir nos formations
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
