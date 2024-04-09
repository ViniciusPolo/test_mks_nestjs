# Movie API

## Introdução

Projeto criado para meu portfólio e conforme expecificações [readMe](https://github.com/MKS-desenvolvimento-de-sistemas/mks-backend-challenge). Nele iremos abordar os seguintes recursos:

- CRUD de tarefas (Controllers, Decorators, Services, Modules)
- Validação de DTO com class-validator
- Variáveis de ambiente com ConfigService
- Autenticação (JwtService, App guard)
- Password hash
- Banco de dados - Filmes e Users
- Uso de Cache Redis

## Instalação

### Pré-requisitos

Esse projeto foi desenvolvido utilizando a seguinte versão do node:

[Node v18.12.0 LTS](https://nodejs.org/en/blog/release/v18.12.0)

### Passos de Instalação

1. Clone o repositório: `git clone https://github.com/ViniciusPolo/test_mks_nestjs.git`
2. Navegue até o diretório do projeto: `cd test_mks`
3. Instale as dependências: `npm install`


## Configuração

- Crie copie o arquivo .env.example e renomeie para .env, preenchendo todas a variáveis.
- Inicialize o container do banco de dados e do Redis com (certifique-se que as portas 5432 e 6379 estejam disponíveis, caso não, pode alterar no docker-compose para as portas de sua preferência): 
```
  docker-compose up -d
```
- Execute as migrations com:
```
npm run migration:run
```  

## Migrations

Criar uma migration:
```
npm run migration:create -name=nome-da-migration
```

Executar as migrations:
```
  npm run migration:run
```

Reverter as migrations:
```
  npm run migration:revert
```  


## Uso

O projeto expõe um endpoint para cadastro, atualização, busca e exclusão de filmes, que são buscados através da API do Imdb. também foi desenvolvido um endpoint para criação de usuários e um endpoint de autenticação, onde é possível realizar o login passando um usuário e senha.

### Curls

Copie os Curls abaixo e cole no seu testador de apis favorito, como [Insomnia](https://insomnia.rest/download) ou [Postman](https://www.postman.com/).

#### Usuários
```
curl --request POST \
  --url http://localhost:3000/users \
  --header 'Content-Type: application/json' \
  --data ' {
	 "username": "username",
	 "password": "password"
 }'
```

#### Autenticação
```
curl --request POST \
  --url http://localhost:3000/auth/login \
  --header 'Content-Type: application/json' \
  --data ' {
	 "username": "username",
	 "password": "password"
 }'
```

#### Movies

##### Criar
```
curl --request POST \
  --url http://localhost:3000/movie \
  --header 'Authorization: Bearer token' \
  --header 'Content-Type: application/json' \
```

##### Atualizar
```
curl --request PUT \
  --url http://localhost:3000/task \
  --header 'Authorization: Bearer token' \
  --header 'Content-Type: application/json' \
  --data ' {
	      "id": "f1179ec3-c1d9-4bef-8d96-df21e3474bc2",
        "title": "The Avengers",
        "year": "2012",
        "genre": "Action, Sci-Fi",
        "director": "Joss Whedon",
        "writer": "Joss Whedon, Zak Penn",
        "actors": "Robert Downey Jr., Chris Evans, Scarlett Johansson",
        "sinopse": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
        "language": "English, Russian",
        "country": "United States",
        "awards": "Nominated for 1 Oscar. 39 wins & 81 nominations total",
        "poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "imbrating": null,
        "type": "movie"
 }'
 ```

##### Encontrar por id
```
curl --request GET \
  --url http://localhost:3000/movie/f1179ec3-c1d9-4bef-8d96-df21e3474bc2 \
  --header 'Authorization: Bearer token'
 ```

##### Buscar com filtros
```
 curl --request GET \
  --url 'http://localhost:3000/movie?title=avengers&type=movie' \
  --header 'Authorization: Bearer token'
```

##### Excluir
```
curl --request DELETE \
  --url http://localhost:3000/movie/uuid-here \
  --header 'Authorization: Bearer token'
```
