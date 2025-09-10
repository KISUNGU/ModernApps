import React from 'react';
import { ArrowRight, Sparkles, Zap, Shield, Star, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="font-medium">4.9/5</span>
              <span>(2,847 avis)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-green-500" />
              <span className="font-medium">50,000+</span>
              <span>utilisateurs actifs</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-blue-500" />
              <span className="font-medium">99.9%</span>
              <span>uptime</span>
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium mb-8 animate-bounce">
            <Sparkles className="w-4 h-4 mr-2" />
            🎉 Nouvelle version 2.0 disponible
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Créez des expériences
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x">
              {' '}extraordinaires
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Une plateforme révolutionnaire qui combine <span className="font-semibold text-indigo-600">IA avancée</span>, 
            <span className="font-semibold text-purple-600"> design moderne</span> et 
            <span className="font-semibold text-pink-600"> performance exceptionnelle</span> pour 
            transformer vos idées en réalité digitale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/getting-started"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              Commencer maintenant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/demo"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              Voir la démo
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mb-16">
            <p className="text-sm text-gray-500 mb-4">Utilisé par les meilleures entreprises</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">TECH CORP</div>
              <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">INNOVATE</div>
              <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">FUTURE CO</div>
              <div className="w-24 h-8 bg-gray-300 rounded flex items-center justify-center text-xs font-bold">DIGITAL+</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="group flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ultra Rapide</h3>
              <p className="text-gray-600 text-center">Performance optimisée avec les dernières technologies IA</p>
            </div>

            <div className="group flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sécurisé</h3>
              <p className="text-gray-600 text-center">Chiffrement de niveau militaire et conformité RGPD</p>
            </div>

            <div className="group flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovant</h3>
              <p className="text-gray-600 text-center">IA générative et interface adaptative révolutionnaire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;