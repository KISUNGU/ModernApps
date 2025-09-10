import React from 'react';
import { Code, Smartphone, Globe, Database, Palette, BarChart } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Applications web modernes et performantes avec les dernières technologies.',
      features: ['React & TypeScript', 'API REST', 'Architecture scalable']
    },
    {
      icon: Smartphone,
      title: 'Applications Mobile',
      description: 'Apps natives et cross-platform pour iOS et Android.',
      features: ['React Native', 'Flutter', 'Interface intuitive']
    },
    {
      icon: Globe,
      title: 'Solutions Cloud',
      description: 'Infrastructure cloud sécurisée et évolutive pour vos applications.',
      features: ['AWS & Azure', 'DevOps', 'Monitoring 24/7']
    },
    {
      icon: Database,
      title: 'Gestion de Données',
      description: 'Solutions de base de données optimisées et sécurisées.',
      features: ['PostgreSQL', 'MongoDB', 'Analytics avancés']
    },
    {
      icon: Palette,
      title: 'Design UX/UI',
      description: 'Interfaces utilisateur élégantes et expériences optimisées.',
      features: ['Design System', 'Prototypage', 'Tests utilisateurs']
    },
    {
      icon: BarChart,
      title: 'Analytics & BI',
      description: 'Tableaux de bord et analyses pour piloter votre activité.',
      features: ['Dashboards', 'KPI tracking', 'Rapports automatisés']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de services pour accompagner votre transformation digitale 
            et faire croître votre entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-indigo-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200">
                En savoir plus →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;