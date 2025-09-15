import React from 'react';

const AppBuilder: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>🛠️ App Builder</h1>
      <p>Bienvenue dans l'interface de création d'application.</p>

      {/* Zone de construction */}
      <div style={{ border: '1px dashed #ccc', padding: '1rem', marginTop: '2rem' }}>
        <p>Glissez-déposez vos composants ici...</p>
      </div>

      {/* Boutons d'action */}
      <div style={{ marginTop: '2rem' }}>
        <button onClick={() => alert('Fonction de sauvegarde à implémenter')}>💾 Sauvegarder</button>
        <button onClick={() => alert('Fonction de prévisualisation à implémenter')} style={{ marginLeft: '1rem' }}>
          👁️ Prévisualiser
        </button>
      </div>
    </div>
  );
};

export default AppBuilder;
