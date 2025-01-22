import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './database/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './admins/admins.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AdminsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
