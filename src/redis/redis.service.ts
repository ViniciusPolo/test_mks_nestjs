import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import { REDIS_CLIENT } from './redis.constants';


@Injectable()
export class RedisService {
  constructor(@Inject(REDIS_CLIENT) private readonly redisClient: Redis) {}

  async get(key: string): Promise<string | null> {
    return this.redisClient.get(key);
  }

  async set(key: string, value: string, time: number, expiryMode: 'EX' | 'PX' = 'EX'): Promise<'OK' | null>{
    const setResult = await this.redisClient.set(key, value);
  if (expiryMode === 'EX') {
    await this.redisClient.expire(key, time);
  } else {
    await this.redisClient.pexpire(key, time);
  }
  return setResult;
  }
  
  async delete(key: string){
    return this.redisClient.del(key)
  }

}
