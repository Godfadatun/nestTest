import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
// import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    PostsModule,
    TypeOrmModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
