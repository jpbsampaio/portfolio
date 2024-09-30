"use client"

import React, { useState, useEffect } from "react"
import NetworkGraph from "./components/NetworkGraph"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  const [showWrapper, setShowWrapper] = useState(false)

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setShowWrapper(scrollTop > 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl md:text-7xl font-bold transition-opacity duration-1000 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          João Paulo
        </h1>
      </div>
      <div className="flex items-center justify-center pb-20">
        <Card className="w-full max-w-3xl bg-gray-800 border-gray-700 rounded-xl shadow-2xl overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Minha Rede</h2>
            <div className="bg-gray-900 rounded-lg h-[400px]">
              <NetworkGraph />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}