import React, { useState } from 'react';
import { Play, Pause, RotateCcw, Monitor, Smartphone, Tablet, Code, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Demo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentView, setCurrentView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showCode, setShowCode] = useState(false);

  const demoSteps = [
    {
      title: 'Interface utilisateur moderne',
      description: 'Design responsive avec Tailwind CSS',
      duration: '0:00 - 0:15'
    },
    {
      title: 'Navigation fluide',
      description: 'Menu responsive avec animations',
      duration: '0:15 - 0:30'
    },
    {
      title: 'Formulaires interactifs',
      description: 'Validation en temps réel',
      duration: '0:30 - 0:45'
    },
    {
      title: 'Performance optimisée',
      description: 'Chargement rapide et smooth',
      duration: '0:45 - 1:00'
    }
  ];

  const codeExample = `// Exemple de composant React moderne
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ModernComponent: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">
        Composant Moderne
      </h3>
      <button
        onClick={() => setIsActive(!isActive)}
        className="bg-indigo-600 text-white px-6 py-2 
                   rounded-lg hover:bg-indigo-700 
                   transition-all duration-200"
      >
        {isActive ? <CheckCircle /> : <ArrowRight />}
        {isActive ? 'Activé' : 'Activer'}
      </button>
    </div>
  );
};`;

  const viewportSizes = {
    desktop: 'w-full h-96',
    tablet: 'w-3/4 h-80 mx-auto',
    mobile: 'w-80 h-96 mx-auto'
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Démonstration interactive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les fonctionnalités de notre plateforme à travers cette démo interactive.
            Testez l'interface sur différents appareils et explorez le code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Demo Controls */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-6">Contrôles</h3>
              
              {/* Play Controls */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-3 rounded-lg transition-colors ${
                      isPlaying ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                    }`}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>
                  <button className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200">
                    <RotateCcw className="w-5 h-5" />
                  </button>
                </div>
                <div className="text-sm text-gray-600">
                  {isPlaying ? 'Démo en cours...' : 'Cliquez pour démarrer'}
                </div>
              </div>

              {/* Viewport Controls */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Aperçu</h4>
                <div className="space-y-2">
                  {[
                    { key: 'desktop', icon: Monitor, label: 'Desktop' },
                    { key: 'tablet', icon: Tablet, label: 'Tablette' },
                    { key: 'mobile', icon: Smartphone, label: 'Mobile' }
                  ].map(({ key, icon: Icon, label }) => (
                    <button
                      key={key}
                      onClick={() => setCurrentView(key as any)}
                      className={`w-full flex items-center space-x-2 p-2 rounded-lg transition-colors ${
                        currentView === key
                          ? 'bg-indigo-100 text-indigo-600'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle */}
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Mode</h4>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowCode(false)}
                    className={`flex-1 flex items-center justify-center space-x-1 p-2 rounded-lg transition-colors ${
                      !showCode
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>Aperçu</span>
                  </button>
                  <button
                    onClick={() => setShowCode(true)}
                    className={`flex-1 flex items-center justify-center space-x-1 p-2 rounded-lg transition-colors ${
                      showCode
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'hover:bg-gray-100 text-gray-600'
                    }`}
                  >
                    <Code className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Demo Header */}
              <div className="bg-gray-100 px-6 py-4 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-600 ml-4">
                      modernapp-demo.com
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentView === 'desktop' && '1920x1080'}
                    {currentView === 'tablet' && '768x1024'}
                    {currentView === 'mobile' && '375x667'}
                  </div>
                </div>
              </div>

              {/* Demo Viewport */}
              <div className="p-6">
                {showCode ? (
                  <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{codeExample}</pre>
                  </div>
                ) : (
                  <div className={`transition-all duration-300 ${viewportSizes[currentView]}`}>
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 h-full rounded-lg p-8 overflow-hidden">
                      {/* Mini App Preview */}
                      <div className="h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-2xl font-bold text-gray-900">ModernApp</h2>
                          <div className="flex space-x-2">
                            <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
                            <div className="w-8 h-8 bg-purple-600 rounded-lg"></div>
                          </div>
                        </div>
                        
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="w-full h-3 bg-gray-200 rounded mb-3"></div>
                            <div className="w-3/4 h-3 bg-gray-200 rounded mb-3"></div>
                            <div className="w-1/2 h-8 bg-indigo-600 rounded"></div>
                          </div>
                          <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="w-full h-3 bg-gray-200 rounded mb-3"></div>
                            <div className="w-2/3 h-3 bg-gray-200 rounded mb-3"></div>
                            <div className="w-1/3 h-8 bg-purple-600 rounded"></div>
                          </div>
                        </div>
                        
                        {isPlaying && (
                          <div className="absolute inset-0 bg-indigo-600 bg-opacity-10 flex items-center justify-center">
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                              <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">Démo en cours...</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Demo Steps */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Étapes de la démonstration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-indigo-600 font-semibold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                <span className="text-xs text-gray-500">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Prêt à créer votre application ?</h3>
            <p className="mb-6 opacity-90">
              Commencez dès maintenant avec notre plateforme et créez des expériences extraordinaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/getting-started"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Commencer maintenant
              </Link>
              <Link
                to="/"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;