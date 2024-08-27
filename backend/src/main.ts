import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService, ConfigType } from '@nestjs/config';

import config from './config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      disableErrorMessages: process.env.ENVIRONMENT === 'production',
    }),
  );
  const documentConfig = new DocumentBuilder()
    .setTitle('Pokemons API')
    .setDescription('API for pokemon battles')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('docs', app, document);

  const configService: ConfigType<typeof config> = app
    .get(ConfigService)
    .get('config');

  app.enableCors();
  await app.listen(configService.port);
}
bootstrap();
