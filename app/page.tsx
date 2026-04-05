"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const pillars = [
  {
    name: "Koordinace",
    color: "#f97316",
    angle: 0,
    ratio: -1,
    scenario: {
      situation: "Na stavbě probíhají současně dvě zdvihací operace bez stanovení priorit.",
      risk: "Křížení drah jeřábů → riziko kolize a ohrožení osob.",
      solution: "Centrální řízení provozu, stanovení priorit a řízení pohybu.",
    },
  },
  {
    name: "Administrativa",
    color: "#7c3aed",
    angle: 60,
    ratio: -1,
    scenario: {
      situation: "Chybí aktuální provozní dokumentace a záznamy.",
      risk: "Nelze prokázat správný postup při kontrole nebo nehodě.",
      solution: "Systematická evidence, kontrola a aktualizace dokumentace.",
    },
  },
  {
    name: "Komunikace",
    color: "#2563eb",
    angle: 120,
    ratio: -1,
    scenario: {
      situation: "Signalista předá nejednoznačný pokyn.",
      risk: "Chybný pohyb břemene → ohrožení pracovníků.",
      solution: "Jasná pravidla komunikace a potvrzení pokynů.",
    },
  },
  {
    name: "Organizace",
    color: "#eab308",
    angle: 180,
    ratio: -1,
    scenario: {
      situation: "Činnosti nejsou časově sladěny.",
      risk: "Chaos a zvýšené riziko chyb.",
      solution: "Strukturované plánování a návaznost činností.",
    },
  },
  {
    name: "Bezpečnost",
    color: "#16a34a",
    angle: 240,
    ratio: -1,
    scenario: {
      situation: "Pravidla nejsou dodržována.",
      risk: "Vznik pracovního úrazu.",
      solution: "Důsledný dohled a vynucování pravidel.",
    },
  },
  {
    name: "Analýza",
    color: "#dc2626",
    angle: 300,
    ratio: -1,
    scenario: {
      situation: "Rizika nejsou identifikována.",
      risk: "Opakování chyb a nehody.",
      solution: "Průběžná analýza a prevence.",
    },
  },
];

type Pillar = (typeof pillars)[number];

function Gear({
  size = 120,
  teeth = 12,
  color = "#fff",
  children,
  rotation = 0,
}: {
  size?: number;
  teeth?: number;
  color?: string;
  children: React.ReactNode;
  rotation?: number;
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {Array.from({ length: teeth }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: size * 0.08,
            height: size * 0.18,
            transform: `translate(-50%, -50%) rotate(${
              (360 / teeth) * i
            }deg) translateY(-${size / 2}px)`,
            transformOrigin: "center",
            background: color,
          }}
        />
      ))}

      <div
        className="flex items-center justify-center rounded-full"
        style={{
          width: size * 0.75,
          height: size * 0.75,
          background:
            color === "#e5e7eb"
              ? "linear-gradient(145deg, #e5e7eb, #9ca3af)"
              : color,
          boxShadow:
            color === "#e5e7eb"
              ? "inset 0 2px 6px rgba(255,255,255,0.4), inset 0 -4px 8px rgba(0,0,0,0.6)"
              : "none",
        }}
      >
        <div
          className="text-sm font-bold text-black"
          style={{ transform: `rotate(${-rotation}deg)` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [active, setActive] = useState<Pillar | null>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => r + 0.3);
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white flex flex-col items-center">
      <header className="w-full fixed top-0 left-0 z-[9999] bg-black/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-white font-bold">AJKJ</div>

          <nav className="flex gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-orange-400 transition">
              HOME
            </Link>
            <Link href="/o-asociaci" className="hover:text-orange-400 transition">
              O ASOCIACI
            </Link>
            <a href="#" className="hover:text-orange-400 transition">
              FILOZOFIE
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              ČLENSTVÍ
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              DOKUMENTY
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              KONTAKT
            </a>
          </nav>
        </div>
      </header>

      <section className="pt-40 pb-20 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Řízení provozu jeřábů není služba.
        </h1>

        <p className="text-2xl md:text-3xl text-orange-500 font-semibold mb-6">
          Je to odpovědnost.
        </p>

        <p className="max-w-2xl text-gray-300 text-lg mb-10">
          Nastavujeme pravidla, rozhodování a odpovědnost v provozu vyhrazených
          zdvihacích zařízení. Neřešíme papíry. Řídíme rizika.
        </p>

        <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl text-lg transition">
          Zjistit více
        </button>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Pro koho je řízení provozu klíčové
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Stavební firmy
            </h3>
            <p className="text-gray-300">
              Které nesou odpovědnost za provoz jeřábů, ale nemají systém řízení.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Provozovatelé ZZ
            </h3>
            <p className="text-gray-300">
              Kteří potřebují prokazatelné řízení rizik a ochranu při kontrolách
              nebo incidentech.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-orange-400">
              Developerské projekty
            </h3>
            <p className="text-gray-300">
              Kde je provoz složitý, kolizní a bez řízení vzniká systémové
              riziko.
            </p>
          </div>
        </div>
      </section>

      <div className="relative w-[500px] h-[500px] mt-20 flex items-center justify-center">
        <Gear size={150} color="#e5e7eb" rotation={rotation}>
          PROVOZ
        </Gear>

        {pillars.map((p) => (
          <div
            key={p.name}
            style={{
              position: "absolute",
              transform: `rotate(${p.angle}deg) translate(120px) rotate(-${p.angle}deg)`,
            }}
            onClick={() => setActive(p)}
            className={`cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,140,0,0.8)] ${
              active && active.name !== p.name ? "opacity-60" : ""
            }`}
          >
            <Gear
              size={active && active.name === p.name ? 120 : 100}
              color={p.color}
              rotation={rotation * p.ratio}
            >
              {p.name}
            </Gear>
          </div>
        ))}
      </div>

      {active && (
        <div className="mt-12 max-w-2xl text-center mx-auto px-6 pb-20">
          <h2 className="text-3xl font-bold mb-4 text-white">{active.name}</h2>

          <p className="text-gray-300 mb-2">
            <span className="text-orange-400 font-semibold">Situace:</span>{" "}
            {active.scenario.situation}
          </p>

          <p className="text-gray-300 mb-2">
            <span className="text-orange-400 font-semibold">Riziko:</span>{" "}
            {active.scenario.risk}
          </p>

          <p className="text-gray-300 mb-6">
            <span className="text-orange-400 font-semibold">Řešení:</span>{" "}
            {active.scenario.solution}
          </p>

          <button className="mt-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,140,0,0.6)]">
            Poptat řešení
          </button>
        </div>
      )}
    </div>
  );
}