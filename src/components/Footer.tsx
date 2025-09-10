import React from 'react';
import { Settings, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const footerLinks = {
    'Produit': ['Fonctionnalités', 'Tarifs', 'Documentation', 'API'],
    'Entreprise': ['À propos', 'Blog', 'Carrières', 'Presse'],
    'Support': ['Centre d\'aide', 'Contact', 'Statut', 'Communauté'],
    'Légal': ['Confidentialité', 'Conditions', 'Cookies', 'Licences'],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Settings className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold">ModernApp</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Créons ensemble l'avenir du digital avec des solutions innovantes 
              et performantes qui transforment votre vision en réalité.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} ModernApp. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Fait avec ❤️ en France
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;