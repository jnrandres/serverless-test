/* eslint-disable indent */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../utils/entities/base.entity';

@Entity('users')
export class User extends BaseEntity {
  
  @Column({ type: 'varchar', length: 180, nullable: false, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name!: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  lastname!: string;

  @Column({ type: 'varchar', length: 80, nullable: false, unique: true })
  phone!: string;
  
  @Column({ type: 'varchar', length: 255, nullable: false })
  password!: string;
  
}
