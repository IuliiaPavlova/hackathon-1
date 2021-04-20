import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { GET_PLANETS_QUERY } from '../queries/getPlanets';

const Planets = () => {
  const { data, loading, error } = useQuery(GET_PLANETS_QUERY);
  const planets = data?.getPlanets;
  if (loading) return <p>Almost there...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <div>
      <h1>Planets</h1>
      {/* <pre>
        {JSON.stringify(planets, null, ' ')}
      </pre> */}
      {planets.map((planet) => (
        <ul key={planet.name}>
          <li>
            {planet.name}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Planets;
