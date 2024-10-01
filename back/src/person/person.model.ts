import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Animal } from '../animal/animal.model'; 

@ObjectType()
export class Person {
  @Field(() => Int)
  userId: number;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field(() => [Animal], { nullable: 'itemsAndList' })
  animals?: Animal[];
}