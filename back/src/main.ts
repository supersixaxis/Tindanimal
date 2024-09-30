import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const frontendUrl = configService.get<string>('FRONTEND_URL');
  const corsOptions: CorsOptions = {
    origin: frontendUrl,
    credentials: true,
  };
  app.enableCors(corsOptions);
  await app.listen(8000);
}
bootstrap();
