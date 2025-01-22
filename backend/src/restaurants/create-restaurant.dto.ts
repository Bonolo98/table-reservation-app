// src/restaurants/dto/create-restaurant.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  image_url?: string;

  @IsString()
  admin_id: string; // Referring to Admin ID
}
