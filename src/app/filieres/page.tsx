"use client";
import Image from "next/image";
import { useEffect } from "react";
import { initAnimations } from "@/app/utils/animations";

const filieres = [
  {
    title: "Licence en Informatique",
    description:
      "Formation complète en développement logiciel, réseaux et sécurité informatique.",
    duree: "3 ans",
    niveau: "BAC+3",
    image: "/images/9.jpeg ",
    details: [
      "Développement Web et Mobile",
      "Intelligence Artificielle",
      "Cybersécurité",
      "Administration Systèmes et Réseaux",
    ],
    debouches: [
      "Développeur Full-Stack",
      "Analyste Cybersécurité",
      "DevOps Engineer",
    ],
  },
  {
    title: "Master en Data Science",
    description:
      "Spécialisation en analyse de données, IA et machine learning.",
    duree: "2 ans",
    niveau: "BAC+5",
    image: "/images/10.jpeg",
    details: [
      "Machine Learning Avancé",
      "Big Data Analytics",
      "Deep Learning",
      "Data Visualization",
    ],
    debouches: ["Data Scientist", "ML Engineer", "Data Analyst"],
  },
  {
    title: "MBA Digital Business",
    description:
      "Formation en management et transformation digitale des entreprises.",
    duree: "2 ans",
    niveau: "BAC+5",
    image: "/images/11.jpeg",
    details: [
      "Stratégie Digitale",
      "E-commerce",
      "Marketing Digital",
      "Gestion de Projet Agile",
    ],
    debouches: [
      "Chef de Projet Digital",
      "Consultant Digital",
      "Product Owner",
    ],
  },
  {
    title: "Licence en Gestion",
    description:
      "Formation en management, comptabilité et gestion d'entreprise.",
    duree: "3 ans",
    niveau: "BAC+3",
    image: "/images/12.jpeg",
    details: [
      "Comptabilité",
      "Finance d'Entreprise",
      "Marketing",
      "Ressources Humaines",
    ],
    debouches: ["Contrôleur de Gestion", "Analyste Financier", "Chargé RH"],
  },
  {
    title: "Master en Cybersécurité",
    description:
      "Formation approfondie en sécurité des systèmes d'information et protection des données.",
    duree: "2 ans",
    niveau: "BAC+5",
    image: "/images/13.jpeg",
    details: [
      "Sécurité des Réseaux",
      "Cryptographie",
      "Forensics",
      "Ethical Hacking",
    ],
    debouches: [
      "Expert en Cybersécurité",
      "Pentesteur",
      "RSSI",
      "Auditeur Sécurité",
    ],
  },
  {
    title: "Master DevOps & Cloud",
    description:
      "Formation spécialisée en pratiques DevOps et technologies cloud computing.",
    duree: "2 ans",
    niveau: "BAC+5",
    image: "/images/14.jpeg",
    details: [
      "Cloud Architecture",
      "Containerisation",
      "CI/CD",
      "Infrastructure as Code",
    ],
    debouches: [
      "DevOps Engineer",
      "Cloud Architect",
      "SRE",
      "Platform Engineer",
    ],
  },
  {
    title: "Master IA & Robotique",
    description:
      "Formation en intelligence artificielle avancée et systèmes robotiques.",
    duree: "2 ans",
    niveau: "BAC+5",
    image: "/images/15.jpeg",
    details: [
      "Deep Learning",
      "Computer Vision",
      "Robotique Industrielle",
      "Systèmes Autonomes",
    ],
    debouches: [
      "Ingénieur IA",
      "Roboticien",
      "Chercheur R&D",
      "Expert Vision par Ordinateur",
    ],
  },
  {
    title: "Licence IoT & Systèmes Embarqués",
    description:
      "Formation en conception et développement de systèmes connectés et embarqués.",
    duree: "3 ans",
    niveau: "BAC+3",
    image: "/images/16.jpeg",
    details: [
      "Programmation Embarquée",
      "Protocoles IoT",
      "Électronique Numérique",
      "Réseaux de Capteurs",
    ],
    debouches: [
      "Développeur IoT",
      "Ingénieur Systèmes Embarqués",
      "Concepteur Hardware",
      "Intégrateur IoT",
    ],
  },
];

export default function Filieres() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 bg-gradient-to-br from-blue-50 to-purple-50 page-content">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 fade-in opacity-100 text-center">
          Nos Filières
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {filieres.map((filiere, index) => (
            <div
              key={index}
              className="filiere-card glass-effect rounded-xl overflow-hidden hover:scale-105 transition-transform opacity-100"
            >
              <div className="relative h-48">
                <Image
                  src={filiere.image}
                  alt={filiere.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h2 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                  {filiere.title}
                </h2>
              </div>
              <div className="p-6">
                <div className="flex justify-between text-sm mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    Durée: {filiere.duree}
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                    Niveau: {filiere.niveau}
                  </span>
                </div>
                <p className="text-gray-700 mb-6">{filiere.description}</p>

                <div className="mb-6">
                  <h3 className="font-bold mb-2">Programme :</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {filiere.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-blue-600">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Débouchés :</h3>
                  <div className="flex flex-wrap gap-2">
                    {filiere.debouches.map((debouche, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {debouche}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Contact */}
        <div className="mt-16 text-center glass-effect rounded-xl p-8 fade-in opacity-100">
          <h2 className="text-2xl font-bold mb-4">
            Intéressé par nos formations ?
          </h2>
          <p className="mb-6">
            Contactez notre équipe pédagogique pour plus d&apos;informations sur
            nos programmes.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
