import { TypeOrmModule } from "@nestjs/typeorm";
import { Restaurant } from "./restaurant.entity";
import { RestaurantsController } from "./restaurants.controller";
import { RestaurantsService } from "./restaurants.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers: [RestaurantsService],
    controllers: [RestaurantsController],
})
export class RestaurantModule { }
