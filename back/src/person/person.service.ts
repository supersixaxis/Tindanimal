import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonDto } from './dto/createPersonDto';
import { UpdatePersonDto } from './dto/updatePerson';
import { Person } from './person.model';

@Injectable()
export class PersonService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllPersons(): Promise<Person[]> {
    return this.prismaService.person.findMany();
  }

  async getPersonById(id: string): Promise<Person> {
    const person = await this.prismaService.person.findUnique({
      where: { userId: Number(id) },
    });
    return person;
  }

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return await this.prismaService.person.create({
      data: createPersonDto,
    });
  }

  async deletePerson(id: string): Promise<Person> {
    const personDeleted = await this.prismaService.person.delete({
      where: {
        userId: parseInt(id),
      },
    });

    return personDeleted;
  }

  async updatePerson(
    id: string,
    updatePersonDto: UpdatePersonDto,
  ): Promise<Person> {
    const personUpdated = await this.prismaService.person.update({
      where: {
        userId: parseInt(id),
      },
      data: updatePersonDto,
    });
    return personUpdated;
  }
}
