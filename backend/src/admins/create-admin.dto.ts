// src/admins/dto/create-admin.dto.ts
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  username: string;

  @IsString()
  password_hash: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  full_name?: string;

  @IsOptional()
  @IsString()
  phone_number?: string;
}
