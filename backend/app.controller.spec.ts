import { Test } from '@nestjs/testing';
import { AppService } from './src/app.service';
import { AppController } from './src/app.controller';

describe('AppController', () => {
  beforeEach(async () => {
    await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });
});
