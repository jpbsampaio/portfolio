'use client'

import NetworkGraph from '../app/components/NetworkGraph';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <NetworkGraph />
    </div>
  );
};

export default Home;
