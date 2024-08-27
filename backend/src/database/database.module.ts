import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        return {
          type: 'sqlite',
          database: configService.sqlite.dbPath,
          entities: [__dirname + '/../pokemons/entities/*.entity{.ts,.js}'],
          synchronize: false, // true dev only
          autoLoadEntities: true,
        };
      },
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: (configService: ConfigType<typeof config>) =>
        configService.apiKey,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
