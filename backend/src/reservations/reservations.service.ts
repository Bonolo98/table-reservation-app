// src/reservations/reservations.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { error } from 'console';

@Injectable()
export class ReservationsService {
    constructor(
        @InjectRepository(Reservation)
        private reservationsRepository: Repository<Reservation>,
    ) { }

    create(reservationData: Partial<Reservation>): Promise<Reservation> {
        const reservation = this.reservationsRepository.create(reservationData);
        return this.reservationsRepository.save(reservation);
    }

    findAll(): Promise<Reservation[]> {
        return this.reservationsRepository.find();
    }

    findOne(id: number): Promise<Reservation | null> {
        return this.reservationsRepository.findOne({ where: { id } });
    }

    async approve(id: number, adminId: number): Promise<Reservation | null> {
        const reservation = await this.findOne(id);

        if (!reservation) {
            throw new error(`Reservation of ID: ${id} does not exist.`);
        }
        reservation.status = 'approved';
        reservation.approved_by = { id: adminId } as any; // Assuming Admin entity exists
        return this.reservationsRepository.save(reservation);
    }

    async cancel(id: number): Promise<Reservation | null> {
        const reservation = await this.findOne(id);

        if (!reservation) {
            throw new error(`Reservation of ID: ${id} is not found`)
        }
        reservation.status = 'canceled';
        return this.reservationsRepository.save(reservation);
    }

    async remove(id: number): Promise<void> {
        await this.reservationsRepository.delete(id);
    }
}
