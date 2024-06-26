import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API Movies')
    .setDescription('API para movies')
    .setVersion('1.0')
    .addTag('movie', 'DOcumentação dos filmes')
    .addTag('users', 'Documentação dos usuários')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('movie-doc', app, document);

  await app.listen(3000);
}
bootstrap();
