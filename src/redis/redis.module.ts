import { Module, Global, Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';
import { RedisService } from './redis.service';

const redisProvider: Provider = {
  provide: REDIS_CLIENT,
  useFactory: () => {
    return new Redis({
      host: 'localhost',
      port: 6379,
    });
  },
};

@Global()
@Module({
  providers: [redisProvider, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
