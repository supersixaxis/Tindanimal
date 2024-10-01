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
  async getPaginatedAnimals(offset: number, limit: number): Promise<Animal[]> {
    return this.prismaService.animal.findMany({
      skip: offset,
      take: limit,
    });
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
  async getOldestAnimal(): Promise<Animal> {
    return this.prismaService.animal.findFirst({
      orderBy: { dateOfBirth: 'asc' },
    });
  }
  async getMostRepresentedSpecies(): Promise<{
    species: string;
    count: number;
  }> {
    const result = await this.prismaService.animal.groupBy({
      by: ['species'],
      _count: {
        species: true,
      },
      orderBy: {
        _count: {
          species: 'desc',
        },
      },
      take: 1,
    });

    if (result.length > 0) {
      return {
        species: result[0].species,
        count: result[0]._count.species,
      };
    }

    return null;
  }

  async getOwnerWithMostAnimals(): Promise<{
    ownerId: number;
    animalCount: number;
  }> {
    const result = await this.prismaService.animal.groupBy({
      by: ['ownerId'],
      _count: {
        ownerId: true,
      },
      orderBy: {
        _count: {
          ownerId: 'desc',
        },
      },
      take: 1,
    });

    if (result.length > 0) {
      return {
        ownerId: result[0].ownerId,
        animalCount: result[0]._count.ownerId,
      };
    }

    return null;
  }
  async getOwnerWithMostCats(): Promise<{
    ownerId: number;
    catCount: number;
  }> {
    const result = await this.prismaService.animal.groupBy({
      by: ['ownerId'],
      where: {
        species: 'cat',
      },
      _count: {
        ownerId: true,
      },
      orderBy: {
        _count: {
          ownerId: 'desc',
        },
      },
      take: 1,
    });

    if (result.length > 0) {
      return {
        ownerId: result[0].ownerId,
        catCount: result[0]._count.ownerId,
      };
    }

    return null;
  }
  async getHeaviestAnimal(): Promise<{
    ownerId: number;
    animalName: string;
    weight: number;
  }> {
    const result = await this.prismaService.animal.findFirst({
      orderBy: {
        weight: 'desc',
      },
    });

    if (result) {
      return {
        ownerId: result.ownerId,
        animalName: result.name,
        weight: result.weight,
      };
    }

    return null;
  }
  async getOwnerWithHeaviestGroup(): Promise<{
    ownerId: number;
    totalWeight: number;
  }> {
    const result = await this.prismaService.animal.groupBy({
      by: ['ownerId'],
      _sum: {
        weight: true,
      },
      orderBy: {
        _sum: {
          weight: 'desc',
        },
      },
      take: 1,
    });

    if (result.length > 0) {
      return {
        ownerId: result[0].ownerId,
        totalWeight: result[0]._sum.weight,
      };
    }

    return null;
  }
}
