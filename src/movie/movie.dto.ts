import {
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
  @IsUUID()
  @IsOptional()
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'Identificador único do filme', required: false })
  id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(256)
  @ApiProperty({ example: 'The Avengers', description: 'Nome do Filme', required: true })
  title: string;

  @IsString()
  @MinLength(4)
  @MaxLength(4)
  @ApiProperty({ example: '2017', description: 'Ano de lançamento do filme', required: true })
  year: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty({ example: 'Drama', description: 'Identificador do genero', required: true })

  genre: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty({ example: 'Antonio Silva', description: 'Nome do diretor', required: true })
  director: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty({ example: 'Moacyr Franco', description: 'Nome do autor', required: true })
  writer: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  @ApiProperty({ example: 'Cris Evans, Robert Downey Jr.', description: 'principais atores', required: true })
  actors: string;

  @IsString()
  @MinLength(5)
  @MaxLength(512)
  @ApiProperty({ example: 'Um grupo de heŕois se une para salvar o mundo...', description: 'Sinopse do filme', required: true })
  sinopse: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({ example: 'English', description: 'Idioma principal do filme', required: true })
  language: string;

  @IsString()
  @MinLength(3)
  @MaxLength(128)
  @ApiProperty({ example: 'Brazil', description: ' País produtor do filme', required: true })
  country: string;

  @IsString()
  @MinLength(3)
  @MaxLength(128)
  @ApiProperty({ example: '10 wins & 49 nominations', description: 'premios e indicações do filme', required: true })
  awards: string;

  @IsString()
  @MinLength(3)
  @MaxLength(512)
  @ApiProperty({ example: 'https://m.media-amazon.com/images/M/MV5BZDVkZmI0YzAtNzdjYi00ZjhhLWE1ODEtMWMzMWMzNDA0NmQ4XkEyXkFqcGdeQXVyNzYzODM3Mzg@._V1_SX300.jpg', description: 'link com o poster para ser usado no front', required: true })
  poster: string;

  @ApiProperty({ example: '8.0', description: 'Nota atribuída pelo imdb', required: true })
  imbrating: string;

  @IsString()
  @MinLength(3)
  @MaxLength(16)
  @ApiProperty({ example: 'movie', description: 'TIpo de produção', required: true })
  type: string;

}

export interface FindAllParameters {
  title: string;
  type: string;
}

export class MovieRouteParameters {
  @IsUUID()
  id: string;
}