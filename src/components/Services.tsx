import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web révolutionnaires avec IA intégrée et performance exceptionnelle.',
      features: ['React & TypeScript', 'API REST', 'Architecture scalable'],
      price: 'À partir de 2,500€',
      popular: false,
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Apps mobiles intelligentes avec expérience utilisateur immersive.',
      features: ['React Native', 'Flutter', 'Interface intuitive'],
      price: 'À partir de 3,500€',
      popular: true,
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Globe,
      title: 'Solutions Cloud',
      description: 'Infrastructure cloud de nouvelle génération avec IA prédictive.',
      features: ['AWS & Azure', 'DevOps', 'Monitoring 24/7'],
      price: 'À partir de 1,800€',
      popular: false,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Database,
      title: 'Gestion de Données',
      description: 'Big Data et analytics avec machine learning intégré.',
      features: ['PostgreSQL', 'MongoDB', 'Analytics avancés'],
      price: 'À partir de 2,200€',
      popular: false,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: Palette,
      title: 'Design UX/UI',
      description: 'Design révolutionnaire avec psychologie comportementale.',
      features: ['Design System', 'Prototypage', 'Tests utilisateurs'],
      price: 'À partir de 1,500€',
      popular: false,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    },
    {
      icon: BarChart,
      title: 'Analytics & BI',
      description: 'Intelligence artificielle pour insights business révolutionnaires.',
      features: ['Dashboards', 'KPI tracking', 'Rapports automatisés'],
      price: 'À partir de 2,800€',
      popular: false,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm font-medium mb-6">
            <BarChart className="w-4 h-4 mr-2" />
            Solutions Premium
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions <span className="font-semibold text-indigo-600">sur-mesure</span> qui 
            transforment votre vision en <span className="font-semibold text-purple-600">succès digital</span> 
            avec un ROI garanti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border ${
                service.popular ? 'border-indigo-200 ring-2 ring-indigo-100' : 'border-gray-100'
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  POPULAIRE
                </div>
              )}
              
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-indigo-600 mb-3">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="group/btn w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105">
                  <span>Découvrir</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Projet sur-mesure ?</h3>
            <p className="text-xl mb-8 opacity-90">
              Discutons de vos besoins spécifiques et créons ensemble la solution parfaite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                Consultation gratuite
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Voir nos réalisations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;