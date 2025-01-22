import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.customersRepository.findOne({ where: { id } });
    if (!customer) {
      throw new Error(`Customer with ID ${id} not found`);
    }
    return customer;
  }
  

  create(customerData: Partial<Customer>): Promise<Customer> {
    const customer = this.customersRepository.create(customerData);
    return this.customersRepository.save(customer);
  }

  async update(id: number, customerData: Partial<Customer>): Promise<Customer> {
    await this.customersRepository.update(id, customerData);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
