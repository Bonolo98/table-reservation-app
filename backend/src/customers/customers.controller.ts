import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CustomersService } from './customer.service';
import { Customer } from './customers.entity';

@Controller('/customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Customer> {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() customerData: Partial<Customer>): Promise<Customer> {
    return this.customersService.create(customerData);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() customerData: Partial<Customer>,
  ): Promise<Customer> {
    return this.customersService.update(id, customerData);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.customersService.delete(id);
  }
}
