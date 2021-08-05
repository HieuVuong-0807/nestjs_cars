import { Controller, Get, Post, Req, Request, Body, Param } from '@nestjs/common';


@Controller('cars')
export class CarsController {

    @Get()
    findAll(@Req() request: Request): {} {
        return [
            {make: 'honda', model: 'accord'},
            {make: 'subaru', model: 'outback'},
            {make: 'fiat', model: '123 spider'}
        ];
    }

    @Get('showcase')
    showcase(@Req() request: Request): string {
        return 'this is the cars showcase';

    }

    @Get(':id')
    findOne(@Req() request: Request): {} {
        return {id: 25, make: 'tesla', model: 'model x'};
    }

    @Post()
    async create(@Body() carParams) {
        return `Received request to create a ${carParams.make}`;

    }

    @Post(':id')
    async update(@Body() carParams, @Param() params) {
        return `Edit a car: ${carParams.make} belonging to ${params.id}`;
    }

    @Post(':id/delete')
    async delete(@Param() params) {
        return `Delete car id: ${params.id}`;
    }




}
