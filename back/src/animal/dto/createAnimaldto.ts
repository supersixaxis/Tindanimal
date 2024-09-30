import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
@InputType()
export class CreateAnimalDto {
  @Field()
  @IsNotEmpty()
  readonly name: string;
  @Field()
  @IsNotEmpty()
  readonly dateOfBirth: string;
  @Field()
  @IsNotEmpty()
  readonly species: string;
  @Field()
  @IsNotEmpty()
  readonly breed: string;
  @Field()
  @IsNotEmpty()
  readonly color: string;
  @Field()
  @IsNotEmpty()
  readonly weight: number;
  @Field()
  @IsNotEmpty()
  readonly ownerId: number;
}
