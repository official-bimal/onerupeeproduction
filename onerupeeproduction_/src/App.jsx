
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Phone, Mail, MapPin } from "lucide-react";

export default function OneRupeeProductionWebsite() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const handleHash = () => {
      const page = window.location.hash.replace("#", "");
      if (page) setActivePage(page);
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const navigate = (page) => {
    window.location.hash = page;
    setActivePage(page);
  };

  const themeBg = darkMode ? "bg-black text-white" : "bg-white text-black";
  const cardBg = darkMode ? "bg-gray-900" : "bg-white shadow-lg";

  const clients = Array.from({ length: 10 }, (_, i) => `Brand ${i + 1}`);

  const renderHome = () => (
    <div className="pt-24">
      <div className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Where Creativity Meets Production
        </motion.h2>
        <p className="max-w-2xl text-lg mb-8 opacity-70">
          From Podcasts to Music Videos — We Create Stories That Sell.
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => navigate("production")}
            className="border border-yellow-500 px-6 py-3 rounded-2xl hover:bg-yellow-500 hover:text-black transition-all duration-300"
          >
            Explore Our Work
          </button>
          <button
            onClick={() => setOpenModal(true)}
            className="bg-yellow-500 px-6 py-3 rounded-2xl text-black hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="py-24 px-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">About One Rupee Production</h2>
        <p className="opacity-70 text-lg leading-relaxed">
          One Rupee Production is a premium creative production house based in Pokhara, Nepal.
          We specialize in podcast production, brand storytelling, marketing videos,
          event coverage and cinematic music video production.
        </p>
      </div>

      <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} py-24 px-10`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Message From The CEO</h2>
          <div className="h-32 w-32 bg-gray-700 rounded-full mx-auto mb-6"></div>
          <p className="italic opacity-80 leading-relaxed">
            "At One Rupee Production, we don’t just create videos. We create impact."
          </p>
          <p className="mt-6 font-semibold">— Bimal Bhandari, Founder & CEO</p>
        </div>
      </div>

      <div className="py-20 px-10 grid md:grid-cols-3 gap-10">
        {["podcast", "content", "production"].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className={`p-10 rounded-2xl ${cardBg} cursor-pointer hover:border-yellow-500 border border-transparent transition-all duration-300`}
          >
            <h3 className="text-2xl font-bold mb-4">
              One Rupee {item.charAt(0).toUpperCase() + item.slice(1)}
            </h3>
            <p className="opacity-70 mb-6">
              Premium {item} services with cinematic quality.
            </p>
            <button
              onClick={() => navigate(item)}
              className="text-yellow-400 hover:underline"
            >
              Explore →
            </button>
          </motion.div>
        ))}
      </div>

      <div className="py-20 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted By 100+ Brands
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-marquee whitespace-nowrap">
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="min-w-[150px] text-center py-4 px-6 border border-gray-700 rounded-xl hover:border-yellow-500 transition"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Creative Team
        </h2>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            "Bimal Bhandari - Founder & CEO",
            "Creative Director",
            "Head of Production",
            "Lead Video Editor",
            "Cinematographer",
            "Content Strategist",
            "Post-Production Supervisor"
          ].map((member, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl ${cardBg} hover:scale-105 transition`}
            >
              <div className="h-40 bg-gray-700 rounded-xl mb-6"></div>
              <h4 className="text-lg font-bold">{member}</h4>
              <p className="opacity-70 text-sm">
                Cinematic excellence & creative innovation.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={`${themeBg} min-h-screen transition-all duration-500`}>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <div className="w-full text-sm flex justify-between items-center px-6 py-2 border-b border-gray-800">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <Phone size={14}/> +977-9856059167 | 9827182181
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14}/> productiononerupee@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={14}/> Pokhara, Nepal
          </span>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border hover:scale-110 transition"
        >
          {darkMode ? <Sun size={16}/> : <Moon size={16}/>}
        </button>
      </div>

      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold cursor-pointer">
          One Rupee Production
        </h1>
        <button className="bg-yellow-500 text-black px-5 py-2 rounded-2xl transition-all">
          Book Appointment
        </button>
      </div>

      {renderHome()}

      <footer className="py-10 px-10 border-t border-gray-800 text-center">
        <h3 className="text-xl font-bold mb-4">
          One Rupee Production
        </h3>
        <p className="opacity-60">
          © 2026 One Rupee Production. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
