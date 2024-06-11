import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { ServiceOrderService } from './service-order.service';
import { ServiceOrder } from 'src/db/entities/service-order.entity';

@Controller('service-order')
export class ServiceOrderController {
  constructor(private readonly serviceOrderService: ServiceOrderService) {}

  @Get('all')
  findAllByDate(@Query('date') date: Date | string) {
    return this.serviceOrderService.getAllByDate(date);
  }

  @Post('create')
  create(@Body() serviceOrder: ServiceOrder) {
    return this.serviceOrderService.create(serviceOrder);
  }

  @Get('by-id/:id')
  findById(@Query('id') id: number) {
    return this.serviceOrderService.getById(id);
  }

  @Patch('update/:id')
  update(@Query('id') id: number, @Body() serviceOrder: ServiceOrder) {
    return this.serviceOrderService.update(id, serviceOrder);
  }
}
