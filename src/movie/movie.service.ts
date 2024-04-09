import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { FindAllParameters, MovieDto } from './movie.dto';
import { MovieEntity } from '../db/entities/movie.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';

@Injectable()
export class MovieService {
  

  constructor(
    @InjectRepository(MovieEntity)
    private movieRepository: Repository<MovieEntity>,
  ) { }

  async create(title: string): Promise<MovieDto> {
    const apiKey = '6585022c';
    const apiUrl = `https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      const movieData = response.data;
    
    
    const movieToSave: MovieEntity = {
      title: movieData.Title,
      year: movieData.Year,
      genre: movieData.Genre,
      director: movieData.Director,
      writer: movieData.Writer,
      actors: movieData.Actors,
      sinopse: movieData.Plot,
      language: movieData.Language,
      country: movieData.Country,
      awards: movieData.Awards ,
      poster: movieData.Poster ,
      imbrating: movieData.imbrating,
      type: movieData.Type,
    }

    const createdMovie = await this.movieRepository.save(movieToSave);
    return this.mapEntityToDto(createdMovie);
  } catch (error){

  }
    
  }

  async findById(id: string): Promise<MovieDto> {
    const foundMovie = await this.movieRepository.findOne({ where: { id } })

    if (!foundMovie) {
      throw new HttpException(
        `Movie with id ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return this.mapEntityToDto(foundMovie);
  }

  async findAll(params: FindAllParameters): Promise<MovieDto[]> {
    const searchParams: FindOptionsWhere<MovieEntity> = {}

    if (params.title) {
      searchParams.title = Like(`%${params.title}%`);
    }

    if (params.type) {
      searchParams.type = Like(`%${params.type}%`);
    }

    const moviesFound = await this.movieRepository.find({
      where: searchParams 
    });


    return moviesFound.map(movieEntity => this.mapEntityToDto(movieEntity));
  }

  async update(id: string, movie: MovieDto) {
    const foundMovie = await this.movieRepository.findOne({ where: { id } })

    if (!foundMovie) {
      throw new HttpException(
        `Movie with id '${id}' not found`,
        HttpStatus.BAD_REQUEST,
      );
    }

    await this.movieRepository.update(id, this.mapDtoToEntity(movie));
  }

  async remove(id: string) {

    const result = await this.movieRepository.delete(id)

    if (!result.affected) {
      throw new HttpException(
        `Movie with id '${id}' not found`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private mapEntityToDto(movieEntity: MovieEntity): MovieDto {
    return {
      id: movieEntity.id,
      title: movieEntity.title,
      year: movieEntity.year,
      genre: movieEntity.genre,
      director: movieEntity.director,
      writer: movieEntity.writer,
      actors: movieEntity.actors,
      sinopse: movieEntity.sinopse,
      language: movieEntity.language,
      country: movieEntity.country,
      awards: movieEntity.awards ,
      poster: movieEntity.poster ,
      imbrating: movieEntity.imbrating,
      type: movieEntity.type
    }
  }

  private mapDtoToEntity(movieDto: MovieDto): Partial<MovieEntity> {
    return {
      id: movieDto.id,
      title: movieDto.title,
      year: movieDto.year,
      genre: movieDto.genre,
      director: movieDto.director,
      writer: movieDto.writer,
      actors: movieDto.actors,
      sinopse: movieDto.sinopse,
      language: movieDto.language,
      country: movieDto.country,
      awards: movieDto.awards ,
      poster: movieDto.poster ,
      imbrating: movieDto.imbrating,
      type: movieDto.type,
    }
  }
}
