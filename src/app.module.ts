import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsController } from './cars/cars.controller';
import { Car } from './car/entities/car.entity';
import { CarModule } from './car/car.module';
import { Flight } from './flights/entities/flight.entity';
import { FlightsModule } from './flights/flights.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'transportation',
      entities: [Car, Flight],
      synchronize: false,
    }),
    CarModule,
    FlightsModule,
  ],
  controllers: [AppController, CarsController],
  providers: [AppService],
})
export class AppModule {
  //This is a comment
}
