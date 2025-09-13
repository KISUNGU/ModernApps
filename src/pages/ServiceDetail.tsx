import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Clock, Shield, Code, Smartphone, Globe, Database, Palette, BarChart } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams();

  const services = {
    'web-development': {
      icon: Code,
      title: 'Développement Web',
      subtitle: 'Applications web révolutionnaires avec IA intégrée',
      description: 'Créez des applications web modernes et performantes avec les dernières technologies. Notre équipe d\'experts développe des solutions sur-mesure qui répondent parfaitement à vos besoins business.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'À partir de 2,500€',
      duration: '2-6 semaines',
      features: [
        'React & TypeScript',
        'API REST sécurisées',
        'Architecture scalable',
        'Design responsive',
        'Optimisation SEO',
        'Tests automatisés',
        'Déploiement continu',
        'Support technique'
      ],
      process: [
        { step: 1, title: 'Analyse des besoins', desc: 'Étude approfondie de vos objectifs' },
        { step: 2, title: 'Conception UX/UI', desc: 'Design et prototypage interactif' },
        { step: 3, title: 'Développement', desc: 'Codage avec les meilleures pratiques' },
        { step: 4, title: 'Tests & Déploiement', desc: 'Validation et mise en production' }
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      testimonials: [
        { name: 'Marie Dubois', company: 'TechStart', rating: 5, text: 'Équipe exceptionnelle, résultat au-delà de nos attentes!' },
        { name: 'Pierre Martin', company: 'InnovCorp', rating: 5, text: 'Projet livré dans les temps avec une qualité irréprochable.' }
      ]
    },
    'mobile-development': {
      icon: Smartphone,
      title: 'Applications Mobile',
      subtitle: 'Apps mobiles intelligentes avec expérience immersive',
      description: 'Développement d\'applications mobiles natives et cross-platform pour iOS et Android. Interface intuitive, performance optimale et intégration parfaite avec vos systèmes existants.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'À partir de 3,500€',
      duration: '3-8 semaines',
      features: [
        'React Native & Flutter',
        'Interface native',
        'Push notifications',
        'Géolocalisation',
        'Paiements intégrés',
        'Mode hors-ligne',
        'Analytics avancés',
        'App Store optimization'
      ],
      process: [
        { step: 1, title: 'Stratégie mobile', desc: 'Définition de la stratégie et des plateformes' },
        { step: 2, title: 'Design mobile-first', desc: 'Interface optimisée pour mobile' },
        { step: 3, title: 'Développement natif', desc: 'Code optimisé pour chaque plateforme' },
        { step: 4, title: 'Publication', desc: 'Soumission aux stores et suivi' }
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      testimonials: [
        { name: 'Sophie Laurent', company: 'MobileFirst', rating: 5, text: 'App mobile parfaite, nos utilisateurs adorent!' },
        { name: 'Thomas Leroy', company: 'StartupMobile', rating: 5, text: 'Développement rapide et qualité professionnelle.' }
      ]
    },
    'cloud-solutions': {
      icon: Globe,
      title: 'Solutions Cloud',
      subtitle: 'Infrastructure cloud de nouvelle génération avec IA prédictive',
      description: 'Migrez vers le cloud avec nos solutions sécurisées et scalables. Architecture moderne, monitoring 24/7 et optimisation continue pour une performance maximale.',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'À partir de 1,800€',
      duration: '1-4 semaines',
      features: [
        'AWS & Azure',
        'DevOps & CI/CD',
        'Monitoring 24/7',
        'Auto-scaling',
        'Sécurité avancée',
        'Backup automatique',
        'Load balancing',
        'Support technique'
      ],
      process: [
        { step: 1, title: 'Audit infrastructure', desc: 'Analyse de l\'existant et besoins' },
        { step: 2, title: 'Architecture cloud', desc: 'Conception de l\'infrastructure optimale' },
        { step: 3, title: 'Migration', desc: 'Transfert sécurisé vers le cloud' },
        { step: 4, title: 'Optimisation', desc: 'Monitoring et amélioration continue' }
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      testimonials: [
        { name: 'Jean Moreau', company: 'CloudTech', rating: 5, text: 'Migration cloud réussie, performance exceptionnelle!' },
        { name: 'Anne Petit', company: 'DataCorp', rating: 5, text: 'Infrastructure robuste et support réactif.' }
      ]
    },
    'data-management': {
      icon: Database,
      title: 'Gestion de Données',
      subtitle: 'Big Data et analytics avec machine learning intégré',
      description: 'Transformez vos données en insights actionables avec nos solutions de Big Data et d\'analytics. Machine learning, visualisation avancée et rapports automatisés.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'À partir de 2,200€',
      duration: '2-5 semaines',
      features: [
        'PostgreSQL & MongoDB',
        'Data warehousing',
        'ETL automatisé',
        'Machine Learning',
        'Visualisation avancée',
        'Rapports temps réel',
        'API de données',
        'Sécurité RGPD'
      ],
      process: [
        { step: 1, title: 'Audit des données', desc: 'Analyse des sources et qualité' },
        { step: 2, title: 'Architecture data', desc: 'Conception du pipeline de données' },
        { step: 3, title: 'Implémentation', desc: 'Mise en place des outils et processus' },
        { step: 4, title: 'Analytics', desc: 'Dashboards et insights business' }
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Python', 'Apache Spark', 'Tableau', 'TensorFlow'],
      testimonials: [
        { name: 'Marc Dubois', company: 'DataInsight', rating: 5, text: 'Nos données sont enfin exploitables efficacement!' },
        { name: 'Claire Martin', company: 'AnalyticsPro', rating: 5, text: 'Dashboards magnifiques et insights précieux.' }
      ]
    },
    'ux-ui-design': {
      icon: Palette,
      title: 'Design UX/UI',
      subtitle: 'Design révolutionnaire avec psychologie comportementale',
      description: 'Créez des expériences utilisateur exceptionnelles avec notre approche design thinking. Interface intuitive, tests utilisateurs et optimisation continue.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'À partir de 1,500€',
      duration: '1-3 semaines',
      features: [
        'Design System',
        'Prototypage interactif',
        'Tests utilisateurs',
        'Wireframing',
        'Design responsive',
        'Accessibilité',
        'Brand identity',
        'Style guide'
      ],
      process: [
        { step: 1, title: 'Recherche UX', desc: 'Étude des utilisateurs et concurrents' },
        { step: 2, title: 'Wireframing', desc: 'Structure et navigation' },
        { step: 3, title: 'Design UI', desc: 'Interface visuelle et interactions' },
        { step: 4, title: 'Tests & Itération', desc: 'Validation utilisateur et optimisation' }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      testimonials: [
        { name: 'Emma Leroy', company: 'DesignCorp', rating: 5, text: 'Design magnifique et expérience utilisateur parfaite!' },
        { name: 'Paul Moreau', company: 'UXStudio', rating: 5, text: 'Approche professionnelle et résultats impressionnants.' }
      ]
    },
    'analytics-bi': {
      icon: BarChart,
      title: 'Analytics & BI',
      subtitle: 'Intelligence artificielle pour insights business révolutionnaires',
      description: 'Transformez vos données en avantage concurrentiel avec nos solutions d\'analytics et de Business Intelligence. Dashboards interactifs, KPI automatisés et prédictions IA.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      price: 'À partir de 2,800€',
      duration: '2-6 semaines',
      features: [
        'Dashboards interactifs',
        'KPI tracking',
        'Rapports automatisés',
        'Prédictions IA',
        'Alertes temps réel',
        'Export multi-format',
        'API analytics',
        'Formation équipe'
      ],
      process: [
        { step: 1, title: 'Définition KPI', desc: 'Identification des métriques clés' },
        { step: 2, title: 'Collecte données', desc: 'Intégration des sources de données' },
        { step: 3, title: 'Dashboards', desc: 'Création des tableaux de bord' },
        { step: 4, title: 'IA & Prédictions', desc: 'Modèles prédictifs et insights' }
      ],
      technologies: ['Power BI', 'Tableau', 'Google Analytics', 'Python', 'R', 'TensorFlow'],
      testimonials: [
        { name: 'Julie Petit', company: 'BusinessIntel', rating: 5, text: 'Dashboards exceptionnels, insights très utiles!' },
        { name: 'Michel Leroy', company: 'DataDriven', rating: 5, text: 'ROI immédiat grâce aux analytics avancés.' }
      ]
    }
  };

  const service = services[serviceId as keyof typeof services];

  if (!service) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service non trouvé</h1>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <ServiceIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold">{service.title}</h1>
                  <p className="text-xl opacity-90">{service.subtitle}</p>
                </div>
              </div>
              <p className="text-lg opacity-90 mb-8">{service.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/app-builder"
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Commencer maintenant</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Demander un devis
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-indigo-600">{service.price}</div>
                <div className="text-sm text-gray-600">{service.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Ce qui est inclus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="w-6 h-6 text-green-500 mb-3" />
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Notre processus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies utilisées</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-200 font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Témoignages clients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Discutons de vos besoins et créons ensemble une solution sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/app-builder"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Configurer mon projet
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
              Consultation gratuite
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Users className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Projets réalisés</p>
          </div>
          <div className="p-6">
            <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Projets livrés à temps</p>
          </div>
          <div className="p-6">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p className="text-gray-600">Satisfaction client</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;