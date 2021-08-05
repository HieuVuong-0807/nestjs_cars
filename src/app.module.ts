import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { Car } from './car/entities/car.entity';
import { CarModule } from './car/car.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'transportation',
      entities: [Car],
      synchronize: true,
    }),
    CarModule,
  ],
  controllers: [AppController, CarsController],
  providers: [AppService],
})
export class AppModule {
  //This is a comment
}
