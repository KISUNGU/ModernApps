import React from 'react';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Clients satisfaits', value: '10,000+' },
    { icon: Target, label: 'Projets réalisés', value: '500+' },
    { icon: Award, label: 'Prix remportés', value: '25+' },
    { icon: TrendingUp, label: 'Croissance annuelle', value: '150%' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            À propos de nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes une équipe passionnée dédiée à créer des solutions digitales 
            qui transforment la façon dont les entreprises interagissent avec leurs clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Notre mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Depuis notre création, nous nous efforçons de repousser les limites de l'innovation 
              technologique. Notre approche centrée sur l'utilisateur nous permet de créer des 
              expériences digitales qui non seulement répondent aux besoins actuels, mais 
              anticipent également les défis de demain.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Chaque projet est une opportunité de démontrer notre expertise technique et notre 
              créativité, en livrant des solutions qui dépassent les attentes de nos clients.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h4>
                <p className="text-gray-600">Notre engagement envers la qualité</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;