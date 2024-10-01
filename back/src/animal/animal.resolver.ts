import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
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
  @Query(() => [Animal])
  async getPaginatedAnimals(
    @Args('page', { type: () => Int, nullable: true }) page: number = 1,
    @Args('limit', { type: () => Int, nullable: true }) limit: number = 10,
  ) {
    const offset = (page - 1) * limit;
    return this.animalService.getPaginatedAnimals(offset, limit);
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
  @Query(() => Animal)
  async oldestAnimal() {
    return this.animalService.getOldestAnimal();
  }

  @Query(() => String)
  async mostRepresentedSpecies() {
    const result = await this.animalService.getMostRepresentedSpecies();
    if (result) {
      return `${result.species} (${result.count})`;
    }
    return 'No species found';
  }
  @Query(() => String)
  async ownerWithMostAnimals() {
    const result = await this.animalService.getOwnerWithMostAnimals();
    if (result) {
      return `Owner ID: ${result.ownerId} with ${result.animalCount} cats`;
    }
    return 'No owner found';
  }
  @Query(() => String)
  async ownerWithMostCats() {
    const result = await this.animalService.getOwnerWithMostCats();
    if (result) {
      return `Owner ID: ${result.ownerId} with ${result.catCount} cats`;
    }
    return 'No owner found';
  }
  @Query(() => String)
  async heaviestAnimal() {
    const result = await this.animalService.getHeaviestAnimal();
    if (result) {
      return `Owner ID: ${result.ownerId} owns the heaviest animal, ${result.animalName}, weighing ${result.weight}.`;
    }
    return 'No animals found';
  }
  @Query(() => String)
  async ownerWithHeaviestGroup() {
    const result = await this.animalService.getOwnerWithHeaviestGroup();
    if (result) {
      return `Owner ID: ${result.ownerId} owns the heaviest group of animals with a total weight of ${result.totalWeight}.`;
    }
    return 'No animals found';
  }
}
