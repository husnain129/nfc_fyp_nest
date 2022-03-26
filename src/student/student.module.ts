import { CacheModule, Module } from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { StudentController } from './student.controller';
import { StudentGateway } from './student.gateway';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 0,
    }),
  ],
  providers: [StudentGateway],
  controllers: [StudentController],
})
export class StudentModule {}
