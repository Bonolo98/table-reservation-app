// src/reservations/reservations.controller.ts
import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { Reservation } from './reservation.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  create(@Body() reservationData: Partial<Reservation>): Promise<Reservation> {
    return this.reservationsService.create(reservationData);
  }

  @Get()
  findAll(): Promise<Reservation[]> {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Reservation | null> {
    return this.reservationsService.findOne(id);
  }

  @Put(':id/approve')
  approve(@Param('id') id: number, @Body('adminId') adminId: number): Promise<Reservation | null> {
    return this.reservationsService.approve(id, adminId);
  }

  @Put(':id/cancel')
  cancel(@Param('id') id: number): Promise<Reservation | null> {
    return this.reservationsService.cancel(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.reservationsService.remove(id);
  }
}
