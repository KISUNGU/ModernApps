import React from 'react';
import { Users, Target, Award, TrendingUp, Rocket, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Clients satisfaits', value: '10,000+' },
    { icon: Target, label: 'Projets réalisés', value: '500+' },
    { icon: Award, label: 'Prix remportés', value: '25+' },
    { icon: TrendingUp, label: 'Croissance annuelle', value: '150%' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 text-sm font-medium mb-6">
            <Heart className="w-4 h-4 mr-2 text-red-500" />
            Notre histoire
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            À propos de nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une équipe de <span className="font-semibold text-indigo-600">visionnaires</span> et 
            <span className="font-semibold text-purple-600"> innovateurs</span> dédiée à révolutionner 
            l'expérience digitale mondiale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-indigo-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Notre mission
              </h3>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6"></div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Depuis notre création en <span className="font-semibold">2019</span>, nous avons révolutionné 
              l'industrie tech avec des solutions qui anticipent les besoins de demain. Notre approche 
              <span className="font-semibold text-indigo-600"> human-centric</span> nous permet de créer 
              des expériences qui touchent plus de <span className="font-semibold text-purple-600">10 millions</span> 
              d'utilisateurs quotidiennement.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              Chaque ligne de code, chaque pixel, chaque interaction est pensée pour créer un impact 
              positif et durable dans la vie de nos utilisateurs.
            </p>
            
            {/* Mission Points */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                <span className="text-gray-700">Innovation constante et recherche de l'excellence</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span className="text-gray-700">Impact positif sur la société et l'environnement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                <span className="text-gray-700">Accessibilité et inclusion pour tous</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Hero Image Placeholder with Modern Design */}
            <div className="relative aspect-square bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 rounded-3xl p-8 overflow-hidden">
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl opacity-80 animate-float"></div>
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-60 animate-float animation-delay-1000"></div>
              <div className="absolute top-1/3 left-8 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-lg opacity-70 animate-float animation-delay-2000"></div>
              
              {/* Central Content */}
              <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                  <Globe className="w-16 h-16 text-white animate-spin-slow" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Impact Global</h4>
                <p className="text-gray-600 text-lg">Présents sur 6 continents</p>
                <div className="mt-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse animation-delay-1000"></div>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Nos valeurs fondamentales</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Passion</h4>
              <p className="text-white/90">Nous aimons ce que nous faisons et cela se ressent dans chaque projet.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Excellence</h4>
              <p className="text-white/90">Nous visons toujours la perfection dans tout ce que nous entreprenons.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p className="text-white/90">Ensemble, nous créons des solutions qui dépassent les attentes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
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