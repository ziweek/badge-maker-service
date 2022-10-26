import { Controller, Get, Query, Render } from '@nestjs/common';
import { BadgeService } from './badge.service';

@Controller('badge')
export class BadgeController {
    constructor(private badgeService: BadgeService){};

    @Get()
    async getBadge(@Query('logo') logo:string,  @Query('color') color:string, @Query('name') name:string): Promise<any> {
        return this.badgeService.createBadge(logo, color, name)
    }
}
