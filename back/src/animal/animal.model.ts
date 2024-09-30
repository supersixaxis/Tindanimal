import { ObjectType, Field, Int } from '@nestjs/graphql';

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
  @Field()
  ownerId: number;
}
