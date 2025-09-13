import React, { useState } from 'react';
import { CheckCircle, CreditCard, Calendar, FileText, Shield, ArrowRight, Clock, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcceptQuote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    paymentMethod: '',
    billingInfo: {
      company: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      vatNumber: ''
    },
    projectDetails: {
      startDate: '',
      projectManager: '',
      communicationPreference: '',
      additionalRequirements: ''
    },
    contractAccepted: false
  });

  const totalSteps = 3;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Méthode de paiement</h2>
              <p className="text-gray-600">Choisissez votre mode de règlement préféré</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                onClick={() => setFormData({...formData, paymentMethod: 'card'})}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === 'card'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <CreditCard className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carte bancaire</h3>
                <p className="text-gray-600 mb-4">Paiement sécurisé par Stripe</p>
                <div className="flex items-center text-sm text-green-600">
                  <Shield className="w-4 h-4 mr-1" />
                  Sécurisé SSL
                </div>
              </div>

              <div
                onClick={() => setFormData({...formData, paymentMethod: 'transfer'})}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  formData.paymentMethod === 'transfer'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <FileText className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Virement bancaire</h3>
                <p className="text-gray-600 mb-4">Paiement en 30% / 70%</p>
                <div className="flex items-center text-sm text-blue-600">
                  <Calendar className="w-4 h-4 mr-1" />
                  Délai 2-3 jours
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Conditions de paiement</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• 30% à la signature du contrat</li>
                <li>• 40% à mi-parcours du développement</li>
                <li>• 30% à la livraison finale</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Informations de facturation</h2>
              <p className="text-gray-600">Renseignez vos coordonnées pour la facturation</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise *</label>
                <input
                  type="text"
                  required
                  value={formData.billingInfo.company}
                  onChange={(e) => setFormData({
                    ...formData,
                    billingInfo: {...formData.billingInfo, company: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Nom de l'entreprise"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Numéro de TVA</label>
                <input
                  type="text"
                  value={formData.billingInfo.vatNumber}
                  onChange={(e) => setFormData({
                    ...formData,
                    billingInfo: {...formData.billingInfo, vatNumber: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="FR12345678901"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse *</label>
                <input
                  type="text"
                  required
                  value={formData.billingInfo.address}
                  onChange={(e) => setFormData({
                    ...formData,
                    billingInfo: {...formData.billingInfo, address: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Adresse complète"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                <input
                  type="text"
                  required
                  value={formData.billingInfo.city}
                  onChange={(e) => setFormData({
                    ...formData,
                    billingInfo: {...formData.billingInfo, city: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Ville"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Code postal *</label>
                <input
                  type="text"
                  required
                  value={formData.billingInfo.postalCode}
                  onChange={(e) => setFormData({
                    ...formData,
                    billingInfo: {...formData.billingInfo, postalCode: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="75001"
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Détails du projet</h2>
              <p className="text-gray-600">Finalisons les derniers détails</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date de début souhaitée</label>
                <input
                  type="date"
                  value={formData.projectDetails.startDate}
                  onChange={(e) => setFormData({
                    ...formData,
                    projectDetails: {...formData.projectDetails, startDate: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Chef de projet préféré</label>
                <select
                  value={formData.projectDetails.projectManager}
                  onChange={(e) => setFormData({
                    ...formData,
                    projectDetails: {...formData.projectDetails, projectManager: e.target.value}
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Assignation automatique</option>
                  <option value="sarah">Sarah Martin - Senior</option>
                  <option value="thomas">Thomas Dubois - Expert</option>
                  <option value="marie">Marie Leroy - Lead</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Communication préférée</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Email', 'Slack', 'Teams'].map((method) => (
                    <label key={method} className="flex items-center">
                      <input
                        type="radio"
                        name="communication"
                        value={method.toLowerCase()}
                        checked={formData.projectDetails.communicationPreference === method.toLowerCase()}
                        onChange={(e) => setFormData({
                          ...formData,
                          projectDetails: {...formData.projectDetails, communicationPreference: e.target.value}
                        })}
                        className="mr-2"
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Exigences supplémentaires</label>
                <textarea
                  value={formData.projectDetails.additionalRequirements}
                  onChange={(e) => setFormData({
                    ...formData,
                    projectDetails: {...formData.projectDetails, additionalRequirements: e.target.value}
                  })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  placeholder="Détails supplémentaires, contraintes techniques, préférences..."
                />
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.contractAccepted}
                  onChange={(e) => setFormData({...formData, contractAccepted: e.target.checked})}
                  className="mt-1"
                />
                <div className="text-sm text-gray-700">
                  <span className="font-medium">J'accepte les conditions générales</span> et confirme que toutes les informations fournies sont exactes. Je comprends que ce devis est valable 30 jours.
                </div>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Finaliser votre commande</h1>
          <p className="text-xl text-gray-600">Quelques étapes pour démarrer votre projet</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-500">Étape {currentStep} sur {totalSteps}</span>
            <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}% complété</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-500"
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
            <span>Précédent</span>
          </button>

          {currentStep === totalSteps ? (
            <button
              disabled={!formData.contractAccepted}
              className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:from-green-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 transition-all duration-200"
            >
              <span>Confirmer la commande</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
            >
              <span>Suivant</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Démarrage rapide</h4>
            <p className="text-sm text-gray-600">Projet lancé sous 48h</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Équipe dédiée</h4>
            <p className="text-sm text-gray-600">Experts assignés</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow-sm">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <h4 className="font-semibold text-gray-900">Satisfaction garantie</h4>
            <p className="text-sm text-gray-600">Révisions illimitées</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/app-builder" className="text-indigo-600 hover:text-indigo-700 font-medium">
            ← Retour au configurateur
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcceptQuote;