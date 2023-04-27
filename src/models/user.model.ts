import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  @Entity('users')
  export class User {
 
  
    @PrimaryGeneratedColumn('increment', { name: 'id' })
    readonly id?: number;
  
    @Column('varchar', { length: 255, name: 'name', nullable: false })
    readonly name: string;
  
  
    @Column('varchar', { length: 320, name: 'email', nullable: false })
    readonly email: string;
  
    @Column('varchar', { length: 20, name: 'phone', nullable: true })
    readonly phone?: string;
  
    @CreateDateColumn({ name: 'created_at', nullable: false })
    readonly created_at?: Date;
  
    @UpdateDateColumn({ name: 'updated_at', nullable: false })
    readonly updated_at?: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', select: false })
    readonly deleted_at?: Date;
  }