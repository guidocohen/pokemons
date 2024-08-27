import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class Battle {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon)
  winner: Pokemon;

  @ManyToOne(() => Pokemon)
  loser: Pokemon;

  @Column('int')
  turns: number;

  @Column('text')
  createdAt: string;
}
