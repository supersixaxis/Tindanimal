import { gql, useQuery } from '@apollo/client';
import { GET_PAGINATED_ANIMALS } from '../graphql/queries';
import Link from 'next/link';
import { useState } from 'react';
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
  const [page, setPage] = useState(1);
  const limit = 10;
  const { loading, error, data } = useQuery(GET_PAGINATED_ANIMALS, {
    variables: { page, limit },
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;
  
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 my-8">
        {data.getPaginatedAnimals.map((animal) => (
          <AnimalCard key={animal.animalId} animal={animal} />
        ))}
      </div>

      <div className="flex justify-between items-center w-full max-w-md my-4">
        <button
          className={`px-4 py-2 bg-green-500 text-white rounded ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
          }`}
          onClick={handlePreviousPage}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="text-lg font-bold text-green-700">Page {page}</span>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnimalList;