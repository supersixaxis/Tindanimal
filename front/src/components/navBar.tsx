import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">Tindanimal</h1>
          <div className="space-x-4">
            <Link href="/home" className="text-green-700 hover:text-green-500">
              Accueil
            </Link>
            <Link href="/animals" className="text-green-700 hover:text-green-500">
              Animaux
            </Link>
            <Link href="/statistics" className="text-green-700 hover:text-green-500">
              Statistiques
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
