import {
  IsDateString,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export class MovieDto {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @MinLength(1)
  @MaxLength(256)
  title: string;

  @IsString()
  @MinLength(4)
  @MaxLength(4)
  year: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  genre: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  director: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  writer: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  actors: string;

  @IsString()
  @MinLength(5)
  @MaxLength(512)
  sinopse: string;

  @IsString()
  @MinLength(3)
  @MaxLength(50)
  language: string;

  @IsString()
  @MinLength(3)
  @MaxLength(128)
  country: string;

  @IsString()
  @MinLength(3)
  @MaxLength(128)
  awards: string;

  @IsString()
  @MinLength(3)
  @MaxLength(512)
  poster: string;

  imbrating: string;

  @IsString()
  @MinLength(3)
  @MaxLength(16)
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