import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PostEntity } from './posts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';


@Module({
  imports: [
    // TypeOrmModule.forFeature([PostEntity])
    TypeOrmModule.forFeature([PostEntity])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
