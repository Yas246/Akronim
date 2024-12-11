"use client";
import { initAnimations } from "@/app/utils/animations";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50 page-content">
      <div className="max-w-7xl mx-auto">
        {/* Section Mission */}
        <section className="mb-20">
          <h1 className="text-4xl font-bold mb-12 text-center fade-in opacity-100">
            Notre Mission
          </h1>
          <div className="glass-effect rounded-2xl p-8 mb-12 fade-in opacity-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  AKRONIM s&apos;engage à former les leaders de demain en
                  combinant excellence académique, innovation technologique et
                  valeurs humaines.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">✓</span>
                    Formation d&apos;excellence
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">✓</span>
                    Innovation pédagogique
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-blue-600">✓</span>
                    Accompagnement personnalisé
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/images/1.jpeg"
                  alt="Campus AKRONIM"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Chiffres Clés */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center fade-in opacity-100">
            AKRONIM en Chiffres
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-in opacity-100">
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700">Années d&apos;expérience</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-700">Taux de réussite</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Partenaires entreprises</div>
            </div>
            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-700">Pays représentés</div>
            </div>
          </div>
        </section>

        {/* Section Infrastructure */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center fade-in opacity-100">
            Notre Campus
          </h2>
          <div className="grid md:grid-cols-3 gap-8 fade-in opacity-100">
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/17.jpeg"
                  alt="Bibliothèque"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Bibliothèque Moderne</h3>
                <p className="text-gray-700">
                  Plus de 50,000 ressources numériques et physiques à votre
                  disposition.
                </p>
              </div>
            </div>
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/18.jpeg"
                  alt="Laboratoires"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Laboratoires High-Tech
                </h3>
                <p className="text-gray-700">
                  Équipements de pointe pour la recherche et l&apos;innovation.
                </p>
              </div>
            </div>
            <div className="glass-effect rounded-xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/19.jpeg"
                  alt="Espaces collaboratifs"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Espaces Collaboratifs
                </h3>
                <p className="text-gray-700">
                  Des zones dédiées au travail en groupe et aux projets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section>
          <div className="glass-effect rounded-2xl p-8 text-center fade-in opacity-100">
            <h2 className="text-3xl font-bold mb-6">Contactez-nous</h2>
            <p className="text-xl text-gray-700 mb-8">
              Une question ? Notre équipe est là pour vous répondre.
            </p>
            <a
              href="mailto:contact@akronim.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors"
            >
              Nous contacter
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
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
