import { Controller, Get } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    create(){
        return "Getting all data"
    }
}
