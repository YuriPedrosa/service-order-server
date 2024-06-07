import { Module } from '@nestjs/common';
import { ServiceOrderService } from './service-order.service';
import { ServiceOrderController } from './service-order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceOrder } from 'src/db/entities/service-order.entity';

@Module({
  providers: [ServiceOrderService],
  controllers: [ServiceOrderController],
  imports: [TypeOrmModule.forFeature([ServiceOrder])],
})
export class ServiceOrderModule {}
