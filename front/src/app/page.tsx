export default function Connexion() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-200 via-white to-green-50 p-8">
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-green-700 drop-shadow-md">
          Bienvenue à <span className="text-green-900">Tindanimal</span>!
        </h1>
        <p className="text-lg text-gray-700">
          L’endroit idéal pour rencontrer des amoureux d’animaux comme vous.
        </p>
      </header>


      <div className="flex flex-col items-center gap-6 my-12">
        <a
          href="/home"
          className="bg-green-600 hover:bg-green-700 text-white text-xl px-8 py-4 rounded-full shadow-md transform hover:scale-105 transition duration-300"
        >
          Créer un compte
        </a>
        <a
          href="/home"
          className="bg-white hover:bg-gray-100 text-green-700 text-xl px-8 py-4 border border-green-600 rounded-full shadow-md transform hover:scale-105 transition duration-300"
        >
          Se connecter
        </a>
      </div>

      <footer className="absolute bottom-8 text-center text-gray-600 text-sm">
        <p>© 2024 Tindanimal. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
