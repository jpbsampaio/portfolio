"use client"

import React from 'react'
import { Card, CardHeader, CardContent } from "@/components/ui/card"

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Sobre Mim
        </h1>
        <div className="space-y-8">
          <Card className="border-none shadow-xl rounded-lg overflow-hidden bg-gray-800">
            <CardHeader className="p-6">
              <h2 className="text-2xl font-semibold text-blue-300">
                Quem sou eu?
              </h2>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-blue-200 leading-relaxed">
                Olá! Meu nome é João Paulo e sou um desenvolvedor Full Stack com paixão por tecnologias de ponta e desenvolvimento de aplicações interativas. Com experiência em React, TypeScript e Node.js, busco sempre aprimorar minhas habilidades e explorar novas soluções. Tenho um forte interesse em inteligência artificial e como ela pode ser integrada para resolver problemas complexos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-lg overflow-hidden bg-gray-800">
            <CardHeader className="p-6">
              <h2 className="text-2xl font-semibold text-blue-300">
                Interesses e Habilidades
              </h2>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  Áreas de Interesse
                </h3>
                <ul className="list-disc list-inside space-y-2 text-blue-200">
                  <li>Desenvolvimento Web (Front-End e Back-End)</li>
                  <li>Inteligência Artificial e Machine Learning</li>
                  <li>Design de Experiência de Usuário (UX)</li>
                  <li>Desenvolvimento de APIs e Microsserviços</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">
                  Habilidades Técnicas
                </h3>
                <ul className="list-disc list-inside space-y-2 text-blue-200">
                  <li>JavaScript, TypeScript</li>
                  <li>React, Next.js</li>
                  <li>Node.js, Express</li>
                  <li>Python, Machine Learning</li>
                  <li>SQL e NoSQL (MySQL, MongoDB)</li>
                  <li>Git e Controle de Versão</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-lg overflow-hidden bg-gray-800">
            <CardHeader className="p-6">
              <h2 className="text-2xl font-semibold text-blue-300">
                Minha Jornada
              </h2>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-lg text-blue-200 leading-relaxed">
                Comecei minha carreira desenvolvendo pequenos projetos web enquanto aprendia sobre design responsivo e acessibilidade. A partir daí, fui me especializando em tecnologias de back-end e front-end para construir soluções completas. Atualmente, trabalho em projetos que envolvem integrações complexas e aplicações escaláveis.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default About