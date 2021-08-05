import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Repository } from 'typeorm';
import { Car } from './entities/car.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarService {

  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>
    ) {}

  create(createCarDto: CreateCarDto) {
    return 'This action adds a new car';
  }

  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  findOne(id: number) {
    return this.carRepository.findOne(id);
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
