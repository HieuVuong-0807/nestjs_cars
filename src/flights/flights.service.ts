import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';

@Injectable()
export class FlightsService {

  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>
    ) {}

  async create(flight: Flight): Promise<any> {
    return await this.flightRepository.save(flight);
  }

  async findAll(): Promise<Flight[]> {
    return this.flightRepository.find();
  }

  findOne(id: number) {
    return this.flightRepository.findOne(id);
  }

  async query(orig: string, dest: string): Promise<any> {
    return this.flightRepository.find({origin: orig, destination: dest});
  }

  async update(flight: Flight): Promise<any> {
    return this.flightRepository.update(flight.id, flight);
  }

  async delete(id: number): Promise<any> {
    return this.flightRepository.delete(id);
  }

  async getFlightOrigin(): Promise<string[]> {
    return this.flightRepository.query("select distinct origin from flight");
  }

  async getFlightDestination(): Promise<string[]> {
    return this.flightRepository.query("select distinct destination from flight");
  }
}
