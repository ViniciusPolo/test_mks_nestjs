import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  id: string;

  @ApiProperty({ example: 'Nome do usuário', description: 'Usuário a ser cadastrado', required: true })
  username: string;

  @ApiProperty({ example: 'Senha', description: 'Cadastrar senha', required: true })
  password: string;
}

export interface CreateUserResponse {
  id: string;
  username;
}
