// src/restaurants/restaurants.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { UpdateRestaurantDto } from './update-restaurant.dto';
import { Restaurant } from './restaurant.entity';

@Injectable()
export class RestaurantsService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantsRepository: Repository<Restaurant>,
  ) {}

  create(createRestaurantDto: CreateRestaurantDto): Promise<Restaurant> {
    const restaurant = this.restaurantsRepository.create(createRestaurantDto);
    return this.restaurantsRepository.save(restaurant);
  }

  findAll(): Promise<Restaurant[]> {
    return this.restaurantsRepository.find();
  }

  findOne(id: number): Promise<Restaurant | null> {
    return this.restaurantsRepository.findOne({where: {id}});
  }

  async update(
    id: number,
    updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<Restaurant | null> {
    await this.restaurantsRepository.update(id, updateRestaurantDto);
    return this.restaurantsRepository.findOne({where: {id}});
  }

  remove(id: number): Promise<void> {
    return this.restaurantsRepository.delete(id).then(() => {});
  }
}
