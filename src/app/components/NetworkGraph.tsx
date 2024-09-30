"use client"

import React, { useEffect, useRef } from 'react'
import { Network } from 'vis-network'
import 'vis-network/styles/vis-network.css'

interface NodeData {
  id: number
  label: string
  url: string
}

interface EdgeData {
  from: number
  to: number
}

const nodes: NodeData[] = [
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'Sobre Mim', url: '/about' },
  { id: 3, label: 'Projetos', url: '/projects' },
  { id: 4, label: 'Contato', url: '/contact' },
]

const edges: EdgeData[] = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 1, to: 4 }
]

interface NetworkGraphProps {
  isDarkMode: boolean
}

const NetworkGraph: React.FC<NetworkGraphProps> = ({ isDarkMode }) => {
  const networkRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = networkRef.current
    if (!container) return

    const data = {
      nodes: nodes.map((node) => ({
        id: node.id,
        label: node.label,
        url: node.url,
        color: {
          background: isDarkMode ? '#3b82f6' : '#60a5fa',
          border: isDarkMode ? '#60a5fa' : '#3b82f6',
          highlight: {
            background: isDarkMode ? '#2563eb' : '#93c5fd',
            border: isDarkMode ? '#93c5fd' : '#2563eb'
          }
        },
        font: {
          color: isDarkMode ? '#ffffff' : '#1e3a8a',
          size: 16,
          face: 'Arial'
        }
      })),
      edges: edges,
    }

    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        borderWidth: 2,
        shadow: {
          enabled: true,
          color: 'rgba(0,0,0,0.2)',
          size: 5,
          x: 0,
          y: 2
        }
      },
      edges: {
        width: 1.5,
        color: {
          color: isDarkMode ? '#60a5fa' : '#3b82f6',
          highlight: isDarkMode ? '#3b82f6' : '#2563eb',
        },
        smooth: {
          type: 'continuous',
          forceDirection: 'none',
          roundness: 0.5
        }
      },
      interaction: {
        hover: true,
        zoomView: false,
        dragView: false,
        dragNodes: true,
      },
      physics: {
        stabilization: {
          enabled: true,
          iterations: 200,
          fit: true
        },
        barnesHut: {
          gravitationalConstant: -2000,
          centralGravity: 0.3,
          springLength: 95,
          springConstant: 0.04,
          damping: 0.09,
        },
      },
      layout: {
        improvedLayout: true,
        hierarchical: {
          enabled: false,
        },
      },
    }

    const network = new Network(container, data, options as any)

    network.on('click', (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0]
        const node = nodes.find((n) => n.id === nodeId)
        if (node?.url) {
          window.location.href = node.url
        }
      }
    })

    network.once('stabilizationIterationsDone', function() {
      network.fit({
        animation: {
          duration: 1000,
          easingFunction: 'easeOutQuart'
        }
      })
    })

    const handleResize = () => {
      network.fit({
        animation: {
          duration: 1000,
          easingFunction: 'easeOutQuart'
        }
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isDarkMode])

  return <div ref={networkRef} style={{ height: '100%', width: '100%' }} />
}

export default NetworkGraph