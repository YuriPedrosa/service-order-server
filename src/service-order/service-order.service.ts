import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceOrder } from 'src/db/entities/service-order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrder)
    private serviceOrderRepository: Repository<ServiceOrder>,
  ) {}

  create(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    return this.serviceOrderRepository.save(serviceOrder);
  }

  getById(id: number): Promise<ServiceOrder> {
    return this.serviceOrderRepository.findOne({ where: { id } });
  }

  getAllByDate(date: Date | string): Promise<ServiceOrder[]> {
    if (typeof date === 'string') {
      date = new Date(date);
    }

    return this.serviceOrderRepository.find({
      where: { date },
    });
  }

  update(id: number, serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    const serviceOrderOld = this.getById(id);

    if (!serviceOrderOld) {
      throw new NotFoundException();
    }

    return this.serviceOrderRepository.save({
      ...serviceOrderOld,
      ...serviceOrder,
      id,
    });
  }
}
