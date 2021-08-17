import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlightsService } from './flights.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from './entities/flight.entity';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Post()
  async create(@Body() flight: Flight): Promise<Flight[]> {
    return this.flightsService.create(flight);
  }

  @Get()
  findAll() {
    return this.flightsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flightsService.findOne(+id);
  }

  @Get("query/:orig/:dest")
  async query(@Param('orig') orig, @Param('dest')dest): Promise<any> {
    return this.flightsService.query(orig, dest);
  }

  @Patch(':id/update')
  async update(@Param('id') id: string, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightsService.update(flight);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id: string): Promise<any> {
    //to DO
    return this.flightsService.delete(Number(id));
  }
}
