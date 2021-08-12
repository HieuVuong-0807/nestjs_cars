import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightsService {

  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>
    ) {}

  create(createFlightDto: CreateFlightDto) {
    return 'This action adds a new flight';
  }

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  findOne(id: number) {
    return this.flightRepository.findOne(id);
  }

  update(id: number, updateFlightDto: UpdateFlightDto) {
    return `This action updates a #${id} flight`;
  }

  remove(id: number) {
    return `This action removes a #${id} flight`;
  }
}
