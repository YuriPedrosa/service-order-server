import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'service_order' })
export class ServiceOrder {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ type: 'varchar', nullable: true })
  notes: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'timestamp' })
  date: Date;
}
