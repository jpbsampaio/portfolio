import React, { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import 'vis-network/styles/vis-network.css';

interface NodeData {
  id: number;
  label: string;
  url: string;
}

interface EdgeData {
  from: number;
  to: number;
}

const nodes: NodeData[] = [
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'Sobre Mim', url: '/about' },
  { id: 3, label: 'Projetos', url: '/projects' },
  { id: 4, label: 'Contato', url: '/contact' },
];

const edges: EdgeData[] = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
];

const NetworkGraph: React.FC = () => {
  const networkRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = networkRef.current;
    if (!container) return;

    const data = {
      nodes: nodes.map((node) => ({
        id: node.id,
        label: node.label,
        url: node.url,
      })),
      edges: edges,
    };

    const options = {
      nodes: {
        shape: 'dot',
        size: 20,
        font: {
          size: 16,
        },
      },
      edges: {
        width: 2,
        color: { inherit: true },
        smooth: true,
      },
      interaction: {
        hover: true,
        zoomView: true,
        dragNodes: true,
      },
      physics: {
        barnesHut: {
          gravitationalConstant: -30000,
          springLength: 150,
        },
      },
    };

    const network = new Network(container, data, options);

    // Tornar os nós clicáveis e redirecionar
    network.on('click', (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node = nodes.find((n) => n.id === nodeId);
        if (node?.url) {
          window.location.href = node.url;
        }
      }
    });
  }, []);

  return <div ref={networkRef} style={{ height: '600px', width: '100%' }} />;
};

export default NetworkGraph;
