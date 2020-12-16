import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from "./posts.model";
// import { PostsInterface } from "./posts-interface.interface";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostsService {
  // Data
  private posts:Post[] = [];


  // methods

  addPost(
    title: string,
    content: string,
    sub_header: string,
    category: string,
  ){
    const id = uuidv4()
    const newPost = new Post(id, title, content, sub_header, category);
    this.posts.push(newPost);
    return id
  }

  getAllPosts(){
    return this.posts;
  }

  getOnePost( id: string ){
    return this.findProducts(id).data
  }

  updateOnePost( id: string, post:any ){
    const thePost = this.findProducts(id).data
    const index = this.findProducts(id).index

    if (post.title) thePost.title = post.title;
    if (post.content) thePost.content = post.content;
    if (post.sub_header) thePost.sub_header = post.sub_header;
    if (post.category) thePost.category = post.category;

    this.posts[index] = thePost
    return this.posts[index]
  }

  deleteOnePost( id: string ){
    const deleteItem = this.findProducts(id).index
    const Item = this.findProducts(id).data
    this.posts.splice(deleteItem, 1)
    return {
      status: 'success',
      message: 'Successfully Deleted',
      data: Item
    }
  }

  // computed
  private findProducts(id: string){
    const thePostIndex = this.posts.findIndex(element => element.id == id)
    const thePost = this.posts.find(element => element.id == id)
    if (!thePost) {
      throw new NotFoundException("Can't find the Post");
    }
    return {
      data: thePost,
      index: thePostIndex
    }
  }

}
