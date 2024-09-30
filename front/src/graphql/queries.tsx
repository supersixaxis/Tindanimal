import { gql } from '@apollo/client';

export const GET_PERSONS = gql`
  query {
    getAllPersons {
      userId
      firstName
      lastName
      email
    }
  }
`;

export const GET_PERSON = gql`
  query GetPerson($id: String!) {
    getPerson(id: $id) {
      userId
      firstName
      lastName
      email
      phoneNumber
    }
  }
`;
export const GET_ANIMALS = gql`
  query {
    getAllAnimals {
      animalId
      name
      dateOfBirth
      species
      breed
      color
      weight
      ownerId
    }
  }
`;

export const GET_ANIMAL = gql`
  query GetAnimal($id: String!) {
    getAnimal(id: $id) {
      animalId
      name
      dateOfBirth
      species
      breed
      color
      weight
      ownerId
    }
  }
`;


export const GET_ANIMAL_STATISTICS = gql`
  query GetAnimalStatistics {
    oldestAnimal {
      name
      dateOfBirth
    }
    mostRepresentedSpecies {
      species
      count
    }
    ownerWithMostAnimals {
      owner {
        id
        name
        animalCount
      }
    }
    ownerWithMostCats {
      owner {
        id
        name
        catCount
      }
    }
    heaviestAnimal {
      name
      weight
      owner {
        name
      }
    }
    heaviestGroup {
      owner {
        name
        totalWeight
      }
    }
  }
`;