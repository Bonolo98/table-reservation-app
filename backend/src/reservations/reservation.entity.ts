import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Customer } from '../customers/customers.entity';
import { Admin } from '../admins/admin.entity';

@Entity('reservations')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.id, { eager: true })
  customer: Customer;

  @Column()
  restaurant_id: number;

  @Column()
  reservation_date: Date;

  @Column({ default: 'pending' }) // pending, approved, or canceled
  status: string;

  @ManyToOne(() => Admin, (admin) => admin.id, { nullable: true })
  approved_by: Admin;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
