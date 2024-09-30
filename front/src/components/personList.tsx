import { useQuery } from '@apollo/client';
import { GET_PERSONS } from '../graphql/queries';

import Link from 'next/link';

const PersonCard = ({ person }) => {
  return (
    <Link href={`/person?id=${person.userId}`}>
      <div className="bg-white shadow-lg rounded-lg p-6 m-4 border border-green-300 transition-transform transform hover:scale-105 cursor-pointer">
        <h2 className="text-2xl font-bold text-green-700">{`${person.firstName} ${person.lastName}`}</h2>
      </div>
    </Link>
  );
};

const PersonList = () => {
  const { loading, error, data } = useQuery(GET_PERSONS);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-4 my-8">
        {data.getAllPersons.map((person) => (
          <PersonCard key={person.userId} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PersonList;
