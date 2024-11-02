'use client'

import React from 'react'
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Fake or not",
    description: "Algoritmo de machine learning treinado com matérias PT-BR para predição de fakenews.",
    imageUrl: "/images/projeto1.png",
  },
  {
    id: 2,
    title: "Portfólio",
    description: "Um site responsivo criado com Next.js e Tailwind CSS.",
    imageUrl: "/images/projeto2.png",
  },
  {
    id: 2,
    title: "Toretto chatbot",
    description: "Um site responsivo criado com Next.js e Tailwind CSS.",
    imageUrl: "/images/projeto2.png",
  },
]

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">
          Meus Projetos
        </h1>
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-none shadow-xl rounded-lg overflow-hidden bg-gray-800">
              <CardHeader className="flex justify-between items-center p-6 cursor-pointer">
                <h2 className="text-2xl font-semibold text-blue-300">{project.title}</h2>
                <ChevronDown className="w-6 h-6 text-blue-400 transition-transform duration-300 transform group-hover:rotate-180" />
              </CardHeader>
              <CardContent className="p-6 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full md:w-1/3 rounded-lg shadow-lg"
                />
                <p className="text-lg text-blue-200">{project.description}</p>
              </CardContent>
              <CardFooter className="p-6 flex justify-end">
                <a
                  href="#"
                  className="text-blue-400 hover:underline"
                >
                  Ver mais detalhes
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
