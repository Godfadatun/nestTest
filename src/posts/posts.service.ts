import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { PostEntity } from './posts.entity';
import { PostsInterface } from './posts-interface.interface';

// import { Post } from "./posts.model";
// import { PostsInterface } from "./posts-interface.interface";
// import { v4 as uuidv4 } from 'uuid';
// import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  // data()
  // private posts:Post[] = [];

  // mounted()
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>
  ){}


  // methods()
  async addPost(
    // title: string,
    // content: string,
    // sub_header: string,
    // category: string,
    data: PostsInterface
  ){
    // const id = uuidv4()
    // const newPost = new Post(id, title, content, sub_header, category);
    // this.posts.push(newPost);
    // return id

      const newPost = await this.postsRepository.create(
        // {title: title, content:content, sub_header:sub_header, category:category}
        data
      );
      const thePost = await this.postsRepository.save(newPost);
      return {
        status: 'success',
        message: 'Success',
        data: thePost
      }

    }

    async getAllPosts(){
      // return this.posts;
      return {
        status: 'success',
        message: 'Success',
        data: await this.postsRepository.find()
      }
  }

  async getOnePost( id: string ){
    // return this.findProducts(id).data
    return {
      status: 'success',
      message: 'Success',
      data: await this.postsRepository.findOne({where: { id:id }})
    }
  }

  async updateOnePost( id: string, post:PostsInterface ){
    // const thePost = this.findProducts(id).data
    // const index = this.findProducts(id).index

    // if (post.title) thePost.title = post.title;
    // if (post.content) thePost.content = post.content;
    // if (post.sub_header) thePost.sub_header = post.sub_header;
    // if (post.category) thePost.category = post.category;

    // this.posts[index] = thePost
    // return this.posts[index]

    const Item = await this.postsRepository.findOne({ id })
    const UpdatedItem = await this.postsRepository.update({ id }, post)
    if (!Item) {
      throw new NotFoundException("Can't find the Post");
    }
    return {
      status: 'success',
      message: 'Successfully Updated',
      data: await this.postsRepository.findOne({ id })
    }
  }

  async deleteOnePost( id: string ){
    // const deleteItem = this.findProducts(id).index
    // const Item = this.findPost(id).data
    // this.posts.splice(deleteItem, 1)
    // return {
    //   status: 'success',
    //   message: 'Successfully Deleted',
    //   data: Item
    // }

    const Item = await this.postsRepository.findOne({ id })
    if (!Item) {
      throw new NotFoundException("Can't find the Post");
    }
    await this.postsRepository.delete({ id })
    return {
      status: 'success',
      message: 'Successfully Deleted',
      data: Item
    }
  }

  // computed
   private async findPost(id: string){
    // const thePostIndex = this.posts.findIndex(element => element.id == id)
    const thePost = await this.postsRepository.findOne({ id })
    if (!thePost) {
      throw new NotFoundException("Can't find the Post");
    }
    return thePost
  }

}
