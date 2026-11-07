
"use client";

import { useState } from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#F5F0E8] px-8 py-6">
      <a href="#" className="font-serif text-2xl font-bold tracking-tight">
        morrow<span className="text-[#A47B55]">.</span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        <a href="#about" className="text-sm hover:opacity-60">
          Hekayəmiz
        </a>
        <a href="#menu" className="text-sm hover:opacity-60">
          Menyu
        </a>
        <a href="#visit" className="text-sm hover:opacity-60">
          Ünvanımız
        </a>
      </div>

      <a
        href="#menu"
        className="border border-[#3B281F] px-5 py-3 text-sm transition-colors hover:bg-[#3B281F] hover:text-[#F5F0E8]"
      >
        Menyuya bax
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="grid min-h-[650px] grid-cols-1 items-center gap-12 px-8 py-16 md:grid-cols-2 md:px-16">

      <div className="max-w-xl">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-[#A47B55]">
          Xüsusi qəhvə · Bakı
        </p>

        <h1 className="font-serif text-6xl leading-[1.05] tracking-tight md:text-8xl">
          Hər günə
          <br />
          yeni bir
          <br />
          nəfəs.
        </h1>

        <p className="mt-8 max-w-md text-base leading-7 text-[#77745D]">
          Diqqətlə seçilmiş qəhvə dənələri, ustalıqla
          hazırlanan içkilər və gündəlik həyatınıza
          bir az daha çox zövq.
        </p>

        <div className="mt-10 flex items-center gap-6">
          <a
            href="#menu"
            className="bg-[#3B281F] px-7 py-4 text-sm text-[#F5F0E8] transition-colors hover:bg-[#A47B55]"
          >
            Menyumuzla tanış olun
          </a>

          <a
            href="#about"
            className="text-sm underline underline-offset-4"
          >
            Hekayəmiz
          </a>
        </div>
      </div>

      <div className="relative h-[450px] overflow-hidden md:h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&q=85"
          alt="Təzə dəmlənmiş qəhvə"
          className="h-full w-full object-cover"
        />
      </div>

    </section>
  );
}

function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  const drinks = [
    { name: "Espresso", description: "Zəngin, balanslı və klassik.", price: "5 AZN" },
    { name: "Americano", description: "Espresso və isti suyun harmoniyası.", price: "6 AZN" },
    { name: "Cappuccino", description: "Espresso, süd və zərif süd köpüyü.", price: "8 AZN" },
    { name: "Flat White", description: "İkiqat espresso və ipək kimi süd.", price: "9 AZN" },
    { name: "Latte", description: "Yumşaq espresso və buxarda isidilmiş süd.", price: "9 AZN" },
    { name: "Mocha", description: "Espresso, şokolad və südün mükəmməl qarışığı.", price: "10 AZN" },
  ];

  const snacks = [
    { name: "San Sebastian", description: "Kremli, ənənəvi bask çizkeyki.", price: "12 AZN" },
    { name: "Kərə yağlı kruassan", description: "Xırtıldayan, qızılı rəngdə və təzə bişmiş.", price: "6 AZN" },
    { name: "Şokoladlı peçenye", description: "Tünd şokolad parçaları ilə yumşaq peçenye.", price: "5 AZN" },
    { name: "Darçınlı bulka", description: "Darçınlı şirəli içliklə yumşaq xəmir.", price: "8 AZN" },
    { name: "Kök tortu", description: "Krem pendirli, ədviyyatlı kök tortu.", price: "9 AZN" },
    { name: "Qaragiləli muffin", description: "Təzə qaragilələrlə hazırlanmış muffin.", price: "7 AZN" },
  ];

  const activeItems = activeCategory === "coffee" ? drinks : snacks;

  return (
    <section id="menu" className="bg-[#EDE5D9] px-8 py-24 md:px-16">

      <div className="mb-16 text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#A47B55]">
          Sevgi ilə hazırlanıb
        </p>

        <h2 className="font-serif text-5xl md:text-7xl">
          Menyumuz.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#77745D]">
          Səhər espresso-sundan günortanın sakit anlarında
          içilən latte-yə qədər. Hər zövqə uyğun bir seçimimiz var.
        </p>
      </div>

      <div className="mb-12 flex justify-center gap-3">

        <button
          onClick={() => setActiveCategory("coffee")}
          className={`px-8 py-3 text-sm transition-colors ${
            activeCategory === "coffee"
              ? "bg-[#3B281F] text-[#F5F0E8]"
              : "border border-[#3B281F]/30 text-[#3B281F] hover:bg-[#3B281F]/10"
          }`}
        >
          Qəhvə
        </button>

        <button
          onClick={() => setActiveCategory("snacks")}
          className={`px-8 py-3 text-sm transition-colors ${
            activeCategory === "snacks"
              ? "bg-[#3B281F] text-[#F5F0E8]"
              : "border border-[#3B281F]/30 text-[#3B281F] hover:bg-[#3B281F]/10"
          }`}
        >
          Şirniyyat və qəlyanaltılar
        </button>

      </div>

      <div className="mx-auto max-w-3xl">

        <h3 className="mb-8 border-b border-[#3B281F]/20 pb-4 font-serif text-2xl">
          {activeCategory === "coffee" ? "Qəhvə və espresso" : "Şirin fasilə"}
        </h3>

        <div className="grid gap-x-12 md:grid-cols-2">

          {activeItems.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between gap-4 border-b border-[#3B281F]/15 py-6"
            >
              <div>
                <h4 className="font-serif text-xl">{item.name}</h4>

                <p className="mt-2 text-sm text-[#77745D]">
                  {item.description}
                </p>
              </div>

              <span className="shrink-0 text-sm font-medium">
                {item.price}
              </span>
            </div>
          ))}

        </div>

        <p className="mt-8 text-xs text-[#77745D]">
          Bütün qiymətlər AZN ilə göstərilib. Menyu və qiymətlər nümunə məqsədi daşıyır.
        </p>

      </div>

    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="grid items-center gap-12 px-8 py-24 md:grid-cols-2 md:px-16"
    >
      <div className="h-[450px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=85"
          alt="İsti və rahat qəhvəxana interyeri"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="max-w-lg">
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A47B55]">
          Bizim haqqımızda
        </p>

        <h2 className="font-serif text-5xl leading-tight md:text-6xl">
          Bir fincan qəhvədən daha artığı.
        </h2>

        <p className="mt-8 text-sm leading-8 text-[#77745D]">
          İnanırıq ki, həyatın ən gözəl anları çox vaxt
          ən sadə olanlardır. Tanış bir sima, mükəmməl
          hazırlanmış bir fincan qəhvə və bir az da
          uzanan xoş söhbət.
        </p>

        <p className="mt-5 text-sm leading-8 text-[#77745D]">
          Morrow bir az yavaşlamaq, yenidən əlaqə qurmaq
          və həyatın kiçik gözəlliklərindən zövq almaq
          üçün yaradılmış bir məkandır. Diqqətlə seçilmiş
          qəhvə dənələri, ustalıqla hazırlanan içkilər
          və hər gün səmimi qarşılanma.
        </p>

        <p className="mt-8 font-serif text-xl italic">
          Hər günə daha gözəl başla.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="visit" className="bg-[#3B281F] px-8 py-16 text-[#F5F0E8] md:px-16">

      <div className="grid gap-12 md:grid-cols-3">

        <div>
          <h2 className="font-serif text-4xl">
            morrow.
          </h2>

          <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
            Sevgi ilə hazırlanmış qəhvə.
            Hər günə bir az daha çox sevinc.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl">Bizi ziyarət edin</h3>

          <p className="text-sm leading-7 text-white/60">
            Nizami küçəsi 12
            <br />
            Bakı, Azərbaycan
            <br />
            <br />
            Bazar ertəsi – Bazar
            <br />
            08:00 – 22:00
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-xl">Əlaqə</h3>

          <div className="flex flex-col items-start gap-4 text-sm text-white/60">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="hover:text-white">
              Instagram ↗
            </a>

            <a href="mailto:hello@morrowcoffee.example" className="hover:text-white">
              Bizə yazın
            </a>

            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>

      </div>

      <div className="mt-16 border-t border-white/20 pt-8 text-xs text-white/40">
        © 2026 Morrow Coffee. Konsept layihə.
      </div>

    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
