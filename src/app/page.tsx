import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-gray-900 text-white flex flex-col items-center p-8">
      
      {/* Cabeçalho */}
      <header className="mb-12 text-center">
        <h1 className="text-6xl font-bold text-purple-300">Oi, eu sou o João</h1>
      </header>

      {/* Conteúdo principal em grid */}
      <div className="bg-white text-black rounded-3xl p-8 max-w-4xl grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-2xl">
        
        {/* Seção de perfil */}
        <div className="col-span-1 flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-bold">Graham Hunt</h2>
          <p className="text-gray-600">Brand/Logo Designer</p>
        </div>

        {/* Seção de Linguagens */}
        <div className="col-span-1">
          <h3 className="text-lg font-bold mb-2">Languages</h3>
          <div className="space-y-2">
            <p className="flex justify-between">
              <span>English</span>
              <span className="bg-green-500 h-2 w-3/5 rounded-full"></span>
            </p>
            <p className="flex justify-between">
              <span>Spanish</span>
              <span className="bg-green-500 h-2 w-2/5 rounded-full"></span>
            </p>
            <p className="flex justify-between">
              <span>French</span>
              <span className="bg-green-500 h-2 w-1/4 rounded-full"></span>
            </p>
          </div>
        </div>

        {/* Seção de Educação */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold mb-2">Education</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-200 rounded-lg">
              <h4 className="text-md font-semibold">UX/UI - 2024</h4>
              <p className="text-sm text-gray-600">Nexland - Designing in Figma</p>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg">
              <h4 className="text-md font-semibold">Product Designer - 2022</h4>
              <p className="text-sm text-gray-600">Coursera - Research & Prototyping</p>
            </div>
          </div>
        </div>

        {/* Seção de Interesses */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <h3 className="text-lg font-bold mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            {['Branding', 'Typography', 'Logo', 'Photography', 'Social Networks'].map(interest => (
              <span key={interest} className="bg-gray-200 px-4 py-1 rounded-full text-sm">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Seção de Contato */}
        <div className="col-span-1 lg:col-span-3 text-center bg-black text-white p-6 rounded-lg">
          <h3 className="text-lg font-bold mb-2">Let's Chat!</h3>
          <p>I'm ready to work on exciting projects.</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
