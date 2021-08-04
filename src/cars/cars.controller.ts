import { Controller, Get, Req, Request } from '@nestjs/common';


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


}
