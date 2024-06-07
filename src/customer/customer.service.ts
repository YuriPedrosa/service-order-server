import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/db/entities/customer.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerServiceRepository: Repository<Customer>,
  ) {}

  async create(customer: Customer): Promise<Customer> {
    return await this.customerServiceRepository.save(customer);
  }

  async getByName(name: string): Promise<Customer[]> {
    const customer = await this.customerServiceRepository.find({
      where: { name },
    });

    if (!customer || !customer.length) throw new NotFoundException();

    return customer;
  }

  async getById(id: number): Promise<Customer> {
    const customer = await this.customerServiceRepository.findOne({
      where: { id },
    });

    if (!customer) throw new NotFoundException();

    return customer;
  }

  async update(id: number, customer: Customer): Promise<Customer> {
    const oldCustomer = await this.getById(id);

    if (!oldCustomer) throw new NotFoundException();

    return this.customerServiceRepository.save({ ...customer, id });
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.customerServiceRepository.delete(id);
  }
}
