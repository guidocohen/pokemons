import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { env } from 'process';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { enviroments } from '../environments';
import { PokemonsModule } from './pokemons/pokemons.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string().valid('dev', 'prod', 'stg').default('dev'),
        API_PORT: Joi.number().default(3000),
        API_KEY: Joi.string().required(),
        SQLITE_DB_PATH: Joi.string(),
      }),
      validationOptions: {
        abortEarly: true,
      },
    }),
    PokemonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
