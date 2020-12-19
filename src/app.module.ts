import { HttpsErrorFilter } from './shared/https-error.filter';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
// import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { APP_FILTER } from '@nestjs/core';




@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpsErrorFilter
  }],
})
export class AppModule {}
