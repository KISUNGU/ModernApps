import React from 'react';
import { Target, Users, Globe, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Notre Histoire
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Propulser le Futur de la
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
              {' '}Création Digitale
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Nous sommes une équipe de passionnés, unis par une vision commune : rendre la technologie de pointe accessible et intuitive pour tous.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
          <div className="p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre Mission</h3>
            <p className="text-gray-600">
              Fournir des outils révolutionnaires qui inspirent la créativité et simplifient la réalisation de projets complexes.
            </p>
          </div>

          <div className="p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Notre Équipe</h3>
            <p className="text-gray-600">
              Composée d'experts en IA, design et développement, notre équipe est notre plus grand atout pour innover.
            </p>
          </div>

          <div className="p-8 bg-white/70 backdrop-blur-md rounded-xl shadow-lg border border-white/50 transform transition-transform duration-300 hover:scale-105">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Nos Valeurs</h3>
            <p className="text-gray-600">
              Innovation, Sécurité et Communauté sont les piliers qui guident chacune de nos actions.
            </p>
          </div>
        </div>

        {/* Photo Section - Placeholder for a team photo or illustration */}
        <div className="mt-20">
          <div className="w-full h-80 bg-gray-200 rounded-2xl shadow-xl flex items-center justify-center text-gray-500 font-medium text-lg border border-gray-300">
            [Image de l'équipe ou illustration de l'entreprise]
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;