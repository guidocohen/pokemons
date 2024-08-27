import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column('int')
  attack: number;

  @Column('int')
  defense: number;

  @Column('int')
  hp: number;

  @Column('int')
  speed: number;

  @Column('varchar')
  type: string;

  @Column('varchar')
  imageUrl: string;
}
