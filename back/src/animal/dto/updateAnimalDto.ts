import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
@InputType()
export class UpdateAnimalDto {
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly name?: string;
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly dateOfBirth?: string;
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly species?: string;
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly breed?: string;
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly color?: string;
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly weight?: number;
  @Field({ nullable: true })
  @IsNotEmpty()
  readonly ownerId?: number;
}
