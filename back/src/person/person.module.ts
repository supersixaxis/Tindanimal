import { Global, Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PrismaModule } from '../prisma/prisma.module';
import { PersonResolver } from './person.resolver';
@Global()
@Module({
  imports: [PrismaModule],
  providers: [PersonService, PersonResolver],
})
export class PersonModule {}
