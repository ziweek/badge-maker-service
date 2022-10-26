import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BadgeModule } from './badge/badge.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }), 
    BadgeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
