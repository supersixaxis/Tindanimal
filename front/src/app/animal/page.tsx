'use client';
import { useSearchParams } from 'next/navigation';
import { useQuery } from '@apollo/client';
import { GET_ANIMAL } from '../../graphql/queries';
import Navbar from '@/components/navBar';

const AnimalDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');  
  console.log('Animal ID:', id);

  const { loading, error, data } = useQuery(GET_ANIMAL, {
    variables: { id: id || '' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const animal = data.getAnimal; 

  return (
    <div> 
      <Navbar />
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-green-200 via-white to-green-50 p-8">
        <div className="bg-white shadow-lg rounded-lg p-8 m-4 border border-green-300 w-full max-w-md">
          <h1 className="text-3xl font-bold text-green-700 mb-4">{animal.name}</h1>
          <p className="text-lg text-gray-700"><strong>Species:</strong> {animal.species}</p>
          <p className="text-lg text-gray-700"><strong>Breed:</strong> {animal.breed}</p>
          <p className="text-lg text-gray-700"><strong>Color:</strong> {animal.color}</p>
          <p className="text-lg text-gray-700"><strong>Weight:</strong> {animal.weight} kg</p>
          <p className="text-lg text-gray-700"><strong>Date of Birth:</strong> {animal.dateOfBirth}</p>
          <p className="text-lg text-gray-700"><strong>Owner ID:</strong> {animal.ownerId}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetails;
