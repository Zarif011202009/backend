import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  readonly id?: number;

  @Column('varchar', { length: 255, name: 'category', nullable: false })
  readonly category: string;

  @Column('integer', { name: 'condition', nullable: false })
  readonly condition: string;

  @Column('integer', { name: 'priority', nullable: true })
  readonly priority: number;
}