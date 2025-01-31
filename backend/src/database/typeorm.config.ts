import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'restaurant_db',
  entities: [join(__dirname, '..', '**', '*.entity.{ts,js}')],
  synchronize: true, // Disable in production
};
