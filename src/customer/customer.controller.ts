import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from 'src/db/entities/customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get(':id')
  getById(@Param() id: number) {
    return this.customerService.getById(id);
  }

  @Get()
  getByName(@Query('name') name: string) {
    return this.customerService.getByName(name);
  }

  @Post('save')
  create(@Body() customer: Customer) {
    return this.customerService.create(customer);
  }

  @Patch('update/:id')
  update(@Param() id: number, @Body() customer: Customer) {
    return this.customerService.update(id, customer);
  }

  @Delete(':id')
  delete(@Param() id: number) {
    return this.customerService.delete(id);
  }
}
