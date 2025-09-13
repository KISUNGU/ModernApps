import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Edit, Save, RefreshCw, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ModifyNeeds: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('project');
  const [isModified, setIsModified] = useState(false);
  const [formData, setFormData] = useState({
    projectType: 'ecommerce',
    features: ['auth', 'payment', 'cms'],
    design: 'modern',
    timeline: 'normal',
    budget: 'business',
    contact: {
      name: 'Jean Dupont',
      email: 'jean@example.com',
      company: 'Ma Société',
      phone: '+33 1 23 45 67 89'
    }
  });

  const sections = [
    { id: 'project', name: 'Type de projet', icon: '🏗️' },
    { id: 'features', name: 'Fonctionnalités', icon: '⚡' },
    { id: 'design', name: 'Design', icon: '🎨' },
    { id: 'timeline', name: 'Délai', icon: '⏰' },
    { id: 'budget', name: 'Budget', icon: '💰' },
    { id: 'contact', name: 'Contact', icon: '👤' }
  ];

  const projectTypes = [
    { id: 'ecommerce', name: 'E-commerce', icon: '🛒' },
    { id: 'corporate', name: 'Site Corporate', icon: '🏢' },
    { id: 'saas', name: 'Application SaaS', icon: '☁️' },
    { id: 'portfolio', name: 'Portfolio', icon: '🎨' }
  ];

  const features = [
    { id: 'auth', name: 'Authentification' },
    { id: 'payment', name: 'Paiement en ligne' },
    { id: 'cms', name: 'Gestion de contenu' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'api', name: 'API REST' },
    { id: 'mobile', name: 'Version mobile' }
  ];

  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
    setIsModified(true);
  };

  const handleFeatureToggle = (featureId: string) => {
    const newFeatures = formData.features.includes(featureId)
      ? formData.features.filter(f => f !== featureId)
      : [...formData.features, featureId];
    handleChange('features', newFeatures);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'project':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Type de projet</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => handleChange('projectType', type.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    formData.projectType === type.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{type.icon}</span>
                    <span className="font-medium">{type.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fonctionnalités</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  onClick={() => handleFeatureToggle(feature.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    formData.features.includes(feature.id)
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <span className="font-medium">{feature.name}</span>
                  {formData.features.includes(feature.id) && (
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'design':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Style de design</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'modern', name: 'Moderne & Minimaliste' },
                { id: 'corporate', name: 'Corporate & Professionnel' },
                { id: 'creative', name: 'Créatif & Artistique' },
                { id: 'ecommerce', name: 'E-commerce Optimisé' }
              ].map((style) => (
                <div
                  key={style.id}
                  onClick={() => handleChange('design', style.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    formData.design === style.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <span className="font-medium">{style.name}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'timeline':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Délai souhaité</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'urgent', name: '1-2 semaines', note: '+50% urgence' },
                { id: 'normal', name: '3-4 semaines', note: 'Délai standard' },
                { id: 'flexible', name: '5-8 semaines', note: '-20% économie' }
              ].map((timeline) => (
                <div
                  key={timeline.id}
                  onClick={() => handleChange('timeline', timeline.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    formData.timeline === timeline.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="font-medium mb-1">{timeline.name}</div>
                  <div className="text-sm text-gray-600">{timeline.note}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'budget':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Budget approximatif</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'startup', name: '2,000€ - 5,000€', desc: 'Startups et petites entreprises' },
                { id: 'business', name: '5,000€ - 15,000€', desc: 'Entreprises en croissance' },
                { id: 'enterprise', name: '15,000€ - 50,000€', desc: 'Projets complexes' },
                { id: 'custom', name: 'Budget personnalisé', desc: 'Besoins spécifiques' }
              ].map((budget) => (
                <div
                  key={budget.id}
                  onClick={() => handleChange('budget', budget.id)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    formData.budget === budget.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="font-medium mb-1">{budget.name}</div>
                  <div className="text-sm text-gray-600">{budget.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input
                  type="text"
                  value={formData.contact.name}
                  onChange={(e) => handleChange('contact', {...formData.contact, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.contact.email}
                  onChange={(e) => handleChange('contact', {...formData.contact, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <input
                  type="text"
                  value={formData.contact.company}
                  onChange={(e) => handleChange('contact', {...formData.contact, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                <input
                  type="tel"
                  value={formData.contact.phone}
                  onChange={(e) => handleChange('contact', {...formData.contact, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Edit className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Modifier vos besoins</h1>
          <p className="text-xl text-gray-600">Ajustez votre configuration pour un devis actualisé</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-6">Sections</h3>
              <div className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setCurrentSection(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ${
                      currentSection === section.id
                        ? 'bg-indigo-50 text-indigo-600 border-l-4 border-indigo-600'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span className="font-medium">{section.name}</span>
                  </button>
                ))}
              </div>

              {isModified && (
                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center space-x-2 text-orange-800">
                    <RefreshCw className="w-4 h-4" />
                    <span className="text-sm font-medium">Modifications détectées</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {renderSection()}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                disabled={!isModified}
                className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-300"
              >
                <Save className="w-5 h-5" />
                <span>Générer nouveau devis</span>
              </button>
              <Link
                to="/app-builder"
                className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Retour au configurateur</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Résumé de votre configuration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Type de projet</h4>
              <p className="text-gray-600">{projectTypes.find(p => p.id === formData.projectType)?.name}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Fonctionnalités</h4>
              <p className="text-gray-600">{formData.features.length} sélectionnées</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Budget</h4>
              <p className="text-gray-600">
                {formData.budget === 'startup' && '2,000€ - 5,000€'}
                {formData.budget === 'business' && '5,000€ - 15,000€'}
                {formData.budget === 'enterprise' && '15,000€ - 50,000€'}
                {formData.budget === 'custom' && 'Personnalisé'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModifyNeeds;