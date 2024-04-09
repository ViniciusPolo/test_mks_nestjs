import { MigrationInterface, QueryRunner } from 'typeorm';

export class MoviesTable1706392503955 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.query(
      `CREATE TABLE movies (
            id uuid NOT NULL DEFAULT uuid_generate_v4(),
            title varchar(256) NOT NULL,
            year varchar(4) NULL,
            genre varchar(256) NULL,
            director varchar(256) NULL,
            writer varchar(256) NULL,
            actors varchar(256) NULL,
            sinopse varchar(512) NULL,
            language varchar(50) NOT NULL DEFAULT 'English',
            country varchar(128) NULL,
            awards varchar (128) NULL,
            poster varchar (512) NULL,
            imbrating varchar(4) NULL,
            type varchar(16) DEFAULT 'movie'
        );`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS movies;`);
  }
}
