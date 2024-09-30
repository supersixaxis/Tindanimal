import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PersonService } from './person.service';
import { Person } from './person.model'; // Assure-toi que ton modèle Person est bien défini
import { CreatePersonDto } from './dto/createPersonDto';
import { UpdatePersonDto } from './dto/updatePerson';
import { NotFoundException } from '@nestjs/common';

@Resolver(() => Person)
export class PersonResolver {
  constructor(private readonly personService: PersonService) {}

  @Query(() => [Person])
  async getAllPersons() {
    return this.personService.getAllPersons();
  }

  @Query(() => Person)
  async getPerson(@Args('id') id: string) {
    const personById = await this.personService.getPersonById(id);
    if (!personById) {
      throw new NotFoundException('Person not found');
    }
    return personById;
  }

  @Mutation(() => Person)
  async createPerson(
    @Args('createPersonDto') createPersonDto: CreatePersonDto,
  ) {
    return this.personService.create(createPersonDto);
  }

  @Mutation(() => Person)
  async deletePerson(@Args('id') id: string) {
    const personDeleted = await this.personService.deletePerson(id);
    if (!personDeleted) {
      throw new NotFoundException('Person not found');
    }
    return personDeleted;
  }

  @Mutation(() => Person)
  async updatePerson(
    @Args('id') id: string,
    @Args('updatePersonDto') updatePersonDto: UpdatePersonDto,
  ) {
    const personUpdated = await this.personService.updatePerson(
      id,
      updatePersonDto,
    );
    if (!personUpdated) {
      throw new NotFoundException('Person not found');
    }
    return personUpdated; // retourne la personne mise à jour
  }
}
