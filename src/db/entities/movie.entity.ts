import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  year: string;

  @Column({ type: 'varchar' })
  genre: string;

  @Column({ type: 'varchar' })
  director: string;

  @Column({ type: 'varchar' })
  writer: string;

  @Column({ type: 'varchar' })
  actors: string;

  @Column({ type: 'varchar' })
  sinopse: string;

  @Column({ type: 'varchar' })
  language: string;

  @Column({ type: 'varchar' })
  country: string;

  @Column({ type: 'varchar' })
  awards: string;

  @Column({ type: 'varchar' })
  poster: string;

  @Column({ type: 'varchar' })
  imbrating: string;

  @Column({ type: 'varchar' })
  type: string;

}
