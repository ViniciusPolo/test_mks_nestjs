import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { FindAllParameters, MovieDto, MovieRouteParameters } from './movie.dto';
import { MovieService } from './movie.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { RedisService } from '../redis/redis.service'; 


@UseGuards(AuthGuard)
@ApiTags('movie')
@Controller('movie')
export class MovieController {
  constructor(
    private readonly movieService: MovieService,
    private readonly redisService: RedisService, 
  ) { }
  

  @Post('/:title')
  @ApiResponse({ status: 200, description: 'Retorna Filme Escolhido de acordo com o titulo passado como parametro' })
  async create(@Param('title') title: string): Promise<MovieDto> {
    return await this.movieService.create(title);

  }

  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Retorna Filme Escolhido com base no id(uuid) informado' })
  async findById(@Param('id') id: string) {
    const cachedMovie = await this.redisService.get(id); 
    if (cachedMovie) {
      return JSON.parse(cachedMovie);
    }
    return this.movieService.findById(id);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Retorna Todos os Filmes' })
  async findAll(@Query() params: FindAllParameters): Promise<MovieDto[]> {
    if(!params){
      const cachedMovies = await this.redisService.get('allMovies'); 
      if (cachedMovies) {
        return JSON.parse(cachedMovies); 
      }
    }
    const movies = await this.movieService.findAll(params);
    await this.redisService.set('allMovies', JSON.stringify(movies), 50000); 
    return movies;
  }

  @Put('/:id')
  @ApiResponse({ status: 200, description: 'Altera os dados Filmes' })
  async update(@Param() params: MovieRouteParameters, @Body() movie: MovieDto) {
    await this.movieService.update(params.id, movie);
    await this.redisService.set(params.id, JSON.stringify(movie), 50000); 

  }

  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Deleta o Filme' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.movieService.remove(id);
    this.redisService.delete;
  }
}
