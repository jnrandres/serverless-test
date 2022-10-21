/* eslint-disable indent */
import { Entity, Column, Unique } from 'typeorm';
import { BaseEntity } from '../utils/entities/base.entity';

@Entity('planetas')
@Unique('unique-pid', ['pid'])
export class Planet extends BaseEntity {

  @Column({ type: 'int', nullable: false })
  pid!: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  periodo_rotacion!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  periodo_orbital!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  diametro!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  clima!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  gravedad!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  terreno!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  superficie_agua!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  poblacion!: string;

  @Column({ type: 'simple-array' })
  residentes!: string[];

  @Column({ type: 'simple-array' })
  peliculas!: string[];
  
  @Column({ type: 'timestamp' })
  creado!: Date;

  @Column({ type: 'timestamp' })
  editado!: Date;
  
  @Column({ type: 'varchar', length: 255, nullable: false })
  url!: string;
}
