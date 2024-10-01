import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Person } from '../person/person.model';

@ObjectType()
export class Animal {
  @Field(() => Int)
  animalId: number;

  @Field()
  name: string;

  @Field()
  dateOfBirth: string;

  @Field()
  species: string;

  @Field()
  breed: string;

  @Field()
  color: string;

  @Field()
  weight: number;

  @Field(() => Int)
  ownerId: number;

  @Field(() => Person, { nullable: true })
  owner?: Person;
}
