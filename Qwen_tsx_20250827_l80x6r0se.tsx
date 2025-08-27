import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero */}
      <section className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 dark:text-white mb-4">
          KDo – Achetez, Vendez, Grandissez
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Une plateforme rapide, sécurisée, multilingue, conçue pour les Africains, par des Africains.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Acheter maintenant
          </Link>
          <Link to="/auth/signup?role=seller" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition">
            Ouvrir une boutique
          </Link>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 px-4">
        <SearchBar />
      </section>

      {/* Categories */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Catégories populaires</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {['Mode', 'Électronique', 'Artisanat', 'Agroalimentaire', 'Cosmétiques'].map(cat => (
            <div key={cat} className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-lg shadow min-w-40 text-center">
              {cat}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}