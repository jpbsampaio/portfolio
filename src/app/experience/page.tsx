"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Sun, Moon, ChevronDown } from "lucide-react";

export default function Experience() {
  const [showWrapper, setShowWrapper] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollTop);
    setShowWrapper(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const blurAmount = Math.min(scrollY / 10, 10);

  return (
    <div
      className={`min-h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
          : "bg-gradient-to-b from-gray-100 to-white text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
        <Switch
          checked={isDarkMode}
          onCheckedChange={toggleDarkMode}
          className="data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-200"
        />
        {isDarkMode ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        )}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1
          className={`text-5xl md:text-7xl font-bold transition-all duration-300 ${
            isDarkMode
              ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              : "text-blue-600"
          }`}
          style={{
            filter: `blur(${blurAmount}px)`,
            opacity: Math.max(1 - scrollY / 500, 0),
          }}
        >
          Minha Experiência
        </h1>
        {/* <p
          className={`mt-4 text-xl md:text-2xl transition-all duration-300 ${
            isDarkMode ? "text-blue-200" : "text-blue-800"
          }`}
          style={{
            filter: `blur(${blurAmount * 0.8}px)`,
            opacity: Math.max(1 - scrollY / 600, 0),
          }}
        >
          :)
        </p> */}
        <Card
          className={`w-full max-w-3xl mt-12 ${
            isDarkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          } rounded-xl shadow-2xl overflow-hidden transition-colors duration-300`}
        >
          <CardContent className="p-6">
            <div className="space-y-6">
              <ExperienceDropdown
              title="Banese"
              company="Programador de Sistemas"
              period="Jul 2024 - Atual"
              description={[
                "Atuo no desenvolvimento da plataforma de vendas (PDV)",
                "Desenvolvimento de novas funcionalidades para o Banco do Estado de Sergipe",
              ]}
              isDarkMode={isDarkMode}
              />

              <ExperienceDropdown
              title="Banese Labs"
              company="Programador de Sistemas Trainee"
              period="Dez 2023 - jun 2024"
              description={[
                "Pesquisas e relatórios relacionados a Inteligências Artificiais Generativas",
                "Desenvolvimento de aplicações em modelos de IA Generativa",
                "Testes de ferramentas e modelos",
              ]}
              isDarkMode={isDarkMode}
              />
              <ExperienceDropdown
              title="Controladoria Geral do Município (CGM)"
              company="Estagiário de Desenvolvimento de Sistemas"
              period="Set 2022 - Nov 2022"
              description={[
                "Idealizei e realizei um rework visual nos sites do portal da transparência do Estado",
              ]}
              isDarkMode={isDarkMode}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface ExperienceDropdownProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  isDarkMode: boolean;
}

const ExperienceDropdown: React.FC<ExperienceDropdownProps> = ({
  title,
  company,
  period,
  description,
  isDarkMode,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-lg transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-700 hover:bg-gray-600"
          : "bg-gray-100 hover:bg-gray-200"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex justify-between items-center p-4 cursor-pointer">
        <h3
          className={`text-lg font-semibold ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-48" : "max-h-0"
        }`}
      >
        <div className="p-4 pt-0">
          <p
            className={`font-medium ${
              isDarkMode ? "text-blue-300" : "text-blue-600"
            }`}
          >
            {company}
          </p>
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {period}
          </p>
          <ul
            className={`mt-2 space-y-2 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {description.map((item, index) => (
              <li key={index} className="list-disc list-inside">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
