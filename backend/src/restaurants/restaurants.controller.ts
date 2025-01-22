// src/restaurants/restaurants.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { UpdateRestaurantDto } from './update-restaurant.dto';
import { Restaurant } from './restaurant.entity';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Post()
  create(
    @Body() createRestaurantDto: CreateRestaurantDto,
  ): Promise<Restaurant> {
    return this.restaurantsService.create(createRestaurantDto);
  }

  @Get()
  findAll(): Promise<Restaurant[]> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Restaurant | null> {
    return this.restaurantsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant | null> {
    return this.restaurantsService.update(+id, updateRestaurantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.restaurantsService.remove(+id);
  }
}
