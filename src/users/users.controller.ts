import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserResponse, UserDto } from './user.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'Cria um usuário' })
  async create(@Body() user: UserDto): Promise<CreateUserResponse> {
    return await this.usersService.create(user);
  }
}
