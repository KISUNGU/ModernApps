import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Users, Zap, Star, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const fullText = 'Créez des applications web modernes en quelques minutes';

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[textIndex]);
        setTextIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, fullText]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 animate-fade-in">
              <Zap className="w-4 h-4 text-yellow-500 mr-2 animate-bounce" />
              <span className="text-sm font-medium text-gray-700">Nouveau : Interface IA intégrée 🚀</span>
            </div>

            {/* Main Title with Typewriter Effect */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                {currentText}
                <span className="animate-pulse">|</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Plateforme tout-en-un pour développer, déployer et gérer vos projets web avec une simplicité inégalée.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-gray-600">4.9/5 (2,847 avis)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">50,000+ développeurs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Commencer maintenant
                <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/80 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-white border border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200">
                <Play className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Voir la démo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">&lt; 100ms</div>
                <div className="text-sm text-gray-600">Latence</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-fade-in-up" style={{animationDelay: '1s'}}>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Équipe de développeurs travaillant sur des projets web modernes"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-lg animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">En ligne</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg animate-fade-in-up" style={{animationDelay: '1.4s'}}>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-yellow-500 animate-bounce" />
                  <div>
                    <div className="text-lg font-bold text-gray-900">+127%</div>
                    <div className="text-xs text-gray-600">Performance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl opacity-50"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: CheckCircle, title: 'Déploiement instantané', desc: 'Mettez en ligne en un clic' },
              { icon: Zap, title: 'Performance optimale', desc: 'Chargement ultra-rapide' },
              { icon: Users, title: 'Collaboration facile', desc: 'Travaillez en équipe' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/80 transition-all duration-300 animate-fade-in-up" style={{animationDelay: `${1.6 + index * 0.2}s`}}>
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}