'use client';
import { useSearchParams } from 'next/navigation';
import { gql, useQuery } from '@apollo/client';
import { GET_PERSON } from '../../graphql/queries';
import Navbar from '@/components/navBar';

const PersonDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');

  const { loading, error, data } = useQuery(GET_PERSON, {
    variables: { id: id || '' },
  });

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  const person = data.getPerson;

  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-green-200 via-white to-green-50 p-8">
      
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 border border-green-300 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 mb-4">{`${person.firstName} ${person.lastName}`}</h1>
        <p className="text-lg text-gray-700"><strong>Email:</strong> {person.email}</p>
        <p className="text-lg text-gray-700"><strong>Téléphone:</strong> {person.phoneNumber}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-green-700">Description</h2>
          <p className="text-gray-600 mt-2">Ajoutez ici d'autres détails que vous souhaitez afficher, comme l'adresse ou des notes.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PersonDetails;
