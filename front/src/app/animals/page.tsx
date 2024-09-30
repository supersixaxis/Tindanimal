'use client';
import AnimalList from '@/components/animalList';
import Navbar from '@/components/navBar';
export default function Home() {
  return (
    <div> 
    <Navbar />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-200 via-white to-green-50 p-8">
      <h1 className="text-3xl font-bold mb-4 text-green-700">Découvrez ces animaux...</h1>
      <AnimalList />
    </div>
    </div>
  );
}
