import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { MovieModule } from './movie/movie.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MovieModule,
    AuthModule,
    UsersModule,
    DbModule,
    // RedisModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
