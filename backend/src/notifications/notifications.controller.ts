// src/notifications/notifications.controller.ts
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Notification } from './notifications.entity';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() notificationData: Partial<Notification>): Promise<Notification> {
    return this.notificationsService.create(notificationData);
  }

  @Get(':userId')
  findByUser(@Param('userId') userId: number): Promise<Notification[]> {
    return this.notificationsService.findByUser(userId);
  }
}
