"use client"

import React, { useState, useEffect } from "react"
import NetworkGraph from "./components/NetworkGraph"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Sun, Moon } from "lucide-react"

export default function Home() {
  const [showWrapper, setShowWrapper] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    setScrollY(scrollTop)
    setShowWrapper(scrollTop > 100)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const blurAmount = Math.min(scrollY / 10, 10) // Max blur of 10px

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-b from-gray-100 to-white text-gray-900'} transition-colors duration-300`}>
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
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 
          className={`text-5xl md:text-7xl font-bold transition-all duration-300 ${
            isDarkMode 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600' 
              : 'text-blue-600'
          }`}
          style={{
            filter: `blur(${blurAmount}px)`,
            opacity: Math.max(1 - scrollY / 500, 0),
          }}
        >
          Olá, sou João Paulo
        </h1>
        <p 
          className={`mt-4 text-xl md:text-2xl transition-all duration-300 ${
            isDarkMode ? 'text-blue-200' : 'text-blue-800'
          }`}
          style={{
            filter: `blur(${blurAmount * 0.8}px)`,
            opacity: Math.max(1 - scrollY / 600, 0),
          }}
        >
          Full stack developer and AI enthusiast
        </p>
      </div>
      <div className="flex items-center justify-center pb-20">
        <Card className={`w-full max-w-3xl ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-2xl overflow-hidden transition-colors duration-300`}>
          <CardContent className="p-6">
            <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>Minha Rede</h2>
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} rounded-lg transition-colors duration-300`} style={{ height: "400px", width: "100%" }}>
              <NetworkGraph isDarkMode={isDarkMode} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}