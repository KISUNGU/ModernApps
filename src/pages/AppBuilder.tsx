import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Zap, Code, Palette, Database, Globe, Smartphone, BarChart, Euro, Clock, Users, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  projectType: string;
  features: string[];
  design: string;
  timeline: string;
  budget: string;
  complexity: string;
  integrations: string[];
  hosting: string;
  maintenance: string;
  contact: {
    name: string;
    email: string;
    company: string;
    phone: string;
  };
}

const AppBuilder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    features: [],
    design: '',
    timeline: '',
    budget: '',
    complexity: '',
    integrations: [],
    hosting: '',
    maintenance: '',
    contact: {
      name: '',
      email: '',
      company: '',
      phone: ''
    }
  });
  const [isGeneratingQuote, setIsGeneratingQuote] = useState(false);
  const [quote, setQuote] = useState<any>(null);

  const totalSteps = 6;

  const projectTypes = [
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒', description: 'Boutique en ligne complète' },
    { id: 'corporate', name: 'Site Corporate', icon: '🏢', description: 'Site vitrine professionnel' },
    { id: 'saas', name: 'Application SaaS', icon: '☁️', description: 'Logiciel en tant que service' },
    { id: 'portfolio', name: 'Portfolio', icon: '🎨', description: 'Site personnel ou créatif' },
    { id: 'blog', name: 'Blog/Magazine', icon: '📝', description: 'Plateforme de contenu' },
    { id: 'marketplace', name: 'Marketplace', icon: '🏪', description: 'Plateforme multi-vendeurs' }
  ];

  const features = [
    { id: 'auth', name: 'Authentification utilisateur', icon: Shield },
    { id: 'payment', name: 'Paiement en ligne', icon: Euro },
    { id: 'cms', name: 'Gestion de contenu', icon: Code },
    { id: 'analytics', name: 'Analytics avancés', icon: BarChart },
    { id: 'api', name: 'API REST', icon: Database },
    { id: 'mobile', name: 'Version mobile', icon: Smartphone },
    { id: 'seo', name: 'Optimisation SEO', icon: Globe },
    { id: 'chat', name: 'Chat en direct', icon: Users }
  ];

  const designStyles = [
    { id: 'modern', name: 'Moderne & Minimaliste', preview: '🎯' },
    { id: 'corporate', name: 'Corporate & Professionnel', preview: '💼' },
    { id: 'creative', name: 'Créatif & Artistique', preview: '🎨' },
    { id: 'ecommerce', name: 'E-commerce Optimisé', preview: '🛍️' }
  ];

  const timelines = [
    { id: 'urgent', name: '1-2 semaines', multiplier: 1.5, icon: '⚡' },
    { id: 'normal', name: '3-4 semaines', multiplier: 1, icon: '📅' },
    { id: 'flexible', name: '5-8 semaines', multiplier: 0.8, icon: '🕐' }
  ];

  const budgetRanges = [
    { id: 'startup', name: '2,000€ - 5,000€', min: 2000, max: 5000 },
    { id: 'business', name: '5,000€ - 15,000€', min: 5000, max: 15000 },
    { id: 'enterprise', name: '15,000€ - 50,000€', min: 15000, max: 50000 },
    { id: 'custom', name: 'Budget personnalisé', min: 50000, max: 100000 }
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      generateQuote();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateQuote = () => {
    setIsGeneratingQuote(true);
    
    // Simulation de génération de devis
    setTimeout(() => {
      const basePrice = calculateBasePrice();
      const finalQuote = {
        basePrice,
        features: formData.features.length * 500,
        design: getDesignCost(),
        timeline: getTimelineCost(),
        total: basePrice + (formData.features.length * 500) + getDesignCost() + getTimelineCost(),
        deliveryTime: getDeliveryTime(),
        included: getIncludedServices()
      };
      
      setQuote(finalQuote);
      setIsGeneratingQuote(false);
      setCurrentStep(totalSteps + 1);
    }, 3000);
  };

  const calculateBasePrice = () => {
    const projectPrices = {
      ecommerce: 8000,
      corporate: 3000,
      saas: 15000,
      portfolio: 2000,
      blog: 2500,
      marketplace: 20000
    };
    return projectPrices[formData.projectType as keyof typeof projectPrices] || 5000;
  };

  const getDesignCost = () => {
    const designCosts = { modern: 1000, corporate: 800, creative: 1500, ecommerce: 1200 };
    return designCosts[formData.design as keyof typeof designCosts] || 1000;
  };

  const getTimelineCost = () => {
    const timeline = timelines.find(t => t.id === formData.timeline);
    return timeline ? (timeline.multiplier - 1) * 2000 : 0;
  };

  const getDeliveryTime = () => {
    const timeline = timelines.find(t => t.id === formData.timeline);
    return timeline?.name || '3-4 semaines';
  };

  const getIncludedServices = () => [
    'Design responsive',
    'Hébergement 1 an',
    'Support technique 3 mois',
    'Formation utilisateur',
    'Optimisation SEO de base',
    'Certificat SSL',
    'Sauvegardes automatiques'
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quel type d'application souhaitez-vous créer ?</h2>
              <p className="text-gray-600">Sélectionnez le type qui correspond le mieux à votre projet</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setFormData({...formData, projectType: type.id})}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    formData.projectType === type.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quelles fonctionnalités souhaitez-vous ?</h2>
              <p className="text-gray-600">Sélectionnez toutes les fonctionnalités dont vous avez besoin</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => {
                    const newFeatures = formData.features.includes(feature.id)
                      ? formData.features.filter(f => f !== feature.id)
                      : [...formData.features, feature.id];
                    setFormData({...formData, features: newFeatures});
                  }}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center space-x-3 ${
                    formData.features.includes(feature.id)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                  <span className="font-medium text-gray-900">{feature.name}</span>
                  {formData.features.includes(feature.id) && (
                    <CheckCircle className="w-5 h-5 text-indigo-600 ml-auto" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quel style de design préférez-vous ?</h2>
              <p className="text-gray-600">Choisissez le style qui correspond à votre image de marque</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {designStyles.map((style) => (
                <div
                  key={style.id}
                  onClick={() => setFormData({...formData, design: style.id})}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    formData.design === style.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="text-4xl mb-4">{style.preview}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{style.name}</h3>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quel est votre délai souhaité ?</h2>
              <p className="text-gray-600">Le délai influence le prix final</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelines.map((timeline) => (
                <div
                  key={timeline.id}
                  onClick={() => setFormData({...formData, timeline: timeline.id})}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    formData.timeline === timeline.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="text-4xl mb-4">{timeline.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{timeline.name}</h3>
                  {timeline.multiplier > 1 && (
                    <span className="text-orange-600 text-sm font-medium">+{((timeline.multiplier - 1) * 100).toFixed(0)}% urgence</span>
                  )}
                  {timeline.multiplier < 1 && (
                    <span className="text-green-600 text-sm font-medium">-{((1 - timeline.multiplier) * 100).toFixed(0)}% économie</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quel est votre budget approximatif ?</h2>
              <p className="text-gray-600">Cela nous aide à adapter notre proposition</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {budgetRanges.map((budget) => (
                <div
                  key={budget.id}
                  onClick={() => setFormData({...formData, budget: budget.id})}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    formData.budget === budget.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{budget.name}</h3>
                  <p className="text-gray-600">
                    {budget.id === 'startup' && 'Parfait pour les startups et petites entreprises'}
                    {budget.id === 'business' && 'Idéal pour les entreprises en croissance'}
                    {budget.id === 'enterprise' && 'Pour les projets complexes et entreprises'}
                    {budget.id === 'custom' && 'Projet sur-mesure avec besoins spécifiques'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vos informations de contact</h2>
              <p className="text-gray-600">Pour vous envoyer votre devis personnalisé</p>
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    required
                    value={formData.contact.name}
                    onChange={(e) => setFormData({
                      ...formData,
                      contact: {...formData.contact, name: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.contact.email}
                    onChange={(e) => setFormData({
                      ...formData,
                      contact: {...formData.contact, email: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                  <input
                    type="text"
                    value={formData.contact.company}
                    onChange={(e) => setFormData({
                      ...formData,
                      contact: {...formData.contact, company: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Nom de votre entreprise"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) => setFormData({
                      ...formData,
                      contact: {...formData.contact, phone: e.target.value}
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isGeneratingQuote) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Zap className="w-10 h-10 text-white animate-bounce" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Génération de votre devis...</h2>
          <p className="text-gray-600 mb-8">Notre IA analyse vos besoins pour créer une proposition sur-mesure</p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>
      </div>
    );
  }

  if (quote) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Votre devis personnalisé</h1>
            <p className="text-xl text-gray-600">Basé sur vos besoins spécifiques</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Projet {projectTypes.find(p => p.id === formData.projectType)?.name}</h2>
              <p className="opacity-90">Devis valable 30 jours</p>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Détail du devis</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Base projet</span>
                      <span className="font-semibold">{quote.basePrice.toLocaleString()}€</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Fonctionnalités ({formData.features.length})</span>
                      <span className="font-semibold">{quote.features.toLocaleString()}€</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-600">Design personnalisé</span>
                      <span className="font-semibold">{quote.design.toLocaleString()}€</span>
                    </div>
                    {quote.timeline !== 0 && (
                      <div className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-600">Ajustement délai</span>
                        <span className="font-semibold">{quote.timeline > 0 ? '+' : ''}{quote.timeline.toLocaleString()}€</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-indigo-600">{quote.total.toLocaleString()}€</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Inclus dans votre projet</h3>
                  <div className="space-y-3">
                    {quote.included.map((item: string, index: number) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-5 h-5 text-indigo-600" />
                      <span className="font-semibold text-indigo-900">Délai de livraison</span>
                    </div>
                    <p className="text-indigo-700">{quote.deliveryTime}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Link
                  to="/accept-quote"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Accepter le devis</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/modify-needs"
                  className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors duration-300"
                >
                  Modifier les besoins
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Créateur d'application automatique</h1>
            <span className="text-sm text-gray-500">Étape {currentStep} sur {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Précédent</span>
          </button>

          <button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !formData.projectType) ||
              (currentStep === 2 && formData.features.length === 0) ||
              (currentStep === 3 && !formData.design) ||
              (currentStep === 4 && !formData.timeline) ||
              (currentStep === 5 && !formData.budget) ||
              (currentStep === 6 && (!formData.contact.name || !formData.contact.email))
            }
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
          >
            <span>{currentStep === totalSteps ? 'Générer le devis' : 'Suivant'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppBuilder;