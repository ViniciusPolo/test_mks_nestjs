import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResponseDto } from './auth.dto';
import { ApiTags, ApiResponse, ApiBody } from '@nestjs/swagger';


@Controller('auth')
@ApiTags('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: { type: 'string', example: 'nomedousuario' },
        password: { type: 'string', example: 'password' },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'O processo de login foi bem-sucedido',
    schema: {
      type: 'object',
      properties: {
        token: { type: 'string', example: 'token_aleatório_aqui' },
        expiresIn: { type: 'number', example: 500000 },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'Efetua o login' })
  async signIn(
    @Body('username') username: string,
    @Body('password') password: string,
  ): Promise<AuthResponseDto> {
    return this.authService.signIn(username, password);
  }
}
