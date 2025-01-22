// src/admins/admins.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdminDto } from './create-admin.dto';
import { UpdateAdminDto } from './update-admin.dto';
import { Admin } from './admin.entity';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
  ) { }

  create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = this.adminsRepository.create(createAdminDto);
    return this.adminsRepository.save(admin);
  }

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  findOne(id: number): Promise<Admin | null> {
    return this.adminsRepository.findOne({ where: { id } });
  }
  
  

  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    await this.adminsRepository.update(id, updateAdminDto);
    const updatedAdmin = await this.adminsRepository.findOne({ where: { id } });
    
    if (!updatedAdmin) {
      throw new Error('Admin not found');
    }
    
    return updatedAdmin;
  }
  

  remove(id: number): Promise<void> {
    return this.adminsRepository.delete(id).then(() => { });
  }
}
