import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AnimalService } from './animal.service';
import { Animal } from './animal.model';
import { CreateAnimalDto } from './dto/createAnimalDto';
import { UpdateAnimalDto } from './dto/updateAnimalDto';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Animal)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Query(() => [Animal])
  async getAllAnimals() {
    return this.animalService.getAllAnimals();
  }

  @Query(() => Animal)
  async getAnimal(@Args('id') id: string) {
    const animal = await this.animalService.getAnimalById(id);
    if (!animal) {
      throw new NotFoundException('Animal not found');
    }
    return animal;
  }

  @Mutation(() => Animal)
  async createAnimal(
    @Args('createAnimalDto') createAnimalDto: CreateAnimalDto,
  ) {
    return this.animalService.create(createAnimalDto);
  }

  @Mutation(() => Animal)
  async deleteAnimal(@Args('id') id: string) {
    const animalDeleted = await this.animalService.deleteAnimal(id);
    if (!animalDeleted) {
      throw new NotFoundException('Animal not found');
    }
    return animalDeleted;
  }

  @Mutation(() => Animal)
  async updateAnimal(
    @Args('id') id: string,
    @Args('updateAnimalDto') updateAnimalDto: UpdateAnimalDto,
  ) {
    const animalUpdated = await this.animalService.updateAnimal(
      id,
      updateAnimalDto,
    );
    if (!animalUpdated) {
      throw new NotFoundException('Animal not found');
    }
    return animalUpdated;
  }
}
