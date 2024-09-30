import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/createAnimalDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAnimalDto } from './dto/updateAnimalDto';
import { Animal } from './animal.model';
@Injectable()
export class AnimalService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllAnimals(): Promise<Animal[]> {
    return await this.prismaService.animal.findMany();
  }
  async getAnimalById(id: string): Promise<Animal> {
    const animal = await this.prismaService.animal.findUnique({
      where: { animalId: Number(id) },
    });
    return animal;
  }
  async create(createAnimalDto: CreateAnimalDto): Promise<Animal> {
    return await this.prismaService.animal.create({
      data: createAnimalDto,
    });
  }
  async deleteAnimal(id: string): Promise<Animal> {
    const animalDeleted = await this.prismaService.animal.delete({
      where: {
        animalId: parseInt(id),
      },
    });
    return animalDeleted;
  }
  async updateAnimal(
    id: string,
    updateAnimalDto: UpdateAnimalDto,
  ): Promise<Animal> {
    const animalUpdated = await this.prismaService.animal.update({
      where: {
        animalId: parseInt(id),
      },
      data: updateAnimalDto,
    });

    return animalUpdated;
  }
}
