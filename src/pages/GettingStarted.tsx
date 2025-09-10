import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Play, Code, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const GettingStarted: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      title: 'Créer votre compte',
      description: 'Inscrivez-vous gratuitement en quelques secondes',
      content: (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
            <h4 className="font-semibold mb-4">Formulaire d'inscription</h4>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nom complet"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Email professionnel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              />
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Créer mon compte
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'Configurer votre projet',
      description: 'Définissez les paramètres de base de votre application',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Type de projet</h4>
              <select className="w-full p-2 border rounded">
                <option>Application Web</option>
                <option>Application Mobile</option>
                <option>API Backend</option>
                <option>Site Vitrine</option>
              </select>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold mb-2">Technologies</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  React + TypeScript
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Node.js + Express
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  PostgreSQL
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Déployer votre application',
      description: 'Mettez votre projet en ligne en un clic',
      content: (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-green-600 mr-2" />
              <h4 className="font-semibold">Déploiement automatique</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Votre application sera déployée automatiquement sur notre infrastructure cloud sécurisée.
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                Déployer maintenant
              </button>
              <span className="text-sm text-gray-500">~2 minutes</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (stepId < steps.length) {
      setCurrentStep(stepId + 1);
    }
  };

  const features = [
    {
      icon: Code,
      title: 'Code moderne',
      description: 'Technologies de pointe et bonnes pratiques'
    },
    {
      icon: Zap,
      title: 'Déploiement rapide',
      description: 'En ligne en quelques minutes'
    },
    {
      icon: Shield,
      title: 'Sécurité intégrée',
      description: 'Protection avancée par défaut'
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Commencez votre projet
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suivez ces étapes simples pour créer et déployer votre application en quelques minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Steps Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-6">Étapes</h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      currentStep === step.id
                        ? 'bg-indigo-50 border-l-4 border-indigo-600'
                        : completedSteps.includes(step.id)
                        ? 'bg-green-50'
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setCurrentStep(step.id)}
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                      completedSteps.includes(step.id)
                        ? 'bg-green-600 text-white'
                        : currentStep === step.id
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {completedSteps.includes(step.id) ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        step.id
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{step.title}</h4>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {steps.map((step) => (
                currentStep === step.id && (
                  <div key={step.id}>
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                      <div className="text-sm text-gray-500">
                        Étape {step.id} sur {steps.length}
                      </div>
                    </div>

                    <div className="mb-8">
                      {step.content}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                        disabled={currentStep === 1}
                        className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Précédent
                      </button>
                      <button
                        onClick={() => handleStepComplete(step.id)}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center space-x-2"
                      >
                        <span>{step.id === steps.length ? 'Terminer' : 'Suivant'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Pourquoi choisir notre plateforme ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
          >
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;