import { gql, useQuery } from '@apollo/client';
import { GET_ANIMALS } from '../graphql/queries';
import Link from 'next/link';

const AnimalCard = ({ animal }) => {
  return (
    <Link href={`/animal?id=${animal.animalId}`}>
      <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-green-300 transition-transform transform hover:scale-105 cursor-pointer">
        <h2 className="text-2xl font-bold text-green-700">{animal.name}</h2>
      </div>
    </Link>
  );
};

const AnimalList = () => {
  const { loading, error, data } = useQuery(GET_ANIMALS);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 my-8">
        {data.getAllAnimals.map((animal) => (
          <AnimalCard key={animal.animalId} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;