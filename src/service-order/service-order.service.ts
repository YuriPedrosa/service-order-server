import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceOrder } from 'src/db/entities/service-order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceOrderService {
  constructor(
    @InjectRepository(ServiceOrder)
    private serviceOrderRepository: Repository<ServiceOrder>,
  ) {}

  createServiceOrder(serviceOrder: ServiceOrder): Promise<ServiceOrder> {
    return this.serviceOrderRepository.save(serviceOrder);
  }

  getServiceOrderById(id: number): Promise<ServiceOrder> {
    return this.serviceOrderRepository.findOne({ where: { id } });
  }

  getAllByDate(date: Date): Promise<ServiceOrder[]> {
    return this.serviceOrderRepository.find({
      where: { date },
    });
  }
}
