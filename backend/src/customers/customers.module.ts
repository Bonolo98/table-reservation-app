import { Module } from "@nestjs/common";
import { CustomersService } from "./customer.service";
import { CustomersController } from "./customers.controller";
import { Customer } from "./customers.entity";
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomerModule {}
