import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class UpdatePersonDto {
  @Field({ nullable: true }) 
  @IsOptional()
  readonly firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  readonly lastName?: string;

  @Field({ nullable: true }) 
  @IsOptional()
  readonly email?: string;

  @Field({ nullable: true }) 
  @IsOptional()
  readonly phoneNumber?: string;
}