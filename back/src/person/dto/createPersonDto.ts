import { IsNotEmpty } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonDto {
  @Field()
  @IsNotEmpty()
  readonly firstName: string;

  @Field()
  @IsNotEmpty()
  readonly lastName: string;

  @Field()
  @IsNotEmpty()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  readonly phoneNumber: string;
}
