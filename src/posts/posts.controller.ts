import { PostsService } from './posts.service';
import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor( private readonly postsService: PostsService ) {}
  @Post()
  createPost(
      @Body('title') postTitle: string,
      @Body('content') postContent: string,
      @Body('sub_header') postSub_header: string,
      @Body() post
    ):any {

      const thePost = this.postsService.addPost(
        postTitle,
        postContent,
        postSub_header,
        post.category
      );
      return {id: thePost}
  }

  @Get()
  getPosts():any {
    return this.postsService.getAllPosts()
  }

  @Get(':id')
  get_A_Post(@Param('id') id):any {
    return this.postsService.getOnePost(id)
  }

  @Patch(':id')
  UpdatePost(
    @Param('id') id:string,
    @Body() post
  ):any {
    return this.postsService.updateOnePost(id, post)
  }

  @Delete(':id')
  deletePost(@Param('id') id:string):any{
    return this.postsService.deleteOnePost(id)
  }
}
