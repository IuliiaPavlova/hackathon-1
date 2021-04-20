/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GET_PLANETS_QUERY = gql`
  query getPlanets {
  getPlanets {
    name
    climate
    diameter
    gravity
    population
    orbital_period
    surface_water
    terrain
  }
}
`;
